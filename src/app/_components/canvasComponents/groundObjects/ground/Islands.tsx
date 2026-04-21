import { useLoader } from '@react-three/fiber';
import { useEffect, useMemo } from 'react';
import { RepeatWrapping, Shape, Texture, TextureLoader, Vector2 } from 'three';
import { useGroundClick } from './useGroundClick';

/**
 * 3개의 자유형 섬 + 랜드 브리지.
 *
 * 허브(원점)를 중심으로 **120° 균등** 배치 — Tech(북 90°) / Content(남서 210°) /
 * Playground(남동 -30°). 단일 템플릿 블롭을 회전·이동해 세 섬을 생성하므로 완전 대칭.
 *
 * 섬 간 이동은 좁은 오솔길이 아니라 **넓은 사다리꼴 땅(LandBridge)** 이 허브와 각 섬을
 * 잇는다. 결과적으로 "3개 독립섬" 보다는 "허브에서 세 방향으로 뻗은 하나의 대륙" 실루엣.
 *
 * 경계 처리: 섬/브리지 메시가 없는 곳은 포인터 이벤트가 잡히지 않으므로,
 * click-to-move 시스템이 자동으로 그 좌표를 타겟으로 삼지 않는다.
 *
 * 좌표는 월드 (x, z). `rotation-x={-PI/2}` 회전 때문에 Shape 생성 시 z 를 negate 한다.
 * 설계 문서: docs/plans/2026-04-21-3city-redesign-design.md
 */

// =============================================================================
// 섬 템플릿 & 120° 균등 배치
// =============================================================================

const ISLAND_DIST = 70;
const ISLAND_RADII = [50, 48, 52, 47, 51, 49, 53, 46, 50, 48, 52, 49, 51, 47, 50, 48, 52, 49];

function buildTemplate(radii: number[]): [number, number][] {
  const step = 360 / radii.length;
  const pts: [number, number][] = radii.map((r, i) => {
    const a = (i * step * Math.PI) / 180;
    return [r * Math.cos(a), r * Math.sin(a)];
  });
  pts.push(pts[0]);
  return pts;
}

const ISLAND_TEMPLATE = buildTemplate(ISLAND_RADII);

// 허브(plaza r=10) ↔ 섬을 잇는 **좁은 돌 보도** 위를 걷는 보행 영역.
// 실제 mesh 는 더 이상 그리지 않는다 (Path.tsx 의 돌 타일 2개가 시각 역할).
// 이 폴리곤은 walkableBoundary 에서 보행 가능 영역 판정용으로만 쓰인다.
// 템플릿은 +z 방향, 폭 10(±5), 길이 z=8~30 (허브 경계~섬 진입).
const BRIDGE_TEMPLATE: [number, number][] = [
  [-5, 8],
  [5, 8],
  [5, 30],
  [-5, 30],
];

export const TECH_ANGLE = Math.PI / 2; // 90°
export const CONTENT_ANGLE = Math.PI / 2 + (2 * Math.PI) / 3; // 210°
export const PLAYGROUND_ANGLE = Math.PI / 2 - (2 * Math.PI) / 3; // -30° (= 330°)

/**
 * 템플릿을 centerAngle 방향으로 회전한 뒤, 원점에서 distance 만큼 밀어낸다.
 * 템플릿의 자연 "바깥" 축은 +z 이므로, 회전각 = centerAngle - π/2.
 */
function placeAroundOrigin(
  points: [number, number][],
  centerAngle: number,
  distance: number,
): [number, number][] {
  const rot = centerAngle - Math.PI / 2;
  const c = Math.cos(rot);
  const s = Math.sin(rot);
  const cx = distance * Math.cos(centerAngle);
  const cz = distance * Math.sin(centerAngle);
  return points.map(([x, z]) => [c * x - s * z + cx, s * x + c * z + cz]);
}

export const TECH_ISLAND_POINTS = placeAroundOrigin(ISLAND_TEMPLATE, TECH_ANGLE, ISLAND_DIST);
export const CONTENT_ISLAND_POINTS = placeAroundOrigin(ISLAND_TEMPLATE, CONTENT_ANGLE, ISLAND_DIST);
export const PLAYGROUND_ISLAND_POINTS = placeAroundOrigin(ISLAND_TEMPLATE, PLAYGROUND_ANGLE, ISLAND_DIST);

export const TECH_BRIDGE = placeAroundOrigin(BRIDGE_TEMPLATE, TECH_ANGLE, 0);
export const CONTENT_BRIDGE = placeAroundOrigin(BRIDGE_TEMPLATE, CONTENT_ANGLE, 0);
export const PLAYGROUND_BRIDGE = placeAroundOrigin(BRIDGE_TEMPLATE, PLAYGROUND_ANGLE, 0);

// =============================================================================
// Shape 빌더 — world (x, z) → Shape 는 y 축을 반대로 씀
// =============================================================================

function shapeFromWorldPoints(points: [number, number][]): Shape {
  const shape = new Shape();
  shape.moveTo(points[0][0], -points[0][1]);
  const rest = points.slice(1).map(([x, z]) => new Vector2(x, -z));
  shape.splineThru(rest);
  return shape;
}

// =============================================================================
// 공통 섬 렌더러
// =============================================================================

function useClonedSandTexture(repeat: number) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const source = useLoader(TextureLoader as any, '/texture/sand.webp') as Texture;
  const texture = useMemo(() => {
    const t = source.clone();
    t.needsUpdate = true;
    return t;
  }, [source]);

  useEffect(() => {
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.repeat.x = repeat;
    texture.repeat.y = repeat;
  }, [texture, repeat]);

  return texture;
}

/**
 * 섬 밑면 흙/바위 덩어리 — 라퓨타 실루엣.
 *
 * 위쪽은 **수직 원통**(섬 두께감), 아래쪽은 **뾰족한 원뿔**(공중 부양 느낌).
 * 섬 중심(cx, cz)에 배치. 상·하 두 조각으로 나눠 CylinderGeometry 로 단순화.
 */
function IslandUnderside({ cx, cz }: { cx: number; cz: number }) {
  return (
    <group position={[cx, 0, cz]}>
      {/* 수직 본체 — 섬 두께감. 상단 46, 하단 42 로 미세하게 좁아짐. */}
      <mesh castShadow receiveShadow position={[0, -6, 0]}>
        <cylinderGeometry args={[46, 42, 12, 48]} />
        <meshStandardMaterial color="#8f6f4a" roughness={0.95} />
      </mesh>
      {/* 아래 뾰족 — 본체 하단에서 급격히 수렴해 라퓨타 뿌리 느낌. */}
      <mesh castShadow receiveShadow position={[0, -21, 0]}>
        <cylinderGeometry args={[42, 6, 18, 48]} />
        <meshStandardMaterial color="#7a5b3a" roughness={0.95} />
      </mesh>
    </group>
  );
}

function Island({
  points,
  center,
  tint,
}: {
  points: [number, number][];
  center: [number, number];
  tint: string;
}) {
  const texture = useClonedSandTexture(6);
  const handlers = useGroundClick();
  const shape = useMemo(() => shapeFromWorldPoints(points), [points]);

  return (
    <group>
      <mesh
        receiveShadow
        rotation-x={-Math.PI / 2}
        position-y={-0.001}
        {...handlers}
      >
        <shapeGeometry args={[shape, 24]} />
        <meshStandardMaterial map={texture} color={tint} />
      </mesh>
      <IslandUnderside cx={center[0]} cz={center[1]} />
    </group>
  );
}

// 섬 중심 world 좌표 — centerAngle 방향으로 ISLAND_DIST 만큼 밀어낸 지점.
const TECH_CENTER: [number, number] = [
  ISLAND_DIST * Math.cos(TECH_ANGLE),
  ISLAND_DIST * Math.sin(TECH_ANGLE),
];
const CONTENT_CENTER: [number, number] = [
  ISLAND_DIST * Math.cos(CONTENT_ANGLE),
  ISLAND_DIST * Math.sin(CONTENT_ANGLE),
];
const PLAYGROUND_CENTER: [number, number] = [
  ISLAND_DIST * Math.cos(PLAYGROUND_ANGLE),
  ISLAND_DIST * Math.sin(PLAYGROUND_ANGLE),
];

// =============================================================================
// Public exports
// =============================================================================

export function TechIsland() {
  return <Island points={TECH_ISLAND_POINTS} center={TECH_CENTER} tint="#a8d0e8" />;
}

export function ContentIsland() {
  return <Island points={CONTENT_ISLAND_POINTS} center={CONTENT_CENTER} tint="#f0b8d8" />;
}

export function PlaygroundIsland() {
  return <Island points={PLAYGROUND_ISLAND_POINTS} center={PLAYGROUND_CENTER} tint="#fde8a8" />;
}

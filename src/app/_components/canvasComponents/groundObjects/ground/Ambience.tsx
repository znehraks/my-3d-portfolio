import { useMemo } from 'react';
import { TECH_ANGLE, CONTENT_ANGLE, PLAYGROUND_ANGLE } from './Islands';

/**
 * 배경/환경 placeholder — 라퓨타 분위기 연출 (Phase 1).
 *
 * A1. 바다 플레인 — 섬들이 떠 있는 맥락. 빈 void 제거.
 * A2. 구름 레이어 — 섬 주변/아래로 떠다니는 구름 블롭.
 * A3. 수평선 fog — `<fog>` 로 먼 거리 자연 페이드.
 *
 * B1. 매달린 덩굴 — 각 섬 underside 가장자리에서 내려오는 녹/갈 cylinder.
 * B2. 부속 바위섬 — 각 섬 근처에 작은 공중 바위 1~2개.
 * B3. 폭포 — 섬 edge 에서 바다로 떨어지는 얇은 수색 plane.
 *
 * 모두 plain mesh placeholder. 추후 GLB / 셰이더로 교체.
 *
 * 섬 중심 world 좌표 (Islands.tsx 와 동일 공식):
 *   cx = ISLAND_DIST * cos(angle), cz = ISLAND_DIST * sin(angle)
 */

// Islands.tsx 와 동일한 ISLAND_DIST
const ISLAND_DIST = 70;

const ISLAND_CENTERS: { cx: number; cz: number; angle: number }[] = [
  { cx: ISLAND_DIST * Math.cos(TECH_ANGLE), cz: ISLAND_DIST * Math.sin(TECH_ANGLE), angle: TECH_ANGLE },
  { cx: ISLAND_DIST * Math.cos(CONTENT_ANGLE), cz: ISLAND_DIST * Math.sin(CONTENT_ANGLE), angle: CONTENT_ANGLE },
  { cx: ISLAND_DIST * Math.cos(PLAYGROUND_ANGLE), cz: ISLAND_DIST * Math.sin(PLAYGROUND_ANGLE), angle: PLAYGROUND_ANGLE },
];

// =============================================================================
// A1. 바다 플레인 — y=-35, 400×400, 파스텔 수색
// =============================================================================
/** 🧩 Phase 1 placeholder — 추후 물결 셰이더 / 반사맵 교체 */
function Sea() {
  return (
    <mesh rotation-x={-Math.PI / 2} position={[0, -35, 0]} receiveShadow>
      <planeGeometry args={[400, 400]} />
      <meshStandardMaterial color="#7fcfe5" roughness={0.75} metalness={0.05} />
    </mesh>
  );
}

// =============================================================================
// A2. 구름 레이어 — 흰색 blob 8개, 섬 아래 y=-15 ~ -20
// =============================================================================
/** 🧩 Phase 1 placeholder — 단순 sphere 3개 합친 덩어리. 추후 volumetric / sprite 교체 */
function CloudBlob({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  return (
    <group position={position} scale={scale}>
      <mesh>
        <sphereGeometry args={[4, 16, 12]} />
        <meshStandardMaterial color="#ffffff" roughness={1} />
      </mesh>
      <mesh position={[3, 0.5, 0.5]}>
        <sphereGeometry args={[3, 16, 12]} />
        <meshStandardMaterial color="#ffffff" roughness={1} />
      </mesh>
      <mesh position={[-2.8, 0.2, 0.3]}>
        <sphereGeometry args={[2.8, 16, 12]} />
        <meshStandardMaterial color="#f8fbff" roughness={1} />
      </mesh>
      <mesh position={[0.5, -0.6, 2]}>
        <sphereGeometry args={[2.5, 16, 12]} />
        <meshStandardMaterial color="#ffffff" roughness={1} />
      </mesh>
    </group>
  );
}

function Clouds() {
  // 각 섬 주변에 2개씩 — 안쪽(허브 방향) + 바깥쪽
  const positions = useMemo(() => {
    const out: { pos: [number, number, number]; scale: number }[] = [];
    ISLAND_CENTERS.forEach(({ cx, cz, angle }) => {
      const outward = 40;
      const inward = -25;
      const ox = Math.cos(angle);
      const oz = Math.sin(angle);
      // 바깥쪽 큰 구름
      out.push({
        pos: [cx + ox * outward, -18, cz + oz * outward],
        scale: 1.3,
      });
      // 섬 바로 아래쪽 구름
      out.push({
        pos: [cx + ox * inward, -14, cz + oz * inward],
        scale: 0.9,
      });
    });
    // 허브 주변 공기 채우는 2개
    out.push({ pos: [35, -20, 35], scale: 1.1 });
    out.push({ pos: [-35, -22, 25], scale: 1.0 });
    return out;
  }, []);

  return (
    <group>
      {positions.map((c, i) => (
        <CloudBlob key={i} position={c.pos} scale={c.scale} />
      ))}
    </group>
  );
}

// =============================================================================
// B1. 매달린 덩굴 — 각 섬 underside 가장자리에 4개씩, 뾰족한 아래로 내려옴
// =============================================================================
/** 🧩 Phase 1 placeholder — 얇은 세로 실린더. 추후 흔들리는 리본/덩굴 셰이더로 교체 */
function Vines() {
  const vineOffsets: { dx: number; dz: number; length: number }[] = [
    { dx: 30, dz: 0, length: 12 },
    { dx: -28, dz: 5, length: 14 },
    { dx: 10, dz: 32, length: 10 },
    { dx: 5, dz: -28, length: 13 },
  ];
  return (
    <group>
      {ISLAND_CENTERS.map(({ cx, cz }, i) => (
        <group key={i} position={[cx, 0, cz]}>
          {vineOffsets.map((v, j) => (
            <mesh
              key={j}
              position={[v.dx, -6 - v.length / 2, v.dz]}
              castShadow
            >
              <cylinderGeometry args={[0.35, 0.15, v.length, 6]} />
              <meshStandardMaterial color={j % 2 === 0 ? '#6b8e4e' : '#5a3d28'} roughness={0.9} />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
}

// =============================================================================
// B2. 부속 작은 바위섬 — 각 섬 근처 1개씩, 공중 부양
// =============================================================================
/** 🧩 Phase 1 placeholder — 작은 라퓨타 실루엣. 섬 본체의 1/5 크기 */
function MiniIsland({ cx, cz, dx, dz, y }: { cx: number; cz: number; dx: number; dz: number; y: number }) {
  return (
    <group position={[cx + dx, y, cz + dz]}>
      {/* 위 디스크 */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[7, 6, 2.5, 24]} />
        <meshStandardMaterial color="#b4956a" roughness={0.9} />
      </mesh>
      {/* 아래 뿌리 */}
      <mesh castShadow receiveShadow position={[0, -3, 0]}>
        <cylinderGeometry args={[6, 1.5, 4.5, 24]} />
        <meshStandardMaterial color="#7a5b3a" roughness={0.95} />
      </mesh>
      {/* 위 풀/이끼 한 덩어리 */}
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[2.5, 12, 10]} />
        <meshStandardMaterial color="#8fb66a" roughness={0.95} />
      </mesh>
    </group>
  );
}

function MiniIslands() {
  return (
    <group>
      {ISLAND_CENTERS.map(({ cx, cz, angle }, i) => {
        // 섬 바깥 방향으로 오프셋
        const ox = Math.cos(angle);
        const oz = Math.sin(angle);
        return (
          <MiniIsland
            key={i}
            cx={cx}
            cz={cz}
            dx={ox * 58}
            dz={oz * 58}
            y={-4}
          />
        );
      })}
    </group>
  );
}

// =============================================================================
// B3. 폭포 — 각 섬 edge 1군데, 얇은 세로 plane
// =============================================================================
/** 🧩 Phase 1 placeholder — 반투명 수색 plane. 추후 물 흐름 셰이더 교체 */
function Waterfall({ cx, cz, angle }: { cx: number; cz: number; angle: number }) {
  // 섬 바깥 방향으로 edge 위치
  const edgeOffset = 40;
  const ex = cx + Math.cos(angle) * edgeOffset;
  const ez = cz + Math.sin(angle) * edgeOffset;
  return (
    <group position={[ex, -18, ez]} rotation-y={angle + Math.PI / 2}>
      <mesh>
        <planeGeometry args={[6, 28]} />
        <meshStandardMaterial
          color="#b8e8f0"
          transparent
          opacity={0.55}
          roughness={0.3}
          emissive="#a0dae8"
          emissiveIntensity={0.15}
        />
      </mesh>
      {/* 폭포 하단 splash 퍼프 */}
      <mesh position={[0, -15, 0]}>
        <sphereGeometry args={[3.5, 12, 10]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.7} roughness={1} />
      </mesh>
    </group>
  );
}

function Waterfalls() {
  return (
    <group>
      {ISLAND_CENTERS.map(({ cx, cz, angle }, i) => (
        <Waterfall key={i} cx={cx} cz={cz} angle={angle} />
      ))}
    </group>
  );
}

// =============================================================================
// Public export
// =============================================================================

/**
 * 환경 전체 — Sea + Clouds + Vines + MiniIslands + Waterfalls.
 * `<fog>` 는 Canvas 에서 직접 제어하므로 여기 포함하지 않음 (root scene-level).
 */
export function Ambience() {
  return (
    <>
      <Sea />
      <Clouds />
      <Vines />
      <MiniIslands />
      <Waterfalls />
    </>
  );
}

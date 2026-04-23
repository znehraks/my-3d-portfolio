import { IPosition } from '@/types';

/**
 * AmbientDetails — 월드 앰비언트 디테일 (꽃/부시/바위/풍선/산 실루엣).
 *
 * 위치는 결정론적 하드코딩 배열 — Math.random() 사용 안 함.
 * 각 요소에 docs/meshy-assets.md 앵커 명시.
 *
 * 섬 중심 (월드 좌표):
 *   Tech      x≈0,     z≈70   (TECH_ANGLE = π/2)
 *   Content   x≈-60.6, z≈-35  (CONTENT_ANGLE = 210°)
 *   Playground x≈60.6, z≈-35  (PLAYGROUND_ANGLE = 330°)
 * 섬 반경 ≈ 50, 바위/부시/꽃은 섬 중심에서 반경 40 이내로 제한.
 */

// =============================================================================
// 1. 꽃 패치 15개 — 섬마다 5개씩
//    🧩 docs/meshy-assets.md#flower-patch
// =============================================================================
const FLOWER_COLORS = ['#ff8fab', '#ffd93d', '#a8d8ea', '#f6c6ea', '#ffb0c8'];

interface FlowerData {
  position: IPosition;
  headColor: string;
}

const FLOWER_POSITIONS: FlowerData[] = [
  // Tech 섬 (중심 x=0, z=70)
  { position: [8, 0.5, 62], headColor: '#ff8fab' },
  { position: [-12, 0.5, 75], headColor: '#ffd93d' },
  { position: [15, 0.5, 80], headColor: '#a8d8ea' },
  { position: [-5, 0.5, 85], headColor: '#f6c6ea' },
  { position: [20, 0.5, 68], headColor: '#ffb0c8' },
  // Content 섬 (중심 x≈-60.6, z≈-35)
  { position: [-55, 0.5, -28], headColor: '#ffd93d' },
  { position: [-70, 0.5, -40], headColor: '#ff8fab' },
  { position: [-48, 0.5, -45], headColor: '#a8d8ea' },
  { position: [-65, 0.5, -25], headColor: '#ffb0c8' },
  { position: [-75, 0.5, -30], headColor: '#f6c6ea' },
  // Playground 섬 (중심 x≈60.6, z≈-35)
  { position: [55, 0.5, -28], headColor: '#a8d8ea' },
  { position: [72, 0.5, -42], headColor: '#ff8fab' },
  { position: [48, 0.5, -44], headColor: '#ffd93d' },
  { position: [68, 0.5, -25], headColor: '#f6c6ea' },
  { position: [78, 0.5, -32], headColor: '#ffb0c8' },
];

// =============================================================================
// 2. 부시 10개 — 섬 가장자리 위주
//    🧩 docs/meshy-assets.md#bush-small
// =============================================================================
const BUSH_COLORS = ['#6fa86f', '#8fc48f', '#6fa86f', '#8fc48f', '#6fa86f'];

const BUSH_POSITIONS: IPosition[] = [
  // Tech 섬
  [22, 0.8, 65],
  [-20, 0.8, 78],
  [5, 0.8, 95],
  [-18, 0.8, 58],
  // Content 섬
  [-82, 0.8, -38],
  [-52, 0.8, -62],
  [-42, 0.8, -22],
  // Playground 섬
  [82, 0.8, -38],
  [52, 0.8, -62],
  [42, 0.8, -22],
];

// =============================================================================
// 3. 작은 바위 12개 — 섬 + 허브 주변
//    🧩 docs/meshy-assets.md#rock-small
// =============================================================================
interface RockData {
  position: IPosition;
  scale: [number, number, number];
  color: string;
}

const ROCK_POSITIONS: RockData[] = [
  // Tech 섬
  { position: [-18, 0.4, 64], scale: [1.8, 1.2, 1.5], color: '#9a9b9e' },
  { position: [18, 0.3, 82], scale: [1.4, 1.0, 1.6], color: '#7d7e80' },
  { position: [3, 0.5, 92], scale: [2.0, 1.3, 1.8], color: '#9a9b9e' },
  { position: [-15, 0.3, 88], scale: [1.2, 0.9, 1.3], color: '#7d7e80' },
  // Content 섬
  { position: [-78, 0.4, -20], scale: [1.6, 1.1, 1.4], color: '#9a9b9e' },
  { position: [-48, 0.3, -55], scale: [1.8, 1.2, 1.5], color: '#7d7e80' },
  { position: [-70, 0.4, -52], scale: [1.3, 1.0, 1.4], color: '#9a9b9e' },
  // Playground 섬
  { position: [78, 0.4, -20], scale: [1.6, 1.1, 1.4], color: '#7d7e80' },
  { position: [48, 0.3, -55], scale: [1.8, 1.2, 1.5], color: '#9a9b9e' },
  { position: [70, 0.4, -52], scale: [1.3, 1.0, 1.4], color: '#7d7e80' },
  // 허브 주변 (원점 근처, 섬 브리지 옆)
  { position: [8, 0.3, 12], scale: [1.5, 1.0, 1.6], color: '#9a9b9e' },
  { position: [-9, 0.3, 10], scale: [1.2, 0.8, 1.3], color: '#7d7e80' },
];

// =============================================================================
// 4. 풍선 8개 — y=25~40, 반경 150~200 원 둘레
//    🧩 docs/meshy-assets.md#floating-balloon
// =============================================================================
const BALLOON_COLORS = ['#ff6b6b', '#ffd93d', '#4ecdc4', '#a8d8ea', '#f6c6ea', '#ffb0c8', '#ff6b6b', '#4ecdc4'];

interface BalloonData {
  position: IPosition;
  color: string;
}

const BALLOON_POSITIONS: BalloonData[] = [
  { position: [155, 32, 0], color: BALLOON_COLORS[0] },
  { position: [110, 28, 110], color: BALLOON_COLORS[1] },
  { position: [0, 38, 165], color: BALLOON_COLORS[2] },
  { position: [-118, 30, 105], color: BALLOON_COLORS[3] },
  { position: [-160, 35, -15], color: BALLOON_COLORS[4] },
  { position: [-105, 27, -125], color: BALLOON_COLORS[5] },
  { position: [15, 40, -170], color: BALLOON_COLORS[6] },
  { position: [125, 33, -115], color: BALLOON_COLORS[7] },
];

// =============================================================================
// 5. 배경 산 실루엣 4개 — 반경 250+, y=0~20, 큰 원뿔
//    🧩 docs/meshy-assets.md#distant-mountain
// =============================================================================
interface MountainData {
  position: IPosition;
  size: [number, number, number]; // radiusBottom, height, segments
  color: string;
}

const MOUNTAIN_POSITIONS: MountainData[] = [
  { position: [255, 0, 20], size: [28, 55, 8], color: '#6a7a9a' },
  { position: [-180, 0, -195], size: [22, 44, 8], color: '#546680' },
  { position: [80, 0, -265], size: [32, 62, 8], color: '#6a7a9a' },
  { position: [-260, 0, 75], size: [25, 50, 8], color: '#546680' },
];

// =============================================================================
// Sub-components
// =============================================================================

function FlowerPatch({ position, headColor }: FlowerData) {
  return (
    // 🧩 docs/meshy-assets.md#flower-patch
    <group position={position}>
      {/* 줄기 */}
      <mesh castShadow receiveShadow position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.06, 0.08, 1.0, 6]} />
        <meshStandardMaterial color="#4a7a4a" roughness={0.9} />
      </mesh>
      {/* 꽃머리 */}
      <mesh castShadow receiveShadow position={[0, 1.1, 0]}>
        <sphereGeometry args={[0.25, 8, 6]} />
        <meshStandardMaterial color={headColor} roughness={0.8} />
      </mesh>
    </group>
  );
}

function BushSmall({ position, colorIndex }: { position: IPosition; colorIndex: number }) {
  const color = BUSH_COLORS[colorIndex % BUSH_COLORS.length];
  return (
    // 🧩 docs/meshy-assets.md#bush-small
    <group position={position}>
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1.4, 10, 8]} />
        <meshStandardMaterial color={color} roughness={0.95} />
      </mesh>
      <mesh castShadow receiveShadow position={[1.0, -0.3, 0.4]}>
        <sphereGeometry args={[1.0, 10, 8]} />
        <meshStandardMaterial color={BUSH_COLORS[(colorIndex + 1) % BUSH_COLORS.length]} roughness={0.95} />
      </mesh>
      <mesh castShadow receiveShadow position={[-0.8, -0.2, 0.5]}>
        <sphereGeometry args={[0.9, 10, 8]} />
        <meshStandardMaterial color={color} roughness={0.95} />
      </mesh>
    </group>
  );
}

function RockSmall({ position, scale, color }: RockData) {
  return (
    // 🧩 docs/meshy-assets.md#rock-small
    <group position={position}>
      <mesh castShadow receiveShadow scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} roughness={0.95} metalness={0.05} />
      </mesh>
      {/* 작은 보조 바위 */}
      <mesh castShadow receiveShadow position={[scale[0] * 0.5, -scale[1] * 0.1, scale[2] * 0.3]} scale={[scale[0] * 0.6, scale[1] * 0.7, scale[2] * 0.6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} roughness={0.97} metalness={0.02} />
      </mesh>
    </group>
  );
}

function FloatingBalloon({ position, color }: BalloonData) {
  return (
    // 🧩 docs/meshy-assets.md#floating-balloon
    <group position={position}>
      {/* 풍선 구 */}
      <mesh>
        <sphereGeometry args={[2.2, 12, 10]} />
        <meshStandardMaterial color={color} roughness={0.6} metalness={0.05} />
      </mesh>
      {/* 실 (얇은 원기둥, 아래로) */}
      <mesh position={[0, -3.5, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 4.0, 4]} />
        <meshStandardMaterial color="#ffffff" roughness={1.0} />
      </mesh>
    </group>
  );
}

function DistantMountain({ position, size, color }: MountainData) {
  const [radiusBottom, height, segments] = size;
  return (
    // 🧩 docs/meshy-assets.md#distant-mountain
    <mesh position={position}>
      <coneGeometry args={[radiusBottom, height, segments]} />
      <meshStandardMaterial color={color} roughness={0.97} />
    </mesh>
  );
}

// =============================================================================
// Public export
// =============================================================================

/**
 * 월드 앰비언트 디테일:
 *   꽃 패치 15개 + 부시 10개 + 바위 12개 + 풍선 8개 + 산 4개
 *   총 렌더 요소: 49개 (단, 각 요소는 복수 mesh 조합)
 *
 * wiring: GroundObjects.tsx 에서 <AmbientDetails /> 추가.
 */
export function AmbientDetails() {
  return (
    <group name="ambient-details">
      {/* 꽃 패치 15개 */}
      {FLOWER_POSITIONS.map((f, i) => (
        <FlowerPatch key={`flower-${i}`} position={f.position} headColor={f.headColor} />
      ))}

      {/* 부시 10개 */}
      {BUSH_POSITIONS.map((p, i) => (
        <BushSmall key={`bush-${i}`} position={p} colorIndex={i} />
      ))}

      {/* 바위 12개 */}
      {ROCK_POSITIONS.map((r, i) => (
        <RockSmall key={`rock-${i}`} position={r.position} scale={r.scale} color={r.color} />
      ))}

      {/* 풍선 8개 */}
      {BALLOON_POSITIONS.map((b, i) => (
        <FloatingBalloon key={`balloon-${i}`} position={b.position} color={b.color} />
      ))}

      {/* 산 실루엣 4개 */}
      {MOUNTAIN_POSITIONS.map((m, i) => (
        <DistantMountain key={`mountain-${i}`} position={m.position} size={m.size} color={m.color} />
      ))}
    </group>
  );
}

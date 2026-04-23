import { IPosition } from '@/types';
import { GLBProp } from '../../glb/GLBProp';
import { StreetLamp } from '../../lighting/StreetLamp';

// 허브 반경(PLAZA_RADIUS = 10) 기준
const HUB_R = 10;

// ── 벤치 (90° 간격, 분수 외곽 r ≈ 4.5) ──────────────────────────────────────
const BENCH_R = 4.5;
const BENCH_Y = 0;
const BENCH_ANGLES = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2];
const BENCH_POSITIONS: IPosition[] = BENCH_ANGLES.map((a) => [
  BENCH_R * Math.cos(a),
  BENCH_Y,
  BENCH_R * Math.sin(a),
]);

// ── 맵 스탠드 (허브 북쪽 가장자리, z ≈ -7) ──────────────────────────────────
const MAP_SIGN_X = 0;
const MAP_SIGN_Z = -7;

// ── 브리지 진입 가로등 ────────────────────────────────────────────────────────
const TECH_ANGLE = Math.PI / 2;
const CONTENT_ANGLE = Math.PI / 2 + (2 * Math.PI) / 3;
const PLAYGROUND_ANGLE = Math.PI / 2 - (2 * Math.PI) / 3;

const LAMP_R = HUB_R + 1;

/** 브리지 각도 기준 단일 가로등 (브리지 진입점 중앙) */
function lampAt(bridgeAngle: number): IPosition {
  return [LAMP_R * Math.cos(bridgeAngle), 0, LAMP_R * Math.sin(bridgeAngle)];
}

const LAMP_POSITIONS: IPosition[] = [
  lampAt(TECH_ANGLE),
  lampAt(CONTENT_ANGLE),
  lampAt(PLAYGROUND_ANGLE),
];

export function HubProps() {
  return (
    <group>
      {BENCH_POSITIONS.map((pos, i) => (
        <GLBProp
          key={`hub-bench-${i}`}
          src="/models/hub_bench.glb"
          position={pos}
          rotationY={(BENCH_ANGLES[i] + Math.PI / 2) % (Math.PI * 2)}
          scale={2.5}
        />
      ))}

      <GLBProp
        src="/models/hub_map_sign.glb"
        position={[MAP_SIGN_X, 0, MAP_SIGN_Z]}
        scale={3}
      />

      {LAMP_POSITIONS.map((pos, i) => (
        <StreetLamp key={`lamp-post-${i}`} position={pos} />
      ))}
    </group>
  );
}

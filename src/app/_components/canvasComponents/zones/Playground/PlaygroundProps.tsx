import { IPosition } from '@/types';
import { GLBProp } from '../../glb/GLBProp';
import { StreetLamp } from '../../lighting/StreetLamp';

// Playground 섬 중심 (월드 좌표) — PLAYGROUND_ANGLE=-π/6, ISLAND_DIST=70, cx≈60.6 / cz≈-35

const CAROUSEL_POS: IPosition = [62, 0, -20];
const CAROUSEL_SCALE = 5;

const BENCH_POSITIONS: IPosition[] = [
  [50, 0, -22],
  [68, 0, -48],
];
const PICNIC_BENCH_SCALE = 2.8;

// 회전목마 전방 + 섬 남측 2개
const PLAYGROUND_LAMPS: IPosition[] = [
  [56, 0, -26],
  [68, 0, -14],
  [58, 0, -44],
];

export function PlaygroundProps() {
  return (
    <group>
      <GLBProp src="/models/carousel.glb" position={CAROUSEL_POS} scale={CAROUSEL_SCALE} />
      {BENCH_POSITIONS.map((pos, i) => (
        <GLBProp
          key={`picnic-bench-${i}`}
          src="/models/picnic_bench.glb"
          position={pos}
          scale={PICNIC_BENCH_SCALE}
        />
      ))}
      {PLAYGROUND_LAMPS.map((pos, i) => (
        <StreetLamp key={`playground-lamp-${i}`} position={pos} color="#ffd89a" />
      ))}
    </group>
  );
}

/**
 * Content City (남서쪽 섬) — 보강용 플레이스홀더 소품 모음
 *
 * Content 섬 중심(world): CONTENT_CENTER ≈ (-60.6, -35) (x, z)
 * CONTENT_ANGLE = 210° (Math.PI/2 + 2*Math.PI/3)
 * ISLAND_DIST = 70
 *
 * 기존 플레이스홀더 (중복 방지):
 *   Stage88ight      [-85, 0, -25]
 *   ArcadeMemepush   [-85, 0, -55]
 *   BoothComingSoon  [-85, 0, -85]
 *
 * 모든 새 소품은 기존 위치로부터 최소 4유닛 이상 이격.
 */

import { GLBProp } from '../../glb/GLBProp';
import { StreetLamp } from '../../lighting/StreetLamp';

const BALLOON_MARKET_POS: [number, number, number] = [-50, 0, -20];
const BALLOON_MARKET_SCALE = 4.5;

const OUTDOOR_SCREEN_POS: [number, number, number] = [-65, 0, -40];
const OUTDOOR_SCREEN_SCALE = 4.5;

const PICNIC_A_POS: [number, number, number] = [-55, 0, -50];
const PICNIC_B_POS: [number, number, number] = [-72, 0, -28];
const PICNIC_SCALE = 2.8;

// balloon market 전방 / 스크린 전방 / 피크닉 옆
const CONTENT_LAMPS: [number, number, number][] = [
  [-46, 0, -14],
  [-58, 0, -35],
  [-63, 0, -53],
];

export function ContentCityProps() {
  return (
    <group>
      <GLBProp
        src="/models/balloon_market.glb"
        position={BALLOON_MARKET_POS}
        scale={BALLOON_MARKET_SCALE}
      />
      <GLBProp
        src="/models/outdoor_screen.glb"
        position={OUTDOOR_SCREEN_POS}
        scale={OUTDOOR_SCREEN_SCALE}
      />
      <GLBProp src="/models/picnic_bench.glb" position={PICNIC_A_POS} scale={PICNIC_SCALE} />
      <GLBProp src="/models/picnic_bench.glb" position={PICNIC_B_POS} scale={PICNIC_SCALE} />
      {CONTENT_LAMPS.map((pos, i) => (
        <StreetLamp key={`content-lamp-${i}`} position={pos} color="#ffd0a8" />
      ))}
    </group>
  );
}

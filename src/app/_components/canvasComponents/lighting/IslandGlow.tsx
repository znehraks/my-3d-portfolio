'use client';

/**
 * 각 섬/허브 중앙에 은은한 야경 포인트 라이트를 띄워
 * 밤에도 오브젝트가 예쁘게 빛나도록 한다.
 * 존당 1개씩 총 4개 — 지면 위 높이에서 색조만 다르게 분위기 연출.
 */

type GlowSpot = {
  key: string;
  position: [number, number, number];
  color: string;
  intensity: number;
  distance: number;
};

const GLOW_SPOTS: GlowSpot[] = [
  { key: 'hub', position: [0, 22, 0], color: '#ffe4a8', intensity: 3.2, distance: 55 },
  // Tech 섬 (북쪽 z+70)
  { key: 'tech', position: [0, 24, 70], color: '#a8c4ff', intensity: 3.5, distance: 60 },
  // Content 섬 (남서)
  { key: 'content', position: [-60.62, 24, -35], color: '#ffb8d8', intensity: 3.5, distance: 60 },
  // Playground 섬 (남동)
  { key: 'playground', position: [60.62, 24, -35], color: '#ffd9a8', intensity: 3.5, distance: 60 },
];

export function IslandGlow() {
  return (
    <>
      {GLOW_SPOTS.map((s) => (
        <pointLight
          key={`island-glow-${s.key}`}
          position={s.position}
          color={s.color}
          intensity={s.intensity}
          distance={s.distance}
          decay={1.5}
          castShadow={false}
        />
      ))}
    </>
  );
}

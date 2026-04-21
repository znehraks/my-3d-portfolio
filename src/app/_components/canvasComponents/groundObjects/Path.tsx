import React, { useMemo } from 'react';
import { useGLTF, Instances, Instance } from '@react-three/drei';
import { Mesh } from 'three';
import { IPosition } from '@/types';
import { useGroundClick } from './ground/useGroundClick';

/**
 * 섬 내부 장식 경로 + **허브↔섬 연결 돌 보도** (2 스톤씩).
 *
 * 허브-섬 연결은 더 이상 넓은 LandBridge 메시가 아니라 이 돌 타일 2개씩 깔린
 * 좁은 보도 — 플레이어는 `walkableBoundary.ts` 의 *_BRIDGE 폴리곤(폭 10) 안쪽만
 * 이동 가능. 시각적으로 "돌 위를 걷는" 느낌.
 *
 * Career Street 내부(z=32~80, x=0) 는 `CareerStreet.tsx` 의 자체 StreetPath 가
 * 중복되지 않게 커버하므로 여기서 z+ 주축은 생략.
 */

const STEP = 8;

// 허브(r=10) 중심에서 각 섬 방향으로 2열 × 2개 = **총 4개씩** 돌 배치.
// 길이축 거리: 14, 22 (허브 바깥 4, 12) | 폭축 offset: ±3 (좌우 2열)
const BRIDGE_STONE_DISTANCES = [14, 22];
const BRIDGE_STONE_LATERAL = [-3, 3];
const TECH_ANGLE_RAD = Math.PI / 2;
const CONTENT_ANGLE_RAD = Math.PI / 2 + (2 * Math.PI) / 3;
const PLAYGROUND_ANGLE_RAD = Math.PI / 2 - (2 * Math.PI) / 3;

function stonesAlongAngle(angle: number): IPosition[] {
  // 방향축 (cos, sin), 수직축 (-sin, cos) — world (x, z) 평면
  const fx = Math.cos(angle);
  const fz = Math.sin(angle);
  const nx = -Math.sin(angle);
  const nz = Math.cos(angle);
  const out: IPosition[] = [];
  for (const d of BRIDGE_STONE_DISTANCES) {
    for (const o of BRIDGE_STONE_LATERAL) {
      out.push([d * fx + o * nx, 0, d * fz + o * nz]);
    }
  }
  return out;
}

const techBridgeStones = stonesAlongAngle(TECH_ANGLE_RAD);
const contentBridgeStones = stonesAlongAngle(CONTENT_ANGLE_RAD);
const playgroundBridgeStones = stonesAlongAngle(PLAYGROUND_ANGLE_RAD);

function axisRange(start: number, end: number, fixed: number, isX: boolean): IPosition[] {
  const out: IPosition[] = [];
  const direction = end >= start ? 1 : -1;
  for (let v = start; direction > 0 ? v <= end : v >= end; v += STEP * direction) {
    out.push(isX ? [v, 0, fixed] : [fixed, 0, v]);
  }
  return out;
}

// === Tech 섬 내부 ===
// Skill Tower 접근 (x=-8..-32, z=55)
const skillTowerBranch = axisRange(-8, -32, 55, true);
// AI 부스 스파인 (x=35, z=40..88)
const aiBoothSpine = axisRange(40, 88, 35, false);
// AI 부스 진입 (x=8..32 at z=60)
const aiBoothAccess = axisRange(8, 32, 60, true);
// Hall of Fame 연장 (x=0, z=80..96)
const hallOfFameExt = axisRange(80, 96, 0, false);

// === Content 섬 내부 ===
const contentSpine = axisRange(0, -80, -80, false); // (-80, 0..-80)
const contentApproach = axisRange(-32, -72, 0, true); // 동쪽 진입 (-32..-72, 0)

// === Playground 섬 내부 ===
const playgroundSpine = axisRange(0, -64, 50, false); // (50, 0..-64)
const playgroundApproach = axisRange(32, 72, 0, true); // 서쪽 진입 (32..72, 0)

const positions: IPosition[] = [
  // 허브 → 각 섬 방향 돌 보도 (2개씩, 총 6개)
  ...techBridgeStones,
  ...contentBridgeStones,
  ...playgroundBridgeStones,
  // 섬 내부 장식 경로
  ...skillTowerBranch,
  ...aiBoothSpine,
  ...aiBoothAccess,
  ...hallOfFameExt,
  ...contentSpine,
  ...contentApproach,
  ...playgroundSpine,
  ...playgroundApproach,
];

export function Paths() {
  const gltf = useGLTF('/models/Rock Path Round Wide.glb');
  const { scene } = gltf;
  const handlers = useGroundClick();

  const mesh = useMemo(() => {
    let _mesh: Mesh | null = null;
    scene.traverse((child) => {
      if (child instanceof Mesh && child.isMesh) {
        _mesh = child;
      }
    });
    if (!_mesh) {
      throw new Error('No mesh found');
    }
    return _mesh as Mesh;
  }, [scene]);

  return (
    <Instances geometry={mesh.geometry} material={mesh.material} {...handlers}>
      {positions.map((position, index) => (
        <Instance key={`path-${index}-${position[0]}-${position[2]}`} position={position} scale={4} />
      ))}
    </Instances>
  );
}

useGLTF.preload('/models/Rock Path Round Wide.glb');

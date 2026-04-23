'use client';

import { IPosition } from '@/types';

type Props = {
  position: IPosition;
  /** 램프 높이 (기본 3.5) */
  height?: number;
  /** 램프 빛 색상 */
  color?: string;
  /** PointLight 강도 (기본 25) */
  intensity?: number;
  /** PointLight 반경 (기본 22) */
  distance?: number;
};

/**
 * 가로등 — 기둥 + 발광 헤드(emissive) + PointLight + 외곽 글로우 스피어.
 * emissive 를 크게 두어 주간에도 헤드가 확실히 빛나 보인다.
 */
export function StreetLamp({
  position,
  height = 3.5,
  color = '#ffd89a',
  intensity = 25,
  distance = 22,
}: Props) {
  const headY = height + 0.2;
  return (
    <group position={position}>
      {/* 기둥 */}
      <mesh castShadow receiveShadow position={[0, height / 2, 0]}>
        <cylinderGeometry args={[0.1, 0.12, height, 10]} />
        <meshStandardMaterial color="#3a4a6e" roughness={0.6} metalness={0.4} />
      </mesh>
      {/* 램프 헤드 (강한 emissive) */}
      <mesh position={[0, headY, 0]}>
        <boxGeometry args={[0.55, 0.45, 0.55]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={4}
          roughness={0.3}
        />
      </mesh>
      {/* 글로우 오라 (반투명 구체, 빛 퍼짐 느낌) */}
      <mesh position={[0, headY, 0]}>
        <sphereGeometry args={[0.75, 12, 12]} />
        <meshBasicMaterial color={color} transparent opacity={0.35} />
      </mesh>
      <mesh position={[0, headY, 0]}>
        <sphereGeometry args={[1.2, 12, 12]} />
        <meshBasicMaterial color={color} transparent opacity={0.12} />
      </mesh>
      {/* 실제 조명 */}
      <pointLight
        position={[0, headY, 0]}
        color={color}
        intensity={intensity}
        distance={distance}
        decay={1.2}
        castShadow={false}
      />
    </group>
  );
}

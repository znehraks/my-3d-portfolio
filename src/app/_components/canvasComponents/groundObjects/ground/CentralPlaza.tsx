import { useLoader } from '@react-three/fiber';
import { useEffect } from 'react';
import { RepeatWrapping, Texture, TextureLoader } from 'three';
import { useGroundClick } from './useGroundClick';

/**
 * 🧩 Tier 1 placeholder — replace with `/texture/plaza_ground.webp`
 * 방사형 돌판 텍스처 납품되면 map 만 교체.
 *
 * 3도시 교차점(0, 0) 반경 {@link PLAZA_RADIUS} 원형 바닥. Tech/Content/Playground 의
 * 좁은 틈을 이 원판이 덮어 seam 을 감춘다. y=0 평면에서 +0.005 띄워 z-fighting 방지.
 */
export const PLAZA_RADIUS = 10;

export function CentralPlaza() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const texture = useLoader(TextureLoader as any, '/texture/sand.webp') as Texture;
  const handlers = useGroundClick();

  useEffect(() => {
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.repeat.x = 2;
    texture.repeat.y = 2;
  }, [texture]);

  return (
    <mesh
      receiveShadow
      rotation-x={-Math.PI / 2}
      position={[0, 0.005, 0]}
      {...handlers}
    >
      <circleGeometry args={[PLAZA_RADIUS, 48]} />
      <meshStandardMaterial map={texture} color="#e8dfc6" />
    </mesh>
  );
}

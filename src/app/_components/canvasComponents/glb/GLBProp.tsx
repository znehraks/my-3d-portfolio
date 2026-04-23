'use client';

import { useGLTF } from '@react-three/drei';
import { useMemo } from 'react';
import { Box3, Object3D, Mesh } from 'three';

type Props = {
  src: string;
  position?: [number, number, number];
  rotationY?: number;
  scale?: number | [number, number, number];
  castShadow?: boolean;
  receiveShadow?: boolean;
  /** true 일 때 모델 bbox 의 minY 만큼 y 를 올려 지면에 딱 붙인다. 기본 true. */
  groundAlign?: boolean;
};

export function GLBProp({
  src,
  position = [0, 0, 0],
  rotationY = 0,
  scale = 1,
  castShadow = true,
  receiveShadow = true,
  groundAlign = true,
}: Props) {
  const { scene } = useGLTF(src);
  const { cloned, minY } = useMemo(() => {
    const s = scene.clone(true);
    s.traverse((o: Object3D) => {
      const m = o as Mesh;
      if (m.isMesh) {
        m.castShadow = castShadow;
        m.receiveShadow = receiveShadow;
      }
    });
    const box = new Box3().setFromObject(s);
    return { cloned: s, minY: box.min.y };
  }, [scene, castShadow, receiveShadow]);

  const s: [number, number, number] =
    typeof scale === 'number' ? [scale, scale, scale] : scale;
  const yLift = groundAlign ? -minY * s[1] : 0;
  const finalPos: [number, number, number] = [position[0], position[1] + yLift, position[2]];

  return (
    <primitive
      object={cloned}
      position={finalPos}
      rotation-y={rotationY}
      scale={s}
    />
  );
}

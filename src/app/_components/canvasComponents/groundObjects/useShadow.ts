import { useEffect } from 'react';
import { Mesh, Object3D } from 'three';

/**
 * sideEffect: 모든 Mesh에 그림자를 적용합니다.
 */
export const useShadow = ({ scene }: { scene: Object3D }) => {
  useEffect(() => {
    scene.traverse((object) => {
      const mesh = object as Mesh;
      if (mesh.isMesh) {
        mesh.castShadow = true;
        mesh.receiveShadow = true;
      }
    });
  }, [scene]);
};

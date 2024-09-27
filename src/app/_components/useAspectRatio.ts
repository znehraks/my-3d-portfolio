import { useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera } from 'three';

export const useAspectRatio = () => {
  const { camera, size } = useThree();
  const aspect = size.width / size.height;

  useFrame(() => {
    if (camera instanceof PerspectiveCamera) {
      if (camera.aspect !== aspect) {
        camera.aspect = aspect;
        camera.updateProjectionMatrix();
      }
    }
  });

  return null;
};

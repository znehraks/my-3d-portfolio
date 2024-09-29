import { useGLTF } from '@react-three/drei';
import { useShadow } from './useShadow';

export function WoodenSign() {
  const { scene } = useGLTF('/models/Wooden Sign.glb');

  useShadow({ scene });

  return <primitive object={scene} scale={8} position={[-4, 0, -4]} />;
}

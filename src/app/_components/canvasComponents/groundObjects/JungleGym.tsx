import { useGLTF } from '@react-three/drei';
import { useMemo } from 'react';
import { Vector3 } from 'three';
import { useShadow } from './useShadow';

const name = 'ground-jungleGym';
const scale = 1.5;
export function JungleGym() {
  const { scene } = useGLTF('/models/Jungle gym.glb');
  const position = useMemo(() => new Vector3(-24, 0, 12), []);

  useShadow({ scene });

  return <primitive visible name={name} scale={[scale, scale, scale]} position={position} object={scene} />;
}

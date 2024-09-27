import { useGLTF } from '@react-three/drei';
import { useMemo } from 'react';
import { Vector3 } from 'three';
import { useShadow } from './useShadow';

const name = 'ground-swing';
const scale = 0.1;
export function Swing() {
  const { scene } = useGLTF('/models/Swing.glb');
  const position = useMemo(() => new Vector3(30, 0, -10), []);

  useShadow({ scene });

  return <primitive visible name={name} scale={[scale, scale, scale]} position={position} object={scene} />;
}

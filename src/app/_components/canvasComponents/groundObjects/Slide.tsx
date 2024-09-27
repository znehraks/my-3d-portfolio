import { useGLTF } from '@react-three/drei';
import { useMemo } from 'react';
import { Vector3 } from 'three';
import { useShadow } from './useShadow';

const name = 'ground-slide';
export function Slide() {
  const { scene } = useGLTF('/models/Slide.glb');
  const position = useMemo(() => new Vector3(9, 0, -10), []);

  useShadow({ scene });

  return <primitive visible name={name} scale={1.5} position={position} rotation-y={Math.PI / 10} object={scene} />;
}

/* eslint-disable @typescript-eslint/naming-convention */
import { useGLTF } from '@react-three/drei';
import { useMemo } from 'react';
import { SkeletonUtils } from 'three-stdlib';
import { useShadow } from './useShadow';

const name = 'ground-pine-trees';
export function PineTrees({ position }: { position: number[] }) {
  const { scene: _scene } = useGLTF('/models/Pine Trees.glb');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const scene = useMemo(() => SkeletonUtils.clone(_scene), []);

  useShadow({ scene });

  return <primitive visible name={name} scale={15} position={position} rotation-y={Math.PI / 4} object={scene} />;
}

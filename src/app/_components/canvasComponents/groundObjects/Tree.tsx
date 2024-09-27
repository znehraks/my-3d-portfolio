import { useGLTF } from '@react-three/drei';
import { useMemo } from 'react';
import { SkeletonUtils } from 'three-stdlib';
import { useShadow } from './useShadow';

const name = 'ground-tree';
export function Tree({ position }: { position: number[] }) {
  const { scene: _scene } = useGLTF('/models/Tree.glb');
  // useGLTF의 디폴트 캐싱 방지
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const scene = useMemo(() => SkeletonUtils.clone(_scene), []);

  useShadow({ scene });

  return <primitive visible name={name} scale={1} position={position} object={scene} />;
}

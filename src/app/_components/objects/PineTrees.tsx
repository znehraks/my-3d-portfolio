import { useGLTF } from '@react-three/drei';
import { useMemo } from 'react';
import { SkeletonUtils } from 'three-stdlib';

const name = 'ground-pine-trees';
export function PineTrees({ position }: { position: number[] }) {
  const { scene: _scene } = useGLTF('/models/Pine Trees.glb');
  // useGLTF의 디폴트 캐싱 방지
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const scene = useMemo(() => SkeletonUtils.clone(_scene), []);
  // useEffect(() => {
  //   scene.traverse((mesh) => {
  //     mesh.castShadow = true;
  //     mesh.receiveShadow = true;
  //   });
  // }, [position, scene]);

  return <primitive visible name={name} scale={15} position={position} rotation-y={Math.PI / 4} object={scene} />;
}

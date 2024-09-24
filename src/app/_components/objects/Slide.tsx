import { useGLTF } from '@react-three/drei';
import { useMemo } from 'react';
import { Vector3 } from 'three';

const name = 'ground-slide';
export function Slide() {
  // const [, setPlayGroundStructuresBoundingBox] = useRecoilState(PlayGroundStructuresBoundingBoxAtom);

  const { scene } = useGLTF('/models/Slide.glb');

  const position = useMemo(() => new Vector3(9, 0, -10), []);
  // useEffect(() => {
  //   scene.traverse((mesh) => {
  //     mesh.castShadow = true;
  //     mesh.receiveShadow = true;
  //   });

  //   const mesh = scene.children[0] as Mesh;
  //   if (mesh.geometry.boundingBox) {
  //     setPlayGroundStructuresBoundingBox((prev) =>
  //       _.uniqBy(
  //         [
  //           ...prev,
  //           {
  //             name,
  //             box: {
  //               max: mesh.geometry.boundingBox!.max.clone().multiplyScalar(1.4),
  //               min: mesh.geometry.boundingBox!.min.clone().multiplyScalar(1.4),
  //             },
  //             position,
  //           },
  //         ],
  //         'name',
  //       ),
  //     );
  //   }
  // }, [position, scene, setPlayGroundStructuresBoundingBox]);

  return <primitive visible name={name} scale={1.5} position={position} rotation-y={Math.PI / 10} object={scene} />;
}

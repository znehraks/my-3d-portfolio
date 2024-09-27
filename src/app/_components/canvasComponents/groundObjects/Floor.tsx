import { GROUND_MAP_SIZE } from '@/constants';
import { MyPositionAtom } from '@/store/PlayerStore';
import { useLoader } from '@react-three/fiber';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { RepeatWrapping, Texture, TextureLoader } from 'three';

export function Floor() {
  const setMyPosition = useSetAtom(MyPositionAtom);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sandTexture = useLoader(TextureLoader as any, '/texture/sand.jpg') as Texture;

  useEffect(() => {
    sandTexture.wrapS = RepeatWrapping;
    sandTexture.wrapT = RepeatWrapping;
    sandTexture.repeat.x = 5;
    sandTexture.repeat.y = 5;
  }, [sandTexture]);

  return (
    <mesh
      castShadow
      receiveShadow
      rotation-x={-Math.PI / 2}
      position-y={-0.001}
      // onPointerUp={(e) => {
      //   socket.emit('move', [e.point.x, 0, e.point.z]);
      // }}
      onPointerUp={(e) => {
        setMyPosition([e.point.x, 0, e.point.z]);
      }}
    >
      <planeGeometry args={[GROUND_MAP_SIZE, GROUND_MAP_SIZE]} />
      <meshStandardMaterial map={sandTexture} />
    </mesh>
  );
}

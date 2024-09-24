import { groundMapSize } from '@/app/constants';
import { useLoader } from '@react-three/fiber';
import { useEffect } from 'react';
import { RepeatWrapping, Texture, TextureLoader } from 'three';

export function Floor() {
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
    >
      <planeGeometry args={[groundMapSize, groundMapSize]} />
      <meshStandardMaterial map={sandTexture} />
    </mesh>
  );
}

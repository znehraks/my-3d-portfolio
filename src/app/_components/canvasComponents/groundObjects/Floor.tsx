import { GROUND_MAP_SIZE } from '@/constants';
import { MyPositionAtom } from '@/store';
import { useLoader } from '@react-three/fiber';
import { useSetAtom } from 'jotai';
import { useEffect, useRef } from 'react';
import { RepeatWrapping, Texture, TextureLoader } from 'three';

export function Floor() {
  const setMyPosition = useSetAtom(MyPositionAtom);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sandTexture = useLoader(TextureLoader as any, '/texture/sand.webp') as Texture;
  const isPointerPressed = useRef(false);

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
      onPointerDown={(e) => {
        isPointerPressed.current = true;
        setMyPosition([e.point.x, 0, e.point.z]);
      }}
      onPointerMove={(e) => {
        if (isPointerPressed.current) {
          setMyPosition([e.point.x, 0, e.point.z]);
        }
      }}
      onPointerUp={() => {
        isPointerPressed.current = false;
      }}
    >
      <planeGeometry args={[GROUND_MAP_SIZE, GROUND_MAP_SIZE]} />
      <meshStandardMaterial map={sandTexture} />
    </mesh>
  );
}

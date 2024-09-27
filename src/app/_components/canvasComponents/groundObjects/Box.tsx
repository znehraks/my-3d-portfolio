import { useRef } from 'react';
import { IPosition } from '@/types';
import { useLoader } from '@react-three/fiber';
import { Mesh, Texture, TextureLoader } from 'three';
import { useBounce } from './useBounce';

export function Box({ position, textureSrc }: { position: IPosition; textureSrc: string }) {
  const ref = useRef<Mesh>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const skillTexture = useLoader(TextureLoader as any, `/texture/${textureSrc}.webp`) as Texture;
  useBounce<Mesh>(ref);
  return (
    <mesh ref={ref} castShadow receiveShadow position={position}>
      <boxGeometry args={[2, 2, 2]} />
      <meshPhongMaterial map={skillTexture} />
    </mesh>
  );
}

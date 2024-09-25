/* eslint-disable react/no-unknown-property */

'use client';

import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { Map } from './canvasComponents/Map';

export function MainCanvas() {
  const [aspectRatio, setAspectRatio] = useState<number>();

  useEffect(() => {
    const handleResize = () => {
      setAspectRatio(window.innerWidth / window.innerHeight);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!aspectRatio) return null;

  return (
    <Canvas
      id="canvas"
      gl={{ antialias: true }}
      shadows
      camera={{
        fov: 30,
        aspect: aspectRatio,
        near: 0.01,
        far: 100000,
        position: [12, 12, 12],
      }}
    >
      <Map />
    </Canvas>
  );
}

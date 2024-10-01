/* eslint-disable react/no-unknown-property */

'use client';

import { Canvas } from '@react-three/fiber';
import { Map } from './canvasComponents/Map';
import { CAMERA_DISTANCE } from '@/constants';
import { Suspense } from 'react';
import { Loader } from './htmlComponents/Loader';

export function MainCanvas() {
  return (
    <Canvas
      id="canvas"
      gl={{ antialias: true }}
      shadows
      camera={{
        fov: 30,
        near: 30,
        far: 100000,
        position: [CAMERA_DISTANCE, CAMERA_DISTANCE, CAMERA_DISTANCE],
      }}
    >
      <Suspense fallback={<Loader />}>
        <Map />
      </Suspense>
    </Canvas>
  );
}

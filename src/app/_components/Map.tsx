import { useRef } from 'react';
import { OrbitControls as OrbitControlsClass } from 'three-stdlib';
import { OrbitControls } from '@react-three/drei';
import { GroundObjects } from './objects';
import { GroundLights } from './Lights';

export function Map() {
  const controls = useRef<OrbitControlsClass>(null);
  return (
    <>
      <OrbitControls
        ref={controls}
        minDistance={5}
        maxDistance={20}
        maxPolarAngle={Math.PI / 2.5}
        minPolarAngle={Math.PI / 4}
        maxAzimuthAngle={Math.PI / 2}
        minAzimuthAngle={0}
      />
      <GroundLights />
      <GroundObjects />
    </>
  );
}

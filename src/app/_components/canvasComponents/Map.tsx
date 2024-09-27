import { useRef } from 'react';
import { OrbitControls as OrbitControlsClass } from 'three-stdlib';
import { OrbitControls } from '@react-three/drei';
import { GroundObjects } from './groundObjects/GroundObjects';
import { GroundLights } from './Lights';
import { GroundPlayer } from './groundPlayer/GroundPlayer';

export function Map() {
  const controls = useRef<OrbitControlsClass>(null);
  return (
    <>
      <OrbitControls
        ref={controls}
        // minDistance={5}
        // maxDistance={20}
        // maxPolarAngle={Math.PI / 2.5}
        // minPolarAngle={Math.PI / 4}
        // maxAzimuthAngle={Math.PI / 2}
        // minAzimuthAngle={0}
      />
      <GroundLights />
      <GroundObjects />
      <GroundPlayer
        player={{
          id: 'test-id',
          nickname: 'test-nickname',
          selectedCharacterGlbNameIndex: 0,
          jobPosition: 'test-jobPosition',
          position: [0, 0, 0],
        }}
        newPosition={[0, 0, 0]}
      />
    </>
  );
}

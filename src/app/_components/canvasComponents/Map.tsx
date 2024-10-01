import { useAtomValue } from 'jotai';
import { MyPositionAtom } from '@/store';
import { useRef } from 'react';
import { OrbitControls as OrbitControlsClass } from 'three-stdlib';
import { OrbitControls } from '@react-three/drei';
import { GroundObjects } from './groundObjects/GroundObjects';
import { GroundLights } from './GroundLights';
import { GroundPlayer } from './groundPlayer/GroundPlayer';
import { useAspectRatio } from '../useAspectRatio';
import { CAMERA_DISTANCE } from '@/constants';

export function Map() {
  const controls = useRef<OrbitControlsClass>(null);
  const myPosition = useAtomValue(MyPositionAtom);
  useAspectRatio();

  return (
    <>
      <OrbitControls
        ref={controls}
        minDistance={5}
        maxDistance={Math.sqrt(CAMERA_DISTANCE ** 2 + CAMERA_DISTANCE ** 2 + CAMERA_DISTANCE ** 2)}
        maxPolarAngle={Math.PI / 2.75}
        minPolarAngle={Math.PI / 4}
      />
      <GroundLights />
      <GroundObjects />
      <GroundPlayer
        player={{
          id: 'test-id',
          nickname: 'test-nickname',
          selectedCharacterGlbNameIndex: 0,
          jobPosition: 'test-jobPosition',
          position: myPosition,
        }}
        newPosition={myPosition}
      />
    </>
  );
}

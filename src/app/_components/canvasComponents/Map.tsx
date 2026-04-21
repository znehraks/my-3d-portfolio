import { useAtomValue, useSetAtom } from 'jotai';
import { IsLoadCompletedAtom, MyPositionAtom } from '@/store';
import { useEffect, useRef } from 'react';
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
  const setIsLoadCompleted = useSetAtom(IsLoadCompletedAtom);
  useAspectRatio();

  useEffect(() => {
    setIsLoadCompleted(true);

    return () => {
      setIsLoadCompleted(false);
    };
  }, [setIsLoadCompleted]);

  return (
    <>
      <OrbitControls
        ref={controls}
        minDistance={5}
        maxDistance={CAMERA_DISTANCE * 4}
        maxPolarAngle={Math.PI / 2.75}
        minPolarAngle={Math.PI / 4.5}
      />
      <GroundLights />
      <GroundObjects />
      <GroundPlayer
        player={{
          id: 'test-id',
          nickname: 'test-nickname',
          selectedCharacterGlbNameIndex: 3,
          jobPosition: 'test-jobPosition',
          position: myPosition,
        }}
        newPosition={myPosition}
      />
    </>
  );
}

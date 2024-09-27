/* eslint-disable react/no-array-index-key */
import React, { forwardRef, useEffect, useMemo } from 'react';
import { Group, PointLight, Vector3 } from 'three';
import gsap from 'gsap';
import { IPosition } from '@/types';

export const GroundPlayerLights = forwardRef<Group, { memoizedPosition: Vector3 }>(({ memoizedPosition }, ref) => {
  const lightRefs = useMemo(
    () => [{ current: null }, { current: null }, { current: null }, { current: null }, { current: null }] as const,
    [],
  );

  useEffect(() => {
    lightRefs.forEach((lightRef) => {
      if (lightRef.current) {
        gsap.to(lightRef.current, {
          intensity: 20,
          duration: 1,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
        });
      }
    });
  }, [lightRefs]);

  const lightPositions: IPosition[] = useMemo(
    () => [
      [memoizedPosition.x, memoizedPosition.y + 4, memoizedPosition.z],
      [memoizedPosition.x + 4, memoizedPosition.y + 4, memoizedPosition.z],
      [memoizedPosition.x - 4, memoizedPosition.y + 4, memoizedPosition.z],
      [memoizedPosition.x, memoizedPosition.y + 4, memoizedPosition.z + 4],
      [memoizedPosition.x, memoizedPosition.y + 4, memoizedPosition.z - 4],
    ],
    [memoizedPosition],
  );

  return (
    <group ref={ref}>
      {lightPositions.map((position, index) => (
        <pointLight
          key={index}
          ref={lightRefs[index] as React.RefObject<PointLight>}
          position={position}
          intensity={10}
          distance={10}
          color="#f0f0ff"
        />
      ))}
    </group>
  );
});

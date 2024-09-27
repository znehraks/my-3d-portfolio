/* eslint-disable react/no-array-index-key */
import React, { useEffect, useMemo } from 'react';
import { PointLight, Vector3 } from 'three';
import gsap from 'gsap';
import { IPosition } from '@/types';

export function GroundPlayerLights({ memoizedPosition }: { memoizedPosition: Vector3 }) {
  const lightRefs = useMemo(
    () => [{ current: null }, { current: null }, { current: null }, { current: null }, { current: null }] as const,
    [],
  );

  useEffect(() => {
    lightRefs.forEach((ref) => {
      if (ref.current) {
        gsap.to(ref.current, {
          intensity: 10,
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
    <>
      {lightPositions.map((position, index) => (
        <pointLight
          key={index}
          ref={lightRefs[index] as React.RefObject<PointLight>}
          position={position}
          intensity={5}
          distance={10}
          color="#f0f0ff"
        />
      ))}
    </>
  );
}

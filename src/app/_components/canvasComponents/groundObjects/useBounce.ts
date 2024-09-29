import gsap from 'gsap';
import { RefObject, useEffect } from 'react';
import { Vector3 } from 'three';

export function useBounce<T extends { scale: Vector3 }>(ref: RefObject<T>) {
  useEffect(() => {
    if (ref.current)
      gsap.to(ref.current.scale, {
        yoyo: true,
        repeat: -1,
        x: 1.05,
        y: 1.05,
        z: 1.05,
        delay: Math.random(),
      });
  }, [ref]);
}

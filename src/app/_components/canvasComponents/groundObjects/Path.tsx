/* eslint-disable no-underscore-dangle */
import React, { useMemo } from 'react';
import { useGLTF, Instances, Instance } from '@react-three/drei';
import { Mesh } from 'three';
import { IPosition } from '@/types';

const pathAxisPositiveX: IPosition[] = Array.from({ length: 10 }, (_, i) => [0, 0, i * 8]);
const pathAxisNegativeX: IPosition[] = Array.from({ length: 10 }, (_, i) => [0, 0, -i * 8]);
const pathAxisPositiveZ: IPosition[] = Array.from({ length: 10 }, (_, i) => [i * 8, 0, 0]);
const pathAxisNegativeZ: IPosition[] = Array.from({ length: 10 }, (_, i) => [-i * 8, 0, 0]);
const positions: IPosition[] = [...pathAxisPositiveX, ...pathAxisNegativeX, ...pathAxisNegativeZ, ...pathAxisPositiveZ];

export function Paths() {
  const gltf = useGLTF('/models/Rock Path Round Wide.glb');
  const { scene } = gltf;

  const mesh = useMemo(() => {
    let _mesh: Mesh | null = null;
    scene.traverse((child) => {
      if (child instanceof Mesh && child.isMesh) {
        _mesh = child;
      }
    });
    if (!_mesh) {
      throw new Error('No mesh found');
    }
    return _mesh as Mesh;
  }, [scene]);

  return (
    <Instances geometry={mesh.geometry} material={mesh.material}>
      {positions.map((position) => (
        <Instance key={`${position[0]}-${position[1]}-${position[2]}`} position={position} scale={4} />
      ))}
    </Instances>
  );
}

useGLTF.preload('/models/Rock Path Round Wide.glb');

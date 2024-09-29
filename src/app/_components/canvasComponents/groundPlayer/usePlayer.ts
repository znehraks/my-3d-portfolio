import * as THREE from 'three';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame, useGraph } from '@react-three/fiber';
import { GLTF, SkeletonUtils } from 'three-stdlib';
import { IPlayer, IPosition } from '@/types';
import gsap from 'gsap';
import { calculateMinimapPosition } from '@/utils';
import { CAMERA_DISTANCE } from '@/constants';

interface IUseGroundPlayer {
  player?: IPlayer;
  newPosition: IPosition;
  modelIndex: number;
}
export const useGroundPlayer = ({ player, newPosition, modelIndex }: IUseGroundPlayer) => {
  const playerId = player?.id;
  const nicknameRef = useRef<THREE.Group>(null);

  const vectoredNewPosition = useMemo(
    () => new THREE.Vector3(newPosition[0], newPosition[1], newPosition[2]),
    [newPosition],
  );
  const memoizedPosition = useMemo(
    () => new THREE.Vector3(newPosition[0], newPosition[1], newPosition[2]),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  const point = document.getElementById(`player-point-${playerId}`);

  const playerRef = useRef<THREE.Group>(null);
  const playerLightRef = useRef<THREE.Group>(null);

  const { scene, materials, animations } = useGLTF(
    (() => {
      switch (modelIndex) {
        case 0:
          return `/models/CubeGuyCharacter.glb`;
        case 1:
          return `/models/CubeWomanCharacter.glb`;
        case 2:
          return `/models/Steve.glb`;
        default:
          return '';
      }
    })(),
  ) as unknown as GLTF & {
    materials: { [key: string]: THREE.MeshStandardMaterial };
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const clone = useMemo(() => SkeletonUtils.clone(scene), []);
  const objectMap = useGraph(clone);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const nodes = objectMap.nodes as any;

  const [animation, setAnimation] = useState('CharacterArmature|CharacterArmature|CharacterArmature|Idle');
  const { actions } = useAnimations(animations, playerRef);

  useEffect(() => {
    if (!playerRef.current) return;
    gsap.fromTo(
      playerRef.current.scale,
      {
        duration: 2,
        x: 0,
        y: 0,
        z: 0,
      },
      {
        x: 3,
        y: 3,
        z: 3,
      },
    );
  }, [nodes, playerId, scene]);

  useEffect(() => {
    actions[animation]?.reset().fadeIn(0.5).play();
    return () => {
      actions[animation]?.fadeOut(0.5);
    };
  }, [actions, animation]);

  useFrame(({ camera }, delta) => {
    if (!player) return;
    if (!playerRef.current) return;
    if (playerRef.current.position.distanceTo(vectoredNewPosition) > 1) {
      const direction = playerRef.current.position
        .clone()
        .sub(vectoredNewPosition)
        .normalize()
        .multiplyScalar(30 * delta);
      playerRef.current.position.sub(direction);
      playerRef.current.lookAt(vectoredNewPosition);

      playerLightRef?.current?.position.copy(playerRef.current.position);

      if (point) {
        point.style.transform = `translate(
          ${calculateMinimapPosition(playerRef.current.position).x}px,
          ${calculateMinimapPosition(playerRef.current.position).y}px
          )`;
      }

      setAnimation('CharacterArmature|CharacterArmature|CharacterArmature|Run');
    } else {
      setAnimation('CharacterArmature|CharacterArmature|CharacterArmature|Idle');
    }
    camera.position
      .set(playerRef.current.position.x, playerRef.current.position.y + 10, playerRef.current.position.z)
      .addScalar(CAMERA_DISTANCE);
    camera.lookAt(playerRef.current.position);
  });
  return {
    nicknameRef,
    playerRef,
    playerLightRef,
    memoizedPosition,
    playerId,
    nodes,
    materials,
  };
};

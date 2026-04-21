import * as THREE from 'three';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame, useGraph } from '@react-three/fiber';
import { GLTF, SkeletonUtils } from 'three-stdlib';
import { useSetAtom } from 'jotai';
import gsap from 'gsap';
import { IPlayer, IPosition } from '@/types';
import { calculateMinimapPosition } from '@/utils';
import { CAMERA_DISTANCE } from '@/constants';
import { CurrentZoneAtom, ZoneId } from '@/store';
import { detectZone } from '../zones/zoneBounds';
import { isInsideWalkableArea } from '@/walkableBoundary';

interface IUseGroundPlayer {
  player?: IPlayer;
  newPosition: IPosition;
  modelIndex: number;
}

const MESHY_INDEX = 3;

const LEGACY_IDLE = 'CharacterArmature|CharacterArmature|CharacterArmature|Idle';
const LEGACY_RUN = 'CharacterArmature|CharacterArmature|CharacterArmature|Run';

export const useGroundPlayer = ({ player, newPosition, modelIndex }: IUseGroundPlayer) => {
  const playerId = player?.id;
  const nicknameRef = useRef<THREE.Group>(null);
  const isMeshy = modelIndex === MESHY_INDEX;

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
  const currentZoneRef = useRef<ZoneId | null>(null);
  const setCurrentZone = useSetAtom(CurrentZoneAtom);
  const blockedTargetRef = useRef<THREE.Vector3 | null>(null);

  const { scene, materials, animations } = useGLTF(
    (() => {
      switch (modelIndex) {
        case 0:
          return `/models/CubeGuyCharacter.glb`;
        case 1:
          return `/models/CubeWomanCharacter.glb`;
        case 2:
          return `/models/Steve.glb`;
        case MESHY_INDEX:
          return `/models/meshy_jm.glb`;
        default:
          return '';
      }
    })(),
  ) as unknown as GLTF & {
    materials: { [key: string]: THREE.MeshStandardMaterial };
  };

  const clone = useMemo(() => {
    const c = SkeletonUtils.clone(scene);
    if (isMeshy) {
      c.traverse((o) => {
        if ((o as THREE.Mesh).isMesh) {
          (o as THREE.Mesh).castShadow = true;
          (o as THREE.Mesh).receiveShadow = true;
        }
      });
    }
    return c;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const objectMap = useGraph(clone);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const nodes = objectMap.nodes as any;

  const idleAnim = isMeshy ? 'Running' : LEGACY_IDLE;
  const walkAnim = isMeshy ? 'Idle' : null;
  const runAnim = isMeshy ? 'Walking' : LEGACY_RUN;

  const [animation, setAnimation] = useState(idleAnim);
  const { actions } = useAnimations(animations, playerRef);

  useEffect(() => {
    if (!playerRef.current) return;
    const targetScale = isMeshy ? 6 : 3;
    gsap.fromTo(
      playerRef.current.scale,
      {
        duration: 2,
        x: 0,
        y: 0,
        z: 0,
      },
      {
        x: targetScale,
        y: targetScale,
        z: targetScale,
      },
    );
  }, [nodes, playerId, scene, isMeshy]);

  useEffect(() => {
    actions[animation]?.reset().fadeIn(0.5).play();
    return () => {
      actions[animation]?.fadeOut(0.5);
    };
  }, [actions, animation]);

  useFrame(({ camera }, delta) => {
    if (!player) return;
    if (!playerRef.current) return;

    // 새 타겟이 들어오면 경계 락 해제 (클릭마다 다시 시도)
    if (
      blockedTargetRef.current &&
      !blockedTargetRef.current.equals(vectoredNewPosition)
    ) {
      blockedTargetRef.current = null;
    }
    const isBlocked =
      blockedTargetRef.current?.equals(vectoredNewPosition) ?? false;

    const distance = playerRef.current.position.distanceTo(vectoredNewPosition);
    if (distance > 1 && !isBlocked) {
      const direction = playerRef.current.position
        .clone()
        .sub(vectoredNewPosition)
        .normalize()
        .multiplyScalar(30 * delta);

      const prev = playerRef.current.position.clone();
      playerRef.current.position.sub(direction);

      if (
        !isInsideWalkableArea(
          playerRef.current.position.x,
          playerRef.current.position.z,
        )
      ) {
        // 경계 이탈: 위치 롤백 + 이 타겟 포기 (다음 클릭까지 재시도 안 함)
        playerRef.current.position.copy(prev);
        blockedTargetRef.current = vectoredNewPosition.clone();
        setAnimation(idleAnim);
      } else {
        playerRef.current.lookAt(vectoredNewPosition);
        playerLightRef?.current?.position.copy(playerRef.current.position);

        if (point) {
          point.style.transform = `translate(
            ${calculateMinimapPosition(playerRef.current.position).x}px,
            ${calculateMinimapPosition(playerRef.current.position).y}px
            )`;
        }

        if (walkAnim && distance < 4) {
          setAnimation(walkAnim);
        } else {
          setAnimation(runAnim);
        }
      }
    } else {
      setAnimation(idleAnim);
    }

    // 카메라는 이동/정지/차단 여부와 무관하게 매 프레임 플레이어 추적 (jitter 방지)
    camera.position
      .set(playerRef.current.position.x, playerRef.current.position.y + 10, playerRef.current.position.z)
      .addScalar(CAMERA_DISTANCE);
    camera.lookAt(playerRef.current.position);

    // 존 감지: 플레이어가 AABB 경계를 넘을 때만 atom 업데이트 → 리렌더 최소화.
    const nextZone = detectZone(playerRef.current.position.x, playerRef.current.position.z);
    if (nextZone !== currentZoneRef.current) {
      currentZoneRef.current = nextZone;
      setCurrentZone(nextZone);
    }
  });
  return {
    nicknameRef,
    playerRef,
    playerLightRef,
    memoizedPosition,
    playerId,
    nodes,
    materials,
    clone,
    isMeshy,
  };
};

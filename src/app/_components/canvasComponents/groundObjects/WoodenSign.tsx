import { useGLTF } from '@react-three/drei';
import { useMemo } from 'react';
import { useSetAtom } from 'jotai';
import { SkeletonUtils } from 'three-stdlib';
import { MODAL_KEY, OpenModalKeyAtom } from '@/store';
import { IPosition } from '@/types';
import { useShadow } from './useShadow';

interface IWoodenSignProps {
  /** 배치 좌표. 기본은 인트로(About) 간판 위치. */
  position?: IPosition;
  /** 클릭 시 열릴 모달 key. 기본은 인트로 자기소개 모달. */
  modalKey?: MODAL_KEY;
  /** 스케일. */
  scale?: number;
  /** Y축 회전. */
  rotationY?: number;
}

export function WoodenSign({
  position = [-4, 0, -4],
  modalKey = MODAL_KEY.INTRO_ABOUT,
  scale = 8,
  rotationY,
}: IWoodenSignProps = {}) {
  const { scene: sourceScene } = useGLTF('/models/Wooden Sign.glb');
  // 같은 GLB를 여러 지점에 배치해야 해서 clone으로 격리한다.
  const scene = useMemo(() => SkeletonUtils.clone(sourceScene), [sourceScene]);
  const setOpenModalKey = useSetAtom(OpenModalKeyAtom);

  useShadow({ scene });

  return (
    <primitive
      object={scene}
      scale={scale}
      position={position}
      rotation-y={rotationY}
      onClick={(e: { stopPropagation: () => void }) => {
        e.stopPropagation();
        setOpenModalKey(modalKey);
      }}
    />
  );
}

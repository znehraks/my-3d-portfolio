import { IsHelpTooltipVisibleAtom, MyPositionAtom } from '@/store';
import { useSetAtom } from 'jotai';
import { useRef } from 'react';

/**
 * 바닥 타일 공통 클릭/드래그 핸들러.
 *
 * Floor.tsx 에서 쓰던 로직을 4개 타일(Tech, Content, Playground, CentralPlaza)이
 * 공유할 수 있도록 훅으로 분리. 기존과 동일: 포인터 누르면 해당 좌표로 캐릭터 이동.
 */
export function useGroundClick() {
  const setMyPosition = useSetAtom(MyPositionAtom);
  const setIsHelpTooltipVisible = useSetAtom(IsHelpTooltipVisibleAtom);
  const isPointerPressed = useRef(false);

  return {
    onPointerDown: (e: { point: { x: number; z: number } }) => {
      setIsHelpTooltipVisible(false);
      isPointerPressed.current = true;
      setMyPosition([e.point.x, 0, e.point.z]);
    },
    onPointerMove: (e: { point: { x: number; z: number } }) => {
      if (isPointerPressed.current) {
        setMyPosition([e.point.x, 0, e.point.z]);
      }
    },
    onPointerUp: () => {
      isPointerPressed.current = false;
    },
  };
}

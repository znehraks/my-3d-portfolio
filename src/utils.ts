import { Vector3 } from 'three';

export const calculateMinimapPosition = (originalPosition: Vector3) => {
  return {
    //  초기위치가 미니맵상 중심점이므로,
    // 점 위치(4 * 현재 캐릭터 위치의 x 좌표) - 점 자체 의 width의 절반
    x: 4 * originalPosition.x - 5,
    // 점 위치(4 * 현재 캐릭터 위치의 z 좌표) - 점 자체 의 height의 절반
    y: 4 * originalPosition.z - 5,
  };
};

export const isValidText = (text: string | undefined) => {
  return Boolean(text && text.trim() !== '');
};

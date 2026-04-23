import { MODAL_KEY } from '@/store';
import { IPosition } from '@/types';

/**
 * 명예의 전당 존 레이아웃.
 *
 * 수상 3건 + 자격증 묶음 + 학력 1건을 각각 플레이스홀더 오브젝트와
 * 간판으로 노출한다. 좌표는 이 파일에서 정적으로 관리해서 신전 내부
 * 배치를 한눈에 파악할 수 있게 했다.
 */

export type HallOfFameAnchor =
  | 'hall-temple'
  | 'trophy-gold'
  | 'trophy-silver'
  | 'certificate-frame'
  | 'graduation-cap'
  | 'pedestal';

export interface IHallOfFameStop {
  id: string;
  label: string;
  modalKey: MODAL_KEY;
  propAnchor: HallOfFameAnchor;
  position: IPosition;
  signPosition: IPosition;
  signRotationY: number;
  placeholderColor: string;
  boxSize: [number, number, number];
}

export const HALL_OF_FAME_POSITION = { x: 0, z: 95 } as const;

export const HALL_OF_FAME_STOPS: IHallOfFameStop[] = [
  {
    id: 'award-myongji',
    label: '명지 창의융합 1위',
    modalKey: MODAL_KEY.AWARD_MYONGJI,
    propAnchor: 'trophy-gold',
    position: [0, 2, 95],
    signPosition: [0, 0, 90],
    signRotationY: Math.PI,
    placeholderColor: '#f5c542',
    boxSize: [1.6, 2.8, 1.6],
  },
  {
    id: 'award-incheon',
    label: '인천 공공데이터 2위',
    modalKey: MODAL_KEY.AWARD_INCHEON,
    propAnchor: 'trophy-silver',
    position: [-6, 1.8, 95],
    signPosition: [-6, 0, 90],
    signRotationY: Math.PI,
    placeholderColor: '#c9d1da',
    boxSize: [1.4, 2.4, 1.4],
  },
  {
    id: 'award-kopis',
    label: 'KOPIS 빅데이터 2위',
    modalKey: MODAL_KEY.AWARD_KOPIS,
    propAnchor: 'trophy-silver',
    position: [6, 1.8, 95],
    signPosition: [6, 0, 90],
    signRotationY: Math.PI,
    placeholderColor: '#c9d1da',
    boxSize: [1.4, 2.4, 1.4],
  },
  {
    id: 'certifications',
    label: '자격증 액자',
    modalKey: MODAL_KEY.CERTIFICATIONS,
    propAnchor: 'certificate-frame',
    position: [12, 1.6, 101],
    signPosition: [8, 0, 101],
    signRotationY: Math.PI / 2,
    placeholderColor: '#f5e0b3',
    boxSize: [2, 3, 0.3],
  },
  {
    id: 'education',
    label: '학력',
    modalKey: MODAL_KEY.EDUCATION,
    propAnchor: 'graduation-cap',
    position: [-12, 1.2, 101],
    signPosition: [-8, 0, 101],
    signRotationY: -Math.PI / 2,
    placeholderColor: '#2f3e74',
    boxSize: [2, 1.2, 2],
  },
];

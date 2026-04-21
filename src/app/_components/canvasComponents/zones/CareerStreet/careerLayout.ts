import { MODAL_KEY } from '@/store';
import { IPosition } from '@/types';
import { ResumeCareerId } from '@/types';

/**
 * 경력 거리 레이아웃.
 *
 * 좌표는 월드 기준 절대값. `side` 는 거리 중앙(z축) 기준 좌/우,
 * `rotationY` 는 간판이 거리 중앙을 바라보도록 돌려주는 각도.
 *
 * `placeholderColor` 는 Meshy 에셋 납품 전까지 사용할 임시 건물 색.
 */

export type CareerBuildingAnchor =
  | 'building-miridih'
  | 'building-aiv'
  | 'building-fastcampus'
  | 'building-muhayu'
  | 'building-archidraw'
  | 'building-lab724';

export interface ICareerStop {
  id: ResumeCareerId;
  company: string;
  modalKey: MODAL_KEY;
  /** 건물 중심 좌표. */
  position: IPosition;
  /** 간판이 거리 중앙을 바라보는 회전값. */
  signRotationY: number;
  /** 간판 좌표(건물 기준 오프셋 적용 뒤의 절대값). */
  signPosition: IPosition;
  /** 임시 플레이스홀더 건물 색(Meshy 모델 납품 전 용도). */
  placeholderColor: string;
  /** 교체 지점 주석 앵커. */
  meshyAnchor: CareerBuildingAnchor;
}

const SIDE_OFFSET = 14;
const SIGN_OFFSET = 6;

export const CAREER_STREET_START_Z = 80;
export const CAREER_STREET_END_Z = 180;

export const CAREER_STOPS: ICareerStop[] = [
  {
    id: 'miridih',
    company: '미리디',
    modalKey: MODAL_KEY.CAREER_MIRIDIH,
    position: [SIDE_OFFSET, 0, 90],
    signRotationY: -Math.PI / 2,
    signPosition: [SIDE_OFFSET - SIGN_OFFSET, 0, 90],
    placeholderColor: '#f3b6d8',
    meshyAnchor: 'building-miridih',
  },
  {
    id: 'aiv',
    company: '(주)아이브',
    modalKey: MODAL_KEY.CAREER_AIV,
    position: [-SIDE_OFFSET, 0, 105],
    signRotationY: Math.PI / 2,
    signPosition: [-SIDE_OFFSET + SIGN_OFFSET, 0, 105],
    placeholderColor: '#8c9bb1',
    meshyAnchor: 'building-aiv',
  },
  {
    id: 'fastcampus',
    company: '패스트캠퍼스',
    modalKey: MODAL_KEY.CAREER_FASTCAMPUS,
    position: [SIDE_OFFSET, 0, 120],
    signRotationY: -Math.PI / 2,
    signPosition: [SIDE_OFFSET - SIGN_OFFSET, 0, 120],
    placeholderColor: '#c8a6f0',
    meshyAnchor: 'building-fastcampus',
  },
  {
    id: 'muhayu',
    company: '(주)무하유',
    modalKey: MODAL_KEY.CAREER_MUHAYU,
    position: [-SIDE_OFFSET, 0, 135],
    signRotationY: Math.PI / 2,
    signPosition: [-SIDE_OFFSET + SIGN_OFFSET, 0, 135],
    placeholderColor: '#90c7e8',
    meshyAnchor: 'building-muhayu',
  },
  {
    id: 'archidraw',
    company: '(주)아키드로우',
    modalKey: MODAL_KEY.CAREER_ARCHIDRAW,
    position: [SIDE_OFFSET, 0, 150],
    signRotationY: -Math.PI / 2,
    signPosition: [SIDE_OFFSET - SIGN_OFFSET, 0, 150],
    placeholderColor: '#d9b58a',
    meshyAnchor: 'building-archidraw',
  },
  {
    id: 'lab724',
    company: '724랩',
    modalKey: MODAL_KEY.CAREER_LAB724,
    position: [-SIDE_OFFSET, 0, 165],
    signRotationY: Math.PI / 2,
    signPosition: [-SIDE_OFFSET + SIGN_OFFSET, 0, 165],
    placeholderColor: '#f2c38a',
    meshyAnchor: 'building-lab724',
  },
];

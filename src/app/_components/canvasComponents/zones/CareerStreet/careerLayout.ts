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

const SIDE_OFFSET = 8;
const SIGN_OFFSET = 4;

export const CAREER_STREET_START_Z = 32;
export const CAREER_STREET_END_Z = 80;

/**
 * 거리 배치 규칙:
 * - 중앙(z=허브)에 가까울수록 과거, 끝(z 큼)일수록 현재/미래.
 * - 좌우(+x / -x)는 시각적 리듬을 위한 단순 alternating.
 *
 * 시간순 (과거 → 현재):
 *   lab724 (2020.03~2021.02) → archidraw (2022.05~2023.06)
 *   → muhayu (2023.07~2023.11) → fastcampus (2023.10~2024.03)
 *   → aiv (2023.12~2024.12) → miridih (2025.01~현재)
 */
export const CAREER_STOPS: ICareerStop[] = [
  {
    id: 'lab724',
    company: '724랩',
    modalKey: MODAL_KEY.CAREER_LAB724,
    position: [SIDE_OFFSET, 0, 36],
    signRotationY: -Math.PI / 2,
    signPosition: [SIDE_OFFSET - SIGN_OFFSET, 0, 36],
    placeholderColor: '#f2c38a',
    meshyAnchor: 'building-lab724',
  },
  {
    id: 'archidraw',
    company: '(주)아키드로우',
    modalKey: MODAL_KEY.CAREER_ARCHIDRAW,
    position: [-SIDE_OFFSET, 0, 44],
    signRotationY: Math.PI / 2,
    signPosition: [-SIDE_OFFSET + SIGN_OFFSET, 0, 44],
    placeholderColor: '#d9b58a',
    meshyAnchor: 'building-archidraw',
  },
  {
    id: 'muhayu',
    company: '(주)무하유',
    modalKey: MODAL_KEY.CAREER_MUHAYU,
    position: [SIDE_OFFSET, 0, 52],
    signRotationY: -Math.PI / 2,
    signPosition: [SIDE_OFFSET - SIGN_OFFSET, 0, 52],
    placeholderColor: '#90c7e8',
    meshyAnchor: 'building-muhayu',
  },
  {
    id: 'fastcampus',
    company: '패스트캠퍼스',
    modalKey: MODAL_KEY.CAREER_FASTCAMPUS,
    position: [-SIDE_OFFSET, 0, 60],
    signRotationY: Math.PI / 2,
    signPosition: [-SIDE_OFFSET + SIGN_OFFSET, 0, 60],
    placeholderColor: '#c8a6f0',
    meshyAnchor: 'building-fastcampus',
  },
  {
    id: 'aiv',
    company: '(주)아이브',
    modalKey: MODAL_KEY.CAREER_AIV,
    position: [SIDE_OFFSET, 0, 68],
    signRotationY: -Math.PI / 2,
    signPosition: [SIDE_OFFSET - SIGN_OFFSET, 0, 68],
    placeholderColor: '#8c9bb1',
    meshyAnchor: 'building-aiv',
  },
  {
    id: 'miridih',
    company: '미리디',
    modalKey: MODAL_KEY.CAREER_MIRIDIH,
    position: [-SIDE_OFFSET, 0, 74],
    signRotationY: Math.PI / 2,
    signPosition: [-SIDE_OFFSET + SIGN_OFFSET, 0, 74],
    placeholderColor: '#f3b6d8',
    meshyAnchor: 'building-miridih',
  },
];

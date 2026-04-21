import { ZoneId } from '@/store';
import { CAREER_STREET_END_Z, CAREER_STREET_START_Z } from './CareerStreet/careerLayout';
import { HALL_OF_FAME_POSITION } from './HallOfFame/hallOfFameLayout';
import { SKILL_TOWER_POSITION } from './SkillTower/skillLayout';

export interface IZoneBounds {
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
  label: string;
  emoji: string;
  description: string;
}

const SKILL_TOWER_HALF = 12;
const HALL_OF_FAME_HALF_X = 18;
const HALL_OF_FAME_HALF_Z = 12;

/**
 * 월드 AABB 기반 존 정의.
 * detectZone() 이 여기 순회하며 플레이어 위치를 판정한다.
 * **순서가 중요하다**: 좁은 존을 먼저 두어야 세부 존이 광역 존에 가려지지 않는다.
 */
export const ZONE_BOUNDS: Record<ZoneId, IZoneBounds> = {
  'skill-tower': {
    minX: SKILL_TOWER_POSITION.x - SKILL_TOWER_HALF,
    maxX: SKILL_TOWER_POSITION.x + SKILL_TOWER_HALF,
    minZ: SKILL_TOWER_POSITION.z - SKILL_TOWER_HALF,
    maxZ: SKILL_TOWER_POSITION.z + SKILL_TOWER_HALF,
    label: '기술 타워',
    emoji: '🗼',
    description: '익숙한 기술·AI 도구를 층별로 쌓은 관측탑',
  },
  'career-street': {
    minX: -14,
    maxX: 14,
    minZ: CAREER_STREET_START_Z - 4,
    maxZ: CAREER_STREET_END_Z,
    label: '경력 거리',
    emoji: '🏢',
    description: '2020 → 2026 시간 순으로 걷는 회사 거리',
  },
  'hall-of-fame': {
    minX: HALL_OF_FAME_POSITION.x - HALL_OF_FAME_HALF_X,
    maxX: HALL_OF_FAME_POSITION.x + HALL_OF_FAME_HALF_X,
    minZ: HALL_OF_FAME_POSITION.z - HALL_OF_FAME_HALF_Z,
    maxZ: HALL_OF_FAME_POSITION.z + HALL_OF_FAME_HALF_Z,
    label: '명예의 전당',
    emoji: '🏛',
    description: '수상·자격증·학력을 모신 트로피 신전',
  },
  intro: {
    minX: -15,
    maxX: 15,
    minZ: -15,
    maxZ: 15,
    label: '중앙 광장',
    emoji: '⛲',
    description: '분수와 이정표가 있는 3도시의 교차점',
  },
  'content-city': {
    minX: -100,
    maxX: -15,
    minZ: -100,
    maxZ: -5,
    label: '콘텐츠 도시',
    emoji: '🎬',
    description: '88ight·meme-push 등 창작 콘텐츠 축제 거리',
  },
  playground: {
    minX: 15,
    maxX: 100,
    minZ: -100,
    maxZ: -5,
    label: '놀이터',
    emoji: '🎢',
    description: '정글짐·미끄럼틀·그네가 있는 재미 존',
  },
  'tech-city': {
    minX: -55,
    maxX: 55,
    minZ: 15,
    maxZ: 110,
    label: '기술 도시',
    emoji: '🏙',
    description: '경력·스킬·AI 툴링·명예의 전당이 모인 커리어 지구',
  },
};

const ZONE_DETECTION_ORDER: ZoneId[] = [
  'skill-tower',
  'career-street',
  'hall-of-fame',
  'intro',
  'content-city',
  'playground',
  'tech-city',
];

export function detectZone(x: number, z: number): ZoneId | null {
  for (const id of ZONE_DETECTION_ORDER) {
    const bounds = ZONE_BOUNDS[id];
    if (x >= bounds.minX && x <= bounds.maxX && z >= bounds.minZ && z <= bounds.maxZ) {
      return id;
    }
  }
  return null;
}

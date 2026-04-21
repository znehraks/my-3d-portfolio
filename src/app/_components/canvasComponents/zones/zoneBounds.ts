import { ZoneId } from '@/store';
import { AI_STUDIO_POSITION, AI_STUDIO_RADIUS } from './AIStudio/aiStudioLayout';
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

const SKILL_TOWER_HALF = 15;
const AI_STUDIO_HALF = AI_STUDIO_RADIUS + 4;
const HALL_OF_FAME_HALF_X = 18;
const HALL_OF_FAME_HALF_Z = 12;

/**
 * 월드 AABB 기반 존 정의.
 * detectZone() 이 여기 순회하며 플레이어 위치를 판정한다.
 * 새로운 존 추가 시 엔트리 하나만 늘리면 된다.
 */
export const ZONE_BOUNDS: Record<ZoneId, IZoneBounds> = {
  intro: {
    minX: -60,
    maxX: 60,
    minZ: -60,
    maxZ: 60,
    label: '놀이터',
    emoji: '🎢',
    description: '자기소개와 연락처를 확인하는 인트로 존',
  },
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
    minX: -30,
    maxX: 30,
    minZ: CAREER_STREET_START_Z - 10,
    maxZ: CAREER_STREET_END_Z,
    label: '경력 거리',
    emoji: '🏢',
    description: '2020 → 2026 시간 순으로 걷는 회사 거리',
  },
  'ai-studio': {
    minX: AI_STUDIO_POSITION.x - AI_STUDIO_HALF,
    maxX: AI_STUDIO_POSITION.x + AI_STUDIO_HALF,
    minZ: AI_STUDIO_POSITION.z - AI_STUDIO_HALF,
    maxZ: AI_STUDIO_POSITION.z + AI_STUDIO_HALF,
    label: 'AI 스튜디오',
    emoji: '🎬',
    description: '88ight·RAG 봇·Claude Code 에이전트 팀 등 AI 사이드 프로젝트',
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
};

export function detectZone(x: number, z: number): ZoneId | null {
  const entries = Object.entries(ZONE_BOUNDS) as [ZoneId, IZoneBounds][];
  for (const [id, bounds] of entries) {
    if (x >= bounds.minX && x <= bounds.maxX && z >= bounds.minZ && z <= bounds.maxZ) {
      return id;
    }
  }
  return null;
}

/**
 * SkillTower 층 구성.
 *
 * `textureKey` 가 `public/texture/<key>.webp` 에 실제로 존재하는 스킬만 현재 렌더된다.
 * 비어 있는 항목(`textureKey` 미정의)은 Meshy AI 레벨 대신 **웹 로고 텍스처 TODO** 로
 * `docs/meshy-assets.md#텍스처-보강-대상-skill-tower-누락분` 에 추적된다.
 */

export interface ISkillTowerItem {
  label: string;
  textureKey?: string;
}

export interface ISkillTowerLevel {
  name: string;
  /** 타워 높이(플랫폼 상단 y 좌표). */
  y: number;
  /** 박스 배치 반경. */
  radius: number;
  /** 박스 한 변 크기. */
  boxScale: number;
  items: ISkillTowerItem[];
}

export const SKILL_TOWER_LEVELS: ISkillTowerLevel[] = [
  {
    name: '1F · Frontend',
    y: 3.5,
    radius: 7,
    boxScale: 3,
    items: [
      { label: 'React', textureKey: 'skill-react' },
      { label: 'Next.js', textureKey: 'skill-next' },
      { label: 'JavaScript', textureKey: 'skill-javascript' },
      { label: 'TypeScript', textureKey: 'skill-typescript' },
      { label: 'HTML5', textureKey: 'skill-html' },
      { label: 'CSS3', textureKey: 'skill-css' },
      { label: 'vanilla-extract-css', textureKey: 'skill-vanilla-extract-css' },
      { label: 'Three.js', textureKey: 'skill-threejs' },
      { label: 'Pixi.js', textureKey: 'skill-pixi' },
      // TODO(meshy-assets): skill-react-aria / skill-storybook / skill-motion / skill-tanstack-query
    ],
  },
  {
    name: '2F · State · Backend · Data',
    y: 9,
    radius: 6,
    boxScale: 2.5,
    items: [
      { label: 'Redux', textureKey: 'skill-redux' },
      { label: 'Recoil', textureKey: 'skill-recoil' },
      { label: 'Jotai', textureKey: 'skill-jotai' },
      { label: 'Node.js', textureKey: 'skill-nodejs' },
      { label: 'GraphQL', textureKey: 'skill-graphql' },
      { label: 'MySQL', textureKey: 'skill-mysql' },
      { label: 'Python', textureKey: 'skill-python' },
      { label: 'AWS', textureKey: 'skill-aws' },
      // TODO(meshy-assets): skill-express / skill-nest / skill-socket-io / skill-docker
    ],
  },
  {
    name: '3F · AI Tools',
    y: 14.5,
    radius: 5,
    boxScale: 2.2,
    items: [
      // TODO(meshy-assets): AI tool 로고 텍스처 준비 전까지 라벨만 유지
      { label: 'Claude Code' },
      { label: 'Cursor AI' },
      { label: 'ChatGPT Codex' },
      { label: 'n8n' },
      { label: 'Midjourney' },
      { label: 'Suno' },
      { label: 'ElevenLabs' },
      { label: 'Runway' },
      { label: 'Kling' },
      { label: 'Meshy AI' },
    ],
  },
  {
    name: '옥상 · Build & Tools',
    y: 19.5,
    radius: 4,
    boxScale: 2,
    items: [
      { label: 'Webpack', textureKey: 'skill-webpack' },
      { label: 'Vite', textureKey: 'skill-vite' },
      { label: 'esbuild', textureKey: 'skill-esbuild' },
      { label: 'Nx', textureKey: 'skill-nx' },
      // TODO(meshy-assets): skill-pnpm / skill-turborepo / skill-chromatic / skill-storybook
    ],
  },
];

export const SKILL_TOWER_POSITION = {
  x: -35,
  z: 55,
} as const;

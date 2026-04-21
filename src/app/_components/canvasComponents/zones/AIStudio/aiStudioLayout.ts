import { MODAL_KEY } from '@/store';

/**
 * AI 스튜디오 존 레이아웃.
 *
 * 6개의 AI 프로젝트를 중심 돔(스튜디오) 주변에 원형으로 배치한다.
 * 실제 좌표/회전은 `AIStudio.tsx` 의 원형 배치 루프에서 계산하고,
 * 여기서는 **어떤 프로젝트가 어떤 프롭 모양을 쓸지** 만 정의한다.
 * Meshy 교체 시 `propAnchor` 가 가리키는 docs/meshy-assets.md 섹션을 참조.
 */

export type AIPropAnchor =
  | 'hologram-screen'
  | 'server-rack'
  | 'robot-npc'
  | 'mic-studio'
  | 'film-camera';

export interface IAIStudioStop {
  /** content/resume/ai-projects 모듈의 `id` 와 동일해야 모달 매핑이 동작. */
  projectId: string;
  modalKey: MODAL_KEY;
  /** Meshy 교체 시 사용할 prop 종류 (docs/meshy-assets.md 앵커와 매칭). */
  propAnchor: AIPropAnchor;
  /** Meshy 납품 전까지 사용할 placeholder 색. */
  placeholderColor: string;
  /** Meshy 납품 전까지 사용할 placeholder 높이(boxGeometry Y). */
  boxHeight: number;
}

export const AI_STUDIO_POSITION = { x: -85, z: 85 } as const;
export const AI_STUDIO_RADIUS = 14;

export const AI_STUDIO_STOPS: IAIStudioStop[] = [
  {
    projectId: '88ight',
    modalKey: MODAL_KEY.AI_88IGHT,
    propAnchor: 'hologram-screen',
    placeholderColor: '#7ad3ff',
    boxHeight: 6,
  },
  {
    projectId: 'ai-newsbot',
    modalKey: MODAL_KEY.AI_NEWSBOT,
    propAnchor: 'server-rack',
    placeholderColor: '#5b5f66',
    boxHeight: 5,
  },
  {
    projectId: 'rag-slackbot',
    modalKey: MODAL_KEY.AI_RAG_BOT,
    propAnchor: 'server-rack',
    placeholderColor: '#8a85c9',
    boxHeight: 5,
  },
  {
    projectId: 'claude-code-memory',
    modalKey: MODAL_KEY.AI_CODE_MEMORY,
    propAnchor: 'robot-npc',
    placeholderColor: '#b8efc6',
    boxHeight: 4,
  },
  {
    projectId: 'agent-team',
    modalKey: MODAL_KEY.AI_AGENT_TEAM,
    propAnchor: 'robot-npc',
    placeholderColor: '#f0c3a3',
    boxHeight: 4,
  },
  {
    projectId: 'meme-push',
    modalKey: MODAL_KEY.AI_MEME_PUSH,
    propAnchor: 'film-camera',
    placeholderColor: '#ffb3c1',
    boxHeight: 4.5,
  },
];

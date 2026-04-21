import { IResumeAIProject } from '@/types';

export const agentTeamProject: IResumeAIProject = {
  id: 'agent-team',
  title: 'Claude Code 에이전트 팀 시스템',
  category: 'tooling',
  summary: '14개 페르소나, 22개 스킬 기반으로 구성한 멀티 에이전트 구조.',
  bullets: [
    '업무 유형별 페르소나 정의(Explore/Plan/Execute/Review 등)',
    '스킬 카탈로그 및 오케스트레이션 규약',
  ],
  tools: ['Claude Code', 'oh-my-claudecode'],
};

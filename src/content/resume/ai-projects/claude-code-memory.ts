import { IResumeAIProject } from '@/types';

export const claudeCodeMemoryProject: IResumeAIProject = {
  id: 'claude-code-memory',
  title: 'Claude Code 컨텍스트 메모리 오픈소스',
  category: 'tooling',
  summary: 'Claude Code 세션이 auto-compact 되어도 컨텍스트 누락을 방지하도록 설계한 메모리 시스템.',
  bullets: [
    '세션 초기화 상황에서도 프로젝트 맥락 복구',
    'Claude Code 에이전트 팀 시스템과 결합',
  ],
  tools: ['Claude Code', 'TypeScript'],
};

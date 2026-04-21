import { IResumeAIProject } from '@/types';

export const aiNewsbotProject: IResumeAIProject = {
  id: 'ai-newsbot',
  title: 'AI 뉴스 스크래핑 봇 "AI호외요"',
  category: 'automation',
  summary: 'n8n 기반 AI 뉴스 스크래핑 봇. 사내 전사 70+명 구독 중.',
  bullets: [
    '뉴스 소스 수집 → 요약 → Slack 자동 발행 파이프라인',
    '사내 AX 확산의 일상적 채널로 자리잡음',
  ],
  tools: ['n8n', 'OpenAI', 'Slack'],
};

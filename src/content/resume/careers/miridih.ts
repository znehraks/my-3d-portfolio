import { IResumeCareer } from '@/types';

export const miridihCareer: IResumeCareer = {
  id: 'miridih',
  company: '미리디',
  period: '2025.01 ~ 현재',
  role: '커머스프로덕트 AX 디자인시스템 리드',
  headline: 'AX 디자인시스템 개발 및 디자인→개발 파이프라인 AX화 주도',
  projects: [
    {
      title: 'AX 디자인시스템 리드',
      summary:
        '커머스 프로덕트 전반에서 사용할 디자인시스템을 React 19 + React Aria + vanilla-extract-css 기반으로 리드 구축.',
      bullets: [
        'Figma Code Connect + MCP 연동으로 디자이너↔개발자 커뮤니케이션 비용 절감',
        'RAG 기반 Slack 지식봇으로 디자인시스템 문의 자동 응대 (GraphRAG 전환 중)',
        'Claude Code 컨텍스트 메모리 오픈소스로 세션 초기화 시 컨텍스트 누락 방지',
        'n8n 기반 AI 뉴스 스크래핑 봇 "AI호외요" 운영, 전사 70+명 구독',
        'AX 스터디장으로서 팀 내 AX 마인드셋 전파, 동료평가에서 긍정 피드백',
        'DX 관점에서 Chakra UI의 높은 자유도, React Aria의 headless·접근성 철학을 결합',
        'Provider 기반 Compound Component Pattern 구현으로 확장 가능한 컴포넌트 구조 설계',
      ],
      stack: ['React 18→19', 'React Aria', 'vanilla-extract-css', 'Vite', 'esbuild/tsup'],
    },
  ],
  stack: ['React', 'React Aria', 'vanilla-extract-css', 'Vite', 'Figma MCP', 'n8n', 'RAG', 'Pinecone'],
};

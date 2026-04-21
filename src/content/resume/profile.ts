import { IResumeProfile } from '@/types';
import { contactLinks } from './contacts';

export const profile: IResumeProfile = {
  name: '유정민',
  roleTagline: 'AI Creator + Technical Artist · 메이킹이 즐거운 메이커',
  summary:
    '4년차 프론트엔드 개발자로 시작해 지금은 AI Creator + Technical Artist로 영역을 확장하고 있습니다. ' +
    '현재 미리디에서 AX 디자인시스템 리드를 맡으며 Figma Code Connect·MCP·RAG 기반 지식봇 등으로 디자인→개발 파이프라인의 AX화를 주도하고 있고, ' +
    '동시에 AI 영상 제작·자동화 워크플로우·3D 웹 게임 등 다양한 사이드프로젝트를 통해 아이디어를 현실로 만드는 일을 하고 있습니다.',
  philosophy: [
    {
      title: 'AI로 시작해서 AI로 끝난다',
      body:
        'AI가 가져다 주는 생산성 향상에 경이로움을 느끼고, 업무 전반에 적극적으로 활용합니다. ' +
        '처음 만들 때부터 자동화와 워크플로우 구축을 함께 설계합니다.',
    },
    {
      title: 'AI Agent 팀의 대표처럼',
      body:
        'AI Agent로 이루어진 작지만 인재밀도가 매우 높은 팀을 운영하는 자회사의 대표라는 관점으로 업무를 합니다. ' +
        '설계 역량과 내 생각을 자연어로 표현하는 능력을 훈련합니다.',
    },
    {
      title: '개발은 목적이 아니라 수단',
      body:
        '바로 개발에 착수하지 않고 내가 무엇을 만들고 있는지 먼저 찬찬히 생각합니다. ' +
        '좋은 아키텍처·UI/UX·코드 컨벤션에 깊은 관심을 두고, 읽히는 코드를 지향합니다.',
    },
    {
      title: '디자인 시스템과 컴포넌트 철학',
      body:
        'Atomic Design과 Compound Component Pattern의 장점에 공감해 사내 디자인 시스템을 구축·유지보수했습니다. ' +
        '서버/클라이언트 컴포넌트 특성을 이해하고 하이드레이션 최적화에 신경 씁니다.',
    },
    {
      title: '테스트와 문서',
      body:
        '내가 작성한 코드의 안정성을 보장하기 위해 테스트 코드의 가치를 챙기고, 비주기적으로 개발 블로그에 깨달음을 기록합니다.',
    },
  ],
  contact: contactLinks,
};

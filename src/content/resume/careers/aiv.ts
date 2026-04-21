import { IResumeCareer } from '@/types';

export const aivCareer: IResumeCareer = {
  id: 'aiv',
  company: '(주)아이브 (AiV)',
  period: '2023.12 ~ 2024.12',
  role: '프론트엔드 개발',
  link: 'https://aiv.ai/ko',
  projects: [
    {
      title: '사내 소개 사이트 유지보수',
      summary:
        '중복되게 작성된 컴포넌트 코드를 아토믹 디자인 패턴 기반으로 전면 리팩토링해 재사용성과 유지보수성을 높였습니다.',
      bullets: [
        '아토믹 디자인 패턴 적용으로 유지보수 시간 단축',
        '중복 컴포넌트 통합 및 재사용 가능 단위 분리',
      ],
      stack: ['React', 'Next', 'Redux'],
    },
    {
      title: '불량률 검출 통계데이터 조회 서비스 개발',
      summary:
        '통계 데이터 조회 페이지 및 데이터 재학습용 데이터 정제 기능 UI를 개발했습니다.',
      bullets: [
        'react-konva로 캔버스 상에서 드래그·포인터 이벤트로 불량 위치 재조정 기능 구현',
        '다양한 디바이스에서 일관된 스크롤 속도/이벤트 경험을 위한 별도 로직 구현',
        'ref + requestAnimationFrame으로 드래그·포인터 이벤트 오버헤드 감소, 버벅임 개선',
        '정리되지 않은 코드 네이밍/구조 컨벤션을 팀에 정리·적용',
      ],
      stack: ['React', 'Next', 'Redux', 'react-konva', 'GraphQL', 'NestJS'],
    },
    {
      title: '실시간 공정 설비 제어 서비스 개발',
      summary:
        '공정에서 불량 이미지 데이터를 수집하기 위한 설비 세팅 기능을 구현했습니다.',
      bullets: [
        '.exe 배포 환경이라는 특수한 조건에 맞게 제한적 라이브러리를 활용해 구현',
        'socket.io 기반 실시간 제어 흐름 구성',
      ],
      stack: ['React', 'Redux', 'react-konva', 'GraphQL', 'NestJS', 'socket.io'],
    },
    {
      title: '사내 디자인 시스템 구축',
      summary:
        'Atomic Design Pattern 기반으로 primitive→molecule→organism 단위 구조를 정립했습니다.',
      bullets: [
        'antd/headless-ui를 참고한 기본 컴포넌트 카테고리 구조 정립',
        'Table 등 범용 조합 컴포넌트를 Compound Component Pattern으로 organism까지 제공',
        'emotion styled-components → vanilla-extract 마이그레이션 계획 참여(서버 컴포넌트 대응)',
        'core-web-vitals 고려하여 webp/woff2·lazy-loading 적용',
        '리스트형 컴포넌트에 가상화 옵션 제공',
        'CDD/Storybook으로 디자이너 커뮤니케이션 비용 절감',
        'Parcel → esbuild로 빌드 속도 개선 중',
      ],
      stack: ['React', 'emotion', 'Storybook', 'Context', 'pnpm', 'Vite'],
    },
  ],
  stack: ['React', 'Next', 'Redux', 'GraphQL', 'NestJS', 'socket.io', 'react-konva', 'Storybook'],
};

import { IResumeCareer } from '@/types';

export const muhayuCareer: IResumeCareer = {
  id: 'muhayu',
  company: '(주)무하유',
  period: '2023.07 ~ 2023.11',
  role: '채용 플랫폼 프론트엔드 개발',
  projects: [
    {
      title: '채용 플랫폼 소프트팩토리 프론트엔드 개발 및 퍼블리싱',
      summary:
        '재사용 가능한 컴포넌트 구조를 고려하며 구현. 별도 디자인 시스템이 없는 상태에서 도메인별 최소 단위 컴포넌트를 설계.',
      bullets: [
        '도메인별 최소 단위 컴포넌트 구현·사용',
        'Figma 요구사항을 사용성 관점에서 심도 있게 구현',
      ],
      stack: ['React', 'Next', 'Recoil', 'React-Hook-Form'],
    },
    {
      title: '재사용성이 떨어지는 컴포넌트 구조 리팩터링',
      summary:
        '기존 코드 구조를 Atomic Design + Compound Component Pattern으로 전환하여 유지보수 비용을 낮춤.',
      bullets: [
        '인원 이동이 잦은 프로젝트 특성상, 신규 투입자의 코드 히스토리 파악 비용 최소화',
      ],
    },
    {
      title: '비효율적인 Data Fetching 구조 개선',
      summary:
        '5초 이상 걸리던 폴더 로딩 등 다수 UI fetching 로직을 1초 이내로 개선.',
      bullets: [
        '1차원 배열 응답을 tree 구조로 재가공해 조회 속도 향상',
        '폴더 최초 열림 시에만 페칭하고, 방문 처리된 트리는 중복 호출 방지 캐싱',
      ],
      stack: ['React Query', 'Axios'],
    },
    {
      title: '레거시 DB 아키텍처 재구축 작업 참여',
      summary:
        '잦은 Read가 발생하는 도메인 엔터티에 대해 반정규화를 적용해 과도한 JOIN으로 유발되던 비효율 로직 개선.',
      bullets: [
        '과하게 정규화된 엔터티를 부분 비정규화하여 성능 개선',
      ],
    },
  ],
  stack: ['React', 'Next', 'Recoil', 'React-Hook-Form', 'Axios', 'React Query', 'TinyMCE'],
};

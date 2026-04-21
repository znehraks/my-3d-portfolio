import { IResumeCareer } from '@/types';

export const fastcampusCareer: IResumeCareer = {
  id: 'fastcampus',
  company: '(주)데이원 컴퍼니 — 패스트캠퍼스',
  period: '2023.10 ~ 2024.03',
  role: '3D 인터랙티브 웹 강의 제작 및 촬영',
  projects: [
    {
      title: 'Three.js / R3F 기초 & 개념 강의',
      summary: 'Three.js와 @react-three/fiber의 기초 및 개념을 다루는 강의를 제작·촬영했습니다.',
      bullets: [
        '강의 촬영 회고록: https://designct.tistory.com/4',
      ],
      stack: ['Three.js', '@react-three/fiber'],
    },
    {
      title: 'Scroll Dancer — 스크롤 인터랙션 강의',
      summary: 'Three.js·R3F·GSAP으로 스크롤 인터랙션이 가미된 사이트 만들기 강의.',
      bullets: [
        '배포 URL: https://scroll-dancer.netlify.app/',
        '회고록: https://designct.tistory.com/6',
      ],
      stack: ['Three.js', 'R3F', 'GSAP'],
    },
    {
      title: 'three-3d-sns — 3D SNS 서비스 강의',
      summary: 'R3F·drei·cannon·eventHandling·utils를 사용한 3D SNS 서비스 제작 강의.',
      bullets: [
        '배포 URL: https://main--three-3d-sns.netlify.app/',
        '회고록: https://designct.tistory.com/7',
      ],
      stack: ['R3F', 'drei', 'cannon', 'TypeScript'],
    },
  ],
  stack: ['Three.js', 'R3F', 'drei', 'cannon', 'GSAP'],
};

import { IResumeCareer } from '@/types';

export const lab724Career: IResumeCareer = {
  id: 'lab724',
  company: '주식회사 724랩',
  period: '2020.03 ~ 2021.02',
  role: '공동창업 · 풀스택 개발 · 데이터 분석',
  projects: [
    {
      title: '서비스 소개 사이트 풀스택 개발 및 인프라 구축',
      summary:
        '서비스 소개 사이트의 프론트엔드·백엔드 및 인프라 전반을 직접 개발·구축.',
      bullets: [
        'React·Express 기반 프론트·백엔드 개발',
        'AWS RDS·Netlify·Heroku로 인프라 구축',
      ],
      stack: ['React', 'Express', 'AWS RDS', 'Netlify', 'Heroku'],
    },
    {
      title: '와디즈 펀딩 취향 찾기 서비스 기획·구현',
      summary:
        '와디즈 펀딩 상세 페이지에서 고객 데이터를 수집할 용도로 만든 취향 찾기 서비스를 기획·구현하고, 수집 데이터를 분석해 인사이트를 도출.',
      bullets: [
        '취향 매칭 UX 설계 및 구현',
        '수집 데이터 기반 고객 데이터 분석 및 인사이트 도출',
      ],
    },
  ],
  stack: ['React', 'Express', 'AWS RDS', 'Netlify', 'Heroku', 'Python'],
};

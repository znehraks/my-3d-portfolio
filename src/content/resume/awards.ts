import { IResumeAward } from '@/types';

export const awards: IResumeAward[] = [
  {
    id: 'myongji-convergence-1st',
    title: '명지 Campus Convergence 창의 융합 아이디어 공모전 최우수 (1위)',
    rank: 'gold',
    date: '2016.06',
    description: '노인 가구 고독사 방지 프로그램 "응답하라"를 기획함.',
  },
  {
    id: 'incheon-public-data-2nd',
    title: '제7회 인천광역시 공공데이터 활용 창업 분석 경진대회 우수상 (2위)',
    rank: 'silver',
    date: '2021.08',
    description:
      '대학생을 위한 자취지역 추천 서비스 "유니방시티"를 기획·개발. React 프론트 + Express/Python 백엔드 api 서버 연동.',
    stack: ['React', 'Express', 'Python', 'AWS RDS', 'Netlify', 'Heroku'],
  },
  {
    id: 'kopis-bigdata-2nd',
    title: '제1회 KOPIS 빅데이터 분석 공모전 우수상 (2위)',
    rank: 'silver',
    date: '2021.09',
    description:
      '코로나로 어려움을 겪은 공연예술계 극복 방안을 제시한 "공연예술백신 프로젝트" 기획·개발. Python 분석 결과를 React 차트로 시각화.',
    stack: ['React', 'Express', 'Python', 'scikit-learn', 'AWS RDS', 'Netlify'],
  },
];

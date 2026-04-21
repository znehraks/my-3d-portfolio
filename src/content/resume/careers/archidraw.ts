import { IResumeCareer } from '@/types';

export const archidrawCareer: IResumeCareer = {
  id: 'archidraw',
  company: '(주)아키드로우',
  period: '2022.05 ~ 2023.06',
  role: '3D WebGL 기반 사내 서비스 프론트엔드 개발',
  projects: [
    {
      title: '아키스케치 — Three.js(R3F) + Pixi.js 기반 3D 홈퍼니싱 에디터 유지보수',
      summary:
        'Pixi.js로 2D 뷰 인터랙션·그리기 기능을, Three.js로 3D 뷰 인터랙션·복사 기능을 꾸준히 유지보수.',
      bullets: [
        'CAD 배열/회전/거울/복사 기능 전면 개편, 디자인팀 사용성 피드백 긍정',
        '불필요한 렌더 로직 개선으로 성능 향상',
        '3D 평면 스냅·가구 에셋 복사 기능 유지보수 및 개선',
      ],
      stack: ['Three.js', 'R3F', 'Pixi.js'],
    },
    {
      title: '3D 건축 자재 삽입 기능 개발',
      summary:
        '고객사 Needs에 따라 기둥·우물천장·신발장·계단 등 건축 구조물을 3D 에셋으로 자유자재로 구성할 수 있는 기능 개발.',
      bullets: ['다양한 건축 자재를 에셋 기반으로 배치/편집'],
    },
    {
      title: '3D 평면의 Vector/Quaternion 연산 기반 자재 편집',
      summary: '3D 공간에서 배치된 건축 자재의 이동/복사/스케일 조정 기능 구현.',
      bullets: ['Vector/Quaternion 연산 기반의 편집 조작'],
    },
    {
      title: 'R3F의 glb 사용에 따른 성능 개선',
      summary: '다량 모델링 에셋 로딩 로직에 캐싱을 도입하고 인스턴싱 처리해 성능을 개선.',
      bullets: ['Instancing 적용', '순간 다량 로딩 완화를 위한 캐싱 처리'],
    },
    {
      title: '시숲 가구 쇼핑몰 상세페이지 개발',
      summary:
        'model-viewer 라이브러리를 활용해 3D 에셋을 쇼핑몰 상세 페이지 UI에 매끄럽게 녹임.',
      bullets: [
        '3D 에셋 로딩 시간 숨김을 위한 기본 이미지 + model-viewer 조합 UI 기획/구현',
      ],
      stack: ['model-viewer'],
    },
    {
      title: '시숲 쇼핑 플로우 전반 UI 개발',
      summary: '상세→장바구니→구매→구매이력 조회까지의 전체 플로우 UI 구현.',
      bullets: [
        '쿠폰 선택 및 최저가 조합 산출 UI',
        '장바구니 조합 별 최저가 산출 UI',
        '타임세일 기능',
        '구매 페이지 및 결제 API 호출 로직',
        '구매 내역 조회 페이지',
      ],
    },
    {
      title: '시숲 사내 어드민(샵매니저) 전면 개발 및 유지보수',
      summary: '상품 구매/배송 단계 관리, 쿠폰·타임세일 관리, 사내 MD가 사용하는 어드민 전 기능 구현.',
      bullets: [
        '상품 구매/배송 관리 기능',
        '쿠폰·타임세일 관리 기능',
        '사내 MD용 어드민 전 기능 구현',
      ],
    },
    {
      title: 'Atomic Design 기반 컴포넌트 제작',
      summary: '아토믹 디자인 원칙을 최대한 준수하며 공용 컴포넌트를 제작·정비.',
      bullets: ['재사용 가능 컴포넌트 계층 정립'],
    },
  ],
  stack: [
    'React',
    'Three.js',
    'R3F',
    'drei',
    'Next',
    'Recoil',
    'Redux',
    'Redux-Saga',
    'React-Hook-Form',
    'SWR',
    'CKEditor',
    'Pixi.js',
  ],
  link: 'https://www.archisketch.com/kr',
};

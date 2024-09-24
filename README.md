## DesignC의 포트폴리오 페이지

### ToDo

#### Client 코드

- vanilla extract css로 스타일
- Atomic Design, Compound Component Pattern
- Threejs, R3F, @react-three/drei 를 활용
- socket.io 활용
- 컴포넌트 성격 별 fetching 방식 분리(클라이언트 컴포넌트 사용 최소화)
  - Server Component
    - react-query로 prefetch 후, 캐시처리
  - Client Component
    - 서버컴포넌트에서 prefetch된 쿼리 활용
    - jotai로 ui만 건드리는 global state를 관리
- Rust 코드를 활용하여 성능 개선이 가능한 부분부터 WASM 적용

#### Server 코드

- 실시간 backend server는 기존에 존재하는 socket.io 활용
- 비실시간 코드는 firebase로 간단히 구성

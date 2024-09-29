## DesignC의 포트폴리오 페이지

### ToDo

1. 기술스택 박스 배치하기
   1-1. 기술스택 존을 배치하고, 클릭하면 모달을 띄워서 포트폴리오 목록 보여주기
2. 표지판 배치하고, 누르면 어디로 가면 뭐가 있는지 설명해주는 기능 넣기
3. pointer 이벤트로 캐릭터 위치 이동 제어
   2-1. 위치 계산 로직을 Rust로 계산
4. 내 이력등을 볼 수 있는 모델링 요소와 UI 추가
5. 마이룸 꾸미기 기능 추가(방명록 처럼 남기기)
6. Socket.io 혹은 firebase 연동(입장할 때, 비밀번호 등을 받아서, 다시 접속해도 유지되도록?)

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

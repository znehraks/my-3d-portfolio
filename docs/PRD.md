# PRD — 3D 포트폴리오 이력서 통합

문서 상태: **v4 (Phase A·B 완료 + 월드 스케일 조정, Phase C 대기 · 2026-04-21)**
오너: 유정민 (@znehraks)
단계 요약: Phase A ✅ / Phase B ✅ (월드 스케일 축소 포함) / Phase C 실물·수동 작업(후순위)

---

## 1. Problem Statement

현재 `my-3d-portfolio`는 R3F 기반 3D 놀이터 뷰만 있고, 이력서 정보(소개·경력·AI 프로젝트·기술 스택·수상·자격증·학력)를 사이트 어디에서도 온전히 전달하지 못했다. Notion에 있는 이력서는 비공개·SPA라서 구글/스크린리더가 읽지 못하고, 병행 개발하던 v0 포트폴리오는 **폐기 예정**이다. 이 저장소를 유정민의 유일한 공개 포트폴리오로 만들고, 외부에서 "유정민 미리디 디자인시스템"을 검색해도 결과가 잡히게 하는 것이 목적이다.

## 2. Vision & Positioning

> **"AI Creator + Technical Artist, 메이킹이 즐거운 메이커"** — 이력서를 "스크롤해서 읽는 문서"가 아니라 "걸어 다니며 체험하는 테마파크"로 제시한다. 게이미피케이션은 메이커의 정체성을 증폭하는 표현 수단이며, 동시에 검색엔진/스크린리더/모바일 사용자에게도 이력서 본문을 손실 없이 전달한다.

## 3. Target Users & Jobs To Be Done

| 페르소나 | 목표 | 지금의 불편 |
|---|---|---|
| 채용 담당자(리크루터) | 짧은 시간에 핵심 경력·기술 훑기 | 3D만 있어 경력/스택 확인 불가 |
| 개발자 동료/커뮤니티 | 기술 선택 근거·사이드프로젝트·철학 파악 | Notion 접근 권한 없음 |
| 미팅 상대 / 협업 요청자 | 연락처·이력 문맥 확인 | 채널 분산(구 포트폴리오/Notion/v0) |
| 구글 크롤러 | 인덱싱 | canvas 내부 텍스트 접근 불가 |
| 스크린리더 사용자 | 이력서 내용 청취 | canvas 미접근 |

## 4. Goals & Metrics — 현재 상태

**제품 목표**
- G1. Notion 이력서의 **모든 섹션**이 이 3D 공간 안에서 접근 가능하다.
- G2. 3D에 관심 없는 사용자도 `sr-only` HTML 또는 Phase B의 `/resume`으로 **텍스트 이력서에 도달**할 수 있다.
- G3. "유정민 포트폴리오", "znehraks", "메이커 유정민" 등의 키워드로 구글 인덱싱이 된다.
- G4. 모바일 터치·데스크톱 마우스 두 환경 모두에서 핵심 경험이 동작한다.

**달성 현황**
| 지표 | 상태 |
|---|---|
| G1. 이력서 전 섹션 접근 | 🟢 content 레이어 + sr-only 전문 + JSON-LD + 3D 모달(인트로/연락처/경력 6/AI 6/수상 3/자격증/학력)로 **전 섹션 노출 완료** |
| G2. 텍스트 이력서 도달 | 🟢 `sr-only` + `/resume` 라우트 제공 (Footer에 링크 노출) |
| G3. 구글 인덱싱 | ⏳ 메타·JSON-LD·sr-only·`/resume` 준비 완료. 배포 후 색인 확인 필요 |
| G4. 모바일/데스크톱 동작 | 🟡 코드·에뮬레이션 기준 OK, 실기기 확인은 Phase C |
| M1. Lighthouse SEO ≥ 90 / A11y ≥ 95 | ⏳ **후순위(Phase C)** — 수동 측정 필요 |
| M2. 간판 클릭 → 모달 E2E | 🟢 `?modal=<KEY>` 쿼리 브릿지 + 10개 대표 시나리오 + ESC 닫기 자동 검증 |
| M3. sr-only DOM 키워드 (회사·수상·기술) | 🟢 Playwright로 검증됨 |
| M4. 모바일 프레임레이트 | ⏳ **후순위(Phase C)** |
| M5. 콘솔 에러 0 | 🟢 (home/modals 스펙 모두 검증) |

## 5. Non-Goals (명시적 제외)

- 실시간 멀티플레이(소켓 브로드캐스트, 채팅) — `src/clientSocket.ts`·`ClientSocketControls`는 **컴포넌트 트리에 장착하지 않은 상태 유지**.
- 로그인/회원가입·방명록.
- NPC 대화 시스템, 음성, BGM.
- 수집 뱃지·미니게임·퀘스트.
- 자체 영상 호스팅(88ight은 YouTube 임베드로 대체).
- 다국어(i18n) — 한국어만 지원.
- Firebase/DB 연동, 비밀번호 게이트.
- Rust/WASM 적용(README ToDo 항목이지만 본 PRD 범위 밖).
- Physics(cannon) 도입.

## 6. Scope Overview

### Phase A (MVP) — ✅ 완료

| 항목 | 대표 경로 |
|---|---|
| A-0 문서 시드 | `docs/PRD.md`, `docs/IMPLEMENTATION_PLAN.md`, `docs/meshy-assets.md`, README.md |
| A-1 콘텐츠 레이어 | `src/content/resume/**`, `src/types.ts` |
| A-2 SEO / sr-only / JSON-LD | `src/app/_components/seo/ResumeStructuredData.tsx`, `ResumeSrOnly.tsx`, `src/app/layout.tsx` |
| A-3 모달 시스템 | `src/store/index.ts` MODAL_KEY, `src/app/_components/common/Modal.tsx`, `canvasUis/modals/**` |
| A-4 인트로 존 업그레이드 | `canvasUis/NoticeBanner.tsx`, `groundObjects/WoodenSign.tsx`, `groundObjects/GroundObjects.tsx` |
| A-5 기술 타워 존 | `canvasComponents/zones/SkillTower/**` |
| A-6 경력 거리 존 | `canvasComponents/zones/CareerStreet/**` |
| A-7 존 감지 + 입장 배너 | `canvasComponents/zones/zoneBounds.ts`, `groundPlayer/usePlayer.ts`, `canvasUis/ZoneEntranceBanner.tsx` |
| A-8 테스트 / 릴리스 게이트 | Vitest 9 files · 25 tests green, Playwright 3 specs green, `next build` green |

### Phase B — ✅ 완료 (코드 전용)

| 항목 | 대표 경로 / 결과 |
|---|---|
| B-0 MODAL_KEY 확장 | `src/store/index.ts` — AI_* 6 + CERTIFICATIONS / EDUCATION 추가 |
| B-1 AI 스튜디오 존 | `canvasComponents/zones/AIStudio/**`, `canvasUis/modals/AIProjectModal.tsx` (88ight YouTube iframe 포함) |
| B-2 명예의 전당 존 | `canvasComponents/zones/HallOfFame/**`, `AwardModal` / `CertificationsModal` / `EducationModal` |
| B-3 `/resume` 라우트 | `src/app/resume/page.tsx` + Footer 링크 |
| B-4 zone 감지 확장 | `zoneBounds.ts` `ai-studio` / `hall-of-fame` AABB + 테스트 |
| B-5 E2E 모달 커버리지 | `ModalRouter` 내 `?modal=<KEY>` 브릿지 + `tests/e2e/modals.spec.ts` (14 specs) |
| B-6 코드 위생 | 레거시 `Unused eslint-disable` 7 + 1건 제거, `pnpm lint` warning 0 달성 |
| B-7 릴리스 게이트 | lint / typecheck / vitest 13·33 / playwright 14 / `next build` 모두 green |

### Phase C (후순위, 실물·수동 작업) — **오너 직접 수행 항목**

> 아래 항목은 Claude가 단독으로 진행 불가(외부 툴/실기기/배포/사용자 판단 필요).
> 완료되는 대로 각 항목을 체크하고, 필요한 코드 연동은 Claude에게 지시.

- [ ] **C-1. Meshy 실물 에셋 제작·교체**
  - 재료: `docs/meshy-assets.md` 의 Text-to-3D + Image 프롬프트
  - 산출물: `public/models/*.glb` (파일명은 카탈로그 그대로)
  - 코드 연동: `rg "🧩 Placeholder"` 로 교체 지점 나열 → Claude가 `useGLTF` 로 전환
  - 완료 조건: `docs/meshy-assets.md` Status 컬럼 🟡 → 🟢 일괄
- [ ] **C-2. Lighthouse 측정 & 대응**
  - 방법: `pnpm dev` 또는 배포 URL 에서 Chrome DevTools Lighthouse
  - 목표: SEO ≥ 90, Accessibility ≥ 95
  - 결과 공유 시 Claude 가 회귀 이슈 조치
- [ ] **C-3. 모바일 실기기 점검**
  - 대상: iPhone Safari + Android Chrome (Galaxy 권장)
  - 체크: 존 이동, 간판 클릭, 모달 열고 닫기, `HelpTooltip` 표시, `/resume` 가독성
  - 발견 이슈 공유 시 Claude 가 코드 패치
- [ ] **C-4. 배포 & SEO 인덱싱**
  - Netlify/Vercel 배포 후 Google Search Console 에 사이트 등록
  - `sitemap.xml` / `robots.txt` 필요 시 Claude 에게 추가 지시
- [ ] **C-5. NPC 대화 / 수집 뱃지 / BGM**
  - 기획 방향 결정 후 재착수 (UX 스펙 확정 필요)
- [ ] **C-6. 88ight 자체 호스팅 전환**
  - 비용/저작권 판단 후 webm 자체 호스팅 여부 결정
- [ ] **C-7. `git push` / PR 승인**
  - CLAUDE.md 규약상 Claude 는 자동 push 금지. 오너가 승인할 때마다 push 실행.

## 7. Functional Requirements

### FR-1. 콘텐츠 단일 소스
- `src/content/resume/*` 는 Notion 이력서와 1:1 매핑되는 TypeScript 데이터 모듈.
- 각 모듈은 **UI 없이 데이터만** 노출.
- 3D 모달, `sr-only` HTML, JSON-LD, 향후 `/resume` 모두 이 모듈에서 import.

### FR-2. 월드 레이아웃
- 현재 배치된 존: **놀이터(인트로)**, **기술 타워**, **경력 거리**. Phase B에 **AI 스튜디오**, **명예의 전당** 추가.
- 존 간 이동: 걸어서 이동 (`Floor` 포인터 이동). 길은 `Rock Path Round Wide.glb` 인스턴싱.
- 좌표(실구현 반영, 2026-04-21 스케일 축소):
  - Intro: `(0,0,0)` 반경 ≈ 60
  - Career Street: `(0,0,80) ~ (0,0,180)` 직선, 좌우 ±14 에 건물 6개 (90/105/120/135/150/165)
  - Skill Tower: `(85,0,85)` 반경 ≈ 15
  - AI Studio: `(-85,0,85)` 반경 ≈ 18
  - Hall of Fame: `(0,0,-110)` footprint ±18 × ±12
  - OrbitControls `maxDistance = CAMERA_DISTANCE × 4` (≈240) — 전체 월드 줌아웃 가능
- `GROUND_MAP_SIZE` 500 유지.

### FR-3. 상호작용
- **WoodenSign 클릭** → 공용 컴포넌트가 `modalKey` prop 기반으로 `OpenModalKeyAtom` 을 설정, `ModalRouter` 가 해당 모달을 렌더.
- 모달 닫기: **ESC 키**, **바깥 영역 클릭**, 헤더 **✕ 버튼** 모두 지원.
- 존 진입 시 `ZoneEntranceBanner` 컴포넌트가 존 이름·이모지·설명을 3초 페이드로 표시.

### FR-4. SEO / 접근성
- `src/app/layout.tsx`의 `metadata` — title/description/openGraph/twitter/canonical/authors.
- schema.org **Person / ProfilePage** JSON-LD 를 `ResumeStructuredData.tsx` 가 `<body>` 최상단에 삽입.
- `<main className="sr-only">` 내부에 이력서 전문(`h1` → `h3`) 렌더. Tab 순서 맨 앞.
- `<html lang="ko">` 유지.
- 모든 모달은 `role="dialog"` + `aria-modal="true"` + `aria-label`.

### FR-5. 에셋 관리
- `docs/meshy-assets.md` 는 **에셋 정본 카탈로그**.
- 각 에셋 엔트리: Meshy Text-to-3D 프롬프트 / 레퍼런스 이미지 프롬프트 / `public/models/*.glb` 파일명 / 사용 컴포넌트 경로 / 교체 상태(🟡/🟢).
- 코드에서 `useGLTF` 또는 프리미티브 플레이스홀더 **바로 위** 에 `// 🧩 Meshy asset — swap-ready. Prompt/spec: docs/meshy-assets.md#<앵커>` 혹은 `{/* 🧩 Placeholder — replace with Meshy asset per docs/meshy-assets.md#<앵커> */}` 주석 **필수**.
- 일괄 추적 팁: `rg "🧩 Placeholder"` / `rg "🧩 Meshy"`.

### FR-6. 모바일
- 터치로 존 이동·간판 클릭·모달 열고 닫기 동작.
- OrbitControls 핀치 줌·드래그 회전 기본값 유지.
- `HelpTooltip` 의 Mobile/Desktop 분기 유지.
- `max-[501px]` 브레이크포인트 기존 스타일 유지.

### FR-7. 성능
- 초기 로드에서 불필요한 GLB 중복 로딩 없음 (`useGLTF.preload` 활용).
- Path·반복 오브젝트는 `@react-three/drei` `Instances` 사용.
- 프로덕션 빌드 시 초기 JS 번들 사이즈 ≤ 2MB 목표.

## 8. Non-Functional Requirements

- **브라우저**: 최신 Chrome/Safari/Edge/Firefox. Android Chrome, iOS Safari 포함.
- **디바이스**: Desktop 1440px~, Mobile 375px~.
- **프레임레이트**: Desktop 60fps, Mobile ≥ 30fps (중저가 기기 허용).
- **개인정보**: 연락처는 email / GitHub / velog / tistory 공개 채널만. 전화번호 비포함.
- **저작권**: Footer 크레딧 유지. 회사 로고는 상표 용도로만 사용(상세 정보는 텍스트 기반).

## 9. Data Model — `src/types.ts` 실제 구현

```ts
export interface IResumeContactLinks {
  email: string;
  github: string;
  velog: string;
  tistory: string;
  portfolioLegacy?: string;
  youtube?: string;
}

export interface IResumeProfile {
  name: string;
  roleTagline: string;
  summary: string;
  philosophy: { title: string; body: string }[];
  contact: IResumeContactLinks;
}

export interface IResumeCareerProject {
  title: string;
  summary: string;
  bullets: string[];
  stack?: string[];
}

export type ResumeCareerId =
  | 'miridih'
  | 'aiv'
  | 'fastcampus'
  | 'muhayu'
  | 'archidraw'
  | 'lab724';

export interface IResumeCareer {
  id: ResumeCareerId;
  company: string;
  period: string;
  role: string;
  headline?: string;
  projects: IResumeCareerProject[];
  stack: string[];
  link?: string;
}

export type ResumeAIProjectCategory = 'video' | 'automation' | 'game' | 'tooling';

export interface IResumeAIProject {
  id: string;
  title: string;
  category: ResumeAIProjectCategory;
  summary: string;
  bullets: string[];
  tools: string[];
  links?: { label: string; url: string }[];
}

export type ResumeSkillLevel = 'proficient' | 'familiar' | 'ai-tools' | 'collab-tools';

export interface IResumeSkillItem {
  key: string;
  label: string;
  textureKey?: string;
}

export interface IResumeSkillGroup {
  level: ResumeSkillLevel;
  label: string;
  subgroups: { title: string; items: IResumeSkillItem[] }[];
}

export type ResumeAwardRank = 'gold' | 'silver' | 'bronze';

export interface IResumeAward {
  id: string;
  title: string;
  rank: ResumeAwardRank;
  date: string;        // YYYY.MM
  description: string;
  stack?: string[];
}

export interface IResumeCertification { title: string; date: string; }
export interface IResumeEducation { school: string; major: string; period: string; gpa?: string; }
```

## 10. Risks & Mitigations

| 위험 | 영향 | 완화책 |
|---|---|---|
| Meshy 에셋 품질·스타일 편차 | 월드 톤 파손 | 공통 스타일 접미사 프롬프트 + 플레이스홀더로 선구현 |
| 3D 로드 무게 증가 → 모바일 FPS ↓ | 이탈률 증가 | `Instances`/`useGLTF.preload`, 리소스 lazy-load |
| content 레이어 ↔ sr-only / JSON-LD / 모달 동기화 실패 | 이력서-UI 불일치 | content 레이어 단일 소스 원칙, 데이터 스냅샷 테스트 |
| Phase B `/resume` 텍스트 라우트 중복 유지보수 | 모바일 경험 저하 | 동일 content 모듈 import, Tailwind Typography로 자동 렌더 |
| AI 스튜디오 존 UI 다양성 폭발(영상/봇/에이전트) | 유지보수 비용 증가 | 공용 `AIProjectModal` + `content/resume/ai-projects/*` 단일 경로 |
| 소켓 코드가 미연결 상태로 남아 혼선 | 오해 | README/PRD에 "ClientSocketControls 미장착" 명시 유지 |
| OrbitControls가 맵 확장에서 카메라 제한에 걸림 | 이동 어색 | 카메라 프리셋 + `maxDistance` 재조정 (Phase B에서 확인) |
| meshy 애니메이션 매핑(Idle=Running 의심) | 캐릭터 애니 이상 | `usePlayer.ts` 매핑 재검증은 별도 티켓으로 분리 |

## 11. Open Questions

- **Q1 `/resume` 라우트** → **Phase B In Scope 결정**. 닫힘.
- Q2 88ight 영상: MVP YouTube 임베드 유지, 자체 호스팅 전환은 **Phase C 재검토**.
- Q3 회사 로고 상표권 가이드라인: Phase C 에셋 교체 시 재검토.
- Q4 수집 뱃지 저장소(localStorage vs Firebase): Phase C 재검토.
- Q5 Lighthouse 자동화(`playwright-lighthouse`)를 Phase B에 포함할지 별도 DevOps 티켓으로 뺄지.
- Q6 Meshy 일괄 납품 vs 점진 교체 전략.

## 12. Release Plan

| Phase | 상태 | 기간(러프) | 주요 산출물 |
|---|---|---|---|
| A (MVP) | ✅ 완료 | — | A-0 ~ A-8 전부 녹여넣음. lint / typecheck / vitest 9·25 / playwright 3 / `next build` 모두 green |
| B (코드 전용) | ✅ 완료 | — | B-0 ~ B-7 전부 녹여넣음. lint 0 warning / typecheck / vitest 13·33 / playwright 14 / `next build` 모두 green |
| C (후순위) | 대기 | 실물 납품·수동 작업 블록에 맞춰 | Meshy 에셋 교체, Lighthouse, 모바일 실기기, NPC/뱃지/BGM, 88ight 자체 호스팅 재검토 |

각 Phase 완료 시 `tests/e2e/home.spec.ts` 확장분·측정 결과를 PR 설명에 첨부한다.

## 13. Process — Commit Cadence (강제 규약)

> 사용자 지시: **"중간중간 커밋하면서 하는 걸 잊지 말라"**. Phase A 후반에 일괄 미커밋 상태가 쌓인 사례 재발 방지.

- 각 실행 체크리스트 항목(예: B-1, B-2 …)은 **독립 커밋**으로 끊는다.
- 커밋 메시지는 `~/.claude-personal/CLAUDE.md` 의 전역 Commit Protocol 준수:
  - `type(scope): subject` 형식
  - body 에 `Constraint:` / `Rejected:` / `Directive:` / `Confidence:` / `Scope-risk:` trailer (trivial 제외)
  - `Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>`
- 브랜치 전략: Phase 단위 브랜치(`phase-b` 등) 권장, 생성·전환은 사용자 명시 지시 후에만.
- **`git push` / `gh pr create` 는 절대 자동 실행 금지** — 사용자가 명시 요청할 때만.
- 한 파일이 여러 체크리스트에 걸치면 결합 커밋을 허용하되, 메시지에 결합 이유를 명시.

## 14. 참조 문서

- 실행 체크리스트(정본): [`docs/IMPLEMENTATION_PLAN.md`](./IMPLEMENTATION_PLAN.md)
- 에셋 카탈로그(정본): [`docs/meshy-assets.md`](./meshy-assets.md)
- 승인된 최종 플랜(로컬): `~/.claude-personal/plans/purring-pondering-minsky.md`
- 이력서 원본(비공개): <https://www.notion.so/jay-three/329e5db74b4f8108ba2cdc74db2be9df>

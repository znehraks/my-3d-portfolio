# Implementation Plan — Phase A (MVP)

관련 문서
- 요구사항: [`docs/PRD.md`](./PRD.md)
- 에셋 카탈로그: [`docs/meshy-assets.md`](./meshy-assets.md)
- 최종 플랜 원본: `~/.claude-personal/plans/purring-pondering-minsky.md`

## 의존성 그래프

```
A-0 (docs)
  └─ A-1 (content) ─┬─ A-2 (SEO)
                    ├─ A-3 (modals) ─┬─ A-4 (Intro zone)
                    │                ├─ A-5 (Skill Tower)
                    │                └─ A-6 (Career Street)
                    │                             │
                    └──── A-7 (Zone detector) ────┘
                                                  │
                                            A-8 (Tests) ── Release
```

각 단계는 **독립 커밋**. 아래 체크박스를 PR/커밋과 연동한다.

---

## A-0. 에셋 문서 정본 수립

**목표**: Meshy AI로 생성할 모든 3D 에셋을 단일 md 문서에 카탈로그화하고 앵커를 부여.

**작업**
- [ ] `docs/meshy-assets.md` 생성 (본 단계에서 PHASE 시작 전 작성, 초안은 본 PR에서 커밋).
- [ ] 상단에 공통 스타일 가이드·주석 규약 1회 명시.
- [ ] 존별 섹션 4개: Zone 0 / Zone 1 / Zone 2 / Zone 3 / Zone 4.
- [ ] 각 에셋 엔트리 필수 필드: Anchor, Text-to-3D Prompt, Image Prompt, File(`public/models/xxx.glb`), Used In(컴포넌트 경로), Status(🟡 placeholder / 🟢 final), Notes.
- [ ] `README.md` 말미에 "Docs: `docs/PRD.md`, `docs/IMPLEMENTATION_PLAN.md`, `docs/meshy-assets.md`" 링크 섹션 추가.

**Definition of Done (DoD)**
- 플랜 파일의 Zone 1~4 에셋 표가 모두 이관됨.
- 다른 문서에서 `docs/meshy-assets.md#<anchor>`로 링크 가능.

---

## A-1. 콘텐츠 레이어

**목표**: 이력서 전 섹션을 UI 무관한 TypeScript 데이터 모듈로 단일화.

**작업**
- [ ] `src/types.ts`에 `IResumeProfile / IResumeCareer / IResumeCareerProject / IResumeAIProject / IResumeSkillGroup / IResumeAward / IResumeCertification / IResumeEducation` 타입 추가 (PRD §9 참조).
- [ ] `src/content/resume/` 디렉터리 생성 및 아래 파일 작성:
  - `profile.ts` — 태그라인, summary, philosophy 블록, 연락처.
  - `contacts.ts` — email/GitHub/velog/tistory URL 상수.
  - `careers/index.ts` — 회사 배열(최신순).
  - `careers/miridih.ts`, `aiv.ts`, `muhayu.ts`, `archidraw.ts`, `lab724.ts`, `fastcampus.ts`.
  - `ai-projects/index.ts`, `88ight.ts`, `ai-newsbot.ts`, `rag-slackbot.ts`, `claude-code-memory.ts`, `agent-team.ts`, `meme-push.ts`.
  - `skills.ts` — 레벨별 그룹(proficient/familiar/ai-tools/collab-tools).
  - `awards.ts` — 3건.
  - `certifications.ts` — 5건.
  - `education.ts` — 명지대 1건.
- [ ] 각 파일은 **export const**로 상수 내보내기만. import해서 바로 쓸 수 있어야 함.
- [ ] `src/content/resume/__tests__/schema.test.ts` — Vitest로 타입 정합성 + 필수 필드 스냅샷.

**DoD**
- 어떤 UI 파일도 수정하지 않고 `pnpm typecheck` 통과.
- `pnpm test`에서 content schema 테스트 통과.
- 모든 content 모듈은 이력서 Notion 내용과 1:1 매핑.

---

## A-2. SEO / 접근성 기반

**목표**: 검색엔진·스크린리더가 이력서 전문에 접근 가능.

**작업**
- [ ] `src/app/layout.tsx` → `export const metadata` 확장: title, description, openGraph, twitter, metadataBase, canonical.
- [ ] `src/app/_components/seo/ResumeStructuredData.tsx` — schema.org `Person` + `ProfilePage` JSON-LD 컴포넌트(서버 컴포넌트). content 레이어에서 데이터 로드.
- [ ] `src/app/_components/seo/ResumeSrOnly.tsx` — 시맨틱 HTML 렌더: `<main className="sr-only">` 내부에 h1~h3 구조 + 본문 + 연락처. content 레이어 import.
- [ ] `src/app/layout.tsx`에 두 컴포넌트 장착 (Footer와 같은 레벨, canvas 바깥).
- [ ] `src/app/globals.css`에 Tailwind `sr-only` 유틸 내장 확인 (Tailwind v4 기본 제공, 없을 시 보강).
- [ ] `src/app/_components/seo/__tests__/ResumeSrOnly.test.tsx` — 각 회사명/수상명/직군 태그라인 렌더 검증.

**DoD**
- DOM에서 "유정민", "미리디", "AiV", "무하유", "아키드로우", "724랩", "패스트캠퍼스", "KOPIS"가 검색됨.
- JSON-LD 스크립트 파싱 가능(구글 Rich Results Test).
- Lighthouse Accessibility ≥ 95.

---

## A-3. 모달 시스템 확장

**목표**: 이력서 섹션별 모달을 단일 `Modal` 컴포넌트 위에 얇게 얹는다.

**작업**
- [ ] `src/store/index.ts` `MODAL_KEY` enum 확장:
  - `INTRO_ABOUT`, `CONTACTS`
  - `CAREER_MIRIDIH`, `CAREER_AIV`, `CAREER_MUHAYU`, `CAREER_ARCHIDRAW`, `CAREER_LAB724`, `CAREER_FASTCAMPUS`
  - `AWARD_KOPIS`, `AWARD_INCHEON`, `AWARD_MYONGJI` (Phase B에서 활성)
- [ ] `Modal.tsx` 내부 콘텐츠 영역을 스크롤 가능하게 확장(현재 고정 300x300 → 반응형).
- [ ] `src/app/_components/htmlComponents/canvasUis/modals/` 하위에 모달 컴포넌트 분리:
  - `ProfileModal.tsx`, `ContactsModal.tsx`, `CareerModal.tsx` (props로 career id 받음)
- [ ] 기존 `WoodenSignModal.tsx` 를 `ModalRouter.tsx`로 개명 또는 그대로 두되 key에 따라 분기.
- [ ] ESC 키로 모달 닫기 추가(현재 바깥 클릭만).
- [ ] `aria-label`/`role="dialog"` 보강.

**DoD**
- 각 모달이 독립 Vitest 테스트 통과.
- content 레이어만 바꿔도 모달이 동기화됨.
- ESC/바깥 클릭 두 가지로 닫힘.

---

## A-4. 놀이터(인트로 존) 업그레이드

**목표**: 현재 놀이터를 "자기소개 + 연락처" 존으로 재정의.

**작업**
- [ ] `NoticeBanner` 문구 상수화 후 "안녕하세요, AI Creator + Technical Artist 유정민입니다. 메이킹이 즐거운 메이커예요." 교체.
- [ ] 기존 `WoodenSign`을 **Intro Sign**으로 레이블링: 클릭 → `INTRO_ABOUT` 모달.
- [ ] 두 번째 `WoodenSign` 추가(좌표 플랜 동의 하에 `(4,0,-4)` 반대편): 클릭 → `CONTACTS` 모달.
- [ ] `ProfileModal` 렌더: 태그라인, summary, philosophy 3~5개, "자세한 이력은 각 존을 둘러보세요" 힌트.
- [ ] `ContactsModal`: email (복사 버튼), GitHub, velog, tistory 링크.

**DoD**
- 놀이터 진입 즉시 인트로 배너 → Intro Sign 클릭 → 소개 모달 확인 가능.
- 두 간판이 시각적으로 충돌하지 않음(간격·방향).
- Playwright: 두 간판 클릭 시 핵심 텍스트(회사명 또는 email) DOM 존재.

---

## A-5. 기술 타워 존

**목표**: 기존 스킬 박스 24개를 수직 타워 구조로 재배치.

**작업**
- [ ] `src/app/_components/canvasComponents/zones/SkillTower/SkillTower.tsx` 신설.
- [ ] Meshy 생성 전 **플레이스홀더 타워** 구현 (Box/Cylinder 조합 + Text3D "Skill Tower"). 주석 규약 필수.
- [ ] `GroundObjects.tsx`에서 스킬 박스 `<group>` 블록 제거 → `SkillTower` 내부로 이전.
- [ ] 층 구성:
  - 1F (y≈2): Frontend — react/next/javascript/typescript/html/css/vanilla-extract/tailwind
  - 2F (y≈8): State/Data — redux/recoil/jotai/tanstack-query, Backend — nodejs/graphql/nest/express/socket-io, DB — mysql, DevOps — aws/docker
  - 3F (y≈14): AI Tools — claude/cursor/codex/n8n/meshy/sloyd/midjourney/suno/elevenlabs/runway/kling/veo3/luma/higgsfield/topaz/openai/pinecone
  - 옥상 (y≈20): Tools — git/pnpm/npm/chromatic/nx/turborepo/storybook/vite/webpack/esbuild
- [ ] 누락 텍스처 15종 추가(`public/texture/skill-*.webp`) — PRD/플랜에 열거된 항목. 이미지 확보 전까지는 단색 PNG 플레이스홀더 + TODO 주석.
- [ ] 존 위치 `(120, 0, 120)` 배치.

**DoD**
- 놀이터에서 기술 타워까지 걸어서 이동 가능(길 연결은 A-6에서 완성, 본 단계는 직선 이동).
- 층마다 스킬 박스 그룹이 시각적으로 구분됨.
- 기존 E2E 테스트(`#canvas` 가시 + 콘솔 에러 0) 유지.

**교체 지점 주석 예**
```tsx
// 🧩 Meshy asset — swap-ready. Prompt/spec: docs/meshy-assets.md#tower-base
const { scene } = useGLTF('/models/tower_base.glb');
```

---

## A-6. 경력 거리 존

**목표**: 6개 회사 경력을 타임라인 거리 형태로 노출.

**작업**
- [ ] `src/app/_components/canvasComponents/zones/CareerStreet/CareerStreet.tsx` 신설.
- [ ] 시작점 `(0,0,120)` → 끝점 `(0,0,280)` 직선. 건물 6개를 번갈아 좌우 배치.
- [ ] 각 건물 = 플레이스홀더 Box (`building_miridih` … `building_fastcampus` 앵커 주석). Meshy 제작 후 교체 예정.
- [ ] 각 건물 앞 `WoodenSign` → 해당 `CAREER_*` 모달 매핑.
- [ ] 시작점에 "2020 → 2026" 화살표 사이니지(플레이스홀더, 앵커: `#sign-timeline-arrow`).
- [ ] 길 연결: `Path.tsx` 패턴을 재사용하여 `Rock Path Round Wide.glb` 인스턴스를 놀이터(0,0,0)에서 거리 끝까지 깔기.
- [ ] `GroundLights.tsx`의 시간대 조명은 전역 유지.
- [ ] 각 건물 클릭(`onClick`으로 간판 클릭과 동일 동작) → CareerModal 열림.
- [ ] CareerModal: 회사명, 기간, 역할, 프로젝트 accordion(bullets), 사용 스택 뱃지.

**DoD**
- 6개 간판을 모두 클릭해 모달 내용(회사명, 기간, 최소 1개 프로젝트 텍스트)을 확인 가능.
- 놀이터-경력 거리 연결 길이 끊기지 않음.

---

## A-7. 존 경계 감지 + 입장 배너

**목표**: 플레이어가 존에 들어가는 순간을 인지시킨다.

**작업**
- [ ] `src/store/index.ts`에 `CurrentZoneAtom` 추가 (`null | 'intro' | 'skill-tower' | 'career-street'`).
- [ ] `src/app/_components/canvasComponents/zones/useZoneDetector.ts` — useFrame에서 `playerRef.current.position`을 존 AABB와 비교. 진입/퇴장 시에만 atom 업데이트(디바운스).
- [ ] `GroundPlayer`에 훅 장착하거나 Map 레벨에서 플레이어 위치 참조.
- [ ] `NoticeBanner`를 확장: `CurrentZoneAtom` 구독 → 존 이름/이모지 표시(예: "🏗 기술 타워"), 3초 후 페이드 아웃.
- [ ] 존 AABB는 상수 파일 `src/app/_components/canvasComponents/zones/zoneBounds.ts`에 정의.

**DoD**
- 놀이터 ↔ 경력 거리 ↔ 기술 타워 이동 시 배너 문구가 교체됨.
- 배너 스팸 없음(같은 존 내 중복 트리거 방지).

---

## A-8. 테스트 & 릴리스 체크

**목표**: MVP 품질 보증.

**작업**
- [ ] Vitest 추가
  - content schema 스냅샷(§A-1).
  - 각 모달 렌더(§A-3).
  - `useZoneDetector` 순수 로직(범위 판정)(§A-7).
  - `ResumeSrOnly` 출력 DOM 검증(§A-2).
- [ ] Playwright 확장 (`tests/e2e/home.spec.ts`)
  - Intro Sign 클릭 → ProfileModal 내 "AI Creator" 텍스트 가시.
  - Contacts Sign 클릭 → "znehraks@gmail.com" 가시.
  - 기술 타워 좌표로 이동 후 배너 문구 가시.
  - 경력 거리 간판 6개 클릭 루프 → 각 회사명 가시.
  - `<main>` 내 sr-only 콘텐츠 DOM 존재.
  - 콘솔 에러 0건.
- [ ] Lighthouse (Chrome devtools 수동 + CI 이후 추가): SEO ≥ 90, Accessibility ≥ 95.
- [ ] 모바일 Chrome devtools iPhone 14 / Galaxy S22 에뮬레이션으로 이동·모달 확인.
- [ ] `pnpm lint && pnpm typecheck && pnpm test && pnpm test:e2e` 모두 green.

**DoD / Release Gate**
- 위 자동/수동 체크 전부 통과.
- PR 설명에 Lighthouse 스크린샷 + 각 존 캡처 첨부.
- `docs/meshy-assets.md` Status 컬럼이 모두 🟡 또는 🟢(TBD 금지).

---

## 공통 규약

### 코드 주석 (Meshy 교체 지점)
```ts
// 🧩 Meshy asset — swap-ready. Prompt/spec: docs/meshy-assets.md#<anchor>
const { scene } = useGLTF('/models/<file>.glb');
```
또는
```tsx
{/* 🧩 Placeholder — replace with Meshy asset per docs/meshy-assets.md#<anchor> */}
<mesh> ... </mesh>
```

### 커밋 메시지 (CLAUDE.md 전역 규약 준수)
```
feat(zone): add skill tower scaffolding

Zone 배치 좌표 (120,0,120)에 플레이스홀더 타워 배치,
스킬 박스 24개를 층별로 재배치.

Constraint: Meshy 에셋 미납품, 플레이스홀더로 선구현
Rejected: Box group을 그대로 GroundObjects에 유지 | zone 분리 원칙 위배
Confidence: high
Scope-risk: narrow
Directive: 🧩 Meshy 주석 라인은 에셋 교체 시에만 수정
```

### 브랜치/PR
- 기본 브랜치: `main`. 현재 `.gitignore`/`.claude` 변경은 별도 정리 후 작업 시작.
- 단계별 독립 PR 권장(A-0~A-8), 단 코드 변경 없는 A-0은 시작 PR에 포함.

### 롤백 기준
- A-5~A-6 중 FPS가 모바일에서 10fps 이하로 떨어지면 즉시 Phase A-5.5 성능 티켓 분리.
- `tests/e2e/home.spec.ts` 기존 검증(콘솔 에러 0)이 깨지면 병합 금지.

---

# Implementation Plan — Phase B (코드 전용)

Phase A 가 릴리스 게이트를 통과한 상태에서, Phase B 는 **추가 코드만으로 전진 가능한 범위**에 집중한다. Meshy 실물 에셋 교체 · Lighthouse 측정 · 모바일 실기기 점검은 **Phase C (후순위)** 로 이관.

관련 문서
- 요구사항: [`docs/PRD.md`](./PRD.md) §6 Phase B / §13 Commit Cadence
- 에셋 카탈로그: [`docs/meshy-assets.md`](./meshy-assets.md)

## 의존성 그래프 — Phase B

```
B-0 (MODAL_KEY extend)
  ├─ B-1 (AIStudio zone)
  ├─ B-2 (HallOfFame zone)
  └─ B-3 (/resume route)

B-4 (zone detector extension) ── depends on B-1 + B-2
B-5 (playwright store-driven modal coverage) ── depends on B-1~B-3
B-6 (code hygiene: remove stale eslint-disable directives)
B-7 (phase gate: lint/typecheck/vitest/playwright/build)
```

각 단계는 **독립 커밋** (PRD §13 Commit Cadence 강제). 결합 커밋은 메시지에 이유 명시.

---

## B-0. MODAL_KEY · 모달 라우터 확장

**목표**: Phase B 에서 추가할 모달을 수용할 enum 및 라우터 슬롯 확보.

**작업**
- [ ] `src/store/index.ts` `MODAL_KEY` 에 추가:
  - `AI_88IGHT`, `AI_NEWSBOT`, `AI_RAG_BOT`, `AI_AGENT_TEAM`, `AI_CODE_MEMORY`, `AI_MEME_PUSH`
  - `CERTIFICATIONS`, `EDUCATION`
  - (`AWARD_KOPIS / AWARD_INCHEON / AWARD_MYONGJI` 는 이미 존재)
- [ ] 모달 라우터(`ModalRouter.tsx`)에 Phase B 모달 등록(B-1, B-2 에서 구현체 작성 완료 후).

**DoD**
- `pnpm typecheck` 통과.
- enum 이 PRD §6 Phase B 체크리스트와 1:1 매칭.

## B-1. AI 스튜디오 존 스캐폴딩

**목표**: 6개 AI 프로젝트를 공간 안에서 모달로 탐색 가능하게.

**작업**
- [ ] `zones/AIStudio/aiStudioLayout.ts` — 프로젝트별 좌표/플레이스홀더 색/모달키/🧩 앵커.
- [ ] `zones/AIStudio/AIStudio.tsx` — 플레이스홀더 돔 + 6개 프롭(스크린 / 로봇 / 서버 랙 / 마이크 / 카메라 / 네온) + 간판 6개.
- [ ] `canvasUis/modals/AIProjectModal.tsx` — 단일 컴포넌트가 MODAL_KEY → `content/resume/ai-projects/*` 조회로 분기. 88ight 전용은 YouTube iframe 임베드.
- [ ] 간판 `modalKey` 매핑: `AI_88IGHT / AI_NEWSBOT / ...`
- [ ] 각 `useGLTF`/플레이스홀더 블록에 `🧩 Placeholder — replace with Meshy asset per docs/meshy-assets.md#<anchor>` 주석 필수(`docs/meshy-assets.md` Zone 1 앵커 사용).
- [ ] `GroundObjects.tsx` 에 `<AIStudio />` 연결.

**DoD**
- AI 스튜디오 존에 플레이스홀더로 6개 프로젝트 포인트 배치.
- 각 간판 클릭 시 해당 프로젝트 모달 렌더 (제목·bullets·도구·링크 포함).
- 88ight 모달에서 YouTube iframe 로드 확인 (`pnpm dev`).

## B-2. 명예의 전당 존 스캐폴딩

**목표**: 수상·자격증·학력 섹션을 3D 공간에서 트로피·액자·학사모로 체험.

**작업**
- [ ] `zones/HallOfFame/hallOfFameLayout.ts` — 트로피 3(수상 연결) · 자격증 액자 5 · 학사모 1 좌표.
- [ ] `zones/HallOfFame/HallOfFame.tsx` — 플레이스홀더 신전 + 받침대 + 트로피/액자/학사모.
- [ ] `canvasUis/modals/AwardModal.tsx` — `AWARD_KOPIS / AWARD_INCHEON / AWARD_MYONGJI` 라우팅.
- [ ] `canvasUis/modals/CertificationsModal.tsx` — 자격증 5건 목록.
- [ ] `canvasUis/modals/EducationModal.tsx` — 학력(명지대).
- [ ] 트로피/액자/학사모 각 `🧩 Placeholder` 주석 부착.
- [ ] `GroundObjects.tsx` 에 `<HallOfFame />` 연결.

**DoD**
- 3개 트로피 / 5개 액자 / 학사모 클릭 시 해당 모달 open.
- 모달 데이터는 content 레이어(`awards.ts / certifications.ts / education.ts`)에서 import.

## B-3. `/resume` 텍스트 라우트

**목표**: 3D 가 부담스러운 사용자/스크린리더/모바일 저사양 기기에 텍스트 전용 이력서 제공.

**작업**
- [ ] `src/app/resume/page.tsx` — Tailwind Typography (`prose` 계열) 로 렌더.
- [ ] content 레이어(`profile / careers / aiProjects / skillGroups / awards / certifications / education`) import.
- [ ] 레이아웃은 `layout.tsx` 공유 (이미 `ResumeSrOnly` 가 있지만 /resume 은 **시각적으로 보이는** 전문 페이지).
- [ ] 놀이터 혹은 Footer에 "📄 텍스트 이력서 보기" 링크 추가 (1줄).
- [ ] `generateMetadata` 로 `/resume` 전용 title/description 지정.

**DoD**
- `http://localhost:3100/resume` 접근 시 전체 이력서가 Tailwind Typography 스타일로 렌더.
- Lighthouse 참조용 페이지로 기능 (Phase C 측정 시 활용).

## B-4. Zone 감지 확장

**목표**: B-1/B-2 에서 추가된 AI 스튜디오·명예의 전당 존을 감지 시스템에 편입.

**작업**
- [ ] `zones/zoneBounds.ts` `ZoneId` 유니언에 `'ai-studio' | 'hall-of-fame'` 추가.
- [ ] `ZONE_BOUNDS` 에 각 존 AABB + 이모지 + 설명 추가.
- [ ] `store/index.ts` `ZoneId` 유니언 업데이트(상응 시점).
- [ ] `zoneBounds.test.ts` 에 두 존 매칭 케이스 추가.
- [ ] `ZoneEntranceBanner` 는 변경 불필요(데이터 드리븐).

**DoD**
- Vitest 의 zoneBounds 테스트에서 두 존의 내부 좌표가 올바르게 감지됨.
- 플레이어가 해당 좌표로 이동 시 배너 문구가 적절히 노출.

## B-5. Playwright — store 기반 모달 검증

**목표**: R3F raycaster 를 직접 테스트하기 어려우니, **Jotai store 조작**으로 각 모달 플로우를 자동 검증.

**작업**
- [ ] `tests/e2e/modals.spec.ts` 신설.
  - 각 `MODAL_KEY` 를 `page.evaluate` 로 설정 → 해당 모달 텍스트 가시성 검증.
  - ESC 키 닫기 / 바깥 클릭 닫기 두 시나리오.
- [ ] 또는 `tests/e2e/home.spec.ts` 에 시나리오 추가(`test.describe` 로 묶기).
- [ ] store 노출 방식: 테스트 모드에서만 `window.__stores` 에 Jotai store 를 붙이는 헬퍼를 추가할지, 혹은 store 전용 path 를 `?openModal=CAREER_MIRIDIH` 쿼리로 수용할지 — **구현 시 결정**.

**DoD**
- 최소 6개(인트로·연락처·경력 6 중 1·AI 1·수상 1·학력/자격증 1) 모달 자동 검증.
- 콘솔 에러 0 유지.

## B-6. 코드 위생

**목표**: 기존 레거시 파일의 `Unused eslint-disable directive` warning 7건 제거.

**작업**
- [ ] 각 파일의 첫 줄 `/* eslint-disable ... */` 를 제거하고 `pnpm lint` 로 warning 0 확인.
  - `src/app/_components/MainCanvas.tsx`
  - `src/app/_components/canvasComponents/groundObjects/Path.tsx`
  - `src/app/_components/canvasComponents/groundObjects/PineTrees.tsx`
  - `src/app/_components/canvasComponents/groundPlayer/GroundPlayerLights.tsx`
  - `src/app/_components/htmlComponents/Lobby.tsx` (× 2 위치)
- [ ] 혹시 rule 이 실제 필요한 위치라면 그 줄에 `// eslint-disable-next-line <rule>` 로 좁혀 쓴다.

**DoD**
- `pnpm lint` warning 0.

## B-7. 릴리스 게이트

**목표**: Phase A 수준의 품질 체크를 Phase B 산출물에 재적용.

**작업**
- [ ] Vitest 신규 모달·레이아웃·라우트 스냅샷 테스트 추가.
- [ ] Playwright B-5 시나리오 green.
- [ ] `pnpm lint && pnpm typecheck && pnpm test && pnpm test:e2e && pnpm build` 모두 green.
- [ ] PR 설명에 AI 스튜디오/명예의 전당 캡처 + `/resume` 스크린샷 첨부.

**DoD**
- 모든 자동화 체크 통과.
- PRD §4 달성 현황 표 업데이트 (Phase B 해당 항목 🟡 → 🟢 전환).

---

## 공통 규약 — Phase B 에도 동일 적용

### Meshy 교체 지점 주석
```ts
// 🧩 Meshy asset — swap-ready. Prompt/spec: docs/meshy-assets.md#<anchor>
const { scene } = useGLTF('/models/<file>.glb');
```
또는
```tsx
{/* 🧩 Placeholder — replace with Meshy asset per docs/meshy-assets.md#<anchor> */}
<mesh> ... </mesh>
```

### Commit Cadence
- **각 B-N 항목당 독립 커밋**. `TaskUpdate` 로 `completed` 로 전환하기 전에 커밋.
- 메시지 형식·trailers 는 PRD §13 참조.
- `git push` / `gh pr` 는 사용자 명시 지시 후에만.

### 브랜치 전략
- 기본 브랜치: `main`. Phase B 볼륨이 크면 `phase-b` 브랜치 생성 권장(사용자 승인 후).
- 한 파일이 여러 B 항목에 걸치면 결합 커밋 허용, 메시지에 결합 이유 명시.

---

## B-8. 월드 스케일 축소 (2026-04-21 추가 · ✅ 완료)

dev 서버에서 한눈에 들어오지 않는 문제 대응. Meshy 에셋 교체와 무관한 좌표만 조정.

- Skill Tower `(120,120) → (85,85)`
- AI Studio `(-120,120) → (-85,85)`
- Career Street `z 120..280 → z 80..180` (6개 건물 90/105/120/135/150/165 재배치)
- Hall of Fame `(0,-180) → (0,-110)` (stops +70z)
- OrbitControls `maxDistance → CAMERA_DISTANCE × 4` (≈240)
- `zoneBounds.test.ts` 신규 좌표 기대값 반영

커밋: `refactor(zones): shrink world scale so all zones fit in one camera orbit`.

---

# Implementation Plan — Phase C (실물·수동 작업 체크리스트)

Claude 단독으로 진행 불가한 오너 수행 항목. PRD §6 Phase C 와 1:1 매핑.
완료된 항목은 체크박스를 채우고, 코드 연동이 필요하면 Claude 에게 전달.

- [ ] **C-1 Meshy 실물 에셋 제작·교체**
  - 참고: [`docs/meshy-assets.md`](./meshy-assets.md) 각 섹션의 Text-to-3D / Image 프롬프트
  - 결과물: `public/models/*.glb`
  - Claude 후속: `rg "🧩 Placeholder"` 로 교체 지점 확인 후 `useGLTF` 연결 + `Status` 🟡→🟢
- [ ] **C-2 Lighthouse 측정·대응**
  - 대상: 로컬 `pnpm dev` 또는 실제 배포 URL
  - 목표: SEO ≥ 90, Accessibility ≥ 95
  - 결과 공유 시 Claude 가 개선 PR 작성
- [ ] **C-3 모바일 실기기 점검**
  - iPhone Safari / Android Chrome (Galaxy 권장)
  - 시나리오: 존 이동 / 간판 클릭 / 모달 닫기 / `/resume` 가독성
- [ ] **C-4 배포 + Search Console**
  - Netlify/Vercel 배포 → Google Search Console 등록 → `sitemap.xml` · `robots.txt` 필요 여부 판단
- [ ] **C-5 NPC 대화 / 수집 뱃지 / BGM**
  - UX 기획 결정 후 재착수
- [ ] **C-6 88ight 자체 호스팅 전환 여부**
  - 저작권/비용 판단 후 결정
- [ ] **C-7 `git push` / PR 승인**
  - Claude 는 자동 push 금지 (CLAUDE.md). 오너 승인 시 실행.

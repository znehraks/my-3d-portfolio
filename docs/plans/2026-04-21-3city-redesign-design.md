# 3-City Redesign — Design Document

작성일: 2026-04-21
범위: `my-3d-portfolio` 월드를 4-quadrant 가정에서 **3-city 비대칭 허브** 구조로 개편.

---

## 1. 맵 구조 & 좌표 시스템

### 1.1 결정
- **레이아웃**: 3도시 비대칭 중앙 허브 (A안)
  - **Tech City** — 북쪽 절반 (z+)
  - **Content City** — 남서쪽
  - **Playground** — 남동쪽
- **스케일**: 0.45x 일괄 축소 → `GROUND_MAP_SIZE 500 → 225`
- **실 사용 범위**: 약 160(W) × 200(D). 최장 도보 거리 ~100유닛 = 캐릭터 키 32배

### 1.2 글로벌 좌표
```
                          z+ (북쪽)
                             │
                 ┌────── [🏛 Hall of Fame] ───────┐  z ≈ 90
                 │        (Tech City 종점)         │
                 │                                 │
    [🗼 Skill]   │   [🏢 Career Street]   [🤖 AI] │  z = 30~90
    (-35, 55)    │   z: 32 → 72 타임라인  (35, 45~90)
                 │                                 │
                 └─── [🚪 Gate Tech] (0, 25) ─────┘
                             │
                 ───── [⛲ Fountain] (0, 0) ────
                             │
    [🎤 88ight Stage]        │          [기존 Playground]
    (-85, -25)               │          (JungleGym, Slide 등)
    [🕹 Arcade]              │
    (-85, -55)               │
    [🚧 Coming Soon]         │
    (-85, -85)               │
                             ▼ z- (남쪽)
    x- (서쪽)  ◀─────────────┼────────────▶  x+ (동쪽)
```

### 1.3 존 경계 (AABB)
| Zone | minX | maxX | minZ | maxZ |
|---|---|---|---|---|
| central-plaza | -15 | 15 | -15 | 15 |
| tech-city | -50 | 50 | 15 | 110 |
| content-city | -100 | -15 | -100 | -5 |
| playground | 15 | 100 | -100 | -5 |

---

## 2. 도시별 내부 배치

### 2.1 Tech City (북쪽)
| 항목 | 좌표 | 스케일 | 비고 |
|---|---|---|---|
| Gate Tech | (0, 0, 25) | 1.0 | 입구 아치 |
| Skill Tower | (-35, 0, 55) | — | 24개 스킬 4층 |
| Career Street 입구 팻말 | (0, 2, 28) | — | 타임라인 시작점 |
| 미리디 | (8, 0, 36) | — | 2020 시작 |
| 아이브 | (-8, 0, 44) | — | |
| 패스트캠퍼스 | (8, 0, 52) | — | |
| 무하유 | (-8, 0, 60) | — | |
| 아키드로우 | (8, 0, 68) | — | |
| 724랩 | (-8, 0, 74) | — | 현재 |
| Hall of Fame | (0, 0, 90) | — | 북쪽 종점 |
| AI Booth — Agent Team | (35, 0, 45) | 0.9 | |
| AI Booth — CC Memory | (35, 0, 60) | 0.9 | |
| AI Booth — AI NewsBot | (35, 0, 75) | 0.9 | |
| AI Booth — RAG Slackbot | (35, 0, 90) | 0.9 | |

### 2.2 Content City (남서쪽)
| 항목 | 좌표 | 스케일 |
|---|---|---|
| Gate Content | (-50, 0, 0) | 1.0 |
| 88ight Stage | (-85, 0, -25) | 1.0 |
| meme-push Arcade | (-85, 0, -55) | 1.0 |
| Coming Soon Booth | (-85, 0, -85) | 1.0 |

### 2.3 Playground (남동쪽) — 기존 5종 0.45x 재배치
| 항목 | 기존 좌표 | 신규 좌표 |
|---|---|---|
| Gate Playground | — | (50, 0, 0) |
| JungleGym | (-45, 0, 12) | (40, 0, -30) |
| Slide | (18, 0, -40) | (60, 0, -50) |
| Swing | (30, 0, -10) | (30, 0, -60) |
| PineTrees cluster | (-40, 0, -40) | (80, 0, -80) |
| Tree ×4 | 분산 | (20~70, 0, -15~-50) |

### 2.4 중앙 허브
| 항목 | 좌표 | 역할 |
|---|---|---|
| Central Fountain | (0, 0, 0) | 랜드마크 |
| Direction Signpost | (0, 0, 18) | 3방향 팻말 |
| Central Plaza 바닥 | (0, 0, 0) | 30×30 원형 |

---

## 3. Tier 1 신규 에셋 15종

프롬프트 원본: `docs/higgsfield-3city-tier1-prompts.md`

### 바닥 텍스처 (3)
1. `tech_ground.webp` — 시안 LED 그리드, 110×110, 4×4 타일링
2. `content_ground.webp` — 마젠타 무대 조명, 100×100
3. `plaza_ground.webp` — 방사형 돌판, 30×30 원형

### 도시 게이트 (3)
4. `gate_tech.glb`
5. `gate_content.glb`
6. `gate_playground.glb`

### 중앙 광장 (2)
7. `central_fountain.glb`
8. `direction_signpost.glb`

### Content City (3)
9. `stage_88ight.glb`
10. `arcade_memepush.glb`
11. `booth_coming_soon.glb`

### AI 툴링 부스 (4)
12. `booth_agent_team.glb`
13. `booth_cc_memory.glb`
14. `booth_ai_newsbot.glb`
15. `booth_rag_slackbot.glb`

---

## 4. 구현 순서 & 코드 마이그레이션

### Phase 0 — 상수 변경
- `src/constants.ts`: `GROUND_MAP_SIZE 500 → 225`

### Phase 1 — 바닥 분할
- `Floor.tsx` → `Ground/` 폴더로 분리:
  - `TechFloor.tsx` (110×110, `(0, 0, 55)`)
  - `ContentFloor.tsx` (100×100, `(-50, 0, -50)`)
  - `PlaygroundFloor.tsx` (100×100, `(50, 0, -50)`)
  - `CentralPlaza.tsx` (30×30 원형, `(0, 0, 0)`)
- 텍스처는 신규 .webp 도착 전까지 `sand.webp` + 색상 틴트로 구분

### Phase 2 — 기존 존 좌표 재배치
- `careerLayout.ts`: START_Z 80→32, END_Z 180→74, 건물 z 36~74로 재배치
- `skillLayout.ts`: POSITION (85,85) → (-35, 55)
- `hallOfFameLayout.ts`: POSITION (0,-110) → (0, 90)
- `aiStudioLayout.ts`: **제거** — AI Studio 존을 4개 개별 부스로 대체
- `zoneBounds.ts`: 신규 AABB 반영 (central-plaza, tech-city, content-city, playground)
- `__tests__/zoneBounds.test.ts`: 신규 좌표로 테스트 재작성

### Phase 3 — 플레이스홀더 컴포넌트 15개
`groundObjects/placeholders/` 디렉토리 신설.
- 박스/실린더 메시 + `{/* 🧩 Placeholder — replace with <name>.glb */}` 주석
- GLB 도착 시 `<primitive>` 로 1:1 교체

### Phase 4 — `GroundObjects.tsx` 재구성
```tsx
<>
  {/* Ground */}
  <TechFloor />
  <ContentFloor />
  <PlaygroundFloor />
  <CentralPlaza />

  {/* Central hub */}
  <CentralFountain />
  <DirectionSignpost />

  {/* Gates */}
  <GateTech />
  <GateContent />
  <GatePlayground />

  {/* Tech City */}
  <CareerStreet />     {/* 좌표 재배치됨 */}
  <SkillTower />       {/* 좌표 재배치됨 */}
  <HallOfFame />       {/* 좌표 재배치됨 */}
  <BoothAgentTeam />
  <BoothCCMemory />
  <BoothAINewsbot />
  <BoothRAGSlackbot />

  {/* Content City */}
  <Stage88ight />
  <ArcadeMemepush />
  <BoothComingSoon />

  {/* Playground — 재배치 */}
  <JungleGym /> <Slide /> <Swing />
  <PineTrees position={[80, 0, -80]} />
  <Tree position={[...]} ×4 />
  <Gate... />

  {/* Intro 간판 — 중앙 광장 근처로 이동 */}
  <WoodenSign ... />
</>
```

### Phase 5 — GLB 교체 (에셋 도착 순)
15개 독립 커밋. 플레이스홀더 컴포넌트를 실제 GLB 렌더로 교체.

---

## 5. 완료 기준
- [ ] `GROUND_MAP_SIZE = 225`, OrbitControls/Floor 정상
- [ ] 15개 플레이스홀더 배치 완료, 좌표 충돌 없음
- [ ] 3개 바닥 + 중앙 광장 분할 렌더
- [ ] `zoneBounds.ts` AABB 업데이트, `detectZone()` 테스트 통과
- [ ] 기존 6개 경력 건물이 Tech City z=32~74 범위 내 재배치
- [ ] Skill Tower (-35, 55), Hall of Fame (0, 90) 재배치 검증
- [ ] AI Studio 존 제거, 4개 부스로 분산 (agent-team / cc-memory / ai-newsbot / rag-slackbot)
- [ ] 88ight / meme-push 모달은 Content City 부스에서 트리거

## 6. 이연 (Tier 2 이후)
- 거리 가구 (벤치, 가로등, 쓰레기통)
- 스카이박스 / 하늘 교체
- 파티클 / 조명 효과
- 배경 NPC, 동물
- Coming Soon 슬롯에 들어갈 신규 콘텐츠

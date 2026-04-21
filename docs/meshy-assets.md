# Meshy 3D Asset Catalog

> **정본(Source of truth)**. 모든 Meshy AI 생성 3D 에셋의 프롬프트·배치·상태는 이 문서에서 관리한다. 코드에서는 `🧩 Meshy asset` 주석으로 해당 앵커를 링크한다.

## 공통 스타일 가이드 (모든 프롬프트에 공통 접미사로 붙일 것)

```
stylized low-poly, flat shaded, soft pastel colors, playful, chibi proportions, game asset, white background, consistent with a cozy playground world inspired by Poly Pizza assets
```

플레이어 모델(`meshy_jm.glb`) 및 기존 놀이터 에셋과 톤을 맞추기 위한 공통 규약.

## 주석 규약

코드에서 GLB 로딩 직전에 앵커 링크 주석을 반드시 부착.

```ts
// 🧩 Meshy asset — swap-ready. Prompt/spec: docs/meshy-assets.md#ai-studio-building
const { scene } = useGLTF('/models/ai_studio_building.glb');
```

플레이스홀더 블록:

```tsx
{/* 🧩 Placeholder — replace with Meshy asset per docs/meshy-assets.md#ai-studio-building */}
<mesh> ... </mesh>
```

## 생성 워크플로우 권장 순서

1. 해당 앵커의 Text-to-3D 프롬프트를 Meshy에 입력 → 초안 생성.
2. 품질 부족 시 Image Prompt로 Midjourney/SD 이미지 생성 → Meshy Image-to-3D 업로드.
3. Blender에서 Y-up / 스케일 보정 → `.glb` export.
4. 지정 `File` 경로(`public/models/`)에 배치.
5. 코드에서 플레이스홀더 주석을 `Meshy asset` 주석으로 교체.
6. 본 문서에서 `Status`를 🟡 → 🟢로 갱신.

상태 표기: 🟡 Placeholder / 🟢 Final (Meshy 확정본 적용됨) / 🔴 Blocked

---

## Zone 0 — 인트로 (놀이터)

기존 `Pine Trees.glb`, `Tree.glb`, `Jungle gym.glb`, `Slide.glb`, `Swing.glb`, `Wooden Sign.glb`, `Rock Path Round Wide.glb` 재활용. Meshy 신규 에셋 없음. (선택 항목만 아래 기재)

### intro-npc-guide (선택)
- **File**: `public/models/intro_npc_guide.glb`
- **Used In**: Zone 0 (선택 — Phase B 이후 추가 여부 결정)
- **Status**: 🟡 Placeholder (아직 배치 안 됨)
- **Text-to-3D Prompt**:
  ```
  a cute chibi guide character waving hello, wearing a beanie with a "maker" tag, holding a small signboard, pastel, low-poly, rigged T-pose
  ```
- **Image Prompt**:
  ```
  cute chibi guide character with beanie waving hello, holding signboard "maker", pastel low-poly, isometric, white background
  ```

---

## Zone 1 — AI 스튜디오 (Phase B)

### ai-studio-building
- **File**: `public/models/ai_studio_building.glb`
- **Used In**: `src/app/_components/canvasComponents/zones/AIStudio/AIStudio.tsx` (Phase B)
- **Status**: 🟡 Placeholder
- **Text-to-3D Prompt**:
  ```
  a small futuristic film studio dome with a neon "AI STUDIO" sign on top, curved roof, glass front, cyan and magenta neon accents, rooftop satellite dish, stylized low-poly, flat shaded, pastel, game asset
  ```
- **Image Prompt**:
  ```
  isometric view of a cute low-poly film studio dome, neon cyan magenta signage "AI STUDIO", pastel colors, clean white background, 3/4 angle, game asset concept art
  ```

### hologram-screen
- **File**: `public/models/hologram_screen.glb`
- **Used In**: AI 스튜디오 (88ight YouTube 임베드 트리거)
- **Status**: 🟡 Placeholder
- **Text-to-3D Prompt**:
  ```
  a floating holographic display screen with thin metallic frame, subtle glow, translucent blue-cyan emissive surface, low-poly, flat shaded
  ```
- **Image Prompt**:
  ```
  floating holographic translucent screen with glowing edges, futuristic minimal frame, isometric, pastel glow, white background
  ```

### film-camera
- **File**: `public/models/film_camera.glb`
- **Status**: 🟡 Placeholder
- **Text-to-3D Prompt**:
  ```
  a stylized cinema film camera on a tripod, chunky lens, viewfinder, small red record light, low-poly playful proportions
  ```
- **Image Prompt**:
  ```
  cute chibi film camera on tripod, red record light, low-poly, pastel colors, isometric, white background
  ```

### mic-studio
- **File**: `public/models/mic_studio.glb`
- **Status**: 🟡 Placeholder
- **Text-to-3D Prompt**:
  ```
  a studio condenser microphone on a boom arm with pop filter, matte black and gold, low-poly stylized
  ```
- **Image Prompt**:
  ```
  cute low-poly studio microphone with pop filter, isometric, pastel, white background
  ```

### robot-npc
- **File**: `public/models/robot_npc.glb`
- **Used In**: AI 스튜디오 (Claude Code 에이전트 팀 소개 트리거)
- **Status**: 🟡 Placeholder
- **Text-to-3D Prompt**:
  ```
  a friendly small humanoid AI agent robot, rounded head, glowing eye visor, soft white and mint body, short antenna, low-poly, chibi, rigged T-pose
  ```
- **Image Prompt**:
  ```
  friendly chibi AI robot character, glowing visor eyes, mint and white body, antenna, isometric, soft pastel, white background, concept art
  ```

### neon-sign-ai
- **File**: `public/models/neon_sign_ai.glb`
- **Status**: 🟡 Placeholder
- **Text-to-3D Prompt**:
  ```
  a neon tube sign spelling "AI STUDIO", cyan and magenta, cursive font, wall-mounted, emissive material, low-poly
  ```
- **Image Prompt**:
  ```
  neon sign saying AI STUDIO, cyan magenta tubes, dark wall background, glowing, product photo
  ```

### server-rack
- **File**: `public/models/server_rack.glb`
- **Used In**: AI 스튜디오 (RAG Slack 봇 / AI호외요 설명 모달 트리거)
- **Status**: 🟡 Placeholder
- **Text-to-3D Prompt**:
  ```
  a stylized server rack with blinking LED strips, cables, low-poly chunky design, matte dark grey, with small "n8n" and "RAG" labels
  ```
- **Image Prompt**:
  ```
  low-poly server rack with blinking LEDs and cables, isometric, dark gray with pastel accents, white background
  ```

---

## Zone 2 — 경력 거리

### building-miridih
- **File**: `public/models/building_miridih.glb`
- **Used In**: `src/app/_components/canvasComponents/zones/CareerStreet/CareerStreet.tsx` (미리디 위치)
- **Status**: 🟡 Placeholder
- **Text-to-3D Prompt**:
  ```
  a modular block building made of colorful stacked Figma-like cards, each block in a different pastel color (blue, pink, yellow, green), playful design system aesthetic, low-poly, flat shaded
  ```
- **Image Prompt**:
  ```
  isometric building composed of stacked pastel design-system cards, modular blocks in blue/pink/yellow, clean flat-shaded style, white background
  ```

### building-aiv
- **File**: `public/models/building_aiv.glb`
- **Status**: 🟡 Placeholder
- **Text-to-3D Prompt**:
  ```
  a small industrial factory building with a tall chimney, corrugated metal roof, "AiV" signage, conveyor belt feature at the base, low-poly stylized
  ```
- **Image Prompt**:
  ```
  isometric low-poly factory with chimney and conveyor belt, AiV sign on front, pastel industrial colors, white background
  ```

### building-muhayu
- **File**: `public/models/building_muhayu.glb`
- **Status**: 🟡 Placeholder
- **Text-to-3D Prompt**:
  ```
  a modern small office building with large glass windows, rooftop with a subtle "hire" paperclip motif, blue and white palette, low-poly
  ```
- **Image Prompt**:
  ```
  isometric modern small office building, glass facade, pastel blue and white, paperclip icon on rooftop, white background
  ```

### building-archidraw
- **File**: `public/models/building_archidraw.glb`
- **Status**: 🟡 Placeholder
- **Text-to-3D Prompt**:
  ```
  a stylized cozy model-house showing a cutaway interior of furniture (sofa, table, lamp), 3D home-furnishing editor vibe, warm brown and cream tones, low-poly
  ```
- **Image Prompt**:
  ```
  isometric cutaway model house showing interior furniture, warm beige and brown palette, low-poly, white background
  ```

### building-lab724
- **File**: `public/models/building_lab724.glb`
- **Status**: 🟡 Placeholder
- **Text-to-3D Prompt**:
  ```
  a small startup garage with a half-open roller door, a laptop and cardboard boxes inside, founder-era vibe, low-poly
  ```
- **Image Prompt**:
  ```
  isometric low-poly startup garage with open shutter door, laptop and boxes inside, warm lighting, white background
  ```

### building-fastcampus
- **File**: `public/models/building_fastcampus.glb`
- **Status**: 🟡 Placeholder
- **Text-to-3D Prompt**:
  ```
  a small lecture stage building with a camera on tripod in front and a projection screen inside, purple and white palette, low-poly
  ```
- **Image Prompt**:
  ```
  isometric low-poly lecture stage with projector screen and tripod camera, purple and white palette, white background
  ```

### lamp-post
- **File**: `public/models/lamp_post.glb`
- **Used In**: CareerStreet(가로등 인스턴싱)
- **Status**: 🟡 Placeholder
- **Text-to-3D Prompt**:
  ```
  a cute street lamp post with a curved top and a warm orange glowing bulb, cast-iron base, low-poly, flat shaded
  ```
- **Image Prompt**:
  ```
  isometric cute street lamp with warm glowing bulb, black iron base, pastel style, white background
  ```

### sign-timeline-arrow
- **File**: `public/models/sign_timeline_arrow.glb`
- **Used In**: CareerStreet 시작점
- **Status**: 🟡 Placeholder
- **Text-to-3D Prompt**:
  ```
  a wooden signpost with a curved arrow marked "2020 → 2026", carved wood, low-poly
  ```
- **Image Prompt**:
  ```
  isometric wooden signpost with arrow and year range, carved wood, cartoon style, white background
  ```

---

## Zone 3 — 기술 타워

### tower-base
- **File**: `public/models/tower_base.glb`
- **Used In**: `src/app/_components/canvasComponents/zones/SkillTower/SkillTower.tsx`
- **Status**: 🟡 Placeholder
- **Text-to-3D Prompt**:
  ```
  a 4-story square observation tower, each floor visible as an open platform with railings, wooden and pastel-painted structure, lookout flag on top, low-poly playful
  ```
- **Image Prompt**:
  ```
  isometric 4-story low-poly observation tower, open platforms with railings, pastel wood, flag on top, white background
  ```

### stairs-spiral
- **File**: `public/models/stairs_spiral.glb`
- **Used In**: SkillTower 층간 연결
- **Status**: 🟡 Placeholder
- **Text-to-3D Prompt**:
  ```
  a spiral staircase connecting 4 levels, metal railing, low-poly, fits inside a square tower
  ```
- **Image Prompt**:
  ```
  isometric low-poly spiral staircase, pastel metal, 4 levels, white background
  ```

### flag-top
- **File**: `public/models/flag_top.glb`
- **Used In**: SkillTower 옥상
- **Status**: 🟡 Placeholder
- **Text-to-3D Prompt**:
  ```
  a small flag on a pole with a stylized code bracket "{ }" symbol, waving cloth, low-poly
  ```
- **Image Prompt**:
  ```
  cute low-poly waving flag with code brackets symbol, pastel, white background
  ```

> 스킬 박스 24개는 기존 `Box.tsx` + `public/texture/skill-*.webp` 그대로 재활용 — Meshy 신규 에셋 불필요.

---

## Zone 4 — 명예의 전당 (Phase B)

### hall-temple
- **File**: `public/models/hall_temple.glb`
- **Used In**: `src/app/_components/canvasComponents/zones/HallOfFame/HallOfFame.tsx` (Phase B)
- **Status**: 🟡 Placeholder
- **Text-to-3D Prompt**:
  ```
  a small open Greek-style temple with 6 columns, marble-white with gold accents, coffered ceiling, no walls between columns so player can walk inside, low-poly stylized
  ```
- **Image Prompt**:
  ```
  isometric low-poly open greek temple, 6 columns, marble white with gold accents, walk-in, pastel lighting, white background
  ```

### trophy-gold
- **File**: `public/models/trophy_gold.glb`
- **Status**: 🟡 Placeholder
- **Text-to-3D Prompt**:
  ```
  a classic golden trophy cup with two handles, on a star-shaped base, shiny gold material, low-poly, chibi proportions
  ```
- **Image Prompt**:
  ```
  low-poly golden trophy cup, star base, shiny, isometric, white background, 3D asset
  ```

### trophy-silver
- **File**: `public/models/trophy_silver.glb`
- **Status**: 🟡 Placeholder
- **Text-to-3D Prompt**:
  ```
  a silver trophy cup, simpler design than gold, on a rectangular base, low-poly
  ```
- **Image Prompt**:
  ```
  low-poly silver trophy cup on rectangular base, isometric, white background
  ```

### trophy-bronze
- **File**: `public/models/trophy_bronze.glb`
- **Status**: 🟡 Placeholder
- **Text-to-3D Prompt**:
  ```
  a bronze trophy medal on a stand, with a ribbon loop, low-poly
  ```
- **Image Prompt**:
  ```
  low-poly bronze trophy medal on stand with ribbon, isometric, white background
  ```

### certificate-frame
- **File**: `public/models/certificate_frame.glb`
- **Used In**: 자격증 5건 각각에 인스턴싱
- **Status**: 🟡 Placeholder
- **Text-to-3D Prompt**:
  ```
  a wooden-framed certificate standing on a small easel, parchment paper with a ribbon seal, low-poly stylized
  ```
- **Image Prompt**:
  ```
  isometric low-poly wooden certificate frame on easel with ribbon seal, pastel parchment, white background
  ```

### graduation-cap
- **File**: `public/models/graduation_cap.glb`
- **Status**: 🟡 Placeholder
- **Text-to-3D Prompt**:
  ```
  a graduation cap with tassel, dark blue and gold, low-poly, chibi style
  ```
- **Image Prompt**:
  ```
  low-poly graduation cap with tassel, dark blue and gold, isometric, white background
  ```

### pedestal
- **File**: `public/models/pedestal.glb`
- **Used In**: 트로피 받침대(3회 인스턴싱)
- **Status**: 🟡 Placeholder
- **Text-to-3D Prompt**:
  ```
  a short stone pedestal for displaying a trophy, cylindrical, with a subtle engraved nameplate, low-poly
  ```
- **Image Prompt**:
  ```
  isometric low-poly stone pedestal with nameplate, pastel, white background
  ```

---

## 텍스처 보강 대상 (Skill Tower 누락분)

다음 webp 파일을 `public/texture/`에 추가한다. Meshy가 아니라 로고 라이선스 확인 후 정식 로고 또는 단색 대체 이미지를 사용.

- `skill-react-aria.webp`
- `skill-storybook.webp`
- `skill-motion.webp`
- `skill-tanstack-query.webp`
- `skill-flutter.webp`
- `skill-react-native.webp`
- `skill-express.webp`
- `skill-nest.webp`
- `skill-socket-io.webp`
- `skill-turborepo.webp`
- `skill-docker.webp`
- `skill-meshy.webp`
- `skill-sloyd.webp`
- `skill-pnpm.webp`
- `skill-chromatic.webp`
- `skill-claude.webp`
- `skill-cursor.webp`
- `skill-codex.webp`
- `skill-n8n.webp`
- `skill-midjourney.webp`
- `skill-suno.webp`
- `skill-elevenlabs.webp`
- `skill-runway.webp`
- `skill-kling.webp`
- `skill-veo3.webp`
- `skill-luma.webp`
- `skill-higgsfield.webp`
- `skill-topaz.webp`
- `skill-openai.webp`
- `skill-pinecone.webp`

각 추가 후 `Box.tsx` 대상 사용 컴포넌트에 `textureSrc` prop으로 연결. 로고 상표권 검토 TODO.

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

상태 표기: 🟡 Placeholder / 🟢 Final (Meshy 확정본 적용됨) / 🔴 Blocked / ⏳ Downloaded (GLB 받아둠, 배치 대기) / ❌ Not Generated (아직 Meshy 생성 전)

---

## 📊 진행 현황 요약 (2026-04-22 기준)

총 **25종** 중:

### ⏳ Downloaded — 12종 (GLB 받아둠, `public/models/` 배치 + 코드 연동 대기)

~/Downloads 에서 매칭된 Meshy 파일. 다음 작업: rename → `public/models/` 이동 → placeholder 주석 교체.

| 정본명 | Zone | Downloads 파일 |
|---|---|---|
| `ai_studio_building.glb` | 1 | `Meshy_AI_AIStudio_0422083400` |
| `neon_sign_ai.glb` | 1 | `Meshy_AI_AI_Studio_Neon_logo_0422083518` |
| `film_camera.glb` | 1 | `Meshy_AI_camera_0422083422` |
| `hologram_screen.glb` | 1 | `Meshy_AI_Blue_Grid_Display_on__0422083410` |
| `robot_npc.glb` | 1 | `Meshy_AI_AI_agent_0422083455` |
| `server_rack.glb` | 1 | `Meshy_AI_Server_0422083532` |
| `building_aiv.glb` | 2 | `Meshy_AI_aiv_0422083758` (최신 채택) |
| `building_muhayu.glb` | 2 | `Meshy_AI_muhayu_0422083621` |
| `building_lab724.glb` | 2 | `Meshy_AI_724lab_0422083935` |
| `trophy_gold.glb` | 4 | `Meshy_AI_gold_trophy_0422083801` |
| `trophy_silver.glb` | 4 | `Meshy_AI_silver_trophy_2_0422083553` (최신 채택) |
| `certificate_frame.glb` | 4 | `Meshy_AI_certificate_2_0422083613` (최신 채택) |

### ❌ Not Generated — 13종 (Meshy 에서 아직 생성 전)

| 정본명 | Zone | 비고 |
|---|---|---|
| `intro_npc_guide.glb` | 0 | 선택 항목 |
| `mic_studio.glb` | 1 | 콘덴서 마이크 |
| `building_miridih.glb` | 2 | Figma 카드 스택 건물 |
| `building_archidraw.glb` | 2 | 단면 모델 하우스 |
| `building_fastcampus.glb` | 2 | 강의 스테이지 |
| `lamp_post.glb` | 2 | 가로등 (인스턴싱) |
| `sign_timeline_arrow.glb` | 2 | "2020→2026" 이정표 |
| `tower_base.glb` | 3 | 4층 관측탑 (Zone 3 전부 미제작) |
| `stairs_spiral.glb` | 3 | 나선 계단 |
| `flag_top.glb` | 3 | 옥상 `{ }` 깃발 |
| `hall_temple.glb` | 4 | 그리스 신전 본체 |
| `graduation_cap.glb` | 4 | 학사모 |
| `pedestal.glb` | 4 | 트로피 받침대 (인스턴싱) |

### 🔵 Bonus — 카탈로그 외 다운로드 (intro 존 확장 후보 — 카탈로그 추가 검토 필요)

- `merry_go_round` (회전목마 v2 = `Meshy_AI_merry_go_round_0422083848`)
- `bench` / `bench_set` (벤치 단일 + 세트)
- `balloon_market` (풍선 노점)
- `entrance` (입구 게이트)
- `map` (지도 오브젝트)
- `empty_panel` (빈 패널)

### 🧍 Character — 별도 검토

- `Meshy_AI_Meshy_Merged_Animations.glb` — 현 `meshy_jm.glb` 대체 후보
- `Meshy_AI_jm_biped.zip` — biped 리깅 소스

---

## 🎯 TODO 생성 대기 큐 (❌ 13종 — Higgsfield Auto 용 단일 단락 포맷)

> **워크플로우:** Image Prompt 블록 복사 → Higgsfield Auto → 이미지 생성 → 컷 선택 → Meshy Image-to-3D 업로드 → GLB 추출 → `public/models/` 배치.
> **톤 일관성:** 첫 컷(`building_miridih` 추천) 완성 후 "Use as style reference" 로 재사용.

### [1/13] intro-npc-guide (Zone 0, 선택)

- **File**: `public/models/intro_npc_guide.glb`
- **Text-to-3D** (Meshy 폴백용):
  ```
  a cute chibi guide character waving hello, wearing a beanie with a "maker" tag, holding a small signboard, pastel, low-poly, rigged T-pose
  ```
- **Image Prompt (Higgsfield Auto)**:
  ```
  A friendly chibi tour-guide character standing in a welcoming pose with one hand slightly raised as if waving hello, short and chunky proportions with a big round head, warm golden skin tone, soft pastel cyan short hair with slight side bangs, large round dark eyes with a single highlight dot, small smiling mouth, wearing a playful pastel mint short-sleeve jacket with a tiny rounded badge on the chest, cream short pants, chunky pastel coral sneakers, a simple small crossbody bag in pastel pink, a rolled paper map held loosely in one hand with no readable text, rounded cartoon silhouette, neutral T-pose-ish stance suitable for rigging. Stylized low-poly 3D render, flat shaded, soft pastel color palette, playful chibi proportions, cozy playground world aesthetic inspired by Poly Pizza and Quaternius assets. Clean geometry, isometric 3/4 view, centered single subject on a pure white seamless background, even soft studio lighting, no cast shadow. Avoid photorealism, readable letters or numbers, watermarks, adult proportions, realistic anatomy, extra limbs, background props, ground shadow, gradient or busy background, and multiple characters.
  ```

### [2/13] mic-studio (Zone 1)

- **File**: `public/models/mic_studio.glb`
- **Text-to-3D** (Meshy 폴백용):
  ```
  a studio condenser microphone on a boom arm with pop filter, matte black and gold, low-poly stylized
  ```
- **Image Prompt (Higgsfield Auto)**:
  ```
  A chunky chibi studio condenser microphone mounted on a professional boom arm — large cylindrical mic body in matte charcoal black with a rounded metallic mesh grille head tinted warm champagne gold, a small power LED dot glowing soft amber near the base of the mic, held by a silver shock mount with four elastic suspension bands. In front of the grille a circular pop filter with a pastel cream fabric stretched across a matte black ring hovers on a goose-neck arm. The boom arm is jointed matte black metal with two prominent pivots and visible hex bolts in pastel gold, terminating in a chunky cream-and-black desk clamp. Chunky chibi dollhouse proportions, podcasting and studio recording vibe, single isolated prop, no readable text or brand logos. Stylized low-poly 3D render, flat shaded, soft pastel color palette with warm gold and charcoal black accents, playful chibi proportions, cozy playground world aesthetic inspired by Poly Pizza and Quaternius assets. Clean geometry, isometric 3/4 view, centered single subject on a pure white seamless background, even soft studio lighting, no cast shadow. Avoid photorealism, readable letters, brand logos, watermarks, cables tangled, cluttered scene, multiple microphones, background props, ground shadow, gradient or busy background, and hands.
  ```

### [3/13] building-miridih (Zone 2)

- **File**: `public/models/building_miridih.glb`
- **Text-to-3D** (Meshy 폴백용):
  ```
  a modular block building made of colorful stacked Figma-like cards, each block in a different pastel color (blue, pink, yellow, green), playful design system aesthetic, low-poly, flat shaded
  ```
- **Image Prompt (Higgsfield Auto)**:
  ```
  A cute modular office building made entirely of stacked Figma-like pastel design-system cards, each floor a different colored card with rounded corners and a subtle drop-shadow feel, base floor in soft pastel blue, second floor in pastel pink, third floor in warm pastel yellow, top floor in mint green. On the front face of the base floor the wordmark "miridih" is printed completely flat as a simple painted decal directly on the wall surface in lowercase sans-serif letters in dark charcoal ink — no raised lettering, no 3D sculpted sign, no suspended billboard, no sign frame, just a thin flat graphic like a sticker flush with the wall. Each card has a tiny circular component dot and a thin label line on the front like a design token, transparent accent strips between floors suggesting auto-layout spacing, cute rounded windows hinted as small white squares on each card, playful design system aesthetic, chunky chibi proportions, clean dollhouse-scale building, no surroundings. Stylized low-poly 3D render, flat shaded, soft pastel color palette, playful chibi proportions, cozy playground world aesthetic inspired by Poly Pizza and Quaternius assets. Clean geometry, isometric 3/4 view, centered single subject on a pure white seamless background, even soft studio lighting, no cast shadow. Avoid photorealism, raised 3D letters, extruded signage, embossed text, floating billboards, sculpted signs, additional brand logos, watermarks, cluttered scene, multiple buildings, surrounding environment, ground shadow, gradient or busy background, and people.
  ```

### [4/13] building-archidraw (Zone 2)

- **File**: `public/models/building_archidraw.glb`
- **Text-to-3D** (Meshy 폴백용):
  ```
  a stylized cozy model-house showing a cutaway interior of furniture (sofa, table, lamp), 3D home-furnishing editor vibe, warm brown and cream tones, low-poly
  ```
- **Image Prompt (Higgsfield Auto)**:
  ```
  A cozy cutaway model house showing both exterior and interior — the right half of the front wall is removed revealing the interior: a small pastel mustard sofa, a round wooden coffee table, a tall floor lamp with cream shade, and a framed picture on the interior wall. Warm beige and brown color palette, pitched roof with pastel clay tiles, small chimney, a round porthole window on the intact wall, a tiny welcome mat at the doorstep, visible wooden floorboards on the interior floor, exterior wall in warm cream stucco. Cross-section feel but clean and cute, chibi dollhouse scale, no people. Stylized low-poly 3D render, flat shaded, soft pastel color palette, playful chibi proportions, cozy playground world aesthetic inspired by Poly Pizza and Quaternius assets. Clean geometry, isometric 3/4 view showing the cutaway side, centered single subject on a pure white seamless background, even soft studio lighting, no cast shadow. Avoid photorealism, readable signs, watermarks, cluttered scene, multiple houses, surrounding environment, ground shadow, gradient or busy background, people, and pets.
  ```

### [5/13] building-fastcampus (Zone 2)

- **File**: `public/models/building_fastcampus.glb`
- **Text-to-3D** (Meshy 폴백용):
  ```
  a small lecture stage building with a camera on tripod in front and a projection screen inside, purple and white palette, low-poly
  ```
- **Image Prompt (Higgsfield Auto)**:
  ```
  A small lecture stage building with a cozy performative vibe, boxy structure with one side open like a stage showing the interior — inside there is a projection screen on the back wall glowing faint lavender, a wooden lecturer podium with a tiny microphone, a cinema tripod camera set up in front of the stage pointing toward the screen, a couple of soft purple stage lights hanging from the ceiling edge. Exterior walls in deep pastel purple with thin white trim, a friendly marquee sign above the entrance shaped like an upward arrow with no readable text, rounded rooftop with a single spotlight. Chibi chunky proportions, dollhouse scale. Stylized low-poly 3D render, flat shaded, soft pastel color palette with purple accent, playful chibi proportions, cozy playground world aesthetic inspired by Poly Pizza and Quaternius assets. Clean geometry, isometric 3/4 view, centered single subject on a pure white seamless background, even soft studio lighting, no cast shadow. Avoid photorealism, readable text, brand logos, watermarks, cluttered scene, multiple buildings, surrounding environment, ground shadow, gradient or busy background, people, and audience.
  ```

### [6/13] lamp-post (Zone 2, 인스턴싱)

- **File**: `public/models/lamp_post.glb`
- **Text-to-3D** (Meshy 폴백용):
  ```
  a cute street lamp post with a curved top and a warm orange glowing bulb, cast-iron base, low-poly, flat shaded
  ```
- **Image Prompt (Higgsfield Auto)**:
  ```
  A cute cartoon street lamp post, tall slender vertical pole in matte black cast iron with a subtle fluted texture near the base, ornate curved top bracket curling outward like a fishhook, a single bulbous round glass lamp hanging from the curve with a soft warm amber glow inside, faint bloom around the bulb, small decorative finial ball on top of the pole, thick circular base plate with four small bolt nubs, a tiny curl of ivy or a single mint leaf growing at the base. Chunky chibi proportions, cozy village street vibe, single isolated prop. Stylized low-poly 3D render, flat shaded, soft pastel color palette, playful chibi proportions, cozy playground world aesthetic inspired by Poly Pizza and Quaternius assets. Clean geometry, isometric 3/4 view, centered single subject on a pure white seamless background, even soft studio lighting, no cast shadow. Avoid photorealism, text, watermarks, rust, grunge, cluttered scene, multiple lamps, surrounding street, ground shadow, gradient or busy background, and people.
  ```

### [7/13] sign-timeline-arrow (Zone 2)

- **File**: `public/models/sign_timeline_arrow.glb`
- **Text-to-3D** (Meshy 폴백용):
  ```
  a wooden signpost with a curved arrow marked "2020 → 2026", carved wood, low-poly
  ```
- **Image Prompt (Higgsfield Auto)**:
  ```
  A rustic wooden signpost with a curved wooden arrow plank mounted on a thick round post, the arrow points to the upper right, hand-carved letters engraved into the arrow surface reading "2020 → 2026" in a friendly serif style, warm honey-brown wood grain with visible subtle planks, the top of the post has a tiny cartoon bird sitting on it, a small pastel green moss patch at the base, two iron nails visible on the arrow plank, simple rounded octagonal post shape. Chibi chunky proportions, cute landmark prop, single isolated object. Stylized low-poly 3D render, flat shaded, soft pastel color palette, playful chibi proportions, cozy playground world aesthetic inspired by Poly Pizza and Quaternius assets. Clean geometry, isometric 3/4 view, centered single subject on a pure white seamless background, even soft studio lighting, no cast shadow. Avoid photorealism, additional text, misspelled years, extra words, watermarks, rot, grunge, cluttered scene, multiple signs, surrounding landscape, ground shadow, gradient or busy background, and people.
  ```

### [8/13] tower-base (Zone 3)

- **File**: `public/models/tower_base.glb`
- **Text-to-3D** (Meshy 폴백용):
  ```
  a 4-story square observation tower, each floor visible as an open platform with railings, wooden and pastel-painted structure, lookout flag on top, low-poly playful
  ```
- **Image Prompt (Higgsfield Auto)**:
  ```
  A four-story square observation tower, each floor is an open platform with wooden railings and open view with no walls, visible load-bearing wooden corner posts painted in pastel mint and cream alternating by floor, wooden plank floor for each level, small crate props hinted on some floors but mostly empty to leave room for skill boxes, a pastel coral flag on a slender pole at the very top waving gently with a playful cloth ripple, a simple wooden ladder on one side connecting floors, exterior wrapped with a subtle rope banister detail. Chunky chibi dollhouse proportions, the tower is roughly twice as tall as it is wide, base plate with soft grass tufts, single isolated structure. Stylized low-poly 3D render, flat shaded, soft pastel color palette, playful chibi proportions, cozy playground world aesthetic inspired by Poly Pizza and Quaternius assets. Clean geometry, isometric 3/4 view, centered single subject on a pure white seamless background, even soft studio lighting, no cast shadow. Avoid photorealism, text, signs with letters, watermarks, cluttered scene, multiple towers, surrounding environment, ground shadow, gradient or busy background, and people.
  ```

### [9/13] stairs-spiral (Zone 3)

- **File**: `public/models/stairs_spiral.glb`
- **Text-to-3D** (Meshy 폴백용):
  ```
  a spiral staircase connecting 4 levels, metal railing, low-poly, fits inside a square tower
  ```
- **Image Prompt (Higgsfield Auto)**:
  ```
  A chibi spiral staircase designed to fit inside a square observation tower, four full 90-degree revolutions connecting four levels, each step a chunky rectangular plank in warm honey-brown wood with visible grain and rounded nosing, wrapping around a slender central pole in pastel mint metal with a small decorative finial ball on top. A graceful outer handrail in matte pastel coral metal spirals up alongside the steps, supported by thin balusters every few steps with tiny pastel-brass knob accents. Tiny landing platforms at each floor level with a small arrow marker hinted but no readable text, soft shadow line under each step, no surrounding walls shown so the spiral silhouette reads clearly. Chunky chibi dollhouse proportions, cozy playful vertical circulation prop, single isolated structure. Stylized low-poly 3D render, flat shaded, soft pastel color palette with pastel mint, coral, and warm honey-brown, playful chibi proportions, cozy playground world aesthetic inspired by Poly Pizza and Quaternius assets. Clean geometry, isometric 3/4 view, centered single subject on a pure white seamless background, even soft studio lighting, no cast shadow. Avoid photorealism, text, watermarks, rust, cluttered scene, multiple staircases, surrounding walls, ground shadow, gradient or busy background, and people climbing.
  ```

### [10/13] flag-top (Zone 3)

- **File**: `public/models/flag_top.glb`
- **Text-to-3D** (Meshy 폴백용):
  ```
  a small flag on a pole with a stylized code bracket "{ }" symbol, waving cloth, low-poly
  ```
- **Image Prompt (Higgsfield Auto)**:
  ```
  A small decorative flag on a slender wooden pole with a pastel coral pennant cloth waving in an implied gentle breeze with a soft wave ripple, the cloth has a hand-painted symbol of code brackets "{ }" in cream white at the center, simple two-hole mounting to the pole with tiny brass grommets, rounded wooden finial ball on top of the pole in warm honey brown, pole base implied as a small square mounting bracket. Cute chibi proportions, single isolated prop. Stylized low-poly 3D render, flat shaded, soft pastel color palette, playful chibi proportions, cozy playground world aesthetic inspired by Poly Pizza and Quaternius assets. Clean geometry, isometric 3/4 view, centered single subject on a pure white seamless background, even soft studio lighting, no cast shadow. Avoid photorealism, extra text, additional words, watermarks, cluttered scene, multiple flags, surrounding environment, ground shadow, gradient or busy background, and people.
  ```

### [11/13] hall-temple (Zone 4)

- **File**: `public/models/hall_temple.glb`
- **Text-to-3D** (Meshy 폴백용):
  ```
  a small open Greek-style temple with 6 columns, marble-white with gold accents, coffered ceiling, no walls between columns so player can walk inside, low-poly stylized
  ```
- **Image Prompt (Higgsfield Auto)**:
  ```
  A small open Greek-style temple pavilion with exactly six fluted columns arranged in a rectangular footprint three front and three back, no walls between columns so the interior is fully visible and walkable, marble-white columns with soft vertical fluting and rounded capitals, a simple triangular pediment above the columns with decorative gold laurel wreath carved in the center, coffered ceiling visible from inside with repeating square panels in warm cream and gold, polished marble floor with a subtle circular medallion pattern, a pair of shallow stone steps leading up to the platform from one side, gold trim along the architrave and at the base of each column. Chibi chunky proportions so the temple feels like a cute dollhouse shrine, no surrounding trees or ground, single isolated structure. Stylized low-poly 3D render, flat shaded, soft pastel color palette with marble-white and gold accents, playful chibi proportions, cozy playground world aesthetic inspired by Poly Pizza and Quaternius assets. Clean geometry, isometric 3/4 view showing the interior through the open columns, centered single subject on a pure white seamless background, even soft studio lighting, no cast shadow. Avoid photorealism, text, readable engravings, modern elements, watermarks, ruins, broken columns, cluttered scene, multiple temples, surrounding landscape, ground shadow, gradient or busy background, people, and statues of people.
  ```

### [12/13] graduation-cap (Zone 4)

- **File**: `public/models/graduation_cap.glb`
- **Text-to-3D** (Meshy 폴백용):
  ```
  a graduation cap with tassel, dark blue and gold, low-poly, chibi style
  ```
- **Image Prompt (Higgsfield Auto)**:
  ```
  A classic graduation mortarboard cap, square flat top board in deep pastel navy blue with a subtle cloth fold at the corners, rounded cap base snug for a head, a golden tassel dangling from a button at the center of the board falling to the right side with a tiny gold tuft, inside lining hint in cream color, soft fabric drape on the tassel. Chunky chibi proportions slightly oversized for cute appeal, single isolated prop floating as if on display, no head, no mannequin. Stylized low-poly 3D render, flat shaded, soft pastel color palette with navy and gold emphasis, playful chibi proportions, cozy playground world aesthetic inspired by Poly Pizza and Quaternius assets. Clean geometry, isometric 3/4 view, centered single subject on a pure white seamless background, even soft studio lighting, no cast shadow. Avoid photorealism, text, year, school name, watermarks, cluttered scene, multiple caps, background props, ground shadow, gradient or busy background, people, heads, and mannequin.
  ```

### [13/13] pedestal (Zone 4, 인스턴싱)

- **File**: `public/models/pedestal.glb`
- **Text-to-3D** (Meshy 폴백용):
  ```
  a short stone pedestal for displaying a trophy, cylindrical, with a subtle engraved nameplate, low-poly
  ```
- **Image Prompt (Higgsfield Auto)**:
  ```
  A short cylindrical stone pedestal for displaying a trophy, pale marble-white material with subtle soft veining in cool gray, rounded top edge with a slight chamfer, a narrower middle column and a wider base flange giving classical proportions, a small rectangular engraved nameplate on the front face in brushed gold with no readable text just a subtle line indicating where text would go, tiny decorative laurel leaf motif carved above the nameplate, soft rounded edges. Chunky chibi proportions short and stable, single isolated prop, pedestal only without trophy on top. Stylized low-poly 3D render, flat shaded, soft pastel color palette with marble-white and gold emphasis, playful chibi proportions, cozy playground world aesthetic inspired by Poly Pizza and Quaternius assets. Clean geometry, isometric 3/4 view, centered single subject on a pure white seamless background, even soft studio lighting, no cast shadow. Avoid photorealism, readable engraved name, text, watermarks, cracks, damage, cluttered scene, trophy on top, background props, ground shadow, gradient or busy background, and people.
  ```

---

## Zone 0 — 인트로 (놀이터)

기존 `Pine Trees.glb`, `Tree.glb`, `Jungle gym.glb`, `Slide.glb`, `Swing.glb`, `Wooden Sign.glb`, `Rock Path Round Wide.glb` 재활용. Meshy 신규 에셋 없음. (선택 항목만 아래 기재)

### intro-npc-guide (선택)
- **File**: `public/models/intro_npc_guide.glb`
- **Used In**: Zone 0 (선택 — Phase B 이후 추가 여부 결정)
- **Status**: ❌ Not Generated
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
- **Status**: ⏳ Downloaded (`~/Downloads/Meshy_AI_AIStudio_0422083400_texture.glb`)
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
- **Status**: ⏳ Downloaded (`~/Downloads/Meshy_AI_Blue_Grid_Display_on__0422083410_texture.glb`)
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
- **Status**: ⏳ Downloaded (`~/Downloads/Meshy_AI_camera_0422083422_texture.glb`)
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
- **Status**: ❌ Not Generated
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
- **Status**: ⏳ Downloaded (`~/Downloads/Meshy_AI_AI_agent_0422083455_texture.glb`)
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
- **Status**: ⏳ Downloaded (`~/Downloads/Meshy_AI_AI_Studio_Neon_logo_0422083518_texture.glb`)
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
- **Status**: ⏳ Downloaded (`~/Downloads/Meshy_AI_Server_0422083532_texture.glb`)
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
- **Status**: ❌ Not Generated
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
- **Status**: ⏳ Downloaded (`~/Downloads/Meshy_AI_aiv_0422083758_texture.glb` — 최신본 채택, 83628 삭제)
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
- **Status**: ⏳ Downloaded (`~/Downloads/Meshy_AI_muhayu_0422083621_texture.glb`)
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
- **Status**: ❌ Not Generated
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
- **Status**: ⏳ Downloaded (`~/Downloads/Meshy_AI_724lab_0422083935_texture.glb`)
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
- **Status**: ❌ Not Generated
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
- **Status**: ❌ Not Generated
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
- **Status**: ❌ Not Generated
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
- **Status**: ❌ Not Generated
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
- **Status**: ❌ Not Generated
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
- **Status**: ❌ Not Generated
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
- **Status**: ❌ Not Generated
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
- **Status**: ⏳ Downloaded (`~/Downloads/Meshy_AI_gold_trophy_0422083801_texture.glb`)
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
- **Status**: ⏳ Downloaded (`~/Downloads/Meshy_AI_silver_trophy_2_0422083553_texture.glb` — 최신본 채택, 83548 삭제)
- **Text-to-3D Prompt**:
  ```
  a silver trophy cup, simpler design than gold, on a rectangular base, low-poly
  ```
- **Image Prompt**:
  ```
  low-poly silver trophy cup on rectangular base, isometric, white background
  ```

### certificate-frame
- **File**: `public/models/certificate_frame.glb`
- **Used In**: 자격증 5건 각각에 인스턴싱
- **Status**: ⏳ Downloaded (`~/Downloads/Meshy_AI_certificate_2_0422083613_texture.glb` — 최신본 채택, certificate_1_83604 삭제)
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
- **Status**: ❌ Not Generated
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
- **Status**: ❌ Not Generated
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

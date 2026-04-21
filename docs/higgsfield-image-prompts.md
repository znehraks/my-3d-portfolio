# Higgsfield AI (Auto 모델) Image-to-3D 이미지 생성 프롬프트 (복붙 전용)

> 본 문서는 `docs/meshy-assets.md` 의 각 에셋을 **Higgsfield AI의 Auto 모델**로 생성할 때 **한 블록만 복사하면 바로 쓸 수 있도록** 프롬프트를 자연어 단일 블록으로 재구성한 버전이다.
>
> 워크플로우: 아래 블록 그대로 붙여넣기 → Higgsfield Auto 모델 선택 → Aspect Ratio `1:1` → 생성 → 컷 선택 → Meshy Image-to-3D 업로드 → GLB 추출 → `public/models/` 배치 → 코드 주석 교체(`docs/meshy-assets.md` Status 🟡→🟢).
>
> Higgsfield 사용 시 팁:
> - **Auto 모델**은 자연어 흐름을 잘 따라가므로 Midjourney의 `--ar`, `--v`, `--s`, `--chaos`, `--no` 같은 파라미터 문법은 전부 제거했다.
> - **네거티브 프롬프트 슬롯이 없으므로** 제외 요소는 `without ..., no ..., clean background only` 식으로 본문 끝에 녹여두었다.
> - Aspect Ratio는 UI에서 **Square (1:1)** 로 지정하고, 해상도는 최대로, Enhance Prompt 옵션은 **OFF** (우리가 이미 디테일을 다 담았다)로 두는 것을 권장.
> - 톤 일관성을 위해 첫 컷을 뽑은 뒤 **Reference Image** 슬롯에 올려 뒤 컷을 생성하면 존간 스타일 편차가 크게 줄어든다.

---

## Zone 0 — 인트로 (놀이터)

### 0-A. `intro_npc_guide.glb` (선택 항목, T-pose 리깅용 안내 NPC)

```
A cute chibi 3D character rendered as a friendly young maker guide, presented in a rigid symmetrical T-pose for game rigging with arms stretched perfectly horizontal to the ground and legs straight together. Big round head with rosy cheeks and a small gentle smile, wearing a knitted beanie with a tiny cloth tag that reads "maker", an oversized soft sky-blue wool sweater, baggy brown corduroy pants, and small white sneakers. One hand is relaxed open waving hello while the other holds a tiny wooden signboard with a carved heart symbol. Chibi head-to-body ratio about 1:2, full body fully visible from head to feet, neutral face looking straight forward, clean readable silhouette. Stylized low-poly 3D render, flat shading, soft pastel color palette of mint, cream and sky blue, playful chibi proportions, cozy playground world aesthetic inspired by Poly Pizza and Quaternius asset packs. Isometric three-quarter front view, centered single subject, pure solid white seamless studio background (#ffffff) with even soft ambient lighting and no cast shadow on the floor. Clean geometry, no clutter, no other characters, no text overlay, no watermark, no logo, no gradient, not photorealistic.
```

---

## Zone 1 — AI 스튜디오

### 1-A. `ai_studio_building.glb` (존 중앙 랜드마크 건물)

```
An adorable futuristic film studio building shaped like a small dome with a gently curved rooftop. A large curved glass front facade reveals a subtle mint interior glow, a tilted satellite dish sits on the roof, and a tiny antenna with a blinking red light rises above it. On top of the dome a large neon tube sign spells "AI STUDIO" in flowing cursive letters glowing cyan and magenta with a subtle soft bloom. Matte cream-white concrete walls with pastel teal roof trim, one rounded entrance door with a small step, small rectangular side windows with a warm yellow glow, and a decorative film reel motif embossed near the entrance. Chunky chibi dollhouse proportions, single isolated building with no surroundings, no ground plane, no other props. Stylized low-poly 3D render, flat shading, soft pastel color palette, cozy playground world aesthetic inspired by Poly Pizza and Quaternius. Isometric three-quarter view, centered single subject, pure solid white seamless studio background (#ffffff), even soft studio lighting, no cast shadow, no people, no vehicles, no extra text beyond the AI STUDIO neon, no watermark, no gradient, not photorealistic.
```

---

### 1-B. `hologram_screen.glb` (88ight YouTube 임베드 트리거 소품)

```
A floating holographic display screen standing on a thin chrome tripod base. The screen is a vertical rectangle with softly rounded corners, its surface a translucent glowing cyan-blue emissive panel showing only a very faint scanline grid pattern with no image, no UI, no icons, and no text. A thin metallic silver frame wraps the screen with tiny notches at each corner. A faint mist of light particles rises from the base, a small power cable is coiled at the floor, and the hologram emits a soft upward bloom. Futuristic minimal industrial design, chunky chibi proportions, single isolated prop. Stylized low-poly 3D render, flat shading, soft pastel color palette with emissive cyan accents, cozy playground world aesthetic. Isometric three-quarter view, centered single subject, pure solid white seamless studio background (#ffffff), even soft studio lighting, no cast shadow, no other screens, no background props, no people, no watermark, no gradient, not photorealistic.
```

---

### 1-C. `film_camera.glb`

```
A stylized cinema film camera mounted on a three-leg tripod, designed as a single isolated cute prop. The camera body is a chunky rectangular block in matte charcoal gray with softly rounded corners. An oversized round lens on the front shows layered glass rings tinted in teal, a small square viewfinder sticks out on the right side, and a tiny glowing red record light sits on the front top. A cream-colored film reel rests on top with a subtle tape texture, two black control knobs decorate the side, and the telescopic matte silver tripod legs end in rubber feet with a knobbed tripod head. Playful chibi exaggerated proportions, the camera body taking about sixty percent of tripod height, cute and friendly rather than aggressive. Stylized low-poly 3D render, flat shading, soft pastel color palette, cozy playground world aesthetic. Isometric three-quarter view, centered single subject, pure solid white seamless studio background (#ffffff), even soft studio lighting, no cast shadow, no hands holding the camera, no operator, no background props, no brand logo, no text, no watermark, no gradient, not photorealistic.
```

---

### 1-D. `mic_studio.glb`

```
A studio condenser microphone mounted on a swing boom arm, single isolated prop. Cylindrical microphone body in matte black with a brushed gold mesh grille and a small LED indicator dot. A round metal pop filter with a black hoop frame sits just in front of the mic. The boom arm is articulated with two pivot joints in matte black metal, its clamp base attached to a tiny implied edge fragment so the prop reads as mounted without showing a desk. Rubber grip accents in pastel cream, a cable loop hanging naturally. Chunky stylized chibi proportions with the microphone head slightly oversized for cute appeal. Stylized low-poly 3D render, flat shading, soft pastel color palette, cozy playground world aesthetic. Isometric three-quarter view, centered single subject, pure solid white seamless studio background (#ffffff), even soft studio lighting, no cast shadow, no hands, no person, no other microphones, no background props, no brand text, no watermark, no gradient, not photorealistic.
```

---

### 1-E. `robot_npc.glb` (Claude Code 에이전트 팀 트리거, T-pose 리깅용)

```
A friendly chibi humanoid AI agent robot standing in a strict symmetrical T-pose with short stubby arms pointing straight horizontally outward for rigging. Big rounded helmet-like head with a single wide horizontal glowing visor eye in soft cyan, two small round antennae tipped in pastel mint, a rounded marshmallow torso with a faint heart-shaped LED on the chest glowing mint green, and blocky cylindrical legs. Soft white and mint pastel panel plating with subtle panel line detailing, a small speaker grille on the jaw area, and a neutral happy expression implied by the gentle visor curvature. Chubby approachable proportions with a head-to-body ratio around 1:1.2, clean readable silhouette. Stylized low-poly 3D render, flat shading, soft pastel color palette, cozy playground world aesthetic. Isometric three-quarter front view, centered single subject, pure solid white seamless studio background (#ffffff), even soft studio lighting, no cast shadow, no weapons, no blades, no menacing features, no extra limbs, no distorted geometry, no background props, no other characters, no text, no watermark, no gradient, not photorealistic.
```

---

### 1-F. `neon_sign_ai.glb` (벽면 부착 네온 사인)

```
A neon tube wall sign spelling exactly "AI STUDIO" in a flowing cursive handwriting style, with the word "AI" in bright glowing cyan tubes and the word "STUDIO" in glowing magenta tubes. The tubes are mounted on a thin transparent smoke-gray acrylic backing plate with rounded rectangular shape, fixed by four tiny metal mounting brackets at the corners. A subtle bloom halo surrounds the tubes, small realistic bend points appear along the glass, and a single thin power cable runs out from the bottom-right. Single isolated sign hanging in empty space, no wall, no bricks, no environment around it. Stylized low-poly 3D render, flat shading, soft pastel color palette with neon emissive accents, cozy playground world aesthetic. Isometric slightly-three-quarter front view, centered single subject, pure solid white seamless studio background (#ffffff), even soft studio lighting, no cast shadow, no surrounding wall, no additional words, no misspellings, no watermark, no gradient, no people, not photorealistic.
```

---

### 1-G. `server_rack.glb` (RAG Slack 봇·AI호외요 트리거)

```
A stylized server rack cabinet designed as a single isolated prop. Tall rectangular black metal chassis with softly rounded corners, containing four horizontal server units stacked inside with visible front panels, each unit showing a neat row of tiny blinking LED dots in green, amber and cyan along with ventilation slots. A small round power button emits a soft blue glow, while pastel teal and coral cable bundles are neatly routed down the right side. Two small printed labels on the front panels read "n8n" and "RAG" in simple block letters — no other text anywhere. Matte charcoal-gray chassis with pastel mint accent strips and small rubber feet at the base. Chunky chibi proportions, not overly tall, friendly approachable silhouette. Stylized low-poly 3D render, flat shading, soft pastel color palette, cozy playground world aesthetic. Isometric three-quarter view, centered single subject, pure solid white seamless studio background (#ffffff), even soft studio lighting, no cast shadow, no other racks, no background props, no people or hands, no extra labels, no watermark, no gradient, not photorealistic.
```

---

## Zone 2 — 경력 거리

### 2-A. `building_miridih.glb` (미리디, 디자인시스템 테마 건물)

```
A cute modular office building constructed entirely from stacked Figma-style pastel design-system cards. Each floor is a separately colored card with a soft rounded-corner radius and a subtle drop-shadow feel — base floor in pastel blue, second floor in pastel pink, third floor in warm pastel yellow, and top floor in mint green. Every card carries a tiny circular component dot and a thin horizontal label line on the front like a design token, with transparent accent strips between floors suggesting auto-layout spacing. A small rooftop sign shaped like a hex color token sits on top, and little white square "windows" are hinted on each card. Chunky chibi dollhouse proportions, playful design-system aesthetic, single isolated building with no surroundings. Stylized low-poly 3D render, flat shading, soft pastel color palette, cozy playground world aesthetic inspired by Poly Pizza and Quaternius. Isometric three-quarter view, centered single subject, pure solid white seamless studio background (#ffffff), even soft studio lighting, no cast shadow, no other buildings, no environment, no readable words, no brand logos, no people, no vehicles, no watermark, no gradient, not photorealistic.
```

---

### 2-B. `building_aiv.glb` (AiV, 산업/공장 영상처리)

```
A tiny industrial factory building with playful chibi proportions, single isolated structure. Corrugated metal roof in pastel steel blue with visible repeating ridges, a tall cylindrical chimney on the left side emitting a faint puff of cloud-white smoke, and matte cream-gray concrete walls. A small conveyor belt extends from the front-right base carrying a couple of rounded boxes. A large friendly signage plate mounted on the front wall reads exactly "AiV" in simple bold block letters — no other text anywhere. Small rectangular side windows glow warm yellow, a rolling metal shutter door is partially open, and a single pastel-red barrel sits beside the entrance. Industrial yet friendly chunky cartoon dollhouse silhouette. Stylized low-poly 3D render, flat shading, soft pastel color palette, cozy playground world aesthetic. Isometric three-quarter view, centered single subject, pure solid white seamless studio background (#ffffff), even soft studio lighting, no cast shadow, no rust, no grunge, no other buildings, no environment, no extra logos, no readable sentences, no people, no vehicles, no watermark, no gradient, not photorealistic.
```

---

### 2-C. `building_muhayu.glb` (무하유, 채용·HR)

```
A small modern three-story office building with a clean glass facade, single isolated structure. Full-height windows on each floor use soft pastel-blue reflective glass, framed by a cream-white concrete structure with thin metallic window trim. The flat rooftop features a playful oversized paperclip sculpted as a decorative metal ornament alongside a tiny rooftop garden with a single low mint-green bush. The main entrance is a rounded archway with a subtle warm interior glow, and a small blank company sign plate sits near the door with no readable text. Crisp architectural lines combined with chibi chunky proportions for a playful modern office dollhouse feel. Stylized low-poly 3D render, flat shading, soft pastel color palette, cozy playground world aesthetic. Isometric three-quarter view, centered single subject, pure solid white seamless studio background (#ffffff), even soft studio lighting, no cast shadow, no other buildings, no surrounding environment, no readable words, no brand logos, no people, no cars, no watermark, no gradient, not photorealistic.
```

---

### 2-D. `building_archidraw.glb` (아키드로우, 3D 홈퍼니싱)

```
A cozy cutaway model house where the right half of the front wall is removed to reveal a charming interior, single isolated structure. Inside: a small pastel-mustard sofa, a round wooden coffee table, a tall floor lamp with a cream shade, a framed picture on the inner wall, and visible wooden floorboards, all in a warm beige-and-brown palette. The exterior features a pitched roof with pastel clay tiles, a small chimney, a round porthole window on the intact wall, a tiny welcome mat at the doorstep, and warm cream stucco walls. Clean cross-section feel, chibi dollhouse scale, no people, no pets. Stylized low-poly 3D render, flat shading, soft pastel color palette, cozy playground world aesthetic. Isometric three-quarter view showing the cutaway side, centered single subject, pure solid white seamless studio background (#ffffff), even soft studio lighting, no cast shadow, no other houses, no surrounding environment, no readable signs, no watermark, no gradient, not photorealistic.
```

---

### 2-E. `building_lab724.glb` (Lab724, 초기 창업 스튜디오)

```
A small startup garage workshop rendered as a single isolated cozy structure. Square concrete box with a large metal roller shutter door half open, revealing the interior: a chibi laptop on a simple wooden desk with a coffee mug, a stack of cardboard shipping boxes in the corner, a coat hanger holding a tiny hoodie, and a folding chair. A single warm yellow ceiling bulb casts a golden interior glow. The exterior walls are warm terracotta brick, a tiny sticker shaped like a lightbulb icon is stuck on the wall, and a worn-in welcome mat sits outside. Founder-era cozy vibe, chibi chunky dollhouse proportions. Stylized low-poly 3D render, flat shading, soft pastel color palette, cozy playground world aesthetic. Isometric three-quarter view, centered single subject, pure solid white seamless studio background (#ffffff), even soft studio lighting, no cast shadow, no graffiti text, no readable signs, no surrounding street, no people, no vehicles, no watermark, no gradient, not photorealistic.
```

---

### 2-F. `building_fastcampus.glb` (패스트캠퍼스, 강의)

```
A small lecture-stage building with a cozy performative vibe, single isolated structure. Boxy exterior with one side open like a stage, revealing an interior that contains a projection screen on the back wall glowing faint lavender, a wooden lecturer podium with a tiny microphone, a cinema tripod camera set up in front pointing at the screen, and a pair of soft purple stage lights hanging from the ceiling edge. Exterior walls in deep pastel purple with thin white trim, a friendly marquee sign shaped like an upward arrow sits above the entrance with no readable text, and a rounded rooftop holds a single spotlight. Chibi chunky dollhouse proportions. Stylized low-poly 3D render, flat shading, soft pastel color palette with purple accents, cozy playground world aesthetic. Isometric three-quarter view, centered single subject, pure solid white seamless studio background (#ffffff), even soft studio lighting, no cast shadow, no other buildings, no surrounding environment, no readable text, no brand logos, no audience, no people, no watermark, no gradient, not photorealistic.
```

---

### 2-G. `lamp_post.glb` (가로등, 인스턴싱 다수)

```
A cute cartoon street lamp post, single isolated prop. Tall slender vertical pole in matte black cast iron with subtle fluted texture near the base, an ornate curved top bracket curling outward like a fishhook, and a single bulbous round glass lamp hanging from the curve with a soft warm amber glow inside and a gentle bloom halo. A small decorative finial ball caps the top of the pole, the base is a thick circular plate with four small bolt nubs, and a tiny curl of ivy or a single mint leaf sprouts at the base for charm. Chunky chibi proportions, cozy village-street vibe. Stylized low-poly 3D render, flat shading, soft pastel color palette, cozy playground world aesthetic. Isometric three-quarter view, centered single subject, pure solid white seamless studio background (#ffffff), even soft studio lighting, no cast shadow, no rust, no grunge, no other lamps, no surrounding street, no people, no text, no watermark, no gradient, not photorealistic.
```

---

### 2-H. `sign_timeline_arrow.glb` (경력 거리 시작점 이정표)

```
A rustic wooden signpost designed as a cute landmark prop, single isolated object. A curved wooden arrow plank is mounted on a thick rounded octagonal post, pointing to the upper right. The arrow surface carries hand-carved engraved letters that read exactly "2020 → 2026" in a friendly serif style — no other text anywhere. Warm honey-brown wood with visible subtle plank grain, a tiny cartoon bird perched on top of the post, a small pastel-green moss patch at the base, and two visible iron nails on the arrow plank. Chibi chunky proportions. Stylized low-poly 3D render, flat shading, soft pastel color palette, cozy playground world aesthetic. Isometric three-quarter view, centered single subject, pure solid white seamless studio background (#ffffff), even soft studio lighting, no cast shadow, no rot, no grunge, no other signs, no surrounding landscape, no misspelled years, no extra words, no people, no watermark, no gradient, not photorealistic.
```

---

## Zone 3 — 기술 타워

### 3-A. `tower_base.glb` (4층 관측탑 본체)

```
A four-story square observation tower, single isolated structure. Each floor is an open platform with wooden railings and no walls so the interior remains fully visible. Load-bearing wooden corner posts are painted in alternating pastel mint and cream by floor, wooden plank floors fill each level, and the platforms are left mostly empty to leave room for later prop placement. A pastel coral flag on a slender pole flies at the very top with a gentle cloth ripple, a simple wooden ladder on one side connects the floors, and a subtle rope banister detail wraps the exterior. Chunky chibi dollhouse proportions with the tower roughly twice as tall as it is wide, sitting on a small base plate with soft grass tufts. Stylized low-poly 3D render, flat shading, soft pastel color palette, cozy playground world aesthetic. Isometric three-quarter view, centered single subject, pure solid white seamless studio background (#ffffff), even soft studio lighting, no cast shadow, no other towers, no surrounding environment, no text, no signs, no people, no watermark, no gradient, not photorealistic.
```

---

### 3-B. `stairs_spiral.glb` (타워 내부 층간 연결)

```
A compact spiral staircase designed to fit inside a square tower, single isolated prop. A central cylindrical support pole in matte cream with a subtle painted pastel-blue stripe runs vertically, honey-brown wooden step treads radiate outward, and a thin pastel-mint metal handrail coils upward in a helix. The spiral completes roughly three full turns connecting four implied levels, a small decorative finial caps the top of the pole, and step edges are softly rounded. No surrounding walls so the spiral is clearly visible. Chunky chibi proportions. Stylized low-poly 3D render, flat shading, soft pastel color palette, cozy playground world aesthetic. Isometric three-quarter view, centered single subject, pure solid white seamless studio background (#ffffff), even soft studio lighting, no cast shadow, no rust, no surrounding walls, no people, no text, no background props, no watermark, no gradient, not photorealistic.
```

---

### 3-C. `flag_top.glb` (타워 옥상 깃발)

```
A small decorative flag on a slender wooden pole, single isolated prop. A pastel-coral pennant cloth waves gently in an implied breeze with a soft ripple, featuring a hand-painted cream-white code-brackets "{ }" symbol centered on the cloth and no other markings. The cloth is mounted to the pole through two small brass grommets. A rounded honey-brown wooden finial ball caps the top of the pole, and a small square mounting bracket is implied at the base. Cute chibi proportions. Stylized low-poly 3D render, flat shading, soft pastel color palette, cozy playground world aesthetic. Isometric three-quarter view, centered single subject, pure solid white seamless studio background (#ffffff), even soft studio lighting, no cast shadow, no other flags, no surrounding environment, no extra text or words, no people, no watermark, no gradient, not photorealistic.
```

---

> **Skill Tower의 스킬 박스 24종** 은 기존 `Box.tsx` + webp 텍스처 재활용이므로 3D 신규 에셋 불필요. 텍스처 보강 리스트는 `docs/meshy-assets.md §텍스처 보강 대상` 참조.

---

## Zone 4 — 명예의 전당

### 4-A. `hall_temple.glb` (존 본체, 플레이어 진입 가능한 신전)

```
A small open Greek-style temple pavilion with exactly six fluted columns arranged in a rectangular footprint of three front and three back, with no walls between them so the interior is fully visible and walkable. Marble-white columns feature soft vertical fluting and rounded capitals, a simple triangular pediment above the columns carries a decorative gold laurel wreath carved at its center, and a coffered ceiling of repeating warm-cream and gold square panels is visible from inside. The polished marble floor shows a subtle circular medallion pattern, a pair of shallow stone steps lead up to the platform from one side, and gold trim runs along the architrave and the base of each column. Chibi chunky proportions giving the temple a cute dollhouse-shrine feel, single isolated structure with no surrounding trees or ground. Stylized low-poly 3D render, flat shading, soft pastel color palette with marble-white and gold accents, cozy playground world aesthetic. Isometric three-quarter view showing the interior through the open columns, centered single subject, pure solid white seamless studio background (#ffffff), even soft studio lighting, no cast shadow, no ruins, no broken columns, no other temples, no surrounding landscape, no readable engravings, no modern elements, no people, no statues of people, no watermark, no gradient, not photorealistic.
```

---

### 4-B. `trophy_gold.glb` (KOPIS 금상)

```
A classic golden trophy cup with a tall ornate design, single isolated celebratory prop. A wide rounded bowl shows a subtle gold shine with a mild fresnel highlight, two large elegant curved handles on the sides are shaped like stylized wings, and a slender stem between the bowl and base carries a decorative ring detail. The base is a five-pointed star in deeper polished gold standing on a small cylindrical mount, an engraved laurel-wreath motif wraps the upper bowl rim, and a tiny emerald accent gem sits at the center of the star base. Chunky chibi proportions, cute and celebratory rather than pompous, no text, no year engraved. Stylized low-poly 3D render, flat shading, soft pastel color palette with warm gold emphasis, cozy playground world aesthetic. Isometric three-quarter view, centered single subject, pure solid white seamless studio background (#ffffff), even soft studio lighting, no cast shadow, no tarnish, no scratches, no other trophies, no background props, no people, no hands, no engraved text, no name label, no watermark, no gradient, not photorealistic.
```

---

### 4-C. `trophy_silver.glb` (인천 은상)

```
A silver trophy cup with a simpler more modern design than its gold counterpart, single isolated prop. A medium rounded bowl shows a brushed satin silver finish with a subtle cool highlight, two slim straight handles sit on the sides, and a short cylindrical stem connects to a rectangular polished silver base with rounded edges. A small blank engraving plate appears on the front face of the base with no readable text, and a single diagonal accent groove runs along the bowl. Chunky chibi proportions, clean minimal silhouette. Stylized low-poly 3D render, flat shading, soft pastel color palette with cool silver emphasis, cozy playground world aesthetic. Isometric three-quarter view, centered single subject, pure solid white seamless studio background (#ffffff), even soft studio lighting, no cast shadow, no tarnish, no scratches, no other trophies, no background props, no people, no hands, no engraved text, no name label, no watermark, no gradient, not photorealistic.
```

---

### 4-D. `trophy_bronze.glb` (명지 동상)

```
A bronze medal trophy on a small standing display, single isolated prop. A circular bronze medallion shows a warm copper-orange patina with a subtle engraved star at its center, and a pastel navy-blue ribbon with two long tails hangs down from the top of the medal. A thin inverted-U wooden stand holds the medal upright, anchored in a warm honey-brown wood base with a small blank engraving plate on the front. Subtle patina highlights, no readable text. Chunky chibi proportions. Stylized low-poly 3D render, flat shading, soft pastel color palette with warm bronze emphasis, cozy playground world aesthetic. Isometric three-quarter view, centered single subject, pure solid white seamless studio background (#ffffff), even soft studio lighting, no cast shadow, no heavy tarnish, no rust, no other medals, no background props, no people, no hands, no engraved text, no name label, no watermark, no gradient, not photorealistic.
```

---

### 4-E. `certificate_frame.glb` (자격증 이젤, 5회 인스턴싱)

```
A wooden-framed certificate standing upright on a small tabletop wooden easel tripod, single isolated prop. The rectangular portrait-oriented frame is warm honey-brown carved wood with a tiny decorative relief at the top center. The inner paper is pastel parchment cream with a blank faint horizontal rule pattern — no readable sentences or titles — and a round red wax seal with a ribbon loop sits at the bottom-right corner. A subtle gold border line frames the parchment, and a thin pastel-teal ribbon is draped across the top-right corner of the frame. Easel legs in matching honey wood terminate in small rubber feet. Chunky chibi proportions, cute and celebratory. Stylized low-poly 3D render, flat shading, soft pastel color palette, cozy playground world aesthetic. Isometric three-quarter view, centered single subject, pure solid white seamless studio background (#ffffff), even soft studio lighting, no cast shadow, no torn paper, no damage, no other certificates, no background props, no people, no hands, no readable words on the parchment, no watermark, no gradient, not photorealistic.
```

---

### 4-F. `graduation_cap.glb`

```
A classic graduation mortarboard cap floating as if on display, single isolated prop with no head and no mannequin. A square flat top board in deep pastel navy blue shows subtle cloth folds at the corners, sitting over a rounded cap base snug for a head. A golden tassel hangs from a button at the center of the board, draping to the right side and ending in a tiny gold tuft, with a cream-color inner lining hint and a soft fabric drape on the tassel. Chunky chibi proportions slightly oversized for cute appeal. Stylized low-poly 3D render, flat shading, soft pastel color palette with navy and gold emphasis, cozy playground world aesthetic. Isometric three-quarter view, centered single subject, pure solid white seamless studio background (#ffffff), even soft studio lighting, no cast shadow, no other caps, no background props, no people, no heads, no mannequin, no text, no year, no school name, no watermark, no gradient, not photorealistic.
```

---

### 4-G. `pedestal.glb` (트로피 받침대, 3회 인스턴싱)

```
A short cylindrical stone pedestal for displaying a trophy, single isolated prop shown on its own without any trophy on top. Pale marble-white material with subtle soft cool-gray veining, a rounded top edge with a slight chamfer, a narrower middle column, and a wider base flange giving classical proportions. A small rectangular brushed-gold engraved nameplate sits on the front face with only a subtle blank line where text would go — no readable words. A tiny decorative laurel-leaf motif is carved just above the nameplate, and all edges are softly rounded. Chunky chibi proportions, short and stable. Stylized low-poly 3D render, flat shading, soft pastel color palette with marble-white and gold emphasis, cozy playground world aesthetic. Isometric three-quarter view, centered single subject, pure solid white seamless studio background (#ffffff), even soft studio lighting, no cast shadow, no cracks, no damage, no trophy on top, no other pedestals, no background props, no people, no readable engraved name, no watermark, no gradient, not photorealistic.
```

---

## Higgsfield Auto 생성 워크플로우

1. **UI 설정 고정**
   - Model: `Auto`
   - Aspect Ratio: `1:1` (Square)
   - Resolution: 최대
   - Enhance Prompt: **OFF** (이미 디테일이 충분함)
   - Batch size: 2~4장 뽑아서 가장 깔끔한 실루엣 선택

2. **톤 일관성 확보 순서**
   1. `ai_studio_building.glb` 먼저 생성 → 팔레트·쉐이딩·비례 확인 → 기준 컷 1장 저장
   2. 이후 모든 프롬프트 생성 시 **Reference Image** 슬롯에 기준 컷 업로드 (스타일 참조)
   3. 캐릭터류(`intro_npc_guide`, `robot_npc`)는 T-pose 리깅 호환성이 가장 중요하므로 2~3장 뽑아 팔다리 대칭이 완벽한 컷 채택
   4. 인스턴싱용 소품(`lamp_post`, `certificate_frame`, `pedestal`)은 1장만 잘 뽑으면 충분

3. **Meshy Image-to-3D 업로드 전 체크**
   - 배경이 순수 흰색(#ffffff)인지 확인 — 그레이 그라데이션이 섞였다면 Photoshop/Pixelmator에서 흰색으로 플러드 필
   - 서브젝트가 프레임 중앙에 여백을 두고 배치되어 있는지
   - 바닥 그림자가 남아 있다면 Meshy가 그걸 메시로 오인할 수 있으니 제거

---

## 제작 체크리스트

| 순번 | 파일 | Zone | Meshy Status | 이미지 생성 | Meshy 변환 | GLB 배치 | 주석 교체 |
|---|---|---|---|---|---|---|---|
| 1 | `intro_npc_guide.glb` | 0 (선택) | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 2 | `ai_studio_building.glb` | 1 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 3 | `hologram_screen.glb` | 1 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 4 | `film_camera.glb` | 1 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 5 | `mic_studio.glb` | 1 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 6 | `robot_npc.glb` | 1 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 7 | `neon_sign_ai.glb` | 1 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 8 | `server_rack.glb` | 1 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 9 | `building_miridih.glb` | 2 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 10 | `building_aiv.glb` | 2 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 11 | `building_muhayu.glb` | 2 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 12 | `building_archidraw.glb` | 2 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 13 | `building_lab724.glb` | 2 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 14 | `building_fastcampus.glb` | 2 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 15 | `lamp_post.glb` | 2 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 16 | `sign_timeline_arrow.glb` | 2 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 17 | `tower_base.glb` | 3 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 18 | `stairs_spiral.glb` | 3 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 19 | `flag_top.glb` | 3 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 20 | `hall_temple.glb` | 4 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 21 | `trophy_gold.glb` | 4 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 22 | `trophy_silver.glb` | 4 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 23 | `trophy_bronze.glb` | 4 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 24 | `certificate_frame.glb` | 4 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 25 | `graduation_cap.glb` | 4 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 26 | `pedestal.glb` | 4 | 🟡 | ☐ | ☐ | ☐ | ☐ |

---

## 관련 문서 링크

- 원본(Midjourney / SD 버전): [`docs/meshy-image-prompts.md`](./meshy-image-prompts.md)
- 에셋 정본 카탈로그(좌표·사용처·Status): [`docs/meshy-assets.md`](./meshy-assets.md)
- 프로덕트 요구사항(§7 FR-5 에셋 관리 규약): [`docs/PRD.md`](./PRD.md)
- Phase A 실행 체크리스트: [`docs/IMPLEMENTATION_PLAN.md`](./IMPLEMENTATION_PLAN.md)

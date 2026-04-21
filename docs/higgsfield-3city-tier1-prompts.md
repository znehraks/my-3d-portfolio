# Higgsfield AI (Auto 모델) — 3도시 개편 Tier 1 신규 에셋 프롬프트

> 2026-04-21 결정된 **3도시 개편 (Tech / Content / Playground)** 에 필요한 신규 에셋 15종의 Higgsfield Auto 모델용 프롬프트. 기존 `higgsfield-image-prompts.md` (26종) + 이 문서 (15종) = **총 41종** 기획.
>
> ### 사용법
> - 🧩 **For Meshy Image-to-3D**: 1:1 정사각 이미지 생성 → Meshy 업로드 → GLB 추출 → `public/models/` 배치
> - 🖼 **Direct texture**: 1:1 정사각 이미지 생성 → Photoshop/Pixelmator에서 색상·밝기 살짝 보정 → `public/texture/` 에 webp로 저장 → `Floor.tsx`의 `TextureLoader` 로 로드
>
> ### Higgsfield UI 고정값
> - Model: **Auto**
> - Aspect Ratio: **1:1 (Square)**
> - Enhance Prompt: **OFF**
> - 첫 컷(Tech Ground Texture) 생성 후 Reference Image 슬롯에 올려서 이후 컷 톤 통일 권장
>
> ### 스타일 접미어 (모든 3D 에셋 공통)
> - cozy playground world aesthetic inspired by Poly Pizza and Quaternius
> - stylized low-poly, flat shading, soft pastel palette, chibi proportions
> - pure solid white seamless studio background (#ffffff), no cast shadow, not photorealistic

---

## Section 0 — 바닥 텍스처 (3종) · Direct texture

> **중요 포인트**: 3D 에셋과 달리 **톱뷰(top-down) 타일 패턴**. 타일이 끊임없이 반복되도록 **seamless tileable**, 그리고 preview에서 2×2 또는 4×4 반복이 보이도록 명시. 배경은 없음 — 텍스처 자체가 화면 전체.

### T-01. `public/texture/tech_ground.webp` (🖼 Tech City 보도/광장 바닥)

```
A seamlessly tileable top-down square texture of a modern urban pavement, showing a clean grid of large rectangular concrete slabs with thin darker grout lines between them, a very subtle soft gray-blue base color with faint pastel tint, gentle flat shading with no strong highlights, a few tiny hand-painted imperfections scattered evenly for charm but never breaking the seamless repeat. The image previews a 4-by-4 repeat of the same tile so the pattern continues perfectly when tiled. No single focal point, no objects on top, no shadows, no text, no watermark. Style: soft pastel palette consistent with a cozy low-poly playground world, flat-shaded hand-painted feel, not photorealistic, no three-dimensional perspective, purely orthographic top-down view, colors muted and calm so buildings placed on this floor read clearly.
```

### T-02. `public/texture/content_ground.webp` (🖼 Content City 무대 바닥)

```
A seamlessly tileable top-down square texture of a theater-stage wooden plank floor, showing long horizontal planks of warm honey-brown wood with subtle darker grain lines running along each plank, soft pastel warmth, a faint repeating pattern of tiny brass nail heads at consistent intervals, gentle flat shading with no harsh highlights, slight hand-painted imperfections. The image previews a 4-by-4 repeat of the same tile so the pattern continues perfectly when tiled. No single focal point, no objects on top, no shadows, no text, no watermark. Style: soft pastel palette consistent with a cozy low-poly playground world, flat-shaded hand-painted feel, not photorealistic, purely orthographic top-down view, evokes a warm creative stage without being loud.
```

### T-03. `public/texture/plaza_ground.webp` (🖼 중앙 광장 대리석 타일)

```
A seamlessly tileable top-down square texture of a radial marble plaza floor, showing soft warm cream-white marble tiles arranged in a subtle radiating pattern from an implied center, very faint cool gray veining, narrow pastel gold inlay lines tracing gentle arcs between groups of tiles, an overall calm pale palette, gentle flat shading with no strong highlights, small hand-painted imperfections kept even across the tile. The image previews a 4-by-4 repeat of the same tile so the pattern continues perfectly when tiled. No central medallion, no single focal point, no objects on top, no shadows, no text, no watermark. Style: soft pastel palette consistent with a cozy low-poly playground world, flat-shaded hand-painted feel, not photorealistic, purely orthographic top-down view, evokes a civic plaza that feels both classical and friendly.
```

---

## Section 1 — 도시 입구 아치 (3종) · 🧩 For Meshy Image-to-3D

> 각 도시의 테마를 **한눈에** 구분시켜주는 제1차 랜드마크. 중앙 광장에서 각 도시를 바라보면 이 아치가 가장 먼저 보임.

### G-01. `public/models/gate_tech.glb` (🧩 Tech City 게이트)

```
An adorable entrance arch for a small "Tech City" district, chunky chibi dollhouse proportions, single isolated structure. Two matte cream-white concrete pillars support a flat rectangular overhead beam, the beam wrapped in a thin strip of pastel cyan LED light running across it, a tiny circuit-board motif embossed at each pillar base, and a small hanging metal plaque in the center of the beam reading exactly "TECH" in simple bold block letters — no other text. A pair of tiny gear cogs decorate the upper corners of the arch, and the overall form stays friendly rather than industrial. The arch stands on a thin square base plate with softly rounded edges. Stylized low-poly 3D render, flat shading, soft pastel palette with cool cyan accents, cozy playground world aesthetic inspired by Poly Pizza and Quaternius. Isometric three-quarter view, centered single subject, pure solid white seamless studio background (#ffffff), even soft studio lighting, no cast shadow, no people, no other buildings, no environment, no watermark, no gradient, not photorealistic.
```

### G-02. `public/models/gate_content.glb` (🧩 Content City 게이트)

```
An adorable entrance arch for a small "Content City" district, chunky chibi dollhouse proportions, single isolated structure. Two softly rounded pastel-magenta pillars support a curved overhead marquee shaped like a classic theater sign, the curved marquee edge lined with a single row of tiny warm-yellow round bulbs that glow gently, a small drawn-back red curtain valance hanging from the underside of the marquee, and a center plaque reading exactly "CONTENT" in a friendly cursive font — no other text. A pair of tiny film-reel medallions decorate the upper corners of the marquee, and the pillars have thin pastel-gold trim near the base. Thin square base plate with softly rounded edges. Stylized low-poly 3D render, flat shading, soft pastel palette with magenta and warm gold accents, cozy playground world aesthetic inspired by Poly Pizza and Quaternius. Isometric three-quarter view, centered single subject, pure solid white seamless studio background (#ffffff), even soft studio lighting, no cast shadow, no people, no audience, no other buildings, no environment, no watermark, no gradient, not photorealistic.
```

### G-03. `public/models/gate_playground.glb` (🧩 Playground 게이트)

```
An adorable entrance arch for a small "Playground" district, chunky chibi dollhouse proportions, single isolated structure. Two chubby honey-brown wooden posts support a gently curved wooden beam across the top, the beam carved to suggest a smiling rainbow shape with four pastel color bands subtly painted — pastel mint, pastel sky-blue, soft coral, warm cream. A small hanging wooden signboard in the center reads exactly "PLAYGROUND" in a hand-carved friendly serif style — no other text. Tiny carved animal motifs like a little bird on the left post and a tiny flower on the right post add charm. The posts have a slight taper at the base, standing on a thin square base plate with softly rounded edges and a small patch of pastel-green moss. Stylized low-poly 3D render, flat shading, soft pastel palette with warm wood and rainbow accents, cozy playground world aesthetic inspired by Poly Pizza and Quaternius. Isometric three-quarter view, centered single subject, pure solid white seamless studio background (#ffffff), even soft studio lighting, no cast shadow, no people, no other buildings, no environment, no watermark, no gradient, not photorealistic.
```

---

## Section 2 — 중앙 광장 (2종) · 🧩 For Meshy Image-to-3D

### P-01. `public/models/central_fountain.glb` (🧩 중앙 분수)

```
A charming circular central plaza fountain as a single isolated prop, chunky chibi dollhouse proportions. A low pale marble-white basin ring with softly rounded edges holds a pool of pastel aqua water with a very gentle flat surface, three symmetrical small water jets gently arcing upward from a central pedestal that resembles a miniature classical column with pastel-gold trim. The central pedestal is topped with a tiny pastel-mint finial shaped like a stylized maker heart. Thin pastel-gold inlay ring around the basin exterior, a short step rim so a chibi character could sit on the edge, two tiny coins implied resting on the bottom of the pool for charm. Single isolated fountain with no surrounding plaza tiles, no surrounding benches, no environment. Stylized low-poly 3D render, flat shading, soft pastel palette with marble white, pastel aqua, and gold accents, cozy playground world aesthetic inspired by Poly Pizza and Quaternius. Isometric three-quarter view, centered single subject, pure solid white seamless studio background (#ffffff), even soft studio lighting, no cast shadow, no people, no other structures, no watermark, no gradient, not photorealistic.
```

### P-02. `public/models/direction_signpost.glb` (🧩 3방향 방향 표지판)

```
A cute three-way wooden signpost for a central plaza, chunky chibi proportions, single isolated prop. A thick rounded octagonal honey-brown wooden post stands on a small square stone base with pastel-green moss tufts at the bottom. Three arrow-shaped wooden planks are mounted at different heights on the post, each pointing in a different horizontal direction: the topmost plank points upper-right and carries hand-carved letters reading exactly "TECH", the middle plank points upper-left and reads "CONTENT", the lowest plank points lower-right and reads "PLAY". Each plank is a different soft accent color edge — pastel cyan for TECH, pastel magenta for CONTENT, pastel coral for PLAY — but all wood stays warm honey-brown. Two small iron nails on each plank, a rounded wooden finial ball on top of the post, a tiny cartoon bird perched at the top. Stylized low-poly 3D render, flat shading, soft pastel palette, cozy playground world aesthetic inspired by Poly Pizza and Quaternius. Isometric three-quarter view, centered single subject, pure solid white seamless studio background (#ffffff), even soft studio lighting, no cast shadow, no other signs, no environment, no watermark, no gradient, no misspellings, not photorealistic.
```

---

## Section 3 — Content City 본체 (3종) · 🧩 For Meshy Image-to-3D

> Content City의 첫 입주 콘텐츠 2건(88ight / meme-push) + 미래 확장용 빈 슬롯 1개.

### C-01. `public/models/stage_88ight.glb` (🧩 88ight 버추얼 아이돌 무대)

```
A small circular concert stage designed as a single isolated cute prop for a "virtual idol" showcase, chunky chibi dollhouse proportions. A raised pastel-magenta circular platform with glossy soft highlights sits on a thin rounded base, flanked by two tall slim pastel-gold speaker columns with visible speaker cone details, a row of tiny stage footlights along the front edge glowing warm amber, and a curved back banner in soft pastel lavender with a hand-drawn "88" symbol stitched at the center — no other text. Two very faint dust-like light particles float above the stage for atmosphere. Behind the stage, a modest arched backdrop rises with gentle scalloped edges, in a softer cream tone. A single stylized vintage microphone on a slim chrome stand stands center-stage. Single isolated stage prop with no audience, no floor around it, no cables beyond the implied speaker columns. Stylized low-poly 3D render, flat shading, soft pastel palette with magenta, lavender and gold accents, cozy playground world aesthetic inspired by Poly Pizza and Quaternius. Isometric three-quarter view, centered single subject, pure solid white seamless studio background (#ffffff), even soft studio lighting, no cast shadow, no people, no virtual idol character on stage, no other props, no watermark, no gradient, not photorealistic.
```

### C-02. `public/models/arcade_memepush.glb` (🧩 meme-push 아케이드 캐비닛)

```
A single standing arcade cabinet designed as an isolated cute prop representing a small indie web game, chunky chibi proportions. The cabinet has a classic slanted control panel with two chunky round joystick balls in pastel coral and pastel cyan, a row of four big arcade buttons in pastel yellow, green, pink and sky-blue, and a large upright screen area glowing very softly in a gentle cyan-to-magenta gradient with no image on it. Above the screen a tall rectangular marquee plate reads exactly "meme-push" in a playful bold sans-serif font — no other text. The cabinet body is matte charcoal gray with subtle pastel accent stripes down the sides, pastel neon trim glowing along the edges, a small coin slot detail near the bottom of the cabinet, and a round speaker grille on each side. Small rubber feet at the base. Stylized low-poly 3D render, flat shading, soft pastel palette with charcoal base and neon accent glow, cozy playground world aesthetic inspired by Poly Pizza and Quaternius. Isometric three-quarter view, centered single subject, pure solid white seamless studio background (#ffffff), even soft studio lighting, no cast shadow, no person playing, no hands, no other cabinets, no environment, no watermark, no gradient, not photorealistic.
```

### C-03. `public/models/booth_coming_soon.glb` (🧩 공사 중 빈 부스)

```
A small adorable "under construction" empty content booth as a single isolated prop, chunky chibi proportions. A short square wooden platform with a sign on top, the platform surrounded by tiny metal scaffolding poles with crossbars in matte silver forming a cube frame around an empty center, a small miniature crane with a pastel-yellow arm holding a tiny cardboard box, a pair of tiny safety cones in pastel coral at the corners, and a tilted wooden signboard leaning against the scaffolding reading exactly "COMING SOON" in a friendly hand-painted serif style — no other text. A miniature bucket of pastel paint and a tiny rolled-up blueprint scroll rest on the platform for charm. The whole prop reads as joyful work-in-progress rather than industrial construction. Stylized low-poly 3D render, flat shading, soft pastel palette with warm wood, pastel yellow and coral accents, cozy playground world aesthetic inspired by Poly Pizza and Quaternius. Isometric three-quarter view, centered single subject, pure solid white seamless studio background (#ffffff), even soft studio lighting, no cast shadow, no workers, no people, no hazard tape, no environment, no watermark, no gradient, not photorealistic.
```

---

## Section 4 — AI 툴링 4부스 재구성 (4종) · 🧩 For Meshy Image-to-3D

> 기존 `ai_studio_building.glb` 한 채를 해체하고 4개의 작은 부스로 분리. 기존 `robot_npc.glb`, `server_rack.glb`, `hologram_screen.glb` 는 부스에 **소품으로 재활용** 가능 (해당 부스 프롬프트에 "a small robot NPC stands next to the booth" 식으로 연출해도 됨). 여기 프롬프트는 **부스 본체** 에만 집중.

### B-01. `public/models/booth_agent_team.glb` (🧩 Claude Code 에이전트 팀 부스)

```
A cute low circular booth platform designed to showcase a "multi-agent team" system, single isolated prop, chunky chibi dollhouse proportions. A short pastel-mint circular base plate with a soft glowing edge, a tall slim pastel-gold signpost at the back reading exactly "AGENT TEAM" in simple bold block letters — no other text. Arranged symmetrically on the platform stand seven tiny stylized marshmallow robot figurines as placeholders (three on each side plus one at the center), each with a rounded head and a small antenna, all facing outward in a circle, all in subtly different pastel accent colors (mint, sky, coral, lavender, cream, butter-yellow, dusty-rose). A glowing cyan thin ring on the platform floor connects the feet of the figurines, implying orchestration. The booth feels like a miniature council stage. Stylized low-poly 3D render, flat shading, soft pastel palette with mint, gold and glowing cyan accent, cozy playground world aesthetic inspired by Poly Pizza and Quaternius. Isometric three-quarter view, centered single subject, pure solid white seamless studio background (#ffffff), even soft studio lighting, no cast shadow, no weapons, no menacing features, no human character, no environment, no additional text, no watermark, no gradient, not photorealistic.
```

### B-02. `public/models/booth_cc_memory.glb` (🧩 Claude Code 컨텍스트 메모리 부스)

```
A small isolated cute booth showcasing a "context memory" system, chunky chibi dollhouse proportions. A short square cream-white platform with softly rounded corners, a tall slim signpost at the back reading exactly "MEMORY" in simple bold block letters — no other text. On the platform sits a large chunky chibi 3D icon of a stylized friendly pastel-pink brain with soft rounded lobes, gentle glow, and a tiny glowing thread line emerging from one side. To the right of the brain stand three small stacked memory-card cartridges in pastel mint with thin gold contact strips, arranged like a small staircase. A miniature open file-folder sits on the left with a tiny paper sheet peeking out. A thin pastel-gold trim line runs around the platform edge. Stylized low-poly 3D render, flat shading, soft pastel palette with pink, mint and gold accents, cozy playground world aesthetic inspired by Poly Pizza and Quaternius. Isometric three-quarter view, centered single subject, pure solid white seamless studio background (#ffffff), even soft studio lighting, no cast shadow, no human character, no environment, no additional text, no gore, no watermark, no gradient, not photorealistic.
```

### B-03. `public/models/booth_ai_newsbot.glb` (🧩 AI호외요 n8n 뉴스봇 부스)

```
A small isolated cute booth showcasing an "AI newsbot" system, chunky chibi dollhouse proportions. A short rectangular warm-honey wooden platform shaped like a miniature newsstand, a tall pastel-yellow signpost at the back reading exactly "NEWSBOT" in simple bold block letters — no other text. On the platform a small stack of rolled-up pastel-cream newspapers with a tiny visible masthead that reads "AI HOOFE" in a friendly serif — no other text, and a single newspaper unrolled partially showing only a blank grid of small gray rectangles suggesting columns. Above and behind the platform, three small floating node shapes (two round nodes and one hexagonal node) are connected by thin pastel-cyan lines forming a tiny horizontal workflow pipeline, suggesting an automation graph. A miniature pastel-orange Slack-style chat bubble floats near the rightmost node, with no text inside, just a simple hash symbol "#". Stylized low-poly 3D render, flat shading, soft pastel palette with warm wood, cream, yellow and cyan accents, cozy playground world aesthetic inspired by Poly Pizza and Quaternius. Isometric three-quarter view, centered single subject, pure solid white seamless studio background (#ffffff), even soft studio lighting, no cast shadow, no people, no readable sentences, no additional text, no watermark, no gradient, not photorealistic.
```

### B-04. `public/models/booth_rag_slackbot.glb` (🧩 디자인시스템 RAG Slack Bot 부스)

```
A small isolated cute booth showcasing a "RAG Slack bot" system, chunky chibi dollhouse proportions. A short square cool-gray platform with softly rounded corners, a tall slim signpost at the back reading exactly "RAG BOT" in simple bold block letters — no other text. On the platform a chunky miniature server rack in matte charcoal with a row of tiny blinking LEDs in green and cyan sits on the left. On the right, a transparent pastel-lavender translucent cube suggests a vector database space, with small pastel-coral dots floating inside at varied depths like embedded points. Between them a thin pastel-cyan curved line connects the server to the vector cube, implying retrieval. Above the platform a small pastel-magenta Slack-style chat bubble floats with only a simple hash symbol "#" inside — no other text. A thin pastel-gold trim line wraps the platform edge. Stylized low-poly 3D render, flat shading, soft pastel palette with charcoal, lavender, coral and cyan accents, cozy playground world aesthetic inspired by Poly Pizza and Quaternius. Isometric three-quarter view, centered single subject, pure solid white seamless studio background (#ffffff), even soft studio lighting, no cast shadow, no people, no additional text, no readable brand logos, no watermark, no gradient, not photorealistic.
```

---

## 제작 체크리스트 (Tier 1 — 15종)

| # | 파일 | 분류 | Direct/Meshy | 생성 | Meshy | 배치 | 코드 연동 |
|---|---|---|---|---|---|---|---|
| 1 | `tech_ground.webp` | 바닥 텍스처 | 🖼 Direct | ☐ | — | ☐ | ☐ |
| 2 | `content_ground.webp` | 바닥 텍스처 | 🖼 Direct | ☐ | — | ☐ | ☐ |
| 3 | `plaza_ground.webp` | 바닥 텍스처 | 🖼 Direct | ☐ | — | ☐ | ☐ |
| 4 | `gate_tech.glb` | 도시 아치 | 🧩 Meshy | ☐ | ☐ | ☐ | ☐ |
| 5 | `gate_content.glb` | 도시 아치 | 🧩 Meshy | ☐ | ☐ | ☐ | ☐ |
| 6 | `gate_playground.glb` | 도시 아치 | 🧩 Meshy | ☐ | ☐ | ☐ | ☐ |
| 7 | `central_fountain.glb` | 광장 | 🧩 Meshy | ☐ | ☐ | ☐ | ☐ |
| 8 | `direction_signpost.glb` | 광장 | 🧩 Meshy | ☐ | ☐ | ☐ | ☐ |
| 9 | `stage_88ight.glb` | Content City | 🧩 Meshy | ☐ | ☐ | ☐ | ☐ |
| 10 | `arcade_memepush.glb` | Content City | 🧩 Meshy | ☐ | ☐ | ☐ | ☐ |
| 11 | `booth_coming_soon.glb` | Content City | 🧩 Meshy | ☐ | ☐ | ☐ | ☐ |
| 12 | `booth_agent_team.glb` | AI 툴링 부스 | 🧩 Meshy | ☐ | ☐ | ☐ | ☐ |
| 13 | `booth_cc_memory.glb` | AI 툴링 부스 | 🧩 Meshy | ☐ | ☐ | ☐ | ☐ |
| 14 | `booth_ai_newsbot.glb` | AI 툴링 부스 | 🧩 Meshy | ☐ | ☐ | ☐ | ☐ |
| 15 | `booth_rag_slackbot.glb` | AI 툴링 부스 | 🧩 Meshy | ☐ | ☐ | ☐ | ☐ |

## 권장 생성 순서 (톤 일관성 확보용)

1. **기준 컷 먼저**: `tech_ground.webp` 를 제일 먼저 생성 — 파스텔 톤·색감 기준 잡기
2. **아치 3종 연속 생성** — Reference Image 슬롯에 기준 컷 올려놓고 차례로 뽑아 세 도시 입구 톤 통일
3. **광장 2종** (분수 + 방향 표지판) — 광장 정체성 확정
4. **컨텐츠 도시 3종** (88ight · meme-push · 공사중 부스) — 컨텐츠 도시 톤 확정
5. **AI 툴링 4부스** 마지막 — 가장 디테일 많은 그룹, 기존 26종의 AI Studio 관련 에셋 재활용 여지 고려하면서 생성

## 관련 문서

- 기존 26종 프롬프트 (Higgsfield Auto): [`./higgsfield-image-prompts.md`](./higgsfield-image-prompts.md)
- 원본 Midjourney/SD 26종 프롬프트: [`./meshy-image-prompts.md`](./meshy-image-prompts.md)
- 에셋 카탈로그(좌표·사용처·Status): [`./meshy-assets.md`](./meshy-assets.md)
- 3도시 개편 설계 문서: `./plans/2026-04-21-3city-redesign-design.md` (작성 예정)

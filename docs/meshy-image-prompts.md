# Meshy Image-to-3D 이미지 생성 프롬프트 (복붙 전용)

> 본 문서는 `docs/meshy-assets.md` 의 각 에셋을 **Midjourney / Stable Diffusion / DALL·E**로 생성할 때 **한 블록만 복사하면 바로 쓸 수 있도록** 각 프롬프트에 공통 스타일·부정어·파라미터를 모두 인라인한 버전이다.
>
> 워크플로우: 아래 블록 그대로 붙여넣기 → 이미지 생성 → 컷 선택 → Meshy Image-to-3D 업로드 → GLB 추출 → `public/models/` 배치 → 코드 주석 교체(`docs/meshy-assets.md` Status 🟡→🟢).
>
> 각 에셋마다 세 블록 제공:
> - **🎨 Midjourney 블록**: 파라미터 포함 한 줄 복붙
> - **🖼 Stable Diffusion (Positive)**: positive 프롬프트
> - **🚫 Stable Diffusion (Negative)**: 그대로 붙일 negative 프롬프트

---

## Zone 2 — 경력 거리

### 2-A. `building_miridih.glb` (미리디, 디자인시스템 테마 건물)

**🎨 Midjourney**
```
A cute modular office building made entirely of stacked Figma-like pastel design-system cards, each floor is a different colored card with a rounded corner radius and subtle drop shadow feeling, base floor in soft pastel blue, second floor in pastel pink, third floor in warm pastel yellow, top floor in mint green, each card has a tiny circular component dot and a thin label line on the front like a design token, transparent accent strips between floors suggesting auto-layout spacing, a small rooftop sign shaped like a hex color token, cute rounded windows hinted as small white squares on each card, playful design system aesthetic, chunky chibi proportions, clean dollhouse-scale building, no surroundings, stylized low-poly 3D render, flat shaded, soft pastel color palette, playful chibi proportions, cozy playground world aesthetic inspired by Poly Pizza and Quaternius assets, clean geometry, isometric 3/4 view, centered single subject, pure white seamless background #ffffff, even soft studio lighting, no cast shadow, no people, no text --ar 1:1 --v 6 --style raw --s 150 --chaos 5 --no text, shadow, gradient, clutter, photorealistic
```

**🖼 Stable Diffusion (Positive)**
```
A cute modular office building made of stacked Figma-like pastel design-system cards, each floor a different colored rounded card, base pastel blue, second pastel pink, third pastel yellow, top mint green, each card with a small circular component dot and thin label line, transparent accent strips between floors, small rooftop sign shaped like a hex color token, small white square windows, playful design system aesthetic, chunky chibi dollhouse proportions, no surroundings, stylized low-poly 3D render, flat shaded, soft pastel color palette, isometric 3/4 view, centered single subject, pure white seamless background, even soft studio lighting
```

**🚫 Stable Diffusion (Negative)**
```
photorealistic, realistic, hyperrealistic, text overlay, readable words, brand logos, watermark, signature, low quality, blurry, jpeg artifacts, cluttered scene, multiple buildings, surrounding environment, ground shadow, cast shadow, gradient background, busy background, people, vehicles
```

---

### 2-B. `building_aiv.glb` (AiV, 산업/공장 영상처리)

**🎨 Midjourney**
```
A tiny industrial factory building with playful chibi proportions, corrugated metal roof in pastel steel blue with visible repeating ridges, tall cylindrical chimney on the left side with a faint puff of cloud-white smoke, matte cream-gray concrete walls, a small conveyor belt feature extending from the front right base with a couple of rounded boxes on it, a big friendly signage plate mounted on the front wall reading "AiV" in simple bold letters, small rectangular windows with warm yellow glow, a rolling metal shutter door partially open, a single pastel red barrel beside the entrance, chunky cartoon dollhouse silhouette, industrial yet friendly, stylized low-poly 3D render, flat shaded, soft pastel color palette, playful chibi proportions, cozy playground world aesthetic, clean geometry, isometric 3/4 view, centered single subject, pure white seamless background #ffffff, even soft studio lighting, no cast shadow --ar 1:1 --v 6 --style raw --s 150 --chaos 5 --no shadow, gradient, clutter, photorealistic
```

**🖼 Stable Diffusion (Positive)**
```
A tiny industrial factory building, chibi proportions, corrugated metal roof in pastel steel blue, tall cylindrical chimney with faint cloud-white smoke, matte cream-gray concrete walls, small conveyor belt from front right base with rounded boxes, signage plate on front reading "AiV" in simple bold letters, small warm yellow rectangular windows, rolling metal shutter partially open, single pastel red barrel at entrance, industrial yet friendly dollhouse silhouette, stylized low-poly 3D render, flat shaded, soft pastel color palette, isometric 3/4 view, centered single subject, pure white seamless background, even soft studio lighting
```

**🚫 Stable Diffusion (Negative)**
```
photorealistic, realistic, hyperrealistic, extra text, readable sentences, additional logos, watermark, signature, low quality, blurry, jpeg artifacts, gritty, grunge, rust, cluttered scene, multiple buildings, surrounding environment, ground shadow, cast shadow, gradient background, busy background, people, vehicles
```

---

### 2-C. `building_muhayu.glb` (무하유, 채용·HR)

**🎨 Midjourney**
```
A small modern office building with a clean glass facade, three floors tall, large full-height windows on each floor with soft pastel blue reflective glass, cream white concrete frame, a flat rooftop with a playful oversized paperclip motif sculpted as a decorative metal ornament, small rooftop garden with one low mint-green bush, main entrance as a rounded archway with subtle warm lighting inside, thin metallic trim around the windows, a small company sign plate near the entrance in sans-serif style with no readable text, crisp architectural lines yet chibi chunky proportions, playful modern office dollhouse, stylized low-poly 3D render, flat shaded, soft pastel color palette, playful chibi proportions, cozy playground world aesthetic, clean geometry, isometric 3/4 view, centered single subject, pure white seamless background #ffffff, even soft studio lighting, no cast shadow --ar 1:1 --v 6 --style raw --s 150 --chaos 5 --no text, shadow, gradient, clutter, photorealistic
```

**🖼 Stable Diffusion (Positive)**
```
A small modern office building, three floors, clean glass facade with soft pastel blue reflective glass on full-height windows, cream white concrete frame, flat rooftop with oversized decorative paperclip metal ornament, small rooftop garden with single low mint-green bush, rounded archway main entrance with warm interior glow, thin metallic window trim, blank small sign plate near entrance, crisp architectural lines with chibi chunky proportions, modern playful office dollhouse, stylized low-poly 3D render, flat shaded, soft pastel color palette, isometric 3/4 view, centered single subject, pure white seamless background, even soft studio lighting
```

**🚫 Stable Diffusion (Negative)**
```
photorealistic, realistic, hyperrealistic, readable text, words, brand logos, watermark, signature, low quality, blurry, jpeg artifacts, cluttered scene, multiple buildings, surrounding environment, ground shadow, cast shadow, gradient background, busy background, people, cars
```

---

### 2-D. `building_archidraw.glb` (아키드로우, 3D 홈퍼니싱)

**🎨 Midjourney**
```
A cozy cutaway model house showing both exterior and interior, the right half of the front wall is removed revealing the interior: a small pastel mustard sofa, a round wooden coffee table, a tall floor lamp with cream shade, a framed picture on the interior wall, warm beige and brown color palette, pitched roof with pastel clay tiles, small chimney, round porthole window on the intact wall, a tiny welcome mat at the doorstep, visible wooden floorboards on the interior floor, exterior wall in warm cream stucco, cross-section feel but clean and cute, chibi dollhouse scale, no people, stylized low-poly 3D render, flat shaded, soft pastel color palette, playful chibi proportions, cozy playground world aesthetic, clean geometry, isometric 3/4 view showing the cutaway side, centered single subject, pure white seamless background #ffffff, even soft studio lighting, no cast shadow --ar 1:1 --v 6 --style raw --s 150 --chaos 5 --no shadow, gradient, clutter, photorealistic
```

**🖼 Stable Diffusion (Positive)**
```
A cozy cutaway model house, right half of front wall removed showing interior: small pastel mustard sofa, round wooden coffee table, tall floor lamp with cream shade, framed picture on interior wall, warm beige brown palette, pitched pastel clay tile roof, small chimney, round porthole window on intact wall, tiny welcome mat at doorstep, visible wooden floorboards, warm cream stucco exterior, cross-section feel, chibi dollhouse scale, stylized low-poly 3D render, flat shaded, soft pastel color palette, isometric 3/4 view showing cutaway, centered single subject, pure white seamless background, even soft studio lighting
```

**🚫 Stable Diffusion (Negative)**
```
photorealistic, realistic, hyperrealistic, text, readable signs, watermark, signature, low quality, blurry, jpeg artifacts, cluttered scene, multiple houses, surrounding environment, ground shadow, cast shadow, gradient background, busy background, people, pets
```

---

### 2-E. `building_lab724.glb` (Lab724, 초기 창업 스튜디오)

**🎨 Midjourney**
```
A small startup garage workshop, square concrete box with a large metal roller shutter door half open showing the cozy interior, inside there is a small chibi laptop on a simple wooden desk with a mug of coffee, a stack of cardboard shipping boxes in the corner, a coat hanger with a tiny hoodie, a folding chair, single warm yellow ceiling bulb casting a golden interior glow, exterior walls in warm terracotta brick, a tiny sticker on the wall shaped like a lightbulb icon, a worn-in welcome mat outside, founder-era cozy vibe, chibi chunky proportions dollhouse scale, stylized low-poly 3D render, flat shaded, soft pastel color palette, playful chibi proportions, cozy playground world aesthetic, clean geometry, isometric 3/4 view, centered single subject, pure white seamless background #ffffff, even soft studio lighting, no cast shadow --ar 1:1 --v 6 --style raw --s 150 --chaos 5 --no text, shadow, gradient, clutter, photorealistic
```

**🖼 Stable Diffusion (Positive)**
```
A small startup garage workshop, square concrete box with large half-open metal roller shutter revealing cozy interior: chibi laptop on simple wooden desk with coffee mug, stack of cardboard shipping boxes in corner, coat hanger with tiny hoodie, folding chair, single warm yellow ceiling bulb with golden glow, warm terracotta brick exterior, tiny lightbulb-icon sticker on wall, worn-in welcome mat outside, founder-era cozy vibe, chibi dollhouse proportions, stylized low-poly 3D render, flat shaded, soft pastel color palette, isometric 3/4 view, centered single subject, pure white seamless background, even soft studio lighting
```

**🚫 Stable Diffusion (Negative)**
```
photorealistic, realistic, hyperrealistic, graffiti text, readable signs, extra text, watermark, signature, low quality, blurry, jpeg artifacts, cluttered scene, surrounding street, ground shadow, cast shadow, gradient background, busy background, people, vehicles
```

---

### 2-F. `building_fastcampus.glb` (패스트캠퍼스, 강의)

**🎨 Midjourney**
```
A small lecture stage building with a cozy performative vibe, boxy structure with one side open like a stage showing the interior, inside there is a projection screen on the back wall glowing faint lavender, a wooden lecturer podium with a tiny microphone, a cinema tripod camera set up in front of the stage pointing toward the screen, a couple of soft purple stage lights hanging from the ceiling edge, exterior walls in deep pastel purple with thin white trim, a friendly marquee sign above the entrance shaped like an upward arrow with no readable text, rounded rooftop with a single spotlight, chibi chunky proportions dollhouse scale, stylized low-poly 3D render, flat shaded, soft pastel color palette with purple accent, playful chibi proportions, cozy playground world aesthetic, clean geometry, isometric 3/4 view, centered single subject, pure white seamless background #ffffff, even soft studio lighting, no cast shadow --ar 1:1 --v 6 --style raw --s 150 --chaos 5 --no text, shadow, gradient, clutter, photorealistic
```

**🖼 Stable Diffusion (Positive)**
```
A small lecture stage building, boxy structure with one side open like a stage revealing interior: projection screen on back wall glowing faint lavender, wooden lecturer podium with tiny microphone, cinema tripod camera pointing at screen, couple of soft purple stage lights hanging from ceiling edge, deep pastel purple exterior with thin white trim, blank upward-arrow marquee sign above entrance, rounded rooftop with single spotlight, chibi dollhouse proportions, stylized low-poly 3D render, flat shaded, soft pastel color palette with purple accent, isometric 3/4 view, centered single subject, pure white seamless background, even soft studio lighting
```

**🚫 Stable Diffusion (Negative)**
```
photorealistic, realistic, hyperrealistic, readable text, brand logos, extra words, watermark, signature, low quality, blurry, jpeg artifacts, cluttered scene, multiple buildings, surrounding environment, ground shadow, cast shadow, gradient background, busy background, people, audience
```

---

### 2-G. `lamp_post.glb` (가로등, 인스턴싱 다수)

**🎨 Midjourney**
```
A cute cartoon street lamp post, tall slender vertical pole in matte black cast iron with a subtle fluted texture near the base, ornate curved top bracket curling outward like a fishhook, a single bulbous round glass lamp hanging from the curve with a soft warm amber glow inside, faint bloom around the bulb, small decorative finial ball on top of the pole, thick circular base plate with four small bolt nubs, a tiny curl of ivy or a single mint leaf growing at the base, chunky chibi proportions, cozy village street vibe, single isolated prop, stylized low-poly 3D render, flat shaded, soft pastel color palette, playful chibi proportions, cozy playground world aesthetic, clean geometry, isometric 3/4 view, centered single subject, pure white seamless background #ffffff, even soft studio lighting, no cast shadow --ar 1:1 --v 6 --style raw --s 150 --chaos 5 --no shadow, gradient, clutter, photorealistic
```

**🖼 Stable Diffusion (Positive)**
```
A cute cartoon street lamp post, tall slender matte black cast iron pole with subtle fluted base texture, ornate fishhook curved top bracket, single bulbous round glass lamp with soft warm amber interior glow, faint bloom, small decorative finial ball on top, thick circular base plate with four small bolt nubs, tiny ivy curl or single mint leaf at base, cozy village street vibe, chibi proportions, single isolated prop, stylized low-poly 3D render, flat shaded, soft pastel color palette, isometric 3/4 view, centered single subject, pure white seamless background, even soft studio lighting
```

**🚫 Stable Diffusion (Negative)**
```
photorealistic, realistic, hyperrealistic, text, watermark, signature, low quality, blurry, jpeg artifacts, rust, grunge, cluttered scene, multiple lamps, surrounding street, ground shadow, cast shadow, gradient background, busy background, people
```

---

### 2-H. `sign_timeline_arrow.glb` (경력 거리 시작점 이정표)

**🎨 Midjourney**
```
A rustic wooden signpost with a curved wooden arrow plank mounted on a thick round post, the arrow points to the upper right, hand-carved letters engraved into the arrow surface reading "2020 → 2026" in a friendly serif style, warm honey-brown wood grain with visible subtle planks, the top of the post has a tiny cartoon bird sitting on it, a small pastel green moss patch at the base, two iron nails visible on the arrow plank, simple rounded octagonal post shape, chibi chunky proportions, cute landmark prop, single isolated object, stylized low-poly 3D render, flat shaded, soft pastel color palette, playful chibi proportions, cozy playground world aesthetic, clean geometry, isometric 3/4 view, centered single subject, pure white seamless background #ffffff, even soft studio lighting, no cast shadow --ar 1:1 --v 6 --style raw --s 150 --chaos 5 --no shadow, gradient, clutter, photorealistic
```

**🖼 Stable Diffusion (Positive)**
```
A rustic wooden signpost, curved wooden arrow plank mounted on thick round post pointing upper right, hand-carved engraved letters "2020 → 2026" in friendly serif style, warm honey-brown wood grain with visible plank texture, tiny cartoon bird sitting on top of post, small pastel green moss patch at base, two visible iron nails on arrow plank, rounded octagonal post shape, chibi chunky proportions, single isolated object, stylized low-poly 3D render, flat shaded, soft pastel color palette, isometric 3/4 view, centered single subject, pure white seamless background, even soft studio lighting
```

**🚫 Stable Diffusion (Negative)**
```
photorealistic, realistic, hyperrealistic, additional text, misspelled years, extra words, watermark, signature, low quality, blurry, jpeg artifacts, rot, grunge, cluttered scene, multiple signs, surrounding landscape, ground shadow, cast shadow, gradient background, busy background, people
```

---

## Zone 3 — 기술 타워

### 3-A. `tower_base.glb` (4층 관측탑 본체)

**🎨 Midjourney**
```
A four-story square observation tower, each floor is an open platform with wooden railings and open view with no walls, visible load-bearing wooden corner posts painted in pastel mint and cream alternating by floor, wooden plank floor for each level, small crate props hinted on some floors but mostly empty to leave room for skill boxes, a pastel coral flag on a slender pole at the very top waving gently with a playful cloth ripple, a simple wooden ladder on one side connecting floors, exterior wrapped with a subtle rope banister detail, chunky chibi dollhouse proportions, the tower is roughly twice as tall as it is wide, base plate with soft grass tufts, single isolated structure, stylized low-poly 3D render, flat shaded, soft pastel color palette, playful chibi proportions, cozy playground world aesthetic, clean geometry, isometric 3/4 view, centered single subject, pure white seamless background #ffffff, even soft studio lighting, no cast shadow --ar 1:1 --v 6 --style raw --s 150 --chaos 5 --no text, shadow, gradient, clutter, photorealistic
```

**🖼 Stable Diffusion (Positive)**
```
A four-story square observation tower, each floor open platform with wooden railings and no walls, wooden corner posts alternating pastel mint and cream by floor, wooden plank floors, mostly empty to leave space for props, pastel coral flag on slender pole at top with gentle cloth ripple, simple wooden ladder on one side connecting floors, subtle rope banister detail, chunky chibi dollhouse proportions, tower about twice as tall as wide, base plate with soft grass tufts, single isolated structure, stylized low-poly 3D render, flat shaded, soft pastel color palette, isometric 3/4 view, centered single subject, pure white seamless background, even soft studio lighting
```

**🚫 Stable Diffusion (Negative)**
```
photorealistic, realistic, hyperrealistic, text, signs, watermark, signature, low quality, blurry, jpeg artifacts, cluttered scene, multiple towers, surrounding environment, ground shadow, cast shadow, gradient background, busy background, people
```

---

### 3-C. `flag_top.glb` (타워 옥상 깃발)

**🎨 Midjourney**
```
A small decorative flag on a slender wooden pole with a pastel coral pennant cloth waving in an implied gentle breeze with a soft wave ripple, the cloth has a hand-painted symbol of code brackets "{ }" in cream white at the center, simple two-hole mounting to the pole with tiny brass grommets, rounded wooden finial ball on top of the pole in warm honey brown, pole base implied as a small square mounting bracket, cute chibi proportions, single isolated prop, stylized low-poly 3D render, flat shaded, soft pastel color palette, playful chibi proportions, cozy playground world aesthetic, clean geometry, isometric 3/4 view, centered single subject, pure white seamless background #ffffff, even soft studio lighting, no cast shadow --ar 1:1 --v 6 --style raw --s 150 --chaos 5 --no shadow, gradient, clutter, photorealistic
```

**🖼 Stable Diffusion (Positive)**
```
A small decorative flag on a slender wooden pole, pastel coral pennant cloth waving gently with soft ripple, hand-painted cream white code brackets "{ }" symbol centered on the cloth, two-hole mounting with tiny brass grommets, rounded warm honey brown wooden finial ball on top, small square mounting bracket at base, cute chibi proportions, single isolated prop, stylized low-poly 3D render, flat shaded, soft pastel color palette, isometric 3/4 view, centered single subject, pure white seamless background, even soft studio lighting
```

**🚫 Stable Diffusion (Negative)**
```
photorealistic, realistic, hyperrealistic, extra text, additional words, watermark, signature, low quality, blurry, jpeg artifacts, cluttered scene, multiple flags, surrounding environment, ground shadow, cast shadow, gradient background, busy background, people
```

---

> **Skill Tower의 스킬 박스 24종** 은 기존 `Box.tsx` + webp 텍스처 재활용이므로 3D 신규 에셋 불필요. 텍스처 보강 리스트는 `docs/meshy-assets.md §텍스처 보강 대상` 참조.

---

## Zone 4 — 명예의 전당

### 4-A. `hall_temple.glb` (존 본체, 플레이어 진입 가능한 신전)

**🎨 Midjourney**
```
A small open Greek-style temple pavilion with exactly six fluted columns arranged in a rectangular footprint three front and three back, no walls between columns so the interior is fully visible and walkable, marble-white columns with soft vertical fluting and rounded capitals, a simple triangular pediment above the columns with decorative gold laurel wreath carved in the center, coffered ceiling visible from inside with repeating square panels in warm cream and gold, polished marble floor with a subtle circular medallion pattern, a pair of shallow stone steps leading up to the platform from one side, gold trim along the architrave and at the base of each column, chibi chunky proportions so the temple feels like a cute dollhouse shrine, no surrounding trees or ground, single isolated structure, stylized low-poly 3D render, flat shaded, soft pastel color palette with marble-white and gold accents, playful chibi proportions, cozy playground world aesthetic, clean geometry, isometric 3/4 view showing the interior through the open columns, centered single subject, pure white seamless background #ffffff, even soft studio lighting, no cast shadow --ar 1:1 --v 6 --style raw --s 150 --chaos 5 --no text, shadow, gradient, clutter, photorealistic
```

**🖼 Stable Diffusion (Positive)**
```
A small open Greek-style temple pavilion, six fluted columns in rectangular footprint three front three back, no walls between columns, marble-white columns with vertical fluting and rounded capitals, triangular pediment with decorative gold laurel wreath carved at center, coffered ceiling with repeating warm cream and gold square panels, polished marble floor with subtle circular medallion pattern, shallow stone steps on one side, gold trim along architrave and column bases, chibi dollhouse shrine proportions, no surrounding trees or ground, single isolated structure, stylized low-poly 3D render, flat shaded, soft pastel palette with marble-white and gold, isometric 3/4 view showing interior through columns, centered single subject, pure white seamless background, even soft studio lighting
```

**🚫 Stable Diffusion (Negative)**
```
photorealistic, realistic, hyperrealistic, text, readable engravings, modern elements, watermark, signature, low quality, blurry, jpeg artifacts, ruins, broken columns, cluttered scene, multiple temples, surrounding landscape, ground shadow, cast shadow, gradient background, busy background, people, statues of people
```

---

### 4-B. `trophy_gold.glb` (KOPIS 금상)

**🎨 Midjourney**
```
A classic golden trophy cup with a tall ornate design, wide rounded bowl with a subtle gold shine and mild fresnel highlight, two large elegant curved handles on the sides shaped like stylized wings, a slender stem between the bowl and the base with a decorative ring detail, base is a five-pointed star shape in deeper polished gold standing on a small cylindrical mount, engraved laurel wreath motif around the upper bowl rim, tiny emerald accent gem in the center of the star base, chunky chibi proportions not overly tall, cute and celebratory not pompous, single isolated prop, no text, no year engraved, stylized low-poly 3D render, flat shaded, soft pastel color palette with warm gold emphasis, playful chibi proportions, cozy playground world aesthetic, clean geometry, isometric 3/4 view, centered single subject, pure white seamless background #ffffff, even soft studio lighting, no cast shadow --ar 1:1 --v 6 --style raw --s 150 --chaos 5 --no text, shadow, gradient, clutter, photorealistic
```

**🖼 Stable Diffusion (Positive)**
```
A classic golden trophy cup, tall ornate design, wide rounded bowl with subtle gold shine and mild fresnel highlight, two large elegant curved handles shaped like stylized wings, slender stem with decorative ring detail, five-pointed star base in deeper polished gold on small cylindrical mount, engraved laurel wreath motif around upper bowl rim, tiny emerald accent gem at center of star base, chunky chibi proportions, cute celebratory silhouette, single isolated prop, stylized low-poly 3D render, flat shaded, soft pastel palette with warm gold emphasis, isometric 3/4 view, centered single subject, pure white seamless background, even soft studio lighting
```

**🚫 Stable Diffusion (Negative)**
```
photorealistic, realistic, hyperrealistic, engraved text, year number, name label, watermark, signature, low quality, blurry, jpeg artifacts, tarnish, scratches, cluttered scene, multiple trophies, background props, ground shadow, cast shadow, gradient background, busy background, people, hands
```

---

### 4-C. `trophy_silver.glb` (인천 은상)

**🎨 Midjourney**
```
A silver trophy cup with a simpler more modern design than its gold counterpart, medium-sized rounded bowl with a brushed satin silver finish and subtle cool highlight, two slim straight handles on the sides, short cylindrical stem, rectangular base in polished silver with rounded edges and a small blank engraving plate on the front face, a single diagonal accent groove on the bowl, chunky chibi proportions, clean minimal silhouette, single isolated prop, no text, stylized low-poly 3D render, flat shaded, soft pastel color palette with cool silver emphasis, playful chibi proportions, cozy playground world aesthetic, clean geometry, isometric 3/4 view, centered single subject, pure white seamless background #ffffff, even soft studio lighting, no cast shadow --ar 1:1 --v 6 --style raw --s 150 --chaos 5 --no text, shadow, gradient, clutter, photorealistic
```

**🖼 Stable Diffusion (Positive)**
```
A silver trophy cup, simpler modern design, medium rounded bowl with brushed satin silver finish and subtle cool highlight, two slim straight handles, short cylindrical stem, rectangular polished silver base with rounded edges and small blank engraving plate on front, single diagonal accent groove on bowl, chunky chibi proportions, clean minimal silhouette, single isolated prop, stylized low-poly 3D render, flat shaded, soft pastel palette with cool silver emphasis, isometric 3/4 view, centered single subject, pure white seamless background, even soft studio lighting
```

**🚫 Stable Diffusion (Negative)**
```
photorealistic, realistic, hyperrealistic, engraved text, readable name, watermark, signature, low quality, blurry, jpeg artifacts, tarnish, scratches, cluttered scene, multiple trophies, background props, ground shadow, cast shadow, gradient background, busy background, people, hands
```

---

### 4-D. `trophy_bronze.glb` (명지 동상)

**🎨 Midjourney**
```
A bronze medal trophy on a small standing display, circular bronze medallion with a warm copper-orange patina and a subtle engraved star at the center, a pastel navy blue ribbon with two long tails hanging down from the top of the medal, thin wooden stand shaped like an inverted U holding the medal upright, warm honey-brown wood base with a small engraved blank plate on the front, bronze patina subtle highlights, chunky chibi proportions, single isolated prop, no text, stylized low-poly 3D render, flat shaded, soft pastel color palette with warm bronze emphasis, playful chibi proportions, cozy playground world aesthetic, clean geometry, isometric 3/4 view, centered single subject, pure white seamless background #ffffff, even soft studio lighting, no cast shadow --ar 1:1 --v 6 --style raw --s 150 --chaos 5 --no text, shadow, gradient, clutter, photorealistic
```

**🖼 Stable Diffusion (Positive)**
```
A bronze medal trophy on a small standing display, circular bronze medallion with warm copper-orange patina and subtle engraved star at center, pastel navy blue ribbon with two long tails hanging from top of medal, thin inverted-U wooden stand holding medal upright, warm honey-brown wood base with small blank engraving plate on front, subtle bronze patina highlights, chunky chibi proportions, single isolated prop, stylized low-poly 3D render, flat shaded, soft pastel palette with warm bronze emphasis, isometric 3/4 view, centered single subject, pure white seamless background, even soft studio lighting
```

**🚫 Stable Diffusion (Negative)**
```
photorealistic, realistic, hyperrealistic, engraved text, readable name, watermark, signature, low quality, blurry, jpeg artifacts, heavy tarnish, rust, cluttered scene, multiple medals, background props, ground shadow, cast shadow, gradient background, busy background, people, hands
```

---

### 4-E. `certificate_frame.glb` (자격증 이젤, 5회 인스턴싱)

**🎨 Midjourney**
```
A wooden-framed certificate standing upright on a small tabletop wooden easel tripod, rectangular portrait-oriented frame in warm honey-brown carved wood with a tiny decorative relief at the top center, the inner paper is pastel parchment cream with a blank faint horizontal rule pattern and a round red wax seal with a ribbon loop at the bottom right corner, a subtle gold border line framing the parchment, a thin pastel teal ribbon draped across the top-right corner of the frame, easel legs in matching honey wood with small rubber feet, chunky chibi proportions, cute and celebratory, no readable text on the parchment, single isolated prop, stylized low-poly 3D render, flat shaded, soft pastel color palette, playful chibi proportions, cozy playground world aesthetic, clean geometry, isometric 3/4 view, centered single subject, pure white seamless background #ffffff, even soft studio lighting, no cast shadow --ar 1:1 --v 6 --style raw --s 150 --chaos 5 --no text, shadow, gradient, clutter, photorealistic
```

**🖼 Stable Diffusion (Positive)**
```
A wooden-framed certificate on small tabletop wooden easel tripod, rectangular portrait frame in warm honey-brown carved wood with tiny decorative relief at top center, pastel parchment cream paper with blank faint horizontal rule pattern, round red wax seal with ribbon loop at bottom right, subtle gold border line, thin pastel teal ribbon draped across top-right corner, honey wood easel legs with small rubber feet, chunky chibi proportions, single isolated prop, stylized low-poly 3D render, flat shaded, soft pastel color palette, isometric 3/4 view, centered single subject, pure white seamless background, even soft studio lighting
```

**🚫 Stable Diffusion (Negative)**
```
photorealistic, realistic, hyperrealistic, readable text on parchment, written sentences, watermark, signature, low quality, blurry, jpeg artifacts, torn paper, damage, cluttered scene, multiple certificates, background props, ground shadow, cast shadow, gradient background, busy background, people, hands
```

---

### 4-F. `graduation_cap.glb`

**🎨 Midjourney**
```
A classic graduation mortarboard cap, square flat top board in deep pastel navy blue with a subtle cloth fold at the corners, rounded cap base snug for a head, a golden tassel dangling from a button at the center of the board falling to the right side with a tiny gold tuft, inside lining hint in cream color, soft fabric drape on the tassel, chunky chibi proportions slightly oversized for cute appeal, single isolated prop floating as if on display, no head, no mannequin, stylized low-poly 3D render, flat shaded, soft pastel color palette with navy and gold emphasis, playful chibi proportions, cozy playground world aesthetic, clean geometry, isometric 3/4 view, centered single subject, pure white seamless background #ffffff, even soft studio lighting, no cast shadow --ar 1:1 --v 6 --style raw --s 150 --chaos 5 --no text, shadow, gradient, clutter, photorealistic
```

**🖼 Stable Diffusion (Positive)**
```
A classic graduation mortarboard cap, square flat top board in deep pastel navy blue with subtle cloth folds at corners, rounded cap base, golden tassel dangling from center button falling to right side with tiny gold tuft, cream lining hint, soft fabric drape on tassel, chunky chibi proportions slightly oversized, single isolated prop floating on display, no head or mannequin, stylized low-poly 3D render, flat shaded, soft pastel palette with navy and gold emphasis, isometric 3/4 view, centered single subject, pure white seamless background, even soft studio lighting
```

**🚫 Stable Diffusion (Negative)**
```
photorealistic, realistic, hyperrealistic, text, year, school name, watermark, signature, low quality, blurry, jpeg artifacts, cluttered scene, multiple caps, background props, ground shadow, cast shadow, gradient background, busy background, people, heads, mannequin
```

---

### 4-G. `pedestal.glb` (트로피 받침대, 3회 인스턴싱)

**🎨 Midjourney**
```
A short cylindrical stone pedestal for displaying a trophy, pale marble-white material with subtle soft veining in cool gray, rounded top edge with a slight chamfer, a narrower middle column and a wider base flange giving classical proportions, a small rectangular engraved nameplate on the front face in brushed gold with no readable text just a subtle line indicating where text would go, tiny decorative laurel leaf motif carved above the nameplate, soft rounded edges, chunky chibi proportions short and stable, single isolated prop, no trophy on top pedestal only, stylized low-poly 3D render, flat shaded, soft pastel color palette with marble-white and gold emphasis, playful chibi proportions, cozy playground world aesthetic, clean geometry, isometric 3/4 view, centered single subject, pure white seamless background #ffffff, even soft studio lighting, no cast shadow --ar 1:1 --v 6 --style raw --s 150 --chaos 5 --no text, shadow, gradient, clutter, photorealistic
```

**🖼 Stable Diffusion (Positive)**
```
A short cylindrical stone pedestal for displaying a trophy, pale marble-white material with subtle soft cool gray veining, rounded top edge with slight chamfer, narrower middle column and wider base flange classical proportions, small rectangular brushed gold engraved nameplate on front with blank line where text would go, tiny decorative laurel leaf motif carved above nameplate, soft rounded edges, chunky chibi proportions short and stable, pedestal only without trophy, single isolated prop, stylized low-poly 3D render, flat shaded, soft pastel palette with marble-white and gold emphasis, isometric 3/4 view, centered single subject, pure white seamless background, even soft studio lighting
```

**🚫 Stable Diffusion (Negative)**
```
photorealistic, realistic, hyperrealistic, readable engraved name, text, watermark, signature, low quality, blurry, jpeg artifacts, cracks, damage, cluttered scene, trophy on top, background props, ground shadow, cast shadow, gradient background, busy background, people
```

---

## 제작 체크리스트

| 순번 | 파일 | Zone | Meshy Status | 이미지 생성 | Meshy 변환 | GLB 배치 | 주석 교체 |
|---|---|---|---|---|---|---|---|
| 1 | `building_miridih.glb` | 2 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 2 | `building_aiv.glb` | 2 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 3 | `building_muhayu.glb` | 2 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 4 | `building_archidraw.glb` | 2 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 5 | `building_lab724.glb` | 2 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 6 | `building_fastcampus.glb` | 2 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 7 | `lamp_post.glb` | 2 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 8 | `sign_timeline_arrow.glb` | 2 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 9 | `tower_base.glb` | 3 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 10 | `flag_top.glb` | 3 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 11 | `hall_temple.glb` | 4 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 12 | `trophy_gold.glb` | 4 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 13 | `trophy_silver.glb` | 4 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 14 | `trophy_bronze.glb` | 4 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 15 | `certificate_frame.glb` | 4 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 16 | `graduation_cap.glb` | 4 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 17 | `pedestal.glb` | 4 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 18 🆕 | `hub_map_sign.glb` | 5 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 19 🆕 | `hub_bench.glb` | 5 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 20 🆕 | `career_street_arch.glb` | 6 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 21 🆕 | `booth_coming_soon.glb` | 7 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 22 🆕 | `outdoor_screen.glb` | 7 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 23 🆕 | `festival_tent.glb` | 7 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 24 🆕 | `picnic_bench.glb` | 7 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 25 🆕 | `carousel.glb` | 8 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 26 🆕 | `flower_patch.glb` | 8 | 🟡 | ☐ | ☐ | ☐ | ☐ |
| 27 🆕 | `sand_pit.glb` | 8 | 🟡 | ☐ | ☐ | ☐ | ☐ |

> 🆕 = 2026-04-22 세션에서 신규 추가 (Zone 5~8 환경 디테일). 기존 Zone 0 전체 + Zone 1 전체 + Zone 3-B `stairs_spiral` 은 AIStudio 컴포넌트 삭제 등으로 **고아 처리**(문서 하단 Archive 또는 완전 제거).

## 권장 생성 순서 (톤 일관성 확보용)

1. **기준 컷 1장 먼저 생성**: `building_miridih.glb` 프롬프트로 이미지 1장 생성 → 팔레트·쉐이딩·비례 확인 후 기준값(seed/style reference) 고정.
2. 동일 스타일 레퍼런스로 나머지 건물/구조물 생성하여 **존간 스타일 편차 최소화** (Higgsfield Auto 는 이전 결과의 "Use as style reference" 기능 활용).
3. Zone 5~8 환경 디테일은 건물들과 톤이 맞도록 기준 컷 이후에 생성.
4. 인스턴싱용 소품(`lamp_post`, `certificate_frame`, `pedestal`, `flower_patch`)은 1장만 잘 뽑으면 충분.

## 관련 문서 링크

- 에셋 정본 카탈로그(좌표·사용처·Status): [`docs/meshy-assets.md`](./meshy-assets.md)
- 프로덕트 요구사항(§7 FR-5 에셋 관리 규약): [`docs/PRD.md`](./PRD.md)
- Phase A 실행 체크리스트: [`docs/IMPLEMENTATION_PLAN.md`](./IMPLEMENTATION_PLAN.md)

---

# Higgsfield Auto 전용 프롬프트 (Zone 5~8) 🆕 2026-04-22 추가

> **이번 세션 신규 추가** — 120° 균등 배치 3섬 + 랜드 브리지 레이아웃 완성 후 허브/섬 환경 디테일 보강용 10종.
>
> Zone 2~4 는 Midjourney / SD 3블록 구조로 작성된 구버전이다. **Zone 5~8 은 Higgsfield AI (auto 모드)** 에서 바로 쓰기 위한 **단일 자연어 단락** 포맷이다.
>
> 워크플로우: 각 블록 통째로 복사 → Higgsfield Auto 프롬프트창 붙여넣기 → 생성 → 마음에 드는 컷 선택 → Meshy Image-to-3D 업로드 → GLB 추출 → `public/models/` 배치 → placeholder 컴포넌트 `🧩 replace with <name>.glb` 주석 교체.
>
> Higgsfield Auto 는 Midjourney 의 `--ar --v --style raw --s --chaos --no` 류 파라미터를 받지 않는다. 톤 일관성은 **이전 결과를 "Use as style reference" 로 지정** 해 확보한다.

---

## Zone 5 — 중앙 허브 장식

### 5-A. `hub_map_sign.glb` (월드 미니맵 입간판)

```
A cute tall wooden signboard planted on the ground, shaped like a large rectangular billboard with rounded corners, two thick round wooden posts in warm honey-toned wood with soft grain. The signboard face displays a painted miniature world map with three small pastel islands connected by sandy pathways radiating from a tiny central fountain symbol — a sky-blue island tinted for a technology area to the north, a pastel-pink island for a content area to the southwest, a buttery-yellow island for a playground area to the southeast. Tiny painted trees and flags as decoration, a small wooden arrow carved on top pointing forward, weathered rivets, and a small hanging lantern on one post. Chunky chibi proportions, no readable text — only decorative map shapes. Stylized low-poly 3D render, flat shaded, soft pastel color palette, playful chibi proportions, cozy playground world aesthetic inspired by Poly Pizza and Quaternius assets. Clean geometry, isometric 3/4 view, centered single subject on a pure white seamless background, even soft studio lighting, no cast shadow. Avoid photorealism, readable letters or numbers, watermarks, multiple signs, background props, ground shadow, gradient or busy background, and people.
```

---

### 5-B. `hub_bench.glb` (분수 주변 방사형 벤치)

```
A cute curved park bench with a concave seat shape designed to sit beside a round central fountain, two thick cast-iron-style legs in pastel mint green with decorative curl ornaments, warm beech-toned wooden slats on the seat and backrest with subtle grain, small rounded armrests on both ends, and a tiny flower-bud engraving on the center of the backrest. Chibi chunky proportions with exaggerated plump cushioning on the seat plank, friendly dollhouse aesthetic, single isolated prop, no graffiti or text. Stylized low-poly 3D render, flat shaded, soft pastel color palette, playful chibi proportions, cozy playground world aesthetic inspired by Poly Pizza and Quaternius assets. Clean geometry, isometric 3/4 view, centered single subject on a pure white seamless background, even soft studio lighting, no cast shadow. Avoid photorealism, graffiti, text, watermarks, multiple benches, background props, ground shadow, gradient or busy background, and people sitting.
```

---

## Zone 6 — Tech 섬 환경

### 6-A. `career_street_arch.glb` (경력 거리 진입 아치)

```
A charming archway gate marking the entrance of a small career street, two stout brick pillars in warm terracotta with cream mortar lines, topped by a decorative curved metal arch in matte brass with tiny star-shaped cutouts. A small hanging wooden plaque in the center of the arch carved with a generic briefcase icon — no letters. Pastel sage-green ivy vines climb the left pillar, tiny lanterns with warm amber glow hang from the arch by thin chains. Chunky chibi dollhouse proportions, silhouette wide enough to frame a walking path, symbolic icons only with no readable text. Stylized low-poly 3D render, flat shaded, soft pastel color palette, playful chibi proportions, cozy playground world aesthetic inspired by Poly Pizza and Quaternius assets. Clean geometry, isometric 3/4 view, centered single subject on a pure white seamless background, even soft studio lighting, no cast shadow. Avoid photorealism, readable letters, numbers, brand names, watermarks, multiple arches, buildings behind, ground shadow, gradient or busy background, and people walking.
```

> **Note:** `lamp_post.glb` 는 Zone 2-G 프롬프트를 재활용한다. 신규 생성 불필요.

---

## Zone 7 — Content 섬 환경

### 7-A. `booth_coming_soon.glb` (Content 시티 예정지 부스)

```
A cute small exhibition booth with a tilted construction-theme facade suggesting upcoming content — a chunky box-shaped kiosk structure in pastel cream with pastel coral trim, a striped canvas canopy on top alternating pastel cream and soft coral stripes, and a small rounded window on the front showing a blurred pastel gradient that hints at a hidden surprise. Beside the booth a tiny wooden crate with a cloth cover, a single balloon tied to the corner with a curly string in pastel lavender, and a small paper lantern hanging on the corner post. Playful mystery atmosphere, chunky chibi dollhouse proportions, no readable text — only decorative shapes. Stylized low-poly 3D render, flat shaded, soft pastel color palette, playful chibi proportions, cozy playground world aesthetic inspired by Poly Pizza and Quaternius assets. Clean geometry, isometric 3/4 view, centered single subject on a pure white seamless background, even soft studio lighting, no cast shadow. Avoid photorealism, readable letters, numbers, brand logos, watermarks, multiple booths, background props, ground shadow, gradient or busy background, and people.
```

---

### 7-B. `outdoor_screen.glb` (meme-push 옥외 스크린)

```
A chunky freestanding outdoor digital screen on a wide base platform — a large rectangular screen filled with a soft cyan-to-magenta gradient glow and a very subtle pixel pattern texture, framed by a chunky pastel coral border with rounded corners and visible rivets. Two thick matte silver support legs with bolted feet, a small speaker grille on the bottom front, and faint confetti particles floating above the screen. An optional small shopping-cart icon hinted as a vague painted shape on the screen, but no readable UI or text. Chunky chibi festival booth vibe. Stylized low-poly 3D render, flat shaded, soft pastel color palette with gentle cyan and magenta emissive accents, playful chibi proportions, cozy playground world aesthetic inspired by Poly Pizza and Quaternius assets. Clean geometry, isometric 3/4 view, centered single subject on a pure white seamless background, even soft studio lighting, no cast shadow. Avoid photorealism, readable text, UI elements, app interfaces, icons with letters, watermarks, multiple screens, background props, ground shadow, gradient or busy background, and people.
```

---

### 7-C. `festival_tent.glb` (Content 시티 돔형 상영관)

```
A cute circus-inspired festival tent with a domed striped canopy in alternating pastel mint and cream vertical stripes, a small decorative pennant flag on top shaped like a star. Thick cloth entrance flaps are tied open with rope tiebacks revealing a warm golden glow inside. Chunky support ropes stake into the ground with rounded wooden pegs, a small rope string with tiny triangular pastel bunting flags wraps around the base, and a tiny lantern hangs above the entrance. Chunky chibi dollhouse proportions, friendly festive atmosphere, symbolic flag shapes only with no readable text. Stylized low-poly 3D render, flat shaded, soft pastel color palette, playful chibi proportions, cozy playground world aesthetic inspired by Poly Pizza and Quaternius assets. Clean geometry, isometric 3/4 view, centered single subject on a pure white seamless background, even soft studio lighting, no cast shadow. Avoid photorealism, readable letters, watermarks, multiple tents, background props, ground shadow, gradient or busy background, and people inside.
```

---

### 7-D. `picnic_bench.glb` (피크닉 테이블)

```
A classic picnic table with attached benches on both sides, warm honey-toned wooden planks on the table top and two bench seats with subtle grain, crossed A-frame support legs in the same wood with visible pastel-brass metal bolts. A small rounded center hole holds a tiny pastel sunflower in a pot, two pastel plaid cushions sit on the benches in sage-and-cream check pattern, and a folded napkin plus a tiny pastel-blue ceramic cup act as table decor. Chunky chibi dollhouse proportions, cozy outdoor picnic aesthetic, single isolated prop. Stylized low-poly 3D render, flat shaded, soft pastel color palette, playful chibi proportions, cozy playground world aesthetic inspired by Poly Pizza and Quaternius assets. Clean geometry, isometric 3/4 view, centered single subject on a pure white seamless background, even soft studio lighting, no cast shadow. Avoid photorealism, text, watermarks, multiple tables, background props, ground shadow, gradient or busy background, and people eating or plates of food with text.
```

---

## Zone 8 — Playground 섬 환경

### 8-A. `carousel.glb` (회전목마)

```
A cute miniature carousel merry-go-round — a circular rotating platform in cream wood with soft-pink trim, a chunky striped central pole in alternating pastel pink and cream candy-cane stripes topped with a pointed finial and a small star ornament. Four chibi wooden horses around the platform in pastel lavender, mint, coral, and buttery yellow with golden mane and tail swirls frozen in playful poses, each horse mounted on a gold-painted pole. A scalloped circus-style canopy roof in alternating pastel pink and cream, small decorative pennant flags around the canopy edge, and tiny fairy lights strung along the base. Chunky chibi dollhouse proportions, friendly amusement park atmosphere, no readable text. Stylized low-poly 3D render, flat shaded, soft pastel color palette, playful chibi proportions, cozy playground world aesthetic inspired by Poly Pizza and Quaternius assets. Clean geometry, isometric 3/4 view, centered single subject on a pure white seamless background, even soft studio lighting, no cast shadow. Avoid photorealism, scary horses, dark circus vibes, text, letters, watermarks, multiple carousels, background props, ground shadow, gradient or busy background, and people riding.
```

---

### 8-B. `flower_patch.glb` (알록달록 꽃밭)

```
A small circular flower garden patch on a low wooden border ring, filled with chibi stylized flowers in mixed clusters — round chunky petals in pastel pink, pastel yellow, pastel lavender, pastel mint, and coral, each flower on a short sage-green stem with two plump leaves. A few tiny mushrooms with cream caps and pink polka dots are scattered among the flowers, a small fluffy dandelion puff sits on one edge, a tiny decorative wooden marker carries a pressed-leaf icon, and loose soil in warm brown peeks between the stems. Chunky chibi garden vibe, no real plant species detail — only cartoon flower shapes. Single isolated prop. Stylized low-poly 3D render, flat shaded, soft pastel color palette, playful chibi proportions, cozy playground world aesthetic inspired by Poly Pizza and Quaternius assets. Clean geometry, isometric 3/4 view, centered single subject on a pure white seamless background, even soft studio lighting, no cast shadow. Avoid photorealism, botanical accuracy, specific plant species, text, watermarks, background props, ground shadow, gradient or busy background, people, and insects with detail.
```

---

### 8-C. `sand_pit.glb` (모래놀이터)

```
A small square sandbox with a low wooden frame in warm honey tone, rounded corners, and visible wood grain, filled with soft pastel-cream sand in a gently mounded surface that shows tiny ripples and a single small footprint. A chibi blue plastic bucket is tipped sideways at one corner with a tiny shovel sticking out of the sand, a small cream sandcastle with a pointed turret and a tiny paper flag sits near the center, and a few pastel seashells plus a small starfish decoration are scattered on the sand. Chunky chibi playground vibe, no readable text, single isolated prop. Stylized low-poly 3D render, flat shaded, soft pastel color palette, playful chibi proportions, cozy playground world aesthetic inspired by Poly Pizza and Quaternius assets. Clean geometry, isometric 3/4 view, centered single subject on a pure white seamless background, even soft studio lighting, no cast shadow. Avoid photorealism, sharp sand detail, text, watermarks, multiple sandboxes, background props, ground shadow, gradient or busy background, and children playing.
```

---

## Archive (deferred assets)

> 현재 코드베이스에서 사용하지 않지만, 향후 기능 확장 시 재활용 가능해 보존하는 프롬프트.

### 0-A. `intro_npc_guide.glb` (안내 NPC — 선택 항목)

**🎨 Midjourney (구버전 포맷, 재활용 시 Higgsfield 로 변환 권장)**
```
A friendly chibi tour-guide character standing in a welcoming pose with one hand slightly raised as if waving hello, short and chunky proportions with a big round head, warm golden skin tone, soft pastel cyan short hair with slight side bangs, large round dark eyes with a single highlight dot, small smiling mouth, wearing a playful pastel mint short-sleeve jacket with a tiny rounded badge on the chest, cream short pants, chunky pastel coral sneakers, a simple small crossbody bag in pastel pink, a rolled paper map held loosely in one hand with no readable text, rounded cartoon silhouette, T-pose-ish neutral stance suitable for rigging, stylized low-poly 3D render, flat shaded, soft pastel color palette, playful chibi proportions, cozy playground world aesthetic, clean geometry, isometric 3/4 view, centered single subject, pure white seamless background #ffffff, even soft studio lighting, no cast shadow --ar 1:1 --v 6 --style raw --s 150 --chaos 5 --no text, shadow, gradient, clutter, photorealistic
```

**🖼 Stable Diffusion (Positive)**
```
A friendly chibi tour-guide character in welcoming pose, one hand slightly raised waving hello, chunky short proportions big round head, warm golden skin, pastel cyan short hair with slight side bangs, large round dark eyes with single highlight dot, small smiling mouth, pastel mint short-sleeve jacket with small rounded chest badge, cream short pants, chunky pastel coral sneakers, simple pastel pink crossbody bag, loosely held rolled paper map with no readable text, rounded cartoon silhouette, neutral T-pose-ish stance suitable for rigging, stylized low-poly 3D render, flat shaded, soft pastel color palette, isometric 3/4 view, centered single subject, pure white seamless background, even soft studio lighting
```

**🚫 Stable Diffusion (Negative)**
```
photorealistic, realistic, hyperrealistic, readable text, letters, numbers, watermark, signature, brand logo, low quality, blurry, jpeg artifacts, adult proportions, realistic anatomy, extra limbs, cluttered scene, background props, ground shadow, cast shadow, gradient background, busy background, multiple characters
```

**아카이브 사유**: 현재 코드에 가이드 NPC placeholder 없음. 플레이어 캐릭터(`meshy_jm.glb`)는 이미 존재. 향후 "튜토리얼 안내 NPC" 기능 추가 시 재활용 후보.

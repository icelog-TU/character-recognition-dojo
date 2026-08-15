# L259 Generation Packet

## Lesson

- Unit: L259
- Kind: normal lesson
- New character: 病
- Zhuyin: ㄅㄧㄥˋ
- Title: 病
- Branch: codex/l259-complete-package
- Status: package branch with production JSON integration
- Dependencies: L251 重, L252 沙, L253 張, L254 椅, L255 累, L256 死, L257 睡, L258 倒
- Provisional learned chars from handoff: 重, 沙, 張, 椅, 累, 死, 睡, 倒

Latest production check found dependencies already present in origin/main, so this package includes the L259 production curriculum entry, planner export, and ledger/SOP state sync.

## Safety And Visual Notes

- Sickness scenes must be gentle and safe.
- Do not depict severe illness, injury, death, emergency care, horror, medical panic, hospital signs, medicine labels, visible text, numbers, labels, zhuyin, watermarks, or logos.
- Use L058 only as illustration style reference, not character appearance.
- Use L154/L162/L163 protagonist family continuity for protagonist mother, father, and little girl.
- Human roles must be explicit in prompts and should not collapse into the same adult identity.

## Approved Sentences

### L259-S01

- Text: 媽媽生病了，很累又想睡。
- Spoken text: 媽媽生病了很累又想睡
- Focus char: 病
- Display lines:
  - 媽媽生病了，
  - 很累又想睡。
- Image: `/assets/lessons/L259/images/L259-S01.webp`
- Audio: `/assets/lessons/L259/audio/L259-S01.m4a`
- Image prompt: 主角媽媽在家裡生病，坐在床邊或沙發上看起來很累、想睡，主角小女孩在旁邊關心她。主角媽媽身份符合 L154/L162/L163 family continuity，不可畫成老師。畫面溫和安全，不可有重病、急救、死亡、受傷、恐怖或醫療恐慌意象。Generate a square image / 1:1 composition, centered with safe margins, warm picture-book style, no visible text, numbers, signs, labels, zhuyin, logos, watermarks, or readable marks.

### L259-S02

- Text: 我坐在椅子上等看病。
- Spoken text: 我坐在椅子上等看病
- Focus char: 病
- Display lines:
  - 我坐在
  - 椅子上
  - 等看病。
- Image: `/assets/lessons/L259/images/L259-S02.webp`
- Audio: `/assets/lessons/L259/audio/L259-S02.m4a`
- Image prompt: 主角小女孩坐在椅子上等待看病，主角媽媽在旁邊陪伴。場景是乾淨溫和的候診空間，但不可有醫院招牌、文字、數字、藥袋標籤或注音。主角小女孩與主角媽媽身份符合 L154/L162/L163 family continuity。Generate a square image / 1:1 composition, centered with safe margins, warm picture-book style, no visible text, numbers, signs, labels, zhuyin, logos, watermarks, or readable marks.

### L259-S03

- Text: 小狗病倒了，睡在地上。
- Spoken text: 小狗病倒了睡在地上
- Focus char: 倒
- Display lines:
  - 小狗病倒了，
  - 睡在地上。
- Image: `/assets/lessons/L259/images/L259-S03.webp`
- Audio: `/assets/lessons/L259/audio/L259-S03.m4a`
- Image prompt: 家裡的小狗不舒服，安靜地睡在地上的墊子或乾淨地面上，主角小女孩在旁邊關心牠。畫面要溫和，狗看起來是安全休息，不可畫成死亡、受傷、急救或恐怖。Generate a square image / 1:1 composition, centered with safe margins, warm picture-book style, no visible text, numbers, signs, labels, zhuyin, logos, watermarks, or readable marks.

### L259-S04

- Text: 小孩生病，爸媽急得半死。
- Spoken text: 小孩生病爸媽急得半死
- Focus char: 死
- Display lines:
  - 小孩生病，
  - 爸媽急得
  - 半死。
- Image: `/assets/lessons/L259/images/L259-S04.webp`
- Audio: `/assets/lessons/L259/audio/L259-S04.m4a`
- Image prompt: 一個小孩在家裡生病休息，爸爸媽媽在旁邊很著急、關心孩子。人物身份明確為小孩、爸爸、媽媽。「急得半死」是誇張口語，畫面不可呈現死亡、重病、急救、受傷或恐怖。Generate a square image / 1:1 composition, centered with safe margins, warm picture-book style, no visible text, numbers, signs, labels, zhuyin, logos, watermarks, or readable marks.

### L259-S05

- Text: 這一步死棋難倒爸爸。
- Spoken text: 這一步死棋難倒爸爸
- Focus char: 倒
- Display lines:
  - 這一步死棋
  - 難倒爸爸。
- Image: `/assets/lessons/L259/images/L259-S05.webp`
- Audio: `/assets/lessons/L259/audio/L259-S05.m4a`
- Image prompt: 主角爸爸和主角小女孩在家裡下棋，主角爸爸看著棋盤皺眉思考，像是被這一步死棋難倒。畫面重點是棋盤與思考，不要出現死亡、恐怖或暴力意象。Generate a square image / 1:1 composition, centered with safe margins, warm picture-book style, no visible text, numbers, signs, labels, zhuyin, logos, watermarks, or readable marks.

## Stage 4

### L259-G01 Find Character

- Sentence: L259-S01
- Target char: 病
- Reason: 「生病」是本課最核心、最生活化的用法。

### L259-G02 Teach Character

- Sentence: L259-S02
- Target char: 病
- Target char index: 8
- Prefix text: 我坐在椅子上等看
- Prefix audio: `/assets/lessons/L259/audio/L259-G02-prefix.m4a`
- Suffix text: empty because target char is final Han character
- Suffix audio: omitted; draft does not reference suffixSrc

### L259-G03 Missing Character

- Sentence: L259-S03
- Target char: 倒
- Missing indexes: [3]
- Options: 倒, 病, 睡

### L259-G04 Partial Order

- Sentence: L259-S04
- Chunks:
  - 小孩生病
  - 爸媽
  - 急得半死

### L259-G05 Choose Pronunciation

- Correct sentence: L259-S05
- Correct text: 這一步死棋難倒爸爸。
- Correct audio: `/assets/lessons/L259/audio/L259-S05.m4a`
- Wrong one text: 這一步好棋難倒爸爸。
- Wrong one audio: `/assets/lessons/L259/audio/L259-G05-wrong-one.m4a`
- Wrong two text: 這一步死棋難倒媽媽。
- Wrong two audio: `/assets/lessons/L259/audio/L259-G05-wrong-two.m4a`
- Note: Wrong-choice audio was generated as full whole-sentence OpenAI TTS. No splicing or cutting.

The original handoff wrong-two sentence `這一步死棋難不倒爸爸。` was replaced because production validation rejects choose-pronunciation wrong choices with more than two Han differences from the correct sentence.

## Asset Paths

- Images:
  - `public/assets/lessons/L259/images/L259-S01.webp`
  - `public/assets/lessons/L259/images/L259-S02.webp`
  - `public/assets/lessons/L259/images/L259-S03.webp`
  - `public/assets/lessons/L259/images/L259-S04.webp`
  - `public/assets/lessons/L259/images/L259-S05.webp`
- Audio:
  - `public/assets/lessons/L259/audio/L259-S01.m4a`
  - `public/assets/lessons/L259/audio/L259-S02.m4a`
  - `public/assets/lessons/L259/audio/L259-S03.m4a`
  - `public/assets/lessons/L259/audio/L259-S04.m4a`
  - `public/assets/lessons/L259/audio/L259-S05.m4a`
  - `public/assets/lessons/L259/audio/char-u75c5.m4a`
  - `public/assets/lessons/L259/audio/L259-G02-prefix.m4a`
  - `public/assets/lessons/L259/audio/L259-G05-wrong-one.m4a`
  - `public/assets/lessons/L259/audio/L259-G05-wrong-two.m4a`

## Validation Summary

- Sentence Han counts: S01 10, S02 9, S03 9, S04 10, S05 9.
- charTimings counts after alignment: S01 10, S02 9, S03 9, S04 10, S05 9.
- Images are square WebP files at 1024 x 1024, all under 250 KB.
- Final audio is AAC, 44100 Hz, mono.
- `npm run validate:production`: pass.
- `npm run verify`: pass.

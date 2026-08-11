# L195 Generation Packet - 光

## Production Status

- Unit: L195
- Kind: normal lesson
- New character: 光
- Taiwan zhuyin: ㄍㄨㄤ
- Latest production curriculum after rebase: L001-L193, latest new character 生
- Dependency blocker before release: none; L194 明 is already shipped on main.
- Provisional learned chars for package work: 明
- Production JSON, planner-data, and ledger are updated by Release from latest origin/main.

## Rules

- Use only latest origin/main learned display characters through L194 明 plus current target 光.
- Keep all display text in Taiwan Traditional Chinese and use 正體「裡」.
- Do not use unlearned display characters such as 亮、陽、照、射、影、暗、線、清、楚、活、命、安、全.
- Images must be square image / 1:1 composition, WebP, longest edge <= 1024px, target <= 250 KB each, hard max <= 400 KB.
- Images must not contain written text, numbers, signs, labels, zhuyin, logos, watermarks, blackboard writing, book text, speech bubbles, captions, signatures, or readable marks.
- Audio must use repo OpenAI flow only: AI audio -> assets:audio -> assets:align:ai.
- Generate standalone charAudio for 光 as `/assets/lessons/L195/audio/char-u5149.m4a`.
- Generate G02 teachAudio prefix/suffix from exact fragments and G05 wrong-choice audio from full wrong sentences. Do not splice audio.

## Approved Sentences

| Sentence | Text | Spoken Text | Focus | Display Lines |
|---|---|---|---|---|
| L195-S01 | 明天上課，要學光和電。 | 明天上課要學光和電 | 光 | 明天上課， / 要學光和電。 |
| L195-S02 | 他畫的小鳥很生動。 | 他畫的小鳥很生動 | 生 | 他畫的小鳥 / 很生動。 |
| L195-S03 | 明明關燈了，房裡怎麼有光？ | 明明關燈了房裡怎麼有光 | 光 | 明明關燈了， / 房裡怎麼 / 有光？ |
| L195-S04 | 生火時，會有火光。 | 生火時會有火光 | 光 | 生火時， / 會有火光。 |
| L195-S05 | 電燈會發光。 | 電燈會發光 | 光 | 電燈會 / 發光。 |

## Image Prompts

All prompts use the approved L058 lesson image style anchors:

- `public/assets/lessons/L058/images/L058-S01.webp`
- `public/assets/lessons/L058/images/L058-S02.webp`
- `public/assets/lessons/L058/images/L058-S03.webp`

Shared style: square image / 1:1 composition with safe margins and centered main action. Modern children's picture-book illustration with warm natural light, fine pencil-and-watercolor linework, clean detailed environments, expressive preschool proportions, soft cheeks, gentle facial expressions, bright warm palette, and phone-readable composition. No speech bubbles, visible text, labels, signs, letters, numbers, zhuyin, logos, watermarks, arrows, symbols, warning signs, signatures, or readable marks.

1. L195-S01: Classroom scene where a teacher prepares to teach light and electricity with a safe small electric lamp or simple teaching aids on a table while students watch. The meaning of class, light, and electricity should be clear. No blackboard writing, book text, numbers, labels, or zhuyin.
2. L195-S02: A child proudly shows a picture of a small bird that looks vivid and lifelike, with child-friendly imaginative style. The paper contains only the bird drawing and no words, signatures, numbers, labels, or readable marks.
3. L195-S03: A room where the lamp is off but a small safe source of light still appears, such as soft light from a window edge or doorway, while a child looks puzzled. Keep the mood safe and calm, not scary. No text, numbers, labels, or readable marks.
4. L195-S04: A safe outdoor open area where an adult demonstrates a controlled small fire with gentle firelight while a child watches from a safe distance. No text, numbers, warning signs, labels, or readable marks.
5. L195-S05: A household electric lamp glowing clearly with a child looking up nearby. The focus is the electric lamp giving off light. No text, numbers, brand marks, labels, or zhuyin.

## Stage 4

1. L195-G01 find-character: sentence L195-S05, target 光, missingIndexes [4].
2. L195-G02 teach-character: sentence L195-S01, target 光, targetCharIndex 6, prefix exact text `明天上課要學`, suffix exact text `和電`.
3. L195-G03 missing-character: sentence L195-S03, target 光, missingIndexes [10], options 光、電、火.
4. L195-G04 partial-order: sentence L195-S02, chunks `他畫的小鳥` / `很` / `生動`.
5. L195-G05 choose-pronunciation: correct `生火時，會有火光。`; wrong-one `生火時，沒有火光。`; wrong-two `關燈時，會有火光。`.

## Coverage

- 光 appears 4 times, required >=3.
- 明 appears 3 times, required >=2.
- 生 appears 2 times, required >=2.
- 電 appears 2 times, required >=2.
- 發 appears 1 time, required >=1.
- 火 appears 2 times, required >=1.
- Han counts: S01 9, S02 8, S03 11, S04 7, S05 5. No sentence exceeds 12 Han characters.

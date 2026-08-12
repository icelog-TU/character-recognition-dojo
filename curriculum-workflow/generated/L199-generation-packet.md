# L199 Generation Packet - 影

## Production Status

- Unit: L199
- Kind: normal lesson
- New character: 影
- Taiwan zhuyin: ㄧㄥˇ
- Latest production curriculum at claim: L001-L198, latest new character 月
- Dependency blocker before release: none
- Provisional learned chars: none

## Rules

- Use only latest origin/main learned display characters through L198 plus current target 影.
- Keep all display text in Taiwan Traditional Chinese.
- Do not use unlearned display characters such as 暗、線、倒、站、投、射、照、落、斜、長、越.
- Images must be square image / 1:1 composition, WebP, longest edge <= 1024px, target <= 250 KB each, hard max <= 400 KB.
- Images must not contain written text, numbers, signs, labels, zhuyin, logos, watermarks, blackboard writing, book text, speech bubbles, captions, signatures, or readable marks.
- Shadows and silhouettes must be child-friendly and not scary.
- Audio must use repo OpenAI flow only: AI audio -> assets:audio -> assets:align:ai.
- Generate standalone charAudio for 影 as `/assets/lessons/L199/audio/char-u5f71.m4a`.
- Generate G02 teachAudio prefix/suffix from exact fragments and G05 wrong-choice audio from full wrong sentences. Do not splice audio.

## Approved Sentences

| Sentence | Text | Spoken Text | Focus | Display Lines |
|---|---|---|---|---|
| L199-S01 | 陽光很亮，影子很黑。 | 陽光很亮影子很黑 | 影 | 陽光很亮， / 影子很黑。 |
| L199-S02 | 樹葉的光影很好看。 | 樹葉的光影很好看 | 影 | 樹葉的光影 / 很好看。 |
| L199-S03 | 窗外有好幾個人影。 | 窗外有好幾個人影 | 影 | 窗外有 / 好幾個人影。 |
| L199-S04 | 明亮的月光穿過窗子。 | 明亮的月光穿過窗子 | 月 | 明亮的月光 / 穿過窗子。 |
| L199-S05 | 陽光像火，月光像水。 | 陽光像火月光像水 | 光 | 陽光像火， / 月光像水。 |

## Image Prompts

All prompts use the approved L058 lesson image style anchors:

- `public/assets/lessons/L058/images/L058-S01.webp`
- `public/assets/lessons/L058/images/L058-S02.webp`
- `public/assets/lessons/L058/images/L058-S03.webp`

Shared style: square image / 1:1 composition with safe margins and centered main action. Modern children's picture-book illustration with warm natural light, fine pencil-and-watercolor linework, clean detailed environments, expressive preschool proportions, soft cheeks, gentle facial expressions, bright warm palette, and phone-readable composition. No speech bubbles, visible text, labels, signs, letters, numbers, zhuyin, logos, watermarks, arrows, symbols, warning signs, signatures, or readable marks.

1. L199-S01: Bright sunny outdoor daytime scene. A child or simple object has a clear dark shadow beside it. The contrast between bright sunlight and a black shadow is visible, but the mood is friendly and not scary.
2. L199-S02: Sunlight passes through tree leaves, making pretty leaf-shaped light and shadow patterns on the ground or a wall. The leaf light-and-shadow pattern is the main subject.
3. L199-S03: Indoor view looking through a window. Outside the window, several friendly human silhouettes or shadows pass by. It is clearly people shadows, not scary or dangerous.
4. L199-S04: Quiet night scene where bright moonlight passes through a window into a room. The mood is gentle and calm, with no scary elements.
5. L199-S05: Left-right visual contrast. One side uses warm bright sunlight and fiery colors; the other side uses cool soft moonlight and watery colors. Show the metaphor through color and light only, no text.

## Stage 4

1. L199-G01 find-character: sentence L199-S03, target 影, missingIndexes [7].
2. L199-G02 teach-character: sentence L199-S02, target 影, targetCharIndex 4, prefix exact text `樹葉的光`, suffix exact text `很好看`.
3. L199-G03 missing-character: sentence L199-S01, target 影, missingIndexes [4], options 影、光、月.
4. L199-G04 partial-order: sentence L199-S04, chunks `明亮的月光` / `穿過` / `窗子`.
5. L199-G05 choose-pronunciation: correct `陽光像火，月光像水。`; wrong-one `陽光像水，月光像火。`; wrong-two `陽光像火，月亮像水。`.

## Coverage

- 影 appears 3 times, required >=3.
- 月 appears 2 times, required >=2.
- 陽 appears 2 times, required >=2.
- 亮 appears 2 times, required >=2.
- 光 appears 5 times, required >=1.
- 明 appears 1 time, required >=1.
- Han counts: S01 8, S02 8, S03 8, S04 9, S05 8. No sentence exceeds 12 Han characters.

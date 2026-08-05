# L097 Generation Packet - 鏡

## Lesson Boundary

- App: 認字練功房
- Lesson: L097
- New character: 鏡
- Zhuyin: 鏡 = ㄐㄧㄥˋ
- Production status: parallel prep only
- Latest checked `origin/main`: production curriculum L001-L094, review modules R001-R004
- Blocking dependencies before production merge: L095「眼」 and L096「用」
- Provisional learned characters for this packet: 眼、用
- Do not merge this lesson into `src/curriculum/sample-lessons.json` until dependencies are merged and the lesson is rebased/rechecked.

## Hard Rules

- Use Taiwan zhuyin only; do not use Hanyu pinyin.
- Display text may use only learned characters plus L097「鏡」 and the registered provisional characters「眼」「用」.
- Do not use these unlearned characters in lesson sentences or Stage 4 option text: 張、從、能、進、弄、睛.
- `spokenText` must equal `text` with punctuation removed.
- Images must use the approved L058 style references:
  - `public/assets/lessons/L058/images/L058-S01.webp`
  - `public/assets/lessons/L058/images/L058-S02.webp`
  - `public/assets/lessons/L058/images/L058-S03.webp`
- Images must not contain visible text, letters, numbers, zhuyin, labels, signs, UI, logos, watermarks, arrows, or speech bubbles.
- Audio must use the standard AI audio -> `assets:audio` -> `assets:align:ai` flow.
- Character audio for「鏡」must be standalone AI audio from the single character「鏡」. Do not cut it from sentence audio.
- Teach-character prefix/suffix audio must be standalone AI audio from the exact text fragments. Do not cut from the sentence.
- Choose-pronunciation wrong-choice audio must be generated as whole sentences from the exact wrong option text. Do not splice or patch audio.

## Approved Sentences

| ID | text | spokenText | focusChar | Han Count |
|---|---|---|---|---:|
| L097-S01 | 爸爸的眼鏡壞掉了 | 爸爸的眼鏡壞掉了 | 鏡 | 8 |
| L097-S02 | 我把鏡子放在盒子裡 | 我把鏡子放在盒子裡 | 鏡 | 9 |
| L097-S03 | 那個人用放大鏡看書 | 那個人用放大鏡看書 | 鏡 | 9 |
| L097-S04 | 小孩看不出好人和壞人 | 小孩看不出好人和壞人 | 壞 | 10 |
| L097-S05 | 沒有眼鏡可用，我看不到 | 沒有眼鏡可用我看不到 | 鏡 | 10 |

Coverage:

- 鏡: 4
- 用: 2
- 眼: 2
- 壞: 2
- 掉: 1
- 盒: 1

## Image Prompts

All prompts must begin from the same style anchor:

```text
Use the L058 approved sentence-image style anchors: public/assets/lessons/L058/images/L058-S01.webp, public/assets/lessons/L058/images/L058-S02.webp, and public/assets/lessons/L058/images/L058-S03.webp. Modern children's picture-book illustration, warm natural light, fine pencil-and-watercolor linework, detailed but clean scene, consistent expressive preschool proportions, soft cheeks, gentle facial expressions, bright warm palette, phone-readable composition. No visible text, letters, numbers, labels, zhuyin, signage, UI, watermark, speech bubbles, arrows, or logos.
```

Sentence-specific scene requirements:

1. `L097-S01`: A fixed father character is holding or wearing eyeglasses that are clearly broken in a safe, non-dangerous way, such as a bent frame or cracked lens. A child stands nearby looking concerned but calm. Make the eyeglasses and broken state easy to recognize.
2. `L097-S02`: The fixed first-person girl puts a small safe hand mirror into an open plain box. The mirror and box are both clear and easy to recognize; the mirror is not broken and the box is plain with no symbols.
3. `L097-S03`: A person uses a magnifying glass to look at an open book. The magnifying glass and book are clear, and the book pages are completely blank with no writing, marks, letters, numbers, or symbols.
4. `L097-S04`: A child is looking at a picture book with two simple illustrated people inside the book: one clearly kind and helpful, one clearly unkind or troublesome but not scary or violent. The child looks confused and cannot tell which person is good or bad. The illustrations inside the book must contain pictures only, with no text, numbers, labels, symbols, or signs.
5. `L097-S05`: Show an adult or another child who needs eyeglasses, not the fixed first-person girl. The person has no usable eyeglasses and cannot see clearly, squinting gently at a blank book or simple object. Keep the scene calm and child-safe; do not include readable writing anywhere.

Final image paths:

- `/assets/lessons/L097/images/L097-S01.webp`
- `/assets/lessons/L097/images/L097-S02.webp`
- `/assets/lessons/L097/images/L097-S03.webp`
- `/assets/lessons/L097/images/L097-S04.webp`
- `/assets/lessons/L097/images/L097-S05.webp`

## Audio Manifest

Generate raw AI audio into `curriculum-workflow/audio-inbox/L097/`, then process with `npm run assets:audio -- --lesson L097`.

| Output file | AI input text | Notes |
|---|---|---|
| `char-u93e1.m4a` | 鏡 | Standalone single-character audio. Do not cut from sentence audio. |
| `L097-S01.m4a` | 爸爸的眼鏡壞掉了 | Full sentence. |
| `L097-S02.m4a` | 我把鏡子放在盒子裡 | Full sentence. |
| `L097-S03.m4a` | 那個人用放大鏡看書 | Full sentence. |
| `L097-S04.m4a` | 小孩看不出好人和壞人 | Full sentence. |
| `L097-S05.m4a` | 沒有眼鏡可用我看不到 | Full sentence. |
| `L097-G02-prefix.m4a` | 我把 | Exact teach-character prefix before 鏡. |
| `L097-G02-suffix.m4a` | 子放在盒子裡 | Exact teach-character suffix after 鏡. |
| `L097-G05-wrong-one.m4a` | 沒有眼鏡可用他看不到 | Whole wrong-choice sentence. |
| `L097-G05-wrong-two.m4a` | 沒有眼鏡可用我看不出 | Whole wrong-choice sentence. |

After audio processing, run:

```bash
npm run assets:align:ai -- --lesson L097
npm run assets:audit -- --lesson L097
```

## Stage 4 Plan

| Game | Type | Sentence | Target | Indexes / Options |
|---|---|---|---|---|
| L097-G01 | find-character | L097-S01 | 鏡 | missingIndexes `[4]` |
| L097-G02 | teach-character | L097-S02 | 鏡 | targetCharIndex `2`; prefix `我把`; suffix `子放在盒子裡` |
| L097-G03 | missing-character | L097-S03 | 鏡 | missingIndexes `[6]`; options 鏡(correct), 眼, 用 |
| L097-G04 | partial-order | L097-S04 | 壞 | missingIndexes `[7,8,9]`; ordered answer 和、壞、人 |
| L097-G05 | choose-pronunciation | L097-S05 | 鏡 | correct `沒有眼鏡可用我看不到`; wrong options listed in audio manifest |

## Draft JSON

The complete branch-only draft lives at:

```text
curriculum-workflow/drafts/L097-draft.json
```

Do not add L097 to production JSON until L095 and L096 are merged and the full dependency recheck passes.

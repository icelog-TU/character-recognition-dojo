# L101 Generation Packet - 圓

## Lesson Boundary

- App: 認字練功房
- Lesson: L101
- New character: 圓
- Zhuyin: 圓 = ㄩㄢˊ
- Production status: parallel prep only
- Latest checked `origin/main`: production curriculum L001-L098, review modules R001-R004
- Blocking dependencies before production merge: L099「臉」 and L100「紅」
- Provisional learned characters for this packet: 臉、紅
- Do not merge this lesson into `src/curriculum/sample-lessons.json` until L099 and L100 are merged and the lesson is rebased/rechecked.

## Hard Rules

- Use Taiwan zhuyin only; do not use Hanyu pinyin.
- Display text may use only learned characters plus L101「圓」 and the registered provisional characters「臉」「紅」.
- Do not use these unlearned characters in lesson sentences or Stage 4 option text: 張、從、能、進、弄、睛、笑、杯.
- `spokenText` must equal `text` with punctuation removed.
- Images must use the approved L058 style references:
  - `public/assets/lessons/L058/images/L058-S01.webp`
  - `public/assets/lessons/L058/images/L058-S02.webp`
  - `public/assets/lessons/L058/images/L058-S03.webp`
- Images must not contain visible text, letters, numbers, zhuyin, labels, signs, UI, logos, watermarks, arrows, or speech bubbles.
- Audio must use the standard AI audio -> `assets:audio` -> `assets:align:ai` flow.
- Character audio for「圓」must be standalone AI audio from the single character「圓」. Do not cut it from sentence audio.
- Teach-character suffix audio must be standalone AI audio from the exact text fragment. Do not cut from the sentence.
- Choose-pronunciation wrong-choice audio must be generated as whole sentences from the exact wrong option text. Do not splice or patch audio.

## Approved Sentences

| ID | text | spokenText | focusChar | Han Count |
|---|---|---|---|---:|
| L101-S01 | 圓圓的紅臉很好看 | 圓圓的紅臉很好看 | 圓 | 8 |
| L101-S02 | 圓桌上放著眼鏡 | 圓桌上放著眼鏡 | 圓 | 7 |
| L101-S03 | 這個盒子是圓的 | 這個盒子是圓的 | 圓 | 7 |
| L101-S04 | 我用紅筆畫鼻子 | 我用紅筆畫鼻子 | 用 | 7 |
| L101-S05 | 他的鼻子和臉一樣圓 | 他的鼻子和臉一樣圓 | 圓 | 9 |

Coverage:

- 圓: 5
- 紅: 2
- 臉: 2
- 鼻: 2
- 鏡: 1
- 用: 1

## Image Prompts

All prompts must begin from the same style anchor:

```text
Use the L058 approved sentence-image style anchors: public/assets/lessons/L058/images/L058-S01.webp, public/assets/lessons/L058/images/L058-S02.webp, and public/assets/lessons/L058/images/L058-S03.webp. Modern children's picture-book illustration, warm natural light, fine pencil-and-watercolor linework, detailed but clean scene, consistent expressive preschool proportions, soft cheeks, gentle facial expressions, bright warm palette, phone-readable composition. No visible text, letters, numbers, labels, zhuyin, signage, UI, watermark, speech bubbles, arrows, or logos.
```

Sentence-specific scene requirements:

1. `L101-S01`: A child or cute child-like character has a clearly round rosy red face that looks pleasant and kind. The face shape and red cheeks are clear but natural, not exaggerated, scary, distorted, or mocking anyone's appearance.
2. `L101-S02`: A clearly round table is shown from a slightly top-down angle, with one pair of eyeglasses resting on top. The circular tabletop shape and the eyeglasses must be easy to recognize.
3. `L101-S03`: A round box is placed on a table or held by a child. The box shape is obviously circular or cylindrical, with a plain surface and no symbols. Make it clear this box is round.
4. `L101-S04`: The fixed first-person girl uses a red pen to draw a nose on a blank sheet of paper. The red pen and the simple nose drawing are clear. The paper must contain only the nose picture, with no writing, numbers, labels, symbols, or other readable marks.
5. `L101-S05`: Show the fixed sporty boy for 他 in a warm, respectful way. His face is round and his nose is also drawn round, making the matching round shapes clear. Keep the design cute and kind; do not caricature, mock, or make the face unattractive.

Final image paths:

- `/assets/lessons/L101/images/L101-S01.webp`
- `/assets/lessons/L101/images/L101-S02.webp`
- `/assets/lessons/L101/images/L101-S03.webp`
- `/assets/lessons/L101/images/L101-S04.webp`
- `/assets/lessons/L101/images/L101-S05.webp`

## Audio Manifest

Generate raw AI audio into `curriculum-workflow/audio-inbox/L101/`, then process with `npm run assets:audio -- --lesson L101`.

| Output file | AI input text | Notes |
|---|---|---|
| `char-u5713.m4a` | 圓 | Standalone single-character audio. Do not cut from sentence audio. |
| `L101-S01.m4a` | 圓圓的紅臉很好看 | Full sentence. |
| `L101-S02.m4a` | 圓桌上放著眼鏡 | Full sentence. |
| `L101-S03.m4a` | 這個盒子是圓的 | Full sentence. |
| `L101-S04.m4a` | 我用紅筆畫鼻子 | Full sentence. |
| `L101-S05.m4a` | 他的鼻子和臉一樣圓 | Full sentence. |
| `L101-G02-suffix.m4a` | 桌上放著眼鏡 | Exact teach-character suffix after 圓. |
| `L101-G05-wrong-one.m4a` | 他的鼻子和臉一樣紅 | Whole wrong-choice sentence. |
| `L101-G05-wrong-two.m4a` | 他的鼻子和臉一樣大 | Whole wrong-choice sentence. |

After audio processing, run:

```bash
npm run assets:align:ai -- --lesson L101
npm run assets:audit -- --lesson L101
```

## Stage 4 Plan

| Game | Type | Sentence | Target | Indexes / Options |
|---|---|---|---|---|
| L101-G01 | find-character | L101-S01 | 圓 | missingIndexes `[0,1]` |
| L101-G02 | teach-character | L101-S02 | 圓 | targetCharIndex `0`; suffix `桌上放著眼鏡` |
| L101-G03 | missing-character | L101-S03 | 圓 | missingIndexes `[5]`; options 圓(correct), 紅, 鏡 |
| L101-G04 | partial-order | L101-S04 | 用 | missingIndexes `[1,2,3,4]`; ordered answer 用、紅、筆、畫 |
| L101-G05 | choose-pronunciation | L101-S05 | 圓 | correct `他的鼻子和臉一樣圓`; wrong options listed in audio manifest |

## Draft JSON

The complete branch-only draft lives at:

```text
curriculum-workflow/drafts/L101-draft.json
```

Do not add L101 to production JSON until L099 and L100 are merged and the full dependency recheck passes.

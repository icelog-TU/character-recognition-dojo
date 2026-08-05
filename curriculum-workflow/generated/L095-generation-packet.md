# L095 Generation Packet

## Gate

- Course: 認字練功房
- Lesson: L095
- New character: `眼`
- Zhuyin: `ㄧㄢˇ`
- Current gate: latest `origin/main` production is L001-L092 and includes R003/R004. L095 depends on L093 and L094, so this lesson is branch-only parallel preparation.
- Do not merge L095 production JSON, ledger, or planner data until L093 and L094 are merged in order.

## Constraints

- Use only learned characters plus provisional `掉`, `壞`, and the L095 new character `眼`.
- Do not use: `用`, `張`, `從`, `能`, `進`, `弄`, `睛`.
- Taiwan wording and Taiwan zhuyin only. Do not use Hanyu Pinyin.
- `spokenText` must equal `text` with punctuation removed.
- Images use the L058 approved style references:
  - `public/assets/lessons/L058/images/L058-S01.webp`
  - `public/assets/lessons/L058/images/L058-S02.webp`
  - `public/assets/lessons/L058/images/L058-S03.webp`
- Audio flow: AI audio -> `assets:audio` -> `assets:align:ai`.
- Standalone character audio rule: `char-u773c.m4a` must be generated directly as single-character AI audio. Do not cut it from sentence audio.
- Teach audio rule: prefix/suffix files must be generated from the exact text fragments, not cut from the full sentence.
- Choose-pronunciation rule: wrong-choice audio files must be generated as full wrong sentences, not spliced.

## Approved Sentences

| ID | text | spokenText | focusChar | Han Count |
|---|---|---|---|---|
| L095-S01 | 人在眼前，可是沒看到 | 人在眼前可是沒看到 | 眼 | 9 |
| L095-S02 | 大眼看著小眼 | 大眼看著小眼 | 眼 | 6 |
| L095-S03 | 媽媽的眼裡有愛心 | 媽媽的眼裡有愛心 | 眼 | 8 |
| L095-S04 | 桌上的盒子壞掉了 | 桌上的盒子壞掉了 | 盒 | 8 |
| L095-S05 | 把壞掉的盒子拿走 | 把壞掉的盒子拿走 | 壞 | 8 |

## Coverage

- `眼`: 4 occurrences, L095 new character, target met.
- `壞`: 2 occurrences, L094, previous-three review target met.
- `掉`: 2 occurrences, L093, previous-three review target met.
- `盒`: 2 occurrences, L092, previous-three review target met.
- `子`: 2 occurrences, L091, previous-four/five review target met.
- `桌`: 1 occurrence, L090, previous-four/five review target met.

Teacher-provided statistics listed `壞` and `盒` as 3 occurrences, but the approved sentence set contains 2 each. Both still satisfy the required review minimum.

## Image Plan

Style reference: L058 approved image style. Use warm modern children's picture-book watercolor, soft pencil linework, warm natural light, gentle expressions, detailed but clean environments, bright warm palette, and phone-readable composition. No visible text, letters, numbers, signage, labels, zhuyin, speech bubbles, arrows, logos, watermarks, or UI.

1. `L095-S01`: A child looks away and does not notice a friendly person standing directly in front of them.
2. `L095-S02`: An adult and child face each other, looking into each other's eyes and smiling. Do not show floating or isolated eye objects.
3. `L095-S03`: A mother looks at her child with a loving expression. Soft small hearts may express affection, but no text.
4. `L095-S04`: A damaged plain box sits on a table; damage is clear but safe; a child looks at it.
5. `L095-S05`: A child or adult carries away a damaged plain box; action and broken box are clear.

## Audio Plan

Required final audio:

- `/assets/lessons/L095/audio/char-u773c.m4a`
- `/assets/lessons/L095/audio/L095-S01.m4a`
- `/assets/lessons/L095/audio/L095-S02.m4a`
- `/assets/lessons/L095/audio/L095-S03.m4a`
- `/assets/lessons/L095/audio/L095-S04.m4a`
- `/assets/lessons/L095/audio/L095-S05.m4a`
- `/assets/lessons/L095/audio/L095-G02-prefix.m4a`
- `/assets/lessons/L095/audio/L095-G02-suffix.m4a`
- `/assets/lessons/L095/audio/L095-G05-wrong-one.m4a`
- `/assets/lessons/L095/audio/L095-G05-wrong-two.m4a`

Exact AI audio inputs:

- `char-u773c`: `眼`
- `L095-S01`: `人在眼前可是沒看到`
- `L095-S02`: `大眼看著小眼`
- `L095-S03`: `媽媽的眼裡有愛心`
- `L095-S04`: `桌上的盒子壞掉了`
- `L095-S05`: `把壞掉的盒子拿走`
- `L095-G02-prefix`: `大`
- `L095-G02-suffix`: `看著小眼`
- `L095-G05-wrong-one`: `把壞掉的書包拿走`
- `L095-G05-wrong-two`: `把壞掉的盒子拿來`

## Stage 4 Design

1. `L095-G01` find-character: S01, target `眼`, missing index `[2]`.
2. `L095-G02` teach-character: S02, target `眼`, targetCharIndex `1`, missing index `[1]`, prefix `大`, suffix `看著小眼`.
3. `L095-G03` missing-character: S03, target `眼`, missing index `[3]`, options `眼` correct, `心` false, `愛` false.
4. `L095-G04` partial-order: S04, target `盒`, missing indexes `[3,4,5]`, options `盒`, `子`, `壞`.
5. `L095-G05` choose-pronunciation: S05, target `壞`; correct `把壞掉的盒子拿走`; wrong choices `把壞掉的書包拿走`, `把壞掉的盒子拿來`.

## Production Gate Later

When L093 and L094 have been merged into latest `origin/main`:

1. Fetch and rebase this branch.
2. Re-run allowed-character and coverage audits against the real merged learned-character set.
3. Temporarily insert or merge `curriculum-workflow/drafts/L095-draft.json` into `src/curriculum/sample-lessons.json`.
4. Update `docs/CURRICULUM_LEDGER.md` and `public/tools/planner-data.json`.
5. Run `npm run verify`.
6. Mark the registry row `merge-ready` or merge/cleanup it in order.

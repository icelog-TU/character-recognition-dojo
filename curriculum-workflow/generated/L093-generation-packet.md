# L093 Generation Packet

## Gate

- Course: 認字練功房
- Lesson: L093
- New character: `掉`
- Zhuyin: `ㄉㄧㄠˋ`
- Current gate: latest `origin/main` production is L001-L086. L093 depends on L088-L092, so this lesson is branch-only parallel preparation.
- Do not merge L093 production JSON, ledger, or planner data until L088-L092 are merged in order.
- R003/R004 are already present on latest `origin/main`, but must remain after L090 and before L091 in the production sequence.

## Constraints

- Use only learned characters plus provisional `放`, `把`, `桌`, `子`, `盒`, and the L093 new character `掉`.
- Do not use: `用`, `張`, `從`, `能`, `進`, `壞`.
- Taiwan wording and Taiwan zhuyin only. Do not use Hanyu Pinyin.
- `spokenText` must equal `text` with punctuation removed.
- Images use the L058 approved style references:
  - `public/assets/lessons/L058/images/L058-S01.webp`
  - `public/assets/lessons/L058/images/L058-S02.webp`
  - `public/assets/lessons/L058/images/L058-S03.webp`
- Audio flow: AI audio -> `assets:audio` -> `assets:align:ai`.
- Standalone character audio rule: `char-u6389.m4a` must be generated directly as single-character AI audio. Do not cut it from sentence audio.
- Teach audio rule: prefix/suffix files must be generated from the exact text fragments, not cut from the full sentence.
- Choose-pronunciation rule: wrong-choice audio files must be generated as full wrong sentences, not spliced.
- Safety image rule for S02: present water danger and immediate adult help without horror, blood, injury, trauma, or death.

## Approved Sentences

| ID | text | spokenText | focusChar | Han Count |
|---|---|---|---|---|
| L093-S01 | 我的書掉到桌下了 | 我的書掉到桌下了 | 掉 | 8 |
| L093-S02 | 有小孩子掉到水裡了 | 有小孩子掉到水裡了 | 掉 | 9 |
| L093-S03 | 誰把盒子放在桌上 | 誰把盒子放在桌上 | 盒 | 8 |
| L093-S04 | 我的筆盒掉了，找不到了 | 我的筆盒掉了找不到了 | 掉 | 10 |
| L093-S05 | 他一個人走掉了 | 他一個人走掉了 | 掉 | 7 |

## Coverage

- `掉`: 4 occurrences, L093 new character, target met.
- `盒`: 2 occurrences, L092, previous-three review target met.
- `子`: 2 occurrences, L091, previous-three review target met.
- `桌`: 2 occurrences, L090, previous-three review target met.
- `把`: 1 occurrence, L089, previous-four/five review target met.
- `放`: 1 occurrence, L088, previous-four/five review target met.

Teacher-provided statistics listed `盒` as 3 occurrences, but the approved sentence set contains 2. This still satisfies the previous-three minimum.

## Image Plan

Style reference: L058 approved image style. Use warm modern children's picture-book watercolor, soft pencil linework, warm natural light, gentle expressions, detailed but clean environments, bright warm palette, and phone-readable composition. No visible text, letters, numbers, signage, labels, zhuyin, speech bubbles, arrows, logos, watermarks, or UI.

1. `L093-S01`: A book has fallen under a table; a child crouches or points under the table looking for it. Blank book only.
2. `L093-S02`: A water-edge safety education scene: a small child has accidentally fallen into shallow water, and an adult on the bank immediately reaches out to help. Caring, non-traumatic, no injury or death.
3. `L093-S03`: A plain box sits on a table; a child looks puzzled and points at it as if asking who put it there.
4. `L093-S04`: A child searches near a desk or open school bag because the pencil box has fallen and cannot be found; pencil box may be partly hidden or implied out of sight.
5. `L093-S05`: One child walks away alone while other children remain watching with mild concern or puzzlement; gentle, not scary.

## Audio Plan

Required final audio:

- `/assets/lessons/L093/audio/char-u6389.m4a`
- `/assets/lessons/L093/audio/L093-S01.m4a`
- `/assets/lessons/L093/audio/L093-S02.m4a`
- `/assets/lessons/L093/audio/L093-S03.m4a`
- `/assets/lessons/L093/audio/L093-S04.m4a`
- `/assets/lessons/L093/audio/L093-S05.m4a`
- `/assets/lessons/L093/audio/L093-G02-prefix.m4a`
- `/assets/lessons/L093/audio/L093-G02-suffix.m4a`
- `/assets/lessons/L093/audio/L093-G05-wrong-one.m4a`
- `/assets/lessons/L093/audio/L093-G05-wrong-two.m4a`

Exact AI audio inputs:

- `char-u6389`: `掉`
- `L093-S01`: `我的書掉到桌下了`
- `L093-S02`: `有小孩子掉到水裡了`
- `L093-S03`: `誰把盒子放在桌上`
- `L093-S04`: `我的筆盒掉了找不到了`
- `L093-S05`: `他一個人走掉了`
- `L093-G02-prefix`: `有小孩子`
- `L093-G02-suffix`: `到水裡了`
- `L093-G05-wrong-one`: `他一個人走開了`
- `L093-G05-wrong-two`: `他一個人走來了`

## Stage 4 Design

1. `L093-G01` find-character: S01, target `掉`, missing index `[3]`.
2. `L093-G02` teach-character: S02, target `掉`, targetCharIndex `4`, missing index `[4]`, prefix `有小孩子`, suffix `到水裡了`.
3. `L093-G03` missing-character: S04, target `掉`, missing index `[4]`, options `掉` correct, `放` false, `盒` false.
4. `L093-G04` partial-order: S03, target `盒`, missing indexes `[2,3,4]`, options `盒`, `子`, `放`.
5. `L093-G05` choose-pronunciation: S05, target `掉`; correct `他一個人走掉了`; wrong choices `他一個人走開了`, `他一個人走來了`.

## Production Gate Later

When L088-L092 have been merged into latest `origin/main`:

1. Fetch and rebase this branch.
2. Re-run allowed-character and coverage audits against the real merged learned-character set.
3. Temporarily insert or merge `curriculum-workflow/drafts/L093-draft.json` into `src/curriculum/sample-lessons.json`.
4. Update `docs/CURRICULUM_LEDGER.md` and `public/tools/planner-data.json`.
5. Run `npm run verify`.
6. Mark the registry row `merge-ready` or merge/cleanup it in order.

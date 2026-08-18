# L315 彩 Generation Packet

- Unit kind: normal new-character lesson
- Order: 315
- New character: 彩
- Taiwan zhuyin: 彩 = ㄘㄞˇ
- Title: 彩
- Depends on lessons: none
- Provisional learned chars: none
- Boundary: latest origin/main L001-L314 plus current target
- Source: Teacher-approved Editor handoff for Production B.

## Coverage Targets
- 彩: required >= 3, approved count 4, PASS
- 收: required >= 2, approved count 2, PASS
- 完: required >= 2, approved count 2, PASS
- 記: required >= 2, approved count 2, PASS
- 次: required >= 1, approved count 1, PASS
- 每: required >= 1, approved count 1, PASS

## Approved Sentences

### L315-S01
- text: 每次畫水彩，要記得洗手。
- spokenText: 每次畫水彩要記得洗手
- focusChar: 彩
- displayLines: ["每次畫水彩，","要記得洗手。"]
- imageNotes: Use the recurring protagonist girl identity. She is at a table painting with watercolors, with watercolor tools and paper visible. A sink or mother reminding her to wash hands may be nearby. The image should clearly show painting with watercolor and remembering to wash hands. No written text, numbers, labels, zhuyin, signs, or watermarks.

### L315-S02
- text: 看完書不用收，媽媽要看。
- spokenText: 看完書不用收媽媽要看
- focusChar: 收
- displayLines: ["看完書不用","收，媽媽要看。"]
- imageNotes: Use the recurring protagonist girl and recurring protagonist mother identities. The protagonist girl has finished reading a book, but the book stays out because mother is about to read it next. Show mother reaching for or looking at the same book so the reason for not putting it away is clear. No written text, numbers, labels, zhuyin, signs, or watermarks.

### L315-S03
- text: 彩帶用完後，記得要收好。
- spokenText: 彩帶用完後記得要收好
- focusChar: 彩
- displayLines: ["彩帶用完後，","記得要收好。"]
- imageNotes: Use the recurring protagonist girl identity with either the recurring mother or distinct teacher role depending on the setting. After a simple decorating activity, colorful ribbons are being rolled up or put into a box. The image should clearly show that the ribbon has been used and is now being put away. No written text, numbers, labels, zhuyin, signs, or watermarks.

### L315-S04
- text: 天邊火紅的雲彩真好看。
- spokenText: 天邊火紅的雲彩真好看
- focusChar: 彩
- displayLines: ["天邊火紅的","雲彩真好看。"]
- imageNotes: Outdoor or window-side evening scene. Show fire-red clouds along the far edge of the sky, with the recurring protagonist girl looking up from a safe place. The sky and red clouds should be the visual focus. No written text, numbers, labels, zhuyin, signs, or watermarks.

### L315-S05
- text: 穿上紅衣服，才有好彩頭。
- spokenText: 穿上紅衣服才有好彩頭
- focusChar: 彩
- displayLines: ["穿上紅衣服，","才有好彩頭。"]
- imageNotes: Lunar New Year family setting. Use the recurring protagonist girl and recurring protagonist mother identities. The girl wears red clothing while mother smiles and helps adjust or admire the outfit. The scene may include warm festive atmosphere, but do not include readable couplets, written characters, numbers, labels, zhuyin, signs, or watermarks. The image should make the red clothing and lucky New Year feeling clear for a young child.

## Stage 4 Plan

### L315-G01 find-character
- sentenceId: L315-S01
- targetChar: 彩
- missingIndexes: [4]

### L315-G02 teach-character
- sentenceId: L315-S04
- targetChar: 彩
- targetCharIndex: 6
- missingIndexes: [6]
- prefixText: 天邊火紅的雲
- suffixText: 真好看

### L315-G03 missing-character
- sentenceId: L315-S02
- targetChar: 收
- missingIndexes: [5]
- option L315-G03-A: 收 correct
- option L315-G03-B: 完 wrong
- option L315-G03-C: 彩 wrong

### L315-G04 partial-order
- sentenceId: L315-S03
- targetChar: 彩
- missingIndexes: [0,1,2,3]
- option L315-G04-A: 彩 correct
- option L315-G04-B: 帶 correct
- option L315-G04-C: 用 correct
- option L315-G04-D: 完 correct

### L315-G05 choose-pronunciation
- sentenceId: L315-S05
- targetChar: 彩
- option L315-G05-A: 穿上紅衣服，才有好彩頭。 correct /assets/lessons/L315/audio/L315-S05.m4a
- option L315-G05-B: 穿上紅衣服，才有好看頭。 wrong /assets/lessons/L315/audio/L315-G05-wrong-one.m4a
- option L315-G05-C: 穿上紅衣服，才有好記頭。 wrong /assets/lessons/L315/audio/L315-G05-wrong-two.m4a

## Image Contract

- Use L058 images only as style references; do not copy L058 person identity.
- Use recurring protagonist girl and mother identities from docs/LESSON_VISUAL_CAST_SOP.md when named.
- Keep mother, teacher, generic adults, generic children, recurring protagonist roles visually distinct.
- No visible text, letters, numbers, zhuyin, labels, signs, or watermarks.

## Audio Contract

- Generate standalone charAudio from single character 彩 as /assets/lessons/L315/audio/char-u5f69.m4a.
- Generate sentence audio from spokenText exactly.
- Generate G02 prefix/suffix from exact fragments: 天邊火紅的雲 / 真好看.
- Generate G05 wrong-option audio from exact full wrong texts: 穿上紅衣服，才有好看頭。 / 穿上紅衣服，才有好記頭。.
- Do not cut, splice, mute, patch, or extract production audio.

## Release Boundary

Production owns request, packet, draft, images, audio, Stage 4 audio, timings, and registry row. Release owns src/curriculum/sample-lessons.json, public/tools/planner-data.json, docs/CURRICULUM_LEDGER.md, and registry cleanup after merge.

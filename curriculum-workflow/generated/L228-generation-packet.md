# L228 生成包：半

## Production Scope

- Unit: L228
- Kind: normal lesson
- New character: 半
- Taiwan zhuyin: ㄅㄢˋ
- Production target: lesson-local asset-complete-package
- Release-owned shared state: production JSON insertion, planner export, ledger update, final verify, merge, deploy

## Dependency State

Latest verified `origin/main` production curriculum is complete through L223「錯」.

This package depends on L224「知」, L225「認」, L226「新」, and L227「舊」. Because those dependencies are not in latest `origin/main`, this package uses provisional learned chars:

```json
["知","認","新","舊"]
```

Final package status must be `integrated in playable order-asset-complete` until Release integrates L224-L227 first.

## Allowed Character Boundary

Current target: 半

Allowed-character audit applies to:

- sentence `text`
- `spokenText`
- `displayLines`
- `focusChar`
- Stage 4 option text
- Stage 4 chunk text
- G02 teach-audio fragments
- G05 wrong-choice text

Forbidden display characters include:

```text
只 剩 全 買 東 西 矮 落 短 別 互 相 件 方 字 體 育 嬰 兒 寶 讓 淨 照 離 浴 沙 灘 港 橋 岸 浪
```

Use 「濕」, not 「溼」. Use 「裡」, not 「里」. Use 「游泳」, not 「遊泳」.

## Approved Sentences

1. `這衣服半新不舊，可是還能穿。`
   - spokenText: `這衣服半新不舊可是還能穿`
   - focusChar: `半`
   - displayLines: `["這衣服","半新不舊，","可是還能穿。"]`

2. `我認得一半新同學。`
   - spokenText: `我認得一半新同學`
   - focusChar: `半`
   - displayLines: `["我認得","一半新同學。"]`

3. `媽媽說做事要認真。`
   - spokenText: `媽媽說做事要認真`
   - focusChar: `認`
   - displayLines: `["媽媽說","做事要認真。"]`

4. `這半邊畫錯了，要改一改。`
   - spokenText: `這半邊畫錯了要改一改`
   - focusChar: `半`
   - displayLines: `["這半邊","畫錯了，","要改一改。"]`

5. `不知道這舊車還能不能開。`
   - spokenText: `不知道這舊車還能不能開`
   - focusChar: `舊`
   - displayLines: `["不知道","這舊車","還能不能開。"]`

## Coverage

- 半: 3, require >= 3
- 舊: 2, require >= 2
- 新: 2, require >= 2
- 認: 2, require >= 2
- 知: 1, require >= 1
- 錯: 1, require >= 1
- Han counts: S01 12, S02 8, S03 8, S04 10, S05 11

## Stage 4 Plan

- G01 find-character: L228-S04, target `半`
- G02 teach-character: L228-S02, target `半`, targetCharIndex 4, prefix `我認得一`, suffix `新同學`
- G03 missing-character: L228-S01, target `半`, missingIndexes `[3]`, options `["半","舊","新"]`
- G04 partial-order: L228-S03, chunks `["媽媽說","做事要","認真"]`
- G05 choose-pronunciation: L228-S05
  - correct: `不知道這舊車還能不能開。`
  - wrong-one: `不知道這舊車還能不能走。`
  - wrong-two: `知道這舊車還能不能開。`

Every reviewed sentence is used exactly once.

## Image Rules

- Generate square image / 1:1 composition for all five images.
- Use L058 only as illustration style reference, not character identity.
- Use L154/L162/L163 continuity for the protagonist mother, father, and little girl.
- No written text, numbers, signs, labels, zhuyin, watermarks, brand logos, captions, or readable marks in any image.
- Visual cast:
  - S01: protagonist mother + protagonist little girl
  - S02: protagonist little girl + group of new classmates
  - S03: protagonist mother + protagonist little girl
  - S04: protagonist little girl
  - S05: protagonist father + protagonist little girl

## Audio Rules

- Use repo OpenAI TTS flow only.
- Generate char audio for `半`: `/assets/lessons/L228/audio/char-u534a.m4a`.
- Generate S01-S05 from `spokenText`.
- Generate G02 prefix/suffix from exact fragments.
- Generate G05 wrong-choice audio from exact full wrong text.
- Do not splice, cut, patch, or extract audio.

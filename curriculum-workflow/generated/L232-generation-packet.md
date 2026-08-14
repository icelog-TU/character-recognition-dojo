# L232 生成包：錢

## Production Scope

- Unit: L232
- Kind: normal lesson
- New character: 錢
- Taiwan zhuyin: ㄑㄧㄢˊ
- Production target: complete package
- Latest verified `origin/main`: production curriculum L001-L230「剩」

## Dependency State

L227-L230 are already merged in latest `origin/main`. L231「夠」 is not merged, so this package uses provisional learned chars:

```json
["夠"]
```

Final status must be `ready-blocked-by-dependency` until L231 enters main and the branch is rechecked.

## Allowed Character Boundary

Allowed display characters are latest `origin/main` L001-L230 learned chars plus provisional `夠` plus current target `錢`.

Allowed-character audit applies to sentence text, spokenText, displayLines, focusChar, Stage 4 options, Stage 4 chunks, G02 teach fragments, and G05 wrong-choice text.

Forbidden display characters include:

```text
零 玻 璃 罐 裝 嗎 件 碗 條 買 貴 賣 便 宜 商 店 付 元 角
```

## Approved Sentences

1. `錢只剩一半了。`
   - spokenText: `錢只剩一半了`
   - focusChar: `錢`
   - displayLines: `["錢只剩","一半了。"]`

2. `這點錢夠不夠？`
   - spokenText: `這點錢夠不夠`
   - focusChar: `夠`
   - displayLines: `["這點錢","夠不夠？"]`

3. `舊鞋還能穿。`
   - spokenText: `舊鞋還能穿`
   - focusChar: `舊`
   - displayLines: `["舊鞋","還能穿。"]`

4. `水池裡只剩一點水。`
   - spokenText: `水池裡只剩一點水`
   - focusChar: `剩`
   - displayLines: `["水池裡","只剩一點水。"]`

5. `我把錢包放進新書包。`
   - spokenText: `我把錢包放進新書包`
   - focusChar: `錢`
   - displayLines: `["我把錢包","放進新書包。"]`

## Coverage

- 錢: 3, require >= 3
- 夠: 2, require >= 2
- 剩: 2, require >= 2
- 只: 2, require >= 2
- 半: 1, require >= 1
- 舊: 1, require >= 1
- Han counts: S01 6, S02 6, S03 5, S04 8, S05 9

## Stage 4 Plan

- G01 find-character: L232-S01, target `錢`
- G02 teach-character: L232-S02, target `錢`, targetCharIndex 2, prefix `這點`, suffix `夠不夠`
- G03 missing-character: L232-S05, target `錢`, missingIndexes `[2]`, options `["錢","夠","剩"]`
- G04 partial-order: L232-S04, chunks `["水池裡","只剩","一點水"]`
- G05 choose-pronunciation: L232-S03
  - correct: `舊鞋還能穿。`
  - wrong-one: `新鞋還能穿。`
  - wrong-two: `舊鞋不能穿。`

Every reviewed sentence is used exactly once.

## Image Rules

- Generate square image / 1:1 composition for all five images.
- Use L058 only as illustration style reference, not character identity.
- Use L154/L162/L163 continuity for protagonist mother and protagonist little girl.
- No written text, numbers, signs, labels, zhuyin, watermarks, brand logos, captions, or readable marks in any image.
- Visual cast:
  - S01: protagonist little girl
  - S02: protagonist little girl + protagonist mother
  - S03: protagonist little girl, optional protagonist mother
  - S04: protagonist little girl
  - S05: protagonist little girl, optional protagonist mother

## Audio Rules

- Use repo OpenAI TTS flow only.
- Generate char audio for `錢`: `/assets/lessons/L232/audio/char-u9322.m4a`.
- Generate S01-S05 from `spokenText`.
- Generate G02 prefix/suffix from exact fragments.
- Generate G05 wrong-choice audio from exact full wrong text.
- Do not splice, cut, patch, or extract audio.

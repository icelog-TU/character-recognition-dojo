# L192 電 generation packet

## Unit

- Unit: L192
- Kind: normal lesson
- Title: 電
- New character: 電
- Taiwan zhuyin: ㄉㄧㄢˋ
- Production thread: Production C
- Branch: codex/l192-complete-package

## Dependency state

Latest origin/main production JSON is complete through L190 火. L191 發 is not yet in production JSON, so this package uses provisional learned chars:

- 發

Final package status must remain `ready-blocked-by-dependency` until L191 merges, then Release should rebase/recheck before production integration.

## Allowed character audit

Boundary: L001-L190 learned chars from latest origin/main + provisional 發 + current 電.

Audited fields:

- text
- spokenText
- displayLines
- focusChar
- Stage 4 option text
- G02 teachAudio suffix
- G04 chunks
- G05 wrong-choice text

Result: PASS.

## Approved sentences

### L192-S01

- text: 我打電話給媽媽。
- spokenText: 我打電話給媽媽
- focusChar: 電
- displayLines: ["我打電話", "給媽媽。"]
- image: Child uses a phone or mobile phone to call mother. A warm split scene may show mother answering on the other side. The screen must be blank with no text, numbers, icons, or labels.

### L192-S02

- text: 沒電了，電話不能用。
- spokenText: 沒電了電話不能用
- focusChar: 電
- displayLines: ["沒電了，", "電話不能用。"]
- image: Phone or mobile phone has no power and cannot be used. Child looks at a black blank screen or puts the phone down, using expression to show it cannot be used. No low-battery icon, text, numbers, or labels.

### L192-S03

- text: 電車要出發了。
- spokenText: 電車要出發了
- focusChar: 電
- displayLines: ["電車要", "出發了。"]
- image: Electric train waits at a platform or track and is ready to depart. Passengers stand safely. No car numbers, station names, route signs, text, numbers, or labels.

### L192-S04

- text: 老師說火力能發電。
- spokenText: 老師說火力能發電
- focusChar: 發
- displayLines: ["老師說", "火力能發電。"]
- image: Teacher uses a simple classroom model to show that fire power can generate electricity, such as a safe model flame and a small lamp glowing. No text, numbers, arrow labels, formulas, or blackboard writing.

### L192-S05

- text: 火能發電，又能做飯，真有用。
- spokenText: 火能發電又能做飯真有用
- focusChar: 電
- displayLines: ["火能發電，", "又能做飯，", "真有用。"]
- image: Safe divided scene. One side shows fire power making a lamp glow or a simple generator-like setup. The other side shows an adult using a safe stove flame to cook rice or food, with a child nearby understanding fire is useful. No text, numbers, or labels; adult supervision and safe fire source required.

## Stage 4 plan

### G01 find-character

- sentenceId: L192-S01
- targetChar: 電
- reason: 「電話」是本課核心生活詞，目標字清楚。

### G02 teach-character

- sentenceId: L192-S03
- targetChar: 電
- targetCharIndex: 0
- teachAudio prefix: omitted
- teachAudio suffix exact text: 車要出發了

### G03 missing-character

- sentenceId: L192-S02
- targetChar: 電
- app-compatible missingIndexes: [1,3]
- options: ["電","發","火"]
- note: The app indexes Han chars only. Handoff [1,4] counts punctuation; Han-only [1,3] hides both 電 characters in 沒電了電話不能用.

### G04 partial-order

- sentenceId: L192-S04
- chunks:
  1. 老師說
  2. 火力能
  3. 發電

### G05 choose-pronunciation

- correct sentenceId: L192-S05
- correct text: 火能發電，又能做飯，真有用。
- wrong-one text: 火能發熱，又能做飯，真有用。
- wrong-two text: 火能發電，又能打球，真有用。
- Wrong-choice audio must be generated from each full wrong sentence.

## Asset requirements

- Images: square image / 1:1 composition, WebP, longest edge <= 1024 px, target <= 250 KB each, hard max <= 400 KB each.
- Image style anchors: public/assets/lessons/L058/images/L058-S01.webp, L058-S02.webp, L058-S03.webp.
- Audio: repo OpenAI TTS only, processed by npm run assets:audio, aligned by npm run assets:align:ai.
- Char audio: public/assets/lessons/L192/audio/char-u96fb.m4a.
- G02 suffix and G05 wrong choices are standalone TTS files, not spliced audio.

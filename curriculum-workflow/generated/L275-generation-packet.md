# L275 Generation Packet

- Unit: L275
- Title: 住
- New character: 住 (ㄓㄨˋ)
- Branch: codex/l275-complete-package
- Release note: Release verified and merged L275 from origin/codex/l275-complete-package against latest origin/main. Dependencies are satisfied in playable order through L277; R001-R016 are already shipped.
- Production boundary: L270 精; review R014
- Provisional learned chars: ["變","差","緊","卡"]
- Dependencies: R015, R016, L271, L272, L273, L274
- Missing dependencies observed at source generation: R015, R016, L271, L272, L273, L274

## Approved Sentences

### L275-S01
- text: 我住在海邊，天天看船。
- spokenText: 我住在海邊天天看船
- focusChar: 住
- displayLines: 我住在海邊， / 天天看船。
- imageSrc: /assets/lessons/L275/images/L275-S01.webp
- audioSrc: /assets/lessons/L275/audio/L275-S01.m4a
- imageNotes: 主角小女孩住在海邊，從家附近看海上的船。畫面要有海邊住家、主角小女孩、遠處的船；不可有門牌、文字、數字、船名、標籤或注音。

### L275-S02
- text: 盒子卡住了，打不開。
- spokenText: 盒子卡住了打不開
- focusChar: 住
- displayLines: 盒子卡住了， / 打不開。
- imageSrc: /assets/lessons/L275/images/L275-S02.webp
- audioSrc: /assets/lessons/L275/audio/L275-S02.m4a
- imageNotes: 主角小女孩在桌邊想打開一個盒子，但盒子卡住了打不開。盒子不可有文字、數字、標籤或注音。

### L275-S03
- text: 門關太緊，卡住了。
- spokenText: 門關太緊卡住了
- focusChar: 住
- displayLines: 門關太緊， / 卡住了。
- imageSrc: /assets/lessons/L275/images/L275-S03.webp
- audioSrc: /assets/lessons/L275/audio/L275-S03.m4a
- imageNotes: 主角爸爸在家門或房門旁試著推門或拉門，門關太緊卡住了。畫面要清楚是門卡住但安全、不驚嚇；不可有門牌、文字、數字、標籤或注音。

### L275-S04
- text: 精神緊張，睡得很差。
- spokenText: 精神緊張睡得很差
- focusChar: 緊
- displayLines: 精神緊張， / 睡得很差。
- imageSrc: /assets/lessons/L275/images/L275-S04.webp
- audioSrc: /assets/lessons/L275/audio/L275-S04.m4a
- imageNotes: 主角小女孩晚上躺在床上，因為精神緊張睡得很差，表情有點擔心但不恐怖。主角媽媽可在旁邊溫和安撫；不可有文字、數字、標籤或注音。

### L275-S05
- text: 走到一半，天氣變差，只好回頭。
- spokenText: 走到一半天氣變差只好回頭
- focusChar: 變
- displayLines: 走到一半， / 天氣變差， / 只好回頭。
- imageSrc: /assets/lessons/L275/images/L275-S05.webp
- audioSrc: /assets/lessons/L275/audio/L275-S05.m4a
- imageNotes: 主角小女孩和主角爸爸在爬山走山路，走到一半時天氣變差，天空變黑或開始有風雨，他們只好安全回頭。畫面要清楚是山路爬山情境；不可有文字、數字、路牌、標籤或注音。

## Stage 4 Fixed Sentence Games

### L275-G01
- type: find-character
- sentenceId: L275-S02
- targetChar: 住
- missingIndexes: 3

### L275-G02
- type: teach-character
- sentenceId: L275-S01
- targetChar: 住
- targetCharIndex: 1
- missingIndexes: 1
- teachAudio: prefix=/assets/lessons/L275/audio/L275-G02-prefix.m4a, suffix=/assets/lessons/L275/audio/L275-G02-suffix.m4a

### L275-G03
- type: missing-character
- sentenceId: L275-S03
- targetChar: 住
- missingIndexes: 5
- options: L275-G03-A:住 (correct) | L275-G03-B:卡 | L275-G03-C:緊

### L275-G04
- type: partial-order
- sentenceId: L275-S05
- targetChar: 變
- missingIndexes: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
- options: L275-G04-A:走到一半 (correct) | L275-G04-B:天氣變差 (correct) | L275-G04-C:只好回頭 (correct)
- chunks: 1. 走到一半 | 2. 天氣變差 | 3. 只好回頭

### L275-G05
- type: choose-pronunciation
- sentenceId: L275-S04
- targetChar: 緊
- options: L275-G05-A:精神緊張，睡得很差。 (correct) | L275-G05-B:精神很好，睡得很差。 | L275-G05-C:精神緊張，睡得很好。

## Production Notes

- Stage 4 G03 missingIndexes corrected to [5] because the target character is at 0-based Han index 5 in L275-S03.
- All image prompts must use square image / 1:1 composition and no visible text, numbers, labels, watermarks, signs, door plates, or boat names.
- L058 is style-only, not a character appearance reference. Main family continuity follows LESSON_VISUAL_CAST_SOP and ledger.
- G03 index correction: 門0 關1 太2 緊3 卡4 住5 了6; target 住 uses missingIndexes [5].

## Production QA

- Release note: Release verified and merged L275 from origin/codex/l275-complete-package against latest origin/main. Dependencies are satisfied in playable order through L277; R001-R016 are already shipped.
- Shared-state handling: sample-lessons.json was temporarily touched for audio/alignment and restored; L275 is not inserted in production JSON.
- Image generation: 5 square WebP images, all 1024x1024, total 622.6 KB, largest L275-S01.webp 159.8 KB.
- Visual cast: L058 used only as style reference; protagonist girl/father/mother match family continuity; no readable text/numbers/labels observed in QA montage.
- Audio generation: npm run ai:audio -- --lesson L275 wrote 10 OpenAI TTS draft files; npm run assets:audio -- --lesson L275 converted 10 m4a files.
- Audio format: all 10 m4a files are AAC, 44100 Hz, mono.
- Alignment: npm run assets:align:ai -- --lesson L275 aligned S01-S05; short pause-adjacent timings were manually smoothed without changing text.
- CharTimings: L275-S01 9/9, L275-S02 8/8, L275-S03 7/7, L275-S04 8/8, L275-S05 12/12.
- Stage 4 audio: G02 prefix/suffix generated from exact fragments; G05 wrong-one/wrong-two generated from complete wrong texts.
- validate:production: PASS.
- npm run verify: PASS; expected warning that public/assets/lessons/L275 exists but is not in production curriculum.

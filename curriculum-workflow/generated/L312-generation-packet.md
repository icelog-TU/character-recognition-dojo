# L312 記 生成資料包

## 課程需求

- 課程：L312
- 順序：312
- 新字：記
- 注音：記=ㄐㄧˋ
- 目標句數：5
- 依賴：L311 次
- provisionalLearnedChars: ["次"]
- 狀態：dependency-blocked；L311 進 main 前不可進 production JSON。

## 已學字邊界

- 最新 origin/main production boundary: L001-L310
- 平行備課暫定已學字：次
- 本課新字：記
- learner-facing allowed-character audit: PASS for text, spokenText, displayLines, focusChar, and Stage 4 option text.

## Approved Final Sentences

1. text: 每次飯前，要記得洗手。
   spokenText: 每次飯前要記得洗手
   focusChar: 記
   displayLines: ["每次飯前，","要記得洗手。"]
   imageNotes: 主角小女孩在家中飯前洗手，餐桌上可以有飯菜，主角媽媽在旁邊溫和提醒。畫面要清楚呈現飯前記得洗手；不可有文字、數字、標籤。

2. text: 每天都要記得澆花。
   spokenText: 每天都要記得澆花
   focusChar: 記
   displayLines: ["每天都要","記得澆花。"]
   imageNotes: 主角小女孩在家門口或陽台幫忙澆花，花盆和花要清楚，主角媽媽可以在旁邊看著。畫面要呈現每天都記得照顧花、幫花澆水的 routine，但不可用日曆、文字、數字或標籤。

3. text: 媽媽生病，這次換我照顧媽媽。
   spokenText: 媽媽生病這次換我照顧媽媽
   focusChar: 照
   displayLines: ["媽媽生病，","這次換我","照顧媽媽。"]
   imageNotes: 主角媽媽生病在床上休息，主角小女孩在旁邊照顧媽媽，例如遞水或陪在床邊。畫面要清楚呈現媽媽生病、孩子照顧媽媽；不可有藥品文字、數字、標籤，也不要醫療恐怖感。

4. text: 爸爸又忘記戴眼鏡出門。
   spokenText: 爸爸又忘記戴眼鏡出門
   focusChar: 忘
   displayLines: ["爸爸又忘記","戴眼鏡出門。"]
   imageNotes: 主角爸爸正要出門或已經走到門口，桌上或門邊清楚放著他的眼鏡，主角小女孩或主角媽媽看見後提醒他。畫面要清楚呈現爸爸忘記戴眼鏡就出門；不可有文字、數字、門牌或標籤。

5. text: 下次不要忘記帶書包。
   spokenText: 下次不要忘記帶書包
   focusChar: 記
   displayLines: ["下次不要","忘記帶書包。"]
   imageNotes: 主角小女孩在家門口準備上學，書包放在旁邊或被她拿起來，主角媽媽在旁邊提醒。畫面要清楚呈現下次不要忘記帶書包；不可有文字、數字、校名、標籤。

## Coverage Check

- Current target L312「記」appears 4 times, require >=3, PASS.
- L311「次」appears 3 times, require >=2, PASS.
- L310「每」appears 2 times, require >=2, PASS.
- L309「忘」appears 2 times, require >=2, PASS.
- L308「顧」appears 1 time, require >=1, PASS.
- L307「照」appears 1 time, require >=1, PASS.
- Sentence Han counts: S01 9, S02 8, S03 12, S04 10, S05 9.
- Any longer-than-12-Han sentence: no.

## Stage 4 Plan

- L312-G01 find-character: sentenceId L312-S04, targetChar 記.
- L312-G02 teach-character: sentenceId L312-S01, targetChar 記, targetCharIndex 5, prefix 每次飯前要, suffix 得洗手.
- L312-G03 missing-character: sentenceId L312-S05, targetChar 記, missingIndexes [5], options ["記","次","每"].
- L312-G04 partial-order: sentenceId L312-S03, chunks ["媽媽生病","這次換我","照顧媽媽"].
- L312-G05 choose-pronunciation: correct 每天都要記得澆花。; wrong-one 每天都要記得洗手。; wrong-two 每天都要記得帶水。

## Image Requirements

- Every prompt must include square image / 1:1 composition.
- Use L058 style anchors only as style reference; L058 is not character appearance reference.
- Follow protagonist family continuity from L154/L162/L163 and LESSON_VISUAL_CAST_SOP.
- No visible text, letters, numbers, Chinese characters, zhuyin, signs, labels, logos, brands, subtitles, readable marks, or watermarks.
- Final images must be WebP, longest edge <=1024px, target <=250KB, hard maximum <=400KB.

## Audio Requirements

- Use repo OpenAI audio flow only.
- charAudio must be standalone OpenAI TTS from single target char 記, intended reading ㄐㄧˋ, filename char-u8a18.m4a.
- S01-S05 sentence audio from spokenText.
- G02 prefix/suffix from exact fragments: prefix 每次飯前要; suffix 得洗手.
- G05 wrong-choice audio from complete wrong text: 每天都要記得洗手。 / 每天都要記得帶水。
- Do not splice, cut, mute, patch, or extract production audio.

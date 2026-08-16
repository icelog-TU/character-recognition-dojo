# L308 顧 生成資料包

## 課程需求

- 課程：L308
- 順序：308
- 新字：顧
- 注音：顧=ㄍㄨˋ
- 目標句數：5
- 依賴：L306 澆, L307 照
- provisionalLearnedChars: ["澆","照"]
- 狀態：dependency-blocked；L306/L307 進 main 前不可進 production JSON。

## 已學字邊界

- 最新 origin/main production boundary: L001-L305
- 平行備課暫定已學字：澆 照
- 本課新字：顧
- learner-facing allowed-character audit: PASS for text, spokenText, displayLines, focusChar, and Stage 4 option text.

## Approved Final Sentences

1. text: 我幫忙照顧小狗。
   spokenText: 我幫忙照顧小狗
   focusChar: 顧
   displayLines: ["我幫忙","照顧小狗。"]
   imageNotes: 主角小女孩在家裡幫主角媽媽照顧小狗，可能正在給小狗水或陪小狗坐著。畫面要清楚呈現幫忙照顧小狗；不可有文字、數字、標籤。

2. text: 只顧著玩，卻沒去澆花。
   spokenText: 只顧著玩卻沒去澆花
   focusChar: 顧
   displayLines: ["只顧著玩，","卻沒去澆花。"]
   imageNotes: 主角小女孩只顧著玩玩具，旁邊的花盆還沒有澆水，主角媽媽在旁邊提醒。畫面要清楚呈現只顧著玩、卻沒去澆花；不可有文字、數字、標籤。

3. text: 媽媽照顧種在門口的花。
   spokenText: 媽媽照顧種在門口的花
   focusChar: 顧
   displayLines: ["媽媽照顧","種在門口","的花。"]
   imageNotes: 主角媽媽在家門口照顧種在門口的花，主角小女孩可在旁邊看。畫面要清楚呈現媽媽照顧門口的花；不可有門牌、文字、數字、標籤。

4. text: 種花前，先澆一點水在土上。
   spokenText: 種花前先澆一點水在土上
   focusChar: 澆
   displayLines: ["種花前，","先澆一點水","在土上。"]
   imageNotes: 主角爸爸或主角媽媽在種花前，先把一點水澆在土上，主角小女孩在旁邊看。畫面要清楚呈現種花前先澆水在土上；不可有文字、數字、標籤。

5. text: 小狗在泥土上玩。
   spokenText: 小狗在泥土上玩
   focusChar: 土
   displayLines: ["小狗在","泥土上玩。"]
   imageNotes: 家裡的小狗在戶外泥土上玩，主角小女孩在旁邊看。畫面要清楚呈現小狗在泥土上玩；不要過度髒亂，不可有文字、數字、標籤。

## Coverage Check

- Current target L308「顧」appears 3 times, require >=3, PASS.
- L307「照」appears 2 times, require >=2, PASS.
- L306「澆」appears 2 times, require >=2, PASS.
- L305「種」appears 2 times, require >=2, PASS.
- L304「土」appears 2 times, require >=1, PASS.
- L303「泥」appears 1 time, require >=1, PASS.
- Sentence Han counts: S01 7, S02 9, S03 10, S04 11, S05 7.
- Any longer-than-12-Han sentence: no.

## Stage 4 Plan

- L308-G01 find-character: sentenceId L308-S01, targetChar 顧.
- L308-G02 teach-character: sentenceId L308-S03, targetChar 顧, targetCharIndex 3, prefix 媽媽照, suffix 種在門口的花.
- L308-G03 missing-character: sentenceId L308-S02, targetChar 顧, missingIndexes [1], options ["顧","照","澆"].
- L308-G04 partial-order: sentenceId L308-S04, chunks ["種花前","先澆一點水","在土上"].
- L308-G05 choose-pronunciation: correct 小狗在泥土上玩。; wrong-one 小狗在泥土上睡。; wrong-two 小狗在泥土上跑。

## Image Requirements

- Every prompt must include square image / 1:1 composition.
- Use L058 style anchors only as style reference; L058 is not character appearance reference.
- Follow protagonist family continuity from L154/L162/L163 and LESSON_VISUAL_CAST_SOP.
- No visible text, letters, numbers, Chinese characters, zhuyin, signs, labels, logos, brands, subtitles, readable marks, or watermarks.
- Final images must be WebP, longest edge <=1024px, target <=250KB, hard maximum <=400KB.

## Audio Requirements

- Use repo OpenAI audio flow only.
- charAudio must be standalone OpenAI TTS from single target char 顧, intended reading ㄍㄨˋ, filename char-u9867.m4a.
- S01-S05 sentence audio from spokenText.
- G02 prefix/suffix from exact fragments: prefix 媽媽照; suffix 種在門口的花.
- G05 wrong-choice audio from complete wrong text: 小狗在泥土上睡。 / 小狗在泥土上跑。
- Do not splice, cut, mute, patch, or extract production audio.

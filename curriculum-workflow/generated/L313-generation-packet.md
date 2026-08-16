# L313 Generation Packet

- Unit: L313
- New character: 完（ㄨㄢˊ）
- Title: 完
- Status: ready-blocked-by-dependency
- Depends on: L312
- Provisional learned chars: ["記"]
- Allowed-character audit: PASS
- Boundary: latest origin/main L001-L311 learned chars + provisionalLearnedChars ["記"] + current new char「完」
- Audited learner-facing fields: text, spokenText, displayLines, focusChar, Stage 4 option text

## Approved Sentences

1. 每次飯前，要記得洗手。
   - spokenText: 每次飯前要記得洗手
   - focusChar: 記
   - displayLines: ["每次飯前，","要記得洗手。"]
   - Han count: 9
   - imageNotes: 主角小女孩在家中飯前洗手，餐桌上可以有飯菜，主角媽媽在旁邊溫和提醒。畫面要清楚呈現飯前記得洗手；不可有文字、數字、標籤。

2. 玩具玩完，要記得放回盒子。
   - spokenText: 玩具玩完要記得放回盒子
   - focusChar: 完
   - displayLines: ["玩具玩完，","要記得放回盒子。"]
   - Han count: 11
   - imageNotes: 主角小女孩在家中地板或桌邊玩玩具，玩完後把玩具放回沒有文字的盒子裡，主角媽媽可以在旁邊提醒。畫面要清楚呈現玩具玩完要放回盒子；不可有文字、數字、標籤。

3. 只顧著下棋，忘了吃飯。
   - spokenText: 只顧著下棋忘了吃飯
   - focusChar: 顧
   - displayLines: ["只顧著下棋，","忘了吃飯。"]
   - Han count: 9
   - imageNotes: 主角小女孩和主角爸爸或主角媽媽在家中下棋，旁邊餐桌上飯菜已經準備好但還沒吃。畫面要清楚呈現只顧著下棋、忘了吃飯；棋盤不要有文字、數字或標籤。

4. 這本書太長，還沒看完。
   - spokenText: 這本書太長還沒看完
   - focusChar: 完
   - displayLines: ["這本書太長，","還沒看完。"]
   - Han count: 9
   - imageNotes: 主角小女孩坐在家中看一本很厚的書，書還有很多頁沒看完，表情專心但有點累。畫面要清楚呈現書很長、還沒看完；書頁不可有可讀文字、數字或標籤。

5. 每次用完筆，要放回筆盒。
   - spokenText: 每次用完筆要放回筆盒
   - focusChar: 完
   - displayLines: ["每次用完筆，","要放回筆盒。"]
   - Han count: 10
   - imageNotes: 主角小女孩在桌前畫畫或做手工，用完筆後把筆放回沒有文字的筆盒裡，桌上可有紙張和幾支筆。畫面要清楚呈現用完筆要放回筆盒；不可有文字、數字、標籤。

## Stage 4 Plan

- G01 find-character: L313-S04, target 完
- G02 teach-character: L313-S02, target 完, targetCharIndex 3, prefix「玩具玩」, suffix「要記得放回盒子」
- G03 missing-character: L313-S05, target 完, missingIndexes [3], options 完/記/次
- G04 partial-order: L313-S01, chunks 每次飯前 / 要記得 / 洗手
- G05 choose-pronunciation: L313-S03, wrong choices must use full regenerated audio

## Image Requirements

All image prompts in the draft specify square image / 1:1 composition, L058 style anchor only, recurring family continuity, safe centered composition, and no text/numbers/labels/zhuyin/watermarks.

## Audio Requirements

Use repo OpenAI TTS flow only. Char audio: /assets/lessons/L313/audio/char-u5b8c.m4a. G02 prefix/suffix and G05 wrong-choice audio must be independently generated from exact text fragments/full wrong texts.

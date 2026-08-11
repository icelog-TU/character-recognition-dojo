# L197 Complete Package Generation Packet

Unit: L197
Kind: normal lesson
New char: 陽
Zhuyin: 陽 ㄧㄤˊ
Title: 陽
Status at package start: dependency-blocked because origin/main contains production lessons through L193 only.
Depends on: L194, L195, L196
Provisional learned chars: 明 光 亮

## Allowed Character Boundary

origin/main production JSON through L193「生」 plus provisional learned chars 明 光 亮 plus current target 陽
Audit fields: sentence text, spokenText, displayLines, focusChar, Stage 4 targets/options/chunks, and G05 wrong text.
Disallowed/caution chars: 月 照 射 影 暗 線 清 楚 曬 暖 晒 台 臺

## Approved Sentences

### L197-S01
- text: 太陽和電燈都會發光。
- spokenText: 太陽和電燈都會發光
- focusChar: 陽
- displayLines: ["太陽和電燈","都會發光。"]
- imageNotes: 畫面同時有白天的太陽和一盞亮著的電燈，兩者都在發光。構圖要清楚比較太陽與電燈都會發光；不可有文字、數字、標籤、品牌或注音。

### L197-S02
- text: 窗外的陽光很明亮。
- spokenText: 窗外的陽光很明亮
- focusChar: 陽
- displayLines: ["窗外的陽光","很明亮。"]
- imageNotes: 室內窗邊有明亮的陽光照進來，孩子或家人看向窗外。畫面重點是窗外陽光明亮；不可有文字、數字、招牌、標籤或注音。

### L197-S03
- text: 同學家的小狗出生了。
- spokenText: 同學家的小狗出生了
- focusChar: 生
- displayLines: ["同學家的小狗","出生了。"]
- imageNotes: 同學家裡或溫暖室內，小狗媽媽旁邊有剛出生的小狗寶寶，孩子在安全距離外溫和觀看。畫面要可愛溫和，不呈現生產過程或血腥內容；不可有文字、數字或標籤。

### L197-S04
- text: 太陽一出來，天就亮了。
- spokenText: 太陽一出來天就亮了
- focusChar: 陽
- displayLines: ["太陽一出來，","天就亮了。"]
- imageNotes: 清晨太陽從地平線或山邊出來，天空變亮。畫面要清楚呈現太陽出來後天亮的變化；不可有文字、數字、標籤或注音。

### L197-S05
- text: 老師說的話，我有點不明白。
- spokenText: 老師說的話我有點不明白
- focusChar: 明
- displayLines: ["老師說的話，","我有點不明白。"]
- imageNotes: 教室中老師正在說話，孩子露出有點困惑的表情，像是不太明白老師說的話。畫面要清楚呈現老師說話與孩子不明白；不可有黑板文字、對話框、數字或標籤。

## Stage 4 Fixed Games

### G01 find-character
{
  "type": "find-character",
  "sentenceId": "L197-S02",
  "targetChar": "陽",
  "reason": "「陽光」是本課核心用法，目標字清楚。"
}

### G02 teach-character
{
  "type": "teach-character",
  "sentenceId": "L197-S04",
  "targetChar": "陽",
  "targetCharIndex": 1,
  "prefixText": "太",
  "suffixText": "一出來天就亮了"
}

### G03 missing-character
{
  "type": "missing-character",
  "sentenceId": "L197-S01",
  "targetChar": "陽",
  "missingIndexes": [
    1
  ],
  "options": [
    "陽",
    "光",
    "亮"
  ]
}

### G04 partial-order
{
  "type": "partial-order",
  "sentenceId": "L197-S05",
  "chunks": [
    "老師說的話",
    "我有點",
    "不明白"
  ]
}

### G05 choose-pronunciation
{
  "type": "choose-pronunciation",
  "sentenceId": "L197-S03",
  "correctText": "同學家的小狗出生了。",
  "wrongOneText": "同學家的小狗出門了。",
  "wrongTwoText": "同學家的小狗跑走了。"
}

## Asset Requirements

- Images: five square image / 1:1 composition WebP files under public/assets/lessons/L197/images/. Longest edge <= 1024 px, target <= 250 KB, hard max <= 400 KB. No visible text, numbers, signs, labels, zhuyin, logos, brands, or watermarks.
- Audio: use repo OpenAI flow only. Generate S01-S05 from spokenText, char-u967d.m4a for the single character, G02 prefix/suffix from exact fragments, and G05 wrong-choice audio from full wrong sentences.
- Final audio: AAC, 44100 Hz, mono. Draft charTimings length must equal each sentence Han count.

## Expected Final Status

Because L194-L196 are not in origin/main at package start, this package is ready-blocked-by-dependency unless Release has merged those lessons before final recheck. Do not leave provisional production JSON changes in src/curriculum/sample-lessons.json.

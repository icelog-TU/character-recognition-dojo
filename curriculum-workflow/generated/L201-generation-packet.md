# L201 Complete Package Generation Packet

Unit: L201
Kind: normal lesson
New char: 星
Zhuyin: 星 ㄒㄧㄥ
Title: 星
Status at package start: dependency-blocked because origin/main contains production lessons through L199 only.
Depends on: L200
Provisional learned chars: 長

## Allowed Character Boundary

origin/main production JSON through L199「影」 plus provisional learned char 長 plus current target 星
Audit fields: sentence text, spokenText, displayLines, focusChar, Stage 4 targets/options/chunks, and G05 wrong text.
Disallowed/caution chars: 空 夜 宇 宙 銀 河 流 行 日 耀 閃 顆 短

## Approved Sentences

### L201-S01
- text: 書上說，太陽是很大的星星。
- spokenText: 書上說太陽是很大的星星
- focusChar: 星
- displayLines: ["書上說，","太陽是很大的","星星。"]
- imageNotes: 孩子看著一本沒有可讀文字的書，書中用圖像表現太陽和星星的關係，旁邊可有太陽和星星的圖示但不可有文字。畫面要清楚傳達「書上說太陽是很大的星星」；不可有文字、數字、標籤或注音。

### L201-S02
- text: 月光比星光更亮。
- spokenText: 月光比星光更亮
- focusChar: 星
- displayLines: ["月光比","星光更亮。"]
- imageNotes: 夜空中有月亮和星星，月光比星光更亮。畫面要清楚呈現月光較亮、星光較小較弱的對比；不可有文字、數字、標籤或注音。

### L201-S03
- text: 火星比水星還大一點。
- spokenText: 火星比水星還大一點
- focusChar: 星
- displayLines: ["火星比水星","還大一點。"]
- imageNotes: 畫面顯示火星和水星兩個行星，火星稍微比較大，水星稍微比較小。可以用無文字的大小對比表現，不可有星球名稱文字、數字、標籤或注音。

### L201-S04
- text: 月光下的樹影好長。
- spokenText: 月光下的樹影好長
- focusChar: 長
- displayLines: ["月光下的","樹影好長。"]
- imageNotes: 夜晚月光下，一棵樹在地上形成很長的樹影。畫面要溫和、不恐怖，清楚呈現月光和長長的樹影；不可有文字、數字、標籤或注音。

### L201-S05
- text: 這電影很長，可是很好看。
- spokenText: 這電影很長可是很好看
- focusChar: 影
- displayLines: ["這電影很長，","可是很好看。"]
- imageNotes: 家人或孩子在看一部很長但很好看的電影，畫面可有電視或投影畫面與觀眾，但螢幕上不可有可讀文字、字幕、片名、數字、品牌或標籤。

## Stage 4 Fixed Games

### G01 find-character
{
  "type": "find-character",
  "sentenceId": "L201-S03",
  "targetChar": "星",
  "reason": "「火星／水星」是本課核心用法，目標字清楚。"
}

### G02 teach-character
{
  "type": "teach-character",
  "sentenceId": "L201-S02",
  "targetChar": "星",
  "targetCharIndex": 3,
  "prefixText": "月光比",
  "suffixText": "光更亮"
}

### G03 missing-character
{
  "type": "missing-character",
  "sentenceId": "L201-S01",
  "targetChar": "星",
  "missingIndexes": [
    9,
    10
  ],
  "options": [
    "星",
    "月",
    "影"
  ]
}

### G04 partial-order
{
  "type": "partial-order",
  "sentenceId": "L201-S04",
  "chunks": [
    "月光下的",
    "樹影",
    "好長"
  ]
}

### G05 choose-pronunciation
{
  "type": "choose-pronunciation",
  "sentenceId": "L201-S05",
  "correctText": "這電影很長，可是很好看。",
  "wrongOneText": "這電影很難，可是很好看。",
  "wrongTwoText": "這電影很長，可是很難看。"
}

## Asset Requirements

- Images: five square image / 1:1 composition WebP files under public/assets/lessons/L201/images/. Longest edge <= 1024 px, target <= 250 KB, hard max <= 400 KB. No visible text, numbers, signs, labels, zhuyin, logos, brands, movie titles, subtitles, poster text, or watermarks.
- Audio: use repo OpenAI flow only. Generate S01-S05 from spokenText, char-u661f.m4a for the single character, G02 prefix/suffix from exact fragments, and G05 wrong-choice audio from full wrong sentences.
- Final audio: AAC, 44100 Hz, mono. Draft charTimings length must equal each sentence Han count.

## Expected Final Status

Because L200 is not in origin/main at package start, this package is ready-blocked-by-dependency unless Release has merged L200 before final recheck. Do not leave provisional production JSON changes in src/curriculum/sample-lessons.json.

# L326 Generation Packet

## Production Boundary
- Unit: L326
- Kind: normal lesson
- New character: 線
- Zhuyin: ㄒㄧㄢˋ
- Title: 線
- Depends on lessons: L323, L324, L325
- Provisional learned chars: 方, 圖, 向
- Status target: dependency-blocked asset-complete package; Release owns ordered integration.

## Coverage Targets
- 線: 6
- 向: 2
- 圖: 2
- 方: 2
- 東: 1
- 西: 1

## Final Approved Sentence Records

### L326-S01
- text: 地圖上，這條路線是東西向。
- spokenText: 地圖上這條路線是東西向
- focusChar: 線
- displayLines:
  - 地圖上，
  - 這條路線
  - 是東西向。
- imageNotes: 主角小女孩和主角爸爸一起看一張簡單地圖。地圖上有一條明顯的路線橫向穿過，從東邊連到西邊。爸爸指著那條路線，畫面要表現「這條路線是東西向」。

### L326-S02
- text: 這條紅線，是做什麼用的？
- spokenText: 這條紅線是做什麼用的
- focusChar: 線
- displayLines:
  - 這條紅線，
  - 是做什麼
  - 用的？
- imageNotes: 主角小女孩看著一個玩具上的紅線，露出疑惑表情，像是在問「這條紅線是做什麼用的？」玩具可以是玩具車跑道、玩具板、拼裝玩具或遊戲盤；紅線要明顯，但不要用文字標籤。旁邊可以有主角爸爸或主角媽媽準備解釋。

### L326-S03
- text: 用黑線畫方盒子，綠線畫圓球。
- spokenText: 用黑線畫方盒子綠線畫圓球
- focusChar: 線
- displayLines:
  - 用黑線畫
  - 方盒子，
  - 綠線畫圓球。
- imageNotes: 桌上有白紙和畫筆，主角小女孩正在畫圖：用黑色線條畫一個方盒子，用綠色線條畫一顆圓球。畫面要同時看得出黑線、綠線、方盒子、圓球。

### L326-S04
- text: 圖上那條線，方向要改一下。
- spokenText: 圖上那條線方向要改一下
- focusChar: 線
- displayLines:
  - 圖上那條線，
  - 方向
  - 要改一下。
- imageNotes: 教室場景，老師和主角小女孩在佈告欄前看一張簡單路線圖，圖上有房子、學校和一條箭頭線。那條箭頭線方向畫反了，老師指著線，主角小女孩拿筆準備把方向改一下。畫面重點是「圖上的線方向不對，需要改」。

### L326-S05
- text: 把電線收好，不要被卡住。
- spokenText: 把電線收好不要被卡住
- focusChar: 線
- displayLines:
  - 把電線收好，
  - 不要被卡住。
- imageNotes: 家中或教室角落，有一條電線散在地上，可能會卡住腳或門。主角媽媽或老師提醒主角小女孩把電線收好；畫面要清楚表現整理電線、避免被卡住，不要呈現危險用電行為。

## Stage 4 Final Records

### L326-G01
- type: find-character
- sentenceId: L326-S02
- targetChar: 線
- targetCharIndex: 3
- prompt: 找到「線」。
- missingIndexes: [3]
- options:
  - id=L326-G01-A; text=線; correct=true
  - id=L326-G01-B; text=條; correct=false
  - id=L326-G01-C; text=紅; correct=false
  - id=L326-G01-D; text=用; correct=false

### L326-G02
- type: teach-character
- sentenceId: L326-S01
- targetChar: 線
- targetCharIndex: 6
- prompt: 聽一聽，幫忙說出這個字。
- missingIndexes: [6]
- teachAudio prefixText: 地圖上這條路
- teachAudio suffixText: 是東西向
- teachAudio prefixSrc: /assets/lessons/L326/audio/L326-G02-prefix.m4a
- teachAudio suffixSrc: /assets/lessons/L326/audio/L326-G02-suffix.m4a

### L326-G03
- type: missing-character
- sentenceId: L326-S05
- targetChar: 線
- targetCharIndex: 2
- prompt: 選出少掉的字。
- missingIndexes: [2]
- options:
  - id=L326-G03-A; text=線; correct=true
  - id=L326-G03-B; text=電; correct=false
  - id=L326-G03-C; text=收; correct=false

### L326-G04
- type: partial-order
- sentenceId: L326-S04
- targetChar: 線
- prompt: 把字排回句子裡。
- missingIndexes: [4, 5, 6, 7]
- options:
  - id=L326-G04-A; text=線; correct=true; correctOrder=0
  - id=L326-G04-B; text=方; correct=true; correctOrder=1
  - id=L326-G04-C; text=向; correct=true; correctOrder=2
  - id=L326-G04-D; text=要; correct=true; correctOrder=3
- correctOrder: [L326-G04-A, L326-G04-B, L326-G04-C, L326-G04-D]

### L326-G05
- type: choose-pronunciation
- sentenceId: L326-S03
- targetChar: 線
- prompt: 選出聽到的句子。
- options:
  - id=L326-G05-A; text=用黑線畫方盒子，綠線畫圓球。; correct=true; audioSrc=/assets/lessons/L326/audio/L326-S03.m4a; sentenceId=L326-S03
  - id=L326-G05-B; text=用紅線畫方盒子，綠線畫圓球。; correct=false; audioSrc=/assets/lessons/L326/audio/L326-G05-wrong-one.m4a
  - id=L326-G05-C; text=用黑線畫圓盒子，綠線畫圓球。; correct=false; audioSrc=/assets/lessons/L326/audio/L326-G05-wrong-two.m4a

## Image Production Requirements
- Mandatory side-by-side review against L058 style anchors: public/assets/lessons/L058/images/L058-S01.webp, L058-S02.webp, L058-S03.webp.
- Mandatory recurring cast checks against current visual cast anchors: public/assets/lessons/L154/images/L154-S01.webp, public/assets/lessons/L162/images/L162-S04.webp, public/assets/lessons/L163/images/L163-S02.webp.
- Reject image candidates for generic cartoon, anime, 3D render, photo-realism, simple wash, inconsistent preschool proportions, or wrong recurring identity.

## Audio Production Requirements
- charAudio: /assets/lessons/L326/audio/char-u7dda.m4a from single character 線.
- Sentence audio: S01-S05 from spokenText exactly.
- Teach audio: L326-G02-prefix.m4a from 地圖上這條路; L326-G02-suffix.m4a from 是東西向.
- G05 wrong audio: whole-sentence OpenAI audio from 用紅線畫方盒子綠線畫圓球 and 用黑線畫圓盒子綠線畫圓球.

## Consistency Checklist
- Request, packet, and draft contain the same final five sentences and Stage 4 records.
- displayLines.join("") exactly equals text including punctuation; every line is <= 6 visible characters.
- Partial-order cards are exactly one Han character each.

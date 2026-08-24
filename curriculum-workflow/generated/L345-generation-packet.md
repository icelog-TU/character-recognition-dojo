# L345 常 Generation Packet

## Production Boundary

- Unit: L345 normal lesson
- New character: 常
- Zhuyin: ㄔㄤˊ
- Title: 常
- origin/main boundary used: 507e4d66 Integrate lesson L344
- Production JSON boundary: L001-L344, latest formal new character ?
- dependsOnLessons: []
- provisionalLearnedChars: []
- Milestone note: L345 is the last normal lesson before R041/R042, which should cover L316-L345 with allowed ceiling through L345.

## Approved Sentences

### L345-S01

- text: 我們常跟媽媽去買菜。
- spokenText: 我們常跟媽媽去買菜
- focusChar: 常
- displayLines:
  - 我們常跟
  - 媽媽去買菜。
- imageNotes: 早上市場或小店裡，主角小女孩和主角哥哥兩個孩子跟著主角媽媽一起買菜。媽媽在挑菜或拿菜，兩個孩子在旁邊幫忙看或拿小袋子。畫面要呈現「我們常跟媽媽買菜」這個常見家庭活動，不要價格牌、商品文字、品牌或數字。

### L345-S02

- text: 今年常常下雨。
- spokenText: 今年常常下雨
- focusChar: 常
- displayLines:
  - 今年常常
  - 下雨。
- imageNotes: 戶外下雨的場景，主角小女孩站在家門口或窗邊看雨，地上有明顯水花和小水流，天空有雲，感覺今年雨下得很常。畫面不要出現文字、日期、數字、日曆或天氣圖表。

### L345-S03

- text: 孩子們常跟爸爸去打棒球。
- spokenText: 孩子們常跟爸爸去打棒球
- focusChar: 常
- displayLines:
  - 孩子們常跟
  - 爸爸去
  - 打棒球。
- imageNotes: 戶外球場或草地上，主角爸爸陪兩個孩子打棒球。兩個孩子建議使用主角小女孩和主角哥哥，爸爸正在投球或指導，孩子們拿球棒或準備接球。畫面要呈現「孩子們常跟爸爸打棒球」的家庭活動，不要比賽看板、球衣號碼、文字或品牌。

### L345-S04

- text: 今年全校的學生都要學游泳。
- spokenText: 今年全校的學生都要學游泳
- focusChar: 年
- displayLines:
  - 今年全校的
  - 學生都要
  - 學游泳。
- imageNotes: 學校游泳池邊，很多學生在老師或教練帶領下準備學游泳，學生們站在安全區域或坐在池邊聽說明。畫面要呈現「全校學生今年都要學游泳」的學校活動，不要危險水域、溺水畫面、泳池標語、文字、數字或校名。

### L345-S05

- text: 老師常說，上課要用心。
- spokenText: 老師常說上課要用心
- focusChar: 常
- displayLines:
  - 老師常說，
  - 上課要用心。
- imageNotes: 教室裡，老師站在前方溫和提醒學生上課要用心，學生們坐好、看著老師或課本。畫面要呈現老師經常提醒的課堂情境，不要黑板文字、課本可讀文字、姓名牌或數字。老師要和主角媽媽長相明顯不同。

## Image Prompt Notes

### L345-S01

Use case: illustration-story. Asset type: L345-S01 square lesson image. Style: warm picture-book pencil-and-watercolor linework matching L058, bright natural morning light, detailed but clean Taiwan market or small produce shop, phone-readable composition. Scene: morning market or small vegetable shop. The recurring protagonist girl and recurring protagonist older brother are with the recurring protagonist mother buying vegetables. Mother is selecting or holding vegetables; both children help by watching carefully or holding small plain bags. Preserve protagonist family continuity from current family examples. Show this as a familiar family routine. Avoid price tags, readable product text, store signs, labels, numbers, brands, logos, UI symbols, captions, and watermarks.

### L345-S02

Use case: illustration-story. Asset type: L345-S02 square lesson image. Style: warm L058-like pencil-and-watercolor, soft rainy daylight, detailed but clean home exterior or window scene, phone-readable composition. Scene: outdoors in steady rain, seen from the family home doorway or window. The recurring protagonist girl stands safely at the doorway or by a window watching rain. Show obvious raindrops, puddle splashes, small water streams on the ground, clouds in the sky, and a sense that rain happens often this year. Avoid calendars, dates, numbers, weather charts, readable text, labels, signs, brands, logos, UI symbols, and watermarks.

### L345-S03

Use case: illustration-story. Asset type: L345-S03 square lesson image. Style: warm picture-book pencil-and-watercolor matching L058, bright outdoor natural light, clean grassy field or small ball field, expressive preschool proportions, phone-readable composition. Scene: the recurring protagonist father plays baseball with two children: the recurring protagonist girl and recurring protagonist older brother. Father is gently pitching or coaching; one child holds a bat and the other prepares to catch or watch safely. Make this read as a frequent family activity with father. Preserve protagonist family continuity and keep father distinct from teacher. Avoid scoreboards, jersey numbers, readable text, team logos, brands, labels, UI symbols, captions, and watermarks.

### L345-S04

Use case: illustration-story. Asset type: L345-S04 square lesson image. Style: warm L058-like pencil-and-watercolor, bright safe school pool environment, clean detailed school scene, phone-readable square composition. Scene: at the edge of a school swimming pool, many preschool or early-elementary students are safely gathered in a dry safe area or seated at poolside while a teacher or coach gives instructions before swimming class. Show a whole-school activity feeling without overcrowding. Teacher or coach must be visually distinct from protagonist mother. Avoid dangerous water, drowning, panic, pool slogans, school names, readable text, signs, numbers, logos, brands, lane numbers, UI symbols, captions, and watermarks.

### L345-S05

Use case: illustration-story. Asset type: L345-S05 square lesson image. Style: warm picture-book pencil-and-watercolor matching L058, detailed but clean classroom, soft natural light, expressive preschool proportions, phone-readable composition. Scene: in a classroom, a recurring teacher stands at the front gently reminding students to pay attention in class. Students sit well, looking toward the teacher or simple unreadable books. Teacher identity must be clearly distinct from the protagonist mother: different hairstyle, clothing palette, classroom posture, and teacher role. Avoid blackboard text, readable textbook text, name tags, numbers, labels, signs, Chinese characters, letters, logos, brands, UI symbols, captions, and watermarks.

## Stage 4 Plan

### L345-G01

```json
{
  "id": "L345-G01",
  "type": "find-character",
  "sentenceId": "L345-S02",
  "targetChar": "常",
  "targetCharIndex": 2,
  "options": [
    {
      "id": "L345-G01-A",
      "text": "常",
      "correct": true
    },
    {
      "id": "L345-G01-B",
      "text": "年",
      "correct": false
    },
    {
      "id": "L345-G01-C",
      "text": "今",
      "correct": false
    },
    {
      "id": "L345-G01-D",
      "text": "雨",
      "correct": false
    }
  ]
}
```

### L345-G02

```json
{
  "id": "L345-G02",
  "type": "teach-character",
  "sentenceId": "L345-S05",
  "targetChar": "常",
  "targetCharIndex": 2,
  "teachAudio": {
    "prefixText": "老師",
    "targetText": "常",
    "suffixText": "說上課要用心",
    "prefixSrc": "/assets/lessons/L345/audio/L345-G02-prefix.m4a",
    "suffixSrc": "/assets/lessons/L345/audio/L345-G02-suffix.m4a"
  }
}
```

### L345-G03

```json
{
  "id": "L345-G03",
  "type": "missing-character",
  "sentenceId": "L345-S03",
  "targetChar": "常",
  "targetCharIndex": 3,
  "missingIndexes": [
    3
  ],
  "options": [
    {
      "id": "L345-G03-A",
      "text": "常",
      "correct": true
    },
    {
      "id": "L345-G03-B",
      "text": "跟",
      "correct": false
    },
    {
      "id": "L345-G03-C",
      "text": "年",
      "correct": false
    }
  ]
}
```

### L345-G04

```json
{
  "id": "L345-G04",
  "type": "partial-order",
  "sentenceId": "L345-S04",
  "targetChar": "全",
  "missingIndexes": [
    2,
    3,
    5,
    6
  ],
  "options": [
    {
      "id": "L345-G04-A",
      "text": "全",
      "correctOrder": 0,
      "correct": true
    },
    {
      "id": "L345-G04-B",
      "text": "校",
      "correctOrder": 1,
      "correct": true
    },
    {
      "id": "L345-G04-C",
      "text": "學",
      "correctOrder": 2,
      "correct": true
    },
    {
      "id": "L345-G04-D",
      "text": "生",
      "correctOrder": 3,
      "correct": true
    }
  ],
  "correctSequence": [
    "L345-G04-A",
    "L345-G04-B",
    "L345-G04-C",
    "L345-G04-D"
  ]
}
```

### L345-G05

```json
{
  "id": "L345-G05",
  "type": "choose-pronunciation",
  "sentenceId": "L345-S01",
  "targetChar": "跟",
  "targetCharIndex": 3,
  "options": [
    {
      "id": "L345-G05-A",
      "text": "我們常跟媽媽去買菜。",
      "correct": true,
      "sentenceId": "L345-S01",
      "audioSrc": "/assets/lessons/L345/audio/L345-S01.m4a"
    },
    {
      "id": "L345-G05-B",
      "text": "我們常看媽媽去買菜。",
      "correct": false,
      "audioSrc": "/assets/lessons/L345/audio/L345-G05-wrong-one.m4a"
    },
    {
      "id": "L345-G05-C",
      "text": "我們常帶媽媽去買菜。",
      "correct": false,
      "audioSrc": "/assets/lessons/L345/audio/L345-G05-wrong-two.m4a"
    }
  ]
}
```

## Stage 4 Index Self-Check

- L345-G01 / S02: targetChar 常, targetCharIndex 2, Han[2]=常, PASS.
- L345-G02 / S05: targetChar 常, targetCharIndex 2, Han[2]=常, PASS.
- L345-G03 / S03: targetChar 常, targetCharIndex 3, Han[3]=常, PASS.
- L345-G04 / S04: missingIndexes [2,3,5,6] = 全/校/學/生, options are single-Han cards, correctOrder mapping PASS.
- L345-G05 / S01: targetChar 跟, targetCharIndex 3, Han[3]=跟, PASS.

## Coverage

- 常: 5 PASS
- 跟: 2 PASS
- 年: 2 PASS
- 們: 2 PASS
- 今: 2 PASS
- 全: 1 PASS

## Display / Allowed Character Audits

- All displayLines.join("") exactly equals text. PASS
- Every display line is <= 6 visible characters including punctuation. PASS
- Approved S01-S05 text, spokenText, displayLines, focusChar, and Stage 4 option text are within latest origin/main learned chars through L344 plus current new char ?. PASS

## Asset Requirements

- Images: public/assets/lessons/L345/images/L345-S01.webp through L345-S05.webp
- Sentence audio: public/assets/lessons/L345/audio/L345-S01.m4a through L345-S05.m4a
- Character audio: public/assets/lessons/L345/audio/char-u5e38.m4a
- Teach audio: public/assets/lessons/L345/audio/L345-G02-prefix.m4a and L345-G02-suffix.m4a
- Wrong-choice audio: public/assets/lessons/L345/audio/L345-G05-wrong-one.m4a and L345-G05-wrong-two.m4a

## Production Notes

Use L058 only as style reference. Use recurring protagonist family continuity for S01 and S03; use teacher identities visually distinct from protagonist mother for S04 and S05. No named Xiaoyue or Xiaoguang cast appears in this lesson. Do not include readable text, labels, symbols, dates, numbers, brands, logos, scoreboards, store signs, classroom text, or license plates in images. Use repo OpenAI audio only; do not splice audio.

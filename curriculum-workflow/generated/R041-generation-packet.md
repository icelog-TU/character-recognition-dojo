# R041 複習四十一 Generation Packet

## Review Scope

- Unit: R041
- Review number: 41
- Kind: review module
- afterLessonOrder: 345
- Coverage range: L316-L345
- Allowed ceiling: characters learned through L345 only
- Review modules introduce no new characters, no zhuyin map, and no charAudio.

## Required Coverage Characters

色 粉 哪 些 最 西 東 方 圖 向 線 直 轉 右 角 落 因 原 別 特 處 理 整 齊 全 今 們 年 跟 常

## Approved Sentences

### R041-S01

- text: 這些粉色花，哪朵最好看。
- spokenText: 這些粉色花哪朵最好看
- focusChar: 哪
- targetChars: 些 / 粉 / 色 / 哪 / 最
- displayLines: ["這些粉色花，","哪朵最好看。"]
- Han count: 10
- imageNotes: 花園或花店裡，有幾朵粉色花擺在一起，主角小女孩正在看花、比較哪一朵最好看。畫面要清楚呈現多朵粉色花和「選哪朵」的情境，不要價格牌、花名標籤、文字或數字。

### R041-S02

- text: 看地圖，向東方直走。
- spokenText: 看地圖向東方直走
- focusChar: 圖
- targetChars: 圖 / 向 / 東 / 方 / 直
- displayLines: ["看地圖，","向東方直走。"]
- Han count: 8
- imageNotes: 主角小女孩和爸爸或老師一起看一張簡化地圖，地圖上有路線和方向箭頭，兩人準備照著地圖往東方直走。地圖不能有可讀文字、東西南北字樣或數字；方向可以用太陽在右上方或地圖上的無字箭頭來表現。

### R041-S03

- text: 從左到右畫一條直線。
- spokenText: 從左到右畫一條直線
- focusChar: 線
- targetChars: 右 / 直 / 線
- displayLines: ["從左到右","畫一條直線。"]
- Han count: 9
- imageNotes: 主角小女孩坐在桌邊，用筆在紙上從左邊往右邊畫一條直線。畫面要清楚呈現筆的移動方向和一條直線，但紙上不要有文字、數字、箭頭標籤或可讀符號。

### R041-S04

- text: 把東西整理好，放整齊。
- spokenText: 把東西整理好放整齊
- focusChar: 理
- targetChars: 東 / 西 / 理 / 整 / 齊
- displayLines: ["把東西","整理好，","放整齊。"]
- Han count: 9
- imageNotes: 家裡桌上或房間裡有書、本子、彩色筆、小盒子等物品，主角小女孩正在先把東西整理好，再把它們放整齊。畫面要呈現整理後變整齊的動作，不要品牌、標籤、文字或數字。

### R041-S05

- text: 先走到轉角，再向右轉。
- spokenText: 先走到轉角再向右轉
- focusChar: 轉
- targetChars: 轉 / 角 / 向 / 右
- displayLines: ["先走到轉角，","再向右轉。"]
- Han count: 9
- imageNotes: 戶外安全街角或學校走廊轉角，主角小女孩先走到轉角，再往自己的右邊轉。畫面要清楚顯示轉角和右轉方向，但不要路牌、店名、箭頭文字、號碼或車牌。

## Image Style And Cast

- Use L058 only as style reference: pencil-and-watercolor linework, warm natural light, bright warm palette, detailed but clean environments, expressive preschool proportions, soft natural faces, and phone-readable square composition.
- Also compare against refined preferred examples L115/L118/L119/L128 and current protagonist-family anchors L154/L162/L163.
- Use protagonist family continuity where specified. Teacher identities must be visually distinct from protagonist mother. Generic classmates must not be confused with named cast Xiaoyue or Xiaoguang.
- No readable text, numbers, labels, brands, logos, route signs, store signs, calendar dates, weather charts, maps with words, name tags, price tags, or license plates.

## Sentence Games

Use these reviewed games exactly as production data.

```json
[
  {
    "id": "R041-G01",
    "type": "find-character",
    "sentenceId": "R041-S01",
    "targetChar": "哪",
    "targetCharIndex": 5,
    "prompt": "找出句子裡的字。",
    "missingIndexes": [
      5
    ]
  },
  {
    "id": "R041-G02",
    "type": "teach-character",
    "sentenceId": "R041-S05",
    "targetChar": "轉",
    "targetCharIndex": 8,
    "prompt": "跟著念這個字。",
    "missingIndexes": [
      8
    ],
    "teachAudio": {
      "prefixText": "先走到轉角再向右",
      "prefixSrc": "/assets/reviews/R041/audio/R041-G02-prefix.m4a"
    }
  },
  {
    "id": "R041-G03",
    "type": "missing-character",
    "sentenceId": "R041-S02",
    "targetChar": "圖",
    "targetCharIndex": 2,
    "prompt": "補上不見的字。",
    "missingIndexes": [
      2
    ],
    "options": [
      {
        "id": "R041-G03-A",
        "text": "圖",
        "correct": true
      }
    ]
  },
  {
    "id": "R041-G04",
    "type": "partial-order",
    "sentenceId": "R041-S03",
    "targetChar": "線",
    "prompt": "把字排回句子裡。",
    "missingIndexes": [
      5,
      6,
      7,
      8
    ],
    "options": [
      {
        "id": "R041-G04-A",
        "text": "一",
        "correctOrder": 0,
        "correct": true
      },
      {
        "id": "R041-G04-B",
        "text": "條",
        "correctOrder": 1,
        "correct": true
      },
      {
        "id": "R041-G04-C",
        "text": "直",
        "correctOrder": 2,
        "correct": true
      },
      {
        "id": "R041-G04-D",
        "text": "線",
        "correctOrder": 3,
        "correct": true
      }
    ]
  },
  {
    "id": "R041-G05",
    "type": "choose-pronunciation",
    "sentenceId": "R041-S04",
    "targetChar": "齊",
    "targetCharIndex": 8,
    "prompt": "選出聽到的句子。",
    "options": [
      {
        "id": "R041-G05-correct",
        "text": "把東西整理好，放整齊。",
        "correct": true,
        "sentenceId": "R041-S04",
        "audioSrc": "/assets/reviews/R041/audio/R041-S04.m4a",
        "spokenText": "把東西整理好放整齊"
      },
      {
        "id": "R041-G05-wrong-one",
        "text": "把東西整理好，放整好。",
        "correct": false,
        "audioSrc": "/assets/reviews/R041/audio/R041-G05-wrong-one.m4a",
        "spokenText": "把東西整理好放整好"
      },
      {
        "id": "R041-G05-wrong-two",
        "text": "把東西整理好，放整了。",
        "correct": false,
        "audioSrc": "/assets/reviews/R041/audio/R041-G05-wrong-two.m4a",
        "spokenText": "把東西整理好放整了"
      }
    ]
  }
]
```

## Validation Notes

- Allowed-character audit: PASS against learned chars through L345.
- DisplayLines join audit: PASS; every line is <= 6 visible characters.
- Pair coverage L316-L345: PASS across R041/R042.
- Review game index self-check: PASS per teacher handoff.

# R042 複習四十二 Generation Packet

## Review Scope

- Unit: R042
- Review number: 42
- Kind: review module
- afterLessonOrder: 345
- Coverage range: L316-L345
- Allowed ceiling: characters learned through L345 only
- Review modules introduce no new characters, no zhuyin map, and no charAudio.

## Required Coverage Characters

色 粉 哪 些 最 西 東 方 圖 向 線 直 轉 右 角 落 因 原 別 特 處 理 整 齊 全 今 們 年 跟 常

## Approved Sentences

### R042-S01

- text: 今年常常下雨，真受不了。
- spokenText: 今年常常下雨真受不了
- focusChar: 常
- targetChars: 今 / 年 / 常
- displayLines: ["今年常常","下雨，","真受不了。"]
- Han count: 10
- imageNotes: 主角小女孩站在家門口或窗邊看外面下雨，表情有點無奈，地上有雨水和水花，旁邊可以有雨傘或雨鞋。畫面要呈現「今年常常下雨，很受不了」的心情，但不要文字、日期、數字、日曆或天氣圖表。

### R042-S02

- text: 特別冷，原因是落地窗沒關。
- spokenText: 特別冷原因是落地窗沒關
- focusChar: 原
- targetChars: 特 / 別 / 原 / 因 / 落
- displayLines: ["特別冷，","原因是","落地窗沒關。"]
- Han count: 11
- imageNotes: 家裡房間裡，主角小女孩覺得很冷，旁邊的落地窗開著，冷風吹進來，窗簾或紙張被吹動。畫面要讓孩子看出「冷的原因是落地窗沒關」，不要文字標籤、溫度數字或恐怖感。

### R042-S03

- text: 我們常跟媽媽去買東西。
- spokenText: 我們常跟媽媽去買東西
- focusChar: 跟
- targetChars: 們 / 常 / 跟 / 東 / 西
- displayLines: ["我們常跟媽媽","去買東西。"]
- Han count: 10
- imageNotes: 早上市場或小店裡，主角小女孩和主角哥哥兩個孩子跟著主角媽媽買東西。媽媽在挑選生活用品或菜，兩個孩子在旁邊幫忙拿袋子或看東西。使用固定 protagonist family continuity，不要畫成 generic children。不要價格牌、商品文字、品牌或數字。

### R042-S04

- text: 學生們全都到齊了。
- spokenText: 學生們全都到齊了
- focusChar: 們
- targetChars: 們 / 全 / 齊
- displayLines: ["學生們全都","到齊了。"]
- Han count: 8
- imageNotes: 教室裡，學生們都已經到座位上或圍坐在地墊上，老師站在前方確認大家都到了。畫面要呈現「學生們全都到齊」，可以有最後一位學生剛坐好，但不要點名表、姓名牌、文字或數字。

### R042-S05

- text: 高處的風特別大。
- spokenText: 高處的風特別大
- focusChar: 處
- targetChars: 處 / 特 / 別
- displayLines: ["高處的風","特別大。"]
- Han count: 7
- imageNotes: 山上觀景處或高高的安全平台，主角小女孩和爸爸站在安全欄杆內，風吹得帽子、頭髮或衣服飄動。畫面要清楚呈現「高處風很大」，不要危險邊緣、墜落感、文字標示或高度數字。

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
    "id": "R042-G01",
    "type": "find-character",
    "sentenceId": "R042-S01",
    "targetChar": "常",
    "targetCharIndex": 2,
    "prompt": "找出句子裡的字。",
    "missingIndexes": [
      2
    ]
  },
  {
    "id": "R042-G02",
    "type": "teach-character",
    "sentenceId": "R042-S02",
    "targetChar": "原",
    "targetCharIndex": 3,
    "prompt": "跟著念這個字。",
    "missingIndexes": [
      3
    ],
    "teachAudio": {
      "prefixText": "特別冷",
      "suffixText": "因是落地窗沒關",
      "prefixSrc": "/assets/reviews/R042/audio/R042-G02-prefix.m4a",
      "suffixSrc": "/assets/reviews/R042/audio/R042-G02-suffix.m4a"
    }
  },
  {
    "id": "R042-G03",
    "type": "missing-character",
    "sentenceId": "R042-S03",
    "targetChar": "跟",
    "targetCharIndex": 3,
    "prompt": "補上不見的字。",
    "missingIndexes": [
      3
    ],
    "options": [
      {
        "id": "R042-G03-A",
        "text": "跟",
        "correct": true
      }
    ]
  },
  {
    "id": "R042-G04",
    "type": "partial-order",
    "sentenceId": "R042-S04",
    "targetChar": "齊",
    "prompt": "把字排回句子裡。",
    "missingIndexes": [
      3,
      4,
      5,
      6
    ],
    "options": [
      {
        "id": "R042-G04-A",
        "text": "全",
        "correctOrder": 0,
        "correct": true
      },
      {
        "id": "R042-G04-B",
        "text": "都",
        "correctOrder": 1,
        "correct": true
      },
      {
        "id": "R042-G04-C",
        "text": "到",
        "correctOrder": 2,
        "correct": true
      },
      {
        "id": "R042-G04-D",
        "text": "齊",
        "correctOrder": 3,
        "correct": true
      }
    ]
  },
  {
    "id": "R042-G05",
    "type": "choose-pronunciation",
    "sentenceId": "R042-S05",
    "targetChar": "處",
    "targetCharIndex": 1,
    "prompt": "選出聽到的句子。",
    "options": [
      {
        "id": "R042-G05-correct",
        "text": "高處的風特別大。",
        "correct": true,
        "sentenceId": "R042-S05",
        "audioSrc": "/assets/reviews/R042/audio/R042-S05.m4a",
        "spokenText": "高處的風特別大"
      },
      {
        "id": "R042-G05-wrong-one",
        "text": "高山的風特別大。",
        "correct": false,
        "audioSrc": "/assets/reviews/R042/audio/R042-G05-wrong-one.m4a",
        "spokenText": "高山的風特別大"
      },
      {
        "id": "R042-G05-wrong-two",
        "text": "高空的風特別大。",
        "correct": false,
        "audioSrc": "/assets/reviews/R042/audio/R042-G05-wrong-two.m4a",
        "spokenText": "高空的風特別大"
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

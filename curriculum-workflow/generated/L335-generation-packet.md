# L335 Generation Packet

## Metadata

- Lesson id: L335
- Order: 335
- Kind: normal lesson
- New character: 特
- Zhuyin: 特=ㄊㄜˋ
- Title: 特
- Status target: merge-ready asset-complete package
- dependsOnLessons: []
- provisionalLearnedChars: []
- Boundary: latest origin/main includes L334; Release owns production JSON, planner, ledger, registry cleanup, and final merge.

## Approved Sentences

```json
[
  {
    "id": "L335-S01",
    "text": "手特別冷，原來是因為玩水。",
    "spokenText": "手特別冷原來是因為玩水",
    "focusChar": "特",
    "displayLines": [
      "手特別冷，",
      "原來是因為",
      "玩水。"
    ],
    "imageNotes": "主角小女孩站在水盆或洗手台旁，手還濕濕的，看起來覺得手很冷。主角媽媽在旁邊拿毛巾幫她擦手或包住手，表情溫和，畫面要清楚表現「手冷」和「剛玩水」的原因。不要出現可讀文字、數字、標籤或品牌。"
  },
  {
    "id": "L335-S02",
    "text": "這個角落的花草，特別好看。",
    "spokenText": "這個角落的花草特別好看",
    "focusChar": "特",
    "displayLines": [
      "這個角落的",
      "花草，",
      "特別好看。"
    ],
    "imageNotes": "花園或學校院子的一個角落，長著漂亮的小花和綠草。主角小女孩蹲下來欣賞，旁邊可以有主角媽媽或老師陪著看。畫面重點是角落裡的花草比周圍更好看，不要出現可讀文字或告示牌。"
  },
  {
    "id": "L335-S03",
    "text": "出事的原因，還不知道。",
    "spokenText": "出事的原因還不知道",
    "focusChar": "原",
    "displayLines": [
      "出事的原因，",
      "還不知道。"
    ],
    "imageNotes": "主角小女孩和主角爸爸坐在客廳看電視新聞，電視畫面中是一台小車停在路邊，旁邊有交通錐和工作人員，沒有受傷、火災、驚嚇或災難畫面。主角爸爸用手勢表示事情原因還不清楚，小女孩認真看著。電視和畫面中不要出現任何可讀文字、數字、新聞標題、字幕或標誌。"
  },
  {
    "id": "L335-S04",
    "text": "媽媽特地做了我愛吃的菜。",
    "spokenText": "媽媽特地做了我愛吃的菜",
    "focusChar": "特",
    "displayLines": [
      "媽媽特地",
      "做了我愛",
      "吃的菜。"
    ],
    "imageNotes": "家裡餐桌場景，主角媽媽端上一道主角小女孩很愛吃的菜，主角小女孩坐在桌邊露出期待表情。畫面要表現媽媽特地為孩子做菜的溫暖情境。不要出現可讀文字、包裝字或餐具上的文字。"
  },
  {
    "id": "L335-S05",
    "text": "這盒彩色筆特別多。",
    "spokenText": "這盒彩色筆特別多",
    "focusChar": "特",
    "displayLines": [
      "這盒彩色筆",
      "特別多。"
    ],
    "imageNotes": "桌上有一盒打開的彩色筆，裡面筆很多、顏色很多，主角小女孩正在看著或拿起其中一支。可以有幾支筆整齊放在盒外，但不要讓畫面凌亂。不要出現可讀文字、數字、品牌或標籤。"
  }
]
```

## Stage 4 Plan

```json
[
  {
    "id": "L335-G01",
    "type": "find-character",
    "sentenceId": "L335-S01",
    "targetChar": "特",
    "targetCharIndex": 1,
    "prompt": "找到「特」。",
    "missingIndexes": [
      1
    ],
    "options": [
      {
        "id": "L335-G01-A",
        "text": "特",
        "correct": true
      },
      {
        "id": "L335-G01-B",
        "text": "別",
        "correct": false
      },
      {
        "id": "L335-G01-C",
        "text": "原",
        "correct": false
      },
      {
        "id": "L335-G01-D",
        "text": "冷",
        "correct": false
      }
    ]
  },
  {
    "id": "L335-G02",
    "type": "teach-character",
    "sentenceId": "L335-S05",
    "targetChar": "特",
    "targetCharIndex": 5,
    "prompt": "聽一聽，幫忙說出這個字。",
    "missingIndexes": [
      5
    ],
    "teachAudio": {
      "prefixText": "這盒彩色筆",
      "targetText": "特",
      "suffixText": "別多",
      "prefixSrc": "/assets/lessons/L335/audio/L335-G02-prefix.m4a",
      "suffixSrc": "/assets/lessons/L335/audio/L335-G02-suffix.m4a"
    }
  },
  {
    "id": "L335-G03",
    "type": "missing-character",
    "sentenceId": "L335-S02",
    "targetChar": "特",
    "targetCharIndex": 7,
    "prompt": "選出少掉的字。",
    "missingIndexes": [
      7
    ],
    "options": [
      {
        "id": "L335-G03-A",
        "text": "特",
        "correct": true
      },
      {
        "id": "L335-G03-B",
        "text": "別",
        "correct": false
      },
      {
        "id": "L335-G03-C",
        "text": "原",
        "correct": false
      }
    ]
  },
  {
    "id": "L335-G04",
    "type": "partial-order",
    "sentenceId": "L335-S03",
    "targetChar": "原",
    "prompt": "把字排回句子裡。",
    "missingIndexes": [
      3,
      4,
      5,
      6
    ],
    "options": [
      {
        "id": "L335-G04-A",
        "text": "原",
        "correctOrder": 0,
        "correct": true
      },
      {
        "id": "L335-G04-B",
        "text": "因",
        "correctOrder": 1,
        "correct": true
      },
      {
        "id": "L335-G04-C",
        "text": "還",
        "correctOrder": 2,
        "correct": true
      },
      {
        "id": "L335-G04-D",
        "text": "不",
        "correctOrder": 3,
        "correct": true
      }
    ],
    "correctOrder": [
      "L335-G04-A",
      "L335-G04-B",
      "L335-G04-C",
      "L335-G04-D"
    ]
  },
  {
    "id": "L335-G05",
    "type": "choose-pronunciation",
    "sentenceId": "L335-S04",
    "targetChar": "特",
    "targetCharIndex": 2,
    "prompt": "選出念得對的聲音。",
    "options": [
      {
        "id": "L335-G05-A",
        "text": "媽媽特地做了我愛吃的菜。",
        "correct": true,
        "sentenceId": "L335-S04",
        "audioSrc": "/assets/lessons/L335/audio/L335-S04.m4a",
        "spokenText": "媽媽特地做了我愛吃的菜"
      },
      {
        "id": "L335-G05-B",
        "text": "媽媽特地做了我愛吃的飯。",
        "correct": false,
        "audioSrc": "/assets/lessons/L335/audio/L335-G05-wrong-one.m4a",
        "ttsText": "媽媽特地做了我愛吃的飯",
        "spokenText": "媽媽特地做了我愛吃的飯"
      },
      {
        "id": "L335-G05-C",
        "text": "媽媽特地做了我愛看的書。",
        "correct": false,
        "audioSrc": "/assets/lessons/L335/audio/L335-G05-wrong-two.m4a",
        "ttsText": "媽媽特地做了我愛看的書",
        "spokenText": "媽媽特地做了我愛看的書"
      }
    ]
  }
]
```

## Final Asset Paths

- Images: `public/assets/lessons/L335/images/L335-S01.webp` through `L335-S05.webp`
- Sentence audio: `public/assets/lessons/L335/audio/L335-S01.m4a` through `L335-S05.m4a`
- Char audio: `public/assets/lessons/L335/audio/char-u7279.m4a`
- Teach audio: `public/assets/lessons/L335/audio/L335-G02-prefix.m4a`, `public/assets/lessons/L335/audio/L335-G02-suffix.m4a`
- Choose-pronunciation wrong-choice audio: `public/assets/lessons/L335/audio/L335-G05-wrong-one.m4a`, `public/assets/lessons/L335/audio/L335-G05-wrong-two.m4a`

## Final Draft Summary

```json
{
  "id": "L335",
  "order": 335,
  "newChars": [
    "特"
  ],
  "zhuyin": {
    "特": "ㄊㄜˋ"
  },
  "charAudio": {
    "特": "/assets/lessons/L335/audio/char-u7279.m4a"
  },
  "title": "特",
  "dependsOnLessons": [],
  "provisionalLearnedChars": [],
  "packageStatus": "merge-ready-asset-complete",
  "sentenceIds": [
    "L335-S01",
    "L335-S02",
    "L335-S03",
    "L335-S04",
    "L335-S05"
  ],
  "sentenceGames": [
    {
      "id": "L335-G01",
      "type": "find-character",
      "sentenceId": "L335-S01",
      "targetChar": "特",
      "targetCharIndex": 1,
      "missingIndexes": [
        1
      ]
    },
    {
      "id": "L335-G02",
      "type": "teach-character",
      "sentenceId": "L335-S05",
      "targetChar": "特",
      "targetCharIndex": 5,
      "missingIndexes": [
        5
      ]
    },
    {
      "id": "L335-G03",
      "type": "missing-character",
      "sentenceId": "L335-S02",
      "targetChar": "特",
      "targetCharIndex": 7,
      "missingIndexes": [
        7
      ]
    },
    {
      "id": "L335-G04",
      "type": "partial-order",
      "sentenceId": "L335-S03",
      "targetChar": "原",
      "targetCharIndex": null,
      "missingIndexes": [
        3,
        4,
        5,
        6
      ]
    },
    {
      "id": "L335-G05",
      "type": "choose-pronunciation",
      "sentenceId": "L335-S04",
      "targetChar": "特",
      "targetCharIndex": 2,
      "missingIndexes": []
    }
  ]
}
```

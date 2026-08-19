# L323 方 generation packet

## Production Boundary

- Unit: L323
- Kind: normal lesson
- New character: ?
- Zhuyin: ??
- Latest package base includes L322 in origin/main, so dependsOnLessons and provisionalLearnedChars are empty.
- Generation packet final records below are authoritative and must match request/draft.

## Coverage Counts

- ?: 4
- ?: 2
- ?: 2
- ?: 2
- ?: 1
- ?: 1

## Image Style And Cast Lock

- Mandatory L058 style references: public/assets/lessons/L058/images/L058-S01.webp through L058-S05.webp.
- L058 is style-only: fine pencil-and-watercolor linework, warm natural light, bright warm palette, detailed but clean environments, expressive preschool proportions, soft cheeks, consistent proportions, phone-readable square composition.
- Cast anchors: public/assets/lessons/L154/images/L154-S01.webp, public/assets/lessons/L162/images/L162-S04.webp, public/assets/lessons/L163/images/L163-S02.webp.
- Accepted image set passed side-by-side review against L058 style anchors and relevant recurring family cast anchors.

## Final Approved Sentence Records

These records are the final implemented lesson-local package records and must match `curriculum-workflow/drafts/L323-draft.json`.

```json
{
  "id": "L323",
  "order": 323,
  "newChars": [
    "方"
  ],
  "zhuyin": {
    "方": "ㄈㄤ"
  },
  "title": "方",
  "dependsOnLessons": [],
  "provisionalLearnedChars": [],
  "packageStatus": "asset-complete-package",
  "approvedSentences": [
    {
      "id": "L323-S01",
      "text": "東方的天空，亮起來了。",
      "spokenText": "東方的天空亮起來了",
      "focusChar": "方",
      "displayLines": [
        "東方的天空，",
        "亮起來了。"
      ],
      "imageNotes": "清晨戶外場景，太陽剛從東方升起，天空變亮，遠方有淡淡晨光。可以有主角小女孩站在窗邊或院子裡看天空；若有人物，必須明確畫主角小女孩。畫面重點是「東方天空亮起來」。",
      "imageSrc": "/assets/lessons/L323/images/L323-S01.webp",
      "audioSrc": "/assets/lessons/L323/audio/L323-S01.m4a",
      "durationMs": 4326,
      "charTimingsLength": 9
    },
    {
      "id": "L323-S02",
      "text": "西方的山邊，太陽下山了。",
      "spokenText": "西方的山邊太陽下山了",
      "focusChar": "方",
      "displayLines": [
        "西方的山邊，",
        "太陽下山了。"
      ],
      "imageNotes": "傍晚戶外場景，太陽靠近西方山邊正在下山，天空轉暗，可自然出現晚霞。畫面和 S01 對照，但時間是傍晚，重點是「西方山邊、太陽下山」。",
      "imageSrc": "/assets/lessons/L323/images/L323-S02.webp",
      "audioSrc": "/assets/lessons/L323/audio/L323-S02.m4a",
      "durationMs": 4300,
      "charTimingsLength": 10
    },
    {
      "id": "L323-S03",
      "text": "這些東西，是在哪個地方買的？",
      "spokenText": "這些東西是在哪個地方買的",
      "focusChar": "方",
      "displayLines": [
        "這些東西，",
        "是在哪個",
        "地方買的？"
      ],
      "imageNotes": "家中客廳或餐桌旁，主角媽媽買了一些玩具和禮物放在桌上，例如小球、玩具車、包好的禮物盒。主角小女孩看著這些東西，好奇地問媽媽是在哪個地方買的。不要使用文具、畫具或彩色筆主題。",
      "imageSrc": "/assets/lessons/L323/images/L323-S03.webp",
      "audioSrc": "/assets/lessons/L323/audio/L323-S03.m4a",
      "durationMs": 4264,
      "charTimingsLength": 12
    },
    {
      "id": "L323-S04",
      "text": "走這條路最快到學校。",
      "spokenText": "走這條路最快到學校",
      "focusChar": "最",
      "displayLines": [
        "走這條路",
        "最快到學校。"
      ],
      "imageNotes": "主角小女孩和主角爸爸或主角媽媽站在簡單路口，一條路通往學校方向。大人指著其中一條路，畫面要看得出是在選「最快到學校」的路。遠方可以看到學校大門或校舍。",
      "imageSrc": "/assets/lessons/L323/images/L323-S04.webp",
      "audioSrc": "/assets/lessons/L323/audio/L323-S04.m4a",
      "durationMs": 4160,
      "charTimingsLength": 9
    },
    {
      "id": "L323-S05",
      "text": "最大的是長方盒子。",
      "spokenText": "最大的是長方盒子",
      "focusChar": "方",
      "displayLines": [
        "最大的是",
        "長方盒子。"
      ],
      "imageNotes": "桌上放幾個不同形狀和大小的盒子：圓盒、小方盒、長方盒。主角小女孩看著盒子或指著最大的長方盒子，讓畫面清楚表現「最大的是長方盒子」。",
      "imageSrc": "/assets/lessons/L323/images/L323-S05.webp",
      "audioSrc": "/assets/lessons/L323/audio/L323-S05.m4a",
      "durationMs": 4362,
      "charTimingsLength": 8
    }
  ],
  "sentenceGames": [
    {
      "id": "L323-G01",
      "type": "find-character",
      "sentenceId": "L323-S01",
      "targetChar": "方",
      "targetCharIndex": 1,
      "prompt": "找到「方」。",
      "missingIndexes": [
        1
      ],
      "options": [
        {
          "id": "L323-G01-A",
          "text": "方",
          "correct": true
        },
        {
          "id": "L323-G01-B",
          "text": "東",
          "correct": false
        },
        {
          "id": "L323-G01-C",
          "text": "西",
          "correct": false
        },
        {
          "id": "L323-G01-D",
          "text": "天",
          "correct": false
        }
      ]
    },
    {
      "id": "L323-G02",
      "type": "teach-character",
      "sentenceId": "L323-S02",
      "targetChar": "方",
      "targetCharIndex": 1,
      "prompt": "聽一聽，幫忙說出這個字。",
      "missingIndexes": [
        1
      ],
      "teachAudio": {
        "prefixText": "西",
        "suffixText": "的山邊太陽下山了",
        "prefixSrc": "/assets/lessons/L323/audio/L323-G02-prefix.m4a",
        "suffixSrc": "/assets/lessons/L323/audio/L323-G02-suffix.m4a"
      }
    },
    {
      "id": "L323-G03",
      "type": "missing-character",
      "sentenceId": "L323-S05",
      "targetChar": "方",
      "targetCharIndex": 5,
      "prompt": "選出少掉的字。",
      "missingIndexes": [
        5
      ],
      "options": [
        {
          "id": "L323-G03-A",
          "text": "方",
          "correct": true
        },
        {
          "id": "L323-G03-B",
          "text": "圓",
          "correct": false
        },
        {
          "id": "L323-G03-C",
          "text": "西",
          "correct": false
        }
      ]
    },
    {
      "id": "L323-G04",
      "type": "partial-order",
      "sentenceId": "L323-S03",
      "targetChar": "方",
      "prompt": "把字排回句子裡。",
      "missingIndexes": [
        6,
        7,
        8,
        9
      ],
      "handoffIndexNote": "Editor handoff listed [7,8,9,10], but zero-based Han indexes for 哪個地方 are [6,7,8,9]; package uses [6,7,8,9] to match the approved missing characters.",
      "options": [
        {
          "id": "L323-G04-A",
          "text": "哪",
          "correctOrder": 0,
          "correct": true
        },
        {
          "id": "L323-G04-B",
          "text": "個",
          "correctOrder": 1,
          "correct": true
        },
        {
          "id": "L323-G04-C",
          "text": "地",
          "correctOrder": 2,
          "correct": true
        },
        {
          "id": "L323-G04-D",
          "text": "方",
          "correctOrder": 3,
          "correct": true
        }
      ],
      "correctOrder": [
        "L323-G04-A",
        "L323-G04-B",
        "L323-G04-C",
        "L323-G04-D"
      ]
    },
    {
      "id": "L323-G05",
      "type": "choose-pronunciation",
      "sentenceId": "L323-S04",
      "targetChar": "最",
      "prompt": "選出聽到的句子。",
      "options": [
        {
          "id": "L323-G05-A",
          "text": "走這條路最快到學校。",
          "correct": true,
          "sentenceId": "L323-S04",
          "audioSrc": "/assets/lessons/L323/audio/L323-S04.m4a",
          "spokenText": "走這條路最快到學校"
        },
        {
          "id": "L323-G05-B",
          "text": "走那條路最快到學校。",
          "correct": false,
          "audioSrc": "/assets/lessons/L323/audio/L323-G05-wrong-one.m4a",
          "spokenText": "走那條路最快到學校"
        },
        {
          "id": "L323-G05-C",
          "text": "走這條路最快到書店。",
          "correct": false,
          "audioSrc": "/assets/lessons/L323/audio/L323-G05-wrong-two.m4a",
          "spokenText": "走這條路最快到書店"
        }
      ]
    }
  ]
}
```

## Handoff Index Note

- G04 handoff listed missingIndexes [7,8,9,10], but the requested missing characters are ? ? ? ?. Zero-based Han indexes for those characters in S03 are [6,7,8,9], so the package uses [6,7,8,9].

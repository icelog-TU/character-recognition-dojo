# L327 直 generation packet

## Production Boundary

- Unit: L327
- Kind: normal lesson
- New character: 直
- Zhuyin: ㄓˊ
- Latest origin/main at claim includes L323 方 and R037/R038.
- Dependency-blocked package depends on L324 圖, L325 向, and L326 線.
- Generation packet final records below are authoritative and match request/draft.

## Coverage Counts

- 直: 5
- 線: 3
- 向: 2
- 圖: 3
- 方: 1
- 東: 1

## Display Lines Audit

- displayLines.join("") equals text for S01-S05, punctuation included.
- Every display line is <= 6 visible characters, punctuation included.
- Every break is a functional phrase break and uses two readable lines.

## Image Style And Cast Lock

- Mandatory L058 style references: public/assets/lessons/L058/images/L058-S01.webp through L058-S05.webp.
- L058 is style-only: fine pencil-and-watercolor linework, warm natural light, bright warm palette, detailed but clean environments, expressive preschool proportions, soft cheeks, consistent proportions, phone-readable square composition.
- Cast anchors: public/assets/lessons/L154/images/L154-S01.webp, public/assets/lessons/L162/images/L162-S04.webp, public/assets/lessons/L163/images/L163-S02.webp, plus public/assets/lessons/L035/images/L035-S01.webp for fixed 他.
- Built-in image tool allowed at most five reference images per generation, so each generated prompt used four L058 style refs plus the most relevant cast anchor and explicitly named the full L058 S01-S05 style set.
- Final images passed side-by-side review against the L058 style anchors and relevant recurring cast anchors.

## Audio Alignment Note

- AI transcription accepted all S01-S05 spokenText after Traditional/Simplified equivalence normalization.
- S02 charIndex 3 and S05 charIndex 5 were manually smoothed from unusable 1 ms Whisper segments while preserving strict timing order.

## Final Approved Sentence Records

These records are the final implemented lesson-local package records and must match `curriculum-workflow/drafts/L327-draft.json`.

```json
{
  "id": "L327",
  "order": 327,
  "newChars": [
    "直"
  ],
  "zhuyin": {
    "直": "ㄓˊ"
  },
  "title": "直",
  "dependsOnLessons": [
    "L324",
    "L325",
    "L326"
  ],
  "provisionalLearnedChars": [
    "圖",
    "向",
    "線"
  ],
  "packageStatus": "dependency-blocked-asset-complete",
  "approvedSentences": [
    {
      "id": "L327-S01",
      "text": "在地圖上，畫一條直線。",
      "spokenText": "在地圖上畫一條直線",
      "focusChar": "直",
      "displayLines": [
        "在地圖上，",
        "畫一條直線。"
      ],
      "imageNotes": "主角小女孩坐在桌前看一張簡單地圖，用筆在地圖上畫一條很直的線，像是在標出一條路。地圖要簡單，不要塞太多文字標籤；重點是「地圖上畫直線」。",
      "imageSrc": "/assets/lessons/L327/images/L327-S01.webp",
      "audioSrc": "/assets/lessons/L327/audio/L327-S01.m4a",
      "durationMs": 3877,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 480
        },
        {
          "charIndex": 1,
          "startMs": 480,
          "endMs": 800
        },
        {
          "charIndex": 2,
          "startMs": 800,
          "endMs": 1000
        },
        {
          "charIndex": 3,
          "startMs": 1000,
          "endMs": 1420
        },
        {
          "charIndex": 4,
          "startMs": 1420,
          "endMs": 2000
        },
        {
          "charIndex": 5,
          "startMs": 2000,
          "endMs": 2300
        },
        {
          "charIndex": 6,
          "startMs": 2300,
          "endMs": 2660
        },
        {
          "charIndex": 7,
          "startMs": 2660,
          "endMs": 3080
        },
        {
          "charIndex": 8,
          "startMs": 3080,
          "endMs": 3200
        }
      ]
    },
    {
      "id": "L327-S02",
      "text": "看地圖，向前直走。",
      "spokenText": "看地圖向前直走",
      "focusChar": "直",
      "displayLines": [
        "看地圖，",
        "向前直走。"
      ],
      "imageNotes": "主角小女孩和主角爸爸站在路口一起看地圖。爸爸指著前方的路，主角小女孩準備沿著前方直直走。畫面要清楚表現「看地圖」和「向前直走」。",
      "imageSrc": "/assets/lessons/L327/images/L327-S02.webp",
      "audioSrc": "/assets/lessons/L327/audio/L327-S02.m4a",
      "durationMs": 3832,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 480
        },
        {
          "charIndex": 1,
          "startMs": 480,
          "endMs": 780
        },
        {
          "charIndex": 2,
          "startMs": 780,
          "endMs": 1120
        },
        {
          "charIndex": 3,
          "startMs": 1800,
          "endMs": 2050
        },
        {
          "charIndex": 4,
          "startMs": 2050,
          "endMs": 2300
        },
        {
          "charIndex": 5,
          "startMs": 2300,
          "endMs": 2720
        },
        {
          "charIndex": 6,
          "startMs": 2720,
          "endMs": 3040
        }
      ]
    },
    {
      "id": "L327-S03",
      "text": "這條路線，一直向東。",
      "spokenText": "這條路線一直向東",
      "focusChar": "直",
      "displayLines": [
        "這條路線，",
        "一直向東。"
      ],
      "imageNotes": "路邊或公園入口有一面大型直立式地圖牌，像佈告欄那麼大。主角小女孩和主角爸爸站在地圖牌前，看著上面一條明顯的路線；那條路線從西邊往東邊延伸。爸爸指著路線，畫面要表現「這條路線，一直向東」。不要把場景侷限在桌面地圖。",
      "imageSrc": "/assets/lessons/L327/images/L327-S03.webp",
      "audioSrc": "/assets/lessons/L327/audio/L327-S03.m4a",
      "durationMs": 2904,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 280
        },
        {
          "charIndex": 1,
          "startMs": 280,
          "endMs": 600
        },
        {
          "charIndex": 2,
          "startMs": 600,
          "endMs": 940
        },
        {
          "charIndex": 3,
          "startMs": 940,
          "endMs": 1140
        },
        {
          "charIndex": 4,
          "startMs": 1140,
          "endMs": 1490
        },
        {
          "charIndex": 5,
          "startMs": 1490,
          "endMs": 1840
        },
        {
          "charIndex": 6,
          "startMs": 1840,
          "endMs": 2180
        },
        {
          "charIndex": 7,
          "startMs": 2180,
          "endMs": 2400
        }
      ]
    },
    {
      "id": "L327-S04",
      "text": "他在最前方，站得很直。",
      "spokenText": "他在最前方站得很直",
      "focusChar": "直",
      "displayLines": [
        "他在最前方，",
        "站得很直。"
      ],
      "imageNotes": "運動員排隊場景，一位 fixed `他` 男孩站在隊伍最前方，身體站得很直，像是準備帶隊或聽老師/教練說話。後面有幾位 generic children 排成一列。畫面重點是「最前方」和「站得很直」。",
      "imageSrc": "/assets/lessons/L327/images/L327-S04.webp",
      "audioSrc": "/assets/lessons/L327/audio/L327-S04.m4a",
      "durationMs": 4341,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 280
        },
        {
          "charIndex": 1,
          "startMs": 280,
          "endMs": 500
        },
        {
          "charIndex": 2,
          "startMs": 500,
          "endMs": 1040
        },
        {
          "charIndex": 3,
          "startMs": 1040,
          "endMs": 1260
        },
        {
          "charIndex": 4,
          "startMs": 1260,
          "endMs": 1720
        },
        {
          "charIndex": 5,
          "startMs": 1720,
          "endMs": 2200
        },
        {
          "charIndex": 6,
          "startMs": 2200,
          "endMs": 2460
        },
        {
          "charIndex": 7,
          "startMs": 2460,
          "endMs": 2940
        },
        {
          "charIndex": 8,
          "startMs": 2940,
          "endMs": 3120
        }
      ]
    },
    {
      "id": "L327-S05",
      "text": "工作圖上的線要畫直。",
      "spokenText": "工作圖上的線要畫直",
      "focusChar": "直",
      "displayLines": [
        "工作圖上的",
        "線要畫直。"
      ],
      "imageNotes": "工人叔叔或主角爸爸在工作桌前看一張工作圖，用尺或直邊工具把線畫直。桌上有簡單工具和紙張，重點是「工作圖上的線要畫直」。",
      "imageSrc": "/assets/lessons/L327/images/L327-S05.webp",
      "audioSrc": "/assets/lessons/L327/audio/L327-S05.m4a",
      "durationMs": 5051,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 260
        },
        {
          "charIndex": 1,
          "startMs": 260,
          "endMs": 520
        },
        {
          "charIndex": 2,
          "startMs": 520,
          "endMs": 880
        },
        {
          "charIndex": 3,
          "startMs": 880,
          "endMs": 1240
        },
        {
          "charIndex": 4,
          "startMs": 1240,
          "endMs": 1720
        },
        {
          "charIndex": 5,
          "startMs": 1720,
          "endMs": 2050
        },
        {
          "charIndex": 6,
          "startMs": 2050,
          "endMs": 2620
        },
        {
          "charIndex": 7,
          "startMs": 2620,
          "endMs": 3020
        },
        {
          "charIndex": 8,
          "startMs": 3020,
          "endMs": 3300
        }
      ]
    }
  ],
  "sentenceGames": [
    {
      "id": "L327-G01",
      "type": "find-character",
      "sentenceId": "L327-S01",
      "targetChar": "直",
      "targetCharIndex": 7,
      "prompt": "找到「直」。",
      "missingIndexes": [
        7
      ],
      "options": [
        {
          "id": "L327-G01-A",
          "text": "直",
          "correct": true
        },
        {
          "id": "L327-G01-B",
          "text": "線",
          "correct": false
        },
        {
          "id": "L327-G01-C",
          "text": "條",
          "correct": false
        },
        {
          "id": "L327-G01-D",
          "text": "圖",
          "correct": false
        }
      ]
    },
    {
      "id": "L327-G02",
      "type": "teach-character",
      "sentenceId": "L327-S02",
      "targetChar": "直",
      "targetCharIndex": 5,
      "prompt": "聽一聽，幫忙說出這個字。",
      "missingIndexes": [
        5
      ],
      "teachAudio": {
        "prefixText": "看地圖向前",
        "suffixText": "走",
        "prefixSrc": "/assets/lessons/L327/audio/L327-G02-prefix.m4a",
        "suffixSrc": "/assets/lessons/L327/audio/L327-G02-suffix.m4a"
      }
    },
    {
      "id": "L327-G03",
      "type": "missing-character",
      "sentenceId": "L327-S05",
      "targetChar": "直",
      "targetCharIndex": 8,
      "prompt": "選出少掉的字。",
      "missingIndexes": [
        8
      ],
      "options": [
        {
          "id": "L327-G03-A",
          "text": "直",
          "correct": true
        },
        {
          "id": "L327-G03-B",
          "text": "線",
          "correct": false
        },
        {
          "id": "L327-G03-C",
          "text": "圖",
          "correct": false
        }
      ]
    },
    {
      "id": "L327-G04",
      "type": "partial-order",
      "sentenceId": "L327-S03",
      "targetChar": "直",
      "prompt": "把字排回句子裡。",
      "missingIndexes": [
        3,
        4,
        5,
        6
      ],
      "options": [
        {
          "id": "L327-G04-A",
          "text": "線",
          "correctOrder": 0,
          "correct": true
        },
        {
          "id": "L327-G04-B",
          "text": "一",
          "correctOrder": 1,
          "correct": true
        },
        {
          "id": "L327-G04-C",
          "text": "直",
          "correctOrder": 2,
          "correct": true
        },
        {
          "id": "L327-G04-D",
          "text": "向",
          "correctOrder": 3,
          "correct": true
        }
      ],
      "correctOrder": [
        "L327-G04-A",
        "L327-G04-B",
        "L327-G04-C",
        "L327-G04-D"
      ]
    },
    {
      "id": "L327-G05",
      "type": "choose-pronunciation",
      "sentenceId": "L327-S04",
      "targetChar": "直",
      "prompt": "選出聽到的句子。",
      "options": [
        {
          "id": "L327-G05-A",
          "text": "他在最前方，站得很直。",
          "correct": true,
          "sentenceId": "L327-S04",
          "audioSrc": "/assets/lessons/L327/audio/L327-S04.m4a",
          "spokenText": "他在最前方站得很直"
        },
        {
          "id": "L327-G05-B",
          "text": "他在最後方，站得很直。",
          "correct": false,
          "audioSrc": "/assets/lessons/L327/audio/L327-G05-wrong-one.m4a",
          "spokenText": "他在最後方站得很直"
        },
        {
          "id": "L327-G05-C",
          "text": "他在最前方，坐得很直。",
          "correct": false,
          "audioSrc": "/assets/lessons/L327/audio/L327-G05-wrong-two.m4a",
          "spokenText": "他在最前方坐得很直"
        }
      ]
    }
  ]
}
```

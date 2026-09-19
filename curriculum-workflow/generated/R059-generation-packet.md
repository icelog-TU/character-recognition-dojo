# R059 Production package

Status: dependency-blocked-asset-complete
Owner: Production D. Branch: codex/r059-r060-complete-package.
Claim commit: a430d6b385516ac198557edf11c3a424fe0f003d. Source main: 7d2827d50146a4a3a10ba2138b35b72802d497f8.

Review pair R059/R060 follows L480, covers L451-L480 across ten sentences, allowed ceiling 484 unique Han. No newChars, module-level zhuyin or charAudio. Release waits for R057/R058 and L466-L480; main integration is owned by Release.

## Package validation

Pair-local allowed-character, coverage, display lines, target indices, ordering, image format/size, AAC decode/volume, sentence timing counts/bounds and isolated validate:production: PASS. Five 1024-square WebP and nine mono 44.1kHz AAC/M4A per module. See R059-R060-technical-qa.json for hashes, sizes and per-image style/cast checks. Final exports were inspected beside L058, preferred examples and relevant cast anchors: all ten style/cast checks PASS.

## Browser QA

390x844 local isolated preview: both review modules expose two review stages; all five sentence play controls exercised, playing/highlight state observed; functional line breaks and no obstructing overlap. G01 correct selection, G03 correct missing card, G04 unsolved shuffled cards and correct-order acceptance, G05 all three readers and correct choice/reward transition exercised. Explicit pronunciation overrides visible (including 答應 vs 答案 and 事). R060 reward screen reaches 2/2; last-course next button disabled in the isolated fixture. Fixture uses a temporary order-480 launcher and is not included in production JSON.

Tool limitation: G02 press-and-hold microphone recording, ding and recorded-character concatenated playback require teacher/device verification; automation used the supported skip path after checking target and prefix/suffix setup. Browser state observations do not constitute human auditory approval. The final R060-S01 audio revision has technical/AI checks; teacher playback and perceived timing remain part of pre-merge review.

## Audio provenance and review limits

Whole utterances generated with gpt-4o-mini-tts; processed through assets:audio and assets:align:ai. Default voice coral; R059-S02, R059-S03 and both R059 G02 fragments use sage. G02 fragments were independently generated from exact fragment text; G05 distractors independently generated from full spokenText. No speech splicing. Only trailing near-silence trimmed with retained decay. Short suffixes normalized for audibility.

R060-S01 uses phonetic rendering input 搭應的事絕對不該忘記 to cue first-tone 答; approved text/spokenText remains 答應的事絕對不該忘記. Focused AI excerpt identified ㄉㄚ / ㄧㄥˋ. Full-clip AI phonetic transcriptions are inconsistent and retained as diagnostic evidence, not authoritative human listening approval. Teacher should particularly listen to 星期/突然/其實/答應/答案, R059 G05 wording, R060 花草 and both short G02 suffixes.

Raw MP3 stays in ignored curriculum-workflow/audio-inbox/. Final M4A, images and alignment records included. No production JSON, planner data, ledger or shared scripts changed. Full verify skipped: dependency-blocked, shared state left for Release. Pair-local production validation performed; no unrelated full-library media sweep.

## Final approved sentence records

```json
[
  {
    "id": "R059-S01",
    "text": "我在後台等候上場表演。",
    "spokenText": "我在後台等候上場表演",
    "displayLines": [
      "我在後台",
      "等候上場",
      "表演。"
    ],
    "focusChar": "台",
    "imageNotes": "主角女孩穿表演服，站舞台側邊布幕後等候。固定老師在旁留意台上演出，女孩從布幕縫看向舞台，尚未走上場。明確是後台，不是觀眾席等候。",
    "imagePrompt": "主角女孩穿表演服，站舞台側邊布幕後等候。固定老師在旁留意台上演出，女孩從布幕縫看向舞台，尚未走上場。明確是後台，不是觀眾席等候。",
    "zhuyinOverrides": {},
    "approved": true,
    "imageSrc": "/assets/reviews/R059/images/R059-S01.webp",
    "audio": {
      "src": "/assets/reviews/R059/audio/R059-S01.m4a",
      "durationMs": 4168,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 500
        },
        {
          "charIndex": 1,
          "startMs": 500,
          "endMs": 1000
        },
        {
          "charIndex": 2,
          "startMs": 1000,
          "endMs": 1480
        },
        {
          "charIndex": 3,
          "startMs": 1480,
          "endMs": 1800
        },
        {
          "charIndex": 4,
          "startMs": 1800,
          "endMs": 2300
        },
        {
          "charIndex": 5,
          "startMs": 2300,
          "endMs": 2560
        },
        {
          "charIndex": 6,
          "startMs": 2560,
          "endMs": 3040
        },
        {
          "charIndex": 7,
          "startMs": 3040,
          "endMs": 3320
        },
        {
          "charIndex": 8,
          "startMs": 3320,
          "endMs": 3680
        },
        {
          "charIndex": 9,
          "startMs": 3680,
          "endMs": 3960
        }
      ]
    }
  },
  {
    "id": "R059-S02",
    "text": "星期日中午，我在家招待朋友。",
    "spokenText": "星期日中午我在家招待朋友",
    "displayLines": [
      "星期日中午，",
      "我在家",
      "招待朋友。"
    ],
    "focusChar": "招",
    "imageNotes": "明亮家中餐桌旁，主角女孩端點心水果，招呼作客的小月、小光坐下。媽媽協助，女孩是主動招待者。不用日曆或時鐘字樣表現星期日中午。",
    "imagePrompt": "明亮家中餐桌旁，主角女孩端點心水果，招呼作客的小月、小光坐下。媽媽協助，女孩是主動招待者。不用日曆或時鐘字樣表現星期日中午。",
    "zhuyinOverrides": {
      "1": "ㄑㄧˊ",
      "3": "ㄓㄨㄥ"
    },
    "approved": true,
    "imageSrc": "/assets/reviews/R059/images/R059-S02.webp",
    "audio": {
      "src": "/assets/reviews/R059/audio/R059-S02.m4a",
      "durationMs": 4659,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 520
        },
        {
          "charIndex": 1,
          "startMs": 520,
          "endMs": 900
        },
        {
          "charIndex": 2,
          "startMs": 900,
          "endMs": 1260
        },
        {
          "charIndex": 3,
          "startMs": 1260,
          "endMs": 1580
        },
        {
          "charIndex": 4,
          "startMs": 1580,
          "endMs": 1880
        },
        {
          "charIndex": 5,
          "startMs": 1880,
          "endMs": 2240
        },
        {
          "charIndex": 6,
          "startMs": 2240,
          "endMs": 2600
        },
        {
          "charIndex": 7,
          "startMs": 2600,
          "endMs": 3320
        },
        {
          "charIndex": 8,
          "startMs": 3320,
          "endMs": 3640
        },
        {
          "charIndex": 9,
          "startMs": 3640,
          "endMs": 3860
        },
        {
          "charIndex": 10,
          "startMs": 3860,
          "endMs": 4130
        },
        {
          "charIndex": 11,
          "startMs": 4130,
          "endMs": 4400
        }
      ]
    }
  },
  {
    "id": "R059-S03",
    "text": "公車突然停下，大家往前倒。",
    "spokenText": "公車突然停下大家往前倒",
    "displayLines": [
      "公車突然",
      "停下，",
      "大家往前倒。"
    ],
    "focusChar": "突",
    "imageNotes": "公車內，主角女孩與爸爸坐座位，突然煞停，兩人上半身明顯向前傾，附近乘客也有相同反應。站著的generic成人握緊扶手。只短暫失衡，不摔傷、不碰撞、不車禍。",
    "imagePrompt": "公車內，主角女孩與爸爸坐座位，突然煞停，兩人上半身明顯向前傾，附近乘客也有相同反應。站著的generic成人握緊扶手。只短暫失衡，不摔傷、不碰撞、不車禍。",
    "zhuyinOverrides": {
      "2": "ㄊㄨˊ",
      "10": "ㄉㄠˇ"
    },
    "approved": true,
    "imageSrc": "/assets/reviews/R059/images/R059-S03.webp",
    "audio": {
      "src": "/assets/reviews/R059/audio/R059-S03.m4a",
      "durationMs": 5017,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 420
        },
        {
          "charIndex": 1,
          "startMs": 420,
          "endMs": 720
        },
        {
          "charIndex": 2,
          "startMs": 720,
          "endMs": 1300
        },
        {
          "charIndex": 3,
          "startMs": 1300,
          "endMs": 1680
        },
        {
          "charIndex": 4,
          "startMs": 1680,
          "endMs": 1940
        },
        {
          "charIndex": 5,
          "startMs": 1940,
          "endMs": 2360
        },
        {
          "charIndex": 6,
          "startMs": 2840,
          "endMs": 3160
        },
        {
          "charIndex": 7,
          "startMs": 3160,
          "endMs": 3480
        },
        {
          "charIndex": 8,
          "startMs": 3480,
          "endMs": 4160
        },
        {
          "charIndex": 9,
          "startMs": 4160,
          "endMs": 4580
        },
        {
          "charIndex": 10,
          "startMs": 4580,
          "endMs": 4800
        }
      ]
    }
  },
  {
    "id": "R059-S04",
    "text": "台上的怪物，其實是演員。",
    "spokenText": "台上的怪物其實是演員",
    "displayLines": [
      "台上的怪物，",
      "其實是演員。"
    ],
    "focusChar": "實",
    "imageNotes": "演出結束後，generic成人演員已下台，在側台休息區脫下怪物頭套。頭套放手邊，身上仍穿剛才的怪物戲服。主角女孩跟爸爸經過，驚訝看到演員的臉，認出剛才怪物其實是人扮的。絕對不在舞台表演中揭頭套，不破壞正在觀看表演孩子的體驗；不是怪物變成人，演員也不是爸爸。",
    "imagePrompt": "演出結束後，generic成人演員已下台，在側台休息區脫下怪物頭套。頭套放手邊，身上仍穿剛才的怪物戲服。主角女孩跟爸爸經過，驚訝看到演員的臉，認出剛才怪物其實是人扮的。絕對不在舞台表演中揭頭套，不破壞正在觀看表演孩子的體驗；不是怪物變成人，演員也不是爸爸。",
    "zhuyinOverrides": {},
    "approved": true,
    "imageSrc": "/assets/reviews/R059/images/R059-S04.webp",
    "audio": {
      "src": "/assets/reviews/R059/audio/R059-S04.m4a",
      "durationMs": 3025,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 80
        },
        {
          "charIndex": 1,
          "startMs": 80,
          "endMs": 480
        },
        {
          "charIndex": 2,
          "startMs": 480,
          "endMs": 640
        },
        {
          "charIndex": 3,
          "startMs": 640,
          "endMs": 900
        },
        {
          "charIndex": 4,
          "startMs": 900,
          "endMs": 1180
        },
        {
          "charIndex": 5,
          "startMs": 1180,
          "endMs": 1560
        },
        {
          "charIndex": 6,
          "startMs": 1560,
          "endMs": 1940
        },
        {
          "charIndex": 7,
          "startMs": 1940,
          "endMs": 2260
        },
        {
          "charIndex": 8,
          "startMs": 2260,
          "endMs": 2460
        },
        {
          "charIndex": 9,
          "startMs": 2460,
          "endMs": 2800
        }
      ]
    }
  },
  {
    "id": "R059-S05",
    "text": "作文寫完了，才發現名字沒寫。",
    "spokenText": "作文寫完了才發現名字沒寫",
    "displayLines": [
      "作文寫完了，",
      "才發現",
      "名字沒寫。"
    ],
    "focusChar": "現",
    "imageNotes": "主角女孩坐書桌，作文紙內文區已寫滿，頂端姓名欄仍空白。剛放下筆又發現空欄，露出忘記填寫的表情，伸手拿回筆。姓名欄用空框，不要求可讀欄名或作文文字。",
    "imagePrompt": "主角女孩坐書桌，作文紙內文區已寫滿，頂端姓名欄仍空白。剛放下筆又發現空欄，露出忘記填寫的表情，伸手拿回筆。姓名欄用空框，不要求可讀欄名或作文文字。",
    "zhuyinOverrides": {},
    "approved": true,
    "imageSrc": "/assets/reviews/R059/images/R059-S05.webp",
    "audio": {
      "src": "/assets/reviews/R059/audio/R059-S05.m4a",
      "durationMs": 4342,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 400
        },
        {
          "charIndex": 1,
          "startMs": 400,
          "endMs": 660
        },
        {
          "charIndex": 2,
          "startMs": 660,
          "endMs": 1260
        },
        {
          "charIndex": 3,
          "startMs": 1260,
          "endMs": 1460
        },
        {
          "charIndex": 4,
          "startMs": 1460,
          "endMs": 1660
        },
        {
          "charIndex": 5,
          "startMs": 1660,
          "endMs": 2500
        },
        {
          "charIndex": 6,
          "startMs": 2500,
          "endMs": 2750
        },
        {
          "charIndex": 7,
          "startMs": 2750,
          "endMs": 3000
        },
        {
          "charIndex": 8,
          "startMs": 3000,
          "endMs": 3420
        },
        {
          "charIndex": 9,
          "startMs": 3420,
          "endMs": 3600
        },
        {
          "charIndex": 10,
          "startMs": 3600,
          "endMs": 3900
        },
        {
          "charIndex": 11,
          "startMs": 3900,
          "endMs": 4120
        }
      ]
    }
  }
]
```

## Final Stage 4 records

```json
[
  {
    "id": "R059-G01",
    "type": "find-character",
    "sentenceId": "R059-S01",
    "targetChar": "台",
    "targetCharIndex": 3
  },
  {
    "id": "R059-G02",
    "type": "teach-character",
    "sentenceId": "R059-S04",
    "targetChar": "實",
    "targetCharIndex": 6,
    "teachAudio": {
      "prefixText": "台上的怪物其",
      "suffixText": "是演員",
      "prefixSrc": "/assets/reviews/R059/audio/R059-G02-prefix.m4a",
      "suffixSrc": "/assets/reviews/R059/audio/R059-G02-suffix.m4a",
      "prefixAudio": {
        "src": "/assets/reviews/R059/audio/R059-G02-prefix.m4a",
        "durationMs": 2820,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 420
          },
          {
            "charIndex": 1,
            "startMs": 420,
            "endMs": 840
          },
          {
            "charIndex": 2,
            "startMs": 840,
            "endMs": 1040
          },
          {
            "charIndex": 3,
            "startMs": 1040,
            "endMs": 1340
          },
          {
            "charIndex": 4,
            "startMs": 1340,
            "endMs": 1660
          },
          {
            "charIndex": 5,
            "startMs": 1660,
            "endMs": 2500
          }
        ]
      },
      "suffixAudio": {
        "src": "/assets/reviews/R059/audio/R059-G02-suffix.m4a",
        "durationMs": 1529,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 560
          },
          {
            "charIndex": 1,
            "startMs": 560,
            "endMs": 920
          },
          {
            "charIndex": 2,
            "startMs": 920,
            "endMs": 1240
          }
        ]
      }
    }
  },
  {
    "id": "R059-G03",
    "type": "missing-character",
    "sentenceId": "R059-S02",
    "targetChar": "招",
    "targetCharIndex": 8,
    "missingIndexes": [
      8
    ],
    "options": [
      {
        "id": "wrong-one",
        "text": "待",
        "correct": false
      },
      {
        "id": "correct",
        "text": "招",
        "correct": true
      },
      {
        "id": "wrong-two",
        "text": "借",
        "correct": false
      }
    ]
  },
  {
    "id": "R059-G04",
    "type": "partial-order",
    "sentenceId": "R059-S03",
    "targetChar": "突",
    "targetCharIndex": 2,
    "missingIndexes": [
      2,
      3,
      4,
      5
    ],
    "options": [
      {
        "id": "card-ting",
        "text": "停",
        "correct": true,
        "correctOrder": 2
      },
      {
        "id": "card-tu",
        "text": "突",
        "correct": true,
        "correctOrder": 0
      },
      {
        "id": "card-xia",
        "text": "下",
        "correct": true,
        "correctOrder": 3
      },
      {
        "id": "card-ran",
        "text": "然",
        "correct": true,
        "correctOrder": 1
      }
    ]
  },
  {
    "id": "R059-G05",
    "type": "choose-pronunciation",
    "sentenceId": "R059-S05",
    "targetChar": "現",
    "targetCharIndex": 7,
    "options": [
      {
        "id": "correct",
        "text": "作文寫完了，才發現名字沒寫。",
        "spokenText": "作文寫完了才發現名字沒寫",
        "correct": true,
        "audioSrc": "/assets/reviews/R059/audio/R059-S05.m4a"
      },
      {
        "id": "wrong-one",
        "text": "作文寫完了，才發現日期沒寫。",
        "spokenText": "作文寫完了才發現日期沒寫",
        "correct": false,
        "audioSrc": "/assets/reviews/R059/audio/R059-G05-wrong-one.m4a"
      },
      {
        "id": "wrong-two",
        "text": "作文寫完了，才發現名字寫錯。",
        "spokenText": "作文寫完了才發現名字寫錯",
        "correct": false,
        "audioSrc": "/assets/reviews/R059/audio/R059-G05-wrong-two.m4a"
      }
    ]
  }
]
```

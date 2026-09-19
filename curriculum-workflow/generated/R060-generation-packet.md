# R060 Production package

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
    "id": "R060-S01",
    "text": "答應的事，絕對不該忘記。",
    "spokenText": "答應的事絕對不該忘記",
    "displayLines": [
      "答應的事，",
      "絕對不該",
      "忘記。"
    ],
    "focusChar": "絕",
    "imageNotes": "主角家是一樓，不下樓。女孩答應拿垃圾出去丟，卻玩得忘記時間。媽媽指窗外，垃圾車已駛離住家；女孩這時才拿起門邊綁好的垃圾袋，望窗外露出懊惱表情。畫面同時看得到沒丟出去的垃圾袋、正在離開的垃圾車、媽媽的提醒。女孩留在室內門邊，不追車、不跑上車道，不畫樓梯或下樓。垃圾車不需文字、品牌、車牌。答應還書／帶書舊方案已取消。",
    "imagePrompt": "主角家是一樓，不下樓。女孩答應拿垃圾出去丟，卻玩得忘記時間。媽媽指窗外，垃圾車已駛離住家；女孩這時才拿起門邊綁好的垃圾袋，望窗外露出懊惱表情。畫面同時看得到沒丟出去的垃圾袋、正在離開的垃圾車、媽媽的提醒。女孩留在室內門邊，不追車、不跑上車道，不畫樓梯或下樓。垃圾車不需文字、品牌、車牌。答應還書／帶書舊方案已取消。",
    "zhuyinOverrides": {
      "0": "ㄉㄚ",
      "1": "ㄧㄥˋ"
    },
    "approved": true,
    "imageSrc": "/assets/reviews/R060/images/R060-S01.webp",
    "audio": {
      "src": "/assets/reviews/R060/audio/R060-S01.m4a",
      "durationMs": 3410,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 360
        },
        {
          "charIndex": 1,
          "startMs": 360,
          "endMs": 640
        },
        {
          "charIndex": 2,
          "startMs": 640,
          "endMs": 900
        },
        {
          "charIndex": 3,
          "startMs": 900,
          "endMs": 1360
        },
        {
          "charIndex": 4,
          "startMs": 1360,
          "endMs": 2000
        },
        {
          "charIndex": 5,
          "startMs": 2000,
          "endMs": 2280
        },
        {
          "charIndex": 6,
          "startMs": 2280,
          "endMs": 2480
        },
        {
          "charIndex": 7,
          "startMs": 2480,
          "endMs": 2640
        },
        {
          "charIndex": 8,
          "startMs": 2640,
          "endMs": 3020
        },
        {
          "charIndex": 9,
          "startMs": 3020,
          "endMs": 3220
        }
      ]
    }
  },
  {
    "id": "R060-S02",
    "text": "這題的答案，跟書上正好相反。",
    "spokenText": "這題的答案跟書上正好相反",
    "displayLines": [
      "這題的答案，",
      "跟書上",
      "正好相反。"
    ],
    "focusChar": "案",
    "imageNotes": "女孩桌前對照作答紙與書上解答，驚訝停筆，分別指兩處給爸爸看，爸爸俯身核對。不需可讀答案；畫面表現發現不一致，不直接判定女孩或書本誰錯。",
    "imagePrompt": "女孩桌前對照作答紙與書上解答，驚訝停筆，分別指兩處給爸爸看，爸爸俯身核對。不需可讀答案；畫面表現發現不一致，不直接判定女孩或書本誰錯。",
    "zhuyinOverrides": {
      "3": "ㄉㄚˊ",
      "10": "ㄒㄧㄤ"
    },
    "approved": true,
    "imageSrc": "/assets/reviews/R060/images/R060-S02.webp",
    "audio": {
      "src": "/assets/reviews/R060/audio/R060-S02.m4a",
      "durationMs": 3401,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 280
        },
        {
          "charIndex": 1,
          "startMs": 280,
          "endMs": 520
        },
        {
          "charIndex": 2,
          "startMs": 520,
          "endMs": 720
        },
        {
          "charIndex": 3,
          "startMs": 720,
          "endMs": 940
        },
        {
          "charIndex": 4,
          "startMs": 940,
          "endMs": 1200
        },
        {
          "charIndex": 5,
          "startMs": 1200,
          "endMs": 1420
        },
        {
          "charIndex": 6,
          "startMs": 1420,
          "endMs": 1760
        },
        {
          "charIndex": 7,
          "startMs": 1760,
          "endMs": 2140
        },
        {
          "charIndex": 8,
          "startMs": 2140,
          "endMs": 2480
        },
        {
          "charIndex": 9,
          "startMs": 2480,
          "endMs": 2800
        },
        {
          "charIndex": 10,
          "startMs": 2800,
          "endMs": 3020
        },
        {
          "charIndex": 11,
          "startMs": 3020,
          "endMs": 3220
        }
      ]
    }
  },
  {
    "id": "R060-S03",
    "text": "親子活動中，我們邊畫邊聊。",
    "spokenText": "親子活動中我們邊畫邊聊",
    "displayLines": [
      "親子活動中，",
      "我們邊畫",
      "邊聊。"
    ],
    "focusChar": "活",
    "imageNotes": "親子畫畫活動，主角女孩和媽媽坐同桌，各自拿畫筆畫畫，同時轉頭交談；其他generic家庭在附近創作。手上仍在畫，不是全體停筆聽一人說話。",
    "imagePrompt": "親子畫畫活動，主角女孩和媽媽坐同桌，各自拿畫筆畫畫，同時轉頭交談；其他generic家庭在附近創作。手上仍在畫，不是全體停筆聽一人說話。",
    "zhuyinOverrides": {
      "4": "ㄓㄨㄥ"
    },
    "approved": true,
    "imageSrc": "/assets/reviews/R060/images/R060-S03.webp",
    "audio": {
      "src": "/assets/reviews/R060/audio/R060-S03.m4a",
      "durationMs": 4272,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 420
        },
        {
          "charIndex": 1,
          "startMs": 420,
          "endMs": 680
        },
        {
          "charIndex": 2,
          "startMs": 680,
          "endMs": 940
        },
        {
          "charIndex": 3,
          "startMs": 940,
          "endMs": 1120
        },
        {
          "charIndex": 4,
          "startMs": 1120,
          "endMs": 1620
        },
        {
          "charIndex": 5,
          "startMs": 1620,
          "endMs": 1960
        },
        {
          "charIndex": 6,
          "startMs": 1960,
          "endMs": 2300
        },
        {
          "charIndex": 7,
          "startMs": 2300,
          "endMs": 2880
        },
        {
          "charIndex": 8,
          "startMs": 2880,
          "endMs": 3160
        },
        {
          "charIndex": 9,
          "startMs": 3160,
          "endMs": 3720
        },
        {
          "charIndex": 10,
          "startMs": 3720,
          "endMs": 4060
        }
      ]
    }
  },
  {
    "id": "R060-S04",
    "text": "花草不會無緣無故死掉。",
    "spokenText": "花草不會無緣無故死掉",
    "displayLines": [
      "花草不會",
      "無緣無故",
      "死掉。"
    ],
    "focusChar": "緣",
    "imageNotes": "陽台，女孩查看已枯萎花草，爸爸指著盆內乾裂土，說明很久沒澆水的問題。女孩看向擱置的澆水壺。枯葉、乾土清楚，不畫仍生氣蓬勃的植株；用具體缺水原因呼應不會無緣無故。",
    "imagePrompt": "陽台，女孩查看已枯萎花草，爸爸指著盆內乾裂土，說明很久沒澆水的問題。女孩看向擱置的澆水壺。枯葉、乾土清楚，不畫仍生氣蓬勃的植株；用具體缺水原因呼應不會無緣無故。",
    "zhuyinOverrides": {},
    "approved": true,
    "imageSrc": "/assets/reviews/R060/images/R060-S04.webp",
    "audio": {
      "src": "/assets/reviews/R060/audio/R060-S04.m4a",
      "durationMs": 3623,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 440
        },
        {
          "charIndex": 1,
          "startMs": 440,
          "endMs": 740
        },
        {
          "charIndex": 2,
          "startMs": 740,
          "endMs": 1200
        },
        {
          "charIndex": 3,
          "startMs": 1200,
          "endMs": 1660
        },
        {
          "charIndex": 4,
          "startMs": 1660,
          "endMs": 2040
        },
        {
          "charIndex": 5,
          "startMs": 2040,
          "endMs": 2180
        },
        {
          "charIndex": 6,
          "startMs": 2180,
          "endMs": 2580
        },
        {
          "charIndex": 7,
          "startMs": 2580,
          "endMs": 2720
        },
        {
          "charIndex": 8,
          "startMs": 2720,
          "endMs": 3140
        },
        {
          "charIndex": 9,
          "startMs": 3140,
          "endMs": 3420
        }
      ]
    }
  },
  {
    "id": "R060-S05",
    "text": "這個故事有趣，而且是真的。",
    "spokenText": "這個故事有趣而且是真的",
    "displayLines": [
      "這個故事",
      "有趣，",
      "而且是真的。"
    ],
    "focusChar": "趣",
    "imageNotes": "爸爸拿家庭相簿分享自己童年趣事：照片中幼年的爸爸在農場餵小羊，小羊咬住他的帽子。女孩看照片笑起來，爸爸比手勢回憶。用舊照片支持真實經歷，不畫奇幻故事。照片中是爸爸的童年形象，不是把固定小光當小爸爸。無需可讀相簿文字。",
    "imagePrompt": "爸爸拿家庭相簿分享自己童年趣事：照片中幼年的爸爸在農場餵小羊，小羊咬住他的帽子。女孩看照片笑起來，爸爸比手勢回憶。用舊照片支持真實經歷，不畫奇幻故事。照片中是爸爸的童年形象，不是把固定小光當小爸爸。無需可讀相簿文字。",
    "zhuyinOverrides": {
      "3": "ㄕˋ"
    },
    "approved": true,
    "imageSrc": "/assets/reviews/R060/images/R060-S05.webp",
    "audio": {
      "src": "/assets/reviews/R060/audio/R060-S05.m4a",
      "durationMs": 3152,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 170
        },
        {
          "charIndex": 1,
          "startMs": 170,
          "endMs": 340
        },
        {
          "charIndex": 2,
          "startMs": 340,
          "endMs": 660
        },
        {
          "charIndex": 3,
          "startMs": 660,
          "endMs": 920
        },
        {
          "charIndex": 4,
          "startMs": 920,
          "endMs": 1220
        },
        {
          "charIndex": 5,
          "startMs": 1220,
          "endMs": 1560
        },
        {
          "charIndex": 6,
          "startMs": 1560,
          "endMs": 1830
        },
        {
          "charIndex": 7,
          "startMs": 1830,
          "endMs": 2100
        },
        {
          "charIndex": 8,
          "startMs": 2100,
          "endMs": 2580
        },
        {
          "charIndex": 9,
          "startMs": 2580,
          "endMs": 2760
        },
        {
          "charIndex": 10,
          "startMs": 2760,
          "endMs": 2940
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
    "id": "R060-G01",
    "type": "find-character",
    "sentenceId": "R060-S04",
    "targetChar": "緣",
    "targetCharIndex": 5
  },
  {
    "id": "R060-G02",
    "type": "teach-character",
    "sentenceId": "R060-S05",
    "targetChar": "趣",
    "targetCharIndex": 5,
    "teachAudio": {
      "prefixText": "這個故事有",
      "suffixText": "而且是真的",
      "prefixSrc": "/assets/reviews/R060/audio/R060-G02-prefix.m4a",
      "suffixSrc": "/assets/reviews/R060/audio/R060-G02-suffix.m4a",
      "prefixAudio": {
        "src": "/assets/reviews/R060/audio/R060-G02-prefix.m4a",
        "durationMs": 2657,
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
            "endMs": 1260
          },
          {
            "charIndex": 3,
            "startMs": 1260,
            "endMs": 1560
          },
          {
            "charIndex": 4,
            "startMs": 1560,
            "endMs": 2380
          }
        ]
      },
      "suffixAudio": {
        "src": "/assets/reviews/R060/audio/R060-G02-suffix.m4a",
        "durationMs": 1937,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 190
          },
          {
            "charIndex": 1,
            "startMs": 190,
            "endMs": 380
          },
          {
            "charIndex": 2,
            "startMs": 380,
            "endMs": 1320
          },
          {
            "charIndex": 3,
            "startMs": 1320,
            "endMs": 1520
          },
          {
            "charIndex": 4,
            "startMs": 1520,
            "endMs": 1720
          }
        ]
      }
    }
  },
  {
    "id": "R060-G03",
    "type": "missing-character",
    "sentenceId": "R060-S01",
    "targetChar": "絕",
    "targetCharIndex": 4,
    "missingIndexes": [
      4
    ],
    "options": [
      {
        "id": "wrong-one",
        "text": "相",
        "correct": false
      },
      {
        "id": "correct",
        "text": "絕",
        "correct": true
      },
      {
        "id": "wrong-two",
        "text": "反",
        "correct": false
      }
    ]
  },
  {
    "id": "R060-G04",
    "type": "partial-order",
    "sentenceId": "R060-S03",
    "targetChar": "活",
    "targetCharIndex": 2,
    "missingIndexes": [
      2,
      3,
      4
    ],
    "options": [
      {
        "id": "card-dong",
        "text": "動",
        "correct": true,
        "correctOrder": 1
      },
      {
        "id": "card-zhong",
        "text": "中",
        "correct": true,
        "correctOrder": 2
      },
      {
        "id": "card-huo",
        "text": "活",
        "correct": true,
        "correctOrder": 0
      }
    ]
  },
  {
    "id": "R060-G05",
    "type": "choose-pronunciation",
    "sentenceId": "R060-S02",
    "targetChar": "案",
    "targetCharIndex": 4,
    "options": [
      {
        "id": "correct",
        "text": "這題的答案，跟書上正好相反。",
        "spokenText": "這題的答案跟書上正好相反",
        "correct": true,
        "audioSrc": "/assets/reviews/R060/audio/R060-S02.m4a",
        "zhuyinOverrides": {
          "3": "ㄉㄚˊ",
          "10": "ㄒㄧㄤ"
        }
      },
      {
        "id": "wrong-one",
        "text": "這題的答案，跟書上正好相同。",
        "spokenText": "這題的答案跟書上正好相同",
        "correct": false,
        "audioSrc": "/assets/reviews/R060/audio/R060-G05-wrong-one.m4a",
        "zhuyinOverrides": {
          "3": "ㄉㄚˊ",
          "10": "ㄒㄧㄤ"
        }
      },
      {
        "id": "wrong-two",
        "text": "這題的答案，跟紙上正好相反。",
        "spokenText": "這題的答案跟紙上正好相反",
        "correct": false,
        "audioSrc": "/assets/reviews/R060/audio/R060-G05-wrong-two.m4a",
        "zhuyinOverrides": {
          "3": "ㄉㄚˊ",
          "10": "ㄒㄧㄤ"
        }
      }
    ]
  }
]
```

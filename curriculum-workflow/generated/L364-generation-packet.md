# L364 笑 — final generation packet

- packageStatus: asset-complete-package
- Owner: Production D; branch: codex/l364-complete-package
- New character: 笑; zhuyin: ㄒㄧㄠˋ
- Learner dependencies: L361 驚, L362 喜, L363 歡
- Approved provisional boundary: 驚喜歡
- Latest main checked: 3c9beb7ad4b16cd264d62338829815d17e8a9387, formal through L362; remaining Release blocker: L363
- Locked allowedChars: 一二三人個大的小手我有山上下你水在高很家和隻鳥孩指看女飛男門前後也是不到走他沒裡兩狗都爸媽愛書可會這吃做好樣要更邊多少比來起去坐站開左著拿包花朵了畫出學路誰校問找同帶筆借那本給紙心放把桌子盒掉壞眼用鏡鼻臉紅圓太難得過分幾點玩打球棒頭帽草地面外空天雨雲黑白棋鞋穿戴衣脫氣套熱冷喝飯菜老卻麼什為以怎所房間時還燈關窗車等再風吹樹動葉綠滿掃擦先洗又髒亂回就快事跑馬停叫聲聽見說師話課像想真力能火發電生明光亮陽月影長星行道流河從進早晚海船魚游泳池身濕乾服褲換改錯知認新舊半只剩夠錢買貴賣店場市夜具工作忙幫急腳步跳床搬重沙張椅累死睡倒病假才剛裝養休息久體神精變差緊卡住蓋橋座木積堆洞破口傷皮痛受忍耐敢當然怕哭被嚇罵對爬蟲條泥土種澆照顧忘每次記完收彩色粉哪些最西東方圖向線直轉右角落因原別特處理整齊全今們年跟常請嗎客讓廳餐位正排雞公園物怪奇驚喜歡笑
- Coverage PASS: 笑4 / 歡2 / 喜2 / 驚2 / 奇1 / 怪1.

## Final approved sentence records and actual image prompts

```json
[
  {
    "id": "L364-S01",
    "text": "畫了一張奇怪的笑臉。",
    "spokenText": "畫了一張奇怪的笑臉",
    "focusChar": "笑",
    "displayLines": [
      "畫了一張",
      "奇怪的笑臉。"
    ],
    "imageNotes": "主角小女孩在紙上畫了一張很奇怪的笑臉，五官歪歪的或表情很誇張，但可愛、不恐怖。桌上有彩色筆，畫面清楚看出「畫笑臉」。",
    "imagePrompt": "Use case: illustration-story. Single square image / 1:1 composition for preschool course. Full L058 set is STYLE ONLY: fine pencil-and-watercolor, warm natural light, bright rich clean palette, detailed environment, expressive preschool proportions, soft natural faces. Match refined examples and recurring family identity in reference sheet. No text, numbers, letters, labels, branding, speech bubbles or watermarks. Do not copy L058 identities into unrelated roles. Avoid generic/simple watercolor, thin Japanese watercolor, flat cartoon, anime, 3D and photorealism. Protagonist girl, dark short bob and pink clip, pink cardigan, navy skirt, pink shoes, drawing a funny unusual smiling face on a large plain sheet at her home desk. Paper clearly shows asymmetrical silly but friendly eyes and exaggerated broad smile. Her colored pencil touches the drawing. Colored pencils on desk, angled view makes drawing readable. No frightening face.",
    "imageReuseDecision": "New scene required: existing drawing/dog/crying assets do not preserve this exact action, emotion and required cast. Existing generic crying-boy scene cannot substitute for fixed 他.",
    "imageSrc": "/assets/lessons/L364/images/L364-S01.webp",
    "audio": {
      "src": "/assets/lessons/L364/audio/L364-S01.m4a",
      "durationMs": 3645,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 260
        },
        {
          "charIndex": 1,
          "startMs": 260,
          "endMs": 800
        },
        {
          "charIndex": 2,
          "startMs": 800,
          "endMs": 1060
        },
        {
          "charIndex": 3,
          "startMs": 1060,
          "endMs": 1400
        },
        {
          "charIndex": 4,
          "startMs": 1400,
          "endMs": 1810
        },
        {
          "charIndex": 5,
          "startMs": 1810,
          "endMs": 2220
        },
        {
          "charIndex": 6,
          "startMs": 2220,
          "endMs": 2720
        },
        {
          "charIndex": 7,
          "startMs": 2720,
          "endMs": 3100
        },
        {
          "charIndex": 8,
          "startMs": 3100,
          "endMs": 3440
        }
      ]
    }
  },
  {
    "id": "L364-S02",
    "text": "我不喜歡被人笑。",
    "spokenText": "我不喜歡被人笑",
    "focusChar": "笑",
    "displayLines": [
      "我不喜歡",
      "被人笑。"
    ],
    "imageNotes": "主角小女孩做錯一件小事或畫錯一張圖，旁邊一個 generic child 笑了，她看起來不開心或有點難過。畫面要溫和，不要惡意霸凌；可以有老師在旁邊提醒大家不要笑別人。",
    "imagePrompt": "Use case: illustration-story. Single square image / 1:1 composition for preschool course. Full L058 set is STYLE ONLY: fine pencil-and-watercolor, warm natural light, bright rich clean palette, detailed environment, expressive preschool proportions, soft natural faces. Match refined examples and recurring family identity in reference sheet. No text, numbers, letters, labels, branding, speech bubbles or watermarks. Do not copy L058 identities into unrelated roles. Avoid generic/simple watercolor, thin Japanese watercolor, flat cartoon, anime, 3D and photorealism. Protagonist girl, fixed bob/pink clip/cardigan/navy skirt, sits at classroom art table, visibly sad after a small drawing mistake. One generic child beside her gives a brief giggle: distinct girl with two high pigtails, ochre dress, no glasses, no moon clip, no pink cardigan, no lavender. Teacher from final reference cell with neat tied dark hair and teal blouse gently reminds the giggling child to be kind; teacher is distinct from shoulder-haired ivory-blouse mother. Gentle social learning, no bullying crowd. Drawing mistake readable without words.",
    "imageReuseDecision": "New scene required: existing drawing/dog/crying assets do not preserve this exact action, emotion and required cast. Existing generic crying-boy scene cannot substitute for fixed 他.",
    "imageSrc": "/assets/lessons/L364/images/L364-S02.webp",
    "audio": {
      "src": "/assets/lessons/L364/audio/L364-S02.m4a",
      "durationMs": 2090,
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
          "endMs": 680
        },
        {
          "charIndex": 3,
          "startMs": 680,
          "endMs": 1020
        },
        {
          "charIndex": 4,
          "startMs": 1020,
          "endMs": 1360
        },
        {
          "charIndex": 5,
          "startMs": 1360,
          "endMs": 1640
        },
        {
          "charIndex": 6,
          "startMs": 1640,
          "endMs": 1880
        }
      ]
    }
  },
  {
    "id": "L364-S03",
    "text": "盒子裡跳出小狗，我又驚又笑。",
    "spokenText": "盒子裡跳出小狗我又驚又笑",
    "focusChar": "笑",
    "displayLines": [
      "盒子裡跳出",
      "小狗，",
      "我又驚又笑。"
    ],
    "imageNotes": "主角小女孩打開盒子，一隻友善可愛的小狗突然從盒子裡跳出來。女孩先吃驚，接著笑出來。小狗不要攻擊感，不要恐怖驚嚇。",
    "imagePrompt": "Use case: illustration-story. Single square image / 1:1 composition for preschool course. Full L058 set is STYLE ONLY: fine pencil-and-watercolor, warm natural light, bright rich clean palette, detailed environment, expressive preschool proportions, soft natural faces. Match refined examples and recurring family identity in reference sheet. No text, numbers, letters, labels, branding, speech bubbles or watermarks. Do not copy L058 identities into unrelated roles. Avoid generic/simple watercolor, thin Japanese watercolor, flat cartoon, anime, 3D and photorealism. Protagonist girl with fixed dark bob, pink clip/cardigan and navy skirt opens a plain large cardboard box on the warm living-room floor. Exactly one friendly small golden puppy is springing out of the box, paws above rim; girl has wide surprised eyes and joyful laughing smile, hands lifted in delighted surprise. Safe cute dog, no aggression. Clear dog and open box action in one moment.",
    "imageReuseDecision": "New scene required: existing drawing/dog/crying assets do not preserve this exact action, emotion and required cast. Existing generic crying-boy scene cannot substitute for fixed 他.",
    "imageSrc": "/assets/lessons/L364/images/L364-S03.webp",
    "audio": {
      "src": "/assets/lessons/L364/audio/L364-S03.m4a",
      "durationMs": 4829,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 440
        },
        {
          "charIndex": 1,
          "startMs": 440,
          "endMs": 640
        },
        {
          "charIndex": 2,
          "startMs": 640,
          "endMs": 1060
        },
        {
          "charIndex": 3,
          "startMs": 1060,
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
          "endMs": 2260
        },
        {
          "charIndex": 6,
          "startMs": 2260,
          "endMs": 2440
        },
        {
          "charIndex": 7,
          "startMs": 3200,
          "endMs": 3400
        },
        {
          "charIndex": 8,
          "startMs": 3400,
          "endMs": 3760
        },
        {
          "charIndex": 9,
          "startMs": 3760,
          "endMs": 4020
        },
        {
          "charIndex": 10,
          "startMs": 4020,
          "endMs": 4460
        },
        {
          "charIndex": 11,
          "startMs": 4460,
          "endMs": 4620
        }
      ]
    }
  },
  {
    "id": "L364-S04",
    "text": "他哭得驚天動地。",
    "spokenText": "他哭得驚天動地",
    "focusChar": "驚",
    "displayLines": [
      "他哭得",
      "驚天動地。"
    ],
    "imageNotes": "固定「他」小男孩坐在家裡或教室角落大哭，哭聲很大，旁邊的人露出驚訝或安撫表情。畫面要表現「哭得很誇張、很大聲」，不要恐怖或災難感。",
    "imagePrompt": "Use case: illustration-story. Single square image / 1:1 composition for preschool course. Full L058 set is STYLE ONLY: fine pencil-and-watercolor, warm natural light, bright rich clean palette, detailed environment, expressive preschool proportions, soft natural faces. Match refined examples and recurring family identity in reference sheet. No text, numbers, letters, labels, branding, speech bubbles or watermarks. Do not copy L058 identities into unrelated roles. Avoid generic/simple watercolor, thin Japanese watercolor, flat cartoon, anime, 3D and photorealism. Fixed recurring sporty boy 他 from reference with spiky short black hair, plain orange athletic T-shirt, navy shorts, red sneakers, green wristband, no backpack. He sits on classroom corner floor crying very loudly, open mouth, visible tears and scrunched brows, exaggerated but gentle preschool emotion. The separately designed teacher in teal blouse and tied dark hair kneels nearby to comfort him, concerned expression, not protagonist mother. No disaster, no scary effects, no written sound effects.",
    "imageReuseDecision": "New scene required: existing drawing/dog/crying assets do not preserve this exact action, emotion and required cast. Existing generic crying-boy scene cannot substitute for fixed 他.",
    "imageSrc": "/assets/lessons/L364/images/L364-S04.webp",
    "audio": {
      "src": "/assets/lessons/L364/audio/L364-S04.m4a",
      "durationMs": 3158,
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
          "endMs": 1500
        },
        {
          "charIndex": 3,
          "startMs": 1500,
          "endMs": 1900
        },
        {
          "charIndex": 4,
          "startMs": 1900,
          "endMs": 2320
        },
        {
          "charIndex": 5,
          "startMs": 2320,
          "endMs": 2640
        },
        {
          "charIndex": 6,
          "startMs": 2640,
          "endMs": 2940
        }
      ]
    }
  },
  {
    "id": "L364-S05",
    "text": "爸爸喜歡說笑話。",
    "spokenText": "爸爸喜歡說笑話",
    "focusChar": "笑",
    "displayLines": [
      "爸爸喜歡",
      "說笑話。"
    ],
    "imageNotes": "主角爸爸在家中客廳對主角小女孩說笑話，爸爸表情輕鬆開心，小女孩聽了在笑。畫面要自然親子互動，不要文字對話框或字幕。",
    "imagePrompt": "Use case: illustration-story. Single square image / 1:1 composition for preschool course. Full L058 set is STYLE ONLY: fine pencil-and-watercolor, warm natural light, bright rich clean palette, detailed environment, expressive preschool proportions, soft natural faces. Match refined examples and recurring family identity in reference sheet. No text, numbers, letters, labels, branding, speech bubbles or watermarks. Do not copy L058 identities into unrelated roles. Avoid generic/simple watercolor, thin Japanese watercolor, flat cartoon, anime, 3D and photorealism. Fixed protagonist father with short dark hair, blue button shirt and tan trousers, sitting in warm living room telling a playful joke to his daughter. Daughter fixed dark bob pink clip, pink cardigan navy skirt pink shoes, laughing naturally toward father. Father relaxed amusing facial expression and conversational hand gesture. Natural loving interaction, no speech bubbles or captions.",
    "imageReuseDecision": "New scene required: existing drawing/dog/crying assets do not preserve this exact action, emotion and required cast. Existing generic crying-boy scene cannot substitute for fixed 他.",
    "imageSrc": "/assets/lessons/L364/images/L364-S05.webp",
    "audio": {
      "src": "/assets/lessons/L364/audio/L364-S05.m4a",
      "durationMs": 2322,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 150
        },
        {
          "charIndex": 1,
          "startMs": 150,
          "endMs": 300
        },
        {
          "charIndex": 2,
          "startMs": 300,
          "endMs": 710
        },
        {
          "charIndex": 3,
          "startMs": 710,
          "endMs": 1120
        },
        {
          "charIndex": 4,
          "startMs": 1120,
          "endMs": 1560
        },
        {
          "charIndex": 5,
          "startMs": 1560,
          "endMs": 1820
        },
        {
          "charIndex": 6,
          "startMs": 1820,
          "endMs": 2120
        }
      ]
    }
  }
]
```

## Canonical Stage 4 and final audio metadata

G02 uses independently generated 我不喜歡被人; target 笑 is final, so suffixSrc is intentionally omitted. G05 wrong choices were independently generated as whole sentences. Correct option reuses S05. Exactly 9 unique processed audio files.

```json
[
  {
    "id": "L364-G01",
    "type": "find-character",
    "sentenceId": "L364-S01",
    "targetChar": "笑",
    "targetCharIndex": 7,
    "prompt": "找到這個字，點一下。"
  },
  {
    "id": "L364-G02",
    "type": "teach-character",
    "sentenceId": "L364-S02",
    "targetChar": "笑",
    "targetCharIndex": 6,
    "prompt": "幫忙說出這個字。",
    "teachAudio": {
      "prefixText": "我不喜歡被人",
      "targetText": "笑",
      "prefixSrc": "/assets/lessons/L364/audio/L364-G02-prefix.m4a",
      "prefixAudio": {
        "src": "/assets/lessons/L364/audio/L364-G02-prefix.m4a",
        "durationMs": 2600,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 230
          },
          {
            "charIndex": 1,
            "startMs": 230,
            "endMs": 460
          },
          {
            "charIndex": 2,
            "startMs": 460,
            "endMs": 840
          },
          {
            "charIndex": 3,
            "startMs": 840,
            "endMs": 1220
          },
          {
            "charIndex": 4,
            "startMs": 1220,
            "endMs": 2020
          },
          {
            "charIndex": 5,
            "startMs": 2020,
            "endMs": 2400
          }
        ]
      }
    }
  },
  {
    "id": "L364-G03",
    "type": "missing-character",
    "sentenceId": "L364-S03",
    "targetChar": "笑",
    "targetCharIndex": 11,
    "prompt": "補上不見的字。",
    "missingIndexes": [
      11
    ],
    "options": [
      {
        "id": "answer",
        "text": "笑",
        "correct": true
      }
    ]
  },
  {
    "id": "L364-G04",
    "type": "partial-order",
    "sentenceId": "L364-S04",
    "targetChar": "驚",
    "prompt": "把句子排回正確順序。",
    "missingIndexes": [
      3,
      4,
      5,
      6
    ],
    "options": [
      {
        "id": "card-0",
        "text": "驚",
        "correct": true,
        "correctOrder": 0
      },
      {
        "id": "card-1",
        "text": "天",
        "correct": true,
        "correctOrder": 1
      },
      {
        "id": "card-2",
        "text": "動",
        "correct": true,
        "correctOrder": 2
      },
      {
        "id": "card-3",
        "text": "地",
        "correct": true,
        "correctOrder": 3
      }
    ]
  },
  {
    "id": "L364-G05",
    "type": "choose-pronunciation",
    "sentenceId": "L364-S05",
    "targetChar": "笑",
    "targetCharIndex": 5,
    "prompt": "聽一聽，選出讀對的朋友。",
    "options": [
      {
        "id": "correct",
        "text": "爸爸喜歡說笑話。",
        "correct": true,
        "sentenceId": "L364-S05",
        "audioSrc": "/assets/lessons/L364/audio/L364-S05.m4a",
        "audio": {
          "src": "/assets/lessons/L364/audio/L364-S05.m4a",
          "durationMs": 2322,
          "charTimings": [
            {
              "charIndex": 0,
              "startMs": 0,
              "endMs": 150
            },
            {
              "charIndex": 1,
              "startMs": 150,
              "endMs": 300
            },
            {
              "charIndex": 2,
              "startMs": 300,
              "endMs": 710
            },
            {
              "charIndex": 3,
              "startMs": 710,
              "endMs": 1120
            },
            {
              "charIndex": 4,
              "startMs": 1120,
              "endMs": 1560
            },
            {
              "charIndex": 5,
              "startMs": 1560,
              "endMs": 1820
            },
            {
              "charIndex": 6,
              "startMs": 1820,
              "endMs": 2120
            }
          ]
        }
      },
      {
        "id": "wrong-one",
        "text": "媽媽喜歡說笑話。",
        "correct": false,
        "audioSrc": "/assets/lessons/L364/audio/L364-G05-wrong-one.m4a",
        "audio": {
          "src": "/assets/lessons/L364/audio/L364-G05-wrong-one.m4a",
          "durationMs": 2624,
          "charTimings": [
            {
              "charIndex": 0,
              "startMs": 0,
              "endMs": 360
            },
            {
              "charIndex": 1,
              "startMs": 360,
              "endMs": 740
            },
            {
              "charIndex": 2,
              "startMs": 740,
              "endMs": 1020
            },
            {
              "charIndex": 3,
              "startMs": 1020,
              "endMs": 1300
            },
            {
              "charIndex": 4,
              "startMs": 1300,
              "endMs": 1820
            },
            {
              "charIndex": 5,
              "startMs": 1820,
              "endMs": 2160
            },
            {
              "charIndex": 6,
              "startMs": 2160,
              "endMs": 2420
            }
          ]
        }
      },
      {
        "id": "wrong-two",
        "text": "爸爸喜歡聽笑話。",
        "correct": false,
        "audioSrc": "/assets/lessons/L364/audio/L364-G05-wrong-two.m4a",
        "audio": {
          "src": "/assets/lessons/L364/audio/L364-G05-wrong-two.m4a",
          "durationMs": 2647,
          "charTimings": [
            {
              "charIndex": 0,
              "startMs": 0,
              "endMs": 250
            },
            {
              "charIndex": 1,
              "startMs": 250,
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
              "endMs": 1580
            },
            {
              "charIndex": 4,
              "startMs": 1580,
              "endMs": 1940
            },
            {
              "charIndex": 5,
              "startMs": 1940,
              "endMs": 2260
            },
            {
              "charIndex": 6,
              "startMs": 2260,
              "endMs": 2480
            }
          ]
        }
      }
    ]
  }
]
```

## Production QA and Browser QA tooling fallback

```json
{
  "date": "2026-09-15",
  "technicalStatus": "PASS",
  "claimBase": "44fedeffd9055ac64799b69f6f20145f9b51ff41",
  "latestMainChecked": "3c9beb7ad4b16cd264d62338829815d17e8a9387",
  "formalThrough": "L362",
  "releaseBlockers": [
    "L363"
  ],
  "imageQa": [
    {
      "id": "L364-S01",
      "styleLock": "PASS",
      "cast": "PASS",
      "semantics": "PASS",
      "notes": "Protagonist girl drawing a clearly visible silly smile; pink cardigan, bob and clip match family anchors."
    },
    {
      "id": "L364-S02",
      "styleLock": "PASS",
      "cast": "PASS",
      "semantics": "PASS",
      "notes": "Protagonist girl, visually distinct generic pigtail child, and teal-clad recurring teacher; gentle social scene."
    },
    {
      "id": "L364-S03",
      "styleLock": "PASS",
      "cast": "PASS",
      "semantics": "PASS",
      "notes": "Protagonist girl surprised and smiling as friendly puppy emerges from the box; no threatening expression."
    },
    {
      "id": "L364-S04",
      "styleLock": "PASS",
      "cast": "PASS",
      "semantics": "PASS",
      "notes": "Fixed sporty boy: spiky dark hair, orange shirt, navy shorts, red sneakers and green wristband; loud crying with teacher comfort."
    },
    {
      "id": "L364-S05",
      "styleLock": "PASS",
      "cast": "PASS",
      "semantics": "PASS",
      "notes": "Recurring father in blue shirt and protagonist girl laughing together; family anchors and natural joke-telling gesture."
    }
  ],
  "imageReferences": {
    "styleOnly": [
      "L058-S01",
      "L058-S02",
      "L058-S03",
      "L058-S04",
      "L058-S05"
    ],
    "refined": [
      "L115-S01",
      "L115-S02",
      "L118-S02",
      "L119-S01",
      "L128-S03"
    ],
    "cast": [
      "L154-S01",
      "L162-S04",
      "L163-S02",
      "L035-S01",
      "R044-S04"
    ],
    "rejectedImages": 0
  },
  "charAudioQa": {
    "model": "gpt-4o-transcribe",
    "language": "zh",
    "prompt": null,
    "transcript": "笑",
    "durationMs": 2066,
    "sha256": "602c513810ddd407acab3b054d1fd37e36dccbe7cc89d938b3bce1acf8720b5a",
    "regenerations": 1,
    "note": "Initial short clip produced inconsistent independent transcription. Regenerated only standalone 笑, processed with repository pipeline, then obtained exact 笑 without a text prompt. This is transcription evidence, not human audition."
  },
  "audioQa": {
    "decode": "PASS: all 9 M4A files",
    "format": "AAC, 44100 Hz, mono; repository processing",
    "alignment": "PASS: five sentences plus three dedicated Stage 4 clips; AI alignment repeated after volume repair",
    "tailMs": [
      {
        "id": "L364-S01",
        "tailMs": 205
      },
      {
        "id": "L364-S02",
        "tailMs": 210
      },
      {
        "id": "L364-S03",
        "tailMs": 209
      },
      {
        "id": "L364-S04",
        "tailMs": 218
      },
      {
        "id": "L364-S05",
        "tailMs": 202
      },
      {
        "id": "L364-G02-prefix",
        "tailMs": 200
      },
      {
        "id": "L364-G05-wrong-one",
        "tailMs": 204
      },
      {
        "id": "L364-G05-wrong-two",
        "tailMs": 167
      }
    ],
    "g05MeanVolumeSpreadDb": 2.1,
    "volumeRepair": "G05 wrong-two reinforced with repository safety-gain/limiter function (+7.8 dB); no speech splicing."
  },
  "browserQa": {
    "status": "tooling-fallback",
    "scope": "Stage 3 phone-width listening/highlights and Stage 4 first-click, recording/stitched replay and option playback",
    "evidence": "The same Codex in-app browser surface crashed to This page crashed on first playback in the preceding R043 run; prior L354 had the same crash. L364 did not repeat that broken browser path, per SOP. No L364 manual listening, highlight synchrony or microphone replay PASS is claimed.",
    "rule": "docs/CURRICULUM_PRODUCTION_SOP.md: Browser automation fallback for pre-merge playback QA",
    "teacherReview": "Post-main review queue; no teacher pre-merge review requested or claimed."
  },
  "intakeException": "Explicit L364 handoff requires 9 unique audio files because G02 target is final and suffixSrc must be omitted. The stock intake script hardcodes 10. L364-audit.cjs intake verifies exact nine-file references and applies only this count exception to the otherwise unchanged strict intake gate. Report the stock count incompatibility separately.",
  "validation": [
    "tools:check PASS",
    "ai:check PASS",
    "curriculum:packet PASS",
    "repository image optimization PASS",
    "repository audio processing and AI alignment PASS",
    "lesson-local production validation PASS",
    "strict asset format/volume audit PASS",
    "technical/allowed-character/layout/coverage/index audit PASS",
    "virtual curriculum validation PASS, latest main + missing dependency draft + L364",
    "validate:production PASS on branch baseline",
    "curriculum:audit-state PASS on branch baseline; L364 future folder warning expected"
  ],
  "verify": "Skipped: dependency-blocked; shared state integration belongs to Release."
}
```

See L364-package-notes.md and L364-technical-report.json for reproducible checks.

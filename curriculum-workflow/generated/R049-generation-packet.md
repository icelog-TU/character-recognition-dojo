# R049 generation packet

## Production evidence

Status: dependency-blocked-asset-complete.

Pair R049/R050 covers all 30 required characters from L376-L405. Allowed set is exactly 409 characters, capped at L405. Review modules define no top-level newChars, zhuyin or charAudio. Five fixed-order Stage 4 games use each sentence once.

Package base: 09ad28d766640bbbb1b2c1f8d3cb2ccb43efc306. Latest main checked: b4d20e1efd4c4c215e82aed5ff5bfa5267eef1f7 (L403); remaining Release dependencies: L404, L405. Original declared dependency provenance is retained. Playable sequence: L405, R049, R050, L406.

### Visual acceptance

Actual exported 1024-square WebPs were viewed side by side with the full L058 sheet, refined L115-S01/S02, L118-S02, L119-S01, L128-S03 examples, family L154-S01/L162-S04/L163-S02 anchors and teacher L374-S04 where relevant. L058 supplies style only. R050-S05 initial draft was rejected because a background vendor duplicated the fixed teacher identity; it was replaced before export. The rejected draft remains outside shipping assets and was not committed. Other images were accepted after final export review.

R049-S01 style-lock PASS, cast PASS. Wet shoes on absorbent cloth at rainy entry; mother and girl.

R049-S02 style-lock PASS, cast PASS. Girl hands sealed blank envelope to departing father; pen retained.

R049-S03 style-lock PASS, cast PASS. Winged horse appears in illustrated book and a clear imagination bubble.

R049-S04 style-lock PASS, cast PASS. Registration form has blank lines; teacher differs from mother; school activity props.

R049-S05 style-lock PASS, cast PASS. Book faces girl; only blank exterior covers visible; no Han, English or letters.

Numeric exceptions: R050-S01 only page 8; R050-S05 only price labels 20 and 30 plus exactly three 10 coins. R049-S04 has blank form lines; R049-S05 hides inner text and has blank covers. No additional lettering exception.

### Audio and timing evidence

Five sentence clips, two dedicated exact G02 fragments and two complete G05 distractor clips per module; correct G05 reuses S05. Final AAC M4A files are mono 44.1kHz and all decode. Natural Taiwan Mandarin requested using gpt-4o-mini-tts, coral, speed 0.9. Transcript content comparison and all Han timing counts PASS. 行 is configured ㄏㄤˊ and counting 數 ㄕㄨˇ in R049-S05; TTS prompts include these readings and 傳 ㄔㄨㄢˊ / 算 ㄙㄨㄢˋ.

R049-S02 and R050-S05 were regenerated before acceptance. Leading speech is retained; trailing silence is about 200ms after measured final-syllable decay. Whisper alignment anomalies were adjusted using RMS/onset evidence recorded in timing-review.json. Independent unprompted gpt-4o-transcribe matched R050-S05 and R050-G02-prefix before those two clips used text-context Whisper alignment. Transcription does not certify subjective pronunciation quality.

### Browser QA

R049 local review UI loaded 5 sentence cards and 5 extra audio controls. The first Play click caused the Codex in-app browser to crash; next inspection identified “This page crashed”. R050 playback was not retried through the same broken surface. Per SOP tooling fallback, subjective continuous listening, highlight playback and phone recording/replay remain skipped. No teacher listening PASS is claimed. All non-browser package gates passed: required assets, AAC decode, final WebP inspection, transcript comparison, timing metadata, allowed-character audit, Stage 4 index/cards and local validators.

### Validation

- Pair coverage and allowed-character audit: PASS.
- Package-local validate-production-assets: PASS.
- Package-local audit-asset-formats --strict: PASS, zero warnings.
- Base npm run validate:production: PASS.
- G05 option mean-volume spread: 1.1 dB.
- Module shipping size: 1273740 bytes.
- No missing package assets or timing files.

Release owns production JSON, planner, ledger, final integrated verify, main push and deployment.

## Complete review draft

```json
{
  "id": "R049",
  "kind": "review",
  "title": "複習四十九",
  "reviewNumber": 49,
  "afterLessonOrder": 405,
  "targetLessonRange": {
    "startOrder": 376,
    "endOrder": 405
  },
  "requiredCoverageChars": [
    "已",
    "近",
    "接",
    "送",
    "連",
    "傳",
    "相",
    "信",
    "寫",
    "字",
    "名",
    "第",
    "念",
    "號",
    "數",
    "報",
    "頁",
    "碼",
    "翻",
    "印",
    "單",
    "雙",
    "選",
    "或",
    "者",
    "勇",
    "強",
    "算",
    "弱",
    "越"
  ],
  "requiredRounds": 5,
  "dependsOnLessons": [
    "L399",
    "L400",
    "L401",
    "L402",
    "L403",
    "L404",
    "L405"
  ],
  "provisionalLearnedChars": [
    "或",
    "者",
    "勇",
    "強",
    "算",
    "弱",
    "越"
  ],
  "sourceBoundary": "09ad28d766640bbbb1b2c1f8d3cb2ccb43efc306",
  "packageBase": "09ad28d766640bbbb1b2c1f8d3cb2ccb43efc306",
  "packageStatus": "dependency-blocked-asset-complete",
  "pairUnits": [
    "R049",
    "R050"
  ],
  "releaseBlockers": [
    "L404",
    "L405"
  ],
  "imageNumberExceptions": {
    "approved": false
  },
  "pronunciationNotes": [
    "傳說 ㄔㄨㄢˊ; 行 ㄏㄤˊ; 數 ㄕㄨˇ when counting; 算 ㄙㄨㄢˋ."
  ],
  "sentences": [
    {
      "id": "R049-S01",
      "text": "最近接連下雨，鞋子都濕了。",
      "spokenText": "最近接連下雨鞋子都濕了",
      "displayLines": [
        "最近接連",
        "下雨，",
        "鞋子都濕了。"
      ],
      "focusChar": "近",
      "imageNotes": "家中玄關，主角小女孩與媽媽查看鞋架旁幾雙淋濕的鞋，鞋面有水珠，下面墊著吸水布。窗外仍在下雨，旁邊掛著濕雨衣。女孩有些無奈地看著鞋子，不用日曆或文字表現連日下雨。",
      "imagePrompt": "Use case illustration-story. ONE square1024x1024 richly detailed warm Taiwan children picture-book illustration. Match full L058 style sheet: fine textured pencil and painted shading, modeled expressive faces, rich sunny colors, detailed environments, not flat cartoon, anime, 3D, photo, thin/simple watercolor. Family cast sheet: preschool girl short dark bob pink clip pink cardigan cream top navy skirt pink shoes; mother chin-length side-parted dark hair ivory blouse blue jeans; father short tousled dark hair blue shirt beige trousers. Teacher reference L374-S04: ponytail teal blouse beige long skirt, NOT mother. References are style/cast only, NOT edit targets. Square safe margins. No readable Han, English, letters, numbers, labels, logos or captions anywhere EXCEPT exact digits explicitly allowed in the scene. Home entryway. Recurring girl and mother inspect several pairs of rain-soaked shoes by shoe rack: visible drops and dark wet patches, absorbent cloth below. Rain visibly falling through nearby window, wet raincoat hanging beside door. Girl mildly resigned, mother understanding. No calendar or writing. Show wet SHOES as scene focus, no flooding.",
      "imageReuseDecision": "New approved scene requires purpose-built illustration with fixed role and visibility constraints.",
      "imageSrc": "/assets/reviews/R049/images/R049-S01.webp",
      "approved": true,
      "audio": {
        "src": "/assets/reviews/R049/audio/R049-S01.m4a",
        "durationMs": 4767,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 430
          },
          {
            "charIndex": 1,
            "startMs": 430,
            "endMs": 860
          },
          {
            "charIndex": 2,
            "startMs": 860,
            "endMs": 1660
          },
          {
            "charIndex": 3,
            "startMs": 1660,
            "endMs": 1840
          },
          {
            "charIndex": 4,
            "startMs": 1840,
            "endMs": 2240
          },
          {
            "charIndex": 5,
            "startMs": 2240,
            "endMs": 2480
          },
          {
            "charIndex": 6,
            "startMs": 2820,
            "endMs": 3320
          },
          {
            "charIndex": 7,
            "startMs": 3320,
            "endMs": 3500
          },
          {
            "charIndex": 8,
            "startMs": 3500,
            "endMs": 4080
          },
          {
            "charIndex": 9,
            "startMs": 4080,
            "endMs": 4280
          },
          {
            "charIndex": 10,
            "startMs": 4280,
            "endMs": 4567
          }
        ]
      }
    },
    {
      "id": "R049-S02",
      "text": "信已寫好，請爸爸幫我送。",
      "spokenText": "信已寫好請爸爸幫我送",
      "displayLines": [
        "信已寫好，",
        "請爸爸",
        "幫我送。"
      ],
      "focusChar": "寫",
      "imageNotes": "家中桌旁，主角小女孩將裝好信的信封交給準備出門的爸爸。桌上留著剛用過的筆，女孩指著信封向爸爸交代，爸爸伸手接過。信封不需可讀姓名、地址或郵票文字。",
      "imagePrompt": "Use case illustration-story. ONE square1024x1024 richly detailed warm Taiwan children picture-book illustration. Match full L058 style sheet: fine textured pencil and painted shading, modeled expressive faces, rich sunny colors, detailed environments, not flat cartoon, anime, 3D, photo, thin/simple watercolor. Family cast sheet: preschool girl short dark bob pink clip pink cardigan cream top navy skirt pink shoes; mother chin-length side-parted dark hair ivory blouse blue jeans; father short tousled dark hair blue shirt beige trousers. Teacher reference L374-S04: ponytail teal blouse beige long skirt, NOT mother. References are style/cast only, NOT edit targets. Square safe margins. No readable Han, English, letters, numbers, labels, logos or captions anywhere EXCEPT exact digits explicitly allowed in the scene. Home table. Recurring girl hands ONE closed envelope containing finished letter to recurring father who is ready to leave home. Father reaches to receive envelope; girl points toward it explaining. Just-used pen remains on table. Envelope plain, no legible address, name, stamp writing or numbers. Warm family interaction, not blank letter writing stage.",
      "imageReuseDecision": "New approved scene requires purpose-built illustration with fixed role and visibility constraints.",
      "imageSrc": "/assets/reviews/R049/images/R049-S02.webp",
      "approved": true,
      "audio": {
        "src": "/assets/reviews/R049/audio/R049-S02.m4a",
        "durationMs": 4767,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 600
          },
          {
            "charIndex": 1,
            "startMs": 600,
            "endMs": 1280
          },
          {
            "charIndex": 2,
            "startMs": 1280,
            "endMs": 1540
          },
          {
            "charIndex": 3,
            "startMs": 1540,
            "endMs": 2020
          },
          {
            "charIndex": 4,
            "startMs": 2520,
            "endMs": 2840
          },
          {
            "charIndex": 5,
            "startMs": 2840,
            "endMs": 3090
          },
          {
            "charIndex": 6,
            "startMs": 3090,
            "endMs": 3340
          },
          {
            "charIndex": 7,
            "startMs": 3340,
            "endMs": 3920
          },
          {
            "charIndex": 8,
            "startMs": 3920,
            "endMs": 4340
          },
          {
            "charIndex": 9,
            "startMs": 4340,
            "endMs": 4567
          }
        ]
      }
    },
    {
      "id": "R049-S03",
      "text": "我相信飛馬的傳說是真的。",
      "spokenText": "我相信飛馬的傳說是真的",
      "displayLines": [
        "我相信飛馬的",
        "傳說是真的。"
      ],
      "focusChar": "傳",
      "imageNotes": "主角小女孩坐在家中看一本打開的圖畫書，書頁畫著長翅膀的白馬。女孩望著畫面，神情嚮往；頭頂一個想像泡泡呈現飛馬張開翅膀飛過山谷。明確區分書中傳說與現實，不把飛馬畫成真的出現在客廳。不沿用先前小光傳球的舊稿。",
      "imagePrompt": "Use case illustration-story. ONE square1024x1024 richly detailed warm Taiwan children picture-book illustration. Match full L058 style sheet: fine textured pencil and painted shading, modeled expressive faces, rich sunny colors, detailed environments, not flat cartoon, anime, 3D, photo, thin/simple watercolor. Family cast sheet: preschool girl short dark bob pink clip pink cardigan cream top navy skirt pink shoes; mother chin-length side-parted dark hair ivory blouse blue jeans; father short tousled dark hair blue shirt beige trousers. Teacher reference L374-S04: ponytail teal blouse beige long skirt, NOT mother. References are style/cast only, NOT edit targets. Square safe margins. No readable Han, English, letters, numbers, labels, logos or captions anywhere EXCEPT exact digits explicitly allowed in the scene. Recurring girl sits at home reading OPEN PICTURE BOOK; visible illustration on page shows a white horse with feathered wings. Girl gazes dreamily at it. Above her a clearly bounded soft-edged IMAGINATION THOUGHT BUBBLE linked by small bubble trail contains winged white horse flying over mountain valley. Absolutely distinguish imagined scene from real living room. Only one bubble. No actual horse in room. No letters in book or bubble. Retain rich book-style painting, bubble picture is story imagination.",
      "imageReuseDecision": "New approved scene requires purpose-built illustration with fixed role and visibility constraints.",
      "imageSrc": "/assets/reviews/R049/images/R049-S03.webp",
      "approved": true,
      "audio": {
        "src": "/assets/reviews/R049/audio/R049-S03.m4a",
        "durationMs": 3699,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 380
          },
          {
            "charIndex": 1,
            "startMs": 380,
            "endMs": 740
          },
          {
            "charIndex": 2,
            "startMs": 740,
            "endMs": 1100
          },
          {
            "charIndex": 3,
            "startMs": 1100,
            "endMs": 1560
          },
          {
            "charIndex": 4,
            "startMs": 1560,
            "endMs": 1660
          },
          {
            "charIndex": 5,
            "startMs": 1660,
            "endMs": 1920
          },
          {
            "charIndex": 6,
            "startMs": 1920,
            "endMs": 2240
          },
          {
            "charIndex": 7,
            "startMs": 2240,
            "endMs": 2480
          },
          {
            "charIndex": 8,
            "startMs": 2480,
            "endMs": 3060
          },
          {
            "charIndex": 9,
            "startMs": 3060,
            "endMs": 3250
          },
          {
            "charIndex": 10,
            "startMs": 3250,
            "endMs": 3499
          }
        ]
      }
    },
    {
      "id": "R049-S04",
      "text": "報名時，要寫名字和學號。",
      "spokenText": "報名時要寫名字和學號",
      "displayLines": [
        "報名時，",
        "要寫名字",
        "和學號。"
      ],
      "focusChar": "名",
      "imageNotes": "學校活動報名桌旁，老師指著報名紙的填寫位置，主角小女孩拿筆準備填寫。桌旁放著球與活動用品，交代校內活動報名。紙張朝向師生，觀者不需要讀到欄名或填寫內容；只需一般表格線。不要增加姓名、學號、Name、Student ID 等可讀欄名。",
      "imagePrompt": "Use case illustration-story. ONE square1024x1024 richly detailed warm Taiwan children picture-book illustration. Match full L058 style sheet: fine textured pencil and painted shading, modeled expressive faces, rich sunny colors, detailed environments, not flat cartoon, anime, 3D, photo, thin/simple watercolor. Family cast sheet: preschool girl short dark bob pink clip pink cardigan cream top navy skirt pink shoes; mother chin-length side-parted dark hair ivory blouse blue jeans; father short tousled dark hair blue shirt beige trousers. Teacher reference L374-S04: ponytail teal blouse beige long skirt, NOT mother. References are style/cast only, NOT edit targets. Square safe margins. No readable Han, English, letters, numbers, labels, logos or captions anywhere EXCEPT exact digits explicitly allowed in the scene. School activity registration table. Fixed ponytail teacher teal blouse beige skirt points to a blank form position while recurring girl holds pencil ready to fill it. Ball and activity equipment beside table establish school event. Paper faces teacher and girl, only ordinary blank table ruling can be visible, NO readable column headings, handwriting, names, numbers, Name or Student ID. Teacher not mother.",
      "imageReuseDecision": "New approved scene requires purpose-built illustration with fixed role and visibility constraints.",
      "imageSrc": "/assets/reviews/R049/images/R049-S04.webp",
      "approved": true,
      "audio": {
        "src": "/assets/reviews/R049/audio/R049-S04.m4a",
        "durationMs": 4315,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 580
          },
          {
            "charIndex": 1,
            "startMs": 580,
            "endMs": 920
          },
          {
            "charIndex": 2,
            "startMs": 920,
            "endMs": 1340
          },
          {
            "charIndex": 3,
            "startMs": 1340,
            "endMs": 2000
          },
          {
            "charIndex": 4,
            "startMs": 2000,
            "endMs": 2360
          },
          {
            "charIndex": 5,
            "startMs": 2360,
            "endMs": 2720
          },
          {
            "charIndex": 6,
            "startMs": 2720,
            "endMs": 2920
          },
          {
            "charIndex": 7,
            "startMs": 2920,
            "endMs": 3540
          },
          {
            "charIndex": 8,
            "startMs": 3540,
            "endMs": 3900
          },
          {
            "charIndex": 9,
            "startMs": 3900,
            "endMs": 4115
          }
        ]
      }
    },
    {
      "id": "R049-S05",
      "text": "請念第一行，再數有幾個字。",
      "spokenText": "請念第一行再數有幾個字",
      "displayLines": [
        "請念第一行，",
        "再數",
        "有幾個字。"
      ],
      "focusChar": "數",
      "zhuyinOverrides": {
        "4": "ㄏㄤˊ",
        "6": "ㄕㄨˇ"
      },
      "imageNotes": "教室裡，主角小女孩拿著打開的課本，書頁朝向自己，低頭開口念，手指在書頁上逐字點數。老師在旁指示她從第一行開始。從女孩前側方取景，觀者看得到她的臉、手勢與課本外側，但看不到書頁內文。課本封面也不需文字。 不生成漢字、英文或字母，不展示字數或答案。",
      "imagePrompt": "Use case illustration-story. ONE square1024x1024 richly detailed warm Taiwan children picture-book illustration. Match full L058 style sheet: fine textured pencil and painted shading, modeled expressive faces, rich sunny colors, detailed environments, not flat cartoon, anime, 3D, photo, thin/simple watercolor. Family cast sheet: preschool girl short dark bob pink clip pink cardigan cream top navy skirt pink shoes; mother chin-length side-parted dark hair ivory blouse blue jeans; father short tousled dark hair blue shirt beige trousers. Teacher reference L374-S04: ponytail teal blouse beige long skirt, NOT mother. References are style/cast only, NOT edit targets. Square safe margins. No readable Han, English, letters, numbers, labels, logos or captions anywhere EXCEPT exact digits explicitly allowed in the scene. Classroom, recurring girl holds open textbook UPRIGHT with inner pages facing HER torso and eyes. Camera in FRONT of girl slightly to side, so viewer sees her face looking down and mouth open reading, hand/finger moving just above top edge as she points on hidden inner page, and the plain outer book covers; inner printed surfaces fully occluded by book itself. Fixed ponytail teacher teal blouse beside her gestures gently toward top of hidden page. Absolutely no inner text visible, no Han/English/letters, no DOG/BIRD or counting design; blank covers. Do NOT rotate open pages toward viewer. Make book geometry plausible with finger seen at upper edge without revealing inner content.",
      "imageReuseDecision": "New approved scene requires purpose-built illustration with fixed role and visibility constraints.",
      "imageSrc": "/assets/reviews/R049/images/R049-S05.webp",
      "approved": true,
      "audio": {
        "src": "/assets/reviews/R049/audio/R049-S05.m4a",
        "durationMs": 5287,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 720
          },
          {
            "charIndex": 1,
            "startMs": 720,
            "endMs": 1060
          },
          {
            "charIndex": 2,
            "startMs": 1060,
            "endMs": 1490
          },
          {
            "charIndex": 3,
            "startMs": 1490,
            "endMs": 1920
          },
          {
            "charIndex": 4,
            "startMs": 1920,
            "endMs": 2320
          },
          {
            "charIndex": 5,
            "startMs": 2700,
            "endMs": 3240
          },
          {
            "charIndex": 6,
            "startMs": 3240,
            "endMs": 3780
          },
          {
            "charIndex": 7,
            "startMs": 3780,
            "endMs": 4400
          },
          {
            "charIndex": 8,
            "startMs": 4400,
            "endMs": 4520
          },
          {
            "charIndex": 9,
            "startMs": 4520,
            "endMs": 4760
          },
          {
            "charIndex": 10,
            "startMs": 4760,
            "endMs": 5087
          }
        ]
      }
    }
  ],
  "sentenceGames": [
    {
      "id": "R049-G01",
      "type": "find-character",
      "sentenceId": "R049-S01",
      "targetChar": "近",
      "targetCharIndex": 1,
      "prompt": "找出句子裡的字。"
    },
    {
      "id": "R049-G02",
      "type": "teach-character",
      "sentenceId": "R049-S03",
      "targetChar": "傳",
      "targetCharIndex": 6,
      "prompt": "教小兔子念這個字。",
      "teachAudio": {
        "prefixText": "我相信飛馬的",
        "suffixText": "說是真的",
        "prefixSrc": "/assets/reviews/R049/audio/R049-G02-prefix.m4a",
        "suffixSrc": "/assets/reviews/R049/audio/R049-G02-suffix.m4a",
        "prefixAudio": {
          "src": "/assets/reviews/R049/audio/R049-G02-prefix.m4a",
          "durationMs": 2347,
          "charTimings": [
            {
              "charIndex": 0,
              "startMs": 0,
              "endMs": 480
            },
            {
              "charIndex": 1,
              "startMs": 480,
              "endMs": 790
            },
            {
              "charIndex": 2,
              "startMs": 790,
              "endMs": 1100
            },
            {
              "charIndex": 3,
              "startMs": 1100,
              "endMs": 1660
            },
            {
              "charIndex": 4,
              "startMs": 1660,
              "endMs": 1840
            },
            {
              "charIndex": 5,
              "startMs": 1840,
              "endMs": 2147
            }
          ]
        },
        "suffixAudio": {
          "src": "/assets/reviews/R049/audio/R049-G02-suffix.m4a",
          "durationMs": 2556,
          "charTimings": [
            {
              "charIndex": 0,
              "startMs": 0,
              "endMs": 700
            },
            {
              "charIndex": 1,
              "startMs": 1130,
              "endMs": 1770
            },
            {
              "charIndex": 2,
              "startMs": 1770,
              "endMs": 2030
            },
            {
              "charIndex": 3,
              "startMs": 2030,
              "endMs": 2356
            }
          ]
        }
      }
    },
    {
      "id": "R049-G03",
      "type": "missing-character",
      "sentenceId": "R049-S02",
      "targetChar": "寫",
      "targetCharIndex": 2,
      "prompt": "找出少了哪個字。",
      "missingIndexes": [
        2
      ],
      "options": [
        {
          "id": "correct",
          "text": "寫",
          "correct": true
        },
        {
          "id": "wrong-one",
          "text": "看",
          "correct": false
        },
        {
          "id": "wrong-two",
          "text": "念",
          "correct": false
        }
      ]
    },
    {
      "id": "R049-G04",
      "type": "partial-order",
      "sentenceId": "R049-S04",
      "targetChar": "名",
      "targetCharIndex": 1,
      "prompt": "把字放回句子裡。",
      "missingIndexes": [
        4,
        5,
        6,
        7
      ],
      "options": [
        {
          "id": "card-zi",
          "text": "字",
          "correct": true,
          "correctOrder": 2
        },
        {
          "id": "card-xie",
          "text": "寫",
          "correct": true,
          "correctOrder": 0
        },
        {
          "id": "card-he",
          "text": "和",
          "correct": true,
          "correctOrder": 3
        },
        {
          "id": "card-ming",
          "text": "名",
          "correct": true,
          "correctOrder": 1
        }
      ]
    },
    {
      "id": "R049-G05",
      "type": "choose-pronunciation",
      "sentenceId": "R049-S05",
      "targetChar": "數",
      "targetCharIndex": 6,
      "prompt": "聽聽看，誰念得對？",
      "options": [
        {
          "id": "correct",
          "text": "請念第一行，再數有幾個字。",
          "correct": true,
          "audioSrc": "/assets/reviews/R049/audio/R049-S05.m4a",
          "audio": {
            "src": "/assets/reviews/R049/audio/R049-S05.m4a",
            "durationMs": 5287,
            "charTimings": [
              {
                "charIndex": 0,
                "startMs": 0,
                "endMs": 720
              },
              {
                "charIndex": 1,
                "startMs": 720,
                "endMs": 1060
              },
              {
                "charIndex": 2,
                "startMs": 1060,
                "endMs": 1490
              },
              {
                "charIndex": 3,
                "startMs": 1490,
                "endMs": 1920
              },
              {
                "charIndex": 4,
                "startMs": 1920,
                "endMs": 2320
              },
              {
                "charIndex": 5,
                "startMs": 2700,
                "endMs": 3240
              },
              {
                "charIndex": 6,
                "startMs": 3240,
                "endMs": 3780
              },
              {
                "charIndex": 7,
                "startMs": 3780,
                "endMs": 4400
              },
              {
                "charIndex": 8,
                "startMs": 4400,
                "endMs": 4520
              },
              {
                "charIndex": 9,
                "startMs": 4520,
                "endMs": 4760
              },
              {
                "charIndex": 10,
                "startMs": 4760,
                "endMs": 5087
              }
            ]
          }
        },
        {
          "id": "wrong-one",
          "text": "請念第二行，再數有幾個字。",
          "correct": false,
          "audioSrc": "/assets/reviews/R049/audio/R049-G05-wrong-one.m4a",
          "audio": {
            "src": "/assets/reviews/R049/audio/R049-G05-wrong-one.m4a",
            "durationMs": 4282,
            "charTimings": [
              {
                "charIndex": 0,
                "startMs": 0,
                "endMs": 700
              },
              {
                "charIndex": 1,
                "startMs": 700,
                "endMs": 960
              },
              {
                "charIndex": 2,
                "startMs": 960,
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
                "endMs": 1960
              },
              {
                "charIndex": 5,
                "startMs": 2540,
                "endMs": 2860
              },
              {
                "charIndex": 6,
                "startMs": 2860,
                "endMs": 3100
              },
              {
                "charIndex": 7,
                "startMs": 3100,
                "endMs": 3460
              },
              {
                "charIndex": 8,
                "startMs": 3460,
                "endMs": 3660
              },
              {
                "charIndex": 9,
                "startMs": 3660,
                "endMs": 3820
              },
              {
                "charIndex": 10,
                "startMs": 3820,
                "endMs": 4082
              }
            ]
          }
        },
        {
          "id": "wrong-two",
          "text": "請念第一行，再看有幾個字。",
          "correct": false,
          "audioSrc": "/assets/reviews/R049/audio/R049-G05-wrong-two.m4a",
          "audio": {
            "src": "/assets/reviews/R049/audio/R049-G05-wrong-two.m4a",
            "durationMs": 4435,
            "charTimings": [
              {
                "charIndex": 0,
                "startMs": 0,
                "endMs": 740
              },
              {
                "charIndex": 1,
                "startMs": 740,
                "endMs": 960
              },
              {
                "charIndex": 2,
                "startMs": 960,
                "endMs": 1250
              },
              {
                "charIndex": 3,
                "startMs": 1250,
                "endMs": 1540
              },
              {
                "charIndex": 4,
                "startMs": 1540,
                "endMs": 1880
              },
              {
                "charIndex": 5,
                "startMs": 2780,
                "endMs": 2980
              },
              {
                "charIndex": 6,
                "startMs": 2980,
                "endMs": 3320
              },
              {
                "charIndex": 7,
                "startMs": 3320,
                "endMs": 3660
              },
              {
                "charIndex": 8,
                "startMs": 3660,
                "endMs": 3820
              },
              {
                "charIndex": 9,
                "startMs": 3820,
                "endMs": 4000
              },
              {
                "charIndex": 10,
                "startMs": 4000,
                "endMs": 4235
              }
            ]
          }
        }
      ]
    }
  ],
  "latestMainVerified": "b4d20e1efd4c4c215e82aed5ff5bfa5267eef1f7",
  "latestMainBoundary": "L403",
  "pairCoverage": {
    "已": 1,
    "近": 1,
    "接": 1,
    "送": 1,
    "連": 1,
    "傳": 1,
    "相": 1,
    "信": 2,
    "寫": 2,
    "字": 2,
    "名": 2,
    "第": 1,
    "念": 1,
    "號": 1,
    "數": 1,
    "報": 1,
    "頁": 2,
    "碼": 1,
    "翻": 1,
    "印": 1,
    "單": 1,
    "雙": 1,
    "選": 1,
    "或": 1,
    "者": 2,
    "勇": 1,
    "強": 1,
    "算": 2,
    "弱": 1,
    "越": 2
  }
}
```

## Pushed intake evidence

Checked immutable asset commit: 5bd9a1b4061493ab3ae297f4ae24c59d5d00ac90.

Command: npm run curriculum:package-intake -- --unit R049 --ref origin/codex/r049-r050-complete-package --strict

Result: PASS, exit 0, zero warnings; 5 images and 9 referenced audio files. Both R049 and R050 passed on the same pushed pair ref. Subsequent documentation-only commit is rechecked before final delivery.

Pre-merge package preview (not final main review queue): https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=R049&ref=5bd9a1b4061493ab3ae297f4ae24c59d5d00ac90

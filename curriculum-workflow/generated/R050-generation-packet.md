# R050 generation packet

## Production evidence

Status: dependency-blocked-asset-complete.

Pair R049/R050 covers all 30 required characters from L376-L405. Allowed set is exactly 409 characters, capped at L405. Review modules define no top-level newChars, zhuyin or charAudio. Five fixed-order Stage 4 games use each sentence once.

Package base: 09ad28d766640bbbb1b2c1f8d3cb2ccb43efc306. Latest main checked: b4d20e1efd4c4c215e82aed5ff5bfa5267eef1f7 (L403); remaining Release dependencies: L404, L405. Original declared dependency provenance is retained. Playable sequence: L405, R049, R050, L406.

### Visual acceptance

Actual exported 1024-square WebPs were viewed side by side with the full L058 sheet, refined L115-S01/S02, L118-S02, L119-S01, L128-S03 examples, family L154-S01/L162-S04/L163-S02 anchors and teacher L374-S04 where relevant. L058 supplies style only. R050-S05 initial draft was rejected because a background vendor duplicated the fixed teacher identity; it was replaced before export. The rejected draft remains outside shipping assets and was not committed. Other images were accepted after final export review.

R050-S01 style-lock PASS, cast PASS. Turned page; normal single 8 at lower-right corner; father points.

R050-S02 style-lock PASS, cast PASS. Father is sole family customer; distinct clerk; single bed/one pillow and double bed/two pillows.

R050-S03 style-lock PASS, cast PASS. Story hero recoils from tiny insect beside moved boulder; no modern family or injury.

R050-S04 style-lock PASS, cast PASS. One dog runs ahead of girl across safe lawn; father watches.

R050-S05 style-lock PASS, cast PASS. Exactly two prices 20 and 30; exactly three separated teaching coins each 10; no answer.

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
- G05 option mean-volume spread: 1.3 dB.
- Module shipping size: 1386048 bytes.
- No missing package assets or timing files.

Release owns production JSON, planner, ledger, final integrated verify, main push and deployment.

## Complete review draft

```json
{
  "id": "R050",
  "kind": "review",
  "title": "複習五十",
  "reviewNumber": 50,
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
    "approved": true,
    "S01": [
      "8"
    ],
    "S05": {
      "prices": [
        "20",
        "30"
      ],
      "coins": [
        "10",
        "10",
        "10"
      ],
      "coinCount": 3,
      "noAnswer": true
    }
  },
  "pronunciationNotes": [
    "傳說 ㄔㄨㄢˊ; 行 ㄏㄤˊ; 數 ㄕㄨˇ when counting; 算 ㄙㄨㄢˋ."
  ],
  "sentences": [
    {
      "id": "R050-S01",
      "text": "翻到下一頁，頁碼印在右下角。",
      "spokenText": "翻到下一頁頁碼印在右下角",
      "displayLines": [
        "翻到下一頁，",
        "頁碼印在",
        "右下角。"
      ],
      "focusChar": "頁",
      "imageNotes": "家中書桌旁，主角小女孩剛翻過書頁，爸爸指向新頁面右下角的頁碼「8」。書頁攤開、正向閱讀，右下角位置清楚，頁碼不被手遮住。其他內容以插圖呈現，不增加書名或其他文字。這是正常印好的頁碼，不是缺頁碼或印刷錯誤。 老師批准單一頁碼8入圖。",
      "imagePrompt": "Use case illustration-story. ONE square1024x1024 richly detailed warm Taiwan children picture-book illustration. Match full L058 style sheet: fine textured pencil and painted shading, modeled expressive faces, rich sunny colors, detailed environments, not flat cartoon, anime, 3D, photo, thin/simple watercolor. Family cast sheet: preschool girl short dark bob pink clip pink cardigan cream top navy skirt pink shoes; mother chin-length side-parted dark hair ivory blouse blue jeans; father short tousled dark hair blue shirt beige trousers. Teacher reference L374-S04: ponytail teal blouse beige long skirt, NOT mother. References are style/cast only, NOT edit targets. Square safe margins. No readable Han, English, letters, numbers, labels, logos or captions anywhere EXCEPT exact digits explicitly allowed in the scene. Home desk. Recurring girl just turned leaf of an open picture book leftward; recurring father points beside BOTTOM RIGHT corner of new RIGHT page. One clearly normal printed black digit 8 in that corner, unoccluded. Pages oriented upright to reading family, wordless pictures elsewhere. Page number is correctly printed, no printing defects or missing number. Only readable mark allowed anywhere is this single 8.",
      "imageReuseDecision": "New approved scene requires purpose-built illustration with fixed role and visibility constraints.",
      "imageSrc": "/assets/reviews/R050/images/R050-S01.webp",
      "approved": true,
      "audio": {
        "src": "/assets/reviews/R050/audio/R050-S01.m4a",
        "durationMs": 3945,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 400
          },
          {
            "charIndex": 1,
            "startMs": 400,
            "endMs": 800
          },
          {
            "charIndex": 2,
            "startMs": 800,
            "endMs": 1050
          },
          {
            "charIndex": 3,
            "startMs": 1050,
            "endMs": 1300
          },
          {
            "charIndex": 4,
            "startMs": 1300,
            "endMs": 1720
          },
          {
            "charIndex": 5,
            "startMs": 1800,
            "endMs": 2180
          },
          {
            "charIndex": 6,
            "startMs": 2180,
            "endMs": 2360
          },
          {
            "charIndex": 7,
            "startMs": 2360,
            "endMs": 2660
          },
          {
            "charIndex": 8,
            "startMs": 2660,
            "endMs": 2960
          },
          {
            "charIndex": 9,
            "startMs": 2960,
            "endMs": 3180
          },
          {
            "charIndex": 10,
            "startMs": 3180,
            "endMs": 3500
          },
          {
            "charIndex": 11,
            "startMs": 3500,
            "endMs": 3745
          }
        ]
      }
    },
    {
      "id": "R050-S02",
      "text": "選單人房或者雙人房，都好。",
      "spokenText": "選單人房或者雙人房都好",
      "displayLines": [
        "選單人房",
        "或者雙人房，",
        "都好。"
      ],
      "focusChar": "雙",
      "imageNotes": "飯店櫃台前，主角爸爸查看工作人員展示的兩張房型照片：一張是單人床與一個枕頭，另一張是雙人床與兩個枕頭。爸爸神情輕鬆、手掌朝向兩張照片，表示兩種都能接受。爸爸單獨辦理住宿，不畫一家四口準備擠進單人房；照片不需房型文字或價格。",
      "imagePrompt": "Use case illustration-story. ONE square1024x1024 richly detailed warm Taiwan children picture-book illustration. Match full L058 style sheet: fine textured pencil and painted shading, modeled expressive faces, rich sunny colors, detailed environments, not flat cartoon, anime, 3D, photo, thin/simple watercolor. Family cast sheet: preschool girl short dark bob pink clip pink cardigan cream top navy skirt pink shoes; mother chin-length side-parted dark hair ivory blouse blue jeans; father short tousled dark hair blue shirt beige trousers. Teacher reference L374-S04: ponytail teal blouse beige long skirt, NOT mother. References are style/cast only, NOT edit targets. Square safe margins. No readable Han, English, letters, numbers, labels, logos or captions anywhere EXCEPT exact digits explicitly allowed in the scene. Hotel reception. ONLY recurring father is customer, no mother or child. Distinct male clerk neat hair glasses gray vest displays two large side-by-side printed ROOM PHOTOGRAPHS on counter, both fully visible: left single narrow bed with exactly ONE pillow, right wide double bed with exactly TWO pillows. The father has a relaxed open palm gestures toward BOTH photos, accepting either option. Photo bed size difference very clear. No real beds on counter, no labels or price writing.",
      "imageReuseDecision": "New approved scene requires purpose-built illustration with fixed role and visibility constraints.",
      "imageSrc": "/assets/reviews/R050/images/R050-S02.webp",
      "approved": true,
      "audio": {
        "src": "/assets/reviews/R050/audio/R050-S02.m4a",
        "durationMs": 4553,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 660
          },
          {
            "charIndex": 1,
            "startMs": 660,
            "endMs": 980
          },
          {
            "charIndex": 2,
            "startMs": 980,
            "endMs": 1220
          },
          {
            "charIndex": 3,
            "startMs": 1220,
            "endMs": 1480
          },
          {
            "charIndex": 4,
            "startMs": 1480,
            "endMs": 1870
          },
          {
            "charIndex": 5,
            "startMs": 1870,
            "endMs": 2260
          },
          {
            "charIndex": 6,
            "startMs": 2260,
            "endMs": 2760
          },
          {
            "charIndex": 7,
            "startMs": 2760,
            "endMs": 3060
          },
          {
            "charIndex": 8,
            "startMs": 3060,
            "endMs": 3340
          },
          {
            "charIndex": 9,
            "startMs": 3340,
            "endMs": 3880
          },
          {
            "charIndex": 10,
            "startMs": 3880,
            "endMs": 4353
          }
        ]
      }
    },
    {
      "id": "R050-S03",
      "text": "勇者很強，但也有弱點。",
      "spokenText": "勇者很強但也有弱點",
      "displayLines": [
        "勇者很強，",
        "但也有弱點。"
      ],
      "focusChar": "弱",
      "imageNotes": "童話場景中，勇者剛用力搬開一塊大石頭，露出石頭下的小蟲，卻嚇得縮腳後退、表情緊張。大石頭與勇者動作交代力量強，小蟲與反應呈現他仍有害怕的事。不是說勇者全然無能，不畫受傷或血腥。不沿用 L404 怪物腳踝受擊的畫面。",
      "imagePrompt": "Use case illustration-story. ONE square1024x1024 richly detailed warm Taiwan children picture-book illustration. Match full L058 style sheet: fine textured pencil and painted shading, modeled expressive faces, rich sunny colors, detailed environments, not flat cartoon, anime, 3D, photo, thin/simple watercolor. Family cast sheet: preschool girl short dark bob pink clip pink cardigan cream top navy skirt pink shoes; mother chin-length side-parted dark hair ivory blouse blue jeans; father short tousled dark hair blue shirt beige trousers. Teacher reference L374-S04: ponytail teal blouse beige long skirt, NOT mother. References are style/cast only, NOT edit targets. Square safe margins. No readable Han, English, letters, numbers, labels, logos or captions anywhere EXCEPT exact digits explicitly allowed in the scene. Fairytale forest clearing with distinct STORY HERO, not recurring family: wavy chestnut hair crimson cape green tunic brown boots, shield on back. Hero has JUST shoved a heavy large boulder to one side leaving a bare depression in ground; huge rock and his braced posture demonstrate strength. A tiny harmless worm or beetle exposed in depression startles him: one boot lifted, body recoiling, worried face staring down at insect. Show both moved boulder and tiny bug clearly. No injury, blood, attacking, monster or ankle blow. He is strong but scared of small bug, not weak overall. No modern pink girl or family characters.",
      "imageReuseDecision": "New approved scene requires purpose-built illustration with fixed role and visibility constraints.",
      "imageSrc": "/assets/reviews/R050/images/R050-S03.webp",
      "approved": true,
      "audio": {
        "src": "/assets/reviews/R050/audio/R050-S03.m4a",
        "durationMs": 3999,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 540
          },
          {
            "charIndex": 1,
            "startMs": 540,
            "endMs": 740
          },
          {
            "charIndex": 2,
            "startMs": 740,
            "endMs": 1320
          },
          {
            "charIndex": 3,
            "startMs": 1320,
            "endMs": 1600
          },
          {
            "charIndex": 4,
            "startMs": 2260,
            "endMs": 2500
          },
          {
            "charIndex": 5,
            "startMs": 2500,
            "endMs": 2840
          },
          {
            "charIndex": 6,
            "startMs": 2840,
            "endMs": 3240
          },
          {
            "charIndex": 7,
            "startMs": 3240,
            "endMs": 3440
          },
          {
            "charIndex": 8,
            "startMs": 3440,
            "endMs": 3799
          }
        ]
      }
    },
    {
      "id": "R050-S04",
      "text": "小狗越跑越快，我跟不上。",
      "spokenText": "小狗越跑越快我跟不上",
      "displayLines": [
        "小狗",
        "越跑越快，",
        "我跟不上。"
      ],
      "focusChar": "越",
      "imageNotes": "公園寬闊草地上，主角小女孩正追著往前跑的小狗，兩者已拉開距離。小狗步伐輕快、身體向前伸展，女孩努力跑但落在後方；爸爸在不遠處看顧。場地遠離車道與水邊，只畫一隻小狗，不用分身表示速度。",
      "imagePrompt": "Use case illustration-story. ONE square1024x1024 richly detailed warm Taiwan children picture-book illustration. Match full L058 style sheet: fine textured pencil and painted shading, modeled expressive faces, rich sunny colors, detailed environments, not flat cartoon, anime, 3D, photo, thin/simple watercolor. Family cast sheet: preschool girl short dark bob pink clip pink cardigan cream top navy skirt pink shoes; mother chin-length side-parted dark hair ivory blouse blue jeans; father short tousled dark hair blue shirt beige trousers. Teacher reference L374-S04: ponytail teal blouse beige long skirt, NOT mother. References are style/cast only, NOT edit targets. Square safe margins. No readable Han, English, letters, numbers, labels, logos or captions anywhere EXCEPT exact digits explicitly allowed in the scene. Wide safe park lawn far from roads or water. ONE small dog stretched forward in a lively running stride, noticeably ahead of recurring girl running hard to catch up, distance visible between them. Recurring father watches nearby in background. Girl effortful but safe, dog happy, no duplicate dogs or motion ghosts. Clear forward running direction across grassy open space. No text.",
      "imageReuseDecision": "New approved scene requires purpose-built illustration with fixed role and visibility constraints.",
      "imageSrc": "/assets/reviews/R050/images/R050-S04.webp",
      "approved": true,
      "audio": {
        "src": "/assets/reviews/R050/audio/R050-S04.m4a",
        "durationMs": 3545,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 580
          },
          {
            "charIndex": 1,
            "startMs": 580,
            "endMs": 800
          },
          {
            "charIndex": 2,
            "startMs": 800,
            "endMs": 1180
          },
          {
            "charIndex": 3,
            "startMs": 1180,
            "endMs": 1440
          },
          {
            "charIndex": 4,
            "startMs": 1440,
            "endMs": 1760
          },
          {
            "charIndex": 5,
            "startMs": 1760,
            "endMs": 2040
          },
          {
            "charIndex": 6,
            "startMs": 2540,
            "endMs": 2720
          },
          {
            "charIndex": 7,
            "startMs": 2720,
            "endMs": 2940
          },
          {
            "charIndex": 8,
            "startMs": 2940,
            "endMs": 3120
          },
          {
            "charIndex": 9,
            "startMs": 3120,
            "endMs": 3345
          }
        ]
      }
    },
    {
      "id": "R050-S05",
      "text": "算一算，買菜的錢夠不夠？",
      "spokenText": "算一算買菜的錢夠不夠",
      "displayLines": [
        "算一算，",
        "買菜的錢",
        "夠不夠？"
      ],
      "focusChar": "算",
      "imageNotes": "市場攤位前，主角媽媽與女孩查看準備購買的兩樣菜。兩樣菜分別標「20」「30」；媽媽攤開手中三枚簡化教學硬幣，每枚清楚標「10」，女孩對照價牌計算。硬幣恰好三枚，不需真實幣面細節。不寫總價、不寫「不夠」或其他答案。 老師批准20、30和恰好三枚10入圖，不顯示答案。",
      "imagePrompt": "Use case illustration-story. ONE square1024x1024 richly detailed warm Taiwan children picture-book illustration. Match full L058 style sheet: fine textured pencil and painted shading, modeled expressive faces, rich sunny colors, detailed environments, not flat cartoon, anime, 3D, photo, thin/simple watercolor. Family cast sheet: preschool girl short dark bob pink clip pink cardigan cream top navy skirt pink shoes; mother chin-length side-parted dark hair ivory blouse blue jeans; father short tousled dark hair blue shirt beige trousers. Teacher reference L374-S04: ponytail teal blouse beige long skirt, NOT mother. References are style/cast only, NOT edit targets. Square safe margins. No readable Han, English, letters, numbers, labels, logos or captions anywhere EXCEPT exact digits explicitly allowed in the scene. Market vegetable stall. Recurring mother and girl consider exactly TWO types of vegetables displayed in separate baskets. ONE plain price card by left vegetables reads EXACTLY 20, ONE by right vegetables reads EXACTLY 30. Foreground mother extends ONE open palm carrying EXACTLY THREE large separated simplified teaching coins side by side, each coin reads EXACTLY 10 clearly. Three coin circles only, no stacked or hidden extra coins. Girl compares palm coins with two price signs while thinking. Composition makes the THREE coin labels legible at phone size, all in same readable orientation. No realistic currency designs, no totals, plus/equal signs, calculations, answer, speech bubbles or any other text/numbers. ONLY allowed digits: 20 and30 on signs; 10,10,10 on three coins. Faces and context remain visible.",
      "imageReuseDecision": "New approved scene requires purpose-built illustration with fixed role and visibility constraints.",
      "imageSrc": "/assets/reviews/R050/images/R050-S05.webp",
      "approved": true,
      "audio": {
        "src": "/assets/reviews/R050/audio/R050-S05.m4a",
        "durationMs": 3968,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 540
          },
          {
            "charIndex": 1,
            "startMs": 540,
            "endMs": 760
          },
          {
            "charIndex": 2,
            "startMs": 760,
            "endMs": 1100
          },
          {
            "charIndex": 3,
            "startMs": 1600,
            "endMs": 2000
          },
          {
            "charIndex": 4,
            "startMs": 2000,
            "endMs": 2260
          },
          {
            "charIndex": 5,
            "startMs": 2260,
            "endMs": 2500
          },
          {
            "charIndex": 6,
            "startMs": 2500,
            "endMs": 2820
          },
          {
            "charIndex": 7,
            "startMs": 2820,
            "endMs": 3280
          },
          {
            "charIndex": 8,
            "startMs": 3280,
            "endMs": 3480
          },
          {
            "charIndex": 9,
            "startMs": 3480,
            "endMs": 3768
          }
        ]
      }
    }
  ],
  "sentenceGames": [
    {
      "id": "R050-G01",
      "type": "find-character",
      "sentenceId": "R050-S01",
      "targetChar": "頁",
      "targetCharIndex": 4,
      "prompt": "找出句子裡的字。"
    },
    {
      "id": "R050-G02",
      "type": "teach-character",
      "sentenceId": "R050-S02",
      "targetChar": "雙",
      "targetCharIndex": 6,
      "prompt": "教小兔子念這個字。",
      "teachAudio": {
        "prefixText": "選單人房或者",
        "suffixText": "人房都好",
        "prefixSrc": "/assets/reviews/R050/audio/R050-G02-prefix.m4a",
        "suffixSrc": "/assets/reviews/R050/audio/R050-G02-suffix.m4a",
        "prefixAudio": {
          "src": "/assets/reviews/R050/audio/R050-G02-prefix.m4a",
          "durationMs": 3414,
          "charTimings": [
            {
              "charIndex": 0,
              "startMs": 0,
              "endMs": 700
            },
            {
              "charIndex": 1,
              "startMs": 700,
              "endMs": 1340
            },
            {
              "charIndex": 2,
              "startMs": 1340,
              "endMs": 1660
            },
            {
              "charIndex": 3,
              "startMs": 1660,
              "endMs": 2040
            },
            {
              "charIndex": 4,
              "startMs": 2040,
              "endMs": 2510
            },
            {
              "charIndex": 5,
              "startMs": 2510,
              "endMs": 3214
            }
          ]
        },
        "suffixAudio": {
          "src": "/assets/reviews/R050/audio/R050-G02-suffix.m4a",
          "durationMs": 2192,
          "charTimings": [
            {
              "charIndex": 0,
              "startMs": 0,
              "endMs": 640
            },
            {
              "charIndex": 1,
              "startMs": 680,
              "endMs": 1100
            },
            {
              "charIndex": 2,
              "startMs": 1220,
              "endMs": 1500
            },
            {
              "charIndex": 3,
              "startMs": 1580,
              "endMs": 1992
            }
          ]
        }
      }
    },
    {
      "id": "R050-G03",
      "type": "missing-character",
      "sentenceId": "R050-S03",
      "targetChar": "弱",
      "targetCharIndex": 7,
      "prompt": "找出少了哪個字。",
      "missingIndexes": [
        7
      ],
      "options": [
        {
          "id": "correct",
          "text": "弱",
          "correct": true
        },
        {
          "id": "wrong-one",
          "text": "強",
          "correct": false
        },
        {
          "id": "wrong-two",
          "text": "大",
          "correct": false
        }
      ]
    },
    {
      "id": "R050-G04",
      "type": "partial-order",
      "sentenceId": "R050-S04",
      "targetChar": "越",
      "targetCharIndex": 2,
      "prompt": "把字放回句子裡。",
      "missingIndexes": [
        6,
        7,
        8,
        9
      ],
      "options": [
        {
          "id": "card-shang",
          "text": "上",
          "correct": true,
          "correctOrder": 3
        },
        {
          "id": "card-wo",
          "text": "我",
          "correct": true,
          "correctOrder": 0
        },
        {
          "id": "card-bu",
          "text": "不",
          "correct": true,
          "correctOrder": 2
        },
        {
          "id": "card-gen",
          "text": "跟",
          "correct": true,
          "correctOrder": 1
        }
      ]
    },
    {
      "id": "R050-G05",
      "type": "choose-pronunciation",
      "sentenceId": "R050-S05",
      "targetChar": "算",
      "targetCharIndex": 0,
      "prompt": "聽聽看，誰念得對？",
      "options": [
        {
          "id": "correct",
          "text": "算一算，買菜的錢夠不夠？",
          "correct": true,
          "audioSrc": "/assets/reviews/R050/audio/R050-S05.m4a",
          "audio": {
            "src": "/assets/reviews/R050/audio/R050-S05.m4a",
            "durationMs": 3968,
            "charTimings": [
              {
                "charIndex": 0,
                "startMs": 0,
                "endMs": 540
              },
              {
                "charIndex": 1,
                "startMs": 540,
                "endMs": 760
              },
              {
                "charIndex": 2,
                "startMs": 760,
                "endMs": 1100
              },
              {
                "charIndex": 3,
                "startMs": 1600,
                "endMs": 2000
              },
              {
                "charIndex": 4,
                "startMs": 2000,
                "endMs": 2260
              },
              {
                "charIndex": 5,
                "startMs": 2260,
                "endMs": 2500
              },
              {
                "charIndex": 6,
                "startMs": 2500,
                "endMs": 2820
              },
              {
                "charIndex": 7,
                "startMs": 2820,
                "endMs": 3280
              },
              {
                "charIndex": 8,
                "startMs": 3280,
                "endMs": 3480
              },
              {
                "charIndex": 9,
                "startMs": 3480,
                "endMs": 3768
              }
            ]
          }
        },
        {
          "id": "wrong-one",
          "text": "算一算，買書的錢夠不夠？",
          "correct": false,
          "audioSrc": "/assets/reviews/R050/audio/R050-G05-wrong-one.m4a",
          "audio": {
            "src": "/assets/reviews/R050/audio/R050-G05-wrong-one.m4a",
            "durationMs": 3654,
            "charTimings": [
              {
                "charIndex": 0,
                "startMs": 0,
                "endMs": 520
              },
              {
                "charIndex": 1,
                "startMs": 520,
                "endMs": 760
              },
              {
                "charIndex": 2,
                "startMs": 760,
                "endMs": 1300
              },
              {
                "charIndex": 3,
                "startMs": 1300,
                "endMs": 1920
              },
              {
                "charIndex": 4,
                "startMs": 1920,
                "endMs": 2180
              },
              {
                "charIndex": 5,
                "startMs": 2180,
                "endMs": 2380
              },
              {
                "charIndex": 6,
                "startMs": 2380,
                "endMs": 2700
              },
              {
                "charIndex": 7,
                "startMs": 2700,
                "endMs": 2980
              },
              {
                "charIndex": 8,
                "startMs": 2980,
                "endMs": 3160
              },
              {
                "charIndex": 9,
                "startMs": 3160,
                "endMs": 3454
              }
            ]
          }
        },
        {
          "id": "wrong-two",
          "text": "算一算，買菜的錢多不多？",
          "correct": false,
          "audioSrc": "/assets/reviews/R050/audio/R050-G05-wrong-two.m4a",
          "audio": {
            "src": "/assets/reviews/R050/audio/R050-G05-wrong-two.m4a",
            "durationMs": 4010,
            "charTimings": [
              {
                "charIndex": 0,
                "startMs": 0,
                "endMs": 760
              },
              {
                "charIndex": 1,
                "startMs": 760,
                "endMs": 1080
              },
              {
                "charIndex": 2,
                "startMs": 1080,
                "endMs": 1500
              },
              {
                "charIndex": 3,
                "startMs": 2020,
                "endMs": 2260
              },
              {
                "charIndex": 4,
                "startMs": 2260,
                "endMs": 2480
              },
              {
                "charIndex": 5,
                "startMs": 2480,
                "endMs": 2720
              },
              {
                "charIndex": 6,
                "startMs": 2720,
                "endMs": 2980
              },
              {
                "charIndex": 7,
                "startMs": 2980,
                "endMs": 3340
              },
              {
                "charIndex": 8,
                "startMs": 3340,
                "endMs": 3520
              },
              {
                "charIndex": 9,
                "startMs": 3520,
                "endMs": 3810
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

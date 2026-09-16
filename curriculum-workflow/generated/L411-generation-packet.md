# L411 Production E package

Status: dependency-blocked-asset-complete.

## Boundary and ownership

Package base: 853a02b1a0d8bbcaf512ed4ecd5c967297ec4df0. Original data snapshot: 03c720e0f102a573ae2f96047e59e78721580817. Latest main checked: da46929a5f1f90ec89691ad9e2cfa81be8db30ef, L407. Allowed set415; remaining dependencies L408, L409, L410. R049/R050 already integrated after405. No L412 成 or later characters. Production owns only L411 package and its registry row; Release owns shared-state integration and deployment.

## Approved content and validation

Coverage: 定3, 試4, 辦2, 法2, 減1, 加1; all targets PASS. Han counts10/11/11/11/10. Display line join, <=6 visible characters, spokenText, focus, allowed text/options and all Stage4 indices/cards PASS. Five games use five sentences once in canonical order.

5 final1024-square WebPs; 10 processed AAC M4A files including standalone 定, five sentences, exact G02 fragments and two complete G05 distractors. Correct G05 reuses S04. All decode; G05 volume spread0.7dB. Total1167502bytes. All referenced files and nine Han timing lists present.

Package-local validate-production-assets PASS. Package-local audit-asset-formats --strict PASS with zero warnings. Base npm run validate:production PASS.

## Visual QA

Actual exported WebPs viewed side by side with full L058 sheet, refined L115-S01/S02, L118-S02, L119-S01, L128-S03, family L154-S01/L162-S04/L163-S02 and dedicated xiaoyue.webp. L058 style-only. No readable text/number exceptions.

S01 style-lock PASS, cast PASS. Open unobstructed high window, ordinary closed door; girl and exact Xiaoyue cast remain on floor by two low boxes.

S02 style-lock PASS, cast PASS. Decorated working pen and plain comparison pen; mother points to wordless trial lines.

S03 style-lock PASS, cast PASS. Separate torn-seam garment handed to mother; open sewing kit controlled by adult.

S04 style-lock PASS, cast PASS. Unlit lamp, mother pressing switch, bright daylight and girl reading near window.

S05 style-lock PASS, cast PASS. Separate red and white paint with central pink mixture; brush stirs pink.

S01 initial barred-window draft was rejected for obstructing the intended exit and corrected to an open casement. Rejected draft was not committed. Other images accepted after final export review.

## Audio and timing evidence

gpt-4o-mini-tts coral speed0.9; natural Taiwan Mandarin requested. Processed with repo assets:audio path while preserving leading speech; only trailing silence trimmed. Whisper AI alignment plus documented RMS/onset repairs for punctuation pauses and compressed/overlapping timestamps; no energy-only alignment. Last syllable decays retained.

G02 prefix is exactly 衣服破了媽媽一, suffix 有辦法. Prefix was regenerated whole until final yi had an explicit rising contour. TTS-only pronunciation rendering used 衣服破了，媽媽姨 to realize yi2 sandhi; app text remains 一, and no extra 定 syllable is present. Unprompted independent ASR heard seven syllables ending 咦; measured final vowel rises approximately151Hz to257Hz. Expected text context was supplied to Whisper for orthographic timing of this one clip only. The standalone 定 was generated separately and has a falling contour approximately329Hz to120Hz. These are technical checks, not a claim of subjective listening.

## Browser QA

Local L411 review UI loaded5 sentence cards and6 extra audio controls. Clicking G02-prefix Play crashed Codex browser; next inspection confirmed This page crashed. Following documented browser-tooling fallback, subjective continuous listening, highlight playback and phone recording/stitched replay were skipped. No teacher listening PASS is claimed. Required file, decode, allowed-character, alignment and local-validator gates passed.

## Remaining work

No missing package assets or timings. Release awaits L408, L409, L410 and performs final integrated verification.

## Complete draft

```json
{
  "id": "L411",
  "order": 411,
  "kind": "lesson",
  "title": "定",
  "newChars": [
    "定"
  ],
  "zhuyin": {
    "定": "ㄉㄧㄥˋ"
  },
  "dependsOnLessons": [
    "L408",
    "L409",
    "L410"
  ],
  "provisionalLearnedChars": [
    "法",
    "辦",
    "試"
  ],
  "sourceBoundary": "03c720e0f102a573ae2f96047e59e78721580817",
  "packageBase": "853a02b1a0d8bbcaf512ed4ecd5c967297ec4df0",
  "packageStatus": "dependency-blocked-asset-complete",
  "releaseBlockers": [
    "L408",
    "L409",
    "L410"
  ],
  "imageTextExceptions": "None. No readable text or numbers.",
  "pronunciationNotes": [
    "定 ㄉㄧㄥˋ. G02 prefix ends 一 pronounced yi2 in 一定 context, no 定 syllable. Suffix 有辦法."
  ],
  "requiredRounds": 5,
  "charAudio": {
    "定": "/assets/lessons/L411/audio/char-u5b9a.m4a"
  },
  "sentences": [
    {
      "id": "L411-S01",
      "text": "試試看，一定有辦法出去。",
      "spokenText": "試試看一定有辦法出去",
      "displayLines": [
        "試試看，",
        "一定有辦法",
        "出去。"
      ],
      "focusChar": "定",
      "imageNotes": "明亮的小倉庫裡，主角小女孩和同學小月被反鎖、發現門打不開，正在一起找出口。門旁較高透氣窗透進日光，兩人把低矮收納箱搬到窗下，女孩指窗、小月專注而有希望地看她。只畫準備討論，雙腳都在地面，不畫高塔、攀爬或懸在窗外。整潔無危險工具、火煙或驚恐。小月依 xiaoyue.webp：長柔卷深栗髮、月亮髮夾、薰衣草 cardigan、奶油上衣、青綠百褶裙、白襪紫鞋。 最終圖使用開啟的側鉸透氣窗，窗洞無格柵阻擋；孩子仍在地面。",
      "imagePrompt": "Use case illustration-story. ONE square1024x1024 richly detailed warm Taiwan children picture-book illustration. Strict match full L058 reference sheet and refined preferred sheet: fine textured pencil painted shading, modeled faces, warm varied colors, detailed environments. Girl short dark bob ONE pink clip pink cardigan cream blouse navy skirt pink shoes, consistent preschool proportions. Mother chin-length dark sidepart bob ivory blouse blue jeans, distinct adult. References supply style/cast, not edit targets. No simplified cartoon, thin watercolor, anime,3D,photo. Safe margins. Absolutely NO readable letters, Han, digits, logos or captions. Bright tidy small storeroom. Closed locked door to one side, small ventilation window higher in wall beside door with daylight. Recurring girl points hopefully toward window, classmate Xiaoyue looks attentively at her while moving one low storage box beneath window. Only TWO low wide stable boxes maximum, no tower. BOTH girls stand with BOTH feet on floor, discussion and preparation only, no climbing or hanging or tools. Xiaoyue uses dedicated reference long wavy chestnut hair crescent moon clip lavender cardigan cream blouse teal pleated skirt white socks violet shoes. Do not confuse her with pink protagonist. No mother or other people in this scene. Final correction: unobstructed open casement window; ordinary closed door handle, no interior padlock.",
      "imageReuseDecision": "New teacher-approved scene; full style and relevant cast references.",
      "imageSrc": "/assets/lessons/L411/images/L411-S01.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L411/audio/L411-S01.m4a",
        "durationMs": 3755,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 600
          },
          {
            "charIndex": 1,
            "startMs": 600,
            "endMs": 860
          },
          {
            "charIndex": 2,
            "startMs": 860,
            "endMs": 1220
          },
          {
            "charIndex": 3,
            "startMs": 1500,
            "endMs": 1820
          },
          {
            "charIndex": 4,
            "startMs": 1820,
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
            "endMs": 2620
          },
          {
            "charIndex": 7,
            "startMs": 2620,
            "endMs": 2980
          },
          {
            "charIndex": 8,
            "startMs": 2980,
            "endMs": 3200
          },
          {
            "charIndex": 9,
            "startMs": 3200,
            "endMs": 3555
          }
        ]
      }
    },
    {
      "id": "L411-S02",
      "text": "貴的筆不一定好用，先試試。",
      "spokenText": "貴的筆不一定好用先試試",
      "displayLines": [
        "貴的筆",
        "不一定好用，",
        "先試試。"
      ],
      "focusChar": "定",
      "imageNotes": "文具店試寫區，主角媽媽陪女孩試筆。女孩拿精緻筆在紙上畫簡單線條，旁邊一支樸素筆供比較，媽媽指紙提醒實際試用。精緻筆不是壞掉；無價格數字或可讀文字。",
      "imagePrompt": "Use case illustration-story. ONE square1024x1024 richly detailed warm Taiwan children picture-book illustration. Strict match full L058 reference sheet and refined preferred sheet: fine textured pencil painted shading, modeled faces, warm varied colors, detailed environments. Girl short dark bob ONE pink clip pink cardigan cream blouse navy skirt pink shoes, consistent preschool proportions. Mother chin-length dark sidepart bob ivory blouse blue jeans, distinct adult. References supply style/cast, not edit targets. No simplified cartoon, thin watercolor, anime,3D,photo. Safe margins. Absolutely NO readable letters, Han, digits, logos or captions. Stationery shop pen test counter. Mother and girl. Girl uses ONE elegant decorated pen drawing simple wordless lines on trial paper. ONE plain simple pen rests beside it for comparison. Mother points gently at paper encouraging test. No broken pen or ink spill. No price tags or readable writing on shelves or paper.",
      "imageReuseDecision": "New teacher-approved scene; full style and relevant cast references.",
      "imageSrc": "/assets/lessons/L411/images/L411-S02.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L411/audio/L411-S02.m4a",
        "durationMs": 4253,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 360
          },
          {
            "charIndex": 1,
            "startMs": 360,
            "endMs": 700
          },
          {
            "charIndex": 2,
            "startMs": 700,
            "endMs": 860
          },
          {
            "charIndex": 3,
            "startMs": 860,
            "endMs": 1640
          },
          {
            "charIndex": 4,
            "startMs": 1640,
            "endMs": 1830
          },
          {
            "charIndex": 5,
            "startMs": 1830,
            "endMs": 2020
          },
          {
            "charIndex": 6,
            "startMs": 2020,
            "endMs": 2420
          },
          {
            "charIndex": 7,
            "startMs": 2420,
            "endMs": 2600
          },
          {
            "charIndex": 8,
            "startMs": 3260,
            "endMs": 3560
          },
          {
            "charIndex": 9,
            "startMs": 3560,
            "endMs": 3820
          },
          {
            "charIndex": 10,
            "startMs": 3820,
            "endMs": 4053
          }
        ]
      }
    },
    {
      "id": "L411-S03",
      "text": "衣服破了，媽媽一定有辦法。",
      "spokenText": "衣服破了媽媽一定有辦法",
      "displayLines": [
        "衣服破了，",
        "媽媽一定",
        "有辦法。"
      ],
      "focusChar": "定",
      "imageNotes": "家中女孩拿接縫裂開的衣服交給媽媽，表情期待。媽媽坐桌邊查看破口，打開針線盒準備修補。衣服不穿在女孩身上，針線由媽媽使用，女孩不拿針。",
      "imagePrompt": "Use case illustration-story. ONE square1024x1024 richly detailed warm Taiwan children picture-book illustration. Strict match full L058 reference sheet and refined preferred sheet: fine textured pencil painted shading, modeled faces, warm varied colors, detailed environments. Girl short dark bob ONE pink clip pink cardigan cream blouse navy skirt pink shoes, consistent preschool proportions. Mother chin-length dark sidepart bob ivory blouse blue jeans, distinct adult. References supply style/cast, not edit targets. No simplified cartoon, thin watercolor, anime,3D,photo. Safe margins. Absolutely NO readable letters, Han, digits, logos or captions. Home sewing table. Girl hands mother a separate garment with clear split seam and a small visible gap. Girl is fully dressed separately, garment not worn. Mother sits inspecting split seam, open sewing kit at her side ready to mend. Girl holds no needles, mother controls all sewing items. Hopeful trusting expressions.",
      "imageReuseDecision": "New teacher-approved scene; full style and relevant cast references.",
      "imageSrc": "/assets/lessons/L411/images/L411-S03.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L411/audio/L411-S03.m4a",
        "durationMs": 4267,
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
            "endMs": 1100
          },
          {
            "charIndex": 3,
            "startMs": 1100,
            "endMs": 1680
          },
          {
            "charIndex": 4,
            "startMs": 1760,
            "endMs": 2080
          },
          {
            "charIndex": 5,
            "startMs": 2080,
            "endMs": 2360
          },
          {
            "charIndex": 6,
            "startMs": 2480,
            "endMs": 2810
          },
          {
            "charIndex": 7,
            "startMs": 2810,
            "endMs": 3140
          },
          {
            "charIndex": 8,
            "startMs": 3140,
            "endMs": 3480
          },
          {
            "charIndex": 9,
            "startMs": 3480,
            "endMs": 3780
          },
          {
            "charIndex": 10,
            "startMs": 3780,
            "endMs": 4067
          }
        ]
      }
    },
    {
      "id": "L411-S04",
      "text": "白天少開燈，可以減少用電。",
      "spokenText": "白天少開燈可以減少用電",
      "displayLines": [
        "白天少開燈，",
        "可以減少",
        "用電。"
      ],
      "focusChar": "減",
      "imageNotes": "白天家中客廳窗簾拉開，自然光充足。媽媽按牆壁開關關掉不需要的客廳燈，女孩在明亮窗邊看書。燈已不發光，室內仍亮；不畫摸黑閱讀，無電表或數字。",
      "imagePrompt": "Use case illustration-story. ONE square1024x1024 richly detailed warm Taiwan children picture-book illustration. Strict match full L058 reference sheet and refined preferred sheet: fine textured pencil painted shading, modeled faces, warm varied colors, detailed environments. Girl short dark bob ONE pink clip pink cardigan cream blouse navy skirt pink shoes, consistent preschool proportions. Mother chin-length dark sidepart bob ivory blouse blue jeans, distinct adult. References supply style/cast, not edit targets. No simplified cartoon, thin watercolor, anime,3D,photo. Safe margins. Absolutely NO readable letters, Han, digits, logos or captions. Sunlit home living room, curtains wide open, very bright natural daylight. Mother presses wall light switch OFF, ceiling lamp visibly unlit. Girl sits near sunny window reading wordless picture book comfortably. Room remains bright; no dark reading, no electricity meter or numbers.",
      "imageReuseDecision": "New teacher-approved scene; full style and relevant cast references.",
      "imageSrc": "/assets/lessons/L411/images/L411-S04.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L411/audio/L411-S04.m4a",
        "durationMs": 3994,
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
            "endMs": 1340
          },
          {
            "charIndex": 3,
            "startMs": 1340,
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
            "endMs": 2160
          },
          {
            "charIndex": 6,
            "startMs": 2160,
            "endMs": 2480
          },
          {
            "charIndex": 7,
            "startMs": 2480,
            "endMs": 2900
          },
          {
            "charIndex": 8,
            "startMs": 2900,
            "endMs": 3200
          },
          {
            "charIndex": 9,
            "startMs": 3200,
            "endMs": 3520
          },
          {
            "charIndex": 10,
            "startMs": 3520,
            "endMs": 3794
          }
        ]
      }
    },
    {
      "id": "L411-S05",
      "text": "紅色加白色，就有粉紅色。",
      "spokenText": "紅色加白色就有粉紅色",
      "displayLines": [
        "紅色加白色，",
        "就有粉紅色。"
      ],
      "focusChar": "加",
      "imageNotes": "畫畫桌前女孩調色，媽媽陪同。白色調色盤分開紅色、白色顏料，中央混合出粉紅色，女孩畫筆攪拌中央。三色清楚，不混其他色，無色名或文字標籤。",
      "imagePrompt": "Use case illustration-story. ONE square1024x1024 richly detailed warm Taiwan children picture-book illustration. Strict match full L058 reference sheet and refined preferred sheet: fine textured pencil painted shading, modeled faces, warm varied colors, detailed environments. Girl short dark bob ONE pink clip pink cardigan cream blouse navy skirt pink shoes, consistent preschool proportions. Mother chin-length dark sidepart bob ivory blouse blue jeans, distinct adult. References supply style/cast, not edit targets. No simplified cartoon, thin watercolor, anime,3D,photo. Safe margins. Absolutely NO readable letters, Han, digits, logos or captions. Home painting table, girl stirs center of ONE white paint palette with ONE paintbrush held naturally. Palette close and clearly visible shows exactly THREE paint areas: pure red separate on left, white separate on right with subtle gray edge so white is visible, central mixed pink from red+white. Brush tip in pink central mixture. Mother nearby encouraging. No blue yellow green paints on palette or extra paints, no text labels.",
      "imageReuseDecision": "New teacher-approved scene; full style and relevant cast references.",
      "imageSrc": "/assets/lessons/L411/images/L411-S05.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L411/audio/L411-S05.m4a",
        "durationMs": 4369,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 520
          },
          {
            "charIndex": 1,
            "startMs": 520,
            "endMs": 880
          },
          {
            "charIndex": 2,
            "startMs": 880,
            "endMs": 1480
          },
          {
            "charIndex": 3,
            "startMs": 1480,
            "endMs": 1860
          },
          {
            "charIndex": 4,
            "startMs": 1860,
            "endMs": 2120
          },
          {
            "charIndex": 5,
            "startMs": 2580,
            "endMs": 2920
          },
          {
            "charIndex": 6,
            "startMs": 2920,
            "endMs": 3240
          },
          {
            "charIndex": 7,
            "startMs": 3240,
            "endMs": 3560
          },
          {
            "charIndex": 8,
            "startMs": 3560,
            "endMs": 3840
          },
          {
            "charIndex": 9,
            "startMs": 3840,
            "endMs": 4169
          }
        ]
      }
    }
  ],
  "sentenceGames": [
    {
      "id": "L411-G01",
      "type": "find-character",
      "sentenceId": "L411-S01",
      "targetChar": "定",
      "targetCharIndex": 4,
      "prompt": "找出句子裡的字。"
    },
    {
      "id": "L411-G02",
      "type": "teach-character",
      "sentenceId": "L411-S03",
      "targetChar": "定",
      "targetCharIndex": 7,
      "prompt": "教小兔子念這個字。",
      "teachAudio": {
        "prefixText": "衣服破了媽媽一",
        "suffixText": "有辦法",
        "prefixSrc": "/assets/lessons/L411/audio/L411-G02-prefix.m4a",
        "suffixSrc": "/assets/lessons/L411/audio/L411-G02-suffix.m4a",
        "prefixAudio": {
          "src": "/assets/lessons/L411/audio/L411-G02-prefix.m4a",
          "durationMs": 3801,
          "charTimings": [
            {
              "charIndex": 0,
              "startMs": 0,
              "endMs": 440
            },
            {
              "charIndex": 1,
              "startMs": 440,
              "endMs": 700
            },
            {
              "charIndex": 2,
              "startMs": 700,
              "endMs": 1280
            },
            {
              "charIndex": 3,
              "startMs": 1280,
              "endMs": 1960
            },
            {
              "charIndex": 4,
              "startMs": 2190,
              "endMs": 2590
            },
            {
              "charIndex": 5,
              "startMs": 2590,
              "endMs": 2950
            },
            {
              "charIndex": 6,
              "startMs": 3170,
              "endMs": 3601
            }
          ]
        },
        "suffixAudio": {
          "src": "/assets/lessons/L411/audio/L411-G02-suffix.m4a",
          "durationMs": 1452,
          "charTimings": [
            {
              "charIndex": 0,
              "startMs": 0,
              "endMs": 680
            },
            {
              "charIndex": 1,
              "startMs": 680,
              "endMs": 940
            },
            {
              "charIndex": 2,
              "startMs": 940,
              "endMs": 1252
            }
          ]
        }
      }
    },
    {
      "id": "L411-G03",
      "type": "missing-character",
      "sentenceId": "L411-S02",
      "targetChar": "定",
      "targetCharIndex": 5,
      "prompt": "找出少了哪個字。",
      "missingIndexes": [
        5
      ],
      "options": [
        {
          "id": "correct",
          "text": "定",
          "correct": true
        },
        {
          "id": "wrong-one",
          "text": "樣",
          "correct": false
        },
        {
          "id": "wrong-two",
          "text": "直",
          "correct": false
        }
      ]
    },
    {
      "id": "L411-G04",
      "type": "partial-order",
      "sentenceId": "L411-S05",
      "targetChar": "加",
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
          "id": "card-fen",
          "text": "粉",
          "correct": true,
          "correctOrder": 1
        },
        {
          "id": "card-se",
          "text": "色",
          "correct": true,
          "correctOrder": 3
        },
        {
          "id": "card-you",
          "text": "有",
          "correct": true,
          "correctOrder": 0
        },
        {
          "id": "card-hong",
          "text": "紅",
          "correct": true,
          "correctOrder": 2
        }
      ]
    },
    {
      "id": "L411-G05",
      "type": "choose-pronunciation",
      "sentenceId": "L411-S04",
      "targetChar": "減",
      "targetCharIndex": 7,
      "prompt": "聽聽看，誰念得對？",
      "options": [
        {
          "id": "correct",
          "text": "白天少開燈，可以減少用電。",
          "correct": true,
          "audioSrc": "/assets/lessons/L411/audio/L411-S04.m4a",
          "audio": {
            "src": "/assets/lessons/L411/audio/L411-S04.m4a",
            "durationMs": 3994,
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
                "endMs": 1340
              },
              {
                "charIndex": 3,
                "startMs": 1340,
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
                "endMs": 2160
              },
              {
                "charIndex": 6,
                "startMs": 2160,
                "endMs": 2480
              },
              {
                "charIndex": 7,
                "startMs": 2480,
                "endMs": 2900
              },
              {
                "charIndex": 8,
                "startMs": 2900,
                "endMs": 3200
              },
              {
                "charIndex": 9,
                "startMs": 3200,
                "endMs": 3520
              },
              {
                "charIndex": 10,
                "startMs": 3520,
                "endMs": 3794
              }
            ]
          }
        },
        {
          "id": "wrong-one",
          "text": "晚上少開燈，可以減少用電。",
          "correct": false,
          "audioSrc": "/assets/lessons/L411/audio/L411-G05-wrong-one.m4a",
          "audio": {
            "src": "/assets/lessons/L411/audio/L411-G05-wrong-one.m4a",
            "durationMs": 4988,
            "charTimings": [
              {
                "charIndex": 0,
                "startMs": 0,
                "endMs": 470
              },
              {
                "charIndex": 1,
                "startMs": 470,
                "endMs": 1100
              },
              {
                "charIndex": 2,
                "startMs": 1420,
                "endMs": 1880
              },
              {
                "charIndex": 3,
                "startMs": 1880,
                "endMs": 2180
              },
              {
                "charIndex": 4,
                "startMs": 2180,
                "endMs": 2380
              },
              {
                "charIndex": 5,
                "startMs": 3240,
                "endMs": 3340
              },
              {
                "charIndex": 6,
                "startMs": 3340,
                "endMs": 3440
              },
              {
                "charIndex": 7,
                "startMs": 3440,
                "endMs": 3860
              },
              {
                "charIndex": 8,
                "startMs": 3860,
                "endMs": 4180
              },
              {
                "charIndex": 9,
                "startMs": 4180,
                "endMs": 4540
              },
              {
                "charIndex": 10,
                "startMs": 4540,
                "endMs": 4788
              }
            ]
          }
        },
        {
          "id": "wrong-two",
          "text": "白天少開燈，可以減少用水。",
          "correct": false,
          "audioSrc": "/assets/lessons/L411/audio/L411-G05-wrong-two.m4a",
          "audio": {
            "src": "/assets/lessons/L411/audio/L411-G05-wrong-two.m4a",
            "durationMs": 4592,
            "charTimings": [
              {
                "charIndex": 0,
                "startMs": 0,
                "endMs": 580
              },
              {
                "charIndex": 1,
                "startMs": 580,
                "endMs": 1020
              },
              {
                "charIndex": 2,
                "startMs": 1020,
                "endMs": 1420
              },
              {
                "charIndex": 3,
                "startMs": 1420,
                "endMs": 1720
              },
              {
                "charIndex": 4,
                "startMs": 1720,
                "endMs": 1900
              },
              {
                "charIndex": 5,
                "startMs": 2620,
                "endMs": 2730
              },
              {
                "charIndex": 6,
                "startMs": 2730,
                "endMs": 2840
              },
              {
                "charIndex": 7,
                "startMs": 2840,
                "endMs": 3280
              },
              {
                "charIndex": 8,
                "startMs": 3280,
                "endMs": 3560
              },
              {
                "charIndex": 9,
                "startMs": 3560,
                "endMs": 3880
              },
              {
                "charIndex": 10,
                "startMs": 3880,
                "endMs": 4392
              }
            ]
          }
        }
      ]
    }
  ],
  "latestMainVerified": "da46929a5f1f90ec89691ad9e2cfa81be8db30ef",
  "latestMainBoundary": "L407"
}
```

## Pushed intake

Asset commit: 4bf9f0e331e4e3c3cc3ee134dde1cf526b057c5e.

Command: npm run curriculum:package-intake -- --unit L411 --ref origin/codex/l411-complete-package --strict

Result: PASS, exit0, zero warnings; 5 WebP and10 referenced M4A. Documentation-only follow-up is rechecked before final handoff.

Pre-merge package preview, not final main repair queue: https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L411&ref=4bf9f0e331e4e3c3cc3ee134dde1cf526b057c5e

Audio review: https://icelog-tu.github.io/character-recognition-dojo/tools/audio-review.html?unit=L411&ref=4bf9f0e331e4e3c3cc3ee134dde1cf526b057c5e

Post-merge repair status command: npm run asset:review-status -- --unit L411

# L417 Production E package

Status: dependency-blocked-asset-complete.

## Boundary and ownership

Package base and approved vocabulary source: 18c9df4a4f1d4c9966b65d8b4371693a714e3d3c (L408法;412 learned characters). Latest main checked: 4869fc1a67daa2e406d001247d6b1762c0609498, L408. Lesson allowed set419 includes provisional 定 成 功 決 解 果 plus 如. Dependencies L411, L412, L413, L414, L415, L416; current remaining L411, L412, L413, L414, L415, L416. S04 決定 keeps L411定 as an out-of-window dependency, not a coverage target. R049/R050 already merged after405. No 何 or 許 in learner-facing text/options. Release owns full playable order and shared-state integration.

## Approved content and validation

Coverage 如3 果3 解2 決2 功1 成1: PASS. Han9/9/11/6/9; spokenText, displayLines join/width, focus, allowed text/options, Stage4 targets/missingIndexes/cards and one use per sentence: PASS. G04 three single-Han cards map 學/下/棋 to orders0/1/2.

5 final1024-square WebPs;10 processed mono44.1kHz AAC M4A including standalone 如,5 sentences,2 exact G02 parts,2 complete G05 wrong sentences. Correct G05 reuses S01. All decode, G05 mean volume spread0.4dB, shipping folder1103387bytes. Nine Han timing lists and dedicated Stage4 alignment are complete and synchronized.

Package-local validate-production-assets PASS; audit-asset-formats --strict PASS with zero warnings; base npm run validate:production PASS.

## Visual QA

Actual exported WebPs inspected side by side with full L058 style sheet; refined L115-S01/S02, L118-S02, L119-S01, L128-S03 and family L154-S01/L162-S04/L163-S02 anchors. L058 supplies style only. No readable text or number exceptions.

S01 style-lock PASS, cast PASS. Three boxes still full of fresh fruit; mother and girl discussing surplus, no premature solution.

S02 style-lock PASS, cast PASS. Girl holds sealed wordless biscuit packet; mother gently offers cut fruit, no force or scolding.

S03 style-lock PASS, cast PASS. Girl holds intact interlocking wooden burr puzzle; father points to a different side, no detached pieces or victory.

S04 style-lock PASS, cast PASS. Girl actively asks father to learn; sparse demonstration stones on gomoku grid, distinct black/white bowls, no winning game.

S05 style-lock PASS, cast PASS. Child-sized broom gathers a few dry leaves; mother watches calmly in otherwise clean living room.

No image drafts rejected or committed as alternates.

## Audio and timing QA

gpt-4o-mini-tts coral speed0.9, natural Taiwan Mandarin. Whole S01 regenerated for clear 解決; whole G02-prefix regenerated to retain final 比. Exact fragments 我會做家事比 / 掃地; no extra 如. Final unprompted independent transcription matches these clips. S04 independently matched 我決定學下棋; only S04 and prefix used contextual Whisper for orthographic alignment. Other clips use unprompted Whisper comparison; no text changes. Standalone 如 generated separately as ㄖㄨˊ.

Processed through repo audio pipeline with leading speech retained and only trailing silence shortened. AI word alignment refined from RMS/onset evidence for 怎麼 and final 比; tail decay retained with about200ms trailing silence. Details are in timing-review and transcript-review.

## Browser QA

Attempted local existing asset-review page on port5417. Codex browser tab creation timed out after30 seconds and reset its control kernel, before playback. Following documented tooling fallback, subjective continuous listening, highlight playback and phone recording/stitched replay are skipped. No teacher listening PASS is claimed. Required existence, decode, transcript, timings, visual inspection, allowed-character and local validators passed.

## Remaining work

No missing package assets or timings. Release awaits L411, L412, L413, L414, L415, L416 and full playable order, then performs production integration, final verify and deployment.

## Complete draft

```json
{
  "id": "L417",
  "order": 417,
  "kind": "lesson",
  "title": "如",
  "newChars": [
    "如"
  ],
  "zhuyin": {
    "如": "ㄖㄨˊ"
  },
  "dependsOnLessons": [
    "L411",
    "L412",
    "L413",
    "L414",
    "L415",
    "L416"
  ],
  "provisionalLearnedChars": [
    "定",
    "成",
    "功",
    "決",
    "解",
    "果"
  ],
  "sourceBoundary": "18c9df4a4f1d4c9966b65d8b4371693a714e3d3c",
  "packageBase": "18c9df4a4f1d4c9966b65d8b4371693a714e3d3c",
  "packageStatus": "dependency-blocked-asset-complete",
  "releaseBlockers": [
    "L411",
    "L412",
    "L413",
    "L414",
    "L415",
    "L416"
  ],
  "imageTextExceptions": "None; no readable text or numbers.",
  "pronunciationNotes": [
    "如 ㄖㄨˊ; G02 exact prefix 我會做家事比 ends 比 bi3; suffix 掃地 begins 掃 sao3."
  ],
  "requiredRounds": 5,
  "charAudio": {
    "如": "/assets/lessons/L417/audio/char-u5982.m4a"
  },
  "sentences": [
    {
      "id": "L417-S01",
      "text": "水果吃不完，怎麼解決？",
      "spokenText": "水果吃不完怎麼解決",
      "displayLines": [
        "水果吃不完，",
        "怎麼解決？"
      ],
      "focusChar": "解",
      "imageNotes": "家中餐桌旁，主角媽媽和小女孩看著親友送來的幾盒水果。盒子打開，裡面還有不少完整、新鮮的水果，明顯比一家人眼前要吃的份量多。媽媽看著水果，女孩轉頭和她討論。呈現正在想怎麼處理，不提前畫成全部分送完，也不把水果畫壞。",
      "imagePrompt": "Use case illustration-story. ONE square1024x1024 richly detailed warm Taiwan children picture-book illustration. Strict match full L058 reference style plus refined preferred examples: fine textured pencil and painted shading, modeled expressive faces, warm varied colors, richly detailed environments. Girl short dark bob ONE pinkclip, pink cardigan cream blouse navy skirt pink shoes, preschool consistent proportions. Mother chinlength dark sidepart bob ivory blouse blue jeans. Father short tousled dark hair blue shirt beige trousers. References are style and cast references NOT edit targets. Cast ONLY people specified in scene, no extra family/crowd. No simplified cartoon, thin watercolor, anime,3D,photo. Square safe margins. Absolutely NO readable Han letters numbers logos captions. Home dining table, mother and girl discussing a surplus of FRESH WHOLE fruit sent by relatives. Three open plain gift boxes, each still substantially full of apples pears oranges, far more than two people could eat now. Mother looks thoughtfully at fruit; girl turns to her speaking question. Fruit pristine, no rot, no handing gifts out or completed solution.",
      "imageReuseDecision": "New approved object/action/state combination; use full style and family anchors.",
      "imageSrc": "/assets/lessons/L417/images/L417-S01.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L417/audio/L417-S01.m4a",
        "durationMs": 4212,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 900
          },
          {
            "charIndex": 1,
            "startMs": 900,
            "endMs": 1320
          },
          {
            "charIndex": 2,
            "startMs": 1320,
            "endMs": 1740
          },
          {
            "charIndex": 3,
            "startMs": 1740,
            "endMs": 2060
          },
          {
            "charIndex": 4,
            "startMs": 2060,
            "endMs": 2400
          },
          {
            "charIndex": 5,
            "startMs": 2720,
            "endMs": 2960
          },
          {
            "charIndex": 6,
            "startMs": 2960,
            "endMs": 3220
          },
          {
            "charIndex": 7,
            "startMs": 3220,
            "endMs": 3600
          },
          {
            "charIndex": 8,
            "startMs": 3600,
            "endMs": 4012
          }
        ]
      }
    },
    {
      "id": "L417-S02",
      "text": "想吃點心？不如吃水果。",
      "spokenText": "想吃點心不如吃水果",
      "displayLines": [
        "想吃點心？",
        "不如吃水果。"
      ],
      "focusChar": "如",
      "imageNotes": "下午的家中，主角小女孩拿著一包尚未打開的餅乾，主角媽媽端來一小盤切好的水果。媽媽把水果放到女孩面前，溫和提出另一個選擇，女孩抬頭聽她說。不是責罵、搶走餅乾或強迫進食；包裝不需文字或品牌。",
      "imagePrompt": "Use case illustration-story. ONE square1024x1024 richly detailed warm Taiwan children picture-book illustration. Strict match full L058 reference style plus refined preferred examples: fine textured pencil and painted shading, modeled expressive faces, warm varied colors, richly detailed environments. Girl short dark bob ONE pinkclip, pink cardigan cream blouse navy skirt pink shoes, preschool consistent proportions. Mother chinlength dark sidepart bob ivory blouse blue jeans. Father short tousled dark hair blue shirt beige trousers. References are style and cast references NOT edit targets. Cast ONLY people specified in scene, no extra family/crowd. No simplified cartoon, thin watercolor, anime,3D,photo. Square safe margins. Absolutely NO readable Han letters numbers logos captions. Afternoon home snack time. Girl holds one UNOPENED plain biscuit packet with tiny clear window showing biscuits but no lettering or brand. Mother gently sets down a SMALL plate of cut fresh fruit in front of her as an alternative. Girl looks up listening, relaxed. Mother neither snatches packet nor forces eating, no scolding.",
      "imageReuseDecision": "New approved object/action/state combination; use full style and family anchors.",
      "imageSrc": "/assets/lessons/L417/images/L417-S02.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L417/audio/L417-S02.m4a",
        "durationMs": 3878,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 520
          },
          {
            "charIndex": 1,
            "startMs": 520,
            "endMs": 940
          },
          {
            "charIndex": 2,
            "startMs": 940,
            "endMs": 1280
          },
          {
            "charIndex": 3,
            "startMs": 1280,
            "endMs": 1540
          },
          {
            "charIndex": 4,
            "startMs": 1980,
            "endMs": 2220
          },
          {
            "charIndex": 5,
            "startMs": 2220,
            "endMs": 2540
          },
          {
            "charIndex": 6,
            "startMs": 2540,
            "endMs": 2900
          },
          {
            "charIndex": 7,
            "startMs": 2900,
            "endMs": 3360
          },
          {
            "charIndex": 8,
            "startMs": 3360,
            "endMs": 3678
          }
        ]
      }
    },
    {
      "id": "L417-S03",
      "text": "如果換個解法，可能會成功。",
      "spokenText": "如果換個解法可能會成功",
      "displayLines": [
        "如果換個",
        "解法，",
        "可能會成功。"
      ],
      "focusChar": "如",
      "imageNotes": "家中桌邊，主角小女孩拿著一個大型木製拆解益智玩具，主角爸爸在旁觀察。幾塊木件互相卡合，尚未拆開；女孩停止原本直拉的動作，轉動玩具查看另一面，爸爸指向不同方向，和她討論新嘗試。只呈現考慮換解法，不提前畫成成功拆解，也不使用解法箭頭或文字。",
      "imagePrompt": "Use case illustration-story. ONE square1024x1024 richly detailed warm Taiwan children picture-book illustration. Strict match full L058 reference style plus refined preferred examples: fine textured pencil and painted shading, modeled expressive faces, warm varied colors, richly detailed environments. Girl short dark bob ONE pinkclip, pink cardigan cream blouse navy skirt pink shoes, preschool consistent proportions. Mother chinlength dark sidepart bob ivory blouse blue jeans. Father short tousled dark hair blue shirt beige trousers. References are style and cast references NOT edit targets. Cast ONLY people specified in scene, no extra family/crowd. No simplified cartoon, thin watercolor, anime,3D,photo. Square safe margins. Absolutely NO readable Han letters numbers logos captions. Home table, girl and father discussing another way to solve ONE LARGE WOODEN INTERLOCKING BURR PUZZLE. About six thick rounded wooden pieces visibly interlock into a compact assembly, no pieces detached. Girl holds assembly in both hands tilted/rotated to inspect a different side instead of pulling straight. Father points to a different side of puzzle, thoughtful encouraging discussion; not solved yet. Puzzle looks tangible polished wood mechanical brainteaser, not loose building blocks or jigsaw flat tiles. No solution arrows, labels, diagrams or success celebration.",
      "imageReuseDecision": "New approved object/action/state combination; use full style and family anchors.",
      "imageSrc": "/assets/lessons/L417/images/L417-S03.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L417/audio/L417-S03.m4a",
        "durationMs": 3745,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 340
          },
          {
            "charIndex": 1,
            "startMs": 340,
            "endMs": 680
          },
          {
            "charIndex": 2,
            "startMs": 680,
            "endMs": 1120
          },
          {
            "charIndex": 3,
            "startMs": 1120,
            "endMs": 1300
          },
          {
            "charIndex": 4,
            "startMs": 1300,
            "endMs": 1540
          },
          {
            "charIndex": 5,
            "startMs": 1540,
            "endMs": 1780
          },
          {
            "charIndex": 6,
            "startMs": 2180,
            "endMs": 2400
          },
          {
            "charIndex": 7,
            "startMs": 2400,
            "endMs": 2620
          },
          {
            "charIndex": 8,
            "startMs": 2620,
            "endMs": 2980
          },
          {
            "charIndex": 9,
            "startMs": 2980,
            "endMs": 3260
          },
          {
            "charIndex": 10,
            "startMs": 3260,
            "endMs": 3545
          }
        ]
      }
    },
    {
      "id": "L417-S04",
      "text": "我決定學下棋。",
      "spokenText": "我決定學下棋",
      "displayLines": [
        "我決定",
        "學下棋。"
      ],
      "focusChar": "決",
      "imageNotes": "家中桌邊，主角小女孩主動坐到爸爸對面，指著桌上的五子棋盤，認真向爸爸說話。爸爸微笑回應，準備介紹玩法；棋盤上只有少量示範棋子，兩旁有黑白棋子盒。呈現女孩決定開始學，不畫成已熟練對弈或贏了爸爸。",
      "imagePrompt": "Use case illustration-story. ONE square1024x1024 richly detailed warm Taiwan children picture-book illustration. Strict match full L058 reference style plus refined preferred examples: fine textured pencil and painted shading, modeled expressive faces, warm varied colors, richly detailed environments. Girl short dark bob ONE pinkclip, pink cardigan cream blouse navy skirt pink shoes, preschool consistent proportions. Mother chinlength dark sidepart bob ivory blouse blue jeans. Father short tousled dark hair blue shirt beige trousers. References are style and cast references NOT edit targets. Cast ONLY people specified in scene, no extra family/crowd. No simplified cartoon, thin watercolor, anime,3D,photo. Square safe margins. Absolutely NO readable Han letters numbers logos captions. Home table, girl sits opposite father and actively points to a wooden GOMOKU board, speaking seriously about wanting to learn. Father smiles ready to explain. Board has an orderly square grid with ONLY four demonstration round stones total (two black two white), no five-in-a-row or winning pattern. Two open stone bowls, black stones beside father and white stones beside girl. They are only beginning instruction, not deep into a game or victory. No letters numbers or markings except plain grid.",
      "imageReuseDecision": "New approved object/action/state combination; use full style and family anchors.",
      "imageSrc": "/assets/lessons/L417/images/L417-S04.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L417/audio/L417-S04.m4a",
        "durationMs": 2844,
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
            "endMs": 1140
          },
          {
            "charIndex": 3,
            "startMs": 1140,
            "endMs": 1820
          },
          {
            "charIndex": 4,
            "startMs": 1820,
            "endMs": 2240
          },
          {
            "charIndex": 5,
            "startMs": 2240,
            "endMs": 2644
          }
        ]
      }
    },
    {
      "id": "L417-S05",
      "text": "我會做家事，比如掃地。",
      "spokenText": "我會做家事比如掃地",
      "displayLines": [
        "我會做家事，",
        "比如掃地。"
      ],
      "focusChar": "如",
      "imageNotes": "家中客廳，主角小女孩拿適合身高的小掃把，把地上幾片乾葉掃成一小堆，主角媽媽在旁看她示範。女孩神情自然、有把握，呈現她會做的一種家事。地面只有少量雜物，不畫成嚴重髒亂或受罰打掃。",
      "imagePrompt": "Use case illustration-story. ONE square1024x1024 richly detailed warm Taiwan children picture-book illustration. Strict match full L058 reference style plus refined preferred examples: fine textured pencil and painted shading, modeled expressive faces, warm varied colors, richly detailed environments. Girl short dark bob ONE pinkclip, pink cardigan cream blouse navy skirt pink shoes, preschool consistent proportions. Mother chinlength dark sidepart bob ivory blouse blue jeans. Father short tousled dark hair blue shirt beige trousers. References are style and cast references NOT edit targets. Cast ONLY people specified in scene, no extra family/crowd. No simplified cartoon, thin watercolor, anime,3D,photo. Square safe margins. Absolutely NO readable Han letters numbers logos captions. Home living room, girl confidently demonstrates sweeping a few dry leaves into one small pile with a SMALL child-height broom. Both hands naturally grip broom, bristles touch floor near leaves. Mother watches pleasantly nearby. Mostly clean floor with only a few leaves, no excessive clutter, punishment or shame.",
      "imageReuseDecision": "New approved object/action/state combination; use full style and family anchors.",
      "imageSrc": "/assets/lessons/L417/images/L417-S05.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L417/audio/L417-S05.m4a",
        "durationMs": 3663,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 380
          },
          {
            "charIndex": 1,
            "startMs": 380,
            "endMs": 660
          },
          {
            "charIndex": 2,
            "startMs": 660,
            "endMs": 900
          },
          {
            "charIndex": 3,
            "startMs": 900,
            "endMs": 1180
          },
          {
            "charIndex": 4,
            "startMs": 1180,
            "endMs": 1380
          },
          {
            "charIndex": 5,
            "startMs": 1900,
            "endMs": 2140
          },
          {
            "charIndex": 6,
            "startMs": 2140,
            "endMs": 2380
          },
          {
            "charIndex": 7,
            "startMs": 2380,
            "endMs": 3200
          },
          {
            "charIndex": 8,
            "startMs": 3200,
            "endMs": 3463
          }
        ]
      }
    }
  ],
  "sentenceGames": [
    {
      "id": "L417-G01",
      "type": "find-character",
      "sentenceId": "L417-S02",
      "targetChar": "如",
      "targetCharIndex": 5,
      "prompt": "找出句子裡的字。"
    },
    {
      "id": "L417-G02",
      "type": "teach-character",
      "sentenceId": "L417-S05",
      "targetChar": "如",
      "targetCharIndex": 6,
      "prompt": "教小兔子念這個字。",
      "teachAudio": {
        "prefixText": "我會做家事比",
        "suffixText": "掃地",
        "prefixSrc": "/assets/lessons/L417/audio/L417-G02-prefix.m4a",
        "suffixSrc": "/assets/lessons/L417/audio/L417-G02-suffix.m4a",
        "prefixAudio": {
          "src": "/assets/lessons/L417/audio/L417-G02-prefix.m4a",
          "durationMs": 2428,
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
              "endMs": 1080
            },
            {
              "charIndex": 3,
              "startMs": 1080,
              "endMs": 1440
            },
            {
              "charIndex": 4,
              "startMs": 1440,
              "endMs": 1660
            },
            {
              "charIndex": 5,
              "startMs": 1800,
              "endMs": 2228
            }
          ]
        },
        "suffixAudio": {
          "src": "/assets/lessons/L417/audio/L417-G02-suffix.m4a",
          "durationMs": 1094,
          "charTimings": [
            {
              "charIndex": 0,
              "startMs": 0,
              "endMs": 620
            },
            {
              "charIndex": 1,
              "startMs": 620,
              "endMs": 894
            }
          ]
        }
      }
    },
    {
      "id": "L417-G03",
      "type": "missing-character",
      "sentenceId": "L417-S03",
      "targetChar": "如",
      "targetCharIndex": 0,
      "prompt": "找出少了哪個字。",
      "missingIndexes": [
        0
      ],
      "options": [
        {
          "id": "correct",
          "text": "如",
          "correct": true
        },
        {
          "id": "wrong-one",
          "text": "不",
          "correct": false
        },
        {
          "id": "wrong-two",
          "text": "可",
          "correct": false
        }
      ]
    },
    {
      "id": "L417-G04",
      "type": "partial-order",
      "sentenceId": "L417-S04",
      "targetChar": "決",
      "targetCharIndex": 1,
      "prompt": "把字放回句子裡。",
      "missingIndexes": [
        3,
        4,
        5
      ],
      "options": [
        {
          "id": "card-qi",
          "text": "棋",
          "correct": true,
          "correctOrder": 2
        },
        {
          "id": "card-xue",
          "text": "學",
          "correct": true,
          "correctOrder": 0
        },
        {
          "id": "card-xia",
          "text": "下",
          "correct": true,
          "correctOrder": 1
        }
      ]
    },
    {
      "id": "L417-G05",
      "type": "choose-pronunciation",
      "sentenceId": "L417-S01",
      "targetChar": "解",
      "targetCharIndex": 7,
      "prompt": "聽聽看，誰念得對？",
      "options": [
        {
          "id": "correct",
          "text": "水果吃不完，怎麼解決？",
          "correct": true,
          "audioSrc": "/assets/lessons/L417/audio/L417-S01.m4a",
          "audio": {
            "src": "/assets/lessons/L417/audio/L417-S01.m4a",
            "durationMs": 4212,
            "charTimings": [
              {
                "charIndex": 0,
                "startMs": 0,
                "endMs": 900
              },
              {
                "charIndex": 1,
                "startMs": 900,
                "endMs": 1320
              },
              {
                "charIndex": 2,
                "startMs": 1320,
                "endMs": 1740
              },
              {
                "charIndex": 3,
                "startMs": 1740,
                "endMs": 2060
              },
              {
                "charIndex": 4,
                "startMs": 2060,
                "endMs": 2400
              },
              {
                "charIndex": 5,
                "startMs": 2720,
                "endMs": 2960
              },
              {
                "charIndex": 6,
                "startMs": 2960,
                "endMs": 3220
              },
              {
                "charIndex": 7,
                "startMs": 3220,
                "endMs": 3600
              },
              {
                "charIndex": 8,
                "startMs": 3600,
                "endMs": 4012
              }
            ]
          }
        },
        {
          "id": "wrong-one",
          "text": "水果吃不下，怎麼解決？",
          "correct": false,
          "audioSrc": "/assets/lessons/L417/audio/L417-G05-wrong-one.m4a",
          "audio": {
            "src": "/assets/lessons/L417/audio/L417-G05-wrong-one.m4a",
            "durationMs": 3093,
            "charTimings": [
              {
                "charIndex": 0,
                "startMs": 0,
                "endMs": 520
              },
              {
                "charIndex": 1,
                "startMs": 520,
                "endMs": 840
              },
              {
                "charIndex": 2,
                "startMs": 840,
                "endMs": 1100
              },
              {
                "charIndex": 3,
                "startMs": 1100,
                "endMs": 1300
              },
              {
                "charIndex": 4,
                "startMs": 1300,
                "endMs": 1540
              },
              {
                "charIndex": 5,
                "startMs": 1930,
                "endMs": 2150
              },
              {
                "charIndex": 6,
                "startMs": 2150,
                "endMs": 2300
              },
              {
                "charIndex": 7,
                "startMs": 2300,
                "endMs": 2580
              },
              {
                "charIndex": 8,
                "startMs": 2580,
                "endMs": 2893
              }
            ]
          }
        },
        {
          "id": "wrong-two",
          "text": "水果拿不完，怎麼解決？",
          "correct": false,
          "audioSrc": "/assets/lessons/L417/audio/L417-G05-wrong-two.m4a",
          "audio": {
            "src": "/assets/lessons/L417/audio/L417-G05-wrong-two.m4a",
            "durationMs": 3136,
            "charTimings": [
              {
                "charIndex": 0,
                "startMs": 0,
                "endMs": 560
              },
              {
                "charIndex": 1,
                "startMs": 560,
                "endMs": 860
              },
              {
                "charIndex": 2,
                "startMs": 860,
                "endMs": 1060
              },
              {
                "charIndex": 3,
                "startMs": 1060,
                "endMs": 1320
              },
              {
                "charIndex": 4,
                "startMs": 1320,
                "endMs": 1540
              },
              {
                "charIndex": 5,
                "startMs": 1970,
                "endMs": 2190
              },
              {
                "charIndex": 6,
                "startMs": 2190,
                "endMs": 2340
              },
              {
                "charIndex": 7,
                "startMs": 2340,
                "endMs": 2620
              },
              {
                "charIndex": 8,
                "startMs": 2620,
                "endMs": 2936
              }
            ]
          }
        }
      ]
    }
  ],
  "latestMainVerified": "4869fc1a67daa2e406d001247d6b1762c0609498",
  "latestMainBoundary": "L408"
}
```

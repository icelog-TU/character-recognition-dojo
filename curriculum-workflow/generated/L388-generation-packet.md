# L388 Generation Packet

Package status: dependency-blocked-asset-complete.

Production B. Base 7fcef325b37f13fc68fe950bffd7fea8e9db6108, formal L001-L375, 379 learned Han. Learner dependencies L383-L387: 信/寫/字/名/第. Release also needs prior lessons and R045/R046. No additional provisional vocabulary. Normal single-character lesson, not a pilot. 念 reads ㄋㄧㄢˋ, full fourth tone. S03 mother reads aloud; S04 school-trip homesickness letter, mother absent. No readable text exception; do not use 號/姓/她/唸. Final fetch b313ded8ddae7844e4af667191c4bf2b0737ab59: completion-gate SOP reread; production still L001-L375 and all five learner dependencies remain unmerged. Technical QA and image acceptance complete. Browser QA: 390x844 Stage1/2/3 and G01/G03/G04/G05 exercised; G02 prefix reaches target. G02 sustained microphone recording/replay is TOOL_LIMITED (no duration-controlled press in exposed browser API), not an app defect or teacher approval. Teacher subjective review follows main deployment.

## Verification

Approved text, spokenText, focusChar, displayLines and Stage 4 preserved. Allowed 385; no 號/姓/她/唸. Coverage 念3/第2/名3/字3/寫1/信1. Mechanical indexes, one use per sentence, G03 three choices and G04 single-Han order PASS. Request and draft agree.

Images: S01 style-lock PASS, cast PASS; S02 style-lock PASS, cast PASS; S03 style-lock PASS, cast PASS; S04 style-lock PASS, cast PASS; S05 style-lock PASS, cast PASS. All newly generated, no image reuse or rejected image versions committed. S01/S04 include a reference-consistent Xiaoguang classmate; S05 includes supervising mother, without changing the approved action. S04 paused school coach with seatbelt and teacher, no mother. No readable writing exception.

OpenAI coral: one independent 念, five full spoken sentences, exact G02 prefix/suffix and complete G05 wrong texts. G05 wrong-one/wrong-two and S05 regenerated before final acceptance. Orthographic simplified/traditional ASR equivalents normalized, not same-sound substitutions. Final nine sentence/fragment ASRs matched. Confirmed terminal silence trimmed with 200ms safety pad; final AAC files realigned with repo AI script. S05 1ms draft anomaly disappeared on final AI alignment. G02 prefix 把 has a 60ms AI interval; retained rather than inventing a longer segment. No audio splicing or character extraction.

Technical QA: tools:check, ai:check, curriculum:audit-state, lesson-local repo assets:audit --strict, validate:production, L388-audit.cjs PASS. assets:audit and validate scripts use owned-draft adapter without changing shared JSON. Five WebP at1024x1024; ten monoAAC44100 M4A decode. G05 mean-volume spread0.1dB. Images713694bytes, audio388066bytes, total1101760bytes. Current duration report and technical hashes describe final files. Full shared-state verify skipped: dependency-blocked, Release-owned integration.

## Browser QA / Manual Playback Scope

See L388-ui-qa.json. Browser playback UI exercised at phone width for standalone, five sentences and all three G05 options. Stage2 accepted all three target cards. G01/G03/G04 correct interactions exercised. G02 prefix stopped at target; microphone recording/replay TOOL_LIMITED because the exposed control surface lacks duration-controlled hold. No actual recording PASS is claimed. One Playwright Runtime.evaluate timeout recovered with AX clicks. Completion navigation visible at390x844 and768x1024. Teacher subjective image/audio review belongs post-main; no branch approval required or claimed.

## Release

Unmerged learner dependencies L383-L387 remain. Prior playable lessons and R045/R046 must enter main first. Release owns production JSON, planner, ledger, final verify and deploy. Post-merge review, usable after Release merges and deploys: https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L388&ref=main . Status: npm run asset:review-status -- --unit L388 --ref main . Run pushed package-intake before accepting this package; final handoff reports exact result and immutable SHA.

## Final Aligned Draft
```json
{
  "id": "L388",
  "order": 388,
  "title": "念",
  "newChars": [
    "念"
  ],
  "zhuyin": {
    "念": "ㄋㄧㄢˋ"
  },
  "charAudio": {
    "念": "/assets/lessons/L388/audio/char-u5ff5.m4a"
  },
  "requiredRounds": 5,
  "dependsOnLessons": [
    "L383",
    "L384",
    "L385",
    "L386",
    "L387"
  ],
  "provisionalLearnedChars": [
    "信",
    "寫",
    "字",
    "名",
    "第"
  ],
  "packageStatus": "dependency-blocked-asset-complete",
  "sentences": [
    {
      "id": "L388-S01",
      "text": "老師念到我的名字了。",
      "spokenText": "老師念到我的名字了",
      "displayLines": [
        "老師念到",
        "我的名字了。"
      ],
      "focusChar": "念",
      "imageNotes": "教室點名，固定老師拿著點名紙，剛念到主角小女孩；女孩坐在座位上舉手回應，其他 generic classmates 安靜等待。不是叫女孩上台領獎，也不是女孩自己念名字。點名紙不顯示可讀姓名。",
      "imagePrompt": "ONE square 1:1 warm detailed pencil-and-watercolor Taiwan picture-book illustration. Full L058 reference set STYLE ONLY; refined L115/L118/L119/L128 proportions and L154/L162/L163 FAMILY identities. Protagonist preschool girl short dark bob, pink hair clip, pink cardigan, cream shirt, navy skirt. Mother shoulder-length dark hair and warm cream home clothing. Teacher low dark ponytail, teal blouse, beige skirt, distinct from mother. Xiaoguang exact dedicated reference: round glasses, tidy short black hair, white shirt, navy vest, khaki shorts, white socks, brown shoes. Natural faces, stable preschool proportions, bright natural light, detailed clean environment and phone-readable gestures. No readable Han/letters/digits/labels/logos/watermarks. Paper marks must be unrecognizable traces. No anime, 3D, photograph, flat simplified cartoon or generic watercolor.\n教室點名，固定老師拿著點名紙，剛念到主角小女孩；女孩坐在座位上舉手回應，其他 generic classmates 安靜等待。不是叫女孩上台領獎，也不是女孩自己念名字。點名紙不顯示可讀姓名。",
      "imageSrc": "/assets/lessons/L388/images/L388-S01.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L388/audio/L388-S01.m4a",
        "durationMs": 2953,
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
            "endMs": 1340
          },
          {
            "charIndex": 3,
            "startMs": 1340,
            "endMs": 1600
          },
          {
            "charIndex": 4,
            "startMs": 1600,
            "endMs": 1780
          },
          {
            "charIndex": 5,
            "startMs": 1780,
            "endMs": 1960
          },
          {
            "charIndex": 6,
            "startMs": 1960,
            "endMs": 2340
          },
          {
            "charIndex": 7,
            "startMs": 2340,
            "endMs": 2460
          },
          {
            "charIndex": 8,
            "startMs": 2460,
            "endMs": 2680
          }
        ]
      }
    },
    {
      "id": "L388-S02",
      "text": "第一名是小光，第二名是我。",
      "spokenText": "第一名是小光第二名是我",
      "displayLines": [
        "第一名",
        "是小光，",
        "第二名是我。"
      ],
      "focusChar": "第",
      "imageNotes": "學校跑步活動的終點，小光已先越過終點線，主角小女孩緊接著抵達，其他 generic classmates 還在後方。以抵達順序表現第一、第二名，不使用排名數字或名牌。小光使用 public/assets/reference/lesson-cast/xiaoguang.webp，保留固定身份特徵，跑步不背書包。",
      "imagePrompt": "ONE square 1:1 warm detailed pencil-and-watercolor Taiwan picture-book illustration. Full L058 reference set STYLE ONLY; refined L115/L118/L119/L128 proportions and L154/L162/L163 FAMILY identities. Protagonist preschool girl short dark bob, pink hair clip, pink cardigan, cream shirt, navy skirt. Mother shoulder-length dark hair and warm cream home clothing. Teacher low dark ponytail, teal blouse, beige skirt, distinct from mother. Xiaoguang exact dedicated reference: round glasses, tidy short black hair, white shirt, navy vest, khaki shorts, white socks, brown shoes. Natural faces, stable preschool proportions, bright natural light, detailed clean environment and phone-readable gestures. No readable Han/letters/digits/labels/logos/watermarks. Paper marks must be unrecognizable traces. No anime, 3D, photograph, flat simplified cartoon or generic watercolor.\n學校跑步活動的終點，小光已先越過終點線，主角小女孩緊接著抵達，其他 generic classmates 還在後方。以抵達順序表現第一、第二名，不使用排名數字或名牌。小光使用 public/assets/reference/lesson-cast/xiaoguang.webp，保留固定身份特徵，跑步不背書包。",
      "imageSrc": "/assets/lessons/L388/images/L388-S02.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L388/audio/L388-S02.m4a",
        "durationMs": 4037,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 220
          },
          {
            "charIndex": 1,
            "startMs": 220,
            "endMs": 440
          },
          {
            "charIndex": 2,
            "startMs": 440,
            "endMs": 700
          },
          {
            "charIndex": 3,
            "startMs": 700,
            "endMs": 1100
          },
          {
            "charIndex": 4,
            "startMs": 1100,
            "endMs": 1400
          },
          {
            "charIndex": 5,
            "startMs": 1400,
            "endMs": 1600
          },
          {
            "charIndex": 6,
            "startMs": 2400,
            "endMs": 2590
          },
          {
            "charIndex": 7,
            "startMs": 2590,
            "endMs": 2780
          },
          {
            "charIndex": 8,
            "startMs": 2780,
            "endMs": 3060
          },
          {
            "charIndex": 9,
            "startMs": 3060,
            "endMs": 3360
          },
          {
            "charIndex": 10,
            "startMs": 3360,
            "endMs": 3660
          }
        ]
      }
    },
    {
      "id": "L388-S03",
      "text": "媽媽把書上的字念給我聽。",
      "spokenText": "媽媽把書上的字念給我聽",
      "displayLines": [
        "媽媽把",
        "書上的字",
        "念給我聽。"
      ],
      "focusChar": "念",
      "imageNotes": "家中，主角媽媽與小女孩坐在一起看書；媽媽指著書頁的書寫區，嘴巴微張正在念，女孩看著書專心聽。呈現媽媽把內容念出來，不是兩人各自默讀。書頁文字用不可辨識筆跡；本課沒有新增可讀英文或漢字例外。",
      "imagePrompt": "ONE square 1:1 warm detailed pencil-and-watercolor Taiwan picture-book illustration. Full L058 reference set STYLE ONLY; refined L115/L118/L119/L128 proportions and L154/L162/L163 FAMILY identities. Protagonist preschool girl short dark bob, pink hair clip, pink cardigan, cream shirt, navy skirt. Mother shoulder-length dark hair and warm cream home clothing. Teacher low dark ponytail, teal blouse, beige skirt, distinct from mother. Xiaoguang exact dedicated reference: round glasses, tidy short black hair, white shirt, navy vest, khaki shorts, white socks, brown shoes. Natural faces, stable preschool proportions, bright natural light, detailed clean environment and phone-readable gestures. No readable Han/letters/digits/labels/logos/watermarks. Paper marks must be unrecognizable traces. No anime, 3D, photograph, flat simplified cartoon or generic watercolor.\n家中，主角媽媽與小女孩坐在一起看書；媽媽指著書頁的書寫區，嘴巴微張正在念，女孩看著書專心聽。呈現媽媽把內容念出來，不是兩人各自默讀。書頁文字用不可辨識筆跡；本課沒有新增可讀英文或漢字例外。",
      "imageSrc": "/assets/lessons/L388/images/L388-S03.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L388/audio/L388-S03.m4a",
        "durationMs": 3396,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 320
          },
          {
            "charIndex": 1,
            "startMs": 320,
            "endMs": 540
          },
          {
            "charIndex": 2,
            "startMs": 540,
            "endMs": 800
          },
          {
            "charIndex": 3,
            "startMs": 800,
            "endMs": 1120
          },
          {
            "charIndex": 4,
            "startMs": 1120,
            "endMs": 1360
          },
          {
            "charIndex": 5,
            "startMs": 1360,
            "endMs": 1600
          },
          {
            "charIndex": 6,
            "startMs": 1600,
            "endMs": 1840
          },
          {
            "charIndex": 7,
            "startMs": 1840,
            "endMs": 2420
          },
          {
            "charIndex": 8,
            "startMs": 2420,
            "endMs": 2640
          },
          {
            "charIndex": 9,
            "startMs": 2640,
            "endMs": 2860
          },
          {
            "charIndex": 10,
            "startMs": 2860,
            "endMs": 3160
          }
        ]
      }
    },
    {
      "id": "L388-S04",
      "text": "很想念媽媽，所以寫信回家。",
      "spokenText": "很想念媽媽所以寫信回家",
      "displayLines": [
        "很想念媽媽，",
        "所以",
        "寫信回家。"
      ],
      "focusChar": "念",
      "imageNotes": "主角小女孩參加學校旅行，坐在遊覽車座位上，繫著安全帶，用放在腿上的小墊板寫信。神情有些想家但不恐慌；同學坐在附近，老师在可看顧的位置，媽媽不在車上。車輛可暫停休息，避免行車顛簸中書寫。紙上僅有不可辨識筆跡；不靠國旗、外文招牌或地標硬指定出國，也不畫成跟爸爸旅行的舊設定。",
      "imagePrompt": "ONE square 1:1 warm detailed pencil-and-watercolor Taiwan picture-book illustration. Full L058 reference set STYLE ONLY; refined L115/L118/L119/L128 proportions and L154/L162/L163 FAMILY identities. Protagonist preschool girl short dark bob, pink hair clip, pink cardigan, cream shirt, navy skirt. Mother shoulder-length dark hair and warm cream home clothing. Teacher low dark ponytail, teal blouse, beige skirt, distinct from mother. Xiaoguang exact dedicated reference: round glasses, tidy short black hair, white shirt, navy vest, khaki shorts, white socks, brown shoes. Natural faces, stable preschool proportions, bright natural light, detailed clean environment and phone-readable gestures. No readable Han/letters/digits/labels/logos/watermarks. Paper marks must be unrecognizable traces. No anime, 3D, photograph, flat simplified cartoon or generic watercolor.\n主角小女孩參加學校旅行，坐在遊覽車座位上，繫著安全帶，用放在腿上的小墊板寫信。神情有些想家但不恐慌；同學坐在附近，老师在可看顧的位置，媽媽不在車上。車輛可暫停休息，避免行車顛簸中書寫。紙上僅有不可辨識筆跡；不靠國旗、外文招牌或地標硬指定出國，也不畫成跟爸爸旅行的舊設定。",
      "imageSrc": "/assets/lessons/L388/images/L388-S04.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L388/audio/L388-S04.m4a",
        "durationMs": 4366,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 400
          },
          {
            "charIndex": 1,
            "startMs": 400,
            "endMs": 720
          },
          {
            "charIndex": 2,
            "startMs": 720,
            "endMs": 1020
          },
          {
            "charIndex": 3,
            "startMs": 1020,
            "endMs": 1260
          },
          {
            "charIndex": 4,
            "startMs": 1260,
            "endMs": 1680
          },
          {
            "charIndex": 5,
            "startMs": 2140,
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
            "endMs": 3340
          },
          {
            "charIndex": 8,
            "startMs": 3340,
            "endMs": 3480
          },
          {
            "charIndex": 9,
            "startMs": 3480,
            "endMs": 3900
          },
          {
            "charIndex": 10,
            "startMs": 3900,
            "endMs": 4140
          }
        ]
      }
    },
    {
      "id": "L388-S05",
      "text": "手上的字，一洗就不見了。",
      "spokenText": "手上的字一洗就不見了",
      "displayLines": [
        "手上的字，",
        "一洗就",
        "不見了。"
      ],
      "focusChar": "字",
      "imageNotes": "主角小女孩在洗手台洗手，手背上先前用可洗式筆寫的痕跡正被水沖淡，只剩少量模糊墨痕，水流帶走顏色。不是刺青、傷口或永久性墨水，不畫成女孩把手上的皮膚擦掉。只用正在消退的不可辨識筆跡，不新增可讀文字例外。",
      "imagePrompt": "ONE square 1:1 warm detailed pencil-and-watercolor Taiwan picture-book illustration. Full L058 reference set STYLE ONLY; refined L115/L118/L119/L128 proportions and L154/L162/L163 FAMILY identities. Protagonist preschool girl short dark bob, pink hair clip, pink cardigan, cream shirt, navy skirt. Mother shoulder-length dark hair and warm cream home clothing. Teacher low dark ponytail, teal blouse, beige skirt, distinct from mother. Xiaoguang exact dedicated reference: round glasses, tidy short black hair, white shirt, navy vest, khaki shorts, white socks, brown shoes. Natural faces, stable preschool proportions, bright natural light, detailed clean environment and phone-readable gestures. No readable Han/letters/digits/labels/logos/watermarks. Paper marks must be unrecognizable traces. No anime, 3D, photograph, flat simplified cartoon or generic watercolor.\n主角小女孩在洗手台洗手，手背上先前用可洗式筆寫的痕跡正被水沖淡，只剩少量模糊墨痕，水流帶走顏色。不是刺青、傷口或永久性墨水，不畫成女孩把手上的皮膚擦掉。只用正在消退的不可辨識筆跡，不新增可讀文字例外。",
      "imageSrc": "/assets/lessons/L388/images/L388-S05.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L388/audio/L388-S05.m4a",
        "durationMs": 3800,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 520
          },
          {
            "charIndex": 1,
            "startMs": 520,
            "endMs": 820
          },
          {
            "charIndex": 2,
            "startMs": 820,
            "endMs": 1060
          },
          {
            "charIndex": 3,
            "startMs": 1060,
            "endMs": 1180
          },
          {
            "charIndex": 4,
            "startMs": 1180,
            "endMs": 2080
          },
          {
            "charIndex": 5,
            "startMs": 2080,
            "endMs": 2280
          },
          {
            "charIndex": 6,
            "startMs": 2280,
            "endMs": 2940
          },
          {
            "charIndex": 7,
            "startMs": 2940,
            "endMs": 3180
          },
          {
            "charIndex": 8,
            "startMs": 3180,
            "endMs": 3380
          },
          {
            "charIndex": 9,
            "startMs": 3380,
            "endMs": 3600
          }
        ]
      }
    }
  ],
  "sentenceGames": [
    {
      "id": "L388-G01",
      "type": "find-character",
      "sentenceId": "L388-S01",
      "targetChar": "念",
      "targetCharIndex": 2
    },
    {
      "id": "L388-G02",
      "type": "teach-character",
      "sentenceId": "L388-S03",
      "targetChar": "念",
      "targetCharIndex": 7,
      "teachAudio": {
        "prefixText": "媽媽把書上的字",
        "suffixText": "給我聽",
        "prefixSrc": "/assets/lessons/L388/audio/L388-G02-prefix.m4a",
        "suffixSrc": "/assets/lessons/L388/audio/L388-G02-suffix.m4a",
        "prefixAudio": {
          "spokenText": "媽媽把書上的字",
          "src": "/assets/lessons/L388/audio/L388-G02-prefix.m4a",
          "durationMs": 2383,
          "charTimings": [
            {
              "charIndex": 0,
              "startMs": 0,
              "endMs": 360
            },
            {
              "charIndex": 1,
              "startMs": 360,
              "endMs": 780
            },
            {
              "charIndex": 2,
              "startMs": 1160,
              "endMs": 1220
            },
            {
              "charIndex": 3,
              "startMs": 1220,
              "endMs": 1540
            },
            {
              "charIndex": 4,
              "startMs": 1540,
              "endMs": 1740
            },
            {
              "charIndex": 5,
              "startMs": 1740,
              "endMs": 1940
            },
            {
              "charIndex": 6,
              "startMs": 1940,
              "endMs": 2080
            }
          ]
        },
        "suffixAudio": {
          "spokenText": "給我聽",
          "src": "/assets/lessons/L388/audio/L388-G02-suffix.m4a",
          "durationMs": 1037,
          "charTimings": [
            {
              "charIndex": 0,
              "startMs": 0,
              "endMs": 260
            },
            {
              "charIndex": 1,
              "startMs": 260,
              "endMs": 540
            },
            {
              "charIndex": 2,
              "startMs": 540,
              "endMs": 760
            }
          ]
        }
      }
    },
    {
      "id": "L388-G03",
      "type": "missing-character",
      "sentenceId": "L388-S04",
      "targetChar": "念",
      "targetCharIndex": 2,
      "missingIndexes": [
        2
      ],
      "options": [
        {
          "id": "correct",
          "text": "念",
          "correct": true
        },
        {
          "id": "wrong-one",
          "text": "想",
          "correct": false
        },
        {
          "id": "wrong-two",
          "text": "說",
          "correct": false
        }
      ]
    },
    {
      "id": "L388-G04",
      "type": "partial-order",
      "sentenceId": "L388-S02",
      "targetChar": "第",
      "targetCharIndex": 0,
      "missingIndexes": [
        6,
        7,
        8,
        9
      ],
      "options": [
        {
          "id": "card-shi",
          "text": "是",
          "correct": true,
          "correctOrder": 3
        },
        {
          "id": "card-di",
          "text": "第",
          "correct": true,
          "correctOrder": 0
        },
        {
          "id": "card-ming",
          "text": "名",
          "correct": true,
          "correctOrder": 2
        },
        {
          "id": "card-er",
          "text": "二",
          "correct": true,
          "correctOrder": 1
        }
      ]
    },
    {
      "id": "L388-G05",
      "type": "choose-pronunciation",
      "sentenceId": "L388-S05",
      "targetChar": "字",
      "targetCharIndex": 3,
      "options": [
        {
          "id": "correct",
          "text": "手上的字，一洗就不見了。",
          "spokenText": "手上的字一洗就不見了",
          "correct": true,
          "sentenceId": "L388-S05",
          "audioSrc": "/assets/lessons/L388/audio/L388-S05.m4a",
          "audio": {
            "src": "/assets/lessons/L388/audio/L388-S05.m4a",
            "durationMs": 3800,
            "charTimings": [
              {
                "charIndex": 0,
                "startMs": 0,
                "endMs": 520
              },
              {
                "charIndex": 1,
                "startMs": 520,
                "endMs": 820
              },
              {
                "charIndex": 2,
                "startMs": 820,
                "endMs": 1060
              },
              {
                "charIndex": 3,
                "startMs": 1060,
                "endMs": 1180
              },
              {
                "charIndex": 4,
                "startMs": 1180,
                "endMs": 2080
              },
              {
                "charIndex": 5,
                "startMs": 2080,
                "endMs": 2280
              },
              {
                "charIndex": 6,
                "startMs": 2280,
                "endMs": 2940
              },
              {
                "charIndex": 7,
                "startMs": 2940,
                "endMs": 3180
              },
              {
                "charIndex": 8,
                "startMs": 3180,
                "endMs": 3380
              },
              {
                "charIndex": 9,
                "startMs": 3380,
                "endMs": 3600
              }
            ]
          }
        },
        {
          "id": "wrong-one",
          "text": "腳上的字，一洗就不見了。",
          "spokenText": "腳上的字一洗就不見了",
          "correct": false,
          "audioSrc": "/assets/lessons/L388/audio/L388-G05-wrong-one.m4a",
          "audio": {
            "spokenText": "腳上的字一洗就不見了",
            "src": "/assets/lessons/L388/audio/L388-G05-wrong-one.m4a",
            "durationMs": 4486,
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
                "endMs": 1080
              },
              {
                "charIndex": 3,
                "startMs": 1080,
                "endMs": 1380
              },
              {
                "charIndex": 4,
                "startMs": 1840,
                "endMs": 2440
              },
              {
                "charIndex": 5,
                "startMs": 2440,
                "endMs": 2700
              },
              {
                "charIndex": 6,
                "startMs": 2980,
                "endMs": 3580
              },
              {
                "charIndex": 7,
                "startMs": 3580,
                "endMs": 3800
              },
              {
                "charIndex": 8,
                "startMs": 3800,
                "endMs": 4060
              },
              {
                "charIndex": 9,
                "startMs": 4060,
                "endMs": 4300
              }
            ]
          }
        },
        {
          "id": "wrong-two",
          "text": "手上的字，一擦就不見了。",
          "spokenText": "手上的字一擦就不見了",
          "correct": false,
          "audioSrc": "/assets/lessons/L388/audio/L388-G05-wrong-two.m4a",
          "audio": {
            "spokenText": "手上的字一擦就不見了",
            "src": "/assets/lessons/L388/audio/L388-G05-wrong-two.m4a",
            "durationMs": 3506,
            "charTimings": [
              {
                "charIndex": 0,
                "startMs": 0,
                "endMs": 360
              },
              {
                "charIndex": 1,
                "startMs": 360,
                "endMs": 680
              },
              {
                "charIndex": 2,
                "startMs": 680,
                "endMs": 900
              },
              {
                "charIndex": 3,
                "startMs": 900,
                "endMs": 1100
              },
              {
                "charIndex": 4,
                "startMs": 1100,
                "endMs": 1860
              },
              {
                "charIndex": 5,
                "startMs": 1860,
                "endMs": 2120
              },
              {
                "charIndex": 6,
                "startMs": 2120,
                "endMs": 2660
              },
              {
                "charIndex": 7,
                "startMs": 2660,
                "endMs": 2880
              },
              {
                "charIndex": 8,
                "startMs": 2880,
                "endMs": 3040
              },
              {
                "charIndex": 9,
                "startMs": 3040,
                "endMs": 3300
              }
            ]
          }
        }
      ]
    }
  ],
  "notes": "Production B. Base 7fcef325b37f13fc68fe950bffd7fea8e9db6108, formal L001-L375, 379 learned Han. Learner dependencies L383-L387: 信/寫/字/名/第. Release also needs prior lessons and R045/R046. No additional provisional vocabulary. Normal single-character lesson, not a pilot. 念 reads ㄋㄧㄢˋ, full fourth tone. S03 mother reads aloud; S04 school-trip homesickness letter, mother absent. No readable text exception; do not use 號/姓/她/唸. Final fetch b313ded8ddae7844e4af667191c4bf2b0737ab59: completion-gate SOP reread; production still L001-L375 and all five learner dependencies remain unmerged. Technical QA and image acceptance complete. Browser QA: 390x844 Stage1/2/3 and G01/G03/G04/G05 exercised; G02 prefix reaches target. G02 sustained microphone recording/replay is TOOL_LIMITED (no duration-controlled press in exposed browser API), not an app defect or teacher approval. Teacher subjective review follows main deployment.",
  "stage4AudioAlignment": {
    "L388-G02-prefix": {
      "spokenText": "媽媽把書上的字",
      "src": "/assets/lessons/L388/audio/L388-G02-prefix.m4a",
      "durationMs": 2383,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 360
        },
        {
          "charIndex": 1,
          "startMs": 360,
          "endMs": 780
        },
        {
          "charIndex": 2,
          "startMs": 1160,
          "endMs": 1220
        },
        {
          "charIndex": 3,
          "startMs": 1220,
          "endMs": 1540
        },
        {
          "charIndex": 4,
          "startMs": 1540,
          "endMs": 1740
        },
        {
          "charIndex": 5,
          "startMs": 1740,
          "endMs": 1940
        },
        {
          "charIndex": 6,
          "startMs": 1940,
          "endMs": 2080
        }
      ]
    },
    "L388-G02-suffix": {
      "spokenText": "給我聽",
      "src": "/assets/lessons/L388/audio/L388-G02-suffix.m4a",
      "durationMs": 1037,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 260
        },
        {
          "charIndex": 1,
          "startMs": 260,
          "endMs": 540
        },
        {
          "charIndex": 2,
          "startMs": 540,
          "endMs": 760
        }
      ]
    },
    "L388-G05-wrong-one": {
      "spokenText": "腳上的字一洗就不見了",
      "src": "/assets/lessons/L388/audio/L388-G05-wrong-one.m4a",
      "durationMs": 4486,
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
          "endMs": 1080
        },
        {
          "charIndex": 3,
          "startMs": 1080,
          "endMs": 1380
        },
        {
          "charIndex": 4,
          "startMs": 1840,
          "endMs": 2440
        },
        {
          "charIndex": 5,
          "startMs": 2440,
          "endMs": 2700
        },
        {
          "charIndex": 6,
          "startMs": 2980,
          "endMs": 3580
        },
        {
          "charIndex": 7,
          "startMs": 3580,
          "endMs": 3800
        },
        {
          "charIndex": 8,
          "startMs": 3800,
          "endMs": 4060
        },
        {
          "charIndex": 9,
          "startMs": 4060,
          "endMs": 4300
        }
      ]
    },
    "L388-G05-wrong-two": {
      "spokenText": "手上的字一擦就不見了",
      "src": "/assets/lessons/L388/audio/L388-G05-wrong-two.m4a",
      "durationMs": 3506,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 360
        },
        {
          "charIndex": 1,
          "startMs": 360,
          "endMs": 680
        },
        {
          "charIndex": 2,
          "startMs": 680,
          "endMs": 900
        },
        {
          "charIndex": 3,
          "startMs": 900,
          "endMs": 1100
        },
        {
          "charIndex": 4,
          "startMs": 1100,
          "endMs": 1860
        },
        {
          "charIndex": 5,
          "startMs": 1860,
          "endMs": 2120
        },
        {
          "charIndex": 6,
          "startMs": 2120,
          "endMs": 2660
        },
        {
          "charIndex": 7,
          "startMs": 2660,
          "endMs": 2880
        },
        {
          "charIndex": 8,
          "startMs": 2880,
          "endMs": 3040
        },
        {
          "charIndex": 9,
          "startMs": 3040,
          "endMs": 3300
        }
      ]
    }
  }
}
```

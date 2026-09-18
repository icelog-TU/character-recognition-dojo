# L469 應 Production D package

Status: needs-rework

Branch codex/l469-complete-package. Claim e266eefc; pushed assets checkpoint 1624da90c9041b17c24fc8c1f24ad8ec91972924. Base acd71a5bd25e927c209ed749506aea1d3cc643a0, formal L465 招 / R056, 469 learned characters. Full allowedChars 473 = formal 469 + 絕活該 + 應. Dependencies L466/L467/L468 and R057/R058 release milestone. No main integration or shared app changes.

## Required shared-app follow-up

Browser QA found G04 initial cards already in correct order 拿/手/絕/活. The approved stored option order remains 絕/拿/活/手 with correctOrder 2/0/3/1. Source-backed deterministic reproduction of stableShuffledOptions in src/App.tsx:6613 with seed L469:L469-G04:L469-S03 yields correctOrder [0,1,2,3]. The helper prevents an unchanged input permutation but does not prevent the correct-answer permutation. This violates CURRICULUM_PRODUCTION_SOP initial partial-order shuffle requirement. Shared-app owner must repair the permutation guard, then rerun L469 G04. Production does not alter the teacher-approved options/ids to mask the shared behavior. Package is not represented as dependency-blocked-asset-complete.

## Image review

- S01 style-lock PASS; cast PASS. Girl rests after exercise, ball put down, fixed mother hands water bottle; no illness/running.
- S02 style-lock PASS; cast PASS. Awake low-energy puppy with open eyes ignores nearby ball; fixed girl and mother care, no diagnosis/emergency.
- S03 style-lock PASS; cast PASS. Distinct generic adult with both ordinary hands on lap, toes grip pen at fixed low desk; paper only beginning ink dab, no readable marks; fixed girl watches.
- S04 style-lock PASS; cast PASS. Only fixed girl and striped-shirt older brother; TV hero charging attack while monster remains upright; no text or damage numbers.
- S05 style-lock PASS; cast PASS. Fixed father and girl wait; distinct generic receptionist attends telephone facing away from visitors; no response gestures.

All five exported WebPs compared side by side with L058 style-only set, refined L115-S01/S02,L118-S02,L119-S01,L128-S03 and family L154-S01/L162-S04/L163-S02. Built-in image_gen used; S03 paper marks removed and S04 extra child removed. Final 1024-square WebPs all below 250KB. Total lesson media 1458886 bytes.

## Audio and timings

Ten final M4As, mono AAC 44100Hz, decode and volume gates PASS. G05 mean-volume spread 0.2dB. Standalone 應 1277ms, independently heard ying1; level acoustic contour supports first tone. S01/S02 應該 ying1, S05 回應 ying4; indexed zhuyinOverrides preserved at 3/5/10. Independent G02 prefix 接待人員忙著通話沒回 ends 回 only; suffix 我 complete and audible to AI analysis, mean -16dB, peak -2dB. G05 O1 references S04, two wrong full utterances independently generated. Nine exact-text final-file AI alignments; prompted realignment repaired short/overlapping spans. No speech extraction/splicing. S04 independent audio-model transcript inserts 一 but its pinyin does not; two Whisper transcripts match exact approved text. Raw AI output retained, no human listening approval claimed.

## Browser QA

390x844 phone-width UI: Stage 1 playback/主讀音 and Stage 2 3/3 completed; Stage 3 all five card controls played, layouts and active highlights inspected; S05 ㄧㄥˋ visible. G01/G03 completed; G02 red target and answer reveal ㄧㄥˋ inspected, replay control used; sustained recording and stitched replay untested because supported browser APIs lack press-and-hold recording. SOP browser fallback recorded, no human listening or ear-verified synchronization claimed. G04 accepts all four correct placements but initial-order defect above needs shared-app correction. G05 all three reader controls clicked, wrong fox red/correct frog green. Preview uses full canonical isolated lesson; old-character zhuyin absent only in this fixture. Temporary tab closed, viewport reset, preview stopped; shared curriculum/scripts restored.

## Verification

Startup tools:check, ai:check and curriculum:audit-state PASS. Allowed characters, coverage, display lines, Han counts and Stage 4 mapping PASS. Lesson-local validate:production PASS; all media decode/format/size/volume gates PASS. Final strict pushed-ref intake result is recorded separately; needs-rework is intentionally retained while shared-app QA finding remains. Full integration and npm run verify belong to Release.

## Final approved sentences

```json
[
  {
    "id": "L469-S01",
    "text": "運動後，應該喝一點水。",
    "spokenText": "運動後應該喝一點水",
    "displayLines": [
      "運動後，應該",
      "喝一點水。"
    ],
    "focusChar": "應",
    "imageNotes": "主角女孩剛完成運動，在安全休息區放下球，主角媽媽遞給她水瓶，提醒喝水。女孩稍微流汗、呼吸平復，畫面是運動後休息補充水分，不是在運動中邊跑邊喝，也不畫成生病或嚴重脫水。",
    "imagePrompt": "Square 1:1 rich warm pencil/gouache-watercolor modern picture-book art matching full L058 STYLE ONLY and refined L115-S01/S02,L118-S02,L119-S01,L128-S03; detailed environment, stable preschool proportions. Family anchors L154-S01,L162-S04,L163-S02: fixed girl short dark bob pink clip/cardigan cream blouse navy skirt pink shoes; mother dark chin bob cream blouse blue jeans; father short dark hair blue button shirt jeans; older brother blue and white striped shirt. Generic adults must be distinct. No readable text, letters, numbers or logos. 主角女孩剛完成運動，在安全休息區放下球，主角媽媽遞給她水瓶，提醒喝水。女孩稍微流汗、呼吸平復，畫面是運動後休息補充水分，不是在運動中邊跑邊喝，也不畫成生病或嚴重脫水。",
    "approved": true,
    "imageSrc": "/assets/lessons/L469/images/L469-S01.webp",
    "audio": {
      "src": "/assets/lessons/L469/audio/L469-S01.m4a",
      "durationMs": 3299,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 320
        },
        {
          "charIndex": 1,
          "startMs": 320,
          "endMs": 760
        },
        {
          "charIndex": 2,
          "startMs": 760,
          "endMs": 1100
        },
        {
          "charIndex": 3,
          "startMs": 1620,
          "endMs": 1720
        },
        {
          "charIndex": 4,
          "startMs": 1720,
          "endMs": 1820
        },
        {
          "charIndex": 5,
          "startMs": 1820,
          "endMs": 2220
        },
        {
          "charIndex": 6,
          "startMs": 2220,
          "endMs": 2390
        },
        {
          "charIndex": 7,
          "startMs": 2390,
          "endMs": 2560
        },
        {
          "charIndex": 8,
          "startMs": 2560,
          "endMs": 3040
        }
      ]
    },
    "zhuyinOverrides": {
      "3": "ㄧㄥ"
    }
  },
  {
    "id": "L469-S02",
    "text": "小狗沒活力，應該是生病了。",
    "spokenText": "小狗沒活力應該是生病了",
    "displayLines": [
      "小狗沒活力，",
      "應該是",
      "生病了。"
    ],
    "focusChar": "應",
    "imageNotes": "家中，小狗醒著卻無精打采地趴在墊上，旁邊有平常愛玩的球，但牠沒有起身玩；主角女孩與媽媽蹲在旁邊關心。表現根據沒活力而推測生病，不能只畫熟睡的小狗，也不畫已確診、嚴重受傷或死亡。",
    "imagePrompt": "Square 1:1 rich warm pencil/gouache-watercolor modern picture-book art matching full L058 STYLE ONLY and refined L115-S01/S02,L118-S02,L119-S01,L128-S03; detailed environment, stable preschool proportions. Family anchors L154-S01,L162-S04,L163-S02: fixed girl short dark bob pink clip/cardigan cream blouse navy skirt pink shoes; mother dark chin bob cream blouse blue jeans; father short dark hair blue button shirt jeans; older brother blue and white striped shirt. Generic adults must be distinct. No readable text, letters, numbers or logos. 家中，小狗醒著卻無精打采地趴在墊上，旁邊有平常愛玩的球，但牠沒有起身玩；主角女孩與媽媽蹲在旁邊關心。表現根據沒活力而推測生病，不能只畫熟睡的小狗，也不畫已確診、嚴重受傷或死亡。",
    "approved": true,
    "imageSrc": "/assets/lessons/L469/images/L469-S02.webp",
    "audio": {
      "src": "/assets/lessons/L469/audio/L469-S02.m4a",
      "durationMs": 4003,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 520
        },
        {
          "charIndex": 1,
          "startMs": 520,
          "endMs": 740
        },
        {
          "charIndex": 2,
          "startMs": 740,
          "endMs": 1160
        },
        {
          "charIndex": 3,
          "startMs": 1160,
          "endMs": 1460
        },
        {
          "charIndex": 4,
          "startMs": 1460,
          "endMs": 1680
        },
        {
          "charIndex": 5,
          "startMs": 2560,
          "endMs": 2640
        },
        {
          "charIndex": 6,
          "startMs": 2640,
          "endMs": 2720
        },
        {
          "charIndex": 7,
          "startMs": 2720,
          "endMs": 3220
        },
        {
          "charIndex": 8,
          "startMs": 3220,
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
          "endMs": 3840
        }
      ]
    },
    "zhuyinOverrides": {
      "5": "ㄧㄥ"
    }
  },
  {
    "id": "L469-S03",
    "text": "用腳寫字，是他的拿手絕活。",
    "spokenText": "用腳寫字是他的拿手絕活",
    "displayLines": [
      "用腳寫字，",
      "是他的",
      "拿手絕活。"
    ],
    "focusChar": "活",
    "imageNotes": "一位 generic 成年男性表演者穩坐在椅子上，用腳趾握住筆，在固定好的低桌紙張上熟練書寫；主角女孩可在旁觀看。要看清腳握筆的動作，不是手寫、踩筆或在地板亂塗。不要把主角爸爸改造成此角色，也不擅自設定傷殘或嘲笑身體差異；紙上內容以角度遮蔽，不要求可讀文字。",
    "imagePrompt": "Square 1:1 rich warm pencil/gouache-watercolor modern picture-book art matching full L058 STYLE ONLY and refined L115-S01/S02,L118-S02,L119-S01,L128-S03; detailed environment, stable preschool proportions. Family anchors L154-S01,L162-S04,L163-S02: fixed girl short dark bob pink clip/cardigan cream blouse navy skirt pink shoes; mother dark chin bob cream blouse blue jeans; father short dark hair blue button shirt jeans; older brother blue and white striped shirt. Generic adults must be distinct. No readable text, letters, numbers or logos. 一位 generic 成年男性表演者穩坐在椅子上，用腳趾握住筆，在固定好的低桌紙張上熟練書寫；主角女孩可在旁觀看。要看清腳握筆的動作，不是手寫、踩筆或在地板亂塗。不要把主角爸爸改造成此角色，也不擅自設定傷殘或嘲笑身體差異；紙上內容以角度遮蔽，不要求可讀文字。",
    "approved": true,
    "imageSrc": "/assets/lessons/L469/images/L469-S03.webp",
    "audio": {
      "src": "/assets/lessons/L469/audio/L469-S03.m4a",
      "durationMs": 4219,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 360
        },
        {
          "charIndex": 1,
          "startMs": 360,
          "endMs": 820
        },
        {
          "charIndex": 2,
          "startMs": 820,
          "endMs": 1260
        },
        {
          "charIndex": 3,
          "startMs": 1260,
          "endMs": 1480
        },
        {
          "charIndex": 4,
          "startMs": 1480,
          "endMs": 2200
        },
        {
          "charIndex": 5,
          "startMs": 2200,
          "endMs": 2410
        },
        {
          "charIndex": 6,
          "startMs": 2410,
          "endMs": 2620
        },
        {
          "charIndex": 7,
          "startMs": 2620,
          "endMs": 3060
        },
        {
          "charIndex": 8,
          "startMs": 3060,
          "endMs": 3420
        },
        {
          "charIndex": 9,
          "startMs": 3420,
          "endMs": 3760
        },
        {
          "charIndex": 10,
          "startMs": 3760,
          "endMs": 4000
        }
      ]
    }
  },
  {
    "id": "L469-S04",
    "text": "用這招，絕對能打倒怪物。",
    "spokenText": "用這招絕對能打倒怪物",
    "displayLines": [
      "用這招，",
      "絕對能",
      "打倒怪物。"
    ],
    "focusChar": "絕",
    "imageNotes": "主角女孩拿控制器玩電視遊戲，固定哥哥在旁指導她使用一個特定招數。遊戲中的勇者正在準備施展明顯的能量招數，怪物仍站立，畫面表達對招數的把握而非已完成擊倒。非血腥，不放招式名稱、字幕或傷害數字；不改回解開死結的場景。",
    "imagePrompt": "Square 1:1 rich warm pencil/gouache-watercolor modern picture-book art matching full L058 STYLE ONLY and refined L115-S01/S02,L118-S02,L119-S01,L128-S03; detailed environment, stable preschool proportions. Family anchors L154-S01,L162-S04,L163-S02: fixed girl short dark bob pink clip/cardigan cream blouse navy skirt pink shoes; mother dark chin bob cream blouse blue jeans; father short dark hair blue button shirt jeans; older brother blue and white striped shirt. Generic adults must be distinct. No readable text, letters, numbers or logos. 主角女孩拿控制器玩電視遊戲，固定哥哥在旁指導她使用一個特定招數。遊戲中的勇者正在準備施展明顯的能量招數，怪物仍站立，畫面表達對招數的把握而非已完成擊倒。非血腥，不放招式名稱、字幕或傷害數字；不改回解開死結的場景。",
    "approved": true,
    "imageSrc": "/assets/lessons/L469/images/L469-S04.webp",
    "audio": {
      "src": "/assets/lessons/L469/audio/L469-S04.m4a",
      "durationMs": 3545,
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
          "endMs": 1140
        },
        {
          "charIndex": 3,
          "startMs": 1140,
          "endMs": 1760
        },
        {
          "charIndex": 4,
          "startMs": 1760,
          "endMs": 2040
        },
        {
          "charIndex": 5,
          "startMs": 2040,
          "endMs": 2320
        },
        {
          "charIndex": 6,
          "startMs": 2320,
          "endMs": 2580
        },
        {
          "charIndex": 7,
          "startMs": 2580,
          "endMs": 2840
        },
        {
          "charIndex": 8,
          "startMs": 2840,
          "endMs": 3120
        },
        {
          "charIndex": 9,
          "startMs": 3120,
          "endMs": 3340
        }
      ]
    }
  },
  {
    "id": "L469-S05",
    "text": "接待人員忙著通話，沒回應我。",
    "spokenText": "接待人員忙著通話沒回應我",
    "displayLines": [
      "接待人員",
      "忙著通話，",
      "沒回應我。"
    ],
    "focusChar": "應",
    "imageNotes": "主角女孩與爸爸到接待櫃台詢問，generic 成年接待人員正在拿電話專心通話，注意力在電話另一端，暫時沒有回答女孩。女孩面向櫃台等待，爸爸陪在身邊；不畫接待人員已對女孩說話、點頭或做出回應手勢，也不表現故意嘲弄或無故冷落。保留「通話占用注意力」的前因。",
    "imagePrompt": "Square 1:1 rich warm pencil/gouache-watercolor modern picture-book art matching full L058 STYLE ONLY and refined L115-S01/S02,L118-S02,L119-S01,L128-S03; detailed environment, stable preschool proportions. Family anchors L154-S01,L162-S04,L163-S02: fixed girl short dark bob pink clip/cardigan cream blouse navy skirt pink shoes; mother dark chin bob cream blouse blue jeans; father short dark hair blue button shirt jeans; older brother blue and white striped shirt. Generic adults must be distinct. No readable text, letters, numbers or logos. 主角女孩與爸爸到接待櫃台詢問，generic 成年接待人員正在拿電話專心通話，注意力在電話另一端，暫時沒有回答女孩。女孩面向櫃台等待，爸爸陪在身邊；不畫接待人員已對女孩說話、點頭或做出回應手勢，也不表現故意嘲弄或無故冷落。保留「通話占用注意力」的前因。",
    "approved": true,
    "imageSrc": "/assets/lessons/L469/images/L469-S05.webp",
    "audio": {
      "src": "/assets/lessons/L469/audio/L469-S05.m4a",
      "durationMs": 3840,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 340
        },
        {
          "charIndex": 1,
          "startMs": 340,
          "endMs": 620
        },
        {
          "charIndex": 2,
          "startMs": 620,
          "endMs": 880
        },
        {
          "charIndex": 3,
          "startMs": 880,
          "endMs": 1260
        },
        {
          "charIndex": 4,
          "startMs": 1260,
          "endMs": 1600
        },
        {
          "charIndex": 5,
          "startMs": 1600,
          "endMs": 1820
        },
        {
          "charIndex": 6,
          "startMs": 1820,
          "endMs": 2140
        },
        {
          "charIndex": 7,
          "startMs": 2140,
          "endMs": 2480
        },
        {
          "charIndex": 8,
          "startMs": 2480,
          "endMs": 2800
        },
        {
          "charIndex": 9,
          "startMs": 2800,
          "endMs": 3120
        },
        {
          "charIndex": 10,
          "startMs": 3120,
          "endMs": 3380
        },
        {
          "charIndex": 11,
          "startMs": 3380,
          "endMs": 3660
        }
      ]
    },
    "zhuyinOverrides": {
      "10": "ㄧㄥˋ"
    }
  }
]
```

## Final Stage 4

```json
[
  {
    "id": "L469-G01",
    "type": "find-character",
    "sentenceId": "L469-S01",
    "targetChar": "應",
    "targetCharIndex": 3,
    "prompt": "找出句子裡的「應」。"
  },
  {
    "id": "L469-G02",
    "type": "teach-character",
    "sentenceId": "L469-S05",
    "targetChar": "應",
    "targetCharIndex": 10,
    "prompt": "請你幫小兔子念這個字。",
    "teachAudio": {
      "prefixText": "接待人員忙著通話沒回",
      "suffixText": "我",
      "prefixSrc": "/assets/lessons/L469/audio/L469-G02-prefix.m4a",
      "suffixSrc": "/assets/lessons/L469/audio/L469-G02-suffix.m4a",
      "prefixAudio": {
        "src": "/assets/lessons/L469/audio/L469-G02-prefix.m4a",
        "durationMs": 3311,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 320
          },
          {
            "charIndex": 1,
            "startMs": 320,
            "endMs": 560
          },
          {
            "charIndex": 2,
            "startMs": 560,
            "endMs": 800
          },
          {
            "charIndex": 3,
            "startMs": 800,
            "endMs": 1140
          },
          {
            "charIndex": 4,
            "startMs": 1140,
            "endMs": 1600
          },
          {
            "charIndex": 5,
            "startMs": 1600,
            "endMs": 1780
          },
          {
            "charIndex": 6,
            "startMs": 1780,
            "endMs": 2080
          },
          {
            "charIndex": 7,
            "startMs": 2080,
            "endMs": 2340
          },
          {
            "charIndex": 8,
            "startMs": 2340,
            "endMs": 2780
          },
          {
            "charIndex": 9,
            "startMs": 2780,
            "endMs": 3080
          }
        ]
      },
      "suffixAudio": {
        "src": "/assets/lessons/L469/audio/L469-G02-suffix.m4a",
        "durationMs": 1263,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 400
          }
        ]
      }
    }
  },
  {
    "id": "L469-G03",
    "type": "missing-character",
    "sentenceId": "L469-S02",
    "targetChar": "應",
    "targetCharIndex": 5,
    "missingIndexes": [
      5
    ],
    "prompt": "找回不見的字。",
    "options": [
      {
        "id": "L469-G03-O1",
        "text": "才",
        "correct": false
      },
      {
        "id": "L469-G03-O2",
        "text": "應",
        "correct": true
      },
      {
        "id": "L469-G03-O3",
        "text": "都",
        "correct": false
      }
    ]
  },
  {
    "id": "L469-G04",
    "type": "partial-order",
    "sentenceId": "L469-S03",
    "targetChar": "活",
    "targetCharIndex": 10,
    "missingIndexes": [
      7,
      8,
      9,
      10
    ],
    "prompt": "照順序把字卡放回去。",
    "options": [
      {
        "id": "L469-G04-O1",
        "text": "絕",
        "correct": true,
        "correctOrder": 2
      },
      {
        "id": "L469-G04-O2",
        "text": "拿",
        "correct": true,
        "correctOrder": 0
      },
      {
        "id": "L469-G04-O3",
        "text": "活",
        "correct": true,
        "correctOrder": 3
      },
      {
        "id": "L469-G04-O4",
        "text": "手",
        "correct": true,
        "correctOrder": 1
      }
    ]
  },
  {
    "id": "L469-G05",
    "type": "choose-pronunciation",
    "sentenceId": "L469-S04",
    "targetChar": "絕",
    "targetCharIndex": 3,
    "prompt": "先聽每位朋友念，再選出念對的朋友。",
    "options": [
      {
        "id": "L469-G05-O1",
        "text": "用這招，絕對能打倒怪物。",
        "spokenText": "用這招絕對能打倒怪物",
        "correct": true,
        "audioSrc": "/assets/lessons/L469/audio/L469-S04.m4a"
      },
      {
        "id": "L469-G05-O2",
        "text": "用這招，絕對能打倒勇者。",
        "spokenText": "用這招絕對能打倒勇者",
        "correct": false,
        "audioSrc": "/assets/lessons/L469/audio/L469-G05-wrong-one.m4a"
      },
      {
        "id": "L469-G05-O3",
        "text": "用這招，絕對能打跑怪物。",
        "spokenText": "用這招絕對能打跑怪物",
        "correct": false,
        "audioSrc": "/assets/lessons/L469/audio/L469-G05-wrong-two.m4a"
      }
    ]
  }
]
```

Coverage 應3/3、該2/2、活2/2、絕2/2、招1/1、待1/1 PASS. Han 9,11,11,10,12.

Final lesson-local strict assets:audit PASS (5 images, 10 audio, 0 warnings); unchanged main baseline validate:production PASS.

# L395 Generation Packet

Package status: dependency-blocked-asset-complete

Teacher-approved exact L395 handoff. Base origin/main 2169c169, formal L001-L380 (384 learned Han); allowed 391. Dependencies block Release only. After390 review pair R047/R048 must precede L391. Numeric image exceptions explicitly approved: S01 a deliberately faint incomplete printed 8 on a loose document; S02 exactly clear 128 on the back of ONE card. No other readable writing. All 印 pronounced ㄧㄣˋ; S05 and all G05 options both 數 pronounced ㄕㄨˇ. Do not introduce 單章表機 into learner text. Family identities mandatory. Preserve approved displayLines. Final main recheck: 2be6834d0e35978cc417da5721dbd891e8974948, formal through L389. 號 is now formal; remaining learner dependencies L390-L394 and provisional 數報頁碼翻. Keep original locked allowedChars391 subset; do not broaden vocabulary. S03 adds pronunciation hints at Han7影 ㄧㄥˇ and Han8印 ㄧㄣˋ without changing text.

## Dependencies

```json
{
  "dependsOnLessons": [
    "L390",
    "L391",
    "L392",
    "L393",
    "L394"
  ],
  "provisionalLearnedChars": [
    "數",
    "報",
    "頁",
    "碼",
    "翻"
  ],
  "releaseBlockers": [
    "L390",
    "R047",
    "R048",
    "L391",
    "L392",
    "L393",
    "L394"
  ]
}
```

## Final Approved Sentences

```json
[
  {
    "id": "L395-S01",
    "text": "這一頁的頁碼沒有印好。",
    "spokenText": "這一頁的頁碼沒有印好",
    "focusChar": "印",
    "displayLines": [
      "這一頁的頁碼",
      "沒有印好。"
    ],
    "imageNotes": "主角小女孩與主角爸爸在桌邊查看一張散裝文件。女孩指著右下角的頁碼「8」，該數字印得太淡、部分筆畫缺失；文件其他區域印刷正常。重點是沒有印好，不是紙張破損或寫錯字。其他內容不需可讀。「8」故意印不完整是本句語義要求。"
  },
  {
    "id": "L395-S02",
    "text": "翻過來，號碼印在後面。",
    "spokenText": "翻過來號碼印在後面",
    "focusChar": "印",
    "displayLines": [
      "翻過來，",
      "號碼印在",
      "後面。"
    ],
    "imageNotes": "主角媽媽提醒主角小女孩查看一張活動卡片背面。女孩正在把同一張卡片翻面，背面朝向觀者，清楚印有「128」；媽媽指向背面的號碼。必須是同一張卡片的正反面，不是兩張卡，也不是上下拿反。只需呈現背面，不必同時展示正面。"
  },
  {
    "id": "L395-S03",
    "text": "把報紙翻過來，再影印。",
    "spokenText": "把報紙翻過來再影印",
    "focusChar": "翻",
    "displayLines": [
      "把報紙",
      "翻過來，",
      "再影印。"
    ],
    "imageNotes": "影印店裡，主角爸爸協助主角小女孩翻轉一張報紙，把要影印的一面朝下放到影印機玻璃上。上蓋打開，畫面停在放置原稿的準備階段；不要同時出現已完成的影印成品，避免時間順序混亂。報紙內容不需可讀。",
    "zhuyinOverrides": {
      "7": "ㄧㄥˇ",
      "8": "ㄧㄣˋ"
    }
  },
  {
    "id": "L395-S04",
    "text": "衣服上印著小雞的花樣。",
    "spokenText": "衣服上印著小雞的花樣",
    "focusChar": "印",
    "displayLines": [
      "衣服上印著",
      "小雞的花樣。"
    ],
    "imageNotes": "主角小女孩展開一件衣服，主角媽媽在旁欣賞。衣服布料上印著數個清楚的小雞圖樣，圖樣隨布料皺摺起伏。要看得出是布料印花，不是貼紙、玩具或真正的小雞。"
  },
  {
    "id": "L395-S05",
    "text": "數一數，沙地上有幾個腳印。",
    "spokenText": "數一數沙地上有幾個腳印",
    "focusChar": "數",
    "displayLines": [
      "數一數，",
      "沙地上有",
      "幾個腳印。"
    ],
    "imageNotes": "平整的海邊沙地上有恰好五個分開、清楚可數的人類赤腳腳印。主角小女孩蹲著逐一指數，主角爸爸在旁陪看。兩人的實際腳部留在畫面外，避免增加足跡；不可混入動物腳印、額外模糊腳印或答案數字。",
    "zhuyinOverrides": {
      "0": "ㄕㄨˇ",
      "2": "ㄕㄨˇ"
    }
  }
]
```

## Stage 4

```json
[
  {
    "id": "L395-G01",
    "type": "find-character",
    "sentenceId": "L395-S01",
    "targetChar": "印",
    "targetCharIndex": 8,
    "prompt": "在句子裡找到印，點一下。"
  },
  {
    "id": "L395-G02",
    "type": "teach-character",
    "sentenceId": "L395-S02",
    "targetChar": "印",
    "targetCharIndex": 5,
    "teachAudio": {
      "prefixSrc": "/assets/lessons/L395/audio/L395-G02-prefix.m4a",
      "suffixSrc": "/assets/lessons/L395/audio/L395-G02-suffix.m4a",
      "prefixAudio": {
        "src": "/assets/lessons/L395/audio/L395-G02-prefix.m4a",
        "durationMs": 2159,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 300
          },
          {
            "charIndex": 1,
            "startMs": 300,
            "endMs": 580
          },
          {
            "charIndex": 2,
            "startMs": 580,
            "endMs": 1040
          },
          {
            "charIndex": 3,
            "startMs": 1120,
            "endMs": 1720
          },
          {
            "charIndex": 4,
            "startMs": 1720,
            "endMs": 1900
          }
        ]
      },
      "suffixAudio": {
        "src": "/assets/lessons/L395/audio/L395-G02-suffix.m4a",
        "durationMs": 1578,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 580
          },
          {
            "charIndex": 1,
            "startMs": 580,
            "endMs": 1000
          },
          {
            "charIndex": 2,
            "startMs": 1000,
            "endMs": 1280
          }
        ]
      },
      "prefixText": "翻過來號碼",
      "suffixText": "在後面"
    },
    "prompt": "請你幫我念。"
  },
  {
    "id": "L395-G03",
    "type": "missing-character",
    "sentenceId": "L395-S04",
    "targetChar": "印",
    "targetCharIndex": 3,
    "missingIndexes": [
      3
    ],
    "options": [
      {
        "id": "correct",
        "text": "印",
        "correct": true
      },
      {
        "id": "wrong-one",
        "text": "畫",
        "correct": false
      },
      {
        "id": "wrong-two",
        "text": "放",
        "correct": false
      }
    ],
    "prompt": "補上不見的字。"
  },
  {
    "id": "L395-G04",
    "type": "partial-order",
    "sentenceId": "L395-S03",
    "targetChar": "翻",
    "targetCharIndex": 3,
    "missingIndexes": [
      3,
      4,
      5,
      6
    ],
    "options": [
      {
        "id": "card-zai",
        "text": "再",
        "correct": true,
        "correctOrder": 3
      },
      {
        "id": "card-fan",
        "text": "翻",
        "correct": true,
        "correctOrder": 0
      },
      {
        "id": "card-lai",
        "text": "來",
        "correct": true,
        "correctOrder": 2
      },
      {
        "id": "card-guo",
        "text": "過",
        "correct": true,
        "correctOrder": 1
      }
    ],
    "prompt": "把句子排回正確順序。"
  },
  {
    "id": "L395-G05",
    "type": "choose-pronunciation",
    "sentenceId": "L395-S05",
    "targetChar": "數",
    "targetCharIndex": 0,
    "options": [
      {
        "id": "correct",
        "text": "數一數，沙地上有幾個腳印。",
        "correct": true,
        "audioSrc": "/assets/lessons/L395/audio/L395-S05.m4a",
        "audio": {
          "src": "/assets/lessons/L395/audio/L395-S05.m4a",
          "durationMs": 5254,
          "charTimings": [
            {
              "charIndex": 0,
              "startMs": 0,
              "endMs": 620
            },
            {
              "charIndex": 1,
              "startMs": 620,
              "endMs": 1000
            },
            {
              "charIndex": 2,
              "startMs": 1000,
              "endMs": 1780
            },
            {
              "charIndex": 3,
              "startMs": 1780,
              "endMs": 2440
            },
            {
              "charIndex": 4,
              "startMs": 2440,
              "endMs": 2640
            },
            {
              "charIndex": 5,
              "startMs": 2640,
              "endMs": 3120
            },
            {
              "charIndex": 6,
              "startMs": 3120,
              "endMs": 4000
            },
            {
              "charIndex": 7,
              "startMs": 4000,
              "endMs": 4220
            },
            {
              "charIndex": 8,
              "startMs": 4220,
              "endMs": 4580
            },
            {
              "charIndex": 9,
              "startMs": 4580,
              "endMs": 4840
            },
            {
              "charIndex": 10,
              "startMs": 4840,
              "endMs": 4980
            }
          ]
        }
      },
      {
        "id": "wrong-one",
        "text": "數一數，沙地上有幾個手印。",
        "correct": false,
        "audioSrc": "/assets/lessons/L395/audio/L395-G05-wrong-one.m4a",
        "audio": {
          "src": "/assets/lessons/L395/audio/L395-G05-wrong-one.m4a",
          "durationMs": 3868,
          "charTimings": [
            {
              "charIndex": 0,
              "startMs": 0,
              "endMs": 460
            },
            {
              "charIndex": 1,
              "startMs": 460,
              "endMs": 680
            },
            {
              "charIndex": 2,
              "startMs": 680,
              "endMs": 1200
            },
            {
              "charIndex": 3,
              "startMs": 1365,
              "endMs": 1900
            },
            {
              "charIndex": 4,
              "startMs": 1900,
              "endMs": 2040
            },
            {
              "charIndex": 5,
              "startMs": 2040,
              "endMs": 2460
            },
            {
              "charIndex": 6,
              "startMs": 2460,
              "endMs": 2780
            },
            {
              "charIndex": 7,
              "startMs": 2780,
              "endMs": 2920
            },
            {
              "charIndex": 8,
              "startMs": 2920,
              "endMs": 3180
            },
            {
              "charIndex": 9,
              "startMs": 3180,
              "endMs": 3480
            },
            {
              "charIndex": 10,
              "startMs": 3480,
              "endMs": 3600
            }
          ]
        }
      },
      {
        "id": "wrong-two",
        "text": "數一數，泥地上有幾個腳印。",
        "correct": false,
        "audioSrc": "/assets/lessons/L395/audio/L395-G05-wrong-two.m4a",
        "audio": {
          "src": "/assets/lessons/L395/audio/L395-G05-wrong-two.m4a",
          "durationMs": 4530,
          "charTimings": [
            {
              "charIndex": 0,
              "startMs": 0,
              "endMs": 480
            },
            {
              "charIndex": 1,
              "startMs": 480,
              "endMs": 860
            },
            {
              "charIndex": 2,
              "startMs": 860,
              "endMs": 1540
            },
            {
              "charIndex": 3,
              "startMs": 1540,
              "endMs": 2040
            },
            {
              "charIndex": 4,
              "startMs": 2040,
              "endMs": 2340
            },
            {
              "charIndex": 5,
              "startMs": 2340,
              "endMs": 2700
            },
            {
              "charIndex": 6,
              "startMs": 2700,
              "endMs": 3400
            },
            {
              "charIndex": 7,
              "startMs": 3400,
              "endMs": 3600
            },
            {
              "charIndex": 8,
              "startMs": 3600,
              "endMs": 3900
            },
            {
              "charIndex": 9,
              "startMs": 3900,
              "endMs": 4140
            },
            {
              "charIndex": 10,
              "startMs": 4140,
              "endMs": 4320
            }
          ]
        }
      }
    ],
    "prompt": "聽一聽，選出讀對的朋友。"
  }
]
```

## Image Prompts

### L395-S01

Use case: illustration-story. One finished square 1:1 children's picture-book lesson illustration, 1024px. Mandatory reference image 1 is the FULL L058 set, STYLE ONLY: fine pencil-and-watercolor linework, warm natural light, bright rich natural palette, detailed clean environments, soft expressive preschool faces and balanced body proportions. Reference image 2 gives refined L115/L118/L119/L128 proportions and L154/L162/L163 family IDENTITY. Preserve little girl short dark bob/pink clip/pink cardigan/navy skirt, mother chin-length dark hair/ivory blouse/blue jeans, father short brown hair/blue button shirt/beige trousers. No generic replacement people, anime, 3D, flat cartoon, pale simple watercolor wash. Phone-readable central action with safe margins. No readable writing, letters, brands, signs, numbers except the explicitly authorized numeric exception for this scene. 主角小女孩與主角爸爸在桌邊查看一張散裝文件。女孩指著右下角的頁碼「8」，該數字印得太淡、部分筆畫缺失；文件其他區域印刷正常。重點是沒有印好，不是紙張破損或寫錯字。其他內容不需可讀。「8」故意印不完整是本句語義要求。 New image required: existing scenes do not depict this exact action and object relationship.

### L395-S02

Use case: illustration-story. One finished square 1:1 children's picture-book lesson illustration, 1024px. Mandatory reference image 1 is the FULL L058 set, STYLE ONLY: fine pencil-and-watercolor linework, warm natural light, bright rich natural palette, detailed clean environments, soft expressive preschool faces and balanced body proportions. Reference image 2 gives refined L115/L118/L119/L128 proportions and L154/L162/L163 family IDENTITY. Preserve little girl short dark bob/pink clip/pink cardigan/navy skirt, mother chin-length dark hair/ivory blouse/blue jeans, father short brown hair/blue button shirt/beige trousers. No generic replacement people, anime, 3D, flat cartoon, pale simple watercolor wash. Phone-readable central action with safe margins. No readable writing, letters, brands, signs, numbers except the explicitly authorized numeric exception for this scene. 主角媽媽提醒主角小女孩查看一張活動卡片背面。女孩正在把同一張卡片翻面，背面朝向觀者，清楚印有「128」；媽媽指向背面的號碼。必須是同一張卡片的正反面，不是兩張卡，也不是上下拿反。只需呈現背面，不必同時展示正面。 New image required: existing scenes do not depict this exact action and object relationship.

### L395-S03

Use case: illustration-story. One finished square 1:1 children's picture-book lesson illustration, 1024px. Mandatory reference image 1 is the FULL L058 set, STYLE ONLY: fine pencil-and-watercolor linework, warm natural light, bright rich natural palette, detailed clean environments, soft expressive preschool faces and balanced body proportions. Reference image 2 gives refined L115/L118/L119/L128 proportions and L154/L162/L163 family IDENTITY. Preserve little girl short dark bob/pink clip/pink cardigan/navy skirt, mother chin-length dark hair/ivory blouse/blue jeans, father short brown hair/blue button shirt/beige trousers. No generic replacement people, anime, 3D, flat cartoon, pale simple watercolor wash. Phone-readable central action with safe margins. No readable writing, letters, brands, signs, numbers except the explicitly authorized numeric exception for this scene. 影印店裡，主角爸爸協助主角小女孩翻轉一張報紙，把要影印的一面朝下放到影印機玻璃上。上蓋打開，畫面停在放置原稿的準備階段；不要同時出現已完成的影印成品，避免時間順序混亂。報紙內容不需可讀。 New image required: existing scenes do not depict this exact action and object relationship.

### L395-S04

Use case: illustration-story. One finished square 1:1 children's picture-book lesson illustration, 1024px. Mandatory reference image 1 is the FULL L058 set, STYLE ONLY: fine pencil-and-watercolor linework, warm natural light, bright rich natural palette, detailed clean environments, soft expressive preschool faces and balanced body proportions. Reference image 2 gives refined L115/L118/L119/L128 proportions and L154/L162/L163 family IDENTITY. Preserve little girl short dark bob/pink clip/pink cardigan/navy skirt, mother chin-length dark hair/ivory blouse/blue jeans, father short brown hair/blue button shirt/beige trousers. No generic replacement people, anime, 3D, flat cartoon, pale simple watercolor wash. Phone-readable central action with safe margins. No readable writing, letters, brands, signs, numbers except the explicitly authorized numeric exception for this scene. 主角小女孩展開一件衣服，主角媽媽在旁欣賞。衣服布料上印著數個清楚的小雞圖樣，圖樣隨布料皺摺起伏。要看得出是布料印花，不是貼紙、玩具或真正的小雞。 New image required: existing scenes do not depict this exact action and object relationship.

### L395-S05

Use case: illustration-story. One finished square 1:1 children's picture-book lesson illustration, 1024px. Mandatory reference image 1 is the FULL L058 set, STYLE ONLY: fine pencil-and-watercolor linework, warm natural light, bright rich natural palette, detailed clean environments, soft expressive preschool faces and balanced body proportions. Reference image 2 gives refined L115/L118/L119/L128 proportions and L154/L162/L163 family IDENTITY. Preserve little girl short dark bob/pink clip/pink cardigan/navy skirt, mother chin-length dark hair/ivory blouse/blue jeans, father short brown hair/blue button shirt/beige trousers. No generic replacement people, anime, 3D, flat cartoon, pale simple watercolor wash. Phone-readable central action with safe margins. No readable writing, letters, brands, signs, numbers except the explicitly authorized numeric exception for this scene. 平整的海邊沙地上有恰好五個分開、清楚可數的人類赤腳腳印。主角小女孩蹲著逐一指數，主角爸爸在旁陪看。兩人的實際腳部留在畫面外，避免增加足跡；不可混入動物腳印、額外模糊腳印或答案數字。 New image required: existing scenes do not depict this exact action and object relationship.

## Production QA

### Browser QA

Automated phone playback checks at 390x844 played all five Stage 3 sentences to the UI completion message. G02 reached the target recording-wait state; G03/G04 answers were accepted; G05 all three audio buttons were exercised. Tablet layout was checked at 768x1024. This is not a claim of human microphone recording, post-recording replay, full reward-navigation testing, or teacher subjective pronunciation approval. Those exclusions are recorded below.

Package intake on pushed asset commit bbd885d7fe2837262968867751fd2403aa42fc7b: PASS. Final tip is rechecked after this QA clarification is pushed.

```json
{
  "sourceBoundaryAtStart": "2169c169",
  "sourceBoundaryAtFinish": "2be6834d0e35978cc417da5721dbd891e8974948",
  "technical": "PASS: 391 locked allowed chars, coverage 印5 翻2 碼2 頁2 報1 數2; exact spokenText/displayLines; <=6 visible characters per line; canonical games, five sentences once, all target indexes and single-Han cards; all 10 M4A decode; AAC mono 44100 Hz; 5 square1024 WebP; 1243028 total asset bytes; strict format/volume audit and isolated validate:production.",
  "images": {
    "S01": {
      "styleLock": "PASS",
      "cast": "PASS"
    },
    "S02": {
      "styleLock": "PASS",
      "cast": "PASS"
    },
    "S03": {
      "styleLock": "PASS",
      "cast": "PASS"
    },
    "S04": {
      "styleLock": "PASS",
      "cast": "PASS"
    },
    "S05": {
      "styleLock": "PASS",
      "cast": "PASS"
    }
  },
  "imageNotes": "Final WebPs opened against full L058 style contact sheet and refined/family contact sheet. S01 initial pointing hand rejected, regenerated to point to defective 8; rejected image not committed. S02 single card with clear128; S03 open copier, original held above platen and empty output; S04 printed chick motifs on folds; S05 exactly5 human bare footprints, no visible real feet.",
  "audio": "10 standalone/full-text OpenAI files. All use coral except S03 uses nova after coral transcript rendered 影印 as 印印; final S03 transcript matches exact text. S05 and G05 regenerated with existing zhuyinOverrides read by TTS; both 數 are ㄕㄨˇ. No splicing. Trailing silence reduced on source audio at measured -45dB boundary plus180ms; normalized by repo assets:audio and all9 sentence/game files AI-aligned again.",
  "timings": "Manual acoustic refinement: S02 index3號 start1609ms from end of measured pause; S04 index2上 end1292ms before measured pause; G05 wrong-one index3沙 start1365ms after measured pause. All sentence spans80-900ms, monotonic, final tails <=300ms.",
  "browserQA": "Automated local single-unit fixture at390x844: standalone印 playback completed; all5 Stage3 sentence buttons played to UI completion (句子都聽完了); S05 both數 showㄕㄨˇ. G01 answer accepted; G02 prefix reached red-framed印/record-wait; G03 three distinct choices印放畫 and correct accepted; G04翻過來再 accepted; G05 all3 audio buttons operated. Phone and768x1024 tablet screenshots checked; viewport scrollWidth=clientWidth753 on tablet; no browser warning/error logs.",
  "qaScope": "Real microphone recording and post-recording replay were not tested; G02 was skipped after prefix/target-wait inspection. Full reward-navigation and Stage2 completion were not tested. Automated playback is not teacher subjective pronunciation approval. Isolated fixture has no full historical zhuyin map; Release verifies cumulative context after integration. No main integration or full verify in Production.",
  "sharedScriptChanges": "align-audio-timings-ai adds six simplified-equivalent mappings only; generate-audio-drafts reads existing per-sentence zhuyinOverrides and carries unchanged-character overrides to wrong-choice text. Release should inspect these shared changes when integrating."
}
```

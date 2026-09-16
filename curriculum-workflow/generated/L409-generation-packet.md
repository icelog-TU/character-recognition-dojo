# L409 Generation Packet

packageStatus: asset-complete-package

Production C; codex/l409-complete-package. Source main 2632d2c399197f4d62e13e78faf1854ccce7f219, formal L001-L404. Title 辦; newChars ["辦"]; zhuyin 辦 ㄅㄢˋ; one normal lesson.

dependsOnLessons: []. provisionalLearnedChars: []. releaseBlockers: []. Final dependency check: origin/main 346b7af0e22c21d388c92491e0e569b37e62299f has L405-L408 and R049/R050 after405. Initial dependencies were L405-L408 (越、加、減、法), plus R049/R050 milestone; all cleared during production. Shared production JSON/planner/ledger belong to Release.

## Approved Sentences

```json
[
  {
    "id": "L409-S01",
    "text": "加法和減法都不會，怎麼辦？",
    "spokenText": "加法和減法都不會怎麼辦",
    "displayLines": [
      "加法和減法",
      "都不會，",
      "怎麼辦？"
    ],
    "focusChar": "辦",
    "imageNotes": "家中書桌旁，主角小女孩面前放著打開的作業本和算數積木，手拿鉛筆，停下來轉頭向主角媽媽求助，表情困惑但不哭。媽媽走近準備協助。作業本朝向女孩，觀者看不到可讀題目，不需要生成算式。",
    "approved": true
  },
  {
    "id": "L409-S02",
    "text": "書包太重，想辦法減少東西。",
    "spokenText": "書包太重想辦法減少東西",
    "displayLines": [
      "書包太重，",
      "想辦法",
      "減少東西。"
    ],
    "focusChar": "辦",
    "imageNotes": "出門前，主角媽媽陪小女孩整理書包。書包打開放在矮桌上，裡面有上學用品；女孩正拿出一個不必帶去學校的玩具，放回旁邊收納盒。呈現拿出不需要的東西，不是把書本全部丟掉。",
    "approved": true
  },
  {
    "id": "L409-S03",
    "text": "客人越來越多，得加椅子了。",
    "spokenText": "客人越來越多得加椅子了",
    "displayLines": [
      "客人",
      "越來越多，",
      "得加椅子了。"
    ],
    "focusChar": "加",
    "imageNotes": "家中聚會，已有幾位 generic 成人親友坐在客廳，門口又有兩位親友抵達，主角媽媽正在迎接。主角爸爸從飯廳搬來一張椅子，主角小女孩站在一旁看。清楚表現原有座位不夠，正在增加椅子；不要把客人都畫成主角一家人。",
    "zhuyinOverrides": {
      "6": "ㄉㄟˇ"
    },
    "approved": true
  },
  {
    "id": "L409-S04",
    "text": "小光身體弱，跑一下就累了。",
    "spokenText": "小光身體弱跑一下就累了",
    "displayLines": [
      "小光身體弱，",
      "跑一下",
      "就累了。"
    ],
    "focusChar": "弱",
    "imageNotes": "學校操場旁，小光跑了一小段後停下，雙手扶膝、微微喘氣，表情疲累；主角小女孩停在旁邊關心他，老師在附近留意。不要倒地、受傷或被同學嘲笑。使用 public/assets/reference/lesson-cast/xiaoguang.webp，保留圓眼鏡、整齊短黑髮、白襯衫、深藍背心、卡其短褲、白襪、棕色鞋；跑步時不背書包。不是運動型「他」小男孩，也不是固定「你」小男孩；不另改成病弱外貌。",
    "approved": true
  },
  {
    "id": "L409-S05",
    "text": "媽媽帶我去辦借書卡。",
    "spokenText": "媽媽帶我去辦借書卡",
    "displayLines": [
      "媽媽帶我去",
      "辦借書卡。"
    ],
    "focusChar": "辦",
    "imageNotes": "圖書館櫃台，主角媽媽和小女孩站在一起，generic 圖書館員正在把一張新借書卡交給女孩，媽媽在旁陪同。後方可見整齊書架，清楚辨識圖書館場景。借書卡不需要可讀姓名、號碼或文字。",
    "approved": true
  }
]
```

## Stage 4

```json
[
  {
    "id": "L409-G01",
    "type": "find-character",
    "sentenceId": "L409-S01",
    "targetChar": "辦",
    "targetCharIndex": 10
  },
  {
    "id": "L409-G02",
    "type": "teach-character",
    "sentenceId": "L409-S02",
    "targetChar": "辦",
    "targetCharIndex": 5,
    "teachAudio": {
      "prefixText": "書包太重想",
      "suffixText": "法減少東西",
      "prefixSrc": "/assets/lessons/L409/audio/L409-G02-prefix.m4a",
      "suffixSrc": "/assets/lessons/L409/audio/L409-G02-suffix.m4a"
    }
  },
  {
    "id": "L409-G03",
    "type": "missing-character",
    "sentenceId": "L409-S05",
    "targetChar": "辦",
    "targetCharIndex": 5,
    "missingIndexes": [
      5
    ],
    "options": [
      {
        "id": "correct",
        "text": "辦",
        "correct": true
      },
      {
        "id": "wrong-one",
        "text": "借",
        "correct": false
      },
      {
        "id": "wrong-two",
        "text": "拿",
        "correct": false
      }
    ]
  },
  {
    "id": "L409-G04",
    "type": "partial-order",
    "sentenceId": "L409-S03",
    "targetChar": "加",
    "targetCharIndex": 7,
    "missingIndexes": [
      7,
      8,
      9,
      10
    ],
    "options": [
      {
        "id": "card-zi",
        "text": "子",
        "correct": true,
        "correctOrder": 2
      },
      {
        "id": "card-jia",
        "text": "加",
        "correct": true,
        "correctOrder": 0
      },
      {
        "id": "card-le",
        "text": "了",
        "correct": true,
        "correctOrder": 3
      },
      {
        "id": "card-yi",
        "text": "椅",
        "correct": true,
        "correctOrder": 1
      }
    ]
  },
  {
    "id": "L409-G05",
    "type": "choose-pronunciation",
    "sentenceId": "L409-S04",
    "targetChar": "弱",
    "targetCharIndex": 4,
    "options": [
      {
        "id": "correct",
        "text": "小光身體弱，跑一下就累了。",
        "correct": true,
        "audioSrc": "/assets/lessons/L409/audio/L409-S04.m4a"
      },
      {
        "id": "wrong-one",
        "text": "小月身體弱，跑一下就累了。",
        "correct": false,
        "audioSrc": "/assets/lessons/L409/audio/L409-G05-wrong-one.m4a"
      },
      {
        "id": "wrong-two",
        "text": "小光身體弱，走一下就累了。",
        "correct": false,
        "audioSrc": "/assets/lessons/L409/audio/L409-G05-wrong-two.m4a"
      }
    ]
  }
]
```

## Production Rules

Browser QA at 390px: standalone playback and all five sentence playbacks completed; UI reported 句子都聽完了. G01 correct target, G02 prefix-to-hold cue, G03 three choices and correct fill, G04 加椅子了 ordering checked. G05 all three playback controls exercised; no browser console warnings/errors. Physical microphone recording/replay and reward completion were not exercised. Teacher subjective review is post-merge, not an ordinary pre-merge gate.

Exact approved text and functional displayLines preserved. 413 allowed characters, coverage 辦3/法3/減2/加2/越2/弱1. Five canonical game types, each sentence once. G03 exactly three single-Han choices; G04 single-Han cards 加/椅/子/了.

S03 得 Han index6 = ㄉㄟˇ; zhuyinOverrides included in request and draft; independent AI listening confirms dei3. G02 whole prefix 書包太重想 ends 想; suffix 法減少東西 begins 法, no 辦. G05 wrong texts generated whole, not spliced. Standalone 辦 input only; processed M4A, final AI charTimings. See L409-production-qa.md and SHA256-keyed listening evidence for generation, timing and playback scope.

Mandatory full L058-S01..S05 style-only set; refined L115-S01/S02, L118-S02, L119-S01, L128-S03; family L154-S01, L162-S04, L163-S02. S04 public/assets/reference/lesson-cast/xiaoguang.webp fixed identity with no backpack. Wrong spoken 小月 only in G05, not image. Mother/teacher/generic adults distinct. No readable image text/numbers exceptions. No unapproved imageNotes vocabulary in learner-facing text.

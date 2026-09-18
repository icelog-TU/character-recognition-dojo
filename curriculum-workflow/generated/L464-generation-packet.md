# L464 待 Production D package

Status: dependency-blocked-asset-complete

Branch codex/l464-complete-package; claim 1910b4d2. Base c130f105f1808588cb22f237519234527643b8fe; latest formal L461 文, 465 learned, R056. Latest full allowedChars = 468 (465 + 日期 + 待). Original handoff L446/450 + 中午文日期 + 待 = 456 also fully preserved and audited; no approved sentence/option changed. 招善昨 are absent from student text/options.

Assigned dependencies L459-L463 retained; L459 中/L460 午/L461 文 already merged. Effective provisional 日期 and pending Release dependencies L462/L463. R055/R056 now merged. No main integration or shared curriculum/planner/ledger change.

## Image review

- S01 style-lock PASS, cast PASS. Fixed girl and father at home before departure; thought bubble revised to spectator view of generic adult baseball players.
- S02 style-lock PASS, cast PASS. Fixed girl and mother prepare decorations; unopened supplies and loose streamers; imagined cake has no candles, text or age clues.
- S03 style-lock PASS, cast PASS. Generic male teacher with wavy graying hair/glasses/brown cardigan clearly distinct from father; welcomes two adult friends at home.
- S04 style-lock PASS, cast PASS. Generic customer groups queue for restaurant seating; diners inside; no cashier/takeout cues.
- S05 style-lock PASS, cast PASS. Generic braided mint-shirt girl writes toward protagonist, who appears only in their photo; paper content unreadable.

Actual exported WebPs compared side by side with full L058 style-only set, refined L115-S01/S02,L118-S02,L119-S01,L128-S03, and family L154-S01/L162-S04/L163-S02. S01 initial thought bubble rejected because it showed girl playing; revised to watching adult players. Rejected image draft not committed. Built-in image_gen; prompt/revision/source manifest in L464-image-prompts.json. Five square 1024 WebPs, each below 250KB; total lesson assets 1399158 bytes.

## Audio/timings

Ten final M4As, mono AAC 44100Hz; all decode and pass volume gates. G05 relative mean-volume spread 1dB. Standalone 待 998ms. Nine exact-text final-file AI alignments. All sentence spans 80–900ms and tails <=300ms. S04 客 corrected by exact-text AI realignment, 800–1180ms. S01 regenerated whole sentence with exact input and full Taiwan pinyin instruction; final auditory model reports both 期 qi2 and 待 dai4. S02 rising qi contour and auditory analysis support qi2; exact Whisper transcription is 生日快到了我好期待. Separate audio-model lexical output hallucinated a different opening; raw model output retained, not treated as authoritative transcription or human approval. Exact G02 日文老師在他家接 / 朋友 generated independently; G05 two wrong sentences generated whole, O1 references S05. No extraction/splicing. Raw MP3s remain ignored locally. See L464-audio-generation.json and L464-phonetic-audio-review.json.

## Browser QA — phone playback

390x844 browser check: Stage 1 target/zhuyin/audio; Stage 2 all 3 targets accepted; Stage 3 all 5 cards played and active highlights/functional line layouts inspected; G01/G03/G04 completed; G05 all three controls, wrong red/correct green feedback, reward and final return-home controls inspected. G02 reached red 待 after prefix, then UI skip: browser API lacks sustained pointer hold. Recording/stitched replay untested under SOP browser fallback. Human listening and ear-verified syllable synchronization not claimed. Full canonical isolated lesson retained all five original games; old-character zhuyin outside this fixture awaits Release integration. Preview stopped, temporary tab closed, viewport reset, shared files restored.

Startup tools:check, ai:check, curriculum:audit-state PASS. Approved data, coverage and game-index audits PASS. Lesson-local validate:production PASS. verify skipped: dependency-blocked, shared state left for Release. Pushed-ref strict intake recorded in final handoff.

Post-merge review queue, usable after Release merge/deploy: https://icelog-tu.github.io/character-recognition-dojo/tools/asset-review-index.html?ref=main ; https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L464&ref=main . Command: npm run asset:review-status -- --unit L464 --ref main

## Final approved sentences

```json
[
  {
    "id": "L464-S01",
    "text": "我很期待星期日的比賽。",
    "spokenText": "我很期待星期日的比賽",
    "displayLines": [
      "我很期待",
      "星期日的",
      "比賽。"
    ],
    "focusChar": "待",
    "imageNotes": "家中，主角女孩抱著棒球手套，興奮地向主角爸爸談論即將觀看的棒球比賽；可用簡單思考泡泡呈現棒球場與比賽球員。主場景仍在出發前，不畫成已在球場比賽。星期日由句子交代，不要求日曆或賽程文字。",
    "imagePrompt": "Square 1:1 rich warm pencil/gouache-watercolor modern picture-book art matching full L058 STYLE ONLY and refined L115-S01/S02,L118-S02,L119-S01,L128-S03; detailed environment, stable preschool proportions. Family anchors L154-S01,L162-S04,L163-S02: fixed girl short dark bob pink clip/cardigan cream blouse navy skirt pink shoes; mother dark chin bob cream blouse blue jeans; father short dark hair blue button shirt jeans. Generic adults and peers must be distinct. No readable text, letters, numbers or logos. 家中，主角女孩抱著棒球手套，興奮地向主角爸爸談論即將觀看的棒球比賽；可用簡單思考泡泡呈現棒球場與比賽球員。主場景仍在出發前，不畫成已在球場比賽。星期日由句子交代，不要求日曆或賽程文字。",
    "approved": true,
    "zhuyinOverrides": {
      "2": "ㄑㄧˊ",
      "5": "ㄑㄧˊ"
    }
  },
  {
    "id": "L464-S02",
    "text": "生日快到了，我好期待。",
    "spokenText": "生日快到了我好期待",
    "displayLines": [
      "生日快到了，",
      "我好期待。"
    ],
    "focusChar": "待",
    "imageNotes": "主角女孩和主角媽媽在家準備生日裝飾，桌上有尚未掛好的彩帶與未拆的派對用品；女孩神情期待。可用思考泡泡呈現生日蛋糕。不要畫成已在吹蠟燭慶生，不設定年齡，不放年齡數字或可據以判定歲數的蠟燭組合。",
    "imagePrompt": "Square 1:1 rich warm pencil/gouache-watercolor modern picture-book art matching full L058 STYLE ONLY and refined L115-S01/S02,L118-S02,L119-S01,L128-S03; detailed environment, stable preschool proportions. Family anchors L154-S01,L162-S04,L163-S02: fixed girl short dark bob pink clip/cardigan cream blouse navy skirt pink shoes; mother dark chin bob cream blouse blue jeans; father short dark hair blue button shirt jeans. Generic adults and peers must be distinct. No readable text, letters, numbers or logos. 主角女孩和主角媽媽在家準備生日裝飾，桌上有尚未掛好的彩帶與未拆的派對用品；女孩神情期待。可用思考泡泡呈現生日蛋糕。不要畫成已在吹蠟燭慶生，不設定年齡，不放年齡數字或可據以判定歲數的蠟燭組合。",
    "approved": true,
    "zhuyinOverrides": {
      "7": "ㄑㄧˊ"
    }
  },
  {
    "id": "L464-S03",
    "text": "日文老師在他家接待朋友。",
    "spokenText": "日文老師在他家接待朋友",
    "displayLines": [
      "日文老師",
      "在他家",
      "接待朋友。"
    ],
    "focusChar": "待",
    "imageNotes": "一位 generic 成年男性日文老師，在自己家玄關迎接兩位成年朋友，伸手邀請他們進屋，後方可見家中客廳。老師不是主角爸爸；來訪者不是學生或家長，不能改成教室接待。教日文是角色背景，不用日本服裝、旗幟或文字標籤表達。",
    "imagePrompt": "Square 1:1 rich warm pencil/gouache-watercolor modern picture-book art matching full L058 STYLE ONLY and refined L115-S01/S02,L118-S02,L119-S01,L128-S03; detailed environment, stable preschool proportions. Family anchors L154-S01,L162-S04,L163-S02: fixed girl short dark bob pink clip/cardigan cream blouse navy skirt pink shoes; mother dark chin bob cream blouse blue jeans; father short dark hair blue button shirt jeans. Generic adults and peers must be distinct. No readable text, letters, numbers or logos. 一位 generic 成年男性日文老師，在自己家玄關迎接兩位成年朋友，伸手邀請他們進屋，後方可見家中客廳。老師不是主角爸爸；來訪者不是學生或家長，不能改成教室接待。教日文是角色背景，不用日本服裝、旗幟或文字標籤表達。",
    "approved": true
  },
  {
    "id": "L464-S04",
    "text": "中午，客人排隊等待用餐。",
    "spokenText": "中午客人排隊等待用餐",
    "displayLines": [
      "中午，",
      "客人排隊",
      "等待用餐。"
    ],
    "focusChar": "待",
    "imageNotes": "白天餐廳入口，幾組 generic 客人有秩序地排隊，工作人員正在安排入座，裡面有正在用餐的客人。隊伍中的人尚未入座，明確是等候用餐，不是結帳或領餐。人物不必全套用主角家庭。",
    "imagePrompt": "Square 1:1 rich warm pencil/gouache-watercolor modern picture-book art matching full L058 STYLE ONLY and refined L115-S01/S02,L118-S02,L119-S01,L128-S03; detailed environment, stable preschool proportions. Family anchors L154-S01,L162-S04,L163-S02: fixed girl short dark bob pink clip/cardigan cream blouse navy skirt pink shoes; mother dark chin bob cream blouse blue jeans; father short dark hair blue button shirt jeans. Generic adults and peers must be distinct. No readable text, letters, numbers or logos. 白天餐廳入口，幾組 generic 客人有秩序地排隊，工作人員正在安排入座，裡面有正在用餐的客人。隊伍中的人尚未入座，明確是等候用餐，不是結帳或領餐。人物不必全套用主角家庭。",
    "approved": true
  },
  {
    "id": "L464-S05",
    "text": "日本朋友用中文寫信給我。",
    "spokenText": "日本朋友用中文寫信給我",
    "displayLines": [
      "日本朋友",
      "用中文",
      "寫信給我。"
    ],
    "focusChar": "文",
    "imageNotes": "一位 generic 日本同齡朋友坐在書桌前寫信，旁邊放著信封，以及她與固定主角女孩的合照，協助建立朋友關係。寫信者不是主角女孩；方向是日本朋友寫給主角。以斜後方視角讓信紙內容不可讀，不要求生成中文信件，也不靠外貌刻板印象表示國籍。",
    "imagePrompt": "Square 1:1 rich warm pencil/gouache-watercolor modern picture-book art matching full L058 STYLE ONLY and refined L115-S01/S02,L118-S02,L119-S01,L128-S03; detailed environment, stable preschool proportions. Family anchors L154-S01,L162-S04,L163-S02: fixed girl short dark bob pink clip/cardigan cream blouse navy skirt pink shoes; mother dark chin bob cream blouse blue jeans; father short dark hair blue button shirt jeans. Generic adults and peers must be distinct. No readable text, letters, numbers or logos. 一位 generic 日本同齡朋友坐在書桌前寫信，旁邊放著信封，以及她與固定主角女孩的合照，協助建立朋友關係。寫信者不是主角女孩；方向是日本朋友寫給主角。以斜後方視角讓信紙內容不可讀，不要求生成中文信件，也不靠外貌刻板印象表示國籍。",
    "approved": true
  }
]
```

## Final Stage 4

```json
[
  {
    "id": "L464-G01",
    "type": "find-character",
    "sentenceId": "L464-S01",
    "targetChar": "待",
    "targetCharIndex": 3,
    "prompt": "找出句子裡的「待」。"
  },
  {
    "id": "L464-G02",
    "type": "teach-character",
    "sentenceId": "L464-S03",
    "targetChar": "待",
    "targetCharIndex": 8,
    "prompt": "請你幫小兔子念這個字。",
    "teachAudio": {
      "prefixText": "日文老師在他家接",
      "suffixText": "朋友",
      "prefixSrc": "/assets/lessons/L464/audio/L464-G02-prefix.m4a",
      "suffixSrc": "/assets/lessons/L464/audio/L464-G02-suffix.m4a",
      "prefixAudio": {
        "src": "/assets/lessons/L464/audio/L464-G02-prefix.m4a",
        "durationMs": 3097,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 400
          },
          {
            "charIndex": 1,
            "startMs": 400,
            "endMs": 700
          },
          {
            "charIndex": 2,
            "startMs": 700,
            "endMs": 1020
          },
          {
            "charIndex": 3,
            "startMs": 1020,
            "endMs": 1340
          },
          {
            "charIndex": 4,
            "startMs": 1340,
            "endMs": 1960
          },
          {
            "charIndex": 5,
            "startMs": 1960,
            "endMs": 2300
          },
          {
            "charIndex": 6,
            "startMs": 2300,
            "endMs": 2620
          },
          {
            "charIndex": 7,
            "startMs": 2620,
            "endMs": 2880
          }
        ]
      },
      "suffixAudio": {
        "src": "/assets/lessons/L464/audio/L464-G02-suffix.m4a",
        "durationMs": 1345,
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
          }
        ]
      }
    }
  },
  {
    "id": "L464-G03",
    "type": "missing-character",
    "sentenceId": "L464-S02",
    "targetChar": "待",
    "targetCharIndex": 8,
    "missingIndexes": [
      8
    ],
    "prompt": "找回不見的字。",
    "options": [
      {
        "id": "L464-G03-O1",
        "text": "特",
        "correct": false
      },
      {
        "id": "L464-G03-O2",
        "text": "待",
        "correct": true
      },
      {
        "id": "L464-G03-O3",
        "text": "時",
        "correct": false
      }
    ]
  },
  {
    "id": "L464-G04",
    "type": "partial-order",
    "sentenceId": "L464-S04",
    "targetChar": "午",
    "targetCharIndex": 1,
    "missingIndexes": [
      6,
      7,
      8,
      9
    ],
    "prompt": "照順序把字卡放回去。",
    "options": [
      {
        "id": "L464-G04-O1",
        "text": "餐",
        "correct": true,
        "correctOrder": 3
      },
      {
        "id": "L464-G04-O2",
        "text": "等",
        "correct": true,
        "correctOrder": 0
      },
      {
        "id": "L464-G04-O3",
        "text": "用",
        "correct": true,
        "correctOrder": 2
      },
      {
        "id": "L464-G04-O4",
        "text": "待",
        "correct": true,
        "correctOrder": 1
      }
    ]
  },
  {
    "id": "L464-G05",
    "type": "choose-pronunciation",
    "sentenceId": "L464-S05",
    "targetChar": "文",
    "targetCharIndex": 6,
    "prompt": "先聽每位朋友念，再選出念對的朋友。",
    "options": [
      {
        "id": "L464-G05-O1",
        "text": "日本朋友用中文寫信給我。",
        "spokenText": "日本朋友用中文寫信給我",
        "correct": true,
        "audioSrc": "/assets/lessons/L464/audio/L464-S05.m4a"
      },
      {
        "id": "L464-G05-O2",
        "text": "日本朋友用日文寫信給我。",
        "spokenText": "日本朋友用日文寫信給我",
        "correct": false,
        "audioSrc": "/assets/lessons/L464/audio/L464-G05-wrong-one.m4a"
      },
      {
        "id": "L464-G05-O3",
        "text": "日本朋友用中文寫信給他。",
        "spokenText": "日本朋友用中文寫信給他",
        "correct": false,
        "audioSrc": "/assets/lessons/L464/audio/L464-G05-wrong-two.m4a"
      }
    ]
  }
]
```

Coverage 待4/3、期3/2、日4/2、文2/2、午1/1、中2/1 PASS. Han counts 10,9,11,10,11.

## Pushed package checkpoint

Asset commit 3f783f39c800dfca5698724f4fa28939f6d44e6d pushed to origin/codex/l464-complete-package. Remote package-intake PASS. Browser QA evidence heading normalized for intake detection. Full baseline validate:production PASS; lesson-local strict asset audit PASS with zero warnings.

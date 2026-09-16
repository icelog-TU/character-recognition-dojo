# L400 Generation Packet

packageStatus: dependency-blocked-asset-complete

Production C; branch codex/l400-complete-package. Origin/main boundary 23cae19103e760f23700f5ff90d72fbd2e59bfc6; formal L001-L390.

One normal lesson, title 者; newChars ["者"]; zhuyin 者 ㄓㄜˇ.
dependsOnLessons: L395, L396, L397, L398, L399.
provisionalLearnedChars: 印、單、雙、選、或.
Release playable blockers: R047/R048 after390 and L391-L399. Production may proceed.

Teacher-approved image-only exception: S04 author name Lily. No other readable text; never add Lily to learner text/audio. S01 exactly two singles players and four doubles players, with father and girl outside courts. S03 extinguished safe scene, three distinct professional roles. S05 one hat held in both hands at chest height.

## Approved Sentences

```json
[
  {
    "id": "L400-S01",
    "text": "打球可以選單打或者雙打。",
    "spokenText": "打球可以選單打或者雙打",
    "displayLines": [
      "打球可以選",
      "單打或者",
      "雙打。"
    ],
    "focusChar": "者",
    "imageNotes": "羽球館內，兩座相鄰球場呈現不同打法：左邊單打，球網兩側各一人；右邊雙打，兩側各兩人。主角小女孩與爸爸站在場外，爸爸指向球場介紹兩種選擇。場上使用 generic 球友，站位與球網分界清楚，不加文字標籤。場外爸爸與女孩不計入球場上的參賽人數。",
    "approved": true
  },
  {
    "id": "L400-S02",
    "text": "選畫花或者畫樹，都可以。",
    "spokenText": "選畫花或者畫樹都可以",
    "displayLines": [
      "選畫花",
      "或者畫樹，",
      "都可以。"
    ],
    "focusChar": "或",
    "imageNotes": "教室美術桌旁，老師向主角小女孩展示兩張簡單範例：一張畫花，一張畫樹。女孩面前放著空白畫紙與畫筆，正在考慮畫哪一種。老師手掌朝向兩張範例，表示都可以選；不要畫成要求女孩兩種都畫。",
    "approved": true
  },
  {
    "id": "L400-S03",
    "text": "記者正在問起火的原因。",
    "spokenText": "記者正在問起火的原因",
    "displayLines": [
      "記者正在問",
      "起火的原因。"
    ],
    "focusChar": "者",
    "imageNotes": "已撲滅的小型火警現場外，一位 generic 記者拿著無標誌麥克風，向消防員詢問；另一位攝影工作人員在旁拍攝。背景店面門框有少量煙燻痕跡，現場已安全、無明火或濃煙，不出現傷者。消防員正在回答，不用思考泡泡擅自指出起火原因。三位工作角色須能清楚區分。",
    "approved": true
  },
  {
    "id": "L400-S04",
    "text": "這本書上印著作者的名字。",
    "spokenText": "這本書上印著作者的名字",
    "displayLines": [
      "這本書上印著",
      "作者的名字。"
    ],
    "focusChar": "者",
    "imageNotes": "家中書桌旁，主角媽媽與女孩一起看一本圖畫書。女孩指著書封上較小的一行作者名字，媽媽順著查看。封面以花園插圖為主，作者名字與插圖分開。作者名字使用虛構英文名「Lily」，不放其他可讀文字。女孩指的位置必須確實是這行名字。本課經老師審核後交付的文字入圖例外：只允許作者名「Lily」。",
    "approved": true
  },
  {
    "id": "L400-S05",
    "text": "雙手拿好帽子，別讓風吹走。",
    "spokenText": "雙手拿好帽子別讓風吹走",
    "displayLines": [
      "雙手",
      "拿好帽子，",
      "別讓風吹走。"
    ],
    "focusChar": "雙",
    "imageNotes": "海邊步道上，主角媽媽提醒女孩留意風。女孩已把帽子拿下，用雙手牢牢握住同一頂帽子的帽沿，拿在胸前。頭髮、衣角與旁邊草葉朝同一方向被風吹動。帽子仍在手中，不畫飛走的第二頂帽子；只呈現一般有風的天氣。",
    "approved": true
  }
]
```

## Stage 4

```json
[
  {
    "id": "L400-G01",
    "type": "find-character",
    "sentenceId": "L400-S01",
    "targetChar": "者",
    "targetCharIndex": 8
  },
  {
    "id": "L400-G02",
    "type": "teach-character",
    "sentenceId": "L400-S04",
    "targetChar": "者",
    "targetCharIndex": 7,
    "teachAudio": {
      "prefixText": "這本書上印著作",
      "suffixText": "的名字",
      "prefixSrc": "/assets/lessons/L400/audio/L400-G02-prefix.m4a",
      "suffixSrc": "/assets/lessons/L400/audio/L400-G02-suffix.m4a"
    }
  },
  {
    "id": "L400-G03",
    "type": "missing-character",
    "sentenceId": "L400-S03",
    "targetChar": "者",
    "targetCharIndex": 1,
    "missingIndexes": [
      1
    ],
    "options": [
      {
        "id": "correct",
        "text": "者",
        "correct": true
      },
      {
        "id": "wrong-one",
        "text": "得",
        "correct": false
      },
      {
        "id": "wrong-two",
        "text": "住",
        "correct": false
      }
    ]
  },
  {
    "id": "L400-G04",
    "type": "partial-order",
    "sentenceId": "L400-S02",
    "targetChar": "或",
    "targetCharIndex": 3,
    "missingIndexes": [
      3,
      4,
      5,
      6
    ],
    "options": [
      {
        "id": "card-shu",
        "text": "樹",
        "correct": true,
        "correctOrder": 3
      },
      {
        "id": "card-huo",
        "text": "或",
        "correct": true,
        "correctOrder": 0
      },
      {
        "id": "card-hua",
        "text": "畫",
        "correct": true,
        "correctOrder": 2
      },
      {
        "id": "card-zhe",
        "text": "者",
        "correct": true,
        "correctOrder": 1
      }
    ]
  },
  {
    "id": "L400-G05",
    "type": "choose-pronunciation",
    "sentenceId": "L400-S05",
    "targetChar": "雙",
    "targetCharIndex": 0,
    "options": [
      {
        "id": "correct",
        "text": "雙手拿好帽子，別讓風吹走。",
        "audioSrc": "/assets/lessons/L400/audio/L400-S05.m4a",
        "correct": true
      },
      {
        "id": "wrong-one",
        "text": "雙手拿好帽子，別讓風吹掉。",
        "audioSrc": "/assets/lessons/L400/audio/L400-G05-wrong-one.m4a",
        "correct": false
      },
      {
        "id": "wrong-two",
        "text": "雙手拿好盒子，別讓風吹走。",
        "audioSrc": "/assets/lessons/L400/audio/L400-G05-wrong-two.m4a",
        "correct": false
      }
    ]
  }
]
```

## Production Rules

Full L058 five-image style anchor set; refined L115-S01/S02, L118-S02, L119-S01, L128-S03; family L154-S01, L162-S04, L163-S02. No identity copying from style-only roles. Final WebP side-by-side review required.

OpenAI whole-input TTS; standalone 者 ㄓㄜˇ; sentence exact spokenText; G02 prefix 這本書上印著作 (final 作 ㄗㄨㄛˋ, no 者) and suffix 的名字. Full wrong-option text input. Repo audio processing and AI alignment. No splicing.

Coverage: 者4, 或2, 選2, 雙2, 單1, 印1. Locked 400 allowed characters from formal baseline plus provisional and target. Display lines and indexes mechanically checked. G03 exactly three distinct single-Han choices; G04 four single-Han cards. Each sentence used once.

## Final Production QA

All five final WebP images: style-lock PASS, cast PASS, individually compared to required references. S05 wind-direction draft replaced, not shipped. S04 teacher-authorized image-only Lily exception preserved.

Ten processed M4A files, AI char timings for all sentence and Stage 4 fragments/options, technical format/loudness/decode audit PASS with zero warnings. Folder size 1328092 bytes. See L400-production-qa.md for per-image evidence, audio voices, regeneration history, model transcript ambiguity, and timing boundary adjustments.

Browser QA at 390x844: Stage 1 playback; all five Stage 3 sentences completed; G02 stopped on target; G03 three choices and correct response; G04 single-Han ordering; G05 all three options played. Physical microphone recording/replay was not exercised. Teacher subjective image/audio review is post-main.

Release owns ordered integration and full verify; shared production JSON/planner/ledger remain unchanged. L395-L399 learner dependencies and earlier playable sequence remain unmerged.

# L402「強」Production package

Status: dependency-blocked-asset-complete.

## Boundary and approved constraints
Teacher-approved exact L402 Production F handoff after Production E L401; Production D skipped by teacher. Main L001-L390 latest 數. All 強 readings are ㄑㄧㄤˊ for monster strength, strong wind and chess ability. S01 exact 但勇者沒有跑走. S02 exact 可以選玩勇者或者怪物; TV selection with protagonist older brother, no real-room story characters. S03 child safely on ground closing low sliding window with both hands, mother supervising. S05 actual five consecutive same-color stones on grid intersections, no gaps/mixed colors. No readable text/numerals exception in any image. Forbidden learner characters: 逃 傘 弱 壯 堅 勉. G04 index7 者 belongs to 或者; index5 者 in 勇者 is not blanked.
Source 23cae19103e760f23700f5ff90d72fbd2e59bfc6; dependencies L397, L398, L399, L400, L401; provisional 雙 選 或 者 勇; allowed count 400.

Coverage: 強3 / 勇2 / 者4 / 或2 / 選1 / 雙1. No extra provisional dependency; previous-six or earlier are not coverage targets.

## Final approved sentence records
```json
[
  {
    "id": "L402-S01",
    "text": "怪物很強，但勇者沒有跑走。",
    "spokenText": "怪物很強但勇者沒有跑走",
    "displayLines": [
      "怪物很強，",
      "但勇者",
      "沒有跑走。"
    ],
    "focusChar": "強",
    "imageNotes": "童話場景中，體型巨大、肌肉結實的怪物站在勇者前方。勇者明顯較小，但仍站穩、面向怪物，雙腳沒有轉向逃跑，手持盾牌準備應對。用體型與姿態呈現力量差距，不畫血腥、傷口或正在擊打的瞬間。兩者都是故事角色，不套用固定主角群。"
  },
  {
    "id": "L402-S02",
    "text": "可以選玩勇者或者怪物。",
    "spokenText": "可以選玩勇者或者怪物",
    "displayLines": [
      "可以選玩勇者",
      "或者怪物。"
    ],
    "focusChar": "勇",
    "imageNotes": "家中客廳，主角小女孩坐在電視前，雙手拿遊戲控制器；主角哥哥坐在旁邊，指向螢幕介紹選項。電視上並排顯示兩個清楚的可選角色：披風盾牌勇者、可愛的大怪物。女孩正在選擇，遊戲尚未開始。螢幕不放可讀文字、品牌或數字，角色只存在螢幕內，不出現在真實客廳。本句是電視遊戲選角色，不是教室扮裝或圖書館選書。"
  },
  {
    "id": "L402-S03",
    "text": "風太強，我用雙手關窗。",
    "spokenText": "風太強我用雙手關窗",
    "displayLines": [
      "風太強，",
      "我用雙手",
      "關窗。"
    ],
    "focusChar": "強",
    "imageNotes": "家中，主角小女孩站在穩固地面，用雙手握住低處橫拉窗的窗框，正在把窗戶拉上。主角媽媽在旁看顧。窗簾被風吹向室內，窗外樹枝朝一致方向傾斜，交代關窗原因。女孩不爬椅子、不探身窗外，手指不放在窗縫中。雙手關窗的動作必須清楚。"
  },
  {
    "id": "L402-S04",
    "text": "想吃魚或者雞，媽媽都會做。",
    "spokenText": "想吃魚或者雞媽媽都會做",
    "displayLines": [
      "想吃魚",
      "或者雞，",
      "媽媽都會做。"
    ],
    "focusChar": "或",
    "imageNotes": "廚房餐桌旁，主角媽媽向女孩展示兩張料理照片：一張是煮好的魚料理，一張是雞肉料理。媽媽微笑、手掌朝向兩張照片，讓女孩選想吃的那道；女孩正在考慮。背景有日常鍋具，尚未開始做這一餐，不把兩道成品都擺上桌。照片不含菜名或文字。"
  },
  {
    "id": "L402-S05",
    "text": "媽媽下棋很強，我比不上。",
    "spokenText": "媽媽下棋很強我比不上",
    "displayLines": [
      "媽媽下棋",
      "很強，",
      "我比不上。"
    ],
    "focusChar": "強",
    "imageNotes": "家中桌旁，主角媽媽與女孩下五子棋。媽媽剛落下一子，棋盤上清楚形成一條同色棋子連續五子的直線；女孩看著棋盤，露出佩服、略帶無奈的表情，媽媽溫和微笑，不炫耀。以能看清棋局的斜上方角度呈現，不用獎盃、分數或勝負文字。棋子落在交叉點，五子之間不能有空位或混色。"
  }
]
```

## Stage 4 index self-check
L402-G01: 怪[0] 物[1] 很[2] 強[3] 但[4] 勇[5] 者[6] 沒[7] 有[8] 跑[9] 走[10]; target 強[3]; PASS.
L402-G02: 風[0] 太[1] 強[2] 我[3] 用[4] 雙[5] 手[6] 關[7] 窗[8]; target 強[2]; PASS.
L402-G03: 媽[0] 媽[1] 下[2] 棋[3] 很[4] 強[5] 我[6] 比[7] 不[8] 上[9]; target 強[5]; PASS.
L402-G04: 可[0] 以[1] 選[2] 玩[3] 勇[4] 者[5] 或[6] 者[7] 怪[8] 物[9]; target 勇[4]; PASS.
L402-G05: 想[0] 吃[1] 魚[2] 或[3] 者[4] 雞[5] 媽[6] 媽[7] 都[8] 會[9] 做[10]; target 或[3]; PASS.
G04 single-Han cards / correctOrder mapping PASS. Each sentence used once.

## Final Stage 4 plan
```json
[
  {
    "id": "L402-G01",
    "type": "find-character",
    "sentenceId": "L402-S01",
    "targetChar": "強",
    "targetCharIndex": 3,
    "prompt": "請幫小兔子找出句子裡的強。"
  },
  {
    "id": "L402-G02",
    "type": "teach-character",
    "sentenceId": "L402-S03",
    "targetChar": "強",
    "targetCharIndex": 2,
    "prompt": "請你幫小兔子念紅框裡的字。",
    "teachAudio": {
      "prefixText": "風太",
      "suffixText": "我用雙手關窗",
      "prefixSrc": "/assets/lessons/L402/audio/L402-G02-prefix.m4a",
      "suffixSrc": "/assets/lessons/L402/audio/L402-G02-suffix.m4a",
      "prefixAudio": {
        "src": "/assets/lessons/L402/audio/L402-G02-prefix.m4a",
        "durationMs": 998,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 480
          },
          {
            "charIndex": 1,
            "startMs": 480,
            "endMs": 760
          }
        ]
      },
      "suffixAudio": {
        "src": "/assets/lessons/L402/audio/L402-G02-suffix.m4a",
        "durationMs": 2474,
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
            "endMs": 1240
          },
          {
            "charIndex": 3,
            "startMs": 1240,
            "endMs": 1540
          },
          {
            "charIndex": 4,
            "startMs": 1540,
            "endMs": 1980
          },
          {
            "charIndex": 5,
            "startMs": 1980,
            "endMs": 2160
          }
        ]
      }
    }
  },
  {
    "id": "L402-G03",
    "type": "missing-character",
    "sentenceId": "L402-S05",
    "targetChar": "強",
    "targetCharIndex": 5,
    "missingIndexes": [
      5
    ],
    "prompt": "請幫小兔子找回少掉的字。",
    "options": [
      {
        "id": "correct",
        "text": "強",
        "correct": true
      },
      {
        "id": "wrong-one",
        "text": "大",
        "correct": false
      },
      {
        "id": "wrong-two",
        "text": "小",
        "correct": false
      }
    ]
  },
  {
    "id": "L402-G04",
    "type": "partial-order",
    "sentenceId": "L402-S02",
    "targetChar": "勇",
    "targetCharIndex": 4,
    "missingIndexes": [
      6,
      7,
      8,
      9
    ],
    "prompt": "請幫小兔子把字放回去。",
    "options": [
      {
        "id": "card-wu",
        "text": "物",
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
        "id": "card-guai",
        "text": "怪",
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
    "id": "L402-G05",
    "type": "choose-pronunciation",
    "sentenceId": "L402-S04",
    "targetChar": "或",
    "targetCharIndex": 3,
    "prompt": "請先聽朋友念，再找出念對的朋友。",
    "options": [
      {
        "id": "correct",
        "text": "想吃魚或者雞，媽媽都會做。",
        "audioSrc": "/assets/lessons/L402/audio/L402-S04.m4a",
        "correct": true
      },
      {
        "id": "wrong-one",
        "text": "想吃魚或者菜，媽媽都會做。",
        "audioSrc": "/assets/lessons/L402/audio/L402-G05-wrong-one.m4a",
        "correct": false
      },
      {
        "id": "wrong-two",
        "text": "想吃魚或者雞，爸爸都會做。",
        "audioSrc": "/assets/lessons/L402/audio/L402-G05-wrong-two.m4a",
        "correct": false
      }
    ]
  }
]
```

## Image prompts
### L402-S01
Use case: illustration-story. Square 1:1 warm detailed Taiwan picture-book illustration with safe margins. Strict L058 style only: rich pencil-and-watercolor linework, warm natural light, bright warm palette, detailed clean environments, soft naturally shaded faces. Refined preferred proportions from L115-S01/S02, L118-S02, L119-S01, L128-S03. Do not copy people from L058. Family identity from L154-S01, L162-S04, L163-S02: recurring preschool girl dark bob, pink clip, pink cardigan, cream shirt, navy skirt; mother shoulder-length brown hair, cream home blouse; older brother as the older school-age boy in family anchor, not preschool 你 or father. No anime, flat cartoon, 3D, photo, generic round toddler faces, redesigned cast, text, numerals, logos or watermark. S01 story hero and monster are fictional, not family members. Scene: 童話場景中，體型巨大、肌肉結實的怪物站在勇者前方。勇者明顯較小，但仍站穩、面向怪物，雙腳沒有轉向逃跑，手持盾牌準備應對。用體型與姿態呈現力量差距，不畫血腥、傷口或正在擊打的瞬間。兩者都是故事角色，不套用固定主角群。

### L402-S02
Use case: illustration-story. Square 1:1 warm detailed Taiwan picture-book illustration with safe margins. Strict L058 style only: rich pencil-and-watercolor linework, warm natural light, bright warm palette, detailed clean environments, soft naturally shaded faces. Refined preferred proportions from L115-S01/S02, L118-S02, L119-S01, L128-S03. Do not copy people from L058. Family identity from L154-S01, L162-S04, L163-S02: recurring preschool girl dark bob, pink clip, pink cardigan, cream shirt, navy skirt; mother shoulder-length brown hair, cream home blouse; older brother as the older school-age boy in family anchor, not preschool 你 or father. No anime, flat cartoon, 3D, photo, generic round toddler faces, redesigned cast, text, numerals, logos or watermark. S01 story hero and monster are fictional, not family members. Scene: 家中客廳，主角小女孩坐在電視前，雙手拿遊戲控制器；主角哥哥坐在旁邊，指向螢幕介紹選項。電視上並排顯示兩個清楚的可選角色：披風盾牌勇者、可愛的大怪物。女孩正在選擇，遊戲尚未開始。螢幕不放可讀文字、品牌或數字，角色只存在螢幕內，不出現在真實客廳。本句是電視遊戲選角色，不是教室扮裝或圖書館選書。

### L402-S03
Use case: illustration-story. Square 1:1 warm detailed Taiwan picture-book illustration with safe margins. Strict L058 style only: rich pencil-and-watercolor linework, warm natural light, bright warm palette, detailed clean environments, soft naturally shaded faces. Refined preferred proportions from L115-S01/S02, L118-S02, L119-S01, L128-S03. Do not copy people from L058. Family identity from L154-S01, L162-S04, L163-S02: recurring preschool girl dark bob, pink clip, pink cardigan, cream shirt, navy skirt; mother shoulder-length brown hair, cream home blouse; older brother as the older school-age boy in family anchor, not preschool 你 or father. No anime, flat cartoon, 3D, photo, generic round toddler faces, redesigned cast, text, numerals, logos or watermark. S01 story hero and monster are fictional, not family members. Scene: 家中，主角小女孩站在穩固地面，用雙手握住低處橫拉窗的窗框，正在把窗戶拉上。主角媽媽在旁看顧。窗簾被風吹向室內，窗外樹枝朝一致方向傾斜，交代關窗原因。女孩不爬椅子、不探身窗外，手指不放在窗縫中。雙手關窗的動作必須清楚。

### L402-S04
Use case: illustration-story. Square 1:1 warm detailed Taiwan picture-book illustration with safe margins. Strict L058 style only: rich pencil-and-watercolor linework, warm natural light, bright warm palette, detailed clean environments, soft naturally shaded faces. Refined preferred proportions from L115-S01/S02, L118-S02, L119-S01, L128-S03. Do not copy people from L058. Family identity from L154-S01, L162-S04, L163-S02: recurring preschool girl dark bob, pink clip, pink cardigan, cream shirt, navy skirt; mother shoulder-length brown hair, cream home blouse; older brother as the older school-age boy in family anchor, not preschool 你 or father. No anime, flat cartoon, 3D, photo, generic round toddler faces, redesigned cast, text, numerals, logos or watermark. S01 story hero and monster are fictional, not family members. Scene: 廚房餐桌旁，主角媽媽向女孩展示兩張料理照片：一張是煮好的魚料理，一張是雞肉料理。媽媽微笑、手掌朝向兩張照片，讓女孩選想吃的那道；女孩正在考慮。背景有日常鍋具，尚未開始做這一餐，不把兩道成品都擺上桌。照片不含菜名或文字。

### L402-S05
Use case: illustration-story. Square 1:1 warm detailed Taiwan picture-book illustration with safe margins. Strict L058 style only: rich pencil-and-watercolor linework, warm natural light, bright warm palette, detailed clean environments, soft naturally shaded faces. Refined preferred proportions from L115-S01/S02, L118-S02, L119-S01, L128-S03. Do not copy people from L058. Family identity from L154-S01, L162-S04, L163-S02: recurring preschool girl dark bob, pink clip, pink cardigan, cream shirt, navy skirt; mother shoulder-length brown hair, cream home blouse; older brother as the older school-age boy in family anchor, not preschool 你 or father. No anime, flat cartoon, 3D, photo, generic round toddler faces, redesigned cast, text, numerals, logos or watermark. S01 story hero and monster are fictional, not family members. Scene: 家中桌旁，主角媽媽與女孩下五子棋。媽媽剛落下一子，棋盤上清楚形成一條同色棋子連續五子的直線；女孩看著棋盤，露出佩服、略帶無奈的表情，媽媽溫和微笑，不炫耀。以能看清棋局的斜上方角度呈現，不用獎盃、分數或勝負文字。棋子落在交叉點，五子之間不能有空位或混色。


## Final QA and method
Repo ai:audio, assets:audio, assets:align:ai. Complete exact-text sentences/character/fragments/options generated independently; no syllable extraction or splicing. Measured trailing silence capped with 120ms decay allowance; five AI timing onsets refined using final-audio pause boundaries. Temporary shared JSON/scripts restored.

L402-S01 style-lock PASS, cast PASS; Large muscular monster faces smaller planted shield-bearing hero; no running or impact; fictional story cast.
L402-S02 style-lock PASS, cast PASS; Recurring striped-shirt older brother points at TV two-avatar selection screen, girl holds controller with both hands; avatars inside screen only.
L402-S03 style-lock PASS, cast PASS; Girl on stable floor, both hands on low sliding-window frame/handle, mother supervising; wind shown by curtain and trees.
L402-S04 style-lock PASS, cast PASS; Exactly two food photos (fish and chicken), mother offers choice; no actual finished dishes on table.
L402-S05 style-lock PASS, cast PASS; Five black stones on adjacent grid intersections in one straight line; four white stones elsewhere, no gaps/mixed-color line; mother just placed, girl admires.

S02 initial image omitted brother pointing; corrected with imagegen before export. Rejected drafts were not committed.

PASS: older brother identity and TV selection; no readable text.
PASS: two-handed sliding-window operation from floor, mother beside girl.
PASS: five consecutive same-color stones on intersections, no gap or mixed color.
None: no readable text or numerals allowed in images.

Whisper returns 風態 for 風太: two identical Taiwan Mandarin syllables ㄈㄥ ㄊㄞˋ. Raw transcript preserved; only timing association treats the same-sound 態 as approved 太. No source text changed.
Standalone 強 regenerated after ambiguous unprompted recognition. Final contextual Whisper reads 強. Unprompted short-clip ASR gave non-Chinese output and generic Mandarin context returned 羌; these are retained as limitations, not conclusive pronunciation evidence. Autocorrelation voiced contour includes a rise from about 144Hz to 190Hz, supporting the requested rising tone but not replacing human listening. Teacher subjective listening remains post-merge.

Browser QA:
```json
{
  "cleanup": "Viewport reset; own QA tab closed",
  "fallback": "Browser automation stalled at recording cue; microphone permission unchanged. Technical checks and audio playback used as documented fallback",
  "viewport": {
    "contentWidth": 375,
    "width": 390,
    "height": 844
  },
  "media": "All ten final M4A files reached ENDED; G02 suffix played through standalone local playback fixture",
  "sentences": "S01-S05 images, display lines, highlights and playback inspected at phone width",
  "games": {
    "G01": "PASS correct 強 selected",
    "G03": "PASS correct 強 selected",
    "G05": "PASS all three full sentence audio options ENDED; correct option selected",
    "G04": "PASS 或者怪物 in order; 勇者 retained",
    "G02": "Prefix ENDED; target visible. Two recording cue blob PLAY events, no completion; recording and recorded replay not verified"
  },
  "listening": "No human auditory or recorded microphone QA claimed; teacher subjective listening remains post-merge",
  "status": "playback-verified-recording-tooling-fallback",
  "fixture": "Actual LessonPanel with lesson-local draft; no production JSON changes"
}
```

Technical checks:
- PASS: Ten final M4A files decode; AAC mono 44100Hz; volume gates and SHA256 verified; sentence/option transcripts exact; G02 prefix homophone evidence documented.
- PASS: Standalone 強 generated directly from one character, duration/audibility gates and contextual Whisper transcript.
- PASS: Final approved text/lines/coverage/allowed-character sweep, Han counts 11/10/9/11/10, each line <=6; timings indexed, bounded, nonoverlapping, 80-900ms spans, tails <=300ms.
- PASS: Canonical Stage 4; G03 three distinct single-Han choices; G04 blanks index7 者 in 或者; G02 generated fragments and timing metadata; G05 full-sentence audio mean spread 0.7dB.
- PASS: Final square 1024px WebP images all <=250KB; total 1294552 bytes <=2MB target.

No missing lesson-local assets. Release owns preceding L391-L401 and R047/R048, production JSON/planner/ledger integration and final verify.
verify skipped: dependency-blocked, shared state left for Release.

Validation: npm run validate:production PASS on baseline; same production asset validator PASS on an isolated temporary L402 draft fixture, restored immediately. Lesson-local technical audit PASS.

Asset format validation: npm run assets:audit -- --strict PASS on an isolated L402 draft fixture; production JSON restored byte-for-byte.

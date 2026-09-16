# L406「加」Production package

Status: dependency-blocked-asset-complete.

## Boundary and approved constraints
Teacher-approved Production F L406 handoff. Main L001-L404 latest 弱, 408 learned characters. Original handoff provisional 者/勇/強/算/弱 are now merged; 者 remains recorded as the extra dependency outside coverage. Release order L405 → R049 → R050 → L406. 加 always ㄐㄧㄚ. S02 exception only: price 50; exactly three teaching coins 20,20,10; no total/answer. S01 only father handles fire tongs; girl/mother watch at safe distance. S05 only mother handles kettle/hot water. S03 same slim hero and same-size stone in past/present, lift now to waist; keep recent story design. S04 two visiting generic adults; mother adds separate vegetable dish to table. G05 target first 算 index5, not second index7; G02 suffix exactly 一道菜. 者 is the handoff extra dependency L400 outside coverage window, now merged in source main. 油/參 are not allowed; no 加油/參加.
Source d0cfbc9ac8f90ddb4db32b917e9d7723ec59cb59; dependencies L400, L401, L402, L403, L404, L405; provisional 越; allowed count 410.

Coverage: 加4 / 越2 / 弱2 / 算2 / 強1 / 勇1. Extra handoff dependency 者 is now merged and is not a coverage target.

## Final approved sentence records
```json
[
  {
    "id": "L406-S01",
    "text": "火越來越弱，再加些木頭。",
    "spokenText": "火越來越弱再加些木頭",
    "displayLines": [
      "火越來越弱，",
      "再加些木頭。"
    ],
    "focusChar": "加",
    "imageNotes": "露營區固定火爐裡只剩小火苗與紅色餘燼。主角爸爸用長柄火鉗，正把一小塊乾木頭放進爐內；旁邊整齊放著待用木柴。主角小女孩與媽媽在安全距離觀看，不幫忙添柴。呈現火勢減弱後補充木頭，不畫失控火焰或濃煙。"
  },
  {
    "id": "L406-S02",
    "text": "把錢加起來，算一算夠不夠？",
    "spokenText": "把錢加起來算一算夠不夠",
    "displayLines": [
      "把錢加起來，",
      "算一算",
      "夠不夠？"
    ],
    "focusChar": "算",
    "imageNotes": "玩具店櫃台前，主角小女孩想買一顆球，把帶來的零錢攤在桌上，媽媽指著零錢陪她計算。球的價牌標「50」，桌上恰好三枚簡化教學硬幣，分別標「20」「20」「10」。女孩正在計算，不另外寫出零錢總和或「夠了」的答案。老師已批准數字入圖例外；商品價牌「50」是價格，不是計算答案。"
  },
  {
    "id": "L406-S03",
    "text": "弱小的勇者，也能變強。",
    "spokenText": "弱小的勇者也能變強",
    "displayLines": [
      "弱小的勇者，",
      "也能變強。"
    ],
    "focusChar": "弱",
    "imageNotes": "童話村莊旁的練習場，身形瘦小的勇者正在練習舉起一塊石頭，表情努力而有精神。一個小型回想泡泡呈現同一位勇者稍早還搬不動同樣大小的石頭，現在已能舉到腰前，表現透過練習逐漸變強。沿用近期勇者造型，不突然變成另一個高大人物；前後石頭大小一致。"
  },
  {
    "id": "L406-S04",
    "text": "今天有客人，媽媽多加一道菜。",
    "spokenText": "今天有客人媽媽多加一道菜",
    "displayLines": [
      "今天有客人，",
      "媽媽多加",
      "一道菜。"
    ],
    "focusChar": "加",
    "imageNotes": "家中餐桌已擺好幾道菜，主角媽媽正端來另外一盤剛做好的青菜，放到桌上空出的地方。主角小女孩與爸爸在旁準備碗筷；背景有兩位來訪的 generic 成人親友，交代今天有客人。不是只有主角一家吃飯，也不是把菜加進女孩碗裡。"
  },
  {
    "id": "L406-S05",
    "text": "水太熱，加一點冷水吧。",
    "spokenText": "水太熱加一點冷水吧",
    "displayLines": [
      "水太熱，",
      "加一點",
      "冷水吧。"
    ],
    "focusChar": "加",
    "imageNotes": "家中桌旁，主角媽媽把少量冷的飲用水倒進一杯冒著淡淡熱氣的水裡，主角小女孩坐在旁邊等待。水杯放穩在桌上，媽媽掌握水壺，女孩不碰熱水容器。只呈現溫和熱氣，不用紅色水、冰塊或文字表示溫度。"
  }
]
```

## Stage 4 index self-check
L406-G01: 火[0] 越[1] 來[2] 越[3] 弱[4] 再[5] 加[6] 些[7] 木[8] 頭[9]; target 加[6]; PASS.
L406-G02: 今[0] 天[1] 有[2] 客[3] 人[4] 媽[5] 媽[6] 多[7] 加[8] 一[9] 道[10] 菜[11]; target 加[8]; PASS.
L406-G03: 水[0] 太[1] 熱[2] 加[3] 一[4] 點[5] 冷[6] 水[7] 吧[8]; target 加[3]; PASS.
L406-G04: 弱[0] 小[1] 的[2] 勇[3] 者[4] 也[5] 能[6] 變[7] 強[8]; target 弱[0]; PASS.
L406-G05: 把[0] 錢[1] 加[2] 起[3] 來[4] 算[5] 一[6] 算[7] 夠[8] 不[9] 夠[10]; target 算[5]; PASS.
G04 single-Han card mappings PASS; each sentence used once.

## Final Stage 4 plan
```json
[
  {
    "id": "L406-G01",
    "type": "find-character",
    "sentenceId": "L406-S01",
    "targetChar": "加",
    "targetCharIndex": 6,
    "prompt": "請幫小兔子找出句子裡的加。"
  },
  {
    "id": "L406-G02",
    "type": "teach-character",
    "sentenceId": "L406-S04",
    "targetChar": "加",
    "targetCharIndex": 8,
    "prompt": "請你幫小兔子念紅框裡的字。",
    "teachAudio": {
      "prefixText": "今天有客人媽媽多",
      "suffixText": "一道菜",
      "prefixSrc": "/assets/lessons/L406/audio/L406-G02-prefix.m4a",
      "suffixSrc": "/assets/lessons/L406/audio/L406-G02-suffix.m4a",
      "prefixAudio": {
        "src": "/assets/lessons/L406/audio/L406-G02-prefix.m4a",
        "durationMs": 2624,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 280
          },
          {
            "charIndex": 1,
            "startMs": 280,
            "endMs": 560
          },
          {
            "charIndex": 2,
            "startMs": 560,
            "endMs": 1080
          },
          {
            "charIndex": 3,
            "startMs": 1080,
            "endMs": 1400
          },
          {
            "charIndex": 4,
            "startMs": 1400,
            "endMs": 1720
          },
          {
            "charIndex": 5,
            "startMs": 1720,
            "endMs": 1980
          },
          {
            "charIndex": 6,
            "startMs": 1980,
            "endMs": 2120
          },
          {
            "charIndex": 7,
            "startMs": 2120,
            "endMs": 2420
          }
        ]
      },
      "suffixAudio": {
        "src": "/assets/lessons/L406/audio/L406-G02-suffix.m4a",
        "durationMs": 1555,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 440
          },
          {
            "charIndex": 1,
            "startMs": 440,
            "endMs": 840
          },
          {
            "charIndex": 2,
            "startMs": 840,
            "endMs": 1430
          }
        ]
      }
    }
  },
  {
    "id": "L406-G03",
    "type": "missing-character",
    "sentenceId": "L406-S05",
    "targetChar": "加",
    "targetCharIndex": 3,
    "missingIndexes": [
      3
    ],
    "prompt": "請幫小兔子找回少掉的字。",
    "options": [
      {
        "id": "correct",
        "text": "加",
        "correct": true
      },
      {
        "id": "wrong-one",
        "text": "拿",
        "correct": false
      },
      {
        "id": "wrong-two",
        "text": "喝",
        "correct": false
      }
    ]
  },
  {
    "id": "L406-G04",
    "type": "partial-order",
    "sentenceId": "L406-S03",
    "targetChar": "弱",
    "targetCharIndex": 0,
    "missingIndexes": [
      5,
      6,
      7,
      8
    ],
    "prompt": "請幫小兔子把字放回去。",
    "options": [
      {
        "id": "card-qiang",
        "text": "強",
        "correct": true,
        "correctOrder": 3
      },
      {
        "id": "card-ye",
        "text": "也",
        "correct": true,
        "correctOrder": 0
      },
      {
        "id": "card-bian",
        "text": "變",
        "correct": true,
        "correctOrder": 2
      },
      {
        "id": "card-neng",
        "text": "能",
        "correct": true,
        "correctOrder": 1
      }
    ]
  },
  {
    "id": "L406-G05",
    "type": "choose-pronunciation",
    "sentenceId": "L406-S02",
    "targetChar": "算",
    "targetCharIndex": 5,
    "prompt": "請聽一聽，誰念對了？",
    "options": [
      {
        "id": "correct",
        "text": "把錢加起來，算一算夠不夠？",
        "audioSrc": "/assets/lessons/L406/audio/L406-S02.m4a",
        "correct": true
      },
      {
        "id": "wrong-one",
        "text": "把錢加起來，算一算多不多？",
        "audioSrc": "/assets/lessons/L406/audio/L406-G05-wrong-one.m4a",
        "correct": false
      },
      {
        "id": "wrong-two",
        "text": "把錢收起來，算一算夠不夠？",
        "audioSrc": "/assets/lessons/L406/audio/L406-G05-wrong-two.m4a",
        "correct": false
      }
    ]
  }
]
```

## Image prompts
### L406-S01
Square image / 1:1 composition, warm detailed Taiwan picture-book pencil-and-watercolor illustration. Full L058 set for style only, refined L115-S01/S02 L118-S02 L119-S01 L128-S03 proportions. Rich clean linework, natural warm light, soft shaded faces, detailed environments. Family identities from L154-S01 L162-S04 L163-S02: preschool girl short dark bob pink clip pink cardigan navy skirt; mother shoulder-length brown hair cream home blouse; father short dark hair pale blue shirt. Do not copy L058 identities. No anime, flat cartoon, generic round toddlers, 3D or photo. Safe margins, all meaning-bearing action legible at phone size. No text/brand/watermarks; only S02 approved numerals 50 on price and exactly three coins 20,20,10. S03 story hero uses recent L402/L401 design, not family. Scene: 露營區固定火爐裡只剩小火苗與紅色餘燼。主角爸爸用長柄火鉗，正把一小塊乾木頭放進爐內；旁邊整齊放著待用木柴。主角小女孩與媽媽在安全距離觀看，不幫忙添柴。呈現火勢減弱後補充木頭，不畫失控火焰或濃煙。

### L406-S02
Square image / 1:1 composition, warm detailed Taiwan picture-book pencil-and-watercolor illustration. Full L058 set for style only, refined L115-S01/S02 L118-S02 L119-S01 L128-S03 proportions. Rich clean linework, natural warm light, soft shaded faces, detailed environments. Family identities from L154-S01 L162-S04 L163-S02: preschool girl short dark bob pink clip pink cardigan navy skirt; mother shoulder-length brown hair cream home blouse; father short dark hair pale blue shirt. Do not copy L058 identities. No anime, flat cartoon, generic round toddlers, 3D or photo. Safe margins, all meaning-bearing action legible at phone size. No text/brand/watermarks; only S02 approved numerals 50 on price and exactly three coins 20,20,10. S03 story hero uses recent L402/L401 design, not family. Scene: 玩具店櫃台前，主角小女孩想買一顆球，把帶來的零錢攤在桌上，媽媽指著零錢陪她計算。球的價牌標「50」，桌上恰好三枚簡化教學硬幣，分別標「20」「20」「10」。女孩正在計算，不另外寫出零錢總和或「夠了」的答案。老師已批准數字入圖例外；商品價牌「50」是價格，不是計算答案。

### L406-S03
Square image / 1:1 composition, warm detailed Taiwan picture-book pencil-and-watercolor illustration. Full L058 set for style only, refined L115-S01/S02 L118-S02 L119-S01 L128-S03 proportions. Rich clean linework, natural warm light, soft shaded faces, detailed environments. Family identities from L154-S01 L162-S04 L163-S02: preschool girl short dark bob pink clip pink cardigan navy skirt; mother shoulder-length brown hair cream home blouse; father short dark hair pale blue shirt. Do not copy L058 identities. No anime, flat cartoon, generic round toddlers, 3D or photo. Safe margins, all meaning-bearing action legible at phone size. No text/brand/watermarks; only S02 approved numerals 50 on price and exactly three coins 20,20,10. S03 story hero uses recent L402/L401 design, not family. Scene: 童話村莊旁的練習場，身形瘦小的勇者正在練習舉起一塊石頭，表情努力而有精神。一個小型回想泡泡呈現同一位勇者稍早還搬不動同樣大小的石頭，現在已能舉到腰前，表現透過練習逐漸變強。沿用近期勇者造型，不突然變成另一個高大人物；前後石頭大小一致。

### L406-S04
Square image / 1:1 composition, warm detailed Taiwan picture-book pencil-and-watercolor illustration. Full L058 set for style only, refined L115-S01/S02 L118-S02 L119-S01 L128-S03 proportions. Rich clean linework, natural warm light, soft shaded faces, detailed environments. Family identities from L154-S01 L162-S04 L163-S02: preschool girl short dark bob pink clip pink cardigan navy skirt; mother shoulder-length brown hair cream home blouse; father short dark hair pale blue shirt. Do not copy L058 identities. No anime, flat cartoon, generic round toddlers, 3D or photo. Safe margins, all meaning-bearing action legible at phone size. No text/brand/watermarks; only S02 approved numerals 50 on price and exactly three coins 20,20,10. S03 story hero uses recent L402/L401 design, not family. Scene: 家中餐桌已擺好幾道菜，主角媽媽正端來另外一盤剛做好的青菜，放到桌上空出的地方。主角小女孩與爸爸在旁準備碗筷；背景有兩位來訪的 generic 成人親友，交代今天有客人。不是只有主角一家吃飯，也不是把菜加進女孩碗裡。

### L406-S05
Square image / 1:1 composition, warm detailed Taiwan picture-book pencil-and-watercolor illustration. Full L058 set for style only, refined L115-S01/S02 L118-S02 L119-S01 L128-S03 proportions. Rich clean linework, natural warm light, soft shaded faces, detailed environments. Family identities from L154-S01 L162-S04 L163-S02: preschool girl short dark bob pink clip pink cardigan navy skirt; mother shoulder-length brown hair cream home blouse; father short dark hair pale blue shirt. Do not copy L058 identities. No anime, flat cartoon, generic round toddlers, 3D or photo. Safe margins, all meaning-bearing action legible at phone size. No text/brand/watermarks; only S02 approved numerals 50 on price and exactly three coins 20,20,10. S03 story hero uses recent L402/L401 design, not family. Scene: 家中桌旁，主角媽媽把少量冷的飲用水倒進一杯冒著淡淡熱氣的水裡，主角小女孩坐在旁邊等待。水杯放穩在桌上，媽媽掌握水壺，女孩不碰熱水容器。只呈現溫和熱氣，不用紅色水、冰塊或文字表示溫度。


## Final QA
Origin/main advanced from L398/402 learned to L403/407 learned during preparation; latest allowed410 includes merged 或. Original approved dependency list retained; only 越 remains provisional after final L404 boundary check. 者 extra coverage-window dependency now merged.
Initial standalone 加 recognition was 蝦; regenerated directly from single 加. Final gpt-4o-transcribe with generic Mandarin context but no target supplied recognized 加 before and after silence trimming. Whisper on subsecond audio hallucinated prompt text; retained raw evidence, not counted as exact transcription. No human listening claimed. Repo ai:audio/assets:audio/assets:align:ai; independent fragments/full options, no extraction/splicing. Only measured trailing silence trimmed with120ms decay allowance; AI timings refined using measured pauses. Shared files restored.

L406-S01 style-lock PASS, cast PASS; Father alone uses long fire tongs; mother and girl safely back; weak flame/embers.
L406-S02 style-lock PASS, cast PASS; Price tag 50 and exactly three separate teaching coins 20,20,10, upright legible, no sum answer.
L406-S03 style-lock PASS, cast PASS; Same slim hero in blue tunic/russet cape; same stone relative size in memory and present, now at waist.
L406-S04 style-lock PASS, cast PASS; Two distinct adult visitors; mother adds separate green vegetable plate to table, father/girl prepare bowls.
L406-S05 style-lock PASS, cast PASS; Mother pours small stream of clear cool water into stable cup with faint steam; girl waits without touching.

S01 initial draft too photorealistic/semi-realistic; regenerated with explicit reference sheet. Rejected drafts not committed.

Teacher image exception: S02 readable numerals: price 50 and exactly three teaching coins labeled 20,20,10; no sum answer or other readable text.

Browser QA:
```json
{
  "viewport": {
    "width": 390,
    "height": 844
  },
  "cleanup": "Viewport reset and own QA tab closed",
  "games": {
    "G04": "PASS 也能變強 restored in order",
    "G02": "Prefix ENDED; correct 加 red frame appeared after prefix. Click produced two cue blob PLAY events, no completed recording. Browser control did not complete press-and-hold recording; microphone permissions unchanged.",
    "G05": "PASS all three exact full-sentence audio options ENDED, correct option selected",
    "G01": "PASS correct 加 selected",
    "G03": "PASS 加 selected among 加/喝/拿"
  },
  "media": "All ten final M4A files reached ENDED; standalone 加 and G02 suffix 一道菜 independently played in local media fixture",
  "listening": "No human listening or microphone recording claimed; teacher subjective review remains post-merge",
  "sentences": "S01-S05 playback ENDED; functional lines and active highlight rendered; S02 50/20/20/10 legible at phone width",
  "status": "playback-verified-recording-tooling-fallback",
  "fixture": "Actual LessonPanel using latest source-main lookup plus lesson-local draft and weak/yue provisional; no production state writes",
  "fallback": "Recording/replay not verified through automation. Technical asset validation and dedicated fragment playback used per Production SOP browser fallback",
  "reward": "Reward button emitted REWARD callback. Fixture intentionally does not persist progress or integrate next lesson; post-reward cross-lesson navigation left to Release integrated verification"
}
```

- PASS: All ten final audio files decode, AAC mono 44100Hz, volume and SHA256 gates pass; exact sentence/fragment/option transcripts. Independent non-target-prompted gpt-4o-transcribe recognizes standalone 加.
- PASS: Approved text, spokenText, functional displayLines, Han counts 10/11/9/12/9, coverage and allowed-character sweep; indexed bounded nonoverlapping timings, spans80-900ms and final tails<=300ms.
- PASS: Canonical Stage4, first 算 index5, G04 也能變強 single-Han cards, exact dedicated G02 fragments/timings, G05 exact full-sentence options, mean-volume spread 0.2dB.
- PASS: Five final square WebP images<=250KiB, total lesson assets 1384494 bytes<=2MiB; exported files inspected side-by-side against L058/refined/family/hero references.

No missing lesson-local assets. Release owns L405 → R049 → R050 → L406 integration and final verify.
verify skipped: dependency-blocked, shared state left for Release.

Validation: npm run validate:production PASS on baseline; same production asset validator PASS on an isolated temporary L406 draft fixture, restored immediately. Lesson-local technical audit PASS.

Asset format validation: npm run assets:audit -- --strict PASS on an isolated L406 draft fixture; production JSON restored byte-for-byte.


## Final boundary refresh
Final handoff boundary rechecked at d0cfbc9ac8f90ddb4db32b917e9d7723ec59cb59: L001-L404, latest 弱, 408 learned characters; allowed-character set unchanged at 410. Only 越 remains provisional. Original requested dependencies retained for audit; remaining Release order L405 → R049 → R050 → L406.

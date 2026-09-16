# L412「成」Production package

Status: dependency-blocked-asset-complete.

## Boundary and approved constraints
Teacher-approved Production F L412 handoff. Source main through L408, 412 learned characters. R049/R050 after405 merged. 成 pronounced ㄔㄥˊ. 功 is not learned and must not appear in learner-facing text. G02 prefix exactly 試了好多次才完: keep final 完, exclude 成; suffix exactly 這張畫 begins 這. Full sentence 完成 remains fluent. S01 craft not completed, father encourages. S02 completed dog painting, same-dog practice drafts. S03 handmade paper boat, no magic. S04 return toy to home storage, not discard. S05 你 refers explicitly to father, not fixed young boy; no climbing or standing below ball. No readable text/numeral image exceptions. S02 artwork only pictures, no scores/comments/titles. R049/R050 after405 already merged; do not list as missing. 加 is not coverage target.
Source 346b7af0e22c21d388c92491e0e569b37e62299f; dependencies L408, L409, L410, L411; provisional 辦 試 定; allowed count 416.

Coverage: 成3 / 定2 / 試3 / 辦2 / 法2 / 減1. No extra provisional dependency.

## Final approved sentence records
```json
[
  {
    "id": "L412-S01",
    "text": "試試看，一定能做成。",
    "spokenText": "試試看一定能做成",
    "displayLines": [
      "試試看，",
      "一定能做成。"
    ],
    "focusChar": "成",
    "imageNotes": "家中手作桌旁，主角爸爸陪小女孩用紙盒做玩具車。桌上已有車身和幾個圓形輪子，女孩拿著尚未裝好的輪子，有些猶豫；爸爸指著安裝位置，微笑鼓勵她繼續嘗試。車子尚未完成，切割工具不放在女孩手邊。"
  },
  {
    "id": "L412-S02",
    "text": "試了好多次，才完成這張畫。",
    "spokenText": "試了好多次才完成這張畫",
    "displayLines": [
      "試了好多次，",
      "才完成",
      "這張畫。"
    ],
    "focusChar": "成",
    "imageNotes": "主角小女孩坐在畫畫桌前，開心地舉起剛完成的畫，畫中是一隻在草地上奔跑的小狗。桌旁留兩三張畫同一隻小狗的練習稿，有些只畫出輪廓、有些修改過姿勢。用同一主題的練習過程呈現「試了好多次」，不畫成毫無關聯的作品。"
  },
  {
    "id": "L412-S03",
    "text": "不一定要買，紙也能變成船。",
    "spokenText": "不一定要買紙也能變成船",
    "displayLines": [
      "不一定要買，",
      "紙也能",
      "變成船。"
    ],
    "focusChar": "成",
    "imageNotes": "家中桌邊，主角媽媽向小女孩展示一艘剛摺好的紙船。桌上放一張平整的紙和另一張摺到一半的紙，讓人看出紙船是用紙做的。女孩伸手準備接過紙船，表情驚喜。呈現手作，不畫成紙張施魔法變船。"
  },
  {
    "id": "L412-S04",
    "text": "東西太多，想辦法減少一點。",
    "spokenText": "東西太多想辦法減少一點",
    "displayLines": [
      "東西太多，",
      "想辦法",
      "減少一點。"
    ],
    "focusChar": "減",
    "imageNotes": "出遊前，主角媽媽和小女孩整理打開的旅行袋。袋裡已有衣服、帽子和水壺，旁邊還放著好幾個女孩想帶的玩具。媽媽指向過多的玩具，女孩正把其中一個放回家中的收納盒。呈現挑出不必帶的物品，不是把東西丟掉。"
  },
  {
    "id": "L412-S05",
    "text": "你有辦法把球拿下來嗎？",
    "spokenText": "你有辦法把球拿下來嗎",
    "displayLines": [
      "你有辦法",
      "把球拿下來",
      "嗎？"
    ],
    "focusChar": "辦",
    "imageNotes": "公園裡，一顆球卡在樹枝分岔處，略高於成人伸手可及的位置。主角小女孩站在地上，指著球向主角爸爸發問；爸爸抬頭查看，正在想辦法，尚未動手。「你」明確指爸爸，不使用固定「你」小男孩。不要畫孩子爬樹、踩疊高物品或站在球的正下方。"
  }
]
```

## Stage 4 index self-check
L412-G01: 試[0] 試[1] 看[2] 一[3] 定[4] 能[5] 做[6] 成[7]; target 成[7]; PASS.
L412-G02: 試[0] 了[1] 好[2] 多[3] 次[4] 才[5] 完[6] 成[7] 這[8] 張[9] 畫[10]; target 成[7]; PASS.
L412-G03: 不[0] 一[1] 定[2] 要[3] 買[4] 紙[5] 也[6] 能[7] 變[8] 成[9] 船[10]; target 成[9]; PASS.
L412-G04: 東[0] 西[1] 太[2] 多[3] 想[4] 辦[5] 法[6] 減[7] 少[8] 一[9] 點[10]; target 減[7]; PASS.
L412-G05: 你[0] 有[1] 辦[2] 法[3] 把[4] 球[5] 拿[6] 下[7] 來[8] 嗎[9]; target 辦[2]; PASS.
G04 card mappings PASS; each sentence used once.

## Final Stage 4 plan
```json
[
  {
    "id": "L412-G01",
    "type": "find-character",
    "sentenceId": "L412-S01",
    "targetChar": "成",
    "targetCharIndex": 7,
    "prompt": "請幫小兔子找出句子裡的成。"
  },
  {
    "id": "L412-G02",
    "type": "teach-character",
    "sentenceId": "L412-S02",
    "targetChar": "成",
    "targetCharIndex": 7,
    "prompt": "請你幫小兔子念紅框裡的字。",
    "teachAudio": {
      "prefixText": "試了好多次才完",
      "suffixText": "這張畫",
      "prefixSrc": "/assets/lessons/L412/audio/L412-G02-prefix.m4a",
      "suffixSrc": "/assets/lessons/L412/audio/L412-G02-suffix.m4a",
      "prefixAudio": {
        "src": "/assets/lessons/L412/audio/L412-G02-prefix.m4a",
        "durationMs": 2875,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 420
          },
          {
            "charIndex": 1,
            "startMs": 420,
            "endMs": 660
          },
          {
            "charIndex": 2,
            "startMs": 660,
            "endMs": 1000
          },
          {
            "charIndex": 3,
            "startMs": 1000,
            "endMs": 1240
          },
          {
            "charIndex": 4,
            "startMs": 1240,
            "endMs": 1580
          },
          {
            "charIndex": 5,
            "startMs": 1968,
            "endMs": 2280
          },
          {
            "charIndex": 6,
            "startMs": 2280,
            "endMs": 2640
          }
        ]
      },
      "suffixAudio": {
        "src": "/assets/lessons/L412/audio/L412-G02-suffix.m4a",
        "durationMs": 1463,
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
            "endMs": 1140
          }
        ]
      }
    }
  },
  {
    "id": "L412-G03",
    "type": "missing-character",
    "sentenceId": "L412-S03",
    "targetChar": "成",
    "targetCharIndex": 9,
    "missingIndexes": [
      9
    ],
    "prompt": "請幫小兔子找回少掉的字。",
    "options": [
      {
        "id": "correct",
        "text": "成",
        "correct": true
      },
      {
        "id": "wrong-one",
        "text": "出",
        "correct": false
      },
      {
        "id": "wrong-two",
        "text": "大",
        "correct": false
      }
    ]
  },
  {
    "id": "L412-G04",
    "type": "partial-order",
    "sentenceId": "L412-S04",
    "targetChar": "減",
    "targetCharIndex": 7,
    "missingIndexes": [
      7,
      8,
      9,
      10
    ],
    "prompt": "請幫小兔子把字放回去。",
    "options": [
      {
        "id": "card-yi",
        "text": "一",
        "correct": true,
        "correctOrder": 2
      },
      {
        "id": "card-jian",
        "text": "減",
        "correct": true,
        "correctOrder": 0
      },
      {
        "id": "card-dian",
        "text": "點",
        "correct": true,
        "correctOrder": 3
      },
      {
        "id": "card-shao",
        "text": "少",
        "correct": true,
        "correctOrder": 1
      }
    ]
  },
  {
    "id": "L412-G05",
    "type": "choose-pronunciation",
    "sentenceId": "L412-S05",
    "targetChar": "辦",
    "targetCharIndex": 2,
    "prompt": "請聽一聽，誰念對了？",
    "options": [
      {
        "id": "correct",
        "text": "你有辦法把球拿下來嗎？",
        "audioSrc": "/assets/lessons/L412/audio/L412-S05.m4a",
        "correct": true
      },
      {
        "id": "wrong-one",
        "text": "你有辦法把書拿下來嗎？",
        "audioSrc": "/assets/lessons/L412/audio/L412-G05-wrong-one.m4a",
        "correct": false
      },
      {
        "id": "wrong-two",
        "text": "你有辦法把球拿上來嗎？",
        "audioSrc": "/assets/lessons/L412/audio/L412-G05-wrong-two.m4a",
        "correct": false
      }
    ]
  }
]
```

## Image prompts
### L412-S01
Square image / 1:1 composition with safe margins. Match full L058 warm detailed pencil-and-watercolor Taiwan picturebook style, refined L115-S01/S02 L118-S02 L119-S01 L128-S03 proportions. Family identity from L154-S01 L162-S04 L163-S02: preschool girl dark short bob pink clip pink cardigan cream shirt navy skirt; mother dark brown shoulder-length hair cream blouse blue jeans; father short brown-black hair blue shirt. L058 is style only. Rich detailed environments, natural warm light and soft shaded expressive faces. No flat cartoon/anime/3D/photographic faces, no generic redesigned toddlers. No readable text/numerals/brands or watermark in any image. Scene: 家中手作桌旁，主角爸爸陪小女孩用紙盒做玩具車。桌上已有車身和幾個圓形輪子，女孩拿著尚未裝好的輪子，有些猶豫；爸爸指著安裝位置，微笑鼓勵她繼續嘗試。車子尚未完成，切割工具不放在女孩手邊。

### L412-S02
Square image / 1:1 composition with safe margins. Match full L058 warm detailed pencil-and-watercolor Taiwan picturebook style, refined L115-S01/S02 L118-S02 L119-S01 L128-S03 proportions. Family identity from L154-S01 L162-S04 L163-S02: preschool girl dark short bob pink clip pink cardigan cream shirt navy skirt; mother dark brown shoulder-length hair cream blouse blue jeans; father short brown-black hair blue shirt. L058 is style only. Rich detailed environments, natural warm light and soft shaded expressive faces. No flat cartoon/anime/3D/photographic faces, no generic redesigned toddlers. No readable text/numerals/brands or watermark in any image. Scene: 主角小女孩坐在畫畫桌前，開心地舉起剛完成的畫，畫中是一隻在草地上奔跑的小狗。桌旁留兩三張畫同一隻小狗的練習稿，有些只畫出輪廓、有些修改過姿勢。用同一主題的練習過程呈現「試了好多次」，不畫成毫無關聯的作品。

### L412-S03
Square image / 1:1 composition with safe margins. Match full L058 warm detailed pencil-and-watercolor Taiwan picturebook style, refined L115-S01/S02 L118-S02 L119-S01 L128-S03 proportions. Family identity from L154-S01 L162-S04 L163-S02: preschool girl dark short bob pink clip pink cardigan cream shirt navy skirt; mother dark brown shoulder-length hair cream blouse blue jeans; father short brown-black hair blue shirt. L058 is style only. Rich detailed environments, natural warm light and soft shaded expressive faces. No flat cartoon/anime/3D/photographic faces, no generic redesigned toddlers. No readable text/numerals/brands or watermark in any image. Scene: 家中桌邊，主角媽媽向小女孩展示一艘剛摺好的紙船。桌上放一張平整的紙和另一張摺到一半的紙，讓人看出紙船是用紙做的。女孩伸手準備接過紙船，表情驚喜。呈現手作，不畫成紙張施魔法變船。

### L412-S04
Square image / 1:1 composition with safe margins. Match full L058 warm detailed pencil-and-watercolor Taiwan picturebook style, refined L115-S01/S02 L118-S02 L119-S01 L128-S03 proportions. Family identity from L154-S01 L162-S04 L163-S02: preschool girl dark short bob pink clip pink cardigan cream shirt navy skirt; mother dark brown shoulder-length hair cream blouse blue jeans; father short brown-black hair blue shirt. L058 is style only. Rich detailed environments, natural warm light and soft shaded expressive faces. No flat cartoon/anime/3D/photographic faces, no generic redesigned toddlers. No readable text/numerals/brands or watermark in any image. Scene: 出遊前，主角媽媽和小女孩整理打開的旅行袋。袋裡已有衣服、帽子和水壺，旁邊還放著好幾個女孩想帶的玩具。媽媽指向過多的玩具，女孩正把其中一個放回家中的收納盒。呈現挑出不必帶的物品，不是把東西丟掉。

### L412-S05
Square image / 1:1 composition with safe margins. Match full L058 warm detailed pencil-and-watercolor Taiwan picturebook style, refined L115-S01/S02 L118-S02 L119-S01 L128-S03 proportions. Family identity from L154-S01 L162-S04 L163-S02: preschool girl dark short bob pink clip pink cardigan cream shirt navy skirt; mother dark brown shoulder-length hair cream blouse blue jeans; father short brown-black hair blue shirt. L058 is style only. Rich detailed environments, natural warm light and soft shaded expressive faces. No flat cartoon/anime/3D/photographic faces, no generic redesigned toddlers. No readable text/numerals/brands or watermark in any image. Scene: 公園裡，一顆球卡在樹枝分岔處，略高於成人伸手可及的位置。主角小女孩站在地上，指著球向主角爸爸發問；爸爸抬頭查看，正在想辦法，尚未動手。「你」明確指爸爸，不使用固定「你」小男孩。不要畫孩子爬樹、踩疊高物品或站在球的正下方。


## Final QA
Source main L407 with411 learned chars; dependencies L408-L411, provisional 法辦試定, allowed416. R049/R050 after405 already merged.
Standalone 成 generated directly; final independent gpt-4o-transcribe with generic non-target context recognizes 成. Whisper short-clip recognition is unreliable (raw evidence retained), not used as sole pronunciation gate. No human listening claimed. S03 first version paused after 紙; regenerated whole exact sentence with pause after 買, confirmed by final transcript and measured pause. Repo ai:audio/assets:audio/assets:align:ai; independently generated fragments/options, no syllable extraction or splicing. Measured trailing silence trimmed with120ms decay allowance; G02 suffix normalized +6.7dB to match prefix. Shared files restored.

L412-S01 style-lock PASS, cast PASS; Unfinished cardboard car, hesitant girl holds separate wheel; father points at wheel mounting location.
L412-S02 style-lock PASS, cast PASS; Completed running-puppy drawing and three earlier drawings of same puppy; no words or scores.
L412-S03 style-lock PASS, cast PASS; Mother presents folded paper boat with flat and half-folded paper on table; handmade, no magic.
L412-S04 style-lock PASS, cast PASS; Girl returns one toy to home storage; packed travel bag and excess toys distinct, not garbage.
L412-S05 style-lock PASS, cast PASS; One ball caught above adult reach; father and girl stand to side on ground, father thinking; 你 refers to father.

S01 initial father pointing at windshield instead of wheel mount; corrected with imagegen. Rejected drafts not committed.

Teacher image exception: 

Browser QA:
```json
{
  "fallback": "Recording/replay not verified through automation; technical asset validation and dedicated fragment playback used per Production SOP browser fallback",
  "fixture": "Actual LessonPanel using source-main lookup plus lesson-local draft and approved provisional; no production state writes",
  "sentences": "S01-S05 all ENDED; images, functional line breaks and active highlights inspected at phone width",
  "status": "playback-verified-recording-tooling-fallback",
  "releaseQA": "Persistent progress, reward navigation and next-lesson flow left to Release integrated verification",
  "cleanup": "Viewport reset and own QA tab closed",
  "games": {
    "G05": "PASS all three exact full sentence options ENDED, correct option selected; reward button appeared",
    "G02": "Exact prefix 試了好多次才完 ENDED, then red frame on 成. Prefix retains 完. Click generated two cue blob PLAY events; browser control did not complete press-and-hold recording or recorded replay. Microphone permission unchanged.",
    "G04": "PASS 減少一點 restored in order",
    "G01": "PASS correct 成 selected",
    "G03": "PASS 成 selected among 出/大/成"
  },
  "viewport": {
    "height": 844,
    "width": 390
  },
  "media": "All ten final M4A files reached ENDED; standalone 成 and suffix 這張畫 independently played through local media fixture",
  "listening": "No human listening or microphone recording claimed; teacher subjective review remains post-merge"
}
```

- PASS: All ten final audio files decode, AAC mono 44100Hz, volume and SHA256 gates pass; exact sentence/fragment/option transcripts. Independent non-target-prompted gpt-4o-transcribe recognizes standalone 成.
- PASS: Approved text, spokenText, functional displayLines, Han counts 8/11/11/11/10, coverage and allowed-character sweep; indexed bounded nonoverlapping timings, spans80-900ms and final tails<=300ms.
- PASS: Canonical Stage4, 成 index7/7/9, G04 減少一點 single-Han cards, exact dedicated G02 fragments/timings, G05 exact full-sentence options, mean-volume spread 0.1dB.
- PASS: Five final square WebP images<=250KiB, total lesson assets 1203145 bytes<=2MiB; exported files inspected side-by-side against L058/refined/family references.

No missing lesson-local assets. Release owns L409, L410, L411 dependencies and L412 integration/final verify.
verify skipped: dependency-blocked, shared state left for Release.

Validation: npm run validate:production PASS on baseline; same production asset validator PASS on an isolated temporary L412 draft fixture, restored immediately. Lesson-local technical audit PASS.

Asset format validation: npm run assets:audit -- --strict PASS on an isolated L412 draft fixture; production JSON restored byte-for-byte.


## Final boundary refresh
Final origin/main check 346b7af0e22c21d388c92491e0e569b37e62299f: through L408, 412 learned; same allowed416 set. Remaining provisional 辦 試 定; Release dependencies L409, L410, L411. R049/R050 after405 already merged.

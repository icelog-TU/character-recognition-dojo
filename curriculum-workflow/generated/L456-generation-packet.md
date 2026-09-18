# L456 突 — generation packet

Status: `dependency-blocked-asset-complete`. Registry: `ready-blocked-by-dependency`.

Branch: codex/l456-complete-package. Claim: b785569b6f7b07a947e939b7710879c3bbc9e471. Base: 5622c827569df36e09c1767d61f114b35973bbea, official L443 操 / R054. Full allowedChars 453 saved in request/draft. Dependencies L451-L455; provisional 台候演表現; R055/R056 milestone remains a Release blocker. No merge main.

## Package contents

Teacher-approved five texts, spokenText, displayLines, focusChar and Stage 4 options/indexes are unchanged. Request, generation packet, canonical draft, five WebPs, ten final M4As and nine final alignment records are present. Exact image prompts/source paths are in L456-image-prompts.json.

S01 style-lock PASS, cast PASS.
S02 style-lock PASS, cast PASS.
S03 style-lock PASS, cast PASS.
S04 style-lock PASS, cast PASS.
S05 style-lock PASS, cast PASS.

Actual exported WebPs compared side by side with full L058 style-only set, refined L115/L118/L119/L128 examples and L154/L162/L163 family identities. No rejected image drafts committed.

## Audio Rescue result

- `char-u7a81.m4a`, `L456-S01.m4a`, `L456-S02.m4a`, and `L456-S05.m4a` were regenerated as complete independent utterances. Final processed acoustic review hears Taiwan ㄊㄨˊ (tone 2, rising) in all four files.
- TTS used `圖` / `圖然` as a phonetic rendering only. Learner-facing `突` and every approved sentence field remain unchanged; no syllable extraction or splicing was used.
- S01 final `了` and all other final syllables are complete. G02 suffix remains the independently generated exact fragment `然出現一隻小鳥`.

## Final timing result

- S01, S02, and S05 were aligned from the final M4As and have ordered, non-overlapping character spans.
- S05 `突然` was manually split at the continuous waveform valley after the measured sentence pause; G02 suffix `出` begins at 900 ms after the measured pause ending at 898 ms.
- Draft sentence audio, G02 prefix/suffix audio, option audio verification, and `L456-alignment.json` are synchronized.

## QA

Startup tools/AI/state checks, allowed characters, coverage, and Stage 4 indices passed. All ten final M4As decode; codec/duration/hash inventory is in `L456-technical-qa.json`. Browser playback QA played all ten files to `ended` on 2026-09-18. Final acoustic review and alignment evidence are retained in the rescue QA JSON files. Teacher subjective listening approval is not claimed.

## Approved sentence records

```json
[
  {
    "id": "L456-S01",
    "text": "表演的時候，突然停電了。",
    "spokenText": "表演的時候突然停電了",
    "displayLines": [
      "表演的時候，",
      "突然停電了。"
    ],
    "focusChar": "突",
    "imageNotes": "室內活動會場，主角女孩與 generic classmates 正在台上表演，舞台燈已熄滅，孩子停下動作，露出驚訝表情；老師在旁安定照看。保留窗外日光照明，人物與場景必須清楚，不做漆黑畫面，不畫恐慌、火災或電線冒火。",
    "imagePrompt": "Square modern children picture-book illustration. Match full L058 set STYLE ONLY and refined L115-S01/S02,L118-S02,L119-S01,L128-S03: fine pencil and richly layered watercolor/gouache texture, warm bright natural light, detailed clean environment, consistent preschool proportions. Family identity anchors L154-S01,L162-S04,L163-S02. Girl: short dark bob, pink hair clip/cardigan, cream blouse, navy skirt, pink shoes. Mother: dark chin bob, cream blouse, blue jeans. Father: short dark hair, blue button shirt, blue jeans. Teacher distinct: neat ponytail, oval glasses, teal cardigan, white blouse, beige pants. No letters, numbers or readable marks. 室內活動會場，主角女孩與 generic classmates 正在台上表演，舞台燈已熄滅，孩子停下動作，露出驚訝表情；老師在旁安定照看。保留窗外日光照明，人物與場景必須清楚，不做漆黑畫面，不畫恐慌、火災或電線冒火。",
    "approved": true
  },
  {
    "id": "L456-S02",
    "text": "窗台上突然出現一隻小鳥。",
    "spokenText": "窗台上突然出現一隻小鳥",
    "displayLines": [
      "窗台上",
      "突然出現",
      "一隻小鳥。"
    ],
    "focusChar": "突",
    "imageNotes": "白天家中，主角女孩原本坐在窗邊，轉頭驚喜地看見一隻剛落在窗台的小鳥；小鳥腳接觸窗台、翅膀正在收起，呈現剛到來的瞬間。只畫一隻鳥，鳥不是籠中寵物，女孩不伸手抓牠，也不攀爬窗戶。",
    "imagePrompt": "Square modern children picture-book illustration. Match full L058 set STYLE ONLY and refined L115-S01/S02,L118-S02,L119-S01,L128-S03: fine pencil and richly layered watercolor/gouache texture, warm bright natural light, detailed clean environment, consistent preschool proportions. Family identity anchors L154-S01,L162-S04,L163-S02. Girl: short dark bob, pink hair clip/cardigan, cream blouse, navy skirt, pink shoes. Mother: dark chin bob, cream blouse, blue jeans. Father: short dark hair, blue button shirt, blue jeans. Teacher distinct: neat ponytail, oval glasses, teal cardigan, white blouse, beige pants. No letters, numbers or readable marks. 白天家中，主角女孩原本坐在窗邊，轉頭驚喜地看見一隻剛落在窗台的小鳥；小鳥腳接觸窗台、翅膀正在收起，呈現剛到來的瞬間。只畫一隻鳥，鳥不是籠中寵物，女孩不伸手抓牠，也不攀爬窗戶。",
    "approved": true
  },
  {
    "id": "L456-S03",
    "text": "我發現報名表不見了。",
    "spokenText": "我發現報名表不見了",
    "displayLines": [
      "我發現報名表",
      "不見了。"
    ],
    "focusChar": "表",
    "imageNotes": "學校活動報名處，主角女孩打開原本放報名表的資料夾，發現裡面空了，低頭翻找書包；媽媽在旁陪她找，遠處其他同學拿著單張表格等候交件。女孩的報名表確實不在手上，不把那張表藏在畫面角落讓觀眾看見；表格只需框線，不需可讀內容。",
    "imagePrompt": "Square modern children picture-book illustration. Match full L058 set STYLE ONLY and refined L115-S01/S02,L118-S02,L119-S01,L128-S03: fine pencil and richly layered watercolor/gouache texture, warm bright natural light, detailed clean environment, consistent preschool proportions. Family identity anchors L154-S01,L162-S04,L163-S02. Girl: short dark bob, pink hair clip/cardigan, cream blouse, navy skirt, pink shoes. Mother: dark chin bob, cream blouse, blue jeans. Father: short dark hair, blue button shirt, blue jeans. Teacher distinct: neat ponytail, oval glasses, teal cardigan, white blouse, beige pants. No letters, numbers or readable marks. 學校活動報名處，主角女孩打開原本放報名表的資料夾，發現裡面空了，低頭翻找書包；媽媽在旁陪她找，遠處其他同學拿著單張表格等候交件。女孩的報名表確實不在手上，不把那張表藏在畫面角落讓觀眾看見；表格只需框線，不需可讀內容。",
    "approved": true
  },
  {
    "id": "L456-S04",
    "text": "爸爸演怪物，我演勇者。",
    "spokenText": "爸爸演怪物我演勇者",
    "displayLines": [
      "爸爸演怪物，",
      "我演勇者。"
    ],
    "focusChar": "演",
    "imageNotes": "家中角色扮演遊戲，固定主角爸爸戴簡單怪物頭飾，做出逗趣動作，臉部仍可辨識；主角女孩披短披風、拿柔軟玩具盾牌扮勇者，父女都玩得開心。爸爸不是真怪物，女孩不拿真武器，不畫打傷、恐懼或破壞家具。",
    "imagePrompt": "Square modern children picture-book illustration. Match full L058 set STYLE ONLY and refined L115-S01/S02,L118-S02,L119-S01,L128-S03: fine pencil and richly layered watercolor/gouache texture, warm bright natural light, detailed clean environment, consistent preschool proportions. Family identity anchors L154-S01,L162-S04,L163-S02. Girl: short dark bob, pink hair clip/cardigan, cream blouse, navy skirt, pink shoes. Mother: dark chin bob, cream blouse, blue jeans. Father: short dark hair, blue button shirt, blue jeans. Teacher distinct: neat ponytail, oval glasses, teal cardigan, white blouse, beige pants. No letters, numbers or readable marks. 家中角色扮演遊戲，固定主角爸爸戴簡單怪物頭飾，做出逗趣動作，臉部仍可辨識；主角女孩披短披風、拿柔軟玩具盾牌扮勇者，父女都玩得開心。爸爸不是真怪物，女孩不拿真武器，不畫打傷、恐懼或破壞家具。",
    "approved": true
  },
  {
    "id": "L456-S05",
    "text": "走到半路，突然下起大雨。",
    "spokenText": "走到半路突然下起大雨",
    "displayLines": [
      "走到半路，",
      "突然下起",
      "大雨。"
    ],
    "focusChar": "突",
    "imageNotes": "主角女孩與媽媽原本走在人行道上，大雨突然落下，兩人驚訝地轉往近旁店家屋簷避雨；雨滴密集、路面開始濕，人物及動作仍清楚。不要畫成已在家中看雨，也不加入洪水、雷擊、跌倒或衝入車道。",
    "imagePrompt": "Square modern children picture-book illustration. Match full L058 set STYLE ONLY and refined L115-S01/S02,L118-S02,L119-S01,L128-S03: fine pencil and richly layered watercolor/gouache texture, warm bright natural light, detailed clean environment, consistent preschool proportions. Family identity anchors L154-S01,L162-S04,L163-S02. Girl: short dark bob, pink hair clip/cardigan, cream blouse, navy skirt, pink shoes. Mother: dark chin bob, cream blouse, blue jeans. Father: short dark hair, blue button shirt, blue jeans. Teacher distinct: neat ponytail, oval glasses, teal cardigan, white blouse, beige pants. No letters, numbers or readable marks. 主角女孩與媽媽原本走在人行道上，大雨突然落下，兩人驚訝地轉往近旁店家屋簷避雨；雨滴密集、路面開始濕，人物及動作仍清楚。不要畫成已在家中看雨，也不加入洪水、雷擊、跌倒或衝入車道。",
    "approved": true
  }
]
```

## Stage 4 (final audio metadata)

```json
[
  {
    "id": "L456-G01",
    "type": "find-character",
    "sentenceId": "L456-S01",
    "targetChar": "突",
    "targetCharIndex": 5,
    "prompt": "找出句子裡的「突」。"
  },
  {
    "id": "L456-G02",
    "type": "teach-character",
    "sentenceId": "L456-S02",
    "targetChar": "突",
    "targetCharIndex": 3,
    "prompt": "請你幫小兔子念這個字。",
    "teachAudio": {
      "prefixText": "窗台上",
      "suffixText": "然出現一隻小鳥",
      "prefixSrc": "/assets/lessons/L456/audio/L456-G02-prefix.m4a",
      "suffixSrc": "/assets/lessons/L456/audio/L456-G02-suffix.m4a",
      "prefixAudio": {
        "src": "/assets/lessons/L456/audio/L456-G02-prefix.m4a",
        "durationMs": 1097,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 380
          },
          {
            "charIndex": 1,
            "startMs": 380,
            "endMs": 600
          },
          {
            "charIndex": 2,
            "startMs": 600,
            "endMs": 880
          }
        ]
      },
      "suffixAudio": {
        "src": "/assets/lessons/L456/audio/L456-G02-suffix.m4a",
        "durationMs": 3063,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 400
          },
          {
            "charIndex": 1,
            "startMs": 400,
            "endMs": 1300
          },
          {
            "charIndex": 2,
            "startMs": 1300,
            "endMs": 1540
          },
          {
            "charIndex": 3,
            "startMs": 1540,
            "endMs": 1840
          },
          {
            "charIndex": 4,
            "startMs": 1840,
            "endMs": 2020
          },
          {
            "charIndex": 5,
            "startMs": 2020,
            "endMs": 2600
          },
          {
            "charIndex": 6,
            "startMs": 2600,
            "endMs": 2780
          }
        ]
      }
    }
  },
  {
    "id": "L456-G03",
    "type": "missing-character",
    "sentenceId": "L456-S05",
    "targetChar": "突",
    "targetCharIndex": 4,
    "missingIndexes": [
      4
    ],
    "prompt": "找回不見的字。",
    "options": [
      {
        "id": "L456-G03-O1",
        "text": "出",
        "correct": false
      },
      {
        "id": "L456-G03-O2",
        "text": "突",
        "correct": true
      },
      {
        "id": "L456-G03-O3",
        "text": "大",
        "correct": false
      }
    ]
  },
  {
    "id": "L456-G04",
    "type": "partial-order",
    "sentenceId": "L456-S04",
    "targetChar": "演",
    "targetCharIndex": 6,
    "missingIndexes": [
      5,
      6,
      7,
      8
    ],
    "prompt": "照順序把字卡放回去。",
    "options": [
      {
        "id": "L456-G04-O1",
        "text": "勇",
        "correct": true,
        "correctOrder": 2
      },
      {
        "id": "L456-G04-O2",
        "text": "我",
        "correct": true,
        "correctOrder": 0
      },
      {
        "id": "L456-G04-O3",
        "text": "者",
        "correct": true,
        "correctOrder": 3
      },
      {
        "id": "L456-G04-O4",
        "text": "演",
        "correct": true,
        "correctOrder": 1
      }
    ]
  },
  {
    "id": "L456-G05",
    "type": "choose-pronunciation",
    "sentenceId": "L456-S03",
    "targetChar": "表",
    "targetCharIndex": 5,
    "prompt": "先聽每位朋友念，再選出念對的朋友。",
    "options": [
      {
        "id": "L456-G05-O1",
        "text": "我發現報名表寫錯了。",
        "spokenText": "我發現報名表寫錯了",
        "correct": false,
        "audioSrc": "/assets/lessons/L456/audio/L456-G05-wrong-one.m4a"
      },
      {
        "id": "L456-G05-O2",
        "text": "我發現報名表不見了。",
        "spokenText": "我發現報名表不見了",
        "correct": true,
        "audioSrc": "/assets/lessons/L456/audio/L456-S03.m4a"
      },
      {
        "id": "L456-G05-O3",
        "text": "我發現報名表破掉了。",
        "spokenText": "我發現報名表破掉了",
        "correct": false,
        "audioSrc": "/assets/lessons/L456/audio/L456-G05-wrong-two.m4a"
      }
    ]
  }
]
```

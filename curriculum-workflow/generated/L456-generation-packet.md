# L456 突 — partial package for Rescue

Status: partial-package. Registry: needs-rework. This is a preservation checkpoint explicitly requested by Package Rescue, not an asset-complete handoff.

Branch: codex/l456-complete-package. Claim: b785569b6f7b07a947e939b7710879c3bbc9e471. Base: 5622c827569df36e09c1767d61f114b35973bbea, official L443 操 / R054. Full allowedChars 453 saved in request/draft. Dependencies L451-L455; provisional 台候演表現; R055/R056 milestone remains a Release blocker. No merge main.

## Preserved work

Teacher-approved five texts, spokenText, displayLines, focusChar and Stage 4 options/indexes are unchanged. Request, generation packet, canonical draft, five WebPs, ten current M4As and nine current alignment records are preserved. Raw MP3s remain local and ignored in curriculum-workflow/audio-inbox/L456/. Exact image prompts/source paths are in L456-image-prompts.json.

S01 style-lock PASS, cast PASS.
S02 style-lock PASS, cast PASS.
S03 style-lock PASS, cast PASS.
S04 style-lock PASS, cast PASS.
S05 style-lock PASS, cast PASS.

Actual exported WebPs compared side by side with full L058 style-only set, refined L115/L118/L119/L128 examples and L154/L162/L163 family identities. No rejected image drafts committed.

## Required audio repair

- char-u7a81.m4a: target is Taiwan ㄊㄨˊ (tu2); current recording is approximately flat-pitched and AI auditory analysis hears tu1.
- L456-S01.m4a, L456-S02.m4a, L456-S05.m4a: 突然 must be tu2 ran2; current audio still flagged tu1. Regenerate each complete utterance from unchanged spokenText, then realign final M4A.
- L456-S01 final 了: Whisper exact-text transcription includes it; a separate auditory model omitted it. Verify complete ending during repair; no human PASS claimed.
- G02 suffix was regenerated independently from exact 然出現一隻小鳥; current Whisper and auditory result match. Preserve initial 然 and do not insert 突 or 後. Other six audio files are preserved without a known tone blocker, but all still need final listening/QA.

## Required timing repair

- S01 Han index 5 突: 2180–2181 ms (1 ms), overlaps next 然 starting 2180 ms.
- S05 Han index 4 突: 1860–1861 ms (1 ms), overlaps next 然 starting 1860 ms.
- S02 Han index 3 突: 1240–2140 ms (900 ms), inspect and regenerate after audio replacement.
- G02 suffix index 1 出: 400–1300 ms (900 ms), review boundary.
- Keep draft sentence audio, teachAudio prefixAudio/suffixAudio, optionAudioVerification and L456-alignment.json synchronized after changes.

## QA and limitations

Startup tools/AI/state checks PASS. Allowed characters, coverage and Stage 4 indices PASS. All ten current M4As decode; codec/duration/hash inventory in L456-technical-qa.json. Technical timing gate failed on impossible short spans. Browser/phone QA not yet performed; G02 recording and stitched replay untested. Human listening not performed. No completed-package or teacher PASS claim.

The next pronunciation-candidate generation command was rejected by automatic approval review with only 'blocked by policy'; no detailed reason returned, and the rejected generation did not execute. Existing files were preserved; no stash/reset/revert or shared-file changes.

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

## Stage 4 (current audio metadata; repair pending)

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

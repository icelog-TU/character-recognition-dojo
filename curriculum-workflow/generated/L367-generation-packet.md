# L367 Production Generation Packet

- Owner: Production C
- Branch: codex/l367-complete-package
- packageStatus: dependency-blocked-asset-complete
- Source boundary: cd4abf4b1ffe125be5402883a31b3197e1e892cd (Document two-character word lessons)
- Formal production boundary: L001-L365; reviews through R044 after L360.
- dependsOnLessons: ["L366"]
- provisionalLearnedChars: ["吧"]
- L366 snapshot: 11b729a05fa4ec939f32f04b111f0e51d424d4fb.
- Release integrates L366 before L367. No shared production JSON, planner or ledger changes are included.

## Final Approved Records

```json
{
  "id": "L367",
  "title": "謝",
  "newChars": [
    "謝"
  ],
  "zhuyin": {
    "謝": "ㄒㄧㄝˋ"
  },
  "dependsOnLessons": [
    "L366"
  ],
  "provisionalLearnedChars": [
    "吧"
  ],
  "sentences": [
    {
      "id": "L367-S01",
      "text": "收到驚喜，要說謝謝吧。",
      "spokenText": "收到驚喜要說謝謝吧",
      "focusChar": "謝",
      "displayLines": [
        "收到驚喜，",
        "要說謝謝吧。"
      ],
      "imageNotes": "主角小女孩在家中打開一個小盒子，看到裡面是可愛的小禮物或驚喜物品，表情驚喜又開心。主角媽媽或主角爸爸在旁邊溫柔提醒她要說謝謝。不要出現可讀文字、品牌、卡片字樣、標誌或數字。"
    },
    {
      "id": "L367-S02",
      "text": "小光幫我找筆，我跟他道謝。",
      "spokenText": "小光幫我找筆我跟他道謝",
      "focusChar": "謝",
      "displayLines": [
        "小光幫我",
        "找筆，",
        "我跟他道謝。"
      ],
      "imageNotes": "教室裡，小光依照 public/assets/reference/lesson-cast/xiaoguang.webp 固定角色 reference 出場，幫主角小女孩在桌子旁或地上找到一支掉下去的筆。主角小女孩看著小光道謝。小光不能畫成 generic classmate，也不能畫成既有「你」小男孩。不要出現可讀文字、品牌或標誌。"
    },
    {
      "id": "L367-S03",
      "text": "他一直說笑話，大家笑個不停。",
      "spokenText": "他一直說笑話大家笑個不停",
      "focusChar": "笑",
      "displayLines": [
        "他一直說",
        "笑話，大家",
        "笑個不停。"
      ],
      "imageNotes": "教室下課或家中客廳場景，固定 recurring「他」小男孩正在誇張地說笑話，旁邊幾個孩子笑得很開心，主角小女孩也在其中。畫面要表現「大家笑個不停」，但不要使用文字、對話框、笑話內容、字幕或標誌。"
    },
    {
      "id": "L367-S04",
      "text": "綠葉還在，但是花都謝了。",
      "spokenText": "綠葉還在但是花都謝了",
      "focusChar": "謝",
      "displayLines": [
        "綠葉還在，",
        "但是花都",
        "謝了。"
      ],
      "imageNotes": "花園或陽台盆栽場景，枝葉仍然是綠色的，但花朵已經枯萎、低垂或掉落。主角小女孩可以蹲下觀察花，畫面要清楚對比「綠葉還在」和「花都謝了」。不要出現文字、標籤、數字或品牌。"
    },
    {
      "id": "L367-S05",
      "text": "不喜歡，但還是說聲謝謝吧。",
      "spokenText": "不喜歡但還是說聲謝謝吧",
      "focusChar": "謝",
      "displayLines": [
        "不喜歡，",
        "但還是說聲",
        "謝謝吧。"
      ],
      "imageNotes": "主角小女孩收到一個她不太喜歡的小禮物或點心，表情有點勉強；主角媽媽在旁邊溫柔提醒她要有禮貌。畫面要表現她不喜歡但仍準備道謝，不要讓送禮者看起來被羞辱或難過。不要出現可讀文字、品牌、標誌或卡片字樣。"
    }
  ],
  "sentenceGames": [
    {
      "id": "L367-G01",
      "type": "find-character",
      "sentenceId": "L367-S01",
      "targetChar": "謝",
      "targetCharIndex": 6,
      "prompt": "找出句子裡的字。"
    },
    {
      "id": "L367-G02",
      "type": "teach-character",
      "sentenceId": "L367-S02",
      "targetChar": "謝",
      "targetCharIndex": 10,
      "prompt": "教小幫手認字。",
      "teachAudio": {
        "prefixText": "小光幫我找筆我跟他道",
        "prefixSrc": "/assets/lessons/L367/audio/L367-G02-prefix.m4a"
      }
    },
    {
      "id": "L367-G03",
      "type": "missing-character",
      "sentenceId": "L367-S03",
      "targetChar": "笑",
      "targetCharIndex": 4,
      "prompt": "補上不見的字。",
      "missingIndexes": [
        4
      ],
      "options": [
        {
          "id": "L367-G03-A",
          "text": "笑",
          "correct": true
        }
      ]
    },
    {
      "id": "L367-G04",
      "type": "partial-order",
      "sentenceId": "L367-S04",
      "targetChar": "謝",
      "prompt": "把句子排回正確順序。",
      "missingIndexes": [
        4,
        5,
        6,
        8
      ],
      "options": [
        {
          "id": "L367-G04-1",
          "text": "花",
          "correct": true,
          "correctOrder": 2
        },
        {
          "id": "L367-G04-2",
          "text": "謝",
          "correct": true,
          "correctOrder": 3
        },
        {
          "id": "L367-G04-3",
          "text": "但",
          "correct": true,
          "correctOrder": 0
        },
        {
          "id": "L367-G04-4",
          "text": "是",
          "correct": true,
          "correctOrder": 1
        }
      ]
    },
    {
      "id": "L367-G05",
      "type": "choose-pronunciation",
      "sentenceId": "L367-S05",
      "targetChar": "謝",
      "targetCharIndex": 8,
      "prompt": "聽一聽，選出讀對的朋友。",
      "options": [
        {
          "id": "correct",
          "text": "不喜歡，但還是說聲謝謝吧。",
          "correct": true,
          "sentenceId": "L367-S05",
          "audioSrc": "/assets/lessons/L367/audio/L367-S05.m4a"
        },
        {
          "id": "wrong-one",
          "text": "不喜歡，但還是說聲謝謝嗎。",
          "correct": false,
          "audioSrc": "/assets/lessons/L367/audio/L367-G05-wrong-one.m4a"
        },
        {
          "id": "wrong-two",
          "text": "不喜歡，但還是說聲謝謝了。",
          "correct": false,
          "audioSrc": "/assets/lessons/L367/audio/L367-G05-wrong-two.m4a"
        }
      ]
    }
  ]
}
```

## Image Generation

Built-in imagegen, one image per approved sentence. All five L058 images were viewed together as the mandatory style-only reference set; no L058 identity copying. Refined L115-S01/S02, L118-S02, L119-S01, L128-S03 and family L154-S01, L162-S04, L163-S02 were viewed and supplied as a reference sheet. S02 additionally used the actual xiaoguang.webp reference.

Final files: public/assets/lessons/L367/images/L367-S01.webp through L367-S05.webp.
Each exported WebP was viewed in a side-by-side contact sheet against style and cast references.
- S01 style-lock PASS, cast PASS: protagonist girl and mother, happy gift surprise.
- S02 style-lock PASS, cast PASS: protagonist girl and named Xiaoguang, found pencil.
- S03 style-lock PASS, cast PASS: recurring sporty boy, protagonist girl and distinct generic children.
- S04 style-lock PASS, cast N/A: green leaves and spent flowers, no people.
- S05 style-lock PASS, cast PASS: protagonist girl and mother, polite reluctance.
No rejected or regenerated image drafts. All are square 1024 pixels, each under 250 KiB.

### L367-S01 Prompt

Use case: illustration-story. One square phone-readable children's picture-book image. Match all five L058 style references: fine pencil-and-watercolor linework, detailed clean environment, bright varied warm palette, softly modeled natural faces and stable preschool proportions. Use refined L115/L118/L119/L128 examples and L154/L162/L163 family identity. Never copy L058 people identities. Not flat cartoon, simple wash, anime, 3D, photo, toddler or teenager. Recurring protagonist girl: short dark bob, small pink clip, pink cardigan over pale shirt, navy skirt, pink shoes, matching refined family reference face/age/proportions. Recurring mother: chin-length side-parted dark hair, warm natural adult face, ivory blouse/cardigan, blue jeans, matching family anchors, not teacher. In bright home living room girl has opened a small mint-colored gift box on low table, revealing a cute flower hairclip. She looks delighted and surprised. Mother beside her gently gestures toward gift with warm encouraging smile, reminding her to say thanks. No card. Cozy sofa and houseplants. No readable text, letters, numbers, labels, logos, brands, cards, captions, speech balloons, watermarks, book titles or pseudo-writing anywhere.

### L367-S02 Prompt

Use case: illustration-story. One square phone-readable children's picture-book image. Match all five L058 style references: fine pencil-and-watercolor linework, detailed clean environment, bright varied warm palette, softly modeled natural faces and stable preschool proportions. Use refined L115/L118/L119/L128 examples and L154/L162/L163 family identity. Never copy L058 people identities. Not flat cartoon, simple wash, anime, 3D, photo, toddler or teenager. Recurring protagonist girl: short dark bob, small pink clip, pink cardigan over pale shirt, navy skirt, pink shoes, matching refined family reference face/age/proportions. Xiaoguang MUST exactly match separate reference: round glasses, tidy short black side-parted hair, white short-sleeve shirt, navy knit vest, khaki shorts, white socks, brown shoes, dark green schoolbag. Bright classroom with small desks. Xiaoguang crouches next to desk having found a dropped plain pencil on floor, lifts it toward girl. Girl faces him warmly with thankful smile and hands lightly clasped. Pencil clearly visible. No teacher or other boy. No readable text, letters, numbers, labels, logos, brands, cards, captions, speech balloons, watermarks, book titles or pseudo-writing anywhere.

### L367-S03 Prompt

Use case: illustration-story. One square phone-readable children's picture-book image. Match all five L058 style references: fine pencil-and-watercolor linework, detailed clean environment, bright varied warm palette, softly modeled natural faces and stable preschool proportions. Use refined L115/L118/L119/L128 examples and L154/L162/L163 family identity. Never copy L058 people identities. Not flat cartoon, simple wash, anime, 3D, photo, toddler or teenager. Recurring protagonist girl: short dark bob, small pink clip, pink cardigan over pale shirt, navy skirt, pink shoes, matching refined family reference face/age/proportions. Recurring HE sporty boy from L118-S02: short spiky dark hair, orange athletic T-shirt, navy shorts, red sneakers, green wristband. He tells a funny story with comical expressive hand gestures in classroom break. Protagonist girl and two visually distinct generic children laugh joyfully nearby, natural open smiles, no distress. Generic children in teal and yellow outfits, no glasses, no moon clips. Blank classroom boards, unmarked books. No readable text, letters, numbers, labels, logos, brands, cards, captions, speech balloons, watermarks, book titles or pseudo-writing anywhere.

### L367-S04 Prompt

Use case: illustration-story. One square phone-readable children's picture-book image. Match all five L058 style references: fine pencil-and-watercolor linework, detailed clean environment, bright varied warm palette, softly modeled natural faces and stable preschool proportions. Use refined L115/L118/L119/L128 examples and L154/L162/L163 family identity. Never copy L058 people identities. Not flat cartoon, simple wash, anime, 3D, photo, toddler or teenager. No people. Close child-eye view of a balcony flowering plant in plain terracotta pot. All leaves remain lush vividly green, but ALL flowers have faded and withered: drooping dry brownish petal heads and fallen faded pink petals below. Clear readable contrast of living green foliage and spent blossoms, no fresh blooming flowers. Clean balcony floor, soft daylight, leafy background, detailed pencil watercolor botanical texture. No readable text, letters, numbers, labels, logos, brands, cards, captions, speech balloons, watermarks, book titles or pseudo-writing anywhere.

### L367-S05 Prompt

Use case: illustration-story. One square phone-readable children's picture-book image. Match all five L058 style references: fine pencil-and-watercolor linework, detailed clean environment, bright varied warm palette, softly modeled natural faces and stable preschool proportions. Use refined L115/L118/L119/L128 examples and L154/L162/L163 family identity. Never copy L058 people identities. Not flat cartoon, simple wash, anime, 3D, photo, toddler or teenager. Recurring protagonist girl: short dark bob, small pink clip, pink cardigan over pale shirt, navy skirt, pink shoes, matching refined family reference face/age/proportions. Recurring mother: chin-length side-parted dark hair, warm natural adult face, ivory blouse/cardigan, blue jeans, matching family anchors, not teacher. At home low table the girl holds an offered plain plate with a small green vegetable bun she does not like. Her expression is mildly reluctant, polite small closed smile, not disgust or cruelty. Mother beside her leans gently and offers reassuring hand on shoulder, kindly reminding gratitude. No unhappy giver. Soft daylight, cozy clean room, restrained natural emotion. No readable text, letters, numbers, labels, logos, brands, cards, captions, speech balloons, watermarks, book titles or pseudo-writing anywhere.

## Audio Provenance

OpenAI gpt-4o-mini-tts, coral voice, via npm run ai:audio -- --lesson L367.
Five full sentence files use the exact approved spokenText. Standalone char-u8b1d is generated only from 謝.
G02 prefix is generated independently from 小光幫我找筆我跟他道. Target is final Han; suffix is empty and no empty suffix file is created.
G05 correct reuses the exact complete S05 audio; both wrong choices were generated independently from their full approved option texts.
Raw sources remain in ignored curriculum-workflow/audio-inbox/L367/; final package contains nine processed M4A files.

npm run assets:audio -- --lesson L367 processed all nine files. Trailing silence was detected at -45 dB and reduced with a 90 ms safety margin, preserving speech; no character extraction, joining or sentence splicing. Final processed audio was then AI-aligned.
Eight full sentence/fragment records have AI charTimings, including G02 prefixAudio and both G05 wrong-option audio metadata. Correct option metadata matches S05.
Standalone character duration: 1161 ms. G05 mean volume spread: 1.1 dB. All final audio decodes with ffmpeg, AAC mono 44100 Hz. Timing spans 120-570 ms; final timing ends are within 300 ms of file duration.

## Technical Checks

- git fetch origin; git status --short --branch: assigned worktree clean at start.
- npm run tools:check: PASS.
- npm run ai:check: PASS.
- npm run curriculum:audit-state: PASS on latest-main base.
- npm run curriculum:packet -- --request curriculum-workflow/lesson-requests/L367.json: PASS; authored final draft restored after scaffold generation.
- npm run assets:images -- --lesson L367 --remove-original: PASS, five final WebP references.
- npm run assets:audio -- --lesson L367: PASS, nine files.
- npm run assets:align:ai -- --lesson L367: PASS, eight aligned sentence/fragment records using temporary fixture.
- npm run validate:production: PASS on lesson-local fixture.
- npm run assets:audit -- --strict: PASS, five images/nine audio, zero warnings.
- npm run validate:curriculum: PASS on temporary full main + actual accepted L366 package draft + L367 fixture, 367 lessons. Advisory warning: G03 targets previous 笑 rather than current 謝, exactly as approved. Other warnings belong to existing lessons.
- Exact approved-field, allowed-character, coverage, line join/width, sentence usage, single-Han card, target index and wrong-option checks: PASS.
- ffmpeg decode, ffprobe duration/codec, image format/size, timing count/order/span/tail, G05 volume and standalone charAudio checks: PASS.
- Coverage: 謝 6, 吧 2, 但 2, 笑 2, 歡 1, 喜 2.
- Final media total: 1,105,890 bytes.
- Detailed durable evidence: L367-technical-qa.json and draft.productionQA.
- Full npm run verify skipped: dependency-blocked; shared-state integration and final verify belong to Release.
- npm run curriculum:package-intake -- --unit L367 --ref origin/codex/l367-complete-package: PASS on pushed package. Advisory: no explicit manual playback evidence; browser limitation recorded below.
- asset:review-status uses GitHub branch ref codex/l367-complete-package or full SHA, not local tracking prefix origin/.
- npm run asset:review-status -- --unit L367 --ref codex/l367-complete-package: command PASS; no teacher review document yet, expected for post-main review workflow.

## Shared Script Change

scripts/align-audio-timings-ai.mjs adds only standard simplified/traditional equivalences observed in L367 ASR: 绿→綠, 叶→葉, 谢→謝, 帮→幫, 欢→歡, 声→聲. Six mapping assertions and unrelated-character preservation assertions passed. No new homophone aliases or timing fabrication. Release should inspect this small shared change during integration.

## Playback QA Tooling

In-app browser was unavailable. Chrome navigation to the local L367-S01 M4A returned net::ERR_BLOCKED_BY_CLIENT. Phone-width playback/listening/highlight QA could not be completed with browser control; no listening PASS is claimed. Non-browser technical gates above are complete. Under current SOP this tooling limitation does not turn ordinary teacher subjective review into a pre-main gate.

## Release Handoff

Release owns ordered integration after L366, production JSON, planner export, ledger, registry cleanup, final verify and deployment.
Teacher review is post-main. Usable only after Release merges and deploys:
https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L367&ref=main
https://icelog-tu.github.io/character-recognition-dojo/tools/asset-review-index.html?ref=main
npm run asset:review-status -- --unit L367 --ref main

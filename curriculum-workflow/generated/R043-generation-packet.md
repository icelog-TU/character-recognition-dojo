# R043 Generation Packet

Production D; base debe8774. Dependencies L355-L360; locked ceiling L360. 30/30 pair coverage PASS.

## Final Approved Records

```json
{
  "approvedSentences": [
    {
      "id": "R043-S01",
      "text": "這個角落特別髒。",
      "spokenText": "這個角落特別髒",
      "focusChar": "落",
      "displayLines": [
        "這個角落",
        "特別髒。"
      ],
      "imageNotes": "房間或教室的一個角落特別髒，有灰塵、紙屑或亂放的小東西，其他地方相對乾淨。主角小女孩或老師看著這個角落。不要文字標籤。"
    },
    {
      "id": "R043-S02",
      "text": "今年天氣特別熱，原因不明。",
      "spokenText": "今年天氣特別熱原因不明",
      "focusChar": "原",
      "displayLines": [
        "今年天氣",
        "特別熱，",
        "原因不明。"
      ],
      "imageNotes": "今年夏天很熱的戶外場景，太陽很大，主角小女孩和家人或同學流汗、拿水或搧風。畫面只表現「天氣特別熱」，不要嘗試畫出抽象的「原因不明」，也不要加入文字、溫度數字或新聞字幕。"
    },
    {
      "id": "R043-S03",
      "text": "彩色筆請別到處亂放。",
      "spokenText": "彩色筆請別到處亂放",
      "focusChar": "請",
      "displayLines": [
        "彩色筆請",
        "別到處亂放。"
      ],
      "imageNotes": "家裡或教室桌邊，彩色筆散落在桌上、地上或椅子旁，主角媽媽或老師提醒主角小女孩不要亂放。畫面要清楚呈現「彩色筆到處亂放」。不要品牌、筆盒文字或標籤。"
    },
    {
      "id": "R043-S04",
      "text": "把房間整理好，全都放整齊。",
      "spokenText": "把房間整理好全都放整齊",
      "focusChar": "整",
      "displayLines": [
        "把房間",
        "整理好，",
        "全都放整齊。"
      ],
      "imageNotes": "主角小女孩正在整理房間，把書、玩具、衣服或盒子放回固定位置，房間看起來逐漸整齊。畫面要有「整理前後」或「正在整理」的感覺。不要文字標籤。"
    },
    {
      "id": "R043-S05",
      "text": "我們常跟爸爸去公園。",
      "spokenText": "我們常跟爸爸去公園",
      "focusChar": "常",
      "displayLines": [
        "我們常跟",
        "爸爸去公園。"
      ],
      "imageNotes": "主角小女孩和爸爸一起走在公園裡，像是熟悉、常去的親子活動。可以有樹、長椅、草地和步道。不要公園名稱、告示牌文字或標誌。"
    }
  ],
  "sentenceGames": [
    {
      "id": "R043-G01",
      "type": "find-character",
      "sentenceId": "R043-S01",
      "targetChar": "落",
      "targetCharIndex": 3,
      "prompt": "找到這個字，點一下。"
    },
    {
      "id": "R043-G02",
      "type": "teach-character",
      "sentenceId": "R043-S02",
      "targetChar": "原",
      "targetCharIndex": 7,
      "prompt": "幫忙說出這個字。",
      "teachAudio": {
        "prefixText": "今年天氣特別熱",
        "targetText": "原",
        "suffixText": "因不明",
        "prefixSrc": "/assets/reviews/R043/audio/R043-G02-prefix.m4a",
        "suffixSrc": "/assets/reviews/R043/audio/R043-G02-suffix.m4a"
      }
    },
    {
      "id": "R043-G03",
      "type": "missing-character",
      "sentenceId": "R043-S03",
      "targetChar": "請",
      "targetCharIndex": 3,
      "prompt": "補上不見的字。",
      "missingIndexes": [
        3
      ],
      "options": [
        {
          "id": "R043-G03-A",
          "text": "請",
          "correct": true
        }
      ]
    },
    {
      "id": "R043-G04",
      "type": "partial-order",
      "sentenceId": "R043-S04",
      "targetChar": "整",
      "prompt": "把句子排回正確順序。",
      "missingIndexes": [
        3,
        4,
        6,
        10
      ],
      "options": [
        {
          "id": "R043-G04-0",
          "text": "整",
          "correct": true,
          "correctOrder": 0
        },
        {
          "id": "R043-G04-1",
          "text": "理",
          "correct": true,
          "correctOrder": 1
        },
        {
          "id": "R043-G04-2",
          "text": "全",
          "correct": true,
          "correctOrder": 2
        },
        {
          "id": "R043-G04-3",
          "text": "齊",
          "correct": true,
          "correctOrder": 3
        }
      ]
    },
    {
      "id": "R043-G05",
      "type": "choose-pronunciation",
      "sentenceId": "R043-S05",
      "targetChar": "常",
      "targetCharIndex": 2,
      "prompt": "聽一聽，選出讀對的朋友。",
      "options": [
        {
          "id": "correct",
          "text": "我們常跟爸爸去公園。",
          "correct": true,
          "sentenceId": "R043-S05",
          "audioSrc": "/assets/reviews/R043/audio/R043-S05.m4a"
        },
        {
          "id": "wrong-one",
          "text": "我們常跟媽媽去公園。",
          "correct": false,
          "audioSrc": "/assets/reviews/R043/audio/R043-G05-wrong-one.m4a"
        },
        {
          "id": "wrong-two",
          "text": "我們常跟爸爸去花園。",
          "correct": false,
          "audioSrc": "/assets/reviews/R043/audio/R043-G05-wrong-two.m4a"
        }
      ]
    }
  ]
}
```

## Image Prompts

### R043-S01
Use case: illustration-story. Single square 1:1 warm detailed children picture-book scene, fine pencil-and-watercolor linework, L058 style-only references, refined preschool proportions and family identities from supplied reference sheet. Preserve cast identities, natural faces, warm light, bright nuanced palette, detailed clean environment and safe margins. No text, letters, numbers, signage, brands, logos or watermarks. Avoid flat cartoons, anime, photorealism, 3D, simplistic watercolor, generic round faces or redesigned cast. Protagonist girl with short dark bob, pink clip and cardigan, navy skirt looks toward a visibly very dirty corner of her warm room: dust, scraps and scattered small toys, while adjacent floor is clean.

### R043-S02
Use case: illustration-story. Single square 1:1 warm detailed children picture-book scene, fine pencil-and-watercolor linework, L058 style-only references, refined preschool proportions and family identities from supplied reference sheet. Preserve cast identities, natural faces, warm light, bright nuanced palette, detailed clean environment and safe margins. No text, letters, numbers, signage, brands, logos or watermarks. Avoid flat cartoons, anime, photorealism, 3D, simplistic watercolor, generic round faces or redesigned cast. Hot summer afternoon outdoors. Protagonist girl and recurring father sweat in strong warm sunlight; girl fans herself and father holds water. Clearly very hot weather without abstract explanation or temperature numerals.

### R043-S03
Use case: illustration-story. Single square 1:1 warm detailed children picture-book scene, fine pencil-and-watercolor linework, L058 style-only references, refined preschool proportions and family identities from supplied reference sheet. Preserve cast identities, natural faces, warm light, bright nuanced palette, detailed clean environment and safe margins. No text, letters, numbers, signage, brands, logos or watermarks. Avoid flat cartoons, anime, photorealism, 3D, simplistic watercolor, generic round faces or redesigned cast. Recurring mother with shoulder-length dark brown hair, ivory top and blue trousers gently reminds protagonist girl beside a home desk; unbranded colored pencils are scattered across desk, floor and chair.

### R043-S04
Use case: illustration-story. Single square 1:1 warm detailed children picture-book scene, fine pencil-and-watercolor linework, L058 style-only references, refined preschool proportions and family identities from supplied reference sheet. Preserve cast identities, natural faces, warm light, bright nuanced palette, detailed clean environment and safe margins. No text, letters, numbers, signage, brands, logos or watermarks. Avoid flat cartoons, anime, photorealism, 3D, simplistic watercolor, generic round faces or redesigned cast. Protagonist girl actively tidies her bedroom, placing books neatly on a shelf and toys into storage; visible contrast of few items awaiting sorting and orderly shelves.

### R043-S05
Use case: illustration-story. Single square 1:1 warm detailed children picture-book scene, fine pencil-and-watercolor linework, L058 style-only references, refined preschool proportions and family identities from supplied reference sheet. Preserve cast identities, natural faces, warm light, bright nuanced palette, detailed clean environment and safe margins. No text, letters, numbers, signage, brands, logos or watermarks. Avoid flat cartoons, anime, photorealism, 3D, simplistic watercolor, generic round faces or redesigned cast. Protagonist girl and recurring father with short dark hair, blue shirt and tan trousers walk together on a familiar green park path, benches, grass and trees.

## Original Teacher Activation Handoff

你是 Production D，收到後請直接 claim 並開始製作 R043/R044 複習課完整 production package。

Repo:
https://github.com/icelog-TU/character-recognition-dojo

Assigned worktree:
C:\Users\User\Documents\Codex\2026-08-03\a000-sop\worktrees\parallel-d

Slot note:
Teacher says Production D has recovered. This R043/R044 handoff is assigned to Production D.

Unit:
- ids: R043 / R044
- kind: review modules
- title:
  - R043: 複習四十三
  - R044: 複習四十四
- afterLessonOrder: 360
- targetLessonRange: L331-L360
- Review modules introduce no new characters and have no charAudio.

Latest origin/main boundary used by Editor:
- origin/main: aa1144e3 Integrate lesson L354
- Formal production curriculum: L001-L354
- Latest formal lesson: L354「排」
- latest review: R042 複習四十二, afterLessonOrder=345

Dependencies:
- dependsOnLessons: [L355「雞」, L356「公」, L357「園」, L358「物」, L359「怪」, L360「奇」]
- provisionalLearnedChars: [雞, 公, 園, 物, 怪, 奇]
- Release/main blocker note: R043/R044 are the review pair after L360. Production D should still claim and build the package now, but Release must integrate L355-L360 before R043/R044 can enter main. R043/R044 must enter main before L361.
- Known branch snapshot at Editor handoff time:
  - origin/codex/l355-complete-package = 0c2883b0 Build L355 lesson package
  - origin/codex/l356-complete-package = 9c30a88a Build L356 lesson package
  - origin/codex/l357-complete-package = 4cc4a7ed Build L357 package pending short-audio and playback QA
  - origin/codex/l358-complete-package = f37c6c4c Record pushed L358 audio QA checkpoint
  - origin/codex/l359-complete-package = df0216e6 Build L359 lesson package
  - origin/codex/l360-complete-package = 04992fe4 Build L360 assets and draft pending timing and playback QA
  - origin/codex/r043-r044-complete-package: not found at Editor check time

Review coverage target:
R043/R044 together must cover every new character from L331-L360 exactly as review target coverage:
落 因 原 別 特 處 理 整 齊 全 今 們 年 跟 常 請 嗎 客 讓 廳 餐 位 正 排 雞 公 園 物 怪 奇

Locked allowedChars:
Use characters learned through L360: latest origin/main learned chars through L354 plus provisionalLearnedChars [雞, 公, 園, 物, 怪, 奇].
Allowed audit PASS for all approved R043/R044 sentence text, spokenText, displayLines, focusChar, Stage 4 option cards, and G05 wrong-choice texts.

Editor 30/30 coverage result:
落 1, 因 1, 原 1, 別 3, 特 2, 處 1, 理 1, 整 2, 齊 1, 全 1, 今 1, 們 1, 年 1, 跟 1, 常 1, 請 2, 嗎 1, 客 3, 讓 1, 廳 2, 餐 1, 位 1, 正 1, 排 1, 雞 1, 公 2, 園 2, 物 2, 怪 1, 奇 1.
30/30 coverage PASS.

Approved R043 sentences:

R043-S01
text: 這個角落特別髒。
spokenText: 這個角落特別髒
focusChar: 落
displayLines:
- 這個角落
- 特別髒。
imageNotes: 房間或教室的一個角落特別髒，有灰塵、紙屑或亂放的小東西，其他地方相對乾淨。主角小女孩或老師看著這個角落。不要文字標籤。

R043-S02
text: 今年天氣特別熱，原因不明。
spokenText: 今年天氣特別熱原因不明
focusChar: 原
displayLines:
- 今年天氣
- 特別熱，
- 原因不明。
imageNotes: 今年夏天很熱的戶外場景，太陽很大，主角小女孩和家人或同學流汗、拿水或搧風。畫面只表現「天氣特別熱」，不要嘗試畫出抽象的「原因不明」，也不要加入文字、溫度數字或新聞字幕。

R043-S03
text: 彩色筆請別到處亂放。
spokenText: 彩色筆請別到處亂放
focusChar: 請
displayLines:
- 彩色筆請
- 別到處亂放。
imageNotes: 家裡或教室桌邊，彩色筆散落在桌上、地上或椅子旁，主角媽媽或老師提醒主角小女孩不要亂放。畫面要清楚呈現「彩色筆到處亂放」。不要品牌、筆盒文字或標籤。

R043-S04
text: 把房間整理好，全都放整齊。
spokenText: 把房間整理好全都放整齊
focusChar: 整
displayLines:
- 把房間
- 整理好，
- 全都放整齊。
imageNotes: 主角小女孩正在整理房間，把書、玩具、衣服或盒子放回固定位置，房間看起來逐漸整齊。畫面要有「整理前後」或「正在整理」的感覺。不要文字標籤。

R043-S05
text: 我們常跟爸爸去公園。
spokenText: 我們常跟爸爸去公園
focusChar: 常
displayLines:
- 我們常跟
- 爸爸去公園。
imageNotes: 主角小女孩和爸爸一起走在公園裡，像是熟悉、常去的親子活動。可以有樹、長椅、草地和步道。不要公園名稱、告示牌文字或標誌。

Approved R044 sentences:

R044-S01
text: 客人到了，請讓客人進客廳。
spokenText: 客人到了請讓客人進客廳
focusChar: 讓
displayLines:
- 客人到了，
- 請讓客人
- 進客廳。
imageNotes: 主角家門口，客人剛到，主角媽媽或爸爸請主角小女孩開門或讓客人進到客廳。畫面要看得出客人正在進入家中客廳。不要門牌號碼或文字。

R044-S02
text: 這家餐廳正好有位子。
spokenText: 這家餐廳正好有位子
focusChar: 餐
displayLines:
- 這家餐廳
- 正好有位子。
imageNotes: 餐廳裡或入口等候區，主角小女孩和家人看到剛好有空桌或空位子，可以坐下用餐。不要可讀菜單、店名、號碼牌或價格。

R044-S03
text: 公園裡有一排長椅。
spokenText: 公園裡有一排長椅
focusChar: 排
displayLines:
- 公園裡有
- 一排長椅。
imageNotes: 公園步道旁有一排長椅整齊排列，周圍有樹、花草和開放空間。畫面要清楚看出「一排長椅」。不要告示牌文字或標誌。

R044-S04
text: 小雞也是動物，對嗎？
spokenText: 小雞也是動物對嗎
focusChar: 雞
displayLines:
- 小雞也是
- 動物，對嗎？
imageNotes: 主角小女孩看著幾隻小雞，旁邊可以有其他常見小動物的圖像或安全觀察區，讓畫面表達「小雞也是動物」。可以是親子或老師引導觀察的場景。不要文字標籤。

R044-S05
text: 小月對怪物玩具很好奇。
spokenText: 小月對怪物玩具很好奇
focusChar: 奇
displayLines:
- 小月對
- 怪物玩具
- 很好奇。
imageNotes: 小月看著桌上或地上的怪物玩具，露出好奇表情。怪物玩具要可愛、不恐怖，明顯是玩具。小月必須使用固定角色 reference：public/assets/reference/lesson-cast/xiaoyue.webp，不能畫成主角女孩或 generic classmate。

Han counts:
- R043-S01: 7
- R043-S02: 11
- R043-S03: 9
- R043-S04: 11
- R043-S05: 9
- R044-S01: 11
- R044-S02: 9
- R044-S03: 8
- R044-S04: 8
- R044-S05: 10
No sentence exceeds 12 Han characters.

DisplayLines self-check:
- R043-S01 join PASS; line lengths 4 / 4
- R043-S02 join PASS; line lengths 4 / 4 / 5
- R043-S03 join PASS; line lengths 4 / 6
- R043-S04 join PASS; line lengths 3 / 4 / 6
- R043-S05 join PASS; line lengths 4 / 6
- R044-S01 join PASS; line lengths 5 / 4 / 4
- R044-S02 join PASS; line lengths 4 / 6
- R044-S03 join PASS; line lengths 4 / 5
- R044-S04 join PASS; line lengths 4 / 6
- R044-S05 join PASS; line lengths 3 / 4 / 4

Stage 4 plan:
Use fixed sentence-game order for each review module. Use each reviewed sentence exactly once per module.

R043 Stage 4:
R043-G01 find-character
- sentenceId: R043-S01
- targetChar: 落
- targetCharIndex: 3

R043-G02 teach-character
- sentenceId: R043-S02
- targetChar: 原
- targetCharIndex: 7
- teachAudio prefix: 今年天氣特別熱
- teachAudio target: 原
- teachAudio suffix: 因不明

R043-G03 missing-character
- sentenceId: R043-S03
- targetChar: 請
- targetCharIndex: 3

R043-G04 partial-order
- sentenceId: R043-S04
- missingIndexes: [3, 4, 6, 10]
- option cards, single Han only:
  - text: 整, correctOrder: 0
  - text: 理, correctOrder: 1
  - text: 全, correctOrder: 2
  - text: 齊, correctOrder: 3

R043-G05 choose-pronunciation
- sentenceId: R043-S05
- correct text: 我們常跟爸爸去公園。
- targetChar: 常
- targetCharIndex: 2
- wrong choice 1 full text: 我們常跟媽媽去公園。
- wrong choice 2 full text: 我們常跟爸爸去花園。

R044 Stage 4:
R044-G01 find-character
- sentenceId: R044-S05
- targetChar: 奇
- targetCharIndex: 9

R044-G02 teach-character
- sentenceId: R044-S01
- targetChar: 讓
- targetCharIndex: 5
- teachAudio prefix: 客人到了請
- teachAudio target: 讓
- teachAudio suffix: 客人進客廳

R044-G03 missing-character
- sentenceId: R044-S03
- targetChar: 排
- targetCharIndex: 5

R044-G04 partial-order
- sentenceId: R044-S04
- missingIndexes: [0, 1, 2, 3]
- option cards, single Han only:
  - text: 小, correctOrder: 0
  - text: 雞, correctOrder: 1
  - text: 也, correctOrder: 2
  - text: 是, correctOrder: 3

R044-G05 choose-pronunciation
- sentenceId: R044-S02
- correct text: 這家餐廳正好有位子。
- targetChar: 餐
- targetCharIndex: 2
- wrong choice 1 full text: 這家飯店正好有位子。
- wrong choice 2 full text: 這家餐廳正好有椅子。

Stage 4 index self-check:
- R043-G01 / S01: Han = 這[0] 個[1] 角[2] 落[3] 特[4] 別[5] 髒[6]; targetChar 落, targetCharIndex 3, Han[3]=落, PASS.
- R043-G02 / S02: Han = 今[0] 年[1] 天[2] 氣[3] 特[4] 別[5] 熱[6] 原[7] 因[8] 不[9] 明[10]; targetChar 原, targetCharIndex 7, Han[7]=原, PASS.
- R043-G03 / S03: Han = 彩[0] 色[1] 筆[2] 請[3] 別[4] 到[5] 處[6] 亂[7] 放[8]; targetChar 請, targetCharIndex 3, Han[3]=請, PASS.
- R043-G04 / S04 partial-order: Han = 把[0] 房[1] 間[2] 整[3] 理[4] 好[5] 全[6] 都[7] 放[8] 整[9] 齊[10]; missingIndexes [3,4,6,10] = 整/理/全/齊; options are single-Han cards; correctOrder mapping PASS.
- R043-G05 / S05: Han = 我[0] 們[1] 常[2] 跟[3] 爸[4] 爸[5] 去[6] 公[7] 園[8]; targetChar 常, targetCharIndex 2, Han[2]=常, PASS. Both wrong choices are 9 Han characters and contain only allowed chars, PASS.
- R044-G01 / S05: Han = 小[0] 月[1] 對[2] 怪[3] 物[4] 玩[5] 具[6] 很[7] 好[8] 奇[9]; targetChar 奇, targetCharIndex 9, Han[9]=奇, PASS.
- R044-G02 / S01: Han = 客[0] 人[1] 到[2] 了[3] 請[4] 讓[5] 客[6] 人[7] 進[8] 客[9] 廳[10]; targetChar 讓, targetCharIndex 5, Han[5]=讓, PASS.
- R044-G03 / S03: Han = 公[0] 園[1] 裡[2] 有[3] 一[4] 排[5] 長[6] 椅[7]; targetChar 排, targetCharIndex 5, Han[5]=排, PASS.
- R044-G04 / S04 partial-order: Han = 小[0] 雞[1] 也[2] 是[3] 動[4] 物[5] 對[6] 嗎[7]; missingIndexes [0,1,2,3] = 小/雞/也/是; options are single-Han cards; correctOrder mapping PASS.
- R044-G05 / S02: Han = 這[0] 家[1] 餐[2] 廳[3] 正[4] 好[5] 有[6] 位[7] 子[8]; targetChar 餐, targetCharIndex 2, Han[2]=餐, PASS. Both wrong choices are 9 Han characters and contain only allowed chars, PASS.

Audio requirements:
- Generate sentence audio for all R043-S01 through R044-S05 from exact spokenText.
- Review modules have no standalone charAudio.
- Generate G02 teach audio from exact prefix/target/suffix fragments above for R043-G02 and R044-G02.
- Generate G05 wrong-choice audio from the full wrong texts above for R043-G05 and R044-G05.
- Use OpenAI audio and repo audio/alignment commands from SOP.
- Generate AI alignment / charTimings for all required sentence and Stage 4 audio.

Image style and cast requirements:
Production must follow docs/CURRICULUM_PRODUCTION_SOP.md and docs/LESSON_VISUAL_CAST_SOP.md before generating or accepting any image.

Use the approved L058 lesson images as the mandatory style reference set:
- public/assets/lessons/L058/images/L058-S01.webp
- public/assets/lessons/L058/images/L058-S02.webp
- public/assets/lessons/L058/images/L058-S03.webp
- public/assets/lessons/L058/images/L058-S04.webp
- public/assets/lessons/L058/images/L058-S05.webp

L058 is style-only: pencil-and-watercolor linework, warm natural light, bright warm palette, detailed but clean environments, expressive preschool proportions, soft natural faces, consistent face/body proportions, and phone-readable square composition. Do not copy any L058 person identity.

Also use refined preferred examples from docs/LESSON_VISUAL_CAST_SOP.md:
- public/assets/lessons/L115/images/L115-S01.webp
- public/assets/lessons/L115/images/L115-S02.webp
- public/assets/lessons/L118/images/L118-S02.webp
- public/assets/lessons/L119/images/L119-S01.webp
- public/assets/lessons/L128/images/L128-S03.webp

For recurring cast identity:
- When a sentence uses 我 / 我們 or shows the protagonist household, use the recurring protagonist girl and protagonist family identity.
- When a sentence uses 小月, use public/assets/reference/lesson-cast/xiaoyue.webp.
- Teacher, mother, father, generic students, 小月, 小光, and the protagonist girl must remain visually distinct.
- Generic classmates must not be accidentally reused as 小月 or 小光.

Required files to create/update for package:
- curriculum-workflow/review-requests/R043.json
- curriculum-workflow/review-requests/R044.json
- curriculum-workflow/generated/R043-generation-packet.md
- curriculum-workflow/generated/R044-generation-packet.md
- curriculum-workflow/drafts/R043-draft.json
- curriculum-workflow/drafts/R044-draft.json
- public/assets/reviews/R043/images/R043-S01.webp through R043-S05.webp
- public/assets/reviews/R044/images/R044-S01.webp through R044-S05.webp
- public/assets/reviews/R043/audio/...
- public/assets/reviews/R044/audio/...
- src/curriculum/sample-lessons.json only as needed for the review package workflow expected by SOP
- docs/PARALLEL_LESSON_REGISTRY.md

Required checks before final Production report:
- npm run tools:check
- npm run ai:check
- npm run curriculum:audit-state
- Run the applicable review/package validation commands from docs/CURRICULUM_PRODUCTION_SOP.md.
- Verify milestone range L331-L360, allowed-character ceiling through L360, 30/30 review coverage, spokenText, displayLines joins, Stage 4 indexes, partial-order single-Han cards, G05 wrong texts, image existence, audio existence, and alignment/charTimings.
- Open final WebP files and perform style-lock/cast checks against required references.

Review URLs:
Post-merge teacher review, after Release merges to main and Pages deploys:
- https://icelog-tu.github.io/character-recognition-dojo/tools/review-asset-review.html?unit=R043&ref=main
- https://icelog-tu.github.io/character-recognition-dojo/tools/review-asset-review.html?unit=R044&ref=main
- npm run asset:review-status -- --unit R043 --ref main
- npm run asset:review-status -- --unit R044 --ref main

Pre-merge package preview may be reported only after the package branch is pushed, labeled exactly as pre-merge package preview, not final main review queue:
- https://icelog-tu.github.io/character-recognition-dojo/tools/review-asset-review.html?unit=R043&ref=codex%2Fr043-r044-complete-package
- https://icelog-tu.github.io/character-recognition-dojo/tools/review-asset-review.html?unit=R044&ref=codex%2Fr043-r044-complete-package

Auto-claim-and-continue:
1. Confirm you are in the assigned worktree:
   C:\Users\User\Documents\Codex\2026-08-03\a000-sop\worktrees\parallel-d
2. Run startup checks from docs/PROJECT_HANDOFF_SOP.md.
3. Stop if the assigned worktree is dirty, startup checks fail, approved review sentence data is missing, dependency/allowed-character audit fails, or the registry cannot be updated before large asset work.
4. If clean, create the branch from latest origin/main:
   git switch -c codex/r043-r044-complete-package origin/main
5. Add/update exactly one row in docs/PARALLEL_LESSON_REGISTRY.md with status claimed for R043/R044.
6. Continue directly into the full package: request, packet, draft, images, audio, Stage 4 audio, alignment, validation, commit, and pushed package branch.

Final Production report must include:
- Package branch name: codex/r043-r044-complete-package
- Full pushed tip commit SHA
- Whether this is dependency-blocked-asset-complete or merge-ready
- Dependency status for L355「雞」, L356「公」, L357「園」, L358「物」, L359「怪」, and L360「奇」
- Validation command results
- 30/30 review coverage result
- Per-image final result:
  - R043-S01 style-lock PASS/FAIL, cast PASS/FAIL
  - R043-S02 style-lock PASS/FAIL, cast PASS/FAIL
  - R043-S03 style-lock PASS/FAIL, cast PASS/FAIL
  - R043-S04 style-lock PASS/FAIL, cast PASS/FAIL
  - R043-S05 style-lock PASS/FAIL, cast PASS/FAIL
  - R044-S01 style-lock PASS/FAIL, cast PASS/FAIL
  - R044-S02 style-lock PASS/FAIL, cast PASS/FAIL
  - R044-S03 style-lock PASS/FAIL, cast PASS/FAIL or cast N/A
  - R044-S04 style-lock PASS/FAIL, cast PASS/FAIL
  - R044-S05 style-lock PASS/FAIL, cast PASS/FAIL
- Any rejected/regenerated draft images
- Pre-merge package preview URLs labeled as pre-merge package preview, not final main review queue

## Production QA checkpoint (authoritative current status)

```json
{
  "date": "2026-09-15",
  "status": "partial-package",
  "technicalFormats": "PASS: 10 WebP / 18 processed AAC m4a, 44100Hz mono; ffmpeg decode 18/18; strict format audit zero warnings; G05 loudness spread passes",
  "structure": "PASS: allowed ceiling L360, pair coverage 30/30, exact approved text/spokenText/displayLines, game indexes/cards/options; in-memory curriculum validation with six dependency drafts",
  "imageStyleAndCast": {
    "R043-S01": {
      "styleLock": "PASS",
      "cast": "PASS"
    },
    "R043-S02": {
      "styleLock": "PASS",
      "cast": "PASS"
    },
    "R043-S03": {
      "styleLock": "PASS",
      "cast": "PASS"
    },
    "R043-S04": {
      "styleLock": "PASS",
      "cast": "PASS"
    },
    "R043-S05": {
      "styleLock": "PASS",
      "cast": "PASS"
    }
  },
  "imageReferences": "Complete L058 S01-S05 style-only, L115 S01/S02, L118 S02, L119 S01, L128 S03, L154 S01, L162 S04, L163 S02 family, xiaoyue.webp; visually checked final WebPs via contact sheets and full images",
  "folderBytes": 1395993,
  "timingFindings": [
    "R043-S01 特[4] 1700-1720 (20ms)",
    "R043-S01 measured duration minus last AI end = 859ms; listen/trim or repair alignment",
    "R043-S02 measured duration minus last AI end = 2021ms; listen/trim or repair alignment",
    "R043-S03 請[3] 1560-1561 (1ms)",
    "R043-S03 overlap at 4",
    "R043-S03 measured duration minus last AI end = 2472ms; listen/trim or repair alignment",
    "R043-S04 measured duration minus last AI end = 556ms; listen/trim or repair alignment",
    "R043-S05 measured duration minus last AI end = 590ms; listen/trim or repair alignment",
    "R043-G02-prefix measured duration minus last AI end = 814ms; listen/trim or repair alignment",
    "R043-G02-suffix measured duration minus last AI end = 959ms; listen/trim or repair alignment",
    "R043-G05-wrong-one measured duration minus last AI end = 898ms; listen/trim or repair alignment",
    "R043-G05-wrong-two measured duration minus last AI end = 904ms; listen/trim or repair alignment"
  ],
  "manualPlaybackQa": "PENDING; no teacher approval for R043/R044. L354 approval does not apply.",
  "release": "BLOCKED: unresolved timing/tail QA plus L355-L360 dependencies. Not asset-complete, not merge-ready.",
  "repairPlan": "Listen against final audio; repair the impossible R043 S01/S03 boundaries based on heard syllables, verify actual final-syllable endpoint before trimming tails, rerun AI alignment after audio edits, then mobile sentence and G02/G05 playback/recording QA."
}
```

See R043-R044-package-notes.md and R043-R044-technical-report.json. Original handoff URLs below/above are historical; use lesson-asset-review.html with the pushed immutable SHA.

## Browser attempt after checkpoint push

```json
{
  "attemptedSha": "db22ca7f407307bab2d81b7b8eb0c4528201bd45",
  "exactUrl": "https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=R043&ref=db22ca7f407307bab2d81b7b8eb0c4528201bd45",
  "loaded": "R043: five sentence cards and five extra audio entries loaded",
  "failure": "First R043-S01 Play click: inspected target navigated or closed; tab inventory confirms This page crashed. No successful audible playback, highlighting, microphone recording or stitched replay QA.",
  "teacherManualQa": "NOT performed; no PASS; technical timing/tail gate still fails. Do not promote via fallback."
}
```

# L381 Production Generation Packet

Status: dependency-blocked-asset-complete. Production B, codex/l381-complete-package. Normal single-character lesson 傳 (ㄔㄨㄢˊ), not a two-character pilot.

Production B; normal single-character L381, 傳 ㄔㄨㄢˊ throughout. Branch base 636682d9a31600a5f5e02faba0c942e17b5fb103, formal through L373 at claim. Dependency recheck 250ca4a3361a15104ba19158bb1b0710dac43ecc: formal L001-L375 (379 unique Han). L375 經 is now formal vocabulary, outside previous-five coverage; it was provisional at start. Actual remaining learner-character dependencies L376-L380: 已/近/接/送/連. Allowed 385 from latest formal set plus these five plus 傳, no later characters. R045/R046 remain Release playable blockers after L375, cover L346-L375 with ceiling L375; Release order R045 -> R046 -> L376-L380 -> L381. S04 speaker 我 is mother; girl relays to absent father, other 我 remains girl. Stage 2 exactly three 傳 plus three old cards, three taps, no pilot exception. G03 exactly three distinct single-Han choices 傳/說/聽. Browser QA: phone 390x844 Stage 1 target/zhuyin, standalone playback, Stage 2 six cards and 1/3 -> 2/3 -> 3/3 completion, all five Stage 3 playbacks/highlights, G03 wrong choices/reveal/retry, G04 ordering, G05 all three option playbacks and selection checked. Tablet 768x1024 G03 and reward navigation checked. First reward and repeated reward/replay retained 150 coins/48 stars after initial award from 120/36; red next and white home buttons visible with floating toolbar. Isolated QA used prerequisite metadata and QA-only next entry; G02 was skipped via existing UI for navigation testing, not counted as recording QA. Browser control has no timed pointer-hold/release method, so Release must supplement G02 real microphone recording, bell-to-record order and child-audio insertion/replay. Exact G02 prefix/suffix transcripts, final M4A decode/volume/timings pass. One Playwright CDP click timeout recovered using accessibility click. Development React setState-in-render warning observed in existing FindManyChallenge; Stage 2 behavior remained correct. No shared app/curriculum state changed.

## Locked Character Boundary

Allowed 385 characters, mechanically extracted from the recheck production JSON plus provisional 已/近/接/送/連 and current 傳. Exact ordered set:

一二三人個大的小手我有山上下你水在高很家和隻鳥孩指看女飛男門前後也是不到走他沒裡兩狗都爸媽愛書可會這吃做好樣要更邊多少比來起去坐站開左著拿包花朵了畫出學路誰校問找同帶筆借那本給紙心放把桌子盒掉壞眼用鏡鼻臉紅圓太難得過分幾點玩打球棒頭帽草地面外空天雨雲黑白棋鞋穿戴衣脫氣套熱冷喝飯菜老卻麼什為以怎所房間時還燈關窗車等再風吹樹動葉綠滿掃擦先洗又髒亂回就快事跑馬停叫聲聽見說師話課像想真力能火發電生明光亮陽月影長星行道流河從進早晚海船魚游泳池身濕乾服褲換改錯知認新舊半只剩夠錢買貴賣店場市夜具工作忙幫急腳步跳床搬重沙張椅累死睡倒病假才剛裝養休息久體神精變差緊卡住蓋橋座木積堆洞破口傷皮痛受忍耐敢當然怕哭被嚇罵對爬蟲條泥土種澆照顧忘每次記完收彩色粉哪些最西東方圖向線直轉右角落因原別特處理整齊全今們年跟常請嗎客讓廳餐位正排雞公園物怪奇驚喜歡笑但吧謝感情朋友親交通往經已近接送連傳

Coverage (formal sentences only): 傳4/3, 連2/2, 送2/2, 接2/2, 近1/1, 已1/1. 經1 is previous-six vocabulary only, formal at recheck, provisional at claim. All five sentences have 10 Han; allowed sweep, spokenText, displayLines join/6-visible-character limit, game indexes, G03 unique three cards, G04 single-Han order, G05 complete exact texts PASS. Sentence order in games S01/S02/S04/S03/S05; fixed five modes preserved.

## Image Acceptance

All five images newly generated using L058 full reference group for style only, refined L115/L118/L119/L128 examples and L154/L162/L163 family anchors. Reuse decision: no exact approved action/object/cast match identified; no lesson image reused. Final WebPs individually opened and compared side-by-side with references. No rejected image versions shipped.

| Image | Style lock | Cast | Semantic review |
| --- | --- | --- | --- |
| S01 | PASS | PASS | One soft ball held by girl, father facing her after passing. |
| S02 | PASS | PASS | Tablet drawing and father avatar; mother/girl present, father absent; digital sending. |
| S03 | PASS | PASS | Ceiling light off, battery lamp illuminates faces/book, mild frustration, night readable. |
| S04 | PASS | PASS | Mother speaks while working, girl holds phone to absent father; meal not delivered. |
| S05 | PASS | PASS | Father and fixed older brother laugh inside room; girl outside hears them, no mocking. |

No readable writing, logos or numeric marks. Five 1024-square WebPs total 731310 bytes, each 115972-174568 bytes, below 250 KiB target. Ten M4As total 396208 bytes; whole shipping asset folder 1127518 bytes (1.075 MiB), below 2.0 MiB target.

## Audio And Alignment

OpenAI gpt-4o-mini-tts/coral, natural Taiwan Mandarin; 傳 instructed ㄔㄨㄢˊ. Standalone 傳 generated from one character. All five spokenText sentences, two exact G02 fragments and two full wrong texts independently generated. S01 regenerated in full once after an initial ASR mismatch, then matched; no cuts or patches. Raw inbox remains local/ignored per repository workflow, no raw MP3 or source PNG shipped.

Final mono AAC 44100 Hz M4A files decode through ffmpeg. Character 1207 ms, mean -19.9 dB, peak -2.0 dB. All reference audio mean >= -28 dB and peak >= -12 dB. G05 mean spread 1.1 dB. AI alignment used final processed audio: five 10-item charTimings; G02 prefix5/suffix4; wrong options10 each. Exact transcripts match after simplified-to-traditional orthographic normalization only, not homophone substitutions. Both suffix 爸 syllables retained. See L381-technical-qa.json for durations, levels, hashes, dimensions and byte sizes.

## Browser QA

See L381-ui-qa.json for phone/tablet evidence and exact fixture scope. Stage 1/2/3, G01, G03/G04/G05 and reward navigation checked. Real G02 microphone hold/replay remains a Release supplemental check due to browser tooling's missing timed pointer hold API; technical audio checks passed, and no synthetic recording or completion injection was used. G02 skipped through existing UI only for reward navigation test. A single CDP click timeout recovered through accessibility action. Existing FindManyChallenge React development warning recorded; actual target-card behavior correct. Teacher subjective asset review remains post-main.

## Validation Commands

Startup and closing tools:check, ai:check, curriculum:audit-state run. Audit-state reports branch L373 baseline and expected L381-not-integrated warning, not latest-main truth. curriculum:packet --request generated initial packet; approved final records restored before generation. Lesson-local adapter runs unchanged repo ai audio, assets:audio and assets:align:ai scripts sequentially, redirecting shared JSON writes to the owned draft:

- node curriculum-workflow/generated/L381-pipeline.cjs generate
- node curriculum-workflow/generated/L381-pipeline.cjs process
- node curriculum-workflow/generated/L381-pipeline.cjs align
- node curriculum-workflow/generated/L381-pipeline.cjs formats (strict, 1 unit/5 images/10 audio, zero warnings)
- node curriculum-workflow/generated/L381-pipeline.cjs production
- node curriculum-workflow/generated/L381-audit.cjs --final
- npm run validate:production (branch baseline, does not substitute for local audit)
- npm run assets:audit (branch baseline: 417 units, 2044 image references, 4047 audio references, zero warnings, PASS)
- git diff --stat; git diff --name-only; git diff --check
- Post-push: npm run curriculum:package-intake -- --unit L381 --ref origin/codex/l381-complete-package

Release owns production JSON/planner/ledger, milestone review integration, final verify, push main and deployment. Full npm run verify intentionally reserved for Release integration. Only owned L381 package files, scripts/reports and registry row are committed. No local fixture or raw media committed.

## Review Routing

Pre-merge package preview uses the full pushed commit SHA in final handoff and is labeled: pre-merge package preview, not final main review queue.

After Release merges and deploys: https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L381&ref=main

Post-merge status: npm run asset:review-status -- --unit L381 --ref main

## Final Aligned Draft
```json
{
  "id": "L381",
  "order": 381,
  "title": "傳",
  "newChars": [
    "傳"
  ],
  "zhuyin": {
    "傳": "ㄔㄨㄢˊ"
  },
  "charAudio": {
    "傳": "/assets/lessons/L381/audio/char-u50b3.m4a"
  },
  "requiredRounds": 5,
  "dependsOnLessons": [
    "L376",
    "L377",
    "L378",
    "L379",
    "L380"
  ],
  "provisionalLearnedChars": [
    "已",
    "近",
    "接",
    "送",
    "連"
  ],
  "packageStatus": "dependency-blocked-asset-complete",
  "sentences": [
    {
      "id": "L381-S01",
      "text": "球一傳來，我就連忙接住。",
      "spokenText": "球一傳來我就連忙接住",
      "focusChar": "傳",
      "displayLines": [
        "球一傳來，",
        "我就連忙",
        "接住。"
      ],
      "imageNotes": "安全的草地活動空間，主角爸爸剛把柔軟的球傳給主角女孩。女孩迅速伸出雙手，球剛落入她手中，她正把球穩穩接住；爸爸在對面保留傳球後的手勢。兩人面向彼此，球、雙手及接球動作清楚可見。\r\n配圖限制：只畫一顆球，不用箭頭或連續殘影；不能畫成球仍遠離女孩、撞臉、女孩跌倒或危險硬球飛擊。主角爸爸與女孩沿用固定家庭身份，不換成老師或generic人物。",
      "imagePrompt": "Square 1:1 1024px modern Taiwan children's picture-book illustration. Match the supplied L058 style-only anchors: detailed warm pencil-and-watercolor, softly textured paper, natural faces, preschool proportions, warm natural light, rich clean environments. Use refined L115/L118/L119/L128 proportions and L154/L162/L163 family identity, not generic cartoon/anime/3D/photo. Girl: short dark bob, pink clip, pink cardigan, cream shirt, navy skirt, pink shoes. Mother: shoulder-length dark brown hair, cream blouse/cardigan, blue long skirt, natural adult face. Father: short side-parted dark hair, blue overshirt, cream shirt, dark trousers. Older brother: school-age slightly taller child, neat dark hair, blue-gray striped shirt, navy shorts, distinct from sky-blue/green 你. No readable text, letters, numbers, logos, watermark, labels, arrows, motion trails, sound lines. Phone-readable composition and safe margins. Reference sheet top row all five L058 style-only; middle row refined examples; bottom row first three family anchors.\n安全的草地活動空間，主角爸爸剛把柔軟的球傳給主角女孩。女孩迅速伸出雙手，球剛落入她手中，她正把球穩穩接住；爸爸在對面保留傳球後的手勢。兩人面向彼此，球、雙手及接球動作清楚可見。\r\n配圖限制：只畫一顆球，不用箭頭或連續殘影；不能畫成球仍遠離女孩、撞臉、女孩跌倒或危險硬球飛擊。主角爸爸與女孩沿用固定家庭身份，不換成老師或generic人物。",
      "imageSrc": "/assets/lessons/L381/images/L381-S01.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L381/audio/L381-S01.m4a",
        "durationMs": 3467,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 460
          },
          {
            "charIndex": 1,
            "startMs": 460,
            "endMs": 880
          },
          {
            "charIndex": 2,
            "startMs": 880,
            "endMs": 1200
          },
          {
            "charIndex": 3,
            "startMs": 1200,
            "endMs": 1500
          },
          {
            "charIndex": 4,
            "startMs": 1780,
            "endMs": 1980
          },
          {
            "charIndex": 5,
            "startMs": 1980,
            "endMs": 2180
          },
          {
            "charIndex": 6,
            "startMs": 2180,
            "endMs": 2540
          },
          {
            "charIndex": 7,
            "startMs": 2540,
            "endMs": 2760
          },
          {
            "charIndex": 8,
            "startMs": 2760,
            "endMs": 3020
          },
          {
            "charIndex": 9,
            "startMs": 3020,
            "endMs": 3200
          }
        ]
      }
    },
    {
      "id": "L381-S02",
      "text": "我已經把圖傳送給爸爸。",
      "spokenText": "我已經把圖傳送給爸爸",
      "focusChar": "傳",
      "displayLines": [
        "我已經把圖",
        "傳送給爸爸。"
      ],
      "imageNotes": "家中，主角女孩在媽媽陪同下使用平板，螢幕顯示她畫的彩色圖畫，以及一個小型、無文字的爸爸頭像；圖片已出現在對話區，女孩開心地指給媽媽看。平板角度與畫面大小要讓人能辨認她正在傳送圖片，但不讓螢幕壓過人物主體。\r\n配圖限制：爸爸不在現場，這是透過裝置傳送，不是親手把紙張交給爸爸。介面無品牌、文字、時間、數字或可讀按鈕標籤；可用圖片縮圖與爸爸頭像表意，不仿製具品牌辨識度的通訊軟體介面，不增加文字「已傳送」。",
      "imagePrompt": "Square 1:1 1024px modern Taiwan children's picture-book illustration. Match the supplied L058 style-only anchors: detailed warm pencil-and-watercolor, softly textured paper, natural faces, preschool proportions, warm natural light, rich clean environments. Use refined L115/L118/L119/L128 proportions and L154/L162/L163 family identity, not generic cartoon/anime/3D/photo. Girl: short dark bob, pink clip, pink cardigan, cream shirt, navy skirt, pink shoes. Mother: shoulder-length dark brown hair, cream blouse/cardigan, blue long skirt, natural adult face. Father: short side-parted dark hair, blue overshirt, cream shirt, dark trousers. Older brother: school-age slightly taller child, neat dark hair, blue-gray striped shirt, navy shorts, distinct from sky-blue/green 你. No readable text, letters, numbers, logos, watermark, labels, arrows, motion trails, sound lines. Phone-readable composition and safe margins. Reference sheet top row all five L058 style-only; middle row refined examples; bottom row first three family anchors.\n家中，主角女孩在媽媽陪同下使用平板，螢幕顯示她畫的彩色圖畫，以及一個小型、無文字的爸爸頭像；圖片已出現在對話區，女孩開心地指給媽媽看。平板角度與畫面大小要讓人能辨認她正在傳送圖片，但不讓螢幕壓過人物主體。\r\n配圖限制：爸爸不在現場，這是透過裝置傳送，不是親手把紙張交給爸爸。介面無品牌、文字、時間、數字或可讀按鈕標籤；可用圖片縮圖與爸爸頭像表意，不仿製具品牌辨識度的通訊軟體介面，不增加文字「已傳送」。",
      "imageSrc": "/assets/lessons/L381/images/L381-S02.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L381/audio/L381-S02.m4a",
        "durationMs": 4453,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 420
          },
          {
            "charIndex": 1,
            "startMs": 420,
            "endMs": 690
          },
          {
            "charIndex": 2,
            "startMs": 690,
            "endMs": 960
          },
          {
            "charIndex": 3,
            "startMs": 960,
            "endMs": 1500
          },
          {
            "charIndex": 4,
            "startMs": 1500,
            "endMs": 1940
          },
          {
            "charIndex": 5,
            "startMs": 1940,
            "endMs": 2820
          },
          {
            "charIndex": 6,
            "startMs": 2820,
            "endMs": 3080
          },
          {
            "charIndex": 7,
            "startMs": 3080,
            "endMs": 3460
          },
          {
            "charIndex": 8,
            "startMs": 3460,
            "endMs": 3600
          },
          {
            "charIndex": 9,
            "startMs": 3600,
            "endMs": 3740
          }
        ]
      }
    },
    {
      "id": "L381-S03",
      "text": "最近接連停電，真受不了。",
      "spokenText": "最近接連停電真受不了",
      "focusChar": "連",
      "displayLines": [
        "最近接連",
        "停電，",
        "真受不了。"
      ],
      "imageNotes": "晚上家中停電，天花板的燈熄滅。主角女孩坐在桌前，面前攤著原本在看的書，露出無奈的表情；媽媽拿著電池照明燈，照亮桌面與兩人的臉，呈現原本的活動被停電打斷。\r\n配圖限制：雖是夜間，人物與物件仍須清楚可辨，不能做成一張黑圖；不用誇張恐懼、哭鬧、蠟燭、失火或危險電線。書頁無可讀文字；不以日曆或多格畫面解釋「接連」。本句已定稿「真受不了」，不得改回「很不方便」；「便」未學。",
      "imagePrompt": "Square 1:1 1024px modern Taiwan children's picture-book illustration. Match the supplied L058 style-only anchors: detailed warm pencil-and-watercolor, softly textured paper, natural faces, preschool proportions, warm natural light, rich clean environments. Use refined L115/L118/L119/L128 proportions and L154/L162/L163 family identity, not generic cartoon/anime/3D/photo. Girl: short dark bob, pink clip, pink cardigan, cream shirt, navy skirt, pink shoes. Mother: shoulder-length dark brown hair, cream blouse/cardigan, blue long skirt, natural adult face. Father: short side-parted dark hair, blue overshirt, cream shirt, dark trousers. Older brother: school-age slightly taller child, neat dark hair, blue-gray striped shirt, navy shorts, distinct from sky-blue/green 你. No readable text, letters, numbers, logos, watermark, labels, arrows, motion trails, sound lines. Phone-readable composition and safe margins. Reference sheet top row all five L058 style-only; middle row refined examples; bottom row first three family anchors.\n晚上家中停電，天花板的燈熄滅。主角女孩坐在桌前，面前攤著原本在看的書，露出無奈的表情；媽媽拿著電池照明燈，照亮桌面與兩人的臉，呈現原本的活動被停電打斷。\r\n配圖限制：雖是夜間，人物與物件仍須清楚可辨，不能做成一張黑圖；不用誇張恐懼、哭鬧、蠟燭、失火或危險電線。書頁無可讀文字；不以日曆或多格畫面解釋「接連」。本句已定稿「真受不了」，不得改回「很不方便」；「便」未學。",
      "imageSrc": "/assets/lessons/L381/images/L381-S03.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L381/audio/L381-S03.m4a",
        "durationMs": 4032,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 310
          },
          {
            "charIndex": 1,
            "startMs": 310,
            "endMs": 620
          },
          {
            "charIndex": 2,
            "startMs": 620,
            "endMs": 1180
          },
          {
            "charIndex": 3,
            "startMs": 1180,
            "endMs": 1380
          },
          {
            "charIndex": 4,
            "startMs": 1380,
            "endMs": 1760
          },
          {
            "charIndex": 5,
            "startMs": 1760,
            "endMs": 2020
          },
          {
            "charIndex": 6,
            "startMs": 2280,
            "endMs": 2580
          },
          {
            "charIndex": 7,
            "startMs": 2580,
            "endMs": 2840
          },
          {
            "charIndex": 8,
            "startMs": 2840,
            "endMs": 3030
          },
          {
            "charIndex": 9,
            "startMs": 3030,
            "endMs": 3220
          }
        ]
      }
    },
    {
      "id": "L381-S04",
      "text": "幫我傳話，請爸爸送飯來。",
      "spokenText": "幫我傳話請爸爸送飯來",
      "focusChar": "傳",
      "displayLines": [
        "幫我傳話，",
        "請爸爸",
        "送飯來。"
      ],
      "imageNotes": "主角媽媽正在自家小店櫃檯忙碌，主角女孩站在旁邊，拿著已接通爸爸電話的手機。媽媽轉向女孩交代，女孩側頭聽媽媽說話，準備再對電話裡的爸爸轉述；櫃檯旁留有準備用餐的空位，但飯還沒送到。\r\n角色與配圖限制：這一句在圖中是媽媽對女孩說的直接對白，「我」指說話的媽媽；女孩是轉述者，不把本課其他「我」的主角身份一併改成媽媽。爸爸不在現場，不畫成媽媽直接拿電話與爸爸通話，也不畫成飯已送到。手機、店內招牌、物品包裝均無可讀文字或品牌。",
      "imagePrompt": "Square 1:1 1024px modern Taiwan children's picture-book illustration. Match the supplied L058 style-only anchors: detailed warm pencil-and-watercolor, softly textured paper, natural faces, preschool proportions, warm natural light, rich clean environments. Use refined L115/L118/L119/L128 proportions and L154/L162/L163 family identity, not generic cartoon/anime/3D/photo. Girl: short dark bob, pink clip, pink cardigan, cream shirt, navy skirt, pink shoes. Mother: shoulder-length dark brown hair, cream blouse/cardigan, blue long skirt, natural adult face. Father: short side-parted dark hair, blue overshirt, cream shirt, dark trousers. Older brother: school-age slightly taller child, neat dark hair, blue-gray striped shirt, navy shorts, distinct from sky-blue/green 你. No readable text, letters, numbers, logos, watermark, labels, arrows, motion trails, sound lines. Phone-readable composition and safe margins. Reference sheet top row all five L058 style-only; middle row refined examples; bottom row first three family anchors.\n主角媽媽正在自家小店櫃檯忙碌，主角女孩站在旁邊，拿著已接通爸爸電話的手機。媽媽轉向女孩交代，女孩側頭聽媽媽說話，準備再對電話裡的爸爸轉述；櫃檯旁留有準備用餐的空位，但飯還沒送到。\r\n角色與配圖限制：這一句在圖中是媽媽對女孩說的直接對白，「我」指說話的媽媽；女孩是轉述者，不把本課其他「我」的主角身份一併改成媽媽。爸爸不在現場，不畫成媽媽直接拿電話與爸爸通話，也不畫成飯已送到。手機、店內招牌、物品包裝均無可讀文字或品牌。",
      "imageSrc": "/assets/lessons/L381/images/L381-S04.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L381/audio/L381-S04.m4a",
        "durationMs": 3865,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 240
          },
          {
            "charIndex": 1,
            "startMs": 240,
            "endMs": 560
          },
          {
            "charIndex": 2,
            "startMs": 560,
            "endMs": 900
          },
          {
            "charIndex": 3,
            "startMs": 900,
            "endMs": 1180
          },
          {
            "charIndex": 4,
            "startMs": 1680,
            "endMs": 1840
          },
          {
            "charIndex": 5,
            "startMs": 1840,
            "endMs": 2040
          },
          {
            "charIndex": 6,
            "startMs": 2040,
            "endMs": 2240
          },
          {
            "charIndex": 7,
            "startMs": 2240,
            "endMs": 2640
          },
          {
            "charIndex": 8,
            "startMs": 2640,
            "endMs": 2840
          },
          {
            "charIndex": 9,
            "startMs": 2840,
            "endMs": 3180
          }
        ]
      }
    },
    {
      "id": "L381-S05",
      "text": "房間裡傳出好大的笑聲。",
      "spokenText": "房間裡傳出好大的笑聲",
      "focusChar": "傳",
      "displayLines": [
        "房間裡傳出",
        "好大的笑聲。"
      ],
      "imageNotes": "從敞開的房門外看進去，主角爸爸和主角哥哥坐在房間裡，正在開懷大笑。主角女孩在門外停下腳步，好奇地轉頭看向他們；笑的人、房門及女孩的視線都清楚可見，交代聲音从房間裡傳出。\r\n配圖限制：哥哥是固定主角哥哥，不是固定「你」小男孩、小光或其他同學。不靠「哈哈」文字、音符或聲音線條表達；不要只有空房間，不畫成爸爸哥哥嘲笑女孩或女孩受委屈。",
      "imagePrompt": "Square 1:1 1024px modern Taiwan children's picture-book illustration. Match the supplied L058 style-only anchors: detailed warm pencil-and-watercolor, softly textured paper, natural faces, preschool proportions, warm natural light, rich clean environments. Use refined L115/L118/L119/L128 proportions and L154/L162/L163 family identity, not generic cartoon/anime/3D/photo. Girl: short dark bob, pink clip, pink cardigan, cream shirt, navy skirt, pink shoes. Mother: shoulder-length dark brown hair, cream blouse/cardigan, blue long skirt, natural adult face. Father: short side-parted dark hair, blue overshirt, cream shirt, dark trousers. Older brother: school-age slightly taller child, neat dark hair, blue-gray striped shirt, navy shorts, distinct from sky-blue/green 你. No readable text, letters, numbers, logos, watermark, labels, arrows, motion trails, sound lines. Phone-readable composition and safe margins. Reference sheet top row all five L058 style-only; middle row refined examples; bottom row first three family anchors.\n從敞開的房門外看進去，主角爸爸和主角哥哥坐在房間裡，正在開懷大笑。主角女孩在門外停下腳步，好奇地轉頭看向他們；笑的人、房門及女孩的視線都清楚可見，交代聲音从房間裡傳出。\r\n配圖限制：哥哥是固定主角哥哥，不是固定「你」小男孩、小光或其他同學。不靠「哈哈」文字、音符或聲音線條表達；不要只有空房間，不畫成爸爸哥哥嘲笑女孩或女孩受委屈。",
      "imageSrc": "/assets/lessons/L381/images/L381-S05.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L381/audio/L381-S05.m4a",
        "durationMs": 4040,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 340
          },
          {
            "charIndex": 1,
            "startMs": 340,
            "endMs": 620
          },
          {
            "charIndex": 2,
            "startMs": 620,
            "endMs": 1060
          },
          {
            "charIndex": 3,
            "startMs": 1060,
            "endMs": 1580
          },
          {
            "charIndex": 4,
            "startMs": 1580,
            "endMs": 1900
          },
          {
            "charIndex": 5,
            "startMs": 1900,
            "endMs": 2300
          },
          {
            "charIndex": 6,
            "startMs": 2300,
            "endMs": 2480
          },
          {
            "charIndex": 7,
            "startMs": 2480,
            "endMs": 2660
          },
          {
            "charIndex": 8,
            "startMs": 2660,
            "endMs": 2960
          },
          {
            "charIndex": 9,
            "startMs": 2960,
            "endMs": 3140
          }
        ]
      }
    }
  ],
  "sentenceGames": [
    {
      "id": "L381-G01",
      "type": "find-character",
      "sentenceId": "L381-S01",
      "targetChar": "傳",
      "targetCharIndex": 2
    },
    {
      "id": "L381-G02",
      "type": "teach-character",
      "sentenceId": "L381-S02",
      "targetChar": "傳",
      "targetCharIndex": 5,
      "teachAudio": {
        "prefixText": "我已經把圖",
        "suffixText": "送給爸爸",
        "prefixSrc": "/assets/lessons/L381/audio/L381-G02-prefix.m4a",
        "suffixSrc": "/assets/lessons/L381/audio/L381-G02-suffix.m4a",
        "prefixAudio": {
          "spokenText": "我已經把圖",
          "src": "/assets/lessons/L381/audio/L381-G02-prefix.m4a",
          "durationMs": 2182,
          "charTimings": [
            {
              "charIndex": 0,
              "startMs": 0,
              "endMs": 400
            },
            {
              "charIndex": 1,
              "startMs": 400,
              "endMs": 660
            },
            {
              "charIndex": 2,
              "startMs": 660,
              "endMs": 920
            },
            {
              "charIndex": 3,
              "startMs": 920,
              "endMs": 1240
            },
            {
              "charIndex": 4,
              "startMs": 1240,
              "endMs": 1500
            }
          ]
        },
        "suffixAudio": {
          "spokenText": "送給爸爸",
          "src": "/assets/lessons/L381/audio/L381-G02-suffix.m4a",
          "durationMs": 2252,
          "charTimings": [
            {
              "charIndex": 0,
              "startMs": 0,
              "endMs": 720
            },
            {
              "charIndex": 1,
              "startMs": 720,
              "endMs": 1260
            },
            {
              "charIndex": 2,
              "startMs": 1260,
              "endMs": 1500
            },
            {
              "charIndex": 3,
              "startMs": 1500,
              "endMs": 1740
            }
          ]
        }
      }
    },
    {
      "id": "L381-G03",
      "type": "missing-character",
      "sentenceId": "L381-S04",
      "targetChar": "傳",
      "targetCharIndex": 2,
      "missingIndexes": [
        2
      ],
      "prompt": "補上不見的字。",
      "options": [
        {
          "id": "L381-G03-A",
          "text": "傳",
          "correct": true
        },
        {
          "id": "L381-G03-B",
          "text": "說",
          "correct": false
        },
        {
          "id": "L381-G03-C",
          "text": "聽",
          "correct": false
        }
      ]
    },
    {
      "id": "L381-G04",
      "type": "partial-order",
      "sentenceId": "L381-S03",
      "targetChar": "連",
      "targetCharIndex": 3,
      "missingIndexes": [
        6,
        7,
        8,
        9
      ],
      "options": [
        {
          "id": "L381-G04-A",
          "text": "不",
          "correct": true,
          "correctOrder": 2
        },
        {
          "id": "L381-G04-B",
          "text": "真",
          "correct": true,
          "correctOrder": 0
        },
        {
          "id": "L381-G04-C",
          "text": "了",
          "correct": true,
          "correctOrder": 3
        },
        {
          "id": "L381-G04-D",
          "text": "受",
          "correct": true,
          "correctOrder": 1
        }
      ]
    },
    {
      "id": "L381-G05",
      "type": "choose-pronunciation",
      "sentenceId": "L381-S05",
      "targetChar": "傳",
      "targetCharIndex": 3,
      "options": [
        {
          "id": "correct",
          "text": "房間裡傳出好大的笑聲。",
          "spokenText": "房間裡傳出好大的笑聲",
          "correct": true,
          "sentenceId": "L381-S05",
          "audioSrc": "/assets/lessons/L381/audio/L381-S05.m4a",
          "audio": {
            "src": "/assets/lessons/L381/audio/L381-S05.m4a",
            "durationMs": 4040,
            "charTimings": [
              {
                "charIndex": 0,
                "startMs": 0,
                "endMs": 340
              },
              {
                "charIndex": 1,
                "startMs": 340,
                "endMs": 620
              },
              {
                "charIndex": 2,
                "startMs": 620,
                "endMs": 1060
              },
              {
                "charIndex": 3,
                "startMs": 1060,
                "endMs": 1580
              },
              {
                "charIndex": 4,
                "startMs": 1580,
                "endMs": 1900
              },
              {
                "charIndex": 5,
                "startMs": 1900,
                "endMs": 2300
              },
              {
                "charIndex": 6,
                "startMs": 2300,
                "endMs": 2480
              },
              {
                "charIndex": 7,
                "startMs": 2480,
                "endMs": 2660
              },
              {
                "charIndex": 8,
                "startMs": 2660,
                "endMs": 2960
              },
              {
                "charIndex": 9,
                "startMs": 2960,
                "endMs": 3140
              }
            ]
          }
        },
        {
          "id": "wrong-one",
          "text": "房間裡傳出好大的哭聲。",
          "spokenText": "房間裡傳出好大的哭聲",
          "correct": false,
          "audioSrc": "/assets/lessons/L381/audio/L381-G05-wrong-one.m4a",
          "audio": {
            "spokenText": "房間裡傳出好大的哭聲",
            "src": "/assets/lessons/L381/audio/L381-G05-wrong-one.m4a",
            "durationMs": 3577,
            "charTimings": [
              {
                "charIndex": 0,
                "startMs": 0,
                "endMs": 300
              },
              {
                "charIndex": 1,
                "startMs": 300,
                "endMs": 580
              },
              {
                "charIndex": 2,
                "startMs": 580,
                "endMs": 920
              },
              {
                "charIndex": 3,
                "startMs": 920,
                "endMs": 1240
              },
              {
                "charIndex": 4,
                "startMs": 1240,
                "endMs": 1560
              },
              {
                "charIndex": 5,
                "startMs": 1560,
                "endMs": 1960
              },
              {
                "charIndex": 6,
                "startMs": 1960,
                "endMs": 2140
              },
              {
                "charIndex": 7,
                "startMs": 2140,
                "endMs": 2320
              },
              {
                "charIndex": 8,
                "startMs": 2320,
                "endMs": 2620
              },
              {
                "charIndex": 9,
                "startMs": 2620,
                "endMs": 2800
              }
            ]
          }
        },
        {
          "id": "wrong-two",
          "text": "房間外傳出好大的笑聲。",
          "spokenText": "房間外傳出好大的笑聲",
          "correct": false,
          "audioSrc": "/assets/lessons/L381/audio/L381-G05-wrong-two.m4a",
          "audio": {
            "spokenText": "房間外傳出好大的笑聲",
            "src": "/assets/lessons/L381/audio/L381-G05-wrong-two.m4a",
            "durationMs": 4653,
            "charTimings": [
              {
                "charIndex": 0,
                "startMs": 0,
                "endMs": 460
              },
              {
                "charIndex": 1,
                "startMs": 460,
                "endMs": 760
              },
              {
                "charIndex": 2,
                "startMs": 760,
                "endMs": 1100
              },
              {
                "charIndex": 3,
                "startMs": 1100,
                "endMs": 1700
              },
              {
                "charIndex": 4,
                "startMs": 1700,
                "endMs": 2080
              },
              {
                "charIndex": 5,
                "startMs": 2080,
                "endMs": 2760
              },
              {
                "charIndex": 6,
                "startMs": 2760,
                "endMs": 2970
              },
              {
                "charIndex": 7,
                "startMs": 2970,
                "endMs": 3180
              },
              {
                "charIndex": 8,
                "startMs": 3180,
                "endMs": 3560
              },
              {
                "charIndex": 9,
                "startMs": 3560,
                "endMs": 3780
              }
            ]
          }
        }
      ]
    }
  ],
  "notes": "Production B; normal single-character L381, 傳 ㄔㄨㄢˊ throughout. Branch base 636682d9a31600a5f5e02faba0c942e17b5fb103, formal through L373 at claim. Dependency recheck 250ca4a3361a15104ba19158bb1b0710dac43ecc: formal L001-L375 (379 unique Han). L375 經 is now formal vocabulary, outside previous-five coverage; it was provisional at start. Actual remaining learner-character dependencies L376-L380: 已/近/接/送/連. Allowed 385 from latest formal set plus these five plus 傳, no later characters. R045/R046 remain Release playable blockers after L375, cover L346-L375 with ceiling L375; Release order R045 -> R046 -> L376-L380 -> L381. S04 speaker 我 is mother; girl relays to absent father, other 我 remains girl. Stage 2 exactly three 傳 plus three old cards, three taps, no pilot exception. G03 exactly three distinct single-Han choices 傳/說/聽. Browser QA: phone 390x844 Stage 1 target/zhuyin, standalone playback, Stage 2 six cards and 1/3 -> 2/3 -> 3/3 completion, all five Stage 3 playbacks/highlights, G03 wrong choices/reveal/retry, G04 ordering, G05 all three option playbacks and selection checked. Tablet 768x1024 G03 and reward navigation checked. First reward and repeated reward/replay retained 150 coins/48 stars after initial award from 120/36; red next and white home buttons visible with floating toolbar. Isolated QA used prerequisite metadata and QA-only next entry; G02 was skipped via existing UI for navigation testing, not counted as recording QA. Browser control has no timed pointer-hold/release method, so Release must supplement G02 real microphone recording, bell-to-record order and child-audio insertion/replay. Exact G02 prefix/suffix transcripts, final M4A decode/volume/timings pass. One Playwright CDP click timeout recovered using accessibility click. Development React setState-in-render warning observed in existing FindManyChallenge; Stage 2 behavior remained correct. No shared app/curriculum state changed.",
  "stage4AudioAlignment": {
    "L381-G02-prefix": {
      "spokenText": "我已經把圖",
      "src": "/assets/lessons/L381/audio/L381-G02-prefix.m4a",
      "durationMs": 2182,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 400
        },
        {
          "charIndex": 1,
          "startMs": 400,
          "endMs": 660
        },
        {
          "charIndex": 2,
          "startMs": 660,
          "endMs": 920
        },
        {
          "charIndex": 3,
          "startMs": 920,
          "endMs": 1240
        },
        {
          "charIndex": 4,
          "startMs": 1240,
          "endMs": 1500
        }
      ]
    },
    "L381-G02-suffix": {
      "spokenText": "送給爸爸",
      "src": "/assets/lessons/L381/audio/L381-G02-suffix.m4a",
      "durationMs": 2252,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 720
        },
        {
          "charIndex": 1,
          "startMs": 720,
          "endMs": 1260
        },
        {
          "charIndex": 2,
          "startMs": 1260,
          "endMs": 1500
        },
        {
          "charIndex": 3,
          "startMs": 1500,
          "endMs": 1740
        }
      ]
    },
    "L381-G05-wrong-one": {
      "spokenText": "房間裡傳出好大的哭聲",
      "src": "/assets/lessons/L381/audio/L381-G05-wrong-one.m4a",
      "durationMs": 3577,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 300
        },
        {
          "charIndex": 1,
          "startMs": 300,
          "endMs": 580
        },
        {
          "charIndex": 2,
          "startMs": 580,
          "endMs": 920
        },
        {
          "charIndex": 3,
          "startMs": 920,
          "endMs": 1240
        },
        {
          "charIndex": 4,
          "startMs": 1240,
          "endMs": 1560
        },
        {
          "charIndex": 5,
          "startMs": 1560,
          "endMs": 1960
        },
        {
          "charIndex": 6,
          "startMs": 1960,
          "endMs": 2140
        },
        {
          "charIndex": 7,
          "startMs": 2140,
          "endMs": 2320
        },
        {
          "charIndex": 8,
          "startMs": 2320,
          "endMs": 2620
        },
        {
          "charIndex": 9,
          "startMs": 2620,
          "endMs": 2800
        }
      ]
    },
    "L381-G05-wrong-two": {
      "spokenText": "房間外傳出好大的笑聲",
      "src": "/assets/lessons/L381/audio/L381-G05-wrong-two.m4a",
      "durationMs": 4653,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 460
        },
        {
          "charIndex": 1,
          "startMs": 460,
          "endMs": 760
        },
        {
          "charIndex": 2,
          "startMs": 760,
          "endMs": 1100
        },
        {
          "charIndex": 3,
          "startMs": 1100,
          "endMs": 1700
        },
        {
          "charIndex": 4,
          "startMs": 1700,
          "endMs": 2080
        },
        {
          "charIndex": 5,
          "startMs": 2080,
          "endMs": 2760
        },
        {
          "charIndex": 6,
          "startMs": 2760,
          "endMs": 2970
        },
        {
          "charIndex": 7,
          "startMs": 2970,
          "endMs": 3180
        },
        {
          "charIndex": 8,
          "startMs": 3180,
          "endMs": 3560
        },
        {
          "charIndex": 9,
          "startMs": 3560,
          "endMs": 3780
        }
      ]
    }
  }
}
```

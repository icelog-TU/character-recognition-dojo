# L357 Generation Packet

## Boundary And Status

Owner: Production C. Branch: codex/l357-complete-package.
Base/final checked origin/main: 71762b03e12b5e82770874bc634183d70cefcb33; formal L001-L353, R041/R042 merged after L345.
Status: partial-package; audio acceptance and phone playback QA pending.
dependsOnLessons: ["L354", "L355", "L356"]
provisionalLearnedChars: ["排", "雞", "公"]
Dependencies block Release only. Release owns shared production JSON, planner, ledger, integration and deployment.

## Final Approved Records

The following request records are final and match the draft. No approved sentence or game substitutions.

```json
{
  "id": "L357",
  "order": 357,
  "kind": "lesson",
  "title": "園",
  "newChars": [
    "園"
  ],
  "zhuyin": {
    "園": "ㄩㄢˊ"
  },
  "targetSentenceCount": 5,
  "packageStatus": "partial-package",
  "dependsOnLessons": [
    "L354",
    "L355",
    "L356"
  ],
  "provisionalLearnedChars": [
    "排",
    "雞",
    "公"
  ],
  "allowedChars": "一二三人個的大大小手我有山上下你水在高很家和隻鳥孩指看女飛男門前後也是不到走他沒裡兩狗都爸媽愛書可會這吃做好樣要更邊多少比來起去坐站開左著拿包花朵了畫出學路誰校問找同帶筆借那本給紙心放把桌子盒掉壞眼用鏡鼻臉紅圓太難得過分幾點玩打球棒頭帽草地面外空天雨雲黑白棋鞋穿戴衣脫氣套熱冷喝飯菜老卻麼什為以怎所房間時還燈關窗車等再風吹樹動葉綠滿掃擦先洗又髒亂回就快事跑馬停叫聲聽見說師話課像想真力能火發電生明光亮陽月影長星行道流河從進早晚海船魚游泳池身濕乾服褲換改錯知認新舊半只剩夠錢買貴賣店場市夜具工作忙幫急腳步跳床搬重沙張椅累死睡倒病假才剛裝養休息久體神精變差緊卡住蓋橋座木積堆洞破口傷皮痛受忍耐敢當然怕哭被嚇罵對爬蟲條泥土種澆照顧忘每次記完收彩色粉哪些最西東方圖向線直轉右角落因原別特處理整齊全今們年跟常請嗎客讓廳餐位正排雞公園",
  "teacherNotes": "Teacher-approved Production C handoff. Base origin/main 71762b03, formal L001-L353 and reviews R001-R042. L354/L355/L356 are Release-only blockers. Release owns production JSON, planner, ledger, final integration and deployment.",
  "generationConstraints": {
    "allowedChars": [
      "一",
      "二",
      "三",
      "人",
      "個",
      "的",
      "大",
      "小",
      "手",
      "我",
      "有",
      "山",
      "上",
      "下",
      "你",
      "水",
      "在",
      "高",
      "很",
      "家",
      "和",
      "隻",
      "鳥",
      "孩",
      "指",
      "看",
      "女",
      "飛",
      "男",
      "門",
      "前",
      "後",
      "也",
      "是",
      "不",
      "到",
      "走",
      "他",
      "沒",
      "裡",
      "兩",
      "狗",
      "都",
      "爸",
      "媽",
      "愛",
      "書",
      "可",
      "會",
      "這",
      "吃",
      "做",
      "好",
      "樣",
      "要",
      "更",
      "邊",
      "多",
      "少",
      "比",
      "來",
      "起",
      "去",
      "坐",
      "站",
      "開",
      "左",
      "著",
      "拿",
      "包",
      "花",
      "朵",
      "了",
      "畫",
      "出",
      "學",
      "路",
      "誰",
      "校",
      "問",
      "找",
      "同",
      "帶",
      "筆",
      "借",
      "那",
      "本",
      "給",
      "紙",
      "心",
      "放",
      "把",
      "桌",
      "子",
      "盒",
      "掉",
      "壞",
      "眼",
      "用",
      "鏡",
      "鼻",
      "臉",
      "紅",
      "圓",
      "太",
      "難",
      "得",
      "過",
      "分",
      "幾",
      "點",
      "玩",
      "打",
      "球",
      "棒",
      "頭",
      "帽",
      "草",
      "地",
      "面",
      "外",
      "空",
      "天",
      "雨",
      "雲",
      "黑",
      "白",
      "棋",
      "鞋",
      "穿",
      "戴",
      "衣",
      "脫",
      "氣",
      "套",
      "熱",
      "冷",
      "喝",
      "飯",
      "菜",
      "老",
      "卻",
      "麼",
      "什",
      "為",
      "以",
      "怎",
      "所",
      "房",
      "間",
      "時",
      "還",
      "燈",
      "關",
      "窗",
      "車",
      "等",
      "再",
      "風",
      "吹",
      "樹",
      "動",
      "葉",
      "綠",
      "滿",
      "掃",
      "擦",
      "先",
      "洗",
      "又",
      "髒",
      "亂",
      "回",
      "就",
      "快",
      "事",
      "跑",
      "馬",
      "停",
      "叫",
      "聲",
      "聽",
      "見",
      "說",
      "師",
      "話",
      "課",
      "像",
      "想",
      "真",
      "力",
      "能",
      "火",
      "發",
      "電",
      "生",
      "明",
      "光",
      "亮",
      "陽",
      "月",
      "影",
      "長",
      "星",
      "行",
      "道",
      "流",
      "河",
      "從",
      "進",
      "早",
      "晚",
      "海",
      "船",
      "魚",
      "游",
      "泳",
      "池",
      "身",
      "濕",
      "乾",
      "服",
      "褲",
      "換",
      "改",
      "錯",
      "知",
      "認",
      "新",
      "舊",
      "半",
      "只",
      "剩",
      "夠",
      "錢",
      "買",
      "貴",
      "賣",
      "店",
      "場",
      "市",
      "夜",
      "具",
      "工",
      "作",
      "忙",
      "幫",
      "急",
      "腳",
      "步",
      "跳",
      "床",
      "搬",
      "重",
      "沙",
      "張",
      "椅",
      "累",
      "死",
      "睡",
      "倒",
      "病",
      "假",
      "才",
      "剛",
      "裝",
      "養",
      "休",
      "息",
      "久",
      "體",
      "神",
      "精",
      "變",
      "差",
      "緊",
      "卡",
      "住",
      "蓋",
      "橋",
      "座",
      "木",
      "積",
      "堆",
      "洞",
      "破",
      "口",
      "傷",
      "皮",
      "痛",
      "受",
      "忍",
      "耐",
      "敢",
      "當",
      "然",
      "怕",
      "哭",
      "被",
      "嚇",
      "罵",
      "對",
      "爬",
      "蟲",
      "條",
      "泥",
      "土",
      "種",
      "澆",
      "照",
      "顧",
      "忘",
      "每",
      "次",
      "記",
      "完",
      "收",
      "彩",
      "色",
      "粉",
      "哪",
      "些",
      "最",
      "西",
      "東",
      "方",
      "圖",
      "向",
      "線",
      "直",
      "轉",
      "右",
      "角",
      "落",
      "因",
      "原",
      "別",
      "特",
      "處",
      "理",
      "整",
      "齊",
      "全",
      "今",
      "們",
      "年",
      "跟",
      "常",
      "請",
      "嗎",
      "客",
      "讓",
      "廳",
      "餐",
      "位",
      "正",
      "排",
      "雞",
      "公",
      "園"
    ],
    "provisionalLearnedChars": [
      "排",
      "雞",
      "公"
    ],
    "dependsOnLessons": [
      "L354",
      "L355",
      "L356"
    ],
    "requiredCoverageChars": [
      "園",
      "公",
      "雞",
      "排",
      "正",
      "位"
    ],
    "targetCharMinimumCount": {
      "園": 3
    },
    "recentTargetMinimumCounts": {
      "公": 2,
      "雞": 2,
      "排": 2,
      "正": 1,
      "位": 1
    },
    "coverageCounts": {
      "園": 5,
      "公": 2,
      "雞": 2,
      "排": 3,
      "正": 1,
      "位": 1
    },
    "sentenceLength": {
      "minHan": 4,
      "maxHan": 12
    },
    "forbiddenDisplayChars": [],
    "stage4OrderRule": "G01 find-character; G02 teach-character; G03 missing-character; G04 partial-order; G05 choose-pronunciation. No exception."
  },
  "approvedSentences": [
    {
      "id": "L357-S01",
      "text": "校園裡有養小雞。",
      "spokenText": "校園裡有養小雞",
      "focusChar": "園",
      "displayLines": [
        "校園裡有",
        "養小雞。"
      ],
      "imageNotes": "學校校園的一角，有安全圍起來的小雞活動區，幾隻小雞在裡面走動或吃東西。可以有主角小女孩和同學遠遠觀看。要看得出是校園，不要可讀校名、標語、班牌或文字。"
    },
    {
      "id": "L357-S02",
      "text": "公園裡有好幾排長椅。",
      "spokenText": "公園裡有好幾排長椅",
      "focusChar": "園",
      "displayLines": [
        "公園裡有",
        "好幾排長椅。"
      ],
      "imageNotes": "公園步道旁有好幾排長椅，排列整齊，周圍有樹、花草和開放空間。不要文字標示、告示牌內容、品牌或標誌。"
    },
    {
      "id": "L357-S03",
      "text": "公雞跑進花園裡。",
      "spokenText": "公雞跑進花園裡",
      "focusChar": "園",
      "displayLines": [
        "公雞跑進",
        "花園裡。"
      ],
      "imageNotes": "一隻公雞跑進花園裡，花園中有花草和小路，畫面清楚呈現公雞在花園裡。可以有主角小女孩在旁邊驚訝看著，但不要讓畫面變成追逐或危險。不要文字或標誌。"
    },
    {
      "id": "L357-S04",
      "text": "花園的角落正好有位子。",
      "spokenText": "花園的角落正好有位子",
      "focusChar": "園",
      "displayLines": [
        "花園的角落",
        "正好有位子。"
      ],
      "imageNotes": "花園角落有一張空椅子或空座位，主角小女孩正好可以坐下休息。畫面要清楚呈現「花園角落」和「有空位子」。不要文字、標籤或座號。"
    },
    {
      "id": "L357-S05",
      "text": "菜園裡有一排一排的白菜。",
      "spokenText": "菜園裡有一排一排的白菜",
      "focusChar": "園",
      "displayLines": [
        "菜園裡有",
        "一排一排的",
        "白菜。"
      ],
      "imageNotes": "菜園裡種著一排一排整齊的白菜，泥土田畦清楚，白菜排列要明顯。可以有陽光和簡單菜園環境，不需要人物。不要文字、數字、標籤或標誌。"
    }
  ],
  "stage4Plan": [
    {
      "id": "L357-G01",
      "type": "find-character",
      "sentenceId": "L357-S01",
      "targetChar": "園",
      "targetCharIndex": 1,
      "prompt": "找到園，點一下。"
    },
    {
      "id": "L357-G02",
      "type": "teach-character",
      "sentenceId": "L357-S03",
      "targetChar": "園",
      "targetCharIndex": 5,
      "prompt": "幫忙說出這個字。",
      "teachAudio": {
        "prefixText": "公雞跑進花",
        "targetText": "園",
        "suffixText": "裡",
        "prefixSrc": "/assets/lessons/L357/audio/L357-G02-prefix.m4a",
        "suffixSrc": "/assets/lessons/L357/audio/L357-G02-suffix.m4a"
      }
    },
    {
      "id": "L357-G03",
      "type": "missing-character",
      "sentenceId": "L357-S02",
      "targetChar": "園",
      "targetCharIndex": 1,
      "prompt": "補上不見的字。",
      "missingIndexes": [
        1
      ],
      "options": [
        {
          "id": "L357-G03-A",
          "text": "園",
          "correct": true
        }
      ]
    },
    {
      "id": "L357-G04",
      "type": "partial-order",
      "sentenceId": "L357-S05",
      "targetChar": "園",
      "prompt": "把句子排回正確順序。",
      "missingIndexes": [
        0,
        1,
        2,
        3
      ],
      "options": [
        {
          "id": "L357-G04-A",
          "text": "菜",
          "correct": true,
          "correctOrder": 0
        },
        {
          "id": "L357-G04-B",
          "text": "園",
          "correct": true,
          "correctOrder": 1
        },
        {
          "id": "L357-G04-C",
          "text": "裡",
          "correct": true,
          "correctOrder": 2
        },
        {
          "id": "L357-G04-D",
          "text": "有",
          "correct": true,
          "correctOrder": 3
        }
      ]
    },
    {
      "id": "L357-G05",
      "type": "choose-pronunciation",
      "sentenceId": "L357-S04",
      "targetChar": "園",
      "targetCharIndex": 1,
      "prompt": "聽一聽，選出讀對的朋友。",
      "options": [
        {
          "id": "correct",
          "text": "花園的角落正好有位子。",
          "correct": true,
          "sentenceId": "L357-S04",
          "audioSrc": "/assets/lessons/L357/audio/L357-S04.m4a"
        },
        {
          "id": "wrong-one",
          "text": "公園的角落正好有位子。",
          "correct": false,
          "audioSrc": "/assets/lessons/L357/audio/L357-G05-wrong-one.m4a"
        },
        {
          "id": "wrong-two",
          "text": "花園的角落正好有椅子。",
          "correct": false,
          "audioSrc": "/assets/lessons/L357/audio/L357-G05-wrong-two.m4a"
        }
      ]
    }
  ],
  "productionQa": {
    "styleLock": {
      "S01": "PASS",
      "S02": "PASS",
      "S03": "PASS",
      "S04": "PASS",
      "S05": "PASS"
    },
    "cast": {
      "S01": "PASS",
      "S02": "N/A",
      "S03": "PASS",
      "S04": "PASS",
      "S05": "N/A"
    },
    "rejectedImages": [
      "S05 first draft rejected for overly photographic cabbage/soil texture; regenerated and rejected draft excluded."
    ],
    "audioGeneration": "Repo OpenAI ai:audio; all processed by assets:audio. Sentences/G02 prefix/G05 use gpt-4o-mini-tts coral. Current charAudio and G02 suffix use gpt-4o-mini-tts sage.",
    "audioAlignment": "Five sentences, G02 prefix, both G05 wrong choices, and supervisor-added measured G02 suffix single-character timing are present in the draft. G02 suffix audio acceptance still requires teacher/manual playback confirmation before asset-complete status.",
    "manualPlayback": "NOT COMPLETED: active tool environment cannot hear audio input or verify phone playback/recording. Automated transcript checks are not a replacement for this gate.",
    "shortAudioSecondaryCheck": "gpt-4o-transcribe returned the homophone 源 for 園 and Latin phonetic text for 裡; these do not establish a verified tone/playback result.",
    "assetFormatAudit": "PASS: scoped L357 assets:audit --strict, 5 images / 10 audio files, 0 errors / 0 warnings. Total asset folder 1,476,449 bytes."
  }
}
```

## Final Image Prompts

Full L058 style-only set was opened as a contact sheet. Refined examples L115-S01/S02, L118-S02, L119-S01, L128-S03 and cast anchors L154-S01, L162-S04, L163-S02 were opened and compared side by side with final WebPs. L058 people are not identity sources.

### L357-S01

- Image: /assets/lessons/L357/images/L357-S01.webp
- style-lock PASS; cast PASS (protagonist girl).
- Reuse decision: New scene: reviewed earlier scene metadata does not establish this exact object arrangement and meaning.
- Prompt: Use case: illustration-story. Square 1:1 phone-readable scene with safe margins. Match the full L058 style-only reference set: rich warm picture-book pencil-and-watercolor linework, luminous natural light, detailed clean environments, softly modeled forms and bright varied palette. No generic flat cartoon, thin wash, anime, 3D or photorealism. Do not copy any L058 person identity. Use the recurring protagonist girl from L115-S01 and L154/L162/L163: stable preschool proportions, short dark bob, small pink hair clip, pink cardigan, pale top, navy skirt, pink shoes and plain yellow bag. School courtyard corner with recognizable classroom windows, corridor and play yard in background, no writing. Several tiny yellow chicks are safely inside a low secure mesh enclosure with feed and water. The protagonist girl watches from outside at a respectful distance. Chicks and school context both clear. No other children necessary. No text, letters, numbers, labels, signs, logos, brand marks or watermarks anywhere.

### L357-S02

- Image: /assets/lessons/L357/images/L357-S02.webp
- style-lock PASS; cast N/A (no people).
- Reuse decision: New scene: reviewed earlier scene metadata does not establish this exact object arrangement and meaning.
- Prompt: Use case: illustration-story. Square 1:1 phone-readable scene with safe margins. Match the full L058 style-only reference set: rich warm picture-book pencil-and-watercolor linework, luminous natural light, detailed clean environments, softly modeled forms and bright varied palette. No generic flat cartoon, thin wash, anime, 3D or photorealism. Do not copy any L058 person identity. Public park with THREE clearly separated parallel rows of long wooden benches, each row containing two long benches, beside a footpath. Slightly elevated viewpoint makes rows obvious. Trees, flowerbeds and open lawn, softly detailed daylight. No people. No text, letters, numbers, labels, signs, logos, brand marks or watermarks anywhere.

### L357-S03

- Image: /assets/lessons/L357/images/L357-S03.webp
- style-lock PASS; cast PASS (protagonist girl).
- Reuse decision: New scene: reviewed earlier scene metadata does not establish this exact object arrangement and meaning.
- Prompt: Use case: illustration-story. Square 1:1 phone-readable scene with safe margins. Match the full L058 style-only reference set: rich warm picture-book pencil-and-watercolor linework, luminous natural light, detailed clean environments, softly modeled forms and bright varied palette. No generic flat cartoon, thin wash, anime, 3D or photorealism. Do not copy any L058 person identity. Use the recurring protagonist girl from L115-S01 and L154/L162/L163: stable preschool proportions, short dark bob, small pink hair clip, pink cardigan, pale top, navy skirt, pink shoes and plain yellow bag. One rooster with red comb, golden neck and dark curved tail stepping quickly through a small open garden gate into colorful flowerbeds and a garden path. The protagonist girl stands to one side, mildly surprised and watching. No chasing or danger. No text, letters, numbers, labels, signs, logos, brand marks or watermarks anywhere.

### L357-S04

- Image: /assets/lessons/L357/images/L357-S04.webp
- style-lock PASS; cast PASS (protagonist girl).
- Reuse decision: New scene: reviewed earlier scene metadata does not establish this exact object arrangement and meaning.
- Prompt: Use case: illustration-story. Square 1:1 phone-readable scene with safe margins. Match the full L058 style-only reference set: rich warm picture-book pencil-and-watercolor linework, luminous natural light, detailed clean environments, softly modeled forms and bright varied palette. No generic flat cartoon, thin wash, anime, 3D or photorealism. Do not copy any L058 person identity. Use the recurring protagonist girl from L115-S01 and L154/L162/L163: stable preschool proportions, short dark bob, small pink hair clip, pink cardigan, pale top, navy skirt, pink shoes and plain yellow bag. A sheltered right-angle corner of a flower garden, formed by two low hedges and lush flowerbeds, contains one plainly unoccupied garden bench. The protagonist girl stands next to it with a pleased resting expression, about to sit, while the seat remains fully visible and empty. Garden corner and available seat are the focus. No text, letters, numbers, labels, signs, logos, brand marks or watermarks anywhere.

### L357-S05

- Image: /assets/lessons/L357/images/L357-S05.webp
- style-lock PASS; cast N/A (no people).
- Reuse decision: New scene: reviewed earlier scene metadata does not establish this exact object arrangement and meaning.
- Prompt: Use case: illustration-story. Square 1:1 phone-readable scene with safe margins. Match the full L058 style-only reference set: rich warm picture-book pencil-and-watercolor linework, luminous natural light, detailed clean environments, softly modeled forms and bright varied palette. No generic flat cartoon, thin wash, anime, 3D or photorealism. Do not copy any L058 person identity. Vegetable garden with several unmistakable parallel soil beds of mature Chinese napa cabbages: elongated upright pale-green heads with crinkled green leaves and broad creamy white ribs, NOT round Western cabbages or lettuces. Clear brown soil furrows between neat rows recede into distance. Warm sunlight, simple garden boundary, no people. No text, letters, numbers, labels, signs, logos, brand marks or watermarks anywhere. Final regenerated prompt: clearly hand-drawn picture-book plate, fine pencil outlines, broad softly painted leaf planes, medium-wide entire beds; no photographic microtexture.

## Validation And Remaining Work

- tools:check, ai:check, startup curriculum:audit-state: PASS.
- curriculum:packet: PASS; generated template replaced with these final approved records.
- Allowed chars, spokenText, displayLines joins and <=6 visible characters: PASS.
- Coverage: 園5, 公2, 雞2, 排3, 正1, 位1; all minimums PASS.
- Stage 4 fixed order, sentence usage once, target indexes, single-Han partial-order cards and G05 full wrong texts: PASS.
- All 5 sentence audio files, G02 prefix and both G05 wrong options: assets:align:ai PASS; saved in draft.
- G02 suffix now has supervisor-added measured single-character timing from the audio file, but single-character sound/tones and phone playback still need teacher/manual review; see productionQa above.
- validate:production PASS on temporary L357-only fixture.
- assets:audit --strict PASS on temporary L357-only fixture, 5 images and 10 audio refs, zero errors/warnings. Final assets 1,476,449 bytes.
- Full verify skipped because dependency-blocked lesson is absent from shared production JSON.
- Shared script change requiring Release inspection: alignment simplified/traditional normalization 园->園, 长->長, 鸡->雞 only. No homophone substitution.
- S05 first draft rejected for photographic texture, regenerated and excluded from commit.
- No main production JSON, planner or ledger changes retained.

## Review

pre-merge package preview, not final main review queue:
https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L357&ref=codex%2Fl357-complete-package

Post-merge review, usable after Release merges and Pages deploys:
https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L357&ref=main

Post-merge status: npm run asset:review-status -- --unit L357 --ref main

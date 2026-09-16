# L408 法 Production Generation Packet

Package status: dependency-blocked-asset-complete

## Boundary
Branch base d0cfbc9a. Request source 0acb09a7984b22f2afd04d8add09ccff5468f842. Latest checked origin/main 853a02b1a0d8bbcaf512ed4ecd5c967297ec4df0, formal L001-L404 (408 formal characters). Provisional 越/加/減 plus 法 gives 412 allowed characters. L405-L407 and R049/R050 remain Release prerequisites.

## Production QA
- G05: each of the three reader buttons was clicked once; playback state activated and returned to idle for all three. No subjective acoustic/highlight PASS is inferred from UI state alone.
- L408 normal single-character package. Dependencies L405/L406/L407 (越/加/減); R049/R050 after405 review milestone blocks Release only. L404 弱 is formal.
- Technical QA PASS: five 1024-square size-compliant WebP; ten mono 44100 Hz AAC M4A decoded; charAudio audibility/duration; nine AI-aligned exact transcripts; 412 allowed characters; coverage; displayLines; Stage 4 fixed order, distinct sentence usage, indexes, G03 three choices and G04 ordering; G05 volume spread 0.5 dB.
- Browser QA at requested 390x844 viewport: five Stage 3 sentences each started on first click and completed; G02 prefix reached the target then stopped for hold-to-record; G03 three single-Han choices and G04 four shuffled single-Han cards visible. Browser control exposes click but no sustained hold, so recording and stitched replay are tooling-limited. Screenshot capture returned a miniaturized page, limiting visual timing/layout inspection. These limitations use the documented browser-QA fallback after technical gates; no teacher pre-merge approval required. Subjective listening/highlight verification remains for post-merge review.
- All final WebP individually opened and compared alongside full L058 style set, refined examples and family anchors. S01 style-lock PASS, cast PASS; S02 style-lock PASS, cast PASS; S03 style-lock PASS, cast PASS; S04 style-lock PASS, cast PASS; S05 style-lock PASS, cast PASS. S04 initial smiling draft replaced with hesitant expression; rejected original not committed.
- Standalone 法 regenerated from the single character with explicit third-tone instruction, never cut from sentence audio. Generic Chinese-script transcription context (no target answer provided) recognizes 法. S03 whole sentence regenerated after lexical mismatch; S02/S05 whole sentences regenerated for alignment granularity; G02 suffix independently regenerated. Final alignment uses exact-text ASR context and simplified/traditional equivalent normalization only. No homophone substitutions. Terminal silence only removed with 200 ms buffer; no speech splice.
- verify skipped: dependency-blocked, shared state left for Release. Production JSON, planner export and ledger unchanged.

## Exact Approved Request
```json
{
  "id": "L408",
  "order": 408,
  "title": "法",
  "newChars": [
    "法"
  ],
  "zhuyin": {
    "法": "ㄈㄚˇ"
  },
  "charAudio": {
    "法": "/assets/lessons/L408/audio/char-u6cd5.m4a"
  },
  "dependsOnLessons": [
    "L405",
    "L406",
    "L407"
  ],
  "provisionalLearnedChars": [
    "越",
    "加",
    "減"
  ],
  "allowedChars": [
    "一",
    "二",
    "三",
    "人",
    "個",
    "大",
    "的",
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
    "園",
    "物",
    "怪",
    "奇",
    "驚",
    "喜",
    "歡",
    "笑",
    "但",
    "吧",
    "謝",
    "感",
    "情",
    "朋",
    "友",
    "親",
    "交",
    "通",
    "往",
    "經",
    "已",
    "近",
    "接",
    "送",
    "連",
    "傳",
    "相",
    "信",
    "寫",
    "字",
    "名",
    "第",
    "念",
    "號",
    "數",
    "報",
    "頁",
    "碼",
    "翻",
    "印",
    "單",
    "雙",
    "選",
    "或",
    "者",
    "勇",
    "強",
    "算",
    "弱",
    "越",
    "加",
    "減",
    "法"
  ],
  "sourceMainCommit": "0acb09a7984b22f2afd04d8add09ccff5468f842",
  "packageStatus": "dependency-blocked-asset-complete",
  "targetSentenceCount": 5,
  "teacherNotes": "Exact approved sentences and Stage 4. R049/R050 after405 milestone blocks Release only. S03 two bent and three extended fingers; S02 older brother not young boy classmate. No readable text/numeral exception. G01 target first 法 index1; G03 target first 法 index5. G02 prefix ends with 想, excludes 法. L408 normal single-character package. Dependencies L405/L406/L407 (越/加/減); R049/R050 after405 review milestone blocks Release only. L404 弱 is formal. Technical QA PASS: five 1024-square size-compliant WebP; ten mono 44100 Hz AAC M4A decoded; charAudio audibility/duration; nine AI-aligned exact transcripts; 412 allowed characters; coverage; displayLines; Stage 4 fixed order, distinct sentence usage, indexes, G03 three choices and G04 ordering; G05 volume spread 0.5 dB. Browser QA at requested 390x844 viewport: five Stage 3 sentences each started on first click and completed; G02 prefix reached the target then stopped for hold-to-record; G03 three single-Han choices and G04 four shuffled single-Han cards visible. Browser control exposes click but no sustained hold, so recording and stitched replay are tooling-limited. Screenshot capture returned a miniaturized page, limiting visual timing/layout inspection. These limitations use the documented browser-QA fallback after technical gates; no teacher pre-merge approval required. Subjective listening/highlight verification remains for post-merge review. All final WebP individually opened and compared alongside full L058 style set, refined examples and family anchors. S01 style-lock PASS, cast PASS; S02 style-lock PASS, cast PASS; S03 style-lock PASS, cast PASS; S04 style-lock PASS, cast PASS; S05 style-lock PASS, cast PASS. S04 initial smiling draft replaced with hesitant expression; rejected original not committed. Standalone 法 regenerated from the single character with explicit third-tone instruction, never cut from sentence audio. Generic Chinese-script transcription context (no target answer provided) recognizes 法. S03 whole sentence regenerated after lexical mismatch; S02/S05 whole sentences regenerated for alignment granularity; G02 suffix independently regenerated. Final alignment uses exact-text ASR context and simplified/traditional equivalent normalization only. No homophone substitutions. Terminal silence only removed with 200 ms buffer; no speech splice. verify skipped: dependency-blocked, shared state left for Release. Production JSON, planner export and ledger unchanged.",
  "generationConstraints": {
    "allowedChars": [
      "一",
      "二",
      "三",
      "人",
      "個",
      "大",
      "的",
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
      "園",
      "物",
      "怪",
      "奇",
      "驚",
      "喜",
      "歡",
      "笑",
      "但",
      "吧",
      "謝",
      "感",
      "情",
      "朋",
      "友",
      "親",
      "交",
      "通",
      "往",
      "經",
      "已",
      "近",
      "接",
      "送",
      "連",
      "傳",
      "相",
      "信",
      "寫",
      "字",
      "名",
      "第",
      "念",
      "號",
      "數",
      "報",
      "頁",
      "碼",
      "翻",
      "印",
      "單",
      "雙",
      "選",
      "或",
      "者",
      "勇",
      "強",
      "算",
      "弱",
      "越",
      "加",
      "減",
      "法"
    ],
    "provisionalLearnedChars": [
      "越",
      "加",
      "減"
    ],
    "targetCharMinimumCount": {
      "法": 3
    },
    "recentTargetMinimumCounts": {
      "減": 2,
      "加": 2,
      "越": 2,
      "弱": 1,
      "算": 1
    }
  },
  "approvedSentences": [
    {
      "id": "L408-S01",
      "text": "加法和減法，我都會算了。",
      "spokenText": "加法和減法我都會算了",
      "displayLines": [
        "加法和減法，",
        "我都會算了。"
      ],
      "focusChar": "法",
      "imageNotes": "家中桌邊，主角小女孩和媽媽一起做算數。桌上兩個小托盤分別放著用來合併、取走的積木；小女孩完成操作後，開心地抬頭向媽媽說話，媽媽微笑回應。用實物呈現計算，不需要可讀算式或數字。",
      "imagePrompt": "Square 1:1, detailed fine pencil-and-watercolor warm picture-book rendering locked to all five L058 style anchors, refined examples L115-S01/S02, L118-S02, L119-S01, L128-S03. Family identity anchors L154-S01, L162-S04, L163-S02. Do not copy L058 identities. Preschool girl short dark bob pink clip pink cardigan cream top navy skirt pink shoes; mother brown bob cream blouse blue jeans; father short brown hair blue overshirt white inner; older brother is the family boy from family anchors, older/taller than girl, NOT sky-blue/green young boy classmate. Natural faces and consistent child proportions. No readable text, letters, numerals, equations, branding or watermark. 家中桌邊，主角小女孩和媽媽一起做算數。桌上兩個小托盤分別放著用來合併、取走的積木；小女孩完成操作後，開心地抬頭向媽媽說話，媽媽微笑回應。用實物呈現計算，不需要可讀算式或數字。",
      "imageSrc": "/assets/lessons/L408/images/L408-S01.webp",
      "approved": true
    },
    {
      "id": "L408-S02",
      "text": "我有個想法，加蓋一座橋吧。",
      "spokenText": "我有個想法加蓋一座橋吧",
      "displayLines": [
        "我有個想法，",
        "加蓋",
        "一座橋吧。"
      ],
      "focusChar": "法",
      "imageNotes": "主角小女孩和主角哥哥正在地墊上搭積木小城。已有房子和道路，中間有藍色布條代表河流，兩岸還沒有橋。小女孩拿著長條積木，指向預計搭橋的位置，向哥哥提出想法。橋尚未完成，呈現準備加蓋，不是真正工地。「哥哥」必須使用主角哥哥身份，不是固定「你」小男孩。",
      "imagePrompt": "Square 1:1, detailed fine pencil-and-watercolor warm picture-book rendering locked to all five L058 style anchors, refined examples L115-S01/S02, L118-S02, L119-S01, L128-S03. Family identity anchors L154-S01, L162-S04, L163-S02. Do not copy L058 identities. Preschool girl short dark bob pink clip pink cardigan cream top navy skirt pink shoes; mother brown bob cream blouse blue jeans; father short brown hair blue overshirt white inner; older brother is the family boy from family anchors, older/taller than girl, NOT sky-blue/green young boy classmate. Natural faces and consistent child proportions. No readable text, letters, numerals, equations, branding or watermark. 主角小女孩和主角哥哥正在地墊上搭積木小城。已有房子和道路，中間有藍色布條代表河流，兩岸還沒有橋。小女孩拿著長條積木，指向預計搭橋的位置，向哥哥提出想法。橋尚未完成，呈現準備加蓋，不是真正工地。「哥哥」必須使用主角哥哥身份，不是固定「你」小男孩。",
      "imageSrc": "/assets/lessons/L408/images/L408-S02.webp",
      "approved": true
    },
    {
      "id": "L408-S03",
      "text": "用手指算減法，是個好方法。",
      "spokenText": "用手指算減法是個好方法",
      "displayLines": [
        "用手指",
        "算減法，",
        "是個好方法。"
      ],
      "focusChar": "法",
      "imageNotes": "主角小女孩坐在書桌前，用手指算減法。近景清楚呈現一隻手彎下兩指、留下三指的姿勢，表示從五指減去兩指；她低頭專心看自己的手。手指數量與關節必須自然正確，不加算式、數字或多餘的手部示意圖。",
      "imagePrompt": "Square 1:1, detailed fine pencil-and-watercolor warm picture-book rendering locked to all five L058 style anchors, refined examples L115-S01/S02, L118-S02, L119-S01, L128-S03. Family identity anchors L154-S01, L162-S04, L163-S02. Do not copy L058 identities. Preschool girl short dark bob pink clip pink cardigan cream top navy skirt pink shoes; mother brown bob cream blouse blue jeans; father short brown hair blue overshirt white inner; older brother is the family boy from family anchors, older/taller than girl, NOT sky-blue/green young boy classmate. Natural faces and consistent child proportions. No readable text, letters, numerals, equations, branding or watermark. 主角小女孩坐在書桌前，用手指算減法。近景清楚呈現一隻手彎下兩指、留下三指的姿勢，表示從五指減去兩指；她低頭專心看自己的手。手指數量與關節必須自然正確，不加算式、數字或多餘的手部示意圖。",
      "imageSrc": "/assets/lessons/L408/images/L408-S03.webp",
      "approved": true
    },
    {
      "id": "L408-S04",
      "text": "越爬越高，我有一點怕。",
      "spokenText": "越爬越高我有一點怕",
      "displayLines": [
        "越爬越高，",
        "我有一點怕。"
      ],
      "focusChar": "越",
      "imageNotes": "公園遊戲區，主角小女孩正在爬攀爬架，主角爸爸在旁保護。女孩雙手握穩橫桿，爬了幾階後回頭看爸爸，表情有些猶豫；爸爸站在伸手可及的位置，抬手準備協助。地面有安全軟墊，高度適中，不畫成懸空或即將跌落。",
      "imagePrompt": "Square 1:1, detailed fine pencil-and-watercolor warm picture-book rendering locked to all five L058 style anchors, refined examples L115-S01/S02, L118-S02, L119-S01, L128-S03. Family identity anchors L154-S01, L162-S04, L163-S02. Do not copy L058 identities. Preschool girl short dark bob pink clip pink cardigan cream top navy skirt pink shoes; mother brown bob cream blouse blue jeans; father short brown hair blue overshirt white inner; older brother is the family boy from family anchors, older/taller than girl, NOT sky-blue/green young boy classmate. Natural faces and consistent child proportions. No readable text, letters, numerals, equations, branding or watermark. 公園遊戲區，主角小女孩正在爬攀爬架，主角爸爸在旁保護。女孩雙手握穩橫桿，爬了幾階後回頭看爸爸，表情有些猶豫；爸爸站在伸手可及的位置，抬手準備協助。地面有安全軟墊，高度適中，不畫成懸空或即將跌落。",
      "imageSrc": "/assets/lessons/L408/images/L408-S04.webp",
      "approved": true
    },
    {
      "id": "L408-S05",
      "text": "小狗身體弱，媽媽用心照顧。",
      "spokenText": "小狗身體弱媽媽用心照顧",
      "displayLines": [
        "小狗身體弱，",
        "媽媽用心",
        "照顧。"
      ],
      "focusChar": "弱",
      "imageNotes": "家中安靜角落，一隻精神較差的小狗躺在柔軟狗床上，主角媽媽蹲下替牠整理薄毯，主角小女孩安靜陪在旁邊。旁邊放乾淨飲水，呈現細心照顧與休息。小狗不需瘦骨嶙峋，不畫傷口、打針或強行餵食。",
      "imagePrompt": "Square 1:1, detailed fine pencil-and-watercolor warm picture-book rendering locked to all five L058 style anchors, refined examples L115-S01/S02, L118-S02, L119-S01, L128-S03. Family identity anchors L154-S01, L162-S04, L163-S02. Do not copy L058 identities. Preschool girl short dark bob pink clip pink cardigan cream top navy skirt pink shoes; mother brown bob cream blouse blue jeans; father short brown hair blue overshirt white inner; older brother is the family boy from family anchors, older/taller than girl, NOT sky-blue/green young boy classmate. Natural faces and consistent child proportions. No readable text, letters, numerals, equations, branding or watermark. 家中安靜角落，一隻精神較差的小狗躺在柔軟狗床上，主角媽媽蹲下替牠整理薄毯，主角小女孩安靜陪在旁邊。旁邊放乾淨飲水，呈現細心照顧與休息。小狗不需瘦骨嶙峋，不畫傷口、打針或強行餵食。",
      "imageSrc": "/assets/lessons/L408/images/L408-S05.webp",
      "approved": true
    }
  ],
  "sentenceGames": [
    {
      "id": "L408-G01",
      "type": "find-character",
      "sentenceId": "L408-S01",
      "targetChar": "法",
      "targetCharIndex": 1
    },
    {
      "id": "L408-G02",
      "type": "teach-character",
      "sentenceId": "L408-S02",
      "targetChar": "法",
      "targetCharIndex": 4,
      "teachAudio": {
        "prefixText": "我有個想",
        "suffixText": "加蓋一座橋吧",
        "prefixSrc": "/assets/lessons/L408/audio/L408-G02-prefix.m4a",
        "suffixSrc": "/assets/lessons/L408/audio/L408-G02-suffix.m4a",
        "prefixAudio": {
          "spokenText": "我有個想",
          "src": "/assets/lessons/L408/audio/L408-G02-prefix.m4a",
          "durationMs": 1280,
          "charTimings": [
            {
              "charIndex": 0,
              "startMs": 0,
              "endMs": 230
            },
            {
              "charIndex": 1,
              "startMs": 230,
              "endMs": 460
            },
            {
              "charIndex": 2,
              "startMs": 460,
              "endMs": 780
            },
            {
              "charIndex": 3,
              "startMs": 780,
              "endMs": 1060
            }
          ]
        },
        "suffixAudio": {
          "spokenText": "加蓋一座橋吧",
          "src": "/assets/lessons/L408/audio/L408-G02-suffix.m4a",
          "durationMs": 2302,
          "charTimings": [
            {
              "charIndex": 0,
              "startMs": 0,
              "endMs": 500
            },
            {
              "charIndex": 1,
              "startMs": 500,
              "endMs": 740
            },
            {
              "charIndex": 2,
              "startMs": 740,
              "endMs": 1260
            },
            {
              "charIndex": 3,
              "startMs": 1260,
              "endMs": 1520
            },
            {
              "charIndex": 4,
              "startMs": 1520,
              "endMs": 1820
            },
            {
              "charIndex": 5,
              "startMs": 1820,
              "endMs": 2080
            }
          ]
        }
      }
    },
    {
      "id": "L408-G03",
      "type": "missing-character",
      "sentenceId": "L408-S03",
      "targetChar": "法",
      "targetCharIndex": 5,
      "missingIndexes": [
        5
      ],
      "options": [
        {
          "id": "correct",
          "text": "法",
          "correct": true
        },
        {
          "id": "wrong-one",
          "text": "方",
          "correct": false
        },
        {
          "id": "wrong-two",
          "text": "去",
          "correct": false
        }
      ]
    },
    {
      "id": "L408-G04",
      "type": "partial-order",
      "sentenceId": "L408-S05",
      "targetChar": "弱",
      "targetCharIndex": 4,
      "missingIndexes": [
        7,
        8,
        9,
        10
      ],
      "options": [
        {
          "id": "card-zhao",
          "text": "照",
          "correct": true,
          "correctOrder": 2
        },
        {
          "id": "card-yong",
          "text": "用",
          "correct": true,
          "correctOrder": 0
        },
        {
          "id": "card-gu",
          "text": "顧",
          "correct": true,
          "correctOrder": 3
        },
        {
          "id": "card-xin",
          "text": "心",
          "correct": true,
          "correctOrder": 1
        }
      ]
    },
    {
      "id": "L408-G05",
      "type": "choose-pronunciation",
      "sentenceId": "L408-S04",
      "targetChar": "越",
      "targetCharIndex": 0,
      "options": [
        {
          "id": "correct",
          "text": "越爬越高，我有一點怕。",
          "spokenText": "越爬越高我有一點怕",
          "correct": true,
          "audioSrc": "/assets/lessons/L408/audio/L408-S04.m4a",
          "audio": {
            "src": "/assets/lessons/L408/audio/L408-S04.m4a",
            "durationMs": 3192,
            "charTimings": [
              {
                "charIndex": 0,
                "startMs": 0,
                "endMs": 420
              },
              {
                "charIndex": 1,
                "startMs": 420,
                "endMs": 720
              },
              {
                "charIndex": 2,
                "startMs": 720,
                "endMs": 1080
              },
              {
                "charIndex": 3,
                "startMs": 1080,
                "endMs": 1420
              },
              {
                "charIndex": 4,
                "startMs": 1420,
                "endMs": 1770
              },
              {
                "charIndex": 5,
                "startMs": 1770,
                "endMs": 2120
              },
              {
                "charIndex": 6,
                "startMs": 2120,
                "endMs": 2350
              },
              {
                "charIndex": 7,
                "startMs": 2350,
                "endMs": 2580
              },
              {
                "charIndex": 8,
                "startMs": 2580,
                "endMs": 2960
              }
            ]
          }
        },
        {
          "id": "wrong-one",
          "text": "越爬越高，我有一點累。",
          "spokenText": "越爬越高我有一點累",
          "correct": false,
          "audioSrc": "/assets/lessons/L408/audio/L408-G05-wrong-one.m4a",
          "audio": {
            "spokenText": "越爬越高我有一點累",
            "src": "/assets/lessons/L408/audio/L408-G05-wrong-one.m4a",
            "durationMs": 3413,
            "charTimings": [
              {
                "charIndex": 0,
                "startMs": 0,
                "endMs": 360
              },
              {
                "charIndex": 1,
                "startMs": 360,
                "endMs": 720
              },
              {
                "charIndex": 2,
                "startMs": 720,
                "endMs": 1100
              },
              {
                "charIndex": 3,
                "startMs": 1100,
                "endMs": 1420
              },
              {
                "charIndex": 4,
                "startMs": 2080,
                "endMs": 2250
              },
              {
                "charIndex": 5,
                "startMs": 2250,
                "endMs": 2420
              },
              {
                "charIndex": 6,
                "startMs": 2420,
                "endMs": 2640
              },
              {
                "charIndex": 7,
                "startMs": 2640,
                "endMs": 2860
              },
              {
                "charIndex": 8,
                "startMs": 2860,
                "endMs": 3140
              }
            ]
          }
        },
        {
          "id": "wrong-two",
          "text": "越走越高，我有一點怕。",
          "spokenText": "越走越高我有一點怕",
          "correct": false,
          "audioSrc": "/assets/lessons/L408/audio/L408-G05-wrong-two.m4a",
          "audio": {
            "spokenText": "越走越高我有一點怕",
            "src": "/assets/lessons/L408/audio/L408-G05-wrong-two.m4a",
            "durationMs": 4001,
            "charTimings": [
              {
                "charIndex": 0,
                "startMs": 0,
                "endMs": 360
              },
              {
                "charIndex": 1,
                "startMs": 360,
                "endMs": 920
              },
              {
                "charIndex": 2,
                "startMs": 920,
                "endMs": 1260
              },
              {
                "charIndex": 3,
                "startMs": 1260,
                "endMs": 1660
              },
              {
                "charIndex": 4,
                "startMs": 2540,
                "endMs": 2700
              },
              {
                "charIndex": 5,
                "startMs": 2700,
                "endMs": 2860
              },
              {
                "charIndex": 6,
                "startMs": 2860,
                "endMs": 3110
              },
              {
                "charIndex": 7,
                "startMs": 3110,
                "endMs": 3360
              },
              {
                "charIndex": 8,
                "startMs": 3360,
                "endMs": 3740
              }
            ]
          }
        }
      ]
    }
  ]
}
```

## Final Aligned Draft
```json
{
  "id": "L408",
  "order": 408,
  "title": "法",
  "newChars": [
    "法"
  ],
  "zhuyin": {
    "法": "ㄈㄚˇ"
  },
  "charAudio": {
    "法": "/assets/lessons/L408/audio/char-u6cd5.m4a"
  },
  "dependsOnLessons": [
    "L405",
    "L406",
    "L407"
  ],
  "provisionalLearnedChars": [
    "越",
    "加",
    "減"
  ],
  "allowedChars": [
    "一",
    "二",
    "三",
    "人",
    "個",
    "大",
    "的",
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
    "園",
    "物",
    "怪",
    "奇",
    "驚",
    "喜",
    "歡",
    "笑",
    "但",
    "吧",
    "謝",
    "感",
    "情",
    "朋",
    "友",
    "親",
    "交",
    "通",
    "往",
    "經",
    "已",
    "近",
    "接",
    "送",
    "連",
    "傳",
    "相",
    "信",
    "寫",
    "字",
    "名",
    "第",
    "念",
    "號",
    "數",
    "報",
    "頁",
    "碼",
    "翻",
    "印",
    "單",
    "雙",
    "選",
    "或",
    "者",
    "勇",
    "強",
    "算",
    "弱",
    "越",
    "加",
    "減",
    "法"
  ],
  "sourceMainCommit": "0acb09a7984b22f2afd04d8add09ccff5468f842",
  "packageStatus": "dependency-blocked-asset-complete",
  "requiredRounds": 5,
  "notes": [
    "L408 normal single-character package. Dependencies L405/L406/L407 (越/加/減); R049/R050 after405 review milestone blocks Release only. L404 弱 is formal.",
    "Technical QA PASS: five 1024-square size-compliant WebP; ten mono 44100 Hz AAC M4A decoded; charAudio audibility/duration; nine AI-aligned exact transcripts; 412 allowed characters; coverage; displayLines; Stage 4 fixed order, distinct sentence usage, indexes, G03 three choices and G04 ordering; G05 volume spread 0.5 dB.",
    "Browser QA at requested 390x844 viewport: five Stage 3 sentences each started on first click and completed; G02 prefix reached the target then stopped for hold-to-record; G03 three single-Han choices and G04 four shuffled single-Han cards visible. Browser control exposes click but no sustained hold, so recording and stitched replay are tooling-limited. Screenshot capture returned a miniaturized page, limiting visual timing/layout inspection. These limitations use the documented browser-QA fallback after technical gates; no teacher pre-merge approval required. Subjective listening/highlight verification remains for post-merge review.",
    "All final WebP individually opened and compared alongside full L058 style set, refined examples and family anchors. S01 style-lock PASS, cast PASS; S02 style-lock PASS, cast PASS; S03 style-lock PASS, cast PASS; S04 style-lock PASS, cast PASS; S05 style-lock PASS, cast PASS. S04 initial smiling draft replaced with hesitant expression; rejected original not committed.",
    "Standalone 法 regenerated from the single character with explicit third-tone instruction, never cut from sentence audio. Generic Chinese-script transcription context (no target answer provided) recognizes 法. S03 whole sentence regenerated after lexical mismatch; S02/S05 whole sentences regenerated for alignment granularity; G02 suffix independently regenerated. Final alignment uses exact-text ASR context and simplified/traditional equivalent normalization only. No homophone substitutions. Terminal silence only removed with 200 ms buffer; no speech splice.",
    "verify skipped: dependency-blocked, shared state left for Release. Production JSON, planner export and ledger unchanged."
  ],
  "sentences": [
    {
      "id": "L408-S01",
      "text": "加法和減法，我都會算了。",
      "spokenText": "加法和減法我都會算了",
      "displayLines": [
        "加法和減法，",
        "我都會算了。"
      ],
      "focusChar": "法",
      "imageNotes": "家中桌邊，主角小女孩和媽媽一起做算數。桌上兩個小托盤分別放著用來合併、取走的積木；小女孩完成操作後，開心地抬頭向媽媽說話，媽媽微笑回應。用實物呈現計算，不需要可讀算式或數字。",
      "imagePrompt": "Square 1:1, detailed fine pencil-and-watercolor warm picture-book rendering locked to all five L058 style anchors, refined examples L115-S01/S02, L118-S02, L119-S01, L128-S03. Family identity anchors L154-S01, L162-S04, L163-S02. Do not copy L058 identities. Preschool girl short dark bob pink clip pink cardigan cream top navy skirt pink shoes; mother brown bob cream blouse blue jeans; father short brown hair blue overshirt white inner; older brother is the family boy from family anchors, older/taller than girl, NOT sky-blue/green young boy classmate. Natural faces and consistent child proportions. No readable text, letters, numerals, equations, branding or watermark. 家中桌邊，主角小女孩和媽媽一起做算數。桌上兩個小托盤分別放著用來合併、取走的積木；小女孩完成操作後，開心地抬頭向媽媽說話，媽媽微笑回應。用實物呈現計算，不需要可讀算式或數字。",
      "imageSrc": "/assets/lessons/L408/images/L408-S01.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L408/audio/L408-S01.m4a",
        "durationMs": 3166,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 380
          },
          {
            "charIndex": 1,
            "startMs": 380,
            "endMs": 560
          },
          {
            "charIndex": 2,
            "startMs": 560,
            "endMs": 960
          },
          {
            "charIndex": 3,
            "startMs": 960,
            "endMs": 1240
          },
          {
            "charIndex": 4,
            "startMs": 1240,
            "endMs": 1600
          },
          {
            "charIndex": 5,
            "startMs": 1600,
            "endMs": 2000
          },
          {
            "charIndex": 6,
            "startMs": 2000,
            "endMs": 2280
          },
          {
            "charIndex": 7,
            "startMs": 2280,
            "endMs": 2540
          },
          {
            "charIndex": 8,
            "startMs": 2540,
            "endMs": 2740
          },
          {
            "charIndex": 9,
            "startMs": 2740,
            "endMs": 2980
          }
        ]
      }
    },
    {
      "id": "L408-S02",
      "text": "我有個想法，加蓋一座橋吧。",
      "spokenText": "我有個想法加蓋一座橋吧",
      "displayLines": [
        "我有個想法，",
        "加蓋",
        "一座橋吧。"
      ],
      "focusChar": "法",
      "imageNotes": "主角小女孩和主角哥哥正在地墊上搭積木小城。已有房子和道路，中間有藍色布條代表河流，兩岸還沒有橋。小女孩拿著長條積木，指向預計搭橋的位置，向哥哥提出想法。橋尚未完成，呈現準備加蓋，不是真正工地。「哥哥」必須使用主角哥哥身份，不是固定「你」小男孩。",
      "imagePrompt": "Square 1:1, detailed fine pencil-and-watercolor warm picture-book rendering locked to all five L058 style anchors, refined examples L115-S01/S02, L118-S02, L119-S01, L128-S03. Family identity anchors L154-S01, L162-S04, L163-S02. Do not copy L058 identities. Preschool girl short dark bob pink clip pink cardigan cream top navy skirt pink shoes; mother brown bob cream blouse blue jeans; father short brown hair blue overshirt white inner; older brother is the family boy from family anchors, older/taller than girl, NOT sky-blue/green young boy classmate. Natural faces and consistent child proportions. No readable text, letters, numerals, equations, branding or watermark. 主角小女孩和主角哥哥正在地墊上搭積木小城。已有房子和道路，中間有藍色布條代表河流，兩岸還沒有橋。小女孩拿著長條積木，指向預計搭橋的位置，向哥哥提出想法。橋尚未完成，呈現準備加蓋，不是真正工地。「哥哥」必須使用主角哥哥身份，不是固定「你」小男孩。",
      "imageSrc": "/assets/lessons/L408/images/L408-S02.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L408/audio/L408-S02.m4a",
        "durationMs": 3893,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 240
          },
          {
            "charIndex": 1,
            "startMs": 240,
            "endMs": 480
          },
          {
            "charIndex": 2,
            "startMs": 480,
            "endMs": 920
          },
          {
            "charIndex": 3,
            "startMs": 920,
            "endMs": 1260
          },
          {
            "charIndex": 4,
            "startMs": 1260,
            "endMs": 1600
          },
          {
            "charIndex": 5,
            "startMs": 1600,
            "endMs": 2360
          },
          {
            "charIndex": 6,
            "startMs": 2360,
            "endMs": 2600
          },
          {
            "charIndex": 7,
            "startMs": 2600,
            "endMs": 2880
          },
          {
            "charIndex": 8,
            "startMs": 2880,
            "endMs": 3080
          },
          {
            "charIndex": 9,
            "startMs": 3080,
            "endMs": 3400
          },
          {
            "charIndex": 10,
            "startMs": 3400,
            "endMs": 3640
          }
        ]
      }
    },
    {
      "id": "L408-S03",
      "text": "用手指算減法，是個好方法。",
      "spokenText": "用手指算減法是個好方法",
      "displayLines": [
        "用手指",
        "算減法，",
        "是個好方法。"
      ],
      "focusChar": "法",
      "imageNotes": "主角小女孩坐在書桌前，用手指算減法。近景清楚呈現一隻手彎下兩指、留下三指的姿勢，表示從五指減去兩指；她低頭專心看自己的手。手指數量與關節必須自然正確，不加算式、數字或多餘的手部示意圖。",
      "imagePrompt": "Square 1:1, detailed fine pencil-and-watercolor warm picture-book rendering locked to all five L058 style anchors, refined examples L115-S01/S02, L118-S02, L119-S01, L128-S03. Family identity anchors L154-S01, L162-S04, L163-S02. Do not copy L058 identities. Preschool girl short dark bob pink clip pink cardigan cream top navy skirt pink shoes; mother brown bob cream blouse blue jeans; father short brown hair blue overshirt white inner; older brother is the family boy from family anchors, older/taller than girl, NOT sky-blue/green young boy classmate. Natural faces and consistent child proportions. No readable text, letters, numerals, equations, branding or watermark. 主角小女孩坐在書桌前，用手指算減法。近景清楚呈現一隻手彎下兩指、留下三指的姿勢，表示從五指減去兩指；她低頭專心看自己的手。手指數量與關節必須自然正確，不加算式、數字或多餘的手部示意圖。",
      "imageSrc": "/assets/lessons/L408/images/L408-S03.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L408/audio/L408-S03.m4a",
        "durationMs": 3859,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 400
          },
          {
            "charIndex": 1,
            "startMs": 400,
            "endMs": 900
          },
          {
            "charIndex": 2,
            "startMs": 900,
            "endMs": 1200
          },
          {
            "charIndex": 3,
            "startMs": 1200,
            "endMs": 1620
          },
          {
            "charIndex": 4,
            "startMs": 1620,
            "endMs": 1900
          },
          {
            "charIndex": 5,
            "startMs": 1900,
            "endMs": 2140
          },
          {
            "charIndex": 6,
            "startMs": 2140,
            "endMs": 2720
          },
          {
            "charIndex": 7,
            "startMs": 2720,
            "endMs": 2920
          },
          {
            "charIndex": 8,
            "startMs": 2920,
            "endMs": 3200
          },
          {
            "charIndex": 9,
            "startMs": 3200,
            "endMs": 3400
          },
          {
            "charIndex": 10,
            "startMs": 3400,
            "endMs": 3600
          }
        ]
      }
    },
    {
      "id": "L408-S04",
      "text": "越爬越高，我有一點怕。",
      "spokenText": "越爬越高我有一點怕",
      "displayLines": [
        "越爬越高，",
        "我有一點怕。"
      ],
      "focusChar": "越",
      "imageNotes": "公園遊戲區，主角小女孩正在爬攀爬架，主角爸爸在旁保護。女孩雙手握穩橫桿，爬了幾階後回頭看爸爸，表情有些猶豫；爸爸站在伸手可及的位置，抬手準備協助。地面有安全軟墊，高度適中，不畫成懸空或即將跌落。",
      "imagePrompt": "Square 1:1, detailed fine pencil-and-watercolor warm picture-book rendering locked to all five L058 style anchors, refined examples L115-S01/S02, L118-S02, L119-S01, L128-S03. Family identity anchors L154-S01, L162-S04, L163-S02. Do not copy L058 identities. Preschool girl short dark bob pink clip pink cardigan cream top navy skirt pink shoes; mother brown bob cream blouse blue jeans; father short brown hair blue overshirt white inner; older brother is the family boy from family anchors, older/taller than girl, NOT sky-blue/green young boy classmate. Natural faces and consistent child proportions. No readable text, letters, numerals, equations, branding or watermark. 公園遊戲區，主角小女孩正在爬攀爬架，主角爸爸在旁保護。女孩雙手握穩橫桿，爬了幾階後回頭看爸爸，表情有些猶豫；爸爸站在伸手可及的位置，抬手準備協助。地面有安全軟墊，高度適中，不畫成懸空或即將跌落。",
      "imageSrc": "/assets/lessons/L408/images/L408-S04.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L408/audio/L408-S04.m4a",
        "durationMs": 3192,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 420
          },
          {
            "charIndex": 1,
            "startMs": 420,
            "endMs": 720
          },
          {
            "charIndex": 2,
            "startMs": 720,
            "endMs": 1080
          },
          {
            "charIndex": 3,
            "startMs": 1080,
            "endMs": 1420
          },
          {
            "charIndex": 4,
            "startMs": 1420,
            "endMs": 1770
          },
          {
            "charIndex": 5,
            "startMs": 1770,
            "endMs": 2120
          },
          {
            "charIndex": 6,
            "startMs": 2120,
            "endMs": 2350
          },
          {
            "charIndex": 7,
            "startMs": 2350,
            "endMs": 2580
          },
          {
            "charIndex": 8,
            "startMs": 2580,
            "endMs": 2960
          }
        ]
      }
    },
    {
      "id": "L408-S05",
      "text": "小狗身體弱，媽媽用心照顧。",
      "spokenText": "小狗身體弱媽媽用心照顧",
      "displayLines": [
        "小狗身體弱，",
        "媽媽用心",
        "照顧。"
      ],
      "focusChar": "弱",
      "imageNotes": "家中安靜角落，一隻精神較差的小狗躺在柔軟狗床上，主角媽媽蹲下替牠整理薄毯，主角小女孩安靜陪在旁邊。旁邊放乾淨飲水，呈現細心照顧與休息。小狗不需瘦骨嶙峋，不畫傷口、打針或強行餵食。",
      "imagePrompt": "Square 1:1, detailed fine pencil-and-watercolor warm picture-book rendering locked to all five L058 style anchors, refined examples L115-S01/S02, L118-S02, L119-S01, L128-S03. Family identity anchors L154-S01, L162-S04, L163-S02. Do not copy L058 identities. Preschool girl short dark bob pink clip pink cardigan cream top navy skirt pink shoes; mother brown bob cream blouse blue jeans; father short brown hair blue overshirt white inner; older brother is the family boy from family anchors, older/taller than girl, NOT sky-blue/green young boy classmate. Natural faces and consistent child proportions. No readable text, letters, numerals, equations, branding or watermark. 家中安靜角落，一隻精神較差的小狗躺在柔軟狗床上，主角媽媽蹲下替牠整理薄毯，主角小女孩安靜陪在旁邊。旁邊放乾淨飲水，呈現細心照顧與休息。小狗不需瘦骨嶙峋，不畫傷口、打針或強行餵食。",
      "imageSrc": "/assets/lessons/L408/images/L408-S05.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L408/audio/L408-S05.m4a",
        "durationMs": 5245,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 600
          },
          {
            "charIndex": 1,
            "startMs": 600,
            "endMs": 900
          },
          {
            "charIndex": 2,
            "startMs": 900,
            "endMs": 1640
          },
          {
            "charIndex": 3,
            "startMs": 1640,
            "endMs": 1880
          },
          {
            "charIndex": 4,
            "startMs": 1880,
            "endMs": 2440
          },
          {
            "charIndex": 5,
            "startMs": 2800,
            "endMs": 3220
          },
          {
            "charIndex": 6,
            "startMs": 3220,
            "endMs": 3560
          },
          {
            "charIndex": 7,
            "startMs": 3560,
            "endMs": 4120
          },
          {
            "charIndex": 8,
            "startMs": 4120,
            "endMs": 4440
          },
          {
            "charIndex": 9,
            "startMs": 4440,
            "endMs": 4800
          },
          {
            "charIndex": 10,
            "startMs": 4800,
            "endMs": 5220
          }
        ]
      }
    }
  ],
  "sentenceGames": [
    {
      "id": "L408-G01",
      "type": "find-character",
      "sentenceId": "L408-S01",
      "targetChar": "法",
      "targetCharIndex": 1
    },
    {
      "id": "L408-G02",
      "type": "teach-character",
      "sentenceId": "L408-S02",
      "targetChar": "法",
      "targetCharIndex": 4,
      "teachAudio": {
        "prefixText": "我有個想",
        "suffixText": "加蓋一座橋吧",
        "prefixSrc": "/assets/lessons/L408/audio/L408-G02-prefix.m4a",
        "suffixSrc": "/assets/lessons/L408/audio/L408-G02-suffix.m4a",
        "prefixAudio": {
          "spokenText": "我有個想",
          "src": "/assets/lessons/L408/audio/L408-G02-prefix.m4a",
          "durationMs": 1280,
          "charTimings": [
            {
              "charIndex": 0,
              "startMs": 0,
              "endMs": 230
            },
            {
              "charIndex": 1,
              "startMs": 230,
              "endMs": 460
            },
            {
              "charIndex": 2,
              "startMs": 460,
              "endMs": 780
            },
            {
              "charIndex": 3,
              "startMs": 780,
              "endMs": 1060
            }
          ]
        },
        "suffixAudio": {
          "spokenText": "加蓋一座橋吧",
          "src": "/assets/lessons/L408/audio/L408-G02-suffix.m4a",
          "durationMs": 2302,
          "charTimings": [
            {
              "charIndex": 0,
              "startMs": 0,
              "endMs": 500
            },
            {
              "charIndex": 1,
              "startMs": 500,
              "endMs": 740
            },
            {
              "charIndex": 2,
              "startMs": 740,
              "endMs": 1260
            },
            {
              "charIndex": 3,
              "startMs": 1260,
              "endMs": 1520
            },
            {
              "charIndex": 4,
              "startMs": 1520,
              "endMs": 1820
            },
            {
              "charIndex": 5,
              "startMs": 1820,
              "endMs": 2080
            }
          ]
        }
      }
    },
    {
      "id": "L408-G03",
      "type": "missing-character",
      "sentenceId": "L408-S03",
      "targetChar": "法",
      "targetCharIndex": 5,
      "missingIndexes": [
        5
      ],
      "options": [
        {
          "id": "correct",
          "text": "法",
          "correct": true
        },
        {
          "id": "wrong-one",
          "text": "方",
          "correct": false
        },
        {
          "id": "wrong-two",
          "text": "去",
          "correct": false
        }
      ]
    },
    {
      "id": "L408-G04",
      "type": "partial-order",
      "sentenceId": "L408-S05",
      "targetChar": "弱",
      "targetCharIndex": 4,
      "missingIndexes": [
        7,
        8,
        9,
        10
      ],
      "options": [
        {
          "id": "card-zhao",
          "text": "照",
          "correct": true,
          "correctOrder": 2
        },
        {
          "id": "card-yong",
          "text": "用",
          "correct": true,
          "correctOrder": 0
        },
        {
          "id": "card-gu",
          "text": "顧",
          "correct": true,
          "correctOrder": 3
        },
        {
          "id": "card-xin",
          "text": "心",
          "correct": true,
          "correctOrder": 1
        }
      ]
    },
    {
      "id": "L408-G05",
      "type": "choose-pronunciation",
      "sentenceId": "L408-S04",
      "targetChar": "越",
      "targetCharIndex": 0,
      "options": [
        {
          "id": "correct",
          "text": "越爬越高，我有一點怕。",
          "spokenText": "越爬越高我有一點怕",
          "correct": true,
          "audioSrc": "/assets/lessons/L408/audio/L408-S04.m4a",
          "audio": {
            "src": "/assets/lessons/L408/audio/L408-S04.m4a",
            "durationMs": 3192,
            "charTimings": [
              {
                "charIndex": 0,
                "startMs": 0,
                "endMs": 420
              },
              {
                "charIndex": 1,
                "startMs": 420,
                "endMs": 720
              },
              {
                "charIndex": 2,
                "startMs": 720,
                "endMs": 1080
              },
              {
                "charIndex": 3,
                "startMs": 1080,
                "endMs": 1420
              },
              {
                "charIndex": 4,
                "startMs": 1420,
                "endMs": 1770
              },
              {
                "charIndex": 5,
                "startMs": 1770,
                "endMs": 2120
              },
              {
                "charIndex": 6,
                "startMs": 2120,
                "endMs": 2350
              },
              {
                "charIndex": 7,
                "startMs": 2350,
                "endMs": 2580
              },
              {
                "charIndex": 8,
                "startMs": 2580,
                "endMs": 2960
              }
            ]
          }
        },
        {
          "id": "wrong-one",
          "text": "越爬越高，我有一點累。",
          "spokenText": "越爬越高我有一點累",
          "correct": false,
          "audioSrc": "/assets/lessons/L408/audio/L408-G05-wrong-one.m4a",
          "audio": {
            "spokenText": "越爬越高我有一點累",
            "src": "/assets/lessons/L408/audio/L408-G05-wrong-one.m4a",
            "durationMs": 3413,
            "charTimings": [
              {
                "charIndex": 0,
                "startMs": 0,
                "endMs": 360
              },
              {
                "charIndex": 1,
                "startMs": 360,
                "endMs": 720
              },
              {
                "charIndex": 2,
                "startMs": 720,
                "endMs": 1100
              },
              {
                "charIndex": 3,
                "startMs": 1100,
                "endMs": 1420
              },
              {
                "charIndex": 4,
                "startMs": 2080,
                "endMs": 2250
              },
              {
                "charIndex": 5,
                "startMs": 2250,
                "endMs": 2420
              },
              {
                "charIndex": 6,
                "startMs": 2420,
                "endMs": 2640
              },
              {
                "charIndex": 7,
                "startMs": 2640,
                "endMs": 2860
              },
              {
                "charIndex": 8,
                "startMs": 2860,
                "endMs": 3140
              }
            ]
          }
        },
        {
          "id": "wrong-two",
          "text": "越走越高，我有一點怕。",
          "spokenText": "越走越高我有一點怕",
          "correct": false,
          "audioSrc": "/assets/lessons/L408/audio/L408-G05-wrong-two.m4a",
          "audio": {
            "spokenText": "越走越高我有一點怕",
            "src": "/assets/lessons/L408/audio/L408-G05-wrong-two.m4a",
            "durationMs": 4001,
            "charTimings": [
              {
                "charIndex": 0,
                "startMs": 0,
                "endMs": 360
              },
              {
                "charIndex": 1,
                "startMs": 360,
                "endMs": 920
              },
              {
                "charIndex": 2,
                "startMs": 920,
                "endMs": 1260
              },
              {
                "charIndex": 3,
                "startMs": 1260,
                "endMs": 1660
              },
              {
                "charIndex": 4,
                "startMs": 2540,
                "endMs": 2700
              },
              {
                "charIndex": 5,
                "startMs": 2700,
                "endMs": 2860
              },
              {
                "charIndex": 6,
                "startMs": 2860,
                "endMs": 3110
              },
              {
                "charIndex": 7,
                "startMs": 3110,
                "endMs": 3360
              },
              {
                "charIndex": 8,
                "startMs": 3360,
                "endMs": 3740
              }
            ]
          }
        }
      ]
    }
  ],
  "stage4AudioAlignment": {
    "L408-G02-prefix": {
      "spokenText": "我有個想",
      "src": "/assets/lessons/L408/audio/L408-G02-prefix.m4a",
      "durationMs": 1280,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 230
        },
        {
          "charIndex": 1,
          "startMs": 230,
          "endMs": 460
        },
        {
          "charIndex": 2,
          "startMs": 460,
          "endMs": 780
        },
        {
          "charIndex": 3,
          "startMs": 780,
          "endMs": 1060
        }
      ]
    },
    "L408-G02-suffix": {
      "spokenText": "加蓋一座橋吧",
      "src": "/assets/lessons/L408/audio/L408-G02-suffix.m4a",
      "durationMs": 2302,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 500
        },
        {
          "charIndex": 1,
          "startMs": 500,
          "endMs": 740
        },
        {
          "charIndex": 2,
          "startMs": 740,
          "endMs": 1260
        },
        {
          "charIndex": 3,
          "startMs": 1260,
          "endMs": 1520
        },
        {
          "charIndex": 4,
          "startMs": 1520,
          "endMs": 1820
        },
        {
          "charIndex": 5,
          "startMs": 1820,
          "endMs": 2080
        }
      ]
    },
    "L408-G05-wrong-one": {
      "spokenText": "越爬越高我有一點累",
      "src": "/assets/lessons/L408/audio/L408-G05-wrong-one.m4a",
      "durationMs": 3413,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 360
        },
        {
          "charIndex": 1,
          "startMs": 360,
          "endMs": 720
        },
        {
          "charIndex": 2,
          "startMs": 720,
          "endMs": 1100
        },
        {
          "charIndex": 3,
          "startMs": 1100,
          "endMs": 1420
        },
        {
          "charIndex": 4,
          "startMs": 2080,
          "endMs": 2250
        },
        {
          "charIndex": 5,
          "startMs": 2250,
          "endMs": 2420
        },
        {
          "charIndex": 6,
          "startMs": 2420,
          "endMs": 2640
        },
        {
          "charIndex": 7,
          "startMs": 2640,
          "endMs": 2860
        },
        {
          "charIndex": 8,
          "startMs": 2860,
          "endMs": 3140
        }
      ]
    },
    "L408-G05-wrong-two": {
      "spokenText": "越走越高我有一點怕",
      "src": "/assets/lessons/L408/audio/L408-G05-wrong-two.m4a",
      "durationMs": 4001,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 360
        },
        {
          "charIndex": 1,
          "startMs": 360,
          "endMs": 920
        },
        {
          "charIndex": 2,
          "startMs": 920,
          "endMs": 1260
        },
        {
          "charIndex": 3,
          "startMs": 1260,
          "endMs": 1660
        },
        {
          "charIndex": 4,
          "startMs": 2540,
          "endMs": 2700
        },
        {
          "charIndex": 5,
          "startMs": 2700,
          "endMs": 2860
        },
        {
          "charIndex": 6,
          "startMs": 2860,
          "endMs": 3110
        },
        {
          "charIndex": 7,
          "startMs": 3110,
          "endMs": 3360
        },
        {
          "charIndex": 8,
          "startMs": 3360,
          "endMs": 3740
        }
      ]
    }
  }
}
```

## Commands
Startup tools:check, ai:check, curriculum:audit-state PASS. curriculum:packet PASS. L408-pipeline generate/process/align invoke the unchanged repo OpenAI TTS, assets:audio and assets:align:ai scripts against an in-memory lesson-local draft adapter; no shared production JSON writes. Scoped formats and production validators PASS. L408-audit checks exact content, timings, decode, volumes, dimensions, bytes and SHA256. Full validate:production baseline PASS; lesson-local validator separately covers L408. Pushed ref must pass curriculum:package-intake before final handoff.

## Review
Post-merge teacher review, usable after Release merges and deploys: https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L408&ref=main
Status: npm run asset:review-status -- --unit L408 --ref main
Pre-merge preview uses the immutable pushed SHA and is not the final main review queue.

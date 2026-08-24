# L347 Production Generation Packet

## Boundary
- Unit: L347
- New character: 嗎
- Zhuyin: ㄇㄚ˙
- Source boundary: origin/main 89f6b471; production JSON includes L001-L346, latest formal character undefined.
- Dependencies: none; L346 is already in latest origin/main at Production start.
- Provisional learned chars: none.
- Package status: asset-complete-package.
- Stage 4 order: G01 find-character, G02 teach-character, G03 missing-character, G04 partial-order, G05 choose-pronunciation.

## Asset Notes
- Images use L058 only as style reference and current visual cast SOP continuity.
- S01/S03 use protagonist girl and mother; S02 uses protagonist girl and older brother with inviting spot for fixed young boy; S04 uses teacher distinct from mother; S05 uses fixed young boy, another generic child, and his father.
- No readable text, labels, signs, numbers, brands, logos, captions, subtitles, speech bubbles, or watermarks are intended in images.
- Audio was generated through repo OpenAI audio pipeline; G05 wrong-choice audio files are complete standalone sentences.

## Final Draft JSON

`json
{
  "id": "L347",
  "order": 347,
  "newChars": [
    "嗎"
  ],
  "zhuyin": {
    "嗎": "ㄇㄚ˙"
  },
  "charAudio": {
    "嗎": "/assets/lessons/L347/audio/char-u55ce.m4a"
  },
  "title": "嗎",
  "requiredRounds": 5,
  "originHint": "Built from origin/main with production JSON through L346???. L346 is formal learned content, so L347 has no provisional dependencies. Release owns production JSON, planner, ledger, registry cleanup, final verify, push, and deployment.",
  "dependsOnLessons": [],
  "provisionalLearnedChars": [],
  "packageStatus": "asset-complete-package",
  "sentences": [
    {
      "id": "L347-S01",
      "text": "請問，這種花要常常澆水嗎？",
      "spokenText": "請問這種花要常常澆水嗎",
      "focusChar": "嗎",
      "displayLines": [
        "請問，",
        "這種花要",
        "常常澆水嗎？"
      ],
      "imagePrompt": "Use L058 lesson images as style references only: warm picture-book pencil-and-watercolor linework, soft natural light, detailed but clean environment, expressive preschool proportions, bright warm palette, phone-readable square composition. Do not copy any L058 person identity. Use refined preferred examples L115-S01, L115-S02, L118-S02, L119-S01, and L128-S03 for proportions and course visual polish. Use current protagonist family anchors L154-S01, L162-S04, and L163-S02 for the recurring protagonist girl, mother, father, and older brother when relevant. Use L012 anchors for the fixed young boy???. No readable text, numbers, labels, signs, price tags, plant tags, brand marks, logos, captions, speech bubbles, subtitles, license plates, or UI symbols anywhere. Cast: recurring protagonist girl plus either recurring protagonist mother or a teacher listening. Prefer protagonist mother for family continuity; mother must not look like a teacher. The girl is asking about the flower, not actively flooding it with water. Scene requirement: 主角小女孩在花園或陽台看著一盆花，旁邊有主角媽媽或老師正在聽她發問；花盆旁可以有小水壺，但不要正在大量澆水。畫面要像是在詢問這種花要不要常常澆水，不要出現植物標籤或文字。",
      "imageNotes": "主角小女孩在花園或陽台看著一盆花，旁邊有主角媽媽或老師正在聽她發問；花盆旁可以有小水壺，但不要正在大量澆水。畫面要像是在詢問這種花要不要常常澆水，不要出現植物標籤或文字。",
      "imageSrc": "/assets/lessons/L347/images/L347-S01.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L347/audio/L347-S01.m4a",
        "durationMs": 3979,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 340
          },
          {
            "charIndex": 1,
            "startMs": 340,
            "endMs": 720
          },
          {
            "charIndex": 2,
            "startMs": 720,
            "endMs": 1040
          },
          {
            "charIndex": 3,
            "startMs": 1040,
            "endMs": 1240
          },
          {
            "charIndex": 4,
            "startMs": 1240,
            "endMs": 1540
          },
          {
            "charIndex": 5,
            "startMs": 1540,
            "endMs": 1720
          },
          {
            "charIndex": 6,
            "startMs": 1720,
            "endMs": 2520
          },
          {
            "charIndex": 7,
            "startMs": 2520,
            "endMs": 2880
          },
          {
            "charIndex": 8,
            "startMs": 2880,
            "endMs": 3000
          },
          {
            "charIndex": 9,
            "startMs": 3000,
            "endMs": 3200
          },
          {
            "charIndex": 10,
            "startMs": 3200,
            "endMs": 3440
          }
        ]
      }
    },
    {
      "id": "L347-S02",
      "text": "你要跟我們一起看星星嗎？",
      "spokenText": "你要跟我們一起看星星嗎",
      "focusChar": "嗎",
      "displayLines": [
        "你要跟",
        "我們一起",
        "看星星嗎？"
      ],
      "imagePrompt": "Use L058 lesson images as style references only: warm picture-book pencil-and-watercolor linework, soft natural light, detailed but clean environment, expressive preschool proportions, bright warm palette, phone-readable square composition. Do not copy any L058 person identity. Use refined preferred examples L115-S01, L115-S02, L118-S02, L119-S01, and L128-S03 for proportions and course visual polish. Use current protagonist family anchors L154-S01, L162-S04, and L163-S02 for the recurring protagonist girl, mother, father, and older brother when relevant. Use L012 anchors for the fixed young boy???. No readable text, numbers, labels, signs, price tags, plant tags, brand marks, logos, captions, speech bubbles, subtitles, license plates, or UI symbols anywhere. Cast: recurring protagonist girl and recurring older brother seated together at night; leave an inviting empty spot for the fixed young boy???. The boy??? may be visible approaching if useful and must match L012 continuity: preschool boy, sky-blue shirt, green shorts, blue shoes, small orange backpack cues when natural. Scene requirement: 晚上戶外安全場景，主角小女孩和主角哥哥坐在院子或陽台看星星，旁邊留出位置，像是在邀請固定「你」小男孩一起來看。天空有明亮星星，不要出現文字、星座名稱或數字。",
      "imageNotes": "晚上戶外安全場景，主角小女孩和主角哥哥坐在院子或陽台看星星，旁邊留出位置，像是在邀請固定「你」小男孩一起來看。天空有明亮星星，不要出現文字、星座名稱或數字。",
      "imageSrc": "/assets/lessons/L347/images/L347-S02.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L347/audio/L347-S02.m4a",
        "durationMs": 4585,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 220
          },
          {
            "charIndex": 1,
            "startMs": 220,
            "endMs": 440
          },
          {
            "charIndex": 2,
            "startMs": 440,
            "endMs": 900
          },
          {
            "charIndex": 3,
            "startMs": 900,
            "endMs": 1100
          },
          {
            "charIndex": 4,
            "startMs": 1100,
            "endMs": 1300
          },
          {
            "charIndex": 5,
            "startMs": 1300,
            "endMs": 1760
          },
          {
            "charIndex": 6,
            "startMs": 1760,
            "endMs": 2220
          },
          {
            "charIndex": 7,
            "startMs": 2220,
            "endMs": 2680
          },
          {
            "charIndex": 8,
            "startMs": 2680,
            "endMs": 3020
          },
          {
            "charIndex": 9,
            "startMs": 3020,
            "endMs": 3180
          },
          {
            "charIndex": 10,
            "startMs": 3180,
            "endMs": 3420
          }
        ]
      }
    },
    {
      "id": "L347-S03",
      "text": "過年可以買新衣服嗎？",
      "spokenText": "過年可以買新衣服嗎",
      "focusChar": "嗎",
      "displayLines": [
        "過年可以買",
        "新衣服嗎？"
      ],
      "imagePrompt": "Use L058 lesson images as style references only: warm picture-book pencil-and-watercolor linework, soft natural light, detailed but clean environment, expressive preschool proportions, bright warm palette, phone-readable square composition. Do not copy any L058 person identity. Use refined preferred examples L115-S01, L115-S02, L118-S02, L119-S01, and L128-S03 for proportions and course visual polish. Use current protagonist family anchors L154-S01, L162-S04, and L163-S02 for the recurring protagonist girl, mother, father, and older brother when relevant. Use L012 anchors for the fixed young boy???. No readable text, numbers, labels, signs, price tags, plant tags, brand marks, logos, captions, speech bubbles, subtitles, license plates, or UI symbols anywhere. Cast: recurring protagonist girl and recurring protagonist mother choosing new clothes. Mother should use the warm protagonist family identity, not a generic shopkeeper or teacher. Scene requirement: 過年前的服飾店或家中試衣場景，主角小女孩看著一件新衣服，主角媽媽在旁邊陪她挑選；畫面表現孩子在詢問能不能買新衣服。不要品牌、吊牌文字、價格數字或店招。",
      "imageNotes": "過年前的服飾店或家中試衣場景，主角小女孩看著一件新衣服，主角媽媽在旁邊陪她挑選；畫面表現孩子在詢問能不能買新衣服。不要品牌、吊牌文字、價格數字或店招。",
      "imageSrc": "/assets/lessons/L347/images/L347-S03.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L347/audio/L347-S03.m4a",
        "durationMs": 3156,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 260
          },
          {
            "charIndex": 1,
            "startMs": 260,
            "endMs": 560
          },
          {
            "charIndex": 2,
            "startMs": 560,
            "endMs": 730
          },
          {
            "charIndex": 3,
            "startMs": 730,
            "endMs": 900
          },
          {
            "charIndex": 4,
            "startMs": 900,
            "endMs": 1100
          },
          {
            "charIndex": 5,
            "startMs": 1100,
            "endMs": 1580
          },
          {
            "charIndex": 6,
            "startMs": 1580,
            "endMs": 1740
          },
          {
            "charIndex": 7,
            "startMs": 1740,
            "endMs": 1840
          },
          {
            "charIndex": 8,
            "startMs": 1840,
            "endMs": 2100
          }
        ]
      }
    },
    {
      "id": "L347-S04",
      "text": "可以請老師過來嗎？",
      "spokenText": "可以請老師過來嗎",
      "focusChar": "請",
      "displayLines": [
        "可以請老師",
        "過來嗎？"
      ],
      "imagePrompt": "Use L058 lesson images as style references only: warm picture-book pencil-and-watercolor linework, soft natural light, detailed but clean environment, expressive preschool proportions, bright warm palette, phone-readable square composition. Do not copy any L058 person identity. Use refined preferred examples L115-S01, L115-S02, L118-S02, L119-S01, and L128-S03 for proportions and course visual polish. Use current protagonist family anchors L154-S01, L162-S04, and L163-S02 for the recurring protagonist girl, mother, father, and older brother when relevant. Use L012 anchors for the fixed young boy???. No readable text, numbers, labels, signs, price tags, plant tags, brand marks, logos, captions, speech bubbles, subtitles, license plates, or UI symbols anywhere. Cast: recurring protagonist girl in classroom and a teacher visually distinct from protagonist mother. Teacher should have tidy classroom clothing and calm instructional posture, not mother face or family palette. Scene requirement: 教室裡，主角小女孩坐在座位上舉手或望向老師，老師在不遠處正要走過來；桌上可以有作業本或積木，表現孩子需要老師過來幫忙。不要黑板文字、作業文字或對話框。",
      "imageNotes": "教室裡，主角小女孩坐在座位上舉手或望向老師，老師在不遠處正要走過來；桌上可以有作業本或積木，表現孩子需要老師過來幫忙。不要黑板文字、作業文字或對話框。",
      "imageSrc": "/assets/lessons/L347/images/L347-S04.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L347/audio/L347-S04.m4a",
        "durationMs": 2902,
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
            "endMs": 1060
          },
          {
            "charIndex": 3,
            "startMs": 1060,
            "endMs": 1350
          },
          {
            "charIndex": 4,
            "startMs": 1350,
            "endMs": 1640
          },
          {
            "charIndex": 5,
            "startMs": 1640,
            "endMs": 1890
          },
          {
            "charIndex": 6,
            "startMs": 1890,
            "endMs": 2140
          },
          {
            "charIndex": 7,
            "startMs": 2140,
            "endMs": 2460
          }
        ]
      }
    },
    {
      "id": "L347-S05",
      "text": "你們常跟爸爸去爬山嗎？",
      "spokenText": "你們常跟爸爸去爬山嗎",
      "focusChar": "嗎",
      "displayLines": [
        "你們常跟",
        "爸爸去",
        "爬山嗎？"
      ],
      "imagePrompt": "Use L058 lesson images as style references only: warm picture-book pencil-and-watercolor linework, soft natural light, detailed but clean environment, expressive preschool proportions, bright warm palette, phone-readable square composition. Do not copy any L058 person identity. Use refined preferred examples L115-S01, L115-S02, L118-S02, L119-S01, and L128-S03 for proportions and course visual polish. Use current protagonist family anchors L154-S01, L162-S04, and L163-S02 for the recurring protagonist girl, mother, father, and older brother when relevant. Use L012 anchors for the fixed young boy???. No readable text, numbers, labels, signs, price tags, plant tags, brand marks, logos, captions, speech bubbles, subtitles, license plates, or UI symbols anywhere. Cast: fixed young boy??? plus one other child with his father on a safe mountain path. The father should match the fixed???family palette where possible and stay distinct from protagonist father; the other child is generic and must not be Xiaoyue/Xiaoguang unless named. Scene requirement: 白天山步道入口或安全平緩步道，固定「你」小男孩和另一位孩子跟著爸爸一起爬山，大家穿著輕便外出服，表情輕鬆。畫面表現親子戶外活動，不要危險峭壁、路牌文字或可讀標誌。",
      "imageNotes": "白天山步道入口或安全平緩步道，固定「你」小男孩和另一位孩子跟著爸爸一起爬山，大家穿著輕便外出服，表情輕鬆。畫面表現親子戶外活動，不要危險峭壁、路牌文字或可讀標誌。",
      "imageSrc": "/assets/lessons/L347/images/L347-S05.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L347/audio/L347-S05.m4a",
        "durationMs": 4537,
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
            "endMs": 1020
          },
          {
            "charIndex": 3,
            "startMs": 1020,
            "endMs": 1300
          },
          {
            "charIndex": 4,
            "startMs": 1300,
            "endMs": 1490
          },
          {
            "charIndex": 5,
            "startMs": 1490,
            "endMs": 1680
          },
          {
            "charIndex": 6,
            "startMs": 1680,
            "endMs": 2140
          },
          {
            "charIndex": 7,
            "startMs": 2140,
            "endMs": 2420
          },
          {
            "charIndex": 8,
            "startMs": 2420,
            "endMs": 2600
          },
          {
            "charIndex": 9,
            "startMs": 2600,
            "endMs": 2840
          }
        ]
      }
    }
  ],
  "sentenceGames": [
    {
      "id": "L347-G01",
      "type": "find-character",
      "sentenceId": "L347-S01",
      "targetChar": "嗎",
      "targetCharIndex": 10,
      "options": [
        {
          "id": "L347-G01-A",
          "text": "嗎",
          "correct": true
        },
        {
          "id": "L347-G01-B",
          "text": "常",
          "correct": false
        },
        {
          "id": "L347-G01-C",
          "text": "水",
          "correct": false
        },
        {
          "id": "L347-G01-D",
          "text": "花",
          "correct": false
        }
      ]
    },
    {
      "id": "L347-G02",
      "type": "teach-character",
      "sentenceId": "L347-S02",
      "targetChar": "嗎",
      "targetCharIndex": 10,
      "teachAudio": {
        "prefixSrc": "/assets/lessons/L347/audio/L347-G02-prefix.m4a"
      }
    },
    {
      "id": "L347-G03",
      "type": "missing-character",
      "sentenceId": "L347-S03",
      "targetChar": "嗎",
      "targetCharIndex": 8,
      "missingIndexes": [
        8
      ],
      "options": [
        {
          "id": "L347-G03-A",
          "text": "嗎",
          "correct": true
        },
        {
          "id": "L347-G03-B",
          "text": "年",
          "correct": false
        },
        {
          "id": "L347-G03-C",
          "text": "新",
          "correct": false
        }
      ]
    },
    {
      "id": "L347-G04",
      "type": "partial-order",
      "sentenceId": "L347-S04",
      "targetChar": "請",
      "missingIndexes": [
        2,
        3,
        4,
        5
      ],
      "options": [
        {
          "id": "L347-G04-A",
          "text": "請",
          "correctOrder": 0
        },
        {
          "id": "L347-G04-B",
          "text": "老",
          "correctOrder": 1
        },
        {
          "id": "L347-G04-C",
          "text": "師",
          "correctOrder": 2
        },
        {
          "id": "L347-G04-D",
          "text": "過",
          "correctOrder": 3
        }
      ],
      "correctSequence": [
        "L347-G04-A",
        "L347-G04-B",
        "L347-G04-C",
        "L347-G04-D"
      ]
    },
    {
      "id": "L347-G05",
      "type": "choose-pronunciation",
      "sentenceId": "L347-S05",
      "targetChar": "嗎",
      "targetCharIndex": 9,
      "options": [
        {
          "id": "L347-G05-A",
          "text": "你們常跟爸爸去爬山嗎？",
          "correct": true,
          "sentenceId": "L347-S05",
          "audioSrc": "/assets/lessons/L347/audio/L347-S05.m4a"
        },
        {
          "id": "L347-G05-B",
          "text": "你們常跟爸爸去看海嗎？",
          "correct": false,
          "audioSrc": "/assets/lessons/L347/audio/L347-G05-wrong-one.m4a"
        },
        {
          "id": "L347-G05-C",
          "text": "你們常跟媽媽去爬山嗎？",
          "correct": false,
          "audioSrc": "/assets/lessons/L347/audio/L347-G05-wrong-two.m4a"
        }
      ]
    }
  ]
}
`

## Request JSON

`json
{
  "id": "L347",
  "order": 347,
  "kind": "lesson",
  "newChars": [
    "嗎"
  ],
  "zhuyin": {
    "嗎": "ㄇㄚ˙"
  },
  "title": "嗎",
  "targetSentenceCount": 5,
  "teacherNotes": "Teacher-approved Editor handoff for L347. Latest origin/main production JSON now includes L346「請」, so L347 has no provisional dependencies. Production builds an asset-complete package; Release owns production JSON, planner, ledger, registry cleanup, final verify, push, and deployment.",
  "dependsOnLessons": [],
  "provisionalLearnedChars": [],
  "generationConstraints": {
    "allowedDisplayCharsBoundary": "latest origin/main learned chars through production JSON L346 plus current new char L347「嗎」",
    "allowedChars": "一二三人個大的小手我有山上下你水在高很家和隻鳥孩指看女飛男門前後也是不到走他沒裡兩狗都爸媽愛書可會這吃做好樣要更邊多少比來起去坐站開左著拿包花朵了畫出學路誰校問找同帶筆借那本給紙心放把桌子盒掉壞眼用鏡鼻臉紅圓太難得過分幾點玩打球棒頭帽草地面外空天雨雲黑白棋鞋穿戴衣脫氣套熱冷喝飯菜老卻麼什為以怎所房間時還燈關窗車等再風吹樹動葉綠滿掃擦先洗又髒亂回就快事跑馬停叫聲聽見說師話課像想真力能火發電生明光亮陽月影長星行道流河從進早晚海船魚游泳池身濕乾服褲換改錯知認新舊半只剩夠錢買貴賣店場市夜具工作忙幫急腳步跳床搬重沙張椅累死睡倒病假才剛裝養休息久體神精變差緊卡住蓋橋座木積堆洞破口傷皮痛受忍耐敢當然怕哭被嚇罵對爬蟲條泥土種澆照顧忘每次記完收彩色粉哪些最西東方圖向線直轉右角落因原別特處理整齊全今們年跟常請嗎",
    "dependsOnLessons": [],
    "provisionalLearnedChars": [],
    "requiredCoverageChars": [
      "嗎",
      "請",
      "常",
      "跟",
      "年",
      "們"
    ],
    "targetCharMinimumCount": {
      "嗎": 3
    },
    "recentTargetMinimumCounts": {
      "請": 2,
      "常": 2,
      "跟": 2,
      "年": 1,
      "們": 1
    },
    "coverageCounts": {
      "嗎": 5,
      "請": 2,
      "常": 3,
      "跟": 2,
      "年": 1,
      "們": 2
    },
    "sentenceLength": {
      "minHan": 4,
      "maxHan": 12
    },
    "forbiddenDisplayChars": [],
    "imageRules": [
      "Generate square image / 1:1 composition for each sentence.",
      "Use the full L058 lesson image set only as style references; do not copy any L058 person identity.",
      "Use docs/LESSON_VISUAL_CAST_SOP.md and refined preferred examples for protagonist girl, protagonist mother, protagonist father, protagonist older brother, fixed young boy「你」, teacher, and home/classroom proportions.",
      "Before accepting each final WebP image, compare side by side with the L058 style anchors, refined preferred examples, and relevant cast anchors.",
      "No readable text, labels, signs, subtitles, brand marks, logos, license plates, price tags, plant tags, route signs, store signs, ticket text, calendar dates, or numbers in images."
    ],
    "audioRules": [
      "Use repo OpenAI audio flow only.",
      "Generate charAudio for 嗎 as public/assets/lessons/L347/audio/char-u55ce.m4a from the single character.",
      "Generate S01-S05 from spokenText exactly.",
      "Generate G02 prefix from exact fragment 你要跟我們一起看星星.",
      "Do not generate G02 suffix because the target is the final Han character.",
      "Generate G05 wrong-option audio as standalone whole-sentence files from exact wrong option texts, not spliced audio."
    ]
  },
  "approvedSentences": [
    {
      "id": "L347-S01",
      "text": "請問，這種花要常常澆水嗎？",
      "spokenText": "請問這種花要常常澆水嗎",
      "focusChar": "嗎",
      "targetCharIndex": 10,
      "displayLines": [
        "請問，",
        "這種花要",
        "常常澆水嗎？"
      ],
      "imageNotes": "主角小女孩在花園或陽台看著一盆花，旁邊有主角媽媽或老師正在聽她發問；花盆旁可以有小水壺，但不要正在大量澆水。畫面要像是在詢問這種花要不要常常澆水，不要出現植物標籤或文字。"
    },
    {
      "id": "L347-S02",
      "text": "你要跟我們一起看星星嗎？",
      "spokenText": "你要跟我們一起看星星嗎",
      "focusChar": "嗎",
      "targetCharIndex": 10,
      "displayLines": [
        "你要跟",
        "我們一起",
        "看星星嗎？"
      ],
      "imageNotes": "晚上戶外安全場景，主角小女孩和主角哥哥坐在院子或陽台看星星，旁邊留出位置，像是在邀請固定「你」小男孩一起來看。天空有明亮星星，不要出現文字、星座名稱或數字。"
    },
    {
      "id": "L347-S03",
      "text": "過年可以買新衣服嗎？",
      "spokenText": "過年可以買新衣服嗎",
      "focusChar": "嗎",
      "targetCharIndex": 8,
      "displayLines": [
        "過年可以買",
        "新衣服嗎？"
      ],
      "imageNotes": "過年前的服飾店或家中試衣場景，主角小女孩看著一件新衣服，主角媽媽在旁邊陪她挑選；畫面表現孩子在詢問能不能買新衣服。不要品牌、吊牌文字、價格數字或店招。"
    },
    {
      "id": "L347-S04",
      "text": "可以請老師過來嗎？",
      "spokenText": "可以請老師過來嗎",
      "focusChar": "請",
      "targetCharIndex": 2,
      "displayLines": [
        "可以請老師",
        "過來嗎？"
      ],
      "imageNotes": "教室裡，主角小女孩坐在座位上舉手或望向老師，老師在不遠處正要走過來；桌上可以有作業本或積木，表現孩子需要老師過來幫忙。不要黑板文字、作業文字或對話框。"
    },
    {
      "id": "L347-S05",
      "text": "你們常跟爸爸去爬山嗎？",
      "spokenText": "你們常跟爸爸去爬山嗎",
      "focusChar": "嗎",
      "targetCharIndex": 9,
      "displayLines": [
        "你們常跟",
        "爸爸去",
        "爬山嗎？"
      ],
      "imageNotes": "白天山步道入口或安全平緩步道，固定「你」小男孩和另一位孩子跟著爸爸一起爬山，大家穿著輕便外出服，表情輕鬆。畫面表現親子戶外活動，不要危險峭壁、路牌文字或可讀標誌。"
    }
  ],
  "stage4Plan": [
    {
      "id": "L347-G01",
      "type": "find-character",
      "sentenceId": "L347-S01",
      "targetChar": "嗎",
      "targetCharIndex": 10,
      "options": [
        {
          "id": "L347-G01-A",
          "text": "嗎",
          "correct": true
        },
        {
          "id": "L347-G01-B",
          "text": "常",
          "correct": false
        },
        {
          "id": "L347-G01-C",
          "text": "水",
          "correct": false
        },
        {
          "id": "L347-G01-D",
          "text": "花",
          "correct": false
        }
      ]
    },
    {
      "id": "L347-G02",
      "type": "teach-character",
      "sentenceId": "L347-S02",
      "targetChar": "嗎",
      "targetCharIndex": 10,
      "teachAudio": {
        "prefixSrc": "/assets/lessons/L347/audio/L347-G02-prefix.m4a"
      }
    },
    {
      "id": "L347-G03",
      "type": "missing-character",
      "sentenceId": "L347-S03",
      "targetChar": "嗎",
      "targetCharIndex": 8,
      "missingIndexes": [
        8
      ],
      "options": [
        {
          "id": "L347-G03-A",
          "text": "嗎",
          "correct": true
        },
        {
          "id": "L347-G03-B",
          "text": "年",
          "correct": false
        },
        {
          "id": "L347-G03-C",
          "text": "新",
          "correct": false
        }
      ]
    },
    {
      "id": "L347-G04",
      "type": "partial-order",
      "sentenceId": "L347-S04",
      "targetChar": "請",
      "missingIndexes": [
        2,
        3,
        4,
        5
      ],
      "options": [
        {
          "id": "L347-G04-A",
          "text": "請",
          "correctOrder": 0
        },
        {
          "id": "L347-G04-B",
          "text": "老",
          "correctOrder": 1
        },
        {
          "id": "L347-G04-C",
          "text": "師",
          "correctOrder": 2
        },
        {
          "id": "L347-G04-D",
          "text": "過",
          "correctOrder": 3
        }
      ],
      "correctSequence": [
        "L347-G04-A",
        "L347-G04-B",
        "L347-G04-C",
        "L347-G04-D"
      ]
    },
    {
      "id": "L347-G05",
      "type": "choose-pronunciation",
      "sentenceId": "L347-S05",
      "targetChar": "嗎",
      "targetCharIndex": 9,
      "options": [
        {
          "id": "L347-G05-A",
          "text": "你們常跟爸爸去爬山嗎？",
          "correct": true,
          "sentenceId": "L347-S05",
          "audioSrc": "/assets/lessons/L347/audio/L347-S05.m4a"
        },
        {
          "id": "L347-G05-B",
          "text": "你們常跟爸爸去看海嗎？",
          "correct": false,
          "audioSrc": "/assets/lessons/L347/audio/L347-G05-wrong-one.m4a"
        },
        {
          "id": "L347-G05-C",
          "text": "你們常跟媽媽去爬山嗎？",
          "correct": false,
          "audioSrc": "/assets/lessons/L347/audio/L347-G05-wrong-two.m4a"
        }
      ]
    }
  ],
  "stage4IndexSelfCheck": [
    "S01 Han-only: 請0 問1 這2 種3 花4 要5 常6 常7 澆8 水9 嗎10; G01 target 嗎 index 10 PASS.",
    "S02 Han-only: 你0 要1 跟2 我3 們4 一5 起6 看7 星8 星9 嗎10; G02 target 嗎 index 10 PASS.",
    "S03 Han-only: 過0 年1 可2 以3 買4 新5 衣6 服7 嗎8; G03 target 嗎 index 8 PASS.",
    "S04 Han-only: 可0 以1 請2 老3 師4 過5 來6 嗎7; G04 missingIndexes [2,3,4,5] = 請/老/師/過 PASS; option cards single Han PASS; correctOrder mapping PASS.",
    "S05 Han-only: 你0 們1 常2 跟3 爸4 爸5 去6 爬7 山8 嗎9; G05 target 嗎 index 9 PASS."
  ]
}
`

# L351 Production Generation Packet

## Boundary
- Unit: L351
- New character: 餐
- Zhuyin: ㄘㄢ
- Source boundary: rebased on origin/main 61dacec7; production JSON includes L001-L350, latest formal character 廳.
- Dependencies: none; L349「讓」 and L350「廳」 are already in latest origin/main.
- Provisional learned chars: none.
- Package status target: asset-complete-package.
- Stage 4 order: G01 find-character, G02 teach-character, G03 missing-character, G04 partial-order, G05 choose-pronunciation.

## Asset Notes
- Images use L058 only as style reference and current visual cast SOP continuity.
- S01 restaurant staff/customers and S03 adult guests are generic people, not fixed cast members.
- S01/S03 draft images were regenerated for cast clarity; only accepted final WebP files are committed.
- No readable text, labels, signs, menus, prices, table numbers, brands, logos, captions, subtitles, speech bubbles, or watermarks are intended in images.
- Audio was generated through repo OpenAI audio pipeline; G05 wrong-choice audio files are complete standalone sentences.
- L351-S01 and L351-S04 timings include manual local corrections after AI alignment produced too-short spans inside connected phrases.

## Final Draft JSON

`json
{
  "id": "L351",
  "order": 351,
  "newChars": [
    "餐"
  ],
  "zhuyin": {
    "餐": "ㄘㄢ"
  },
  "charAudio": {
    "餐": "/assets/lessons/L351/audio/char-u9910.m4a"
  },
  "title": "餐",
  "dependsOnLessons": [],
  "provisionalLearnedChars": [],
  "packageStatus": "asset-complete-package",
  "requiredRounds": 5,
  "originHint": "Rebased on origin/main 61dacec7 through L350. L349「讓」 and L350「廳」 are formal learned content, so L351 has no provisional dependencies. Release owns production JSON insertion, planner export, ledger update, registry cleanup, final verify, push, and deployment.",
  "sentences": [
    {
      "id": "L351-S01",
      "text": "這家餐廳好吃，我們是常客。",
      "spokenText": "這家餐廳好吃我們是常客",
      "focusChar": "餐",
      "displayLines": [
        "這家餐廳",
        "好吃，",
        "我們是常客。"
      ],
      "imageNotes": "一家餐廳裡，主角小女孩和家人坐在熟悉的位置用餐，店員友善地招呼他們，表現他們常常來這家餐廳。不要餐廳招牌、菜單文字、價格、店名、桌號或可讀文字。",
      "imagePrompt": "Use case: illustration-story. Asset type: L351 sentence image, square 1:1. Use the approved L058 lesson images only as style references: warm modern children picture-book pencil-and-watercolor linework, soft natural light, detailed but clean Taiwan home/restaurant environments, expressive preschool-to-early-elementary proportions, stable rounded but not overly generic faces, bright warm palette, and phone-readable composition. Do not copy any specific person from L058. Use current visual cast SOP continuity for recurring protagonist girl, mother, father, and family roles. Avoid all visible text, letters, Chinese characters, zhuyin, numbers, labels, captions, signs, menus, receipts, prices, table numbers, brands, logos, UI symbols, license plates, package text, clock numbers, book titles, and watermarks. Scene: familiar restaurant interior. Recurring protagonist little girl sits with her family at a familiar table eating a meal. A friendly generic restaurant server greets them warmly, showing they are regular customers. Staff and other customers are generic people, not fixed cast members. No menus or signs. Approved image note: 一家餐廳裡，主角小女孩和家人坐在熟悉的位置用餐，店員友善地招呼他們，表現他們常常來這家餐廳。不要餐廳招牌、菜單文字、價格、店名、桌號或可讀文字。",
      "imageSrc": "/assets/lessons/L351/images/L351-S01.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L351/audio/L351-S01.m4a",
        "durationMs": 4610,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 260
          },
          {
            "charIndex": 1,
            "startMs": 260,
            "endMs": 540
          },
          {
            "charIndex": 2,
            "startMs": 540,
            "endMs": 760
          },
          {
            "charIndex": 3,
            "startMs": 760,
            "endMs": 960
          },
          {
            "charIndex": 4,
            "startMs": 960,
            "endMs": 1310
          },
          {
            "charIndex": 5,
            "startMs": 1310,
            "endMs": 1660
          },
          {
            "charIndex": 6,
            "startMs": 2360,
            "endMs": 2500
          },
          {
            "charIndex": 7,
            "startMs": 2500,
            "endMs": 2640
          },
          {
            "charIndex": 8,
            "startMs": 2640,
            "endMs": 2780
          },
          {
            "charIndex": 9,
            "startMs": 2780,
            "endMs": 3100
          },
          {
            "charIndex": 10,
            "startMs": 3100,
            "endMs": 3320
          }
        ]
      }
    },
    {
      "id": "L351-S02",
      "text": "在餐廳，可以讓我學著點餐嗎？",
      "spokenText": "在餐廳可以讓我學著點餐嗎",
      "focusChar": "餐",
      "displayLines": [
        "在餐廳，",
        "可以讓我",
        "學著點餐嗎？"
      ],
      "imageNotes": "餐廳餐桌旁，主角小女孩拿著無字圖卡式菜單或看著桌上的餐點圖片，正在詢問主角爸爸或主角媽媽能不能學著點餐；大人陪在旁邊。不要菜單文字、價格數字、店名或品牌。",
      "imagePrompt": "Use case: illustration-story. Asset type: L351 sentence image, square 1:1. Use the approved L058 lesson images only as style references: warm modern children picture-book pencil-and-watercolor linework, soft natural light, detailed but clean Taiwan home/restaurant environments, expressive preschool-to-early-elementary proportions, stable rounded but not overly generic faces, bright warm palette, and phone-readable composition. Do not copy any specific person from L058. Use current visual cast SOP continuity for recurring protagonist girl, mother, father, and family roles. Avoid all visible text, letters, Chinese characters, zhuyin, numbers, labels, captions, signs, menus, receipts, prices, table numbers, brands, logos, UI symbols, license plates, package text, clock numbers, book titles, and watermarks. Scene: restaurant table. Recurring protagonist little girl holds a wordless picture-card style menu or looks at food pictures while asking a recurring parent, preferably father or mother, whether she may learn to order. Parent sits beside her supportively. Menu must have pictures only, no readable text or prices. Approved image note: 餐廳餐桌旁，主角小女孩拿著無字圖卡式菜單或看著桌上的餐點圖片，正在詢問主角爸爸或主角媽媽能不能學著點餐；大人陪在旁邊。不要菜單文字、價格數字、店名或品牌。",
      "imageSrc": "/assets/lessons/L351/images/L351-S02.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L351/audio/L351-S02.m4a",
        "durationMs": 4208,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 340
          },
          {
            "charIndex": 1,
            "startMs": 340,
            "endMs": 880
          },
          {
            "charIndex": 2,
            "startMs": 880,
            "endMs": 1120
          },
          {
            "charIndex": 3,
            "startMs": 1120,
            "endMs": 1390
          },
          {
            "charIndex": 4,
            "startMs": 1390,
            "endMs": 1660
          },
          {
            "charIndex": 5,
            "startMs": 1660,
            "endMs": 1960
          },
          {
            "charIndex": 6,
            "startMs": 1960,
            "endMs": 2460
          },
          {
            "charIndex": 7,
            "startMs": 2460,
            "endMs": 2720
          },
          {
            "charIndex": 8,
            "startMs": 2720,
            "endMs": 3000
          },
          {
            "charIndex": 9,
            "startMs": 3000,
            "endMs": 3280
          },
          {
            "charIndex": 10,
            "startMs": 3280,
            "endMs": 3500
          },
          {
            "charIndex": 11,
            "startMs": 3500,
            "endMs": 3760
          }
        ]
      }
    },
    {
      "id": "L351-S03",
      "text": "媽媽做了一桌大餐，請客人吃。",
      "spokenText": "媽媽做了一桌大餐請客人吃",
      "focusChar": "餐",
      "displayLines": [
        "媽媽做了",
        "一桌大餐，",
        "請客人吃。"
      ],
      "imageNotes": "家中飯廳，主角媽媽準備了一整桌豐盛餐點，正在招呼一位或幾位 generic 成人客人一起吃；主角小女孩在旁邊看著。客人不是固定角色，不要畫成小光、小月、老師或主角家人。不要牆上文字、餐具品牌或可讀標籤。",
      "imagePrompt": "Use case: illustration-story. Asset type: L351 sentence image, square 1:1. Use the approved L058 lesson images only as style references: warm modern children picture-book pencil-and-watercolor linework, soft natural light, detailed but clean Taiwan home/restaurant environments, expressive preschool-to-early-elementary proportions, stable rounded but not overly generic faces, bright warm palette, and phone-readable composition. Do not copy any specific person from L058. Use current visual cast SOP continuity for recurring protagonist girl, mother, father, and family roles. Avoid all visible text, letters, Chinese characters, zhuyin, numbers, labels, captions, signs, menus, receipts, prices, table numbers, brands, logos, UI symbols, license plates, package text, clock numbers, book titles, and watermarks. Scene: home dining room. Recurring protagonist mother has prepared a full table of generous dishes and warmly invites one or several generic adult guests to eat. Recurring protagonist girl watches nearby. Guests are generic adults, not Xiaoguang, not Xiaoyue, not teacher, and not protagonist family members. Approved image note: 家中飯廳，主角媽媽準備了一整桌豐盛餐點，正在招呼一位或幾位 generic 成人客人一起吃；主角小女孩在旁邊看著。客人不是固定角色，不要畫成小光、小月、老師或主角家人。不要牆上文字、餐具品牌或可讀標籤。",
      "imageSrc": "/assets/lessons/L351/images/L351-S03.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L351/audio/L351-S03.m4a",
        "durationMs": 4641,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 360
          },
          {
            "charIndex": 1,
            "startMs": 360,
            "endMs": 700
          },
          {
            "charIndex": 2,
            "startMs": 700,
            "endMs": 940
          },
          {
            "charIndex": 3,
            "startMs": 940,
            "endMs": 1160
          },
          {
            "charIndex": 4,
            "startMs": 1160,
            "endMs": 1440
          },
          {
            "charIndex": 5,
            "startMs": 1440,
            "endMs": 1600
          },
          {
            "charIndex": 6,
            "startMs": 1600,
            "endMs": 2380
          },
          {
            "charIndex": 7,
            "startMs": 2380,
            "endMs": 2620
          },
          {
            "charIndex": 8,
            "startMs": 2620,
            "endMs": 3360
          },
          {
            "charIndex": 9,
            "startMs": 3360,
            "endMs": 3620
          },
          {
            "charIndex": 10,
            "startMs": 3620,
            "endMs": 3920
          },
          {
            "charIndex": 11,
            "startMs": 3920,
            "endMs": 4160
          }
        ]
      }
    },
    {
      "id": "L351-S04",
      "text": "媽媽讓我點了一客套餐。",
      "spokenText": "媽媽讓我點了一客套餐",
      "focusChar": "餐",
      "displayLines": [
        "媽媽讓我",
        "點了一客",
        "套餐。"
      ],
      "imageNotes": "餐廳裡，主角小女孩在主角媽媽陪同下，指向一份套餐圖片或桌上的套餐模型，像是在學著點一客套餐；桌上可有一份包含主餐、菜和湯的小套餐。不要可讀菜單文字、價格、套餐名稱、店名或品牌。",
      "imagePrompt": "Use case: illustration-story. Asset type: L351 sentence image, square 1:1. Use the approved L058 lesson images only as style references: warm modern children picture-book pencil-and-watercolor linework, soft natural light, detailed but clean Taiwan home/restaurant environments, expressive preschool-to-early-elementary proportions, stable rounded but not overly generic faces, bright warm palette, and phone-readable composition. Do not copy any specific person from L058. Use current visual cast SOP continuity for recurring protagonist girl, mother, father, and family roles. Avoid all visible text, letters, Chinese characters, zhuyin, numbers, labels, captions, signs, menus, receipts, prices, table numbers, brands, logos, UI symbols, license plates, package text, clock numbers, book titles, and watermarks. Scene: restaurant. Recurring protagonist girl sits with recurring protagonist mother and points to a wordless set-meal picture or a table-top display model, learning to order one set meal. Show a small set meal with main dish, vegetables, and soup on the table. No menu text, no prices, no set names. Approved image note: 餐廳裡，主角小女孩在主角媽媽陪同下，指向一份套餐圖片或桌上的套餐模型，像是在學著點一客套餐；桌上可有一份包含主餐、菜和湯的小套餐。不要可讀菜單文字、價格、套餐名稱、店名或品牌。",
      "imageSrc": "/assets/lessons/L351/images/L351-S04.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L351/audio/L351-S04.m4a",
        "durationMs": 3684,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 360
          },
          {
            "charIndex": 1,
            "startMs": 360,
            "endMs": 600
          },
          {
            "charIndex": 2,
            "startMs": 600,
            "endMs": 1100
          },
          {
            "charIndex": 3,
            "startMs": 1100,
            "endMs": 1540
          },
          {
            "charIndex": 4,
            "startMs": 1540,
            "endMs": 1760
          },
          {
            "charIndex": 5,
            "startMs": 1760,
            "endMs": 1960
          },
          {
            "charIndex": 6,
            "startMs": 1960,
            "endMs": 2180
          },
          {
            "charIndex": 7,
            "startMs": 2180,
            "endMs": 2380
          },
          {
            "charIndex": 8,
            "startMs": 2380,
            "endMs": 2820
          },
          {
            "charIndex": 9,
            "startMs": 2820,
            "endMs": 3040
          }
        ]
      }
    },
    {
      "id": "L351-S05",
      "text": "今天的早餐是飯和菜。",
      "spokenText": "今天的早餐是飯和菜",
      "focusChar": "餐",
      "displayLines": [
        "今天的早餐",
        "是飯和菜。"
      ],
      "imageNotes": "早上家中餐桌，主角小女孩面前有一碗飯和幾樣菜，主角媽媽或家人在旁邊準備早餐。畫面要表現早餐是飯和菜，而不是麵包或牛奶。不要包裝文字、時鐘數字、餐具品牌或牆上可讀文字。",
      "imagePrompt": "Use case: illustration-story. Asset type: L351 sentence image, square 1:1. Use the approved L058 lesson images only as style references: warm modern children picture-book pencil-and-watercolor linework, soft natural light, detailed but clean Taiwan home/restaurant environments, expressive preschool-to-early-elementary proportions, stable rounded but not overly generic faces, bright warm palette, and phone-readable composition. Do not copy any specific person from L058. Use current visual cast SOP continuity for recurring protagonist girl, mother, father, and family roles. Avoid all visible text, letters, Chinese characters, zhuyin, numbers, labels, captions, signs, menus, receipts, prices, table numbers, brands, logos, UI symbols, license plates, package text, clock numbers, book titles, and watermarks. Scene: morning home dining table. Recurring protagonist little girl has a bowl of rice and several vegetable dishes in front of her. Recurring protagonist mother or family member prepares breakfast nearby. Clearly show breakfast is rice and dishes, not bread or milk. No package text or clock numbers. Approved image note: 早上家中餐桌，主角小女孩面前有一碗飯和幾樣菜，主角媽媽或家人在旁邊準備早餐。畫面要表現早餐是飯和菜，而不是麵包或牛奶。不要包裝文字、時鐘數字、餐具品牌或牆上可讀文字。",
      "imageSrc": "/assets/lessons/L351/images/L351-S05.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L351/audio/L351-S05.m4a",
        "durationMs": 4822,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 207
          },
          {
            "charIndex": 1,
            "startMs": 207,
            "endMs": 413
          },
          {
            "charIndex": 2,
            "startMs": 413,
            "endMs": 620
          },
          {
            "charIndex": 3,
            "startMs": 620,
            "endMs": 1000
          },
          {
            "charIndex": 4,
            "startMs": 1000,
            "endMs": 1300
          },
          {
            "charIndex": 5,
            "startMs": 1300,
            "endMs": 1940
          },
          {
            "charIndex": 6,
            "startMs": 1940,
            "endMs": 2300
          },
          {
            "charIndex": 7,
            "startMs": 2300,
            "endMs": 2580
          },
          {
            "charIndex": 8,
            "startMs": 2580,
            "endMs": 2860
          }
        ]
      }
    }
  ],
  "sentenceGames": [
    {
      "id": "L351-G01",
      "type": "find-character",
      "sentenceId": "L351-S03",
      "targetChar": "餐",
      "targetCharIndex": 7,
      "prompt": "找到「餐」。",
      "missingIndexes": [
        7
      ],
      "options": [
        {
          "id": "L351-G01-A",
          "text": "餐",
          "correct": true
        },
        {
          "id": "L351-G01-B",
          "text": "廳",
          "correct": false
        },
        {
          "id": "L351-G01-C",
          "text": "讓",
          "correct": false
        },
        {
          "id": "L351-G01-D",
          "text": "客",
          "correct": false
        }
      ]
    },
    {
      "id": "L351-G02",
      "type": "teach-character",
      "sentenceId": "L351-S05",
      "targetChar": "餐",
      "targetCharIndex": 4,
      "prompt": "這個字我不會念，請你幫我。",
      "missingIndexes": [
        4
      ],
      "teachAudio": {
        "prefixText": "今天的早",
        "targetText": "餐",
        "suffixText": "是飯和菜",
        "prefixSrc": "/assets/lessons/L351/audio/L351-G02-prefix.m4a",
        "suffixSrc": "/assets/lessons/L351/audio/L351-G02-suffix.m4a"
      }
    },
    {
      "id": "L351-G03",
      "type": "missing-character",
      "sentenceId": "L351-S02",
      "targetChar": "餐",
      "targetCharIndex": 1,
      "prompt": "字寶寶不見了，把「餐」找回來。",
      "missingIndexes": [
        1
      ],
      "options": [
        {
          "id": "L351-G03-A",
          "text": "餐",
          "correct": true
        },
        {
          "id": "L351-G03-B",
          "text": "廳",
          "correct": false
        },
        {
          "id": "L351-G03-C",
          "text": "客",
          "correct": false
        }
      ]
    },
    {
      "id": "L351-G04",
      "type": "partial-order",
      "sentenceId": "L351-S04",
      "targetChar": "餐",
      "prompt": "把不見的字照順序放回句子。",
      "missingIndexes": [
        2,
        3,
        4,
        5
      ],
      "options": [
        {
          "id": "L351-G04-A",
          "text": "讓",
          "correctOrder": 0,
          "correct": true
        },
        {
          "id": "L351-G04-B",
          "text": "我",
          "correctOrder": 1,
          "correct": true
        },
        {
          "id": "L351-G04-C",
          "text": "點",
          "correctOrder": 2,
          "correct": true
        },
        {
          "id": "L351-G04-D",
          "text": "了",
          "correctOrder": 3,
          "correct": true
        }
      ],
      "correctSequence": [
        "L351-G04-A",
        "L351-G04-B",
        "L351-G04-C",
        "L351-G04-D"
      ]
    },
    {
      "id": "L351-G05",
      "type": "choose-pronunciation",
      "sentenceId": "L351-S01",
      "targetChar": "餐",
      "targetCharIndex": 2,
      "prompt": "聽一聽，誰念得對？",
      "options": [
        {
          "id": "L351-G05-A",
          "text": "這家餐廳好吃，我們是常客。",
          "correct": true,
          "sentenceId": "L351-S01",
          "audioSrc": "/assets/lessons/L351/audio/L351-S01.m4a"
        },
        {
          "id": "L351-G05-B",
          "text": "這家餐廳好看，我們是常客。",
          "correct": false,
          "audioSrc": "/assets/lessons/L351/audio/L351-G05-wrong-one.m4a"
        },
        {
          "id": "L351-G05-C",
          "text": "這家書店好吃，我們是常客。",
          "correct": false,
          "audioSrc": "/assets/lessons/L351/audio/L351-G05-wrong-two.m4a"
        }
      ]
    }
  ]
}
`

## Request JSON

`json
{
  "id": "L351",
  "order": 351,
  "kind": "lesson",
  "newChars": [
    "餐"
  ],
  "zhuyin": {
    "餐": "ㄘㄢ"
  },
  "title": "餐",
  "targetSentenceCount": 5,
  "teacherNotes": "Teacher-approved Production A handoff for L351. Production started from origin/main f9714d19 where L349/L350 were not merged, then rebased after origin/main 61dacec7 integrated L349「讓」 and L350「廳」. L351 now has no provisional dependencies. Production builds a lesson-local asset-complete package; Release owns ordered integration into production JSON, planner, ledger, registry cleanup, final verify, push, and deployment.",
  "dependsOnLessons": [],
  "provisionalLearnedChars": [],
  "generationConstraints": {
    "allowedDisplayCharsBoundary": "formal learned chars through latest origin/main production JSON L350 plus current new char L351「餐」",
    "allowedChars": "一二三人個大的小手我有山上下你水在高很家和隻鳥孩指看女飛男門前後也是不到走他沒裡兩狗都爸媽愛書可會這吃做好樣要更邊多少比來起去坐站開左著拿包花朵了畫出學路誰校問找同帶筆借那本給紙心放把桌子盒掉壞眼用鏡鼻臉紅圓太難得過分幾點玩打球棒頭帽草地面外空天雨雲黑白棋鞋穿戴衣脫氣套熱冷喝飯菜老卻麼什為以怎所房間時還燈關窗車等再風吹樹動葉綠滿掃擦先洗又髒亂回就快事跑馬停叫聲聽見說師話課像想真力能火發電生明光亮陽月影長星行道流河從進早晚海船魚游泳池身濕乾服褲換改錯知認新舊半只剩夠錢買貴賣店場市夜具工作忙幫急腳步跳床搬重沙張椅累死睡倒病假才剛裝養休息久體神精變差緊卡住蓋橋座木積堆洞破口傷皮痛受忍耐敢當然怕哭被嚇罵對爬蟲條泥土種澆照顧忘每次記完收彩色粉哪些最西東方圖向線直轉右角落因原別特處理整齊全今們年跟常請嗎客讓廳餐",
    "dependsOnLessons": [],
    "provisionalLearnedChars": [],
    "requiredCoverageChars": [
      "餐",
      "廳",
      "讓",
      "客",
      "嗎",
      "請"
    ],
    "targetCharMinimumCount": {
      "餐": 3
    },
    "recentTargetMinimumCounts": {
      "廳": 2,
      "讓": 2,
      "客": 2,
      "嗎": 1,
      "請": 1
    },
    "coverageCounts": {
      "餐": 6,
      "廳": 2,
      "讓": 2,
      "客": 3,
      "嗎": 1,
      "請": 1
    },
    "sentenceLength": {
      "minHan": 4,
      "maxHan": 12
    },
    "forbiddenDisplayChars": [],
    "stage4OrderRule": "Canonical normal L006+ order required: G01 find-character, G02 teach-character, G03 missing-character, G04 partial-order, G05 choose-pronunciation. No exception.",
    "imageRules": [
      "Generate square image / 1:1 composition for each sentence.",
      "Use the full L058 lesson image set only as style references; do not copy any L058 person identity.",
      "Before accepting each final WebP image, compare side by side with the L058 style anchors, refined preferred examples, and relevant cast anchors.",
      "Use fixed protagonist girl, protagonist mother, protagonist father, and family continuity consistently when those roles appear.",
      "S03 guests are generic adult guests, not fixed cast members, not Xiaoguang, not Xiaoyue, not teacher, and not protagonist family members.",
      "S01 restaurant staff and customers are generic people, not fixed cast members.",
      "No visible text, letters, numbers, Chinese characters, zhuyin, subtitles, labels, signs, brands, logos, UI symbols, license plates, price tags, receipts, menus, book titles, table numbers, restaurant names, package text, clock numbers, visible numeric writing, or watermarks anywhere."
    ],
    "audioRules": [
      "Use repo OpenAI audio flow only.",
      "Generate charAudio for 餐 as public/assets/lessons/L351/audio/char-u9910.m4a from the single character.",
      "Generate S01-S05 from spokenText exactly.",
      "Generate G02 prefix from exact fragment 今天的早 and suffix from exact fragment 是飯和菜.",
      "Generate G05 wrong-option audio as standalone whole-sentence files from exact wrong option texts, not spliced audio."
    ]
  },
  "approvedSentences": [
    {
      "id": "L351-S01",
      "text": "這家餐廳好吃，我們是常客。",
      "spokenText": "這家餐廳好吃我們是常客",
      "focusChar": "餐",
      "targetCharIndex": 2,
      "displayLines": [
        "這家餐廳",
        "好吃，",
        "我們是常客。"
      ],
      "imageNotes": "一家餐廳裡，主角小女孩和家人坐在熟悉的位置用餐，店員友善地招呼他們，表現他們常常來這家餐廳。不要餐廳招牌、菜單文字、價格、店名、桌號或可讀文字。"
    },
    {
      "id": "L351-S02",
      "text": "在餐廳，可以讓我學著點餐嗎？",
      "spokenText": "在餐廳可以讓我學著點餐嗎",
      "focusChar": "餐",
      "targetCharIndex": 1,
      "displayLines": [
        "在餐廳，",
        "可以讓我",
        "學著點餐嗎？"
      ],
      "imageNotes": "餐廳餐桌旁，主角小女孩拿著無字圖卡式菜單或看著桌上的餐點圖片，正在詢問主角爸爸或主角媽媽能不能學著點餐；大人陪在旁邊。不要菜單文字、價格數字、店名或品牌。"
    },
    {
      "id": "L351-S03",
      "text": "媽媽做了一桌大餐，請客人吃。",
      "spokenText": "媽媽做了一桌大餐請客人吃",
      "focusChar": "餐",
      "targetCharIndex": 7,
      "displayLines": [
        "媽媽做了",
        "一桌大餐，",
        "請客人吃。"
      ],
      "imageNotes": "家中飯廳，主角媽媽準備了一整桌豐盛餐點，正在招呼一位或幾位 generic 成人客人一起吃；主角小女孩在旁邊看著。客人不是固定角色，不要畫成小光、小月、老師或主角家人。不要牆上文字、餐具品牌或可讀標籤。"
    },
    {
      "id": "L351-S04",
      "text": "媽媽讓我點了一客套餐。",
      "spokenText": "媽媽讓我點了一客套餐",
      "focusChar": "餐",
      "targetCharIndex": 9,
      "displayLines": [
        "媽媽讓我",
        "點了一客",
        "套餐。"
      ],
      "imageNotes": "餐廳裡，主角小女孩在主角媽媽陪同下，指向一份套餐圖片或桌上的套餐模型，像是在學著點一客套餐；桌上可有一份包含主餐、菜和湯的小套餐。不要可讀菜單文字、價格、套餐名稱、店名或品牌。"
    },
    {
      "id": "L351-S05",
      "text": "今天的早餐是飯和菜。",
      "spokenText": "今天的早餐是飯和菜",
      "focusChar": "餐",
      "targetCharIndex": 4,
      "displayLines": [
        "今天的早餐",
        "是飯和菜。"
      ],
      "imageNotes": "早上家中餐桌，主角小女孩面前有一碗飯和幾樣菜，主角媽媽或家人在旁邊準備早餐。畫面要表現早餐是飯和菜，而不是麵包或牛奶。不要包裝文字、時鐘數字、餐具品牌或牆上可讀文字。"
    }
  ],
  "stage4Plan": [
    {
      "id": "L351-G01",
      "type": "find-character",
      "sentenceId": "L351-S03",
      "targetChar": "餐",
      "targetCharIndex": 7,
      "prompt": "找到「餐」。",
      "missingIndexes": [
        7
      ],
      "options": [
        {
          "id": "L351-G01-A",
          "text": "餐",
          "correct": true
        },
        {
          "id": "L351-G01-B",
          "text": "廳",
          "correct": false
        },
        {
          "id": "L351-G01-C",
          "text": "讓",
          "correct": false
        },
        {
          "id": "L351-G01-D",
          "text": "客",
          "correct": false
        }
      ]
    },
    {
      "id": "L351-G02",
      "type": "teach-character",
      "sentenceId": "L351-S05",
      "targetChar": "餐",
      "targetCharIndex": 4,
      "prompt": "這個字我不會念，請你幫我。",
      "missingIndexes": [
        4
      ],
      "teachAudio": {
        "prefixText": "今天的早",
        "targetText": "餐",
        "suffixText": "是飯和菜",
        "prefixSrc": "/assets/lessons/L351/audio/L351-G02-prefix.m4a",
        "suffixSrc": "/assets/lessons/L351/audio/L351-G02-suffix.m4a"
      }
    },
    {
      "id": "L351-G03",
      "type": "missing-character",
      "sentenceId": "L351-S02",
      "targetChar": "餐",
      "targetCharIndex": 1,
      "prompt": "字寶寶不見了，把「餐」找回來。",
      "missingIndexes": [
        1
      ],
      "options": [
        {
          "id": "L351-G03-A",
          "text": "餐",
          "correct": true
        },
        {
          "id": "L351-G03-B",
          "text": "廳",
          "correct": false
        },
        {
          "id": "L351-G03-C",
          "text": "客",
          "correct": false
        }
      ]
    },
    {
      "id": "L351-G04",
      "type": "partial-order",
      "sentenceId": "L351-S04",
      "targetChar": "餐",
      "prompt": "把不見的字照順序放回句子。",
      "missingIndexes": [
        2,
        3,
        4,
        5
      ],
      "options": [
        {
          "id": "L351-G04-A",
          "text": "讓",
          "correctOrder": 0,
          "correct": true
        },
        {
          "id": "L351-G04-B",
          "text": "我",
          "correctOrder": 1,
          "correct": true
        },
        {
          "id": "L351-G04-C",
          "text": "點",
          "correctOrder": 2,
          "correct": true
        },
        {
          "id": "L351-G04-D",
          "text": "了",
          "correctOrder": 3,
          "correct": true
        }
      ],
      "correctSequence": [
        "L351-G04-A",
        "L351-G04-B",
        "L351-G04-C",
        "L351-G04-D"
      ]
    },
    {
      "id": "L351-G05",
      "type": "choose-pronunciation",
      "sentenceId": "L351-S01",
      "targetChar": "餐",
      "targetCharIndex": 2,
      "prompt": "聽一聽，誰念得對？",
      "options": [
        {
          "id": "L351-G05-A",
          "text": "這家餐廳好吃，我們是常客。",
          "correct": true,
          "sentenceId": "L351-S01",
          "audioSrc": "/assets/lessons/L351/audio/L351-S01.m4a"
        },
        {
          "id": "L351-G05-B",
          "text": "這家餐廳好看，我們是常客。",
          "correct": false,
          "audioSrc": "/assets/lessons/L351/audio/L351-G05-wrong-one.m4a"
        },
        {
          "id": "L351-G05-C",
          "text": "這家書店好吃，我們是常客。",
          "correct": false,
          "audioSrc": "/assets/lessons/L351/audio/L351-G05-wrong-two.m4a"
        }
      ]
    }
  ],
  "stage4IndexSelfCheck": [
    "S01 Han-only: 這0 家1 餐2 廳3 好4 吃5 我6 們7 是8 常9 客10; G05 target 餐 index 2 PASS.",
    "S02 Han-only: 在0 餐1 廳2 可3 以4 讓5 我6 學7 著8 點9 餐10 嗎11; G03 target 餐 index 1 PASS.",
    "S03 Han-only: 媽0 媽1 做2 了3 一4 桌5 大6 餐7 請8 客9 人10 吃11; G01 target 餐 index 7 PASS.",
    "S04 Han-only: 媽0 媽1 讓2 我3 點4 了5 一6 客7 套8 餐9; G04 missingIndexes [2,3,4,5] = 讓/我/點/了 PASS; option cards are single Han PASS; correctOrder mapping PASS.",
    "S05 Han-only: 今0 天1 的2 早3 餐4 是5 飯6 和7 菜8; G02 target 餐 index 4 PASS."
  ]
}
`

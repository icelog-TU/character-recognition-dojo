# L352 Production Generation Packet

## Boundary
- Unit: L352
- New character: ? ???
- Source boundary: origin/main 61dacec7, formal lessons L001-L350, review modules R041/R042 present.
- Dependencies: L351??? was not in main at Production start.
- Provisional learned chars: ?.
- Coverage targets: ? >= 3, ? >= 2, ? >= 2, ? >= 2, ? >= 1, ? >= 1.
- Coverage result: ? 5 PASS; ? 2 PASS; ? 2 PASS; ? 2 PASS; ? 2 PASS; ? 1 PASS.
- Stage 4 order: canonical fixed order, G01 find-character, G02 teach-character, G03 missing-character, G04 partial-order, G05 choose-pronunciation. No exception.

## Allowed Character And Dependency Audit
- Allowed ceiling: formal learned chars through latest origin/main production JSON L350 + provisional ??? + current new char ???.
- Fully unlearned Han characters in approved text, spokenText, displayLines, focusChar, and Stage 4 option text: none.
- dependsOnLessons: ["L351"]
- provisionalLearnedChars: ["?"]
- Display lines: all displayLines.join("") exactly match text; every line is <= 6 visible characters.
- Stage 4 indexes: all targetCharIndex, missingIndexes, single-Han partial-order cards, and correctOrder mappings PASS.

## Asset Notes
- Images follow LESSON_VISUAL_CAST_SOP style lock using L058 as style-only reference.
- S01 uses recurring protagonist girl and family continuity with generic restaurant customers.
- S02 uses recurring protagonist girl and recurring mother or father.
- S03 uses recurring father and protagonist girl.
- S04 uses protagonist girl or a generic child and a generic elder woman, visually distinct from mother/teacher.
- S05 uses generic adult guests, not fixed cast members; guests must not resemble Xiaoguang, Xiaoyue, teacher, or protagonist family.
- No readable text, numbers, brands, labels, subtitles, UI symbols, logos, license plates, price tags, menus, queue numbers, parking space numbers, route maps, ads, house numbers, or watermarks are intended in images.

## Audio Notes
- Used repo OpenAI audio flow only.
- Generated standalone charAudio from the single character ?.
- Generated S01-S05 full sentence audio from each exact spokenText.
- Generated G02 teach prefix from exact fragment ???????? and suffix from exact fragment ??.
- Generated G05 wrong-option audio as complete whole-sentence files from exact wrong text: ??????????? / ???????????
- AI alignment wrote durationMs and charTimings for all five sentence files.

## Final Approved Records

```json
{
  "id": "L352",
  "order": 352,
  "newChars": [
    "位"
  ],
  "zhuyin": {
    "位": "ㄨㄟˋ"
  },
  "charAudio": {
    "位": "/assets/lessons/L352/audio/char-u4f4d.m4a"
  },
  "title": "位",
  "dependsOnLessons": [
    "L351"
  ],
  "provisionalLearnedChars": [
    "餐"
  ],
  "packageStatus": "dependency-blocked-asset-complete",
  "requiredRounds": 5,
  "originHint": "Production B package from origin/main 61dacec7 through L350 plus provisional L351 餐. L351 was not in main at claim, so Release must integrate L351 before L352. Release owns production JSON insertion, planner export, ledger update, registry cleanup, final verify, push, and deployment.",
  "sentences": [
    {
      "id": "L352-S01",
      "text": "這家餐廳客滿，沒有位子。",
      "spokenText": "這家餐廳客滿沒有位子",
      "focusChar": "位",
      "targetCharIndex": 8,
      "displayLines": [
        "這家餐廳",
        "客滿，",
        "沒有位子。"
      ],
      "imageNotes": "餐廳裡座位都坐滿了，入口處還有幾位客人在等，主角小女孩和家人站在入口附近，看起來找不到位子。不要餐廳招牌、候位號碼、菜單、價格、店名或任何可讀文字。",
      "imagePrompt": "Use case: illustration-story. Asset type: L352 sentence image, square 1:1. Use the approved L058 lesson images only as style references: warm modern children's picture-book pencil-and-watercolor linework, soft natural light, detailed but clean Taiwan environments, expressive preschool proportions, soft cheeks, gentle faces, bright warm palette, and phone-readable square composition. Do not copy any specific person from L058. Use the current protagonist-family identity anchors: recurring protagonist girl with preschool age/proportions, short dark bob with pink hair clip and soft child clothing when context allows; recurring mother as warm family adult distinct from teacher/passersby; recurring father as steady family adult distinct from generic guests/staff. Scene: inside a busy family restaurant, every visible dining seat is occupied and several generic customers wait near the entrance. The recurring protagonist girl stands near the entrance with her recurring family, looking for a seat but none are available. Show the meaning through full tables, occupied chairs, and waiting people, with a clear empty-safe walkway. Avoid all visible text, letters, Chinese characters, zhuyin, subtitles, labels, signs, brand marks, logos, license plates, price tags, receipts, menus, book titles, table numbers, restaurant names, queue numbers, parking space numbers, route maps, station names, ads, house numbers, visible numeric writing, and watermarks.",
      "imageSrc": "/assets/lessons/L352/images/S01.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L352/audio/L352-S01.m4a",
        "durationMs": 3811,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 240
          },
          {
            "charIndex": 1,
            "startMs": 240,
            "endMs": 700
          },
          {
            "charIndex": 2,
            "startMs": 700,
            "endMs": 980
          },
          {
            "charIndex": 3,
            "startMs": 980,
            "endMs": 1220
          },
          {
            "charIndex": 4,
            "startMs": 1220,
            "endMs": 2040
          },
          {
            "charIndex": 5,
            "startMs": 2040,
            "endMs": 2200
          },
          {
            "charIndex": 6,
            "startMs": 2200,
            "endMs": 2510
          },
          {
            "charIndex": 7,
            "startMs": 2510,
            "endMs": 2820
          },
          {
            "charIndex": 8,
            "startMs": 2820,
            "endMs": 3160
          },
          {
            "charIndex": 9,
            "startMs": 3160,
            "endMs": 3280
          }
        ]
      }
    },
    {
      "id": "L352-S02",
      "text": "可以讓我坐窗邊的位子嗎？",
      "spokenText": "可以讓我坐窗邊的位子嗎",
      "focusChar": "位",
      "targetCharIndex": 8,
      "displayLines": [
        "可以讓我",
        "坐窗邊的",
        "位子嗎？"
      ],
      "imageNotes": "餐廳裡，主角小女孩指向靠窗的一個空位，正在詢問主角媽媽或主角爸爸能不能坐窗邊的位子；窗外可以有簡單街景或天空。不要窗上文字、菜單文字、桌號、價格或品牌。",
      "imagePrompt": "Use case: illustration-story. Asset type: L352 sentence image, square 1:1. Use the approved L058 lesson images only as style references: warm modern children's picture-book pencil-and-watercolor linework, soft natural light, detailed but clean Taiwan environments, expressive preschool proportions, soft cheeks, gentle faces, bright warm palette, and phone-readable square composition. Do not copy any specific person from L058. Use the current protagonist-family identity anchors: recurring protagonist girl with preschool age/proportions, short dark bob with pink hair clip and soft child clothing when context allows; recurring mother as warm family adult distinct from teacher/passersby; recurring father as steady family adult distinct from generic guests/staff. Scene: inside a restaurant, the recurring protagonist girl politely points toward one empty seat by a bright window and asks her recurring mother or father if she may sit there. The window may show a simple street scene or sky outside. Make the single empty window-side seat easy to read at phone size. Avoid all visible text, letters, Chinese characters, zhuyin, subtitles, labels, signs, brand marks, logos, license plates, price tags, receipts, menus, book titles, table numbers, restaurant names, queue numbers, parking space numbers, route maps, station names, ads, house numbers, visible numeric writing, and watermarks.",
      "imageSrc": "/assets/lessons/L352/images/S02.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L352/audio/L352-S02.m4a",
        "durationMs": 4269,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 210
          },
          {
            "charIndex": 1,
            "startMs": 210,
            "endMs": 420
          },
          {
            "charIndex": 2,
            "startMs": 420,
            "endMs": 840
          },
          {
            "charIndex": 3,
            "startMs": 840,
            "endMs": 1180
          },
          {
            "charIndex": 4,
            "startMs": 1180,
            "endMs": 1600
          },
          {
            "charIndex": 5,
            "startMs": 1600,
            "endMs": 2020
          },
          {
            "charIndex": 6,
            "startMs": 2020,
            "endMs": 2300
          },
          {
            "charIndex": 7,
            "startMs": 2300,
            "endMs": 2740
          },
          {
            "charIndex": 8,
            "startMs": 2740,
            "endMs": 3060
          },
          {
            "charIndex": 9,
            "startMs": 3060,
            "endMs": 3200
          },
          {
            "charIndex": 10,
            "startMs": 3200,
            "endMs": 3420
          }
        ]
      }
    },
    {
      "id": "L352-S03",
      "text": "餐廳前面剛好有停車位。",
      "spokenText": "餐廳前面剛好有停車位",
      "focusChar": "位",
      "targetCharIndex": 9,
      "displayLines": [
        "餐廳前面",
        "剛好有",
        "停車位。"
      ],
      "imageNotes": "餐廳外面，主角爸爸開車或停車，餐廳前方剛好有一個空的停車位；主角小女孩可坐在車內或站在旁邊看。不要車牌、停車格號碼、路牌文字、餐廳招牌文字或店名。",
      "imagePrompt": "Use case: illustration-story. Asset type: L352 sentence image, square 1:1. Use the approved L058 lesson images only as style references: warm modern children's picture-book pencil-and-watercolor linework, soft natural light, detailed but clean Taiwan environments, expressive preschool proportions, soft cheeks, gentle faces, bright warm palette, and phone-readable square composition. Do not copy any specific person from L058. Use the current protagonist-family identity anchors: recurring protagonist girl with preschool age/proportions, short dark bob with pink hair clip and soft child clothing when context allows; recurring father as steady family adult distinct from generic guests/staff. Scene: outside a restaurant facade with no readable signs. The recurring protagonist father is driving or parking a family car, and directly in front of the restaurant there is one clearly open parking space. The recurring protagonist girl is either visible in the car or standing safely nearby watching. Show parking through curb, painted but unnumbered lines, and the empty space; no collision, no danger. Avoid all visible text, letters, Chinese characters, zhuyin, subtitles, labels, signs, brand marks, logos, license plates, price tags, receipts, menus, book titles, table numbers, restaurant names, queue numbers, parking space numbers, route maps, station names, ads, house numbers, visible numeric writing, and watermarks.",
      "imageSrc": "/assets/lessons/L352/images/S03.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L352/audio/L352-S03.m4a",
        "durationMs": 3045,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 340
          },
          {
            "charIndex": 1,
            "startMs": 340,
            "endMs": 580
          },
          {
            "charIndex": 2,
            "startMs": 580,
            "endMs": 900
          },
          {
            "charIndex": 3,
            "startMs": 900,
            "endMs": 1200
          },
          {
            "charIndex": 4,
            "startMs": 1200,
            "endMs": 1460
          },
          {
            "charIndex": 5,
            "startMs": 1460,
            "endMs": 1740
          },
          {
            "charIndex": 6,
            "startMs": 1740,
            "endMs": 1940
          },
          {
            "charIndex": 7,
            "startMs": 1940,
            "endMs": 2200
          },
          {
            "charIndex": 8,
            "startMs": 2200,
            "endMs": 2380
          },
          {
            "charIndex": 9,
            "startMs": 2380,
            "endMs": 2580
          }
        ]
      }
    },
    {
      "id": "L352-S04",
      "text": "請讓位給老太太。",
      "spokenText": "請讓位給老太太",
      "focusChar": "位",
      "targetCharIndex": 2,
      "displayLines": [
        "請讓位給",
        "老太太。"
      ],
      "imageNotes": "公車或捷運車廂裡，主角小女孩或一位 generic child 正在把座位讓給老太太；老太太站在旁邊準備坐下，畫面表現禮貌讓位。不要路線圖文字、站名、廣告字、車號或可讀標誌。",
      "imagePrompt": "Use case: illustration-story. Asset type: L352 sentence image, square 1:1. Use the approved L058 lesson images only as style references: warm modern children's picture-book pencil-and-watercolor linework, soft natural light, detailed but clean Taiwan environments, expressive preschool proportions, soft cheeks, gentle faces, bright warm palette, and phone-readable square composition. Do not copy any specific person from L058. Use the current protagonist girl identity if a named family child is shown; otherwise use a generic child distinct from Xiaoguang, Xiaoyue, and the recurring young boy. Scene: inside a clean bus or metro carriage. A polite child is standing up from a seat and offering it to a generic elder woman. The elder woman stands nearby and is about to sit down, with gentle older adult face lines and simple elder clothing, visually distinct from the protagonist mother and teacher. Keep the interaction respectful and calm. Avoid all visible text, letters, Chinese characters, zhuyin, subtitles, labels, signs, brand marks, logos, license plates, price tags, receipts, menus, book titles, table numbers, restaurant names, queue numbers, parking space numbers, route maps, station names, ads, house numbers, vehicle numbers, visible numeric writing, and watermarks.",
      "imageSrc": "/assets/lessons/L352/images/S04.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L352/audio/L352-S04.m4a",
        "durationMs": 3773,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 620
          },
          {
            "charIndex": 1,
            "startMs": 620,
            "endMs": 1000
          },
          {
            "charIndex": 2,
            "startMs": 1000,
            "endMs": 1260
          },
          {
            "charIndex": 3,
            "startMs": 1260,
            "endMs": 1720
          },
          {
            "charIndex": 4,
            "startMs": 1720,
            "endMs": 2080
          },
          {
            "charIndex": 5,
            "startMs": 2080,
            "endMs": 2380
          },
          {
            "charIndex": 6,
            "startMs": 2380,
            "endMs": 2640
          }
        ]
      }
    },
    {
      "id": "L352-S05",
      "text": "一口氣來了好幾位客人。",
      "spokenText": "一口氣來了好幾位客人",
      "focusChar": "位",
      "targetCharIndex": 7,
      "displayLines": [
        "一口氣來了",
        "好幾位",
        "客人。"
      ],
      "imageNotes": "家中玄關或餐廳入口，一次來了好幾位 generic 成人客人，主角小女孩或家人正在迎接他們；畫面要表現「好幾位客人一起來」，不要只畫一位客人。客人不是固定角色，不要畫成小光、小月、老師或主角家人。不要門牌號碼、招牌或可讀文字。",
      "imagePrompt": "Use case: illustration-story. Asset type: L352 sentence image, square 1:1. Use the approved L058 lesson images only as style references: warm modern children's picture-book pencil-and-watercolor linework, soft natural light, detailed but clean Taiwan environments, expressive preschool proportions, soft cheeks, gentle faces, bright warm palette, and phone-readable square composition. Do not copy any specific person from L058. Use the current protagonist-family identity anchors when the family appears: recurring protagonist girl, mother, father, and older brother remain visually distinct. Scene: at a home entryway or restaurant entrance, several varied generic adult guests arrive together at once, clearly more than one guest. The recurring protagonist girl or her family welcomes them warmly. The guests are generic adults and must not look like Xiaoguang, Xiaoyue, teacher, or protagonist family members. Make the group arrival clear at phone size. Avoid all visible text, letters, Chinese characters, zhuyin, subtitles, labels, signs, brand marks, logos, license plates, price tags, receipts, menus, book titles, table numbers, restaurant names, queue numbers, parking space numbers, route maps, station names, ads, house numbers, visible numeric writing, and watermarks.",
      "imageSrc": "/assets/lessons/L352/images/S05.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L352/audio/L352-S05.m4a",
        "durationMs": 3939,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 340
          },
          {
            "charIndex": 1,
            "startMs": 340,
            "endMs": 700
          },
          {
            "charIndex": 2,
            "startMs": 700,
            "endMs": 1020
          },
          {
            "charIndex": 3,
            "startMs": 1020,
            "endMs": 1390
          },
          {
            "charIndex": 4,
            "startMs": 1390,
            "endMs": 1760
          },
          {
            "charIndex": 5,
            "startMs": 1760,
            "endMs": 2280
          },
          {
            "charIndex": 6,
            "startMs": 2280,
            "endMs": 2460
          },
          {
            "charIndex": 7,
            "startMs": 2460,
            "endMs": 2740
          },
          {
            "charIndex": 8,
            "startMs": 2740,
            "endMs": 3020
          },
          {
            "charIndex": 9,
            "startMs": 3020,
            "endMs": 3260
          }
        ]
      }
    }
  ],
  "sentenceGames": [
    {
      "id": "L352-G01",
      "type": "find-character",
      "sentenceId": "L352-S01",
      "targetChar": "位",
      "targetCharIndex": 8,
      "prompt": "找到「位」。",
      "missingIndexes": [
        8
      ],
      "options": [
        {
          "id": "L352-G01-A",
          "text": "位",
          "correct": true
        },
        {
          "id": "L352-G01-B",
          "text": "餐",
          "correct": false
        },
        {
          "id": "L352-G01-C",
          "text": "廳",
          "correct": false
        },
        {
          "id": "L352-G01-D",
          "text": "客",
          "correct": false
        }
      ]
    },
    {
      "id": "L352-G02",
      "type": "teach-character",
      "sentenceId": "L352-S02",
      "targetChar": "位",
      "targetCharIndex": 8,
      "prompt": "聽一聽，幫忙說出這個字。",
      "missingIndexes": [
        8
      ],
      "teachAudio": {
        "prefixText": "可以讓我坐窗邊的",
        "targetText": "位",
        "suffixText": "子嗎",
        "prefixSrc": "/assets/lessons/L352/audio/L352-G02-prefix.m4a",
        "suffixSrc": "/assets/lessons/L352/audio/L352-G02-suffix.m4a"
      }
    },
    {
      "id": "L352-G03",
      "type": "missing-character",
      "sentenceId": "L352-S03",
      "targetChar": "位",
      "targetCharIndex": 9,
      "prompt": "選出少掉的字。",
      "missingIndexes": [
        9
      ],
      "options": [
        {
          "id": "L352-G03-A",
          "text": "位",
          "correct": true
        },
        {
          "id": "L352-G03-B",
          "text": "廳",
          "correct": false
        },
        {
          "id": "L352-G03-C",
          "text": "餐",
          "correct": false
        }
      ]
    },
    {
      "id": "L352-G04",
      "type": "partial-order",
      "sentenceId": "L352-S04",
      "targetChar": "位",
      "prompt": "把字排回句子裡。",
      "missingIndexes": [
        0,
        1,
        2,
        3
      ],
      "options": [
        {
          "id": "L352-G04-A",
          "text": "請",
          "correctOrder": 0,
          "correct": true
        },
        {
          "id": "L352-G04-B",
          "text": "讓",
          "correctOrder": 1,
          "correct": true
        },
        {
          "id": "L352-G04-C",
          "text": "位",
          "correctOrder": 2,
          "correct": true
        },
        {
          "id": "L352-G04-D",
          "text": "給",
          "correctOrder": 3,
          "correct": true
        }
      ],
      "correctSequence": [
        "L352-G04-A",
        "L352-G04-B",
        "L352-G04-C",
        "L352-G04-D"
      ]
    },
    {
      "id": "L352-G05",
      "type": "choose-pronunciation",
      "sentenceId": "L352-S05",
      "targetChar": "位",
      "targetCharIndex": 7,
      "prompt": "聽朋友念，選出正確的一句。",
      "options": [
        {
          "id": "L352-G05-A",
          "text": "一口氣來了好幾位客人。",
          "correct": true,
          "sentenceId": "L352-S05",
          "audioSrc": "/assets/lessons/L352/audio/L352-S05.m4a"
        },
        {
          "id": "L352-G05-B",
          "text": "一口氣來了好幾個客人。",
          "correct": false,
          "audioSrc": "/assets/lessons/L352/audio/L352-G05-wrong-one.m4a"
        },
        {
          "id": "L352-G05-C",
          "text": "一口氣走了好幾位客人。",
          "correct": false,
          "audioSrc": "/assets/lessons/L352/audio/L352-G05-wrong-two.m4a"
        }
      ]
    }
  ],
  "stage4IndexSelfCheck": [
    "S01 Han-only: 這0 家1 餐2 廳3 客4 滿5 沒6 有7 位8 子9; G01 target 位 index 8 PASS.",
    "S02 Han-only: 可0 以1 讓2 我3 坐4 窗5 邊6 的7 位8 子9 嗎10; G02 target 位 index 8 PASS.",
    "S03 Han-only: 餐0 廳1 前2 面3 剛4 好5 有6 停7 車8 位9; G03 target 位 index 9 PASS.",
    "S04 Han-only: 請0 讓1 位2 給3 老4 太5 太6; G04 missingIndexes [0,1,2,3] = 請/讓/位/給 PASS; option cards are single Han PASS; correctOrder mapping PASS.",
    "S05 Han-only: 一0 口1 氣2 來3 了4 好5 幾6 位7 客8 人9; G05 target 位 index 7 PASS."
  ]
}
```

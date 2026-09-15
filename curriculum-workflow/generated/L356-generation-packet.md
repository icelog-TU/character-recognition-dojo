# L356 Generation Packet

Production slot: Production B
Branch: codex/l356-complete-package
Origin/main boundary at claim: 71762b03 Integrate lesson L353
Package status: dependency-blocked-asset-complete
Depends on lessons: ["L354","L355"]
Provisional learned chars: ["排","雞"]

## SOP And Style Lock

Read latest production SOPs before package work, including project handoff, role production, curriculum operating/production, sentence generation, schema, AI generation setup, visual cast SOP, cast database, registry, and ledger. Use L058 images as style reference only: pencil-and-watercolor linework, warm natural light, bright warm palette, detailed but clean environments, expressive preschool proportions, soft natural faces, consistent body proportions, and phone-readable square composition. Do not copy L058 identities.

## Sentences And Final Assets

- L356-S01: 太陽一出來，公雞就叫。 / spokenText=太陽一出來公雞就叫 / audio=/assets/lessons/L356/audio/L356-S01.m4a / durationMs=4236 / charTimings=9
- L356-S02: 小雞跟著公雞跑。 / spokenText=小雞跟著公雞跑 / audio=/assets/lessons/L356/audio/L356-S02.m4a / durationMs=4198 / charTimings=7
- L356-S03: 公車上正好有位子。 / spokenText=公車上正好有位子 / audio=/assets/lessons/L356/audio/L356-S03.m4a / durationMs=4530 / charTimings=8
- L356-S04: 等公車時要排好。 / spokenText=等公車時要排好 / audio=/assets/lessons/L356/audio/L356-S04.m4a / durationMs=2833 / charTimings=7
- L356-S05: 餐廳正門口有一排沙發。 / spokenText=餐廳正門口有一排沙發 / audio=/assets/lessons/L356/audio/L356-S05.m4a / durationMs=3649 / charTimings=10

## Stage 4 Fixed Order

G01=find-character, G02=teach-character, G03=missing-character, G04=partial-order, G05=choose-pronunciation. Each approved sentence is used exactly once; no order exception was taken.

- L356-G01: find-character / sentenceId=L356-S01 / targetChar=公 / targetCharIndex=5
- L356-G02: teach-character / sentenceId=L356-S02 / targetChar=公 / targetCharIndex=4 / teachAudio={"prefixText":"小雞跟著","targetText":"公","suffixText":"雞跑","prefixSrc":"/assets/lessons/L356/audio/L356-G02-prefix.m4a","suffixSrc":"/assets/lessons/L356/audio/L356-G02-suffix.m4a"}
- L356-G03: missing-character / sentenceId=L356-S04 / targetChar=公 / targetCharIndex=1 / options=[{"id":"L356-G03-A","text":"公","correct":true}, {"id":"L356-G03-B","text":"全","correct":false}, {"id":"L356-G03-C","text":"個","correct":false}]
- L356-G04: partial-order / sentenceId=L356-S05 / targetChar=排 / targetCharIndex= / options=[{"id":"L356-G04-A","text":"餐","correctOrder":0,"correct":true},{"id":"L356-G04-B","text":"廳","correctOrder":1,"correct":true},{"id":"L356-G04-C","text":"正","correctOrder":2,"correct":true},{"id":"L356-G04-D","text":"門","correctOrder":3,"correct":true}]
- L356-G05: choose-pronunciation / sentenceId=L356-S03 / targetChar=公 / targetCharIndex=0 / options=[{"id":"correct","text":"公車上正好有位子。","correct":true,"sentenceId":"L356-S03","audioSrc":"/assets/lessons/L356/audio/L356-S03.m4a"},{"id":"wrong-one","text":"公車上正好沒位子。","correct":false,"audioSrc":"/assets/lessons/L356/audio/L356-G05-wrong-one.m4a"},{"id":"wrong-two","text":"公車上正好有帽子。","correct":false,"audioSrc":"/assets/lessons/L356/audio/L356-G05-wrong-two.m4a"}]

## Image Results

S01: PASS style-lock; no recurring cast required; rooster crowing at sunrise; no readable text.
S02: PASS style-lock; no recurring cast required; chicks following rooster; no readable text.
S03: PASS style-lock and cast; protagonist girl plus family adult on bus with empty seat; no readable route/station/ad text.
S04: PASS style-lock and cast; protagonist girl in orderly bus-stop line; generic classmates/passengers not Xiaoyue/Xiaoguang; no readable markings.
S05: PASS style-lock; no recurring cast required; restaurant entrance/lobby with one row of sofas; no readable signage.

## Audio Results

OpenAI repo audio pipeline generated standalone character audio, sentence audio, G02 prefix/suffix fragments, and complete G05 wrong-option audio. assets:audio normalized all files to m4a; assets:align:ai generated charTimings for S01-S05.

## Full Draft JSON

`json
{
  "id": "L356",
  "order": 356,
  "newChars": [
    "公"
  ],
  "zhuyin": {
    "公": "ㄍㄨㄥ"
  },
  "charAudio": {
    "公": "/assets/lessons/L356/audio/char-u516c.m4a"
  },
  "title": "公",
  "dependsOnLessons": [
    "L354",
    "L355"
  ],
  "provisionalLearnedChars": [
    "排",
    "雞"
  ],
  "packageStatus": "dependency-blocked-asset-complete",
  "requiredRounds": 5,
  "originHint": "Production B package from origin/main 71762b03 through L353 plus provisional L354 排 and L355 雞. L354 and L355 were not in main at claim, so Release must integrate L354 and L355 before L356. Release owns production JSON insertion, planner export, ledger update, registry cleanup, final verify, push, and deployment.",
  "sentences": [
    {
      "id": "L356-S01",
      "text": "太陽一出來，公雞就叫。",
      "spokenText": "太陽一出來公雞就叫",
      "focusChar": "公",
      "targetCharIndex": 5,
      "displayLines": [
        "太陽一出來，",
        "公雞就叫。"
      ],
      "imageNotes": "清晨戶外草地或農家旁，太陽剛升起，一隻公雞站在草地上張口叫。畫面要清楚有「太陽出來」和「公雞叫」兩個重點。不要文字、招牌或過度擬人化。",
      "imagePrompt": "Use case: illustration-story. Asset type: L356-S01 square lesson image. Use the approved L058 lesson images only as style references: warm modern children's picture-book pencil-and-watercolor linework, soft natural light, detailed but clean Taiwan countryside environment, expressive natural animal posture, bright warm palette, and phone-readable square composition. Do not copy any specific person or identity from L058. Scene: early morning beside grassland or a small farmyard, with the sun just rising over the horizon and warm morning light. One rooster stands on the grass with beak open, clearly crowing as the sun comes up. Make both key ideas visible: sunrise and rooster crowing. The rooster should look like a real rooster in a gentle picture-book style, not a human-like character. Avoid people, readable text, letters, Chinese characters, zhuyin, subtitles, labels, signs, brands, logos, numbers, watermarks, dark palette, anime, flat cartoon, 3D render, photorealism, and over-anthropomorphism.",
      "imageSrc": "/assets/lessons/L356/images/L356-S01.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L356/audio/L356-S01.m4a",
        "durationMs": 4236,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 380
          },
          {
            "charIndex": 1,
            "startMs": 380,
            "endMs": 620
          },
          {
            "charIndex": 2,
            "startMs": 620,
            "endMs": 940
          },
          {
            "charIndex": 3,
            "startMs": 940,
            "endMs": 1250
          },
          {
            "charIndex": 4,
            "startMs": 1250,
            "endMs": 1560
          },
          {
            "charIndex": 5,
            "startMs": 2180,
            "endMs": 2520
          },
          {
            "charIndex": 6,
            "startMs": 2520,
            "endMs": 2700
          },
          {
            "charIndex": 7,
            "startMs": 2700,
            "endMs": 3060
          },
          {
            "charIndex": 8,
            "startMs": 3060,
            "endMs": 3280
          }
        ]
      }
    },
    {
      "id": "L356-S02",
      "text": "小雞跟著公雞跑。",
      "spokenText": "小雞跟著公雞跑",
      "focusChar": "公",
      "targetCharIndex": 4,
      "displayLines": [
        "小雞跟著",
        "公雞跑。"
      ],
      "imageNotes": "草地上，一隻公雞在前面跑，幾隻小雞跟在後面跑。前後方向要清楚，讓孩子看得出「小雞跟著公雞」。不要人物、文字或標誌。",
      "imagePrompt": "Use case: illustration-story. Asset type: L356-S02 square lesson image. Use the approved L058 lesson images only as style references: warm modern children's picture-book pencil-and-watercolor linework, soft natural light, detailed but clean outdoor grassland, expressive natural animal posture, bright warm palette, and phone-readable square composition. Do not copy any specific person or identity from L058. Scene: green grass outdoors in warm daylight. One adult rooster runs in front from left to right, and several small chicks run behind it in the same direction. The front/back direction must be clear so a preschool child can see that the chicks are following the rooster. Animals should be natural and cute but not over-humanized. Avoid people, readable text, letters, Chinese characters, zhuyin, subtitles, labels, signs, brands, logos, numbers, watermarks, dark palette, anime, flat cartoon, 3D render, photorealism, and confusing direction.",
      "imageSrc": "/assets/lessons/L356/images/L356-S02.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L356/audio/L356-S02.m4a",
        "durationMs": 4198,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 600
          },
          {
            "charIndex": 1,
            "startMs": 600,
            "endMs": 800
          },
          {
            "charIndex": 2,
            "startMs": 800,
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
            "endMs": 1780
          },
          {
            "charIndex": 5,
            "startMs": 1780,
            "endMs": 1900
          },
          {
            "charIndex": 6,
            "startMs": 1900,
            "endMs": 2300
          }
        ]
      }
    },
    {
      "id": "L356-S03",
      "text": "公車上正好有位子。",
      "spokenText": "公車上正好有位子",
      "focusChar": "公",
      "targetCharIndex": 0,
      "displayLines": [
        "公車上",
        "正好有位子。"
      ],
      "imageNotes": "公車內部，主角小女孩和家人或同學剛上公車，車上正好有一個空位子。要清楚看出是在公車上，也要看得出有空座位。不要路線號碼、站名、廣告文字或車牌。",
      "imagePrompt": "Use case: illustration-story. Asset type: L356-S03 square lesson image. Use the approved L058 lesson images only as style references: warm modern children's picture-book pencil-and-watercolor linework, soft natural light, detailed but clean Taiwan bus interior, expressive preschool proportions, soft natural faces, bright warm palette, and phone-readable square composition. Do not copy any specific person from L058. Use the current protagonist-family identity anchors: recurring protagonist girl with preschool age/proportions, short dark bob with small pink hair clip and soft child clothing when context allows; recurring family adults or generic classmates should remain visually distinct from teacher, Xiaoyue, and Xiaoguang. Scene: inside a clean city bus just after boarding. The recurring protagonist girl and family member or classmate stand in the aisle and notice one clearly empty seat. Make it unmistakably a bus interior with seats, windows, handrails, and aisle, and make the empty seat easy to read. Avoid readable route numbers, station names, ads, license plates, bus numbers, seat numbers, route maps, Chinese characters, letters, zhuyin, subtitles, labels, signs, brands, logos, visible numeric writing, watermarks, dark palette, anime, flat cartoon, 3D render, photorealism, and copied L058 identities.",
      "imageSrc": "/assets/lessons/L356/images/L356-S03.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L356/audio/L356-S03.m4a",
        "durationMs": 4530,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 380
          },
          {
            "charIndex": 1,
            "startMs": 380,
            "endMs": 640
          },
          {
            "charIndex": 2,
            "startMs": 640,
            "endMs": 1160
          },
          {
            "charIndex": 3,
            "startMs": 1160,
            "endMs": 1580
          },
          {
            "charIndex": 4,
            "startMs": 1580,
            "endMs": 1880
          },
          {
            "charIndex": 5,
            "startMs": 1880,
            "endMs": 2200
          },
          {
            "charIndex": 6,
            "startMs": 2200,
            "endMs": 2540
          },
          {
            "charIndex": 7,
            "startMs": 2540,
            "endMs": 2660
          }
        ]
      }
    },
    {
      "id": "L356-S04",
      "text": "等公車時要排好。",
      "spokenText": "等公車時要排好",
      "focusChar": "公",
      "targetCharIndex": 1,
      "displayLines": [
        "等公車時",
        "要排好。"
      ],
      "imageNotes": "公車站旁，主角小女孩和幾個孩子或乘客正在等公車，大家排成整齊的一排。公車可在遠處靠近或停在旁邊。不要站牌文字、路線號碼、廣告或車牌。",
      "imagePrompt": "Use case: illustration-story. Asset type: L356-S04 square lesson image. Use the approved L058 lesson images only as style references: warm modern children's picture-book pencil-and-watercolor linework, soft natural light, detailed but clean Taiwan street setting, expressive preschool proportions, soft natural faces, bright warm palette, and phone-readable square composition. Do not copy any specific person from L058. Use the recurring protagonist girl identity when she appears, with stable preschool proportions and short dark bob with pink hair clip when natural. Scene: beside a bus stop on a safe sidewalk. The recurring protagonist girl and several generic children or passengers wait for the bus in one neat orderly line. A bus may be approaching in the distance or stopped nearby, but with no readable markings. Generic classmates and passengers must not look like Xiaoyue, Xiaoguang, or the fixed young boy classmate. Avoid readable bus stop text, route numbers, station names, advertisements, license plates, bus numbers, Chinese characters, letters, zhuyin, subtitles, labels, signs, brands, logos, visible numeric writing, watermarks, dark palette, anime, flat cartoon, 3D render, photorealism, and copied L058 identities.",
      "imageSrc": "/assets/lessons/L356/images/L356-S04.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L356/audio/L356-S04.m4a",
        "durationMs": 2833,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 340
          },
          {
            "charIndex": 1,
            "startMs": 340,
            "endMs": 780
          },
          {
            "charIndex": 2,
            "startMs": 780,
            "endMs": 980
          },
          {
            "charIndex": 3,
            "startMs": 980,
            "endMs": 1320
          },
          {
            "charIndex": 4,
            "startMs": 1320,
            "endMs": 1600
          },
          {
            "charIndex": 5,
            "startMs": 1600,
            "endMs": 1940
          },
          {
            "charIndex": 6,
            "startMs": 1940,
            "endMs": 2240
          }
        ]
      }
    },
    {
      "id": "L356-S05",
      "text": "餐廳正門口有一排沙發。",
      "spokenText": "餐廳正門口有一排沙發",
      "focusChar": "排",
      "targetCharIndex": 7,
      "displayLines": [
        "餐廳正門口",
        "有一排沙發。"
      ],
      "imageNotes": "餐廳正門口或入口大廳旁，有一排沙發整齊放著。畫面要看得出是餐廳入口，不是家裡客廳。不要可讀招牌、菜單文字、價格、品牌或標誌。",
      "imagePrompt": "Use case: illustration-story. Asset type: L356-S05 square lesson image. Use the approved L058 lesson images only as style references: warm modern children's picture-book pencil-and-watercolor linework, soft natural light, detailed but clean Taiwan restaurant entry environment, bright warm palette, and phone-readable square composition. Do not copy any specific person from L058. Scene: restaurant front entrance or entrance lobby, clearly not a home living room. Beside the main doorway or lobby wall, a row of sofas is neatly arranged in a straight line for waiting guests. The restaurant setting should be shown through entry architecture, host counter shape, dining area glimpse, plants, warm lights, and clean floor, but all surfaces with signage or menus are blank or purely decorative. No people are required. Avoid readable restaurant signs, menu text, price tags, brand marks, logos, labels, Chinese characters, letters, zhuyin, subtitles, table numbers, queue numbers, visible numeric writing, watermarks, dark palette, anime, flat cartoon, 3D render, photorealism, and home living-room cues.",
      "imageSrc": "/assets/lessons/L356/images/L356-S05.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L356/audio/L356-S05.m4a",
        "durationMs": 3649,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 400
          },
          {
            "charIndex": 1,
            "startMs": 400,
            "endMs": 680
          },
          {
            "charIndex": 2,
            "startMs": 680,
            "endMs": 1020
          },
          {
            "charIndex": 3,
            "startMs": 1020,
            "endMs": 1260
          },
          {
            "charIndex": 4,
            "startMs": 1260,
            "endMs": 1540
          },
          {
            "charIndex": 5,
            "startMs": 1540,
            "endMs": 1920
          },
          {
            "charIndex": 6,
            "startMs": 1920,
            "endMs": 2300
          },
          {
            "charIndex": 7,
            "startMs": 2300,
            "endMs": 2620
          },
          {
            "charIndex": 8,
            "startMs": 2620,
            "endMs": 2900
          },
          {
            "charIndex": 9,
            "startMs": 2900,
            "endMs": 3080
          }
        ]
      }
    }
  ],
  "sentenceGames": [
    {
      "id": "L356-G01",
      "type": "find-character",
      "sentenceId": "L356-S01",
      "targetChar": "公",
      "targetCharIndex": 5,
      "prompt": "找到公，點一下。"
    },
    {
      "id": "L356-G02",
      "type": "teach-character",
      "sentenceId": "L356-S02",
      "targetChar": "公",
      "targetCharIndex": 4,
      "prompt": "幫忙說出這個字。",
      "teachAudio": {
        "prefixText": "小雞跟著",
        "targetText": "公",
        "suffixText": "雞跑",
        "prefixSrc": "/assets/lessons/L356/audio/L356-G02-prefix.m4a",
        "suffixSrc": "/assets/lessons/L356/audio/L356-G02-suffix.m4a"
      }
    },
    {
      "id": "L356-G03",
      "type": "missing-character",
      "sentenceId": "L356-S04",
      "targetChar": "公",
      "targetCharIndex": 1,
      "prompt": "補上不見的字。",
      "missingIndexes": [
        1
      ],
      "options": [
        {
          "id": "L356-G03-A",
          "text": "公",
          "correct": true
        },
        {
          "id": "L356-G03-B",
          "text": "全",
          "correct": false
        },
        {
          "id": "L356-G03-C",
          "text": "個",
          "correct": false
        }
      ]
    },
    {
      "id": "L356-G04",
      "type": "partial-order",
      "sentenceId": "L356-S05",
      "targetChar": "排",
      "prompt": "把句子排回正確順序。",
      "missingIndexes": [
        0,
        1,
        2,
        3
      ],
      "options": [
        {
          "id": "L356-G04-A",
          "text": "餐",
          "correctOrder": 0,
          "correct": true
        },
        {
          "id": "L356-G04-B",
          "text": "廳",
          "correctOrder": 1,
          "correct": true
        },
        {
          "id": "L356-G04-C",
          "text": "正",
          "correctOrder": 2,
          "correct": true
        },
        {
          "id": "L356-G04-D",
          "text": "門",
          "correctOrder": 3,
          "correct": true
        }
      ],
      "correctSequence": [
        "L356-G04-A",
        "L356-G04-B",
        "L356-G04-C",
        "L356-G04-D"
      ]
    },
    {
      "id": "L356-G05",
      "type": "choose-pronunciation",
      "sentenceId": "L356-S03",
      "targetChar": "公",
      "targetCharIndex": 0,
      "prompt": "聽一聽，選出讀對的朋友。",
      "options": [
        {
          "id": "correct",
          "text": "公車上正好有位子。",
          "correct": true,
          "sentenceId": "L356-S03",
          "audioSrc": "/assets/lessons/L356/audio/L356-S03.m4a"
        },
        {
          "id": "wrong-one",
          "text": "公車上正好沒位子。",
          "correct": false,
          "audioSrc": "/assets/lessons/L356/audio/L356-G05-wrong-one.m4a"
        },
        {
          "id": "wrong-two",
          "text": "公車上正好有帽子。",
          "correct": false,
          "audioSrc": "/assets/lessons/L356/audio/L356-G05-wrong-two.m4a"
        }
      ]
    }
  ],
  "stage4IndexSelfCheck": [
    "S01 Han-only: 太0 陽1 一2 出3 來4 公5 雞6 就7 叫8; G01 target 公 index 5 PASS.",
    "S02 Han-only: 小0 雞1 跟2 著3 公4 雞5 跑6; G02 target 公 index 4 PASS.",
    "S04 Han-only: 等0 公1 車2 時3 要4 排5 好6; G03 target 公 index 1 PASS.",
    "S05 Han-only: 餐0 廳1 正2 門3 口4 有5 一6 排7 沙8 發9; G04 missingIndexes [0,1,2,3] = 餐/廳/正/門 PASS; option cards are single Han PASS; correctOrder mapping PASS.",
    "S03 Han-only: 公0 車1 上2 正3 好4 有5 位6 子7; G05 target 公 index 0 PASS; wrong choices are 8 Han characters and contain only allowed characters PASS."
  ]
}
`

# L359 Generation Packet

Production slot: Production B
Branch: codex/l359-complete-package
Origin/main boundary at claim: 71762b03 Integrate lesson L353
Latest origin/main dependency recheck: aa1144e3 Integrate lesson L354
Package status: dependency-blocked-asset-complete
Depends on lessons: ["L355","L356","L357","L358"]
Provisional learned chars: ["雞","公","園","物"]

## SOP And Style Lock

Production read the latest project handoff, role production, curriculum operating/production, sentence generation, schema, visual cast SOP, cast database, registry, ledger, and imagegen skill before production work. Use the L058 images as the required style reference set only: warm modern children's picture-book pencil-and-watercolor linework, soft natural light, detailed but clean environments, expressive preschool proportions, soft natural faces, stable body proportions, bright warm palette, and phone-readable square composition. Do not copy any L058 identity.

## Approved Sentences And Final Assets

- L359-S01: 這本書裡有很多種怪物。 / spokenText=這本書裡有很多種怪物 / focusChar=怪 / targetCharIndex=8 / displayLines=這本書裡有|很多種怪物。 / audio=/assets/lessons/L359/audio/L359-S01.m4a / durationMs=3635 / charTimings=10
- L359-S02: 動物園裡有公雞。 / spokenText=動物園裡有公雞 / focusChar=物 / targetCharIndex=1 / displayLines=動物園裡|有公雞。 / audio=/assets/lessons/L359/audio/L359-S02.m4a / durationMs=3489 / charTimings=7
- L359-S03: 我不敢看怪物電影。 / spokenText=我不敢看怪物電影 / focusChar=怪 / targetCharIndex=4 / displayLines=我不敢看|怪物電影。 / audio=/assets/lessons/L359/audio/L359-S03.m4a / durationMs=4957 / charTimings=8
- L359-S04: 桌上有一排怪物玩具。 / spokenText=桌上有一排怪物玩具 / focusChar=怪 / targetCharIndex=5 / displayLines=桌上有一排|怪物玩具。 / audio=/assets/lessons/L359/audio/L359-S04.m4a / durationMs=3406 / charTimings=9
- L359-S05: 公園裡沒有怪物。 / spokenText=公園裡沒有怪物 / focusChar=怪 / targetCharIndex=5 / displayLines=公園裡沒有|怪物。 / audio=/assets/lessons/L359/audio/L359-S05.m4a / durationMs=3003 / charTimings=7

## Image Notes

- L359-S01: 主角小女孩正在看一本打開的繪本，書頁上畫著很多種可愛、奇形怪狀但不恐怖的怪物。畫面重點是「書裡」和「很多種怪物」。不要出現可讀文字、書名或標籤。
- L359-S02: 動物園裡的安全圍欄區，有一隻公雞站著或走動。可以有主角小女孩遠遠觀看。畫面要清楚是動物園環境，但不要可讀說明牌、園名或標誌。
- L359-S03: 主角小女孩在家裡或電影院座位上，看到螢幕上的怪物電影後，用手遮住眼睛或靠在家人旁邊。螢幕上的怪物要偏繪本式、可愛但讓孩子覺得有點害怕，不要恐怖、血腥、驚悚。不要電影名稱、字幕或螢幕文字。
- L359-S04: 桌子上整齊放著一排怪物玩具，每個怪物玩具有不同外形，但都可愛、不恐怖。排列要清楚，讓孩子看得出「一排」。不要文字、品牌或包裝標籤。
- L359-S05: 主角小女孩和家人在明亮安全的公園裡散步或玩耍，周圍只有樹、花草、長椅和正常遊樂空間，沒有怪物。畫面可以呈現小女孩放心的表情。不要告示牌文字或標誌。

## Stage 4 Fixed Order

G01=find-character, G02=teach-character, G03=missing-character, G04=partial-order, G05=choose-pronunciation. Each approved sentence is used exactly once; no order exception was taken.

- L359-G01: find-character / sentenceId=L359-S01 / targetChar=怪 / targetCharIndex=8
- L359-G02: teach-character / sentenceId=L359-S03 / targetChar=怪 / targetCharIndex=4 / teachAudio={"prefixText":"我不敢看","targetText":"怪","suffixText":"物電影","prefixSrc":"/assets/lessons/L359/audio/L359-G02-prefix.m4a","suffixSrc":"/assets/lessons/L359/audio/L359-G02-suffix.m4a"}
- L359-G03: missing-character / sentenceId=L359-S04 / targetChar=怪 / targetCharIndex=5 / options=[{"id":"L359-G03-A","text":"怪","correct":true}]
- L359-G04: partial-order / sentenceId=L359-S02 / targetChar=物 / targetCharIndex= / options=[{"id":"L359-G04-A","text":"動","correctOrder":0,"correct":true},{"id":"L359-G04-B","text":"物","correctOrder":1,"correct":true},{"id":"L359-G04-C","text":"園","correctOrder":2,"correct":true},{"id":"L359-G04-D","text":"裡","correctOrder":3,"correct":true}]
- L359-G05: choose-pronunciation / sentenceId=L359-S05 / targetChar=怪 / targetCharIndex=5 / options=[{"id":"correct","text":"公園裡沒有怪物。","correct":true,"sentenceId":"L359-S05","audioSrc":"/assets/lessons/L359/audio/L359-S05.m4a"},{"id":"wrong-one","text":"公園裡沒有動物。","correct":false,"audioSrc":"/assets/lessons/L359/audio/L359-G05-wrong-one.m4a"},{"id":"wrong-two","text":"公園裡沒有小雞。","correct":false,"audioSrc":"/assets/lessons/L359/audio/L359-G05-wrong-two.m4a"}]

## Stage 4 Index Self-Check

- S01 Han-only: 這0 本1 書2 裡3 有4 很5 多6 種7 怪8 物9; G01 target 怪 index 8 PASS.
- S03 Han-only: 我0 不1 敢2 看3 怪4 物5 電6 影7; G02 target 怪 index 4 PASS.
- S04 Han-only: 桌0 上1 有2 一3 排4 怪5 物6 玩7 具8; G03 target 怪 index 5 PASS.
- S02 Han-only: 動0 物1 園2 裡3 有4 公5 雞6; G04 missingIndexes [0,1,2,3] = 動/物/園/裡 PASS; option cards are single Han PASS; correctOrder mapping PASS.
- S05 Han-only: 公0 園1 裡2 沒3 有4 怪5 物6; G05 target 怪 index 5 PASS; wrong choices are 7 Han characters and contain only allowed characters PASS.

## Image Results

S01: PASS style-lock and cast; protagonist girl reading a book containing many kinds of friendly monsters; no readable text.
S02: PASS style-lock and cast; zoo enclosure with rooster and protagonist girl observing safely; no readable signage.
S03: PASS style-lock and cast; protagonist girl mildly afraid beside family while watching a child-safe monster movie; no title/subtitles/text.
S04: PASS style-lock; cast N/A; one clear row of cute monster toys on a table; no packaging text.
S05: PASS style-lock and cast; protagonist family in bright safe park with no monsters; no readable signs.

## Audio Results

OpenAI repo audio pipeline generated standalone character audio, sentence audio, G02 prefix/suffix fragments, and complete G05 wrong-option audio. S05/G05 audio was regenerated once to pass the G05 mean-volume spread check. assets:audio normalized all files to m4a; assets:align:ai generated charTimings for S01-S05.

## Dependency Status

L354 排 merged into origin/main during package work and is no longer provisional. L355 雞, L356 公, L357 園, and L358 物 remain provisional dependencies at final package check.

## Full Draft JSON

`json
{
  "id": "L359",
  "order": 359,
  "newChars": [
    "怪"
  ],
  "zhuyin": {
    "怪": "ㄍㄨㄞˋ"
  },
  "charAudio": {
    "怪": "/assets/lessons/L359/audio/char-u602a.m4a"
  },
  "title": "怪",
  "dependsOnLessons": [
    "L355",
    "L356",
    "L357",
    "L358"
  ],
  "provisionalLearnedChars": [
    "雞",
    "公",
    "園",
    "物"
  ],
  "packageStatus": "dependency-blocked-asset-complete",
  "requiredRounds": 5,
  "originHint": "Production B package claimed from origin/main 71762b03 through L353; final dependency recheck saw origin/main aa1144e3 through L354 排, so L354 is no longer provisional. L355 雞, L356 公, L357 園, and L358 物 were not in main at final check, so Release must integrate L355-L358 before L359. Release owns production JSON insertion, planner export, ledger update, registry cleanup, final verify, push, and deployment.",
  "sentences": [
    {
      "id": "L359-S01",
      "text": "這本書裡有很多種怪物。",
      "spokenText": "這本書裡有很多種怪物",
      "focusChar": "怪",
      "targetCharIndex": 8,
      "displayLines": [
        "這本書裡有",
        "很多種怪物。"
      ],
      "imageNotes": "主角小女孩正在看一本打開的繪本，書頁上畫著很多種可愛、奇形怪狀但不恐怖的怪物。畫面重點是「書裡」和「很多種怪物」。不要出現可讀文字、書名或標籤。",
      "imagePrompt": "Use case: illustration-story. Asset type: L359-S01 square lesson image. Use the approved L058 lesson images only as style references: warm modern children's picture-book pencil-and-watercolor linework, soft natural light, detailed but clean Taiwan home interior, expressive preschool proportions, soft natural faces, bright warm palette, and phone-readable square composition. Do not copy any specific person or identity from L058. Use the recurring protagonist girl identity: preschool girl with short dark bob, small pink hair clip, soft child clothing, stable face/body proportions. Scene: warm living room or bedroom reading corner in daytime. The protagonist girl is looking at an open picture book; the book pages visibly show many different cute odd-shaped friendly monsters, but no readable marks. The key idea must be clear: monsters are inside the book, and there are many kinds. Monsters should be whimsical and non-scary, like rounded toy-like picture-book creatures, not horror. Avoid readable text, letters, Chinese characters, zhuyin, book title, labels, speech bubbles, subtitles, brands, logos, numbers, watermarks, horror, blood, scary teeth, dark palette, anime, flat cartoon, 3D render, photorealism, and copied L058 identities.",
      "imageSrc": "/assets/lessons/L359/images/L359-S01.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L359/audio/L359-S01.m4a",
        "durationMs": 3635,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 160
          },
          {
            "charIndex": 1,
            "startMs": 160,
            "endMs": 420
          },
          {
            "charIndex": 2,
            "startMs": 420,
            "endMs": 660
          },
          {
            "charIndex": 3,
            "startMs": 660,
            "endMs": 900
          },
          {
            "charIndex": 4,
            "startMs": 900,
            "endMs": 1300
          },
          {
            "charIndex": 5,
            "startMs": 1300,
            "endMs": 1560
          },
          {
            "charIndex": 6,
            "startMs": 1560,
            "endMs": 1820
          },
          {
            "charIndex": 7,
            "startMs": 1820,
            "endMs": 2120
          },
          {
            "charIndex": 8,
            "startMs": 2120,
            "endMs": 2320
          },
          {
            "charIndex": 9,
            "startMs": 2320,
            "endMs": 2520
          }
        ]
      }
    },
    {
      "id": "L359-S02",
      "text": "動物園裡有公雞。",
      "spokenText": "動物園裡有公雞",
      "focusChar": "物",
      "targetCharIndex": 1,
      "displayLines": [
        "動物園裡",
        "有公雞。"
      ],
      "imageNotes": "動物園裡的安全圍欄區，有一隻公雞站著或走動。可以有主角小女孩遠遠觀看。畫面要清楚是動物園環境，但不要可讀說明牌、園名或標誌。",
      "imagePrompt": "Use case: illustration-story. Asset type: L359-S02 square lesson image. Use the approved L058 lesson images only as style references: warm modern children's picture-book pencil-and-watercolor linework, soft natural light, detailed but clean Taiwan zoo environment, expressive natural animal posture, bright warm palette, and phone-readable square composition. Do not copy any specific person or identity from L058. Scene: a safe zoo enclosure or small animal area in daylight. One rooster stands or walks inside a clean fenced enclosure with natural ground, plants, and safe visitor rails; the zoo setting should be visible through paths, fences, and habitat design, but all signs must be blank or absent. The recurring protagonist girl may watch from a distance behind the visitor rail, secondary in the composition and clearly not inside the enclosure. Make the rooster natural and recognizable, not a human-like character. Avoid readable exhibit signs, zoo name, labels, letters, Chinese characters, zhuyin, subtitles, brands, logos, numbers, watermarks, unsafe animal contact, anime, flat cartoon, 3D render, photorealism, and copied L058 identities.",
      "imageSrc": "/assets/lessons/L359/images/L359-S02.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L359/audio/L359-S02.m4a",
        "durationMs": 3489,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 320
          },
          {
            "charIndex": 1,
            "startMs": 320,
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
            "endMs": 1180
          },
          {
            "charIndex": 4,
            "startMs": 1180,
            "endMs": 1840
          },
          {
            "charIndex": 5,
            "startMs": 1840,
            "endMs": 2280
          },
          {
            "charIndex": 6,
            "startMs": 2280,
            "endMs": 2400
          }
        ]
      }
    },
    {
      "id": "L359-S03",
      "text": "我不敢看怪物電影。",
      "spokenText": "我不敢看怪物電影",
      "focusChar": "怪",
      "targetCharIndex": 4,
      "displayLines": [
        "我不敢看",
        "怪物電影。"
      ],
      "imageNotes": "主角小女孩在家裡或電影院座位上，看到螢幕上的怪物電影後，用手遮住眼睛或靠在家人旁邊。螢幕上的怪物要偏繪本式、可愛但讓孩子覺得有點害怕，不要恐怖、血腥、驚悚。不要電影名稱、字幕或螢幕文字。",
      "imagePrompt": "Use case: illustration-story. Asset type: L359-S03 square lesson image. Use the approved L058 lesson images only as style references: warm modern children's picture-book pencil-and-watercolor linework, soft natural light, detailed but clean home movie area or gentle cinema seating, expressive preschool proportions, soft natural faces, bright warm palette, and phone-readable square composition. Do not copy any specific person or identity from L058. Use the recurring protagonist girl identity and, if shown, recurring family adult identity. Scene: the protagonist girl sits on a sofa at home or in simple cinema seats beside a family member. A large screen shows a cute picture-book style monster silhouette or friendly monster scene with no text. The girl partly covers her eyes or leans close to family, showing she does not dare to watch, but the mood remains safe and child-appropriate. The monster on screen is whimsical and only mildly startling, not horror. Avoid movie titles, captions, subtitles, screen text, readable text, letters, Chinese characters, zhuyin, labels, brands, logos, numbers, watermarks, blood, gore, scary horror lighting, realistic monsters, anime, flat cartoon, 3D render, photorealism, and copied L058 identities.",
      "imageSrc": "/assets/lessons/L359/images/L359-S03.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L359/audio/L359-S03.m4a",
        "durationMs": 4957,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 190
          },
          {
            "charIndex": 1,
            "startMs": 190,
            "endMs": 380
          },
          {
            "charIndex": 2,
            "startMs": 380,
            "endMs": 840
          },
          {
            "charIndex": 3,
            "startMs": 840,
            "endMs": 1440
          },
          {
            "charIndex": 4,
            "startMs": 1440,
            "endMs": 1920
          },
          {
            "charIndex": 5,
            "startMs": 1920,
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
            "endMs": 2780
          }
        ]
      }
    },
    {
      "id": "L359-S04",
      "text": "桌上有一排怪物玩具。",
      "spokenText": "桌上有一排怪物玩具",
      "focusChar": "怪",
      "targetCharIndex": 5,
      "displayLines": [
        "桌上有一排",
        "怪物玩具。"
      ],
      "imageNotes": "桌子上整齊放著一排怪物玩具，每個怪物玩具有不同外形，但都可愛、不恐怖。排列要清楚，讓孩子看得出「一排」。不要文字、品牌或包裝標籤。",
      "imagePrompt": "Use case: illustration-story. Asset type: L359-S04 square lesson image. Use the approved L058 lesson images only as style references: warm modern children's picture-book pencil-and-watercolor linework, soft natural light, detailed but clean Taiwan home tabletop, bright warm palette, and phone-readable square composition. Do not copy any specific person or identity from L058. Scene: a table surface in a warm child-friendly room. A clearly straight row of several monster toys sits neatly on the tabletop, each with a different cute shape, color, and friendly expression. The arrangement must be easy for a preschool child to read as one row. No people are required; if any child appears nearby, keep them secondary and not a named cast member. The monsters are toys, not living scary creatures. Avoid readable text, letters, Chinese characters, zhuyin, labels, packaging text, brands, logos, numbers, watermarks, horror, sharp scary teeth, dark palette, clutter that hides the row, anime, flat cartoon, 3D render, photorealism, and copied L058 identities.",
      "imageSrc": "/assets/lessons/L359/images/L359-S04.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L359/audio/L359-S04.m4a",
        "durationMs": 3406,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 200
          },
          {
            "charIndex": 1,
            "startMs": 200,
            "endMs": 760
          },
          {
            "charIndex": 2,
            "startMs": 760,
            "endMs": 1030
          },
          {
            "charIndex": 3,
            "startMs": 1030,
            "endMs": 1300
          },
          {
            "charIndex": 4,
            "startMs": 1300,
            "endMs": 1660
          },
          {
            "charIndex": 5,
            "startMs": 1660,
            "endMs": 2160
          },
          {
            "charIndex": 6,
            "startMs": 2160,
            "endMs": 2420
          },
          {
            "charIndex": 7,
            "startMs": 2420,
            "endMs": 2720
          },
          {
            "charIndex": 8,
            "startMs": 2720,
            "endMs": 2920
          }
        ]
      }
    },
    {
      "id": "L359-S05",
      "text": "公園裡沒有怪物。",
      "spokenText": "公園裡沒有怪物",
      "focusChar": "怪",
      "targetCharIndex": 5,
      "displayLines": [
        "公園裡沒有",
        "怪物。"
      ],
      "imageNotes": "主角小女孩和家人在明亮安全的公園裡散步或玩耍，周圍只有樹、花草、長椅和正常遊樂空間，沒有怪物。畫面可以呈現小女孩放心的表情。不要告示牌文字或標誌。",
      "imagePrompt": "Use case: illustration-story. Asset type: L359-S05 square lesson image. Use the approved L058 lesson images only as style references: warm modern children's picture-book pencil-and-watercolor linework, soft natural light, detailed but clean Taiwan park environment, expressive preschool proportions, soft natural faces, bright warm palette, and phone-readable square composition. Do not copy any specific person or identity from L058. Use recurring protagonist girl and protagonist family identity if adults appear. Scene: bright safe neighborhood park in daytime with trees, flowers, grass, a bench, and normal playground space. The protagonist girl walks or plays with family, looking relieved and comfortable. The scene should clearly feel safe and ordinary, with no monsters anywhere. Keep background signs absent or blank. Avoid readable text, letters, Chinese characters, zhuyin, signs, labels, brands, logos, numbers, watermarks, hidden monster shapes, scary shadows, dark palette, anime, flat cartoon, 3D render, photorealism, and copied L058 identities.",
      "imageSrc": "/assets/lessons/L359/images/L359-S05.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L359/audio/L359-S05.m4a",
        "durationMs": 3003,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 360
          },
          {
            "charIndex": 1,
            "startMs": 360,
            "endMs": 620
          },
          {
            "charIndex": 2,
            "startMs": 620,
            "endMs": 900
          },
          {
            "charIndex": 3,
            "startMs": 900,
            "endMs": 1320
          },
          {
            "charIndex": 4,
            "startMs": 1320,
            "endMs": 1740
          },
          {
            "charIndex": 5,
            "startMs": 1740,
            "endMs": 2060
          },
          {
            "charIndex": 6,
            "startMs": 2060,
            "endMs": 2240
          }
        ]
      }
    }
  ],
  "sentenceGames": [
    {
      "id": "L359-G01",
      "type": "find-character",
      "sentenceId": "L359-S01",
      "targetChar": "怪",
      "targetCharIndex": 8,
      "prompt": "找到怪，點一下。"
    },
    {
      "id": "L359-G02",
      "type": "teach-character",
      "sentenceId": "L359-S03",
      "targetChar": "怪",
      "targetCharIndex": 4,
      "prompt": "幫忙說出這個字。",
      "teachAudio": {
        "prefixText": "我不敢看",
        "targetText": "怪",
        "suffixText": "物電影",
        "prefixSrc": "/assets/lessons/L359/audio/L359-G02-prefix.m4a",
        "suffixSrc": "/assets/lessons/L359/audio/L359-G02-suffix.m4a"
      }
    },
    {
      "id": "L359-G03",
      "type": "missing-character",
      "sentenceId": "L359-S04",
      "targetChar": "怪",
      "targetCharIndex": 5,
      "prompt": "補上不見的字。",
      "missingIndexes": [
        5
      ],
      "options": [
        {
          "id": "L359-G03-A",
          "text": "怪",
          "correct": true
        }
      ]
    },
    {
      "id": "L359-G04",
      "type": "partial-order",
      "sentenceId": "L359-S02",
      "targetChar": "物",
      "prompt": "把句子排回正確順序。",
      "missingIndexes": [
        0,
        1,
        2,
        3
      ],
      "options": [
        {
          "id": "L359-G04-A",
          "text": "動",
          "correctOrder": 0,
          "correct": true
        },
        {
          "id": "L359-G04-B",
          "text": "物",
          "correctOrder": 1,
          "correct": true
        },
        {
          "id": "L359-G04-C",
          "text": "園",
          "correctOrder": 2,
          "correct": true
        },
        {
          "id": "L359-G04-D",
          "text": "裡",
          "correctOrder": 3,
          "correct": true
        }
      ],
      "correctSequence": [
        "L359-G04-A",
        "L359-G04-B",
        "L359-G04-C",
        "L359-G04-D"
      ]
    },
    {
      "id": "L359-G05",
      "type": "choose-pronunciation",
      "sentenceId": "L359-S05",
      "targetChar": "怪",
      "targetCharIndex": 5,
      "prompt": "聽一聽，選出讀對的朋友。",
      "options": [
        {
          "id": "correct",
          "text": "公園裡沒有怪物。",
          "correct": true,
          "sentenceId": "L359-S05",
          "audioSrc": "/assets/lessons/L359/audio/L359-S05.m4a"
        },
        {
          "id": "wrong-one",
          "text": "公園裡沒有動物。",
          "correct": false,
          "audioSrc": "/assets/lessons/L359/audio/L359-G05-wrong-one.m4a"
        },
        {
          "id": "wrong-two",
          "text": "公園裡沒有小雞。",
          "correct": false,
          "audioSrc": "/assets/lessons/L359/audio/L359-G05-wrong-two.m4a"
        }
      ]
    }
  ]
}
`

# L401 勇 — Production E delivery

Status: dependency-blocked-asset-complete

## Boundary / ownership

Teacher assigned E, skipping busy D. Source origin/main 23cae19103e760f23700f5ff90d72fbd2e59bfc6: L001–L390, latest 數, 394 learned characters. Delivery fetch still has same main. AllowedChars 400, provisional 單 雙 選 或 者; direct dependencies L396, L397, L398, L399, L400. Release sequence awaits L391, L392, L393, L394, L395, L396, L397, L398, L399, L400, R047, R048. No additional provisional characters. Shared production JSON, planner, ledger and scripts remain byte-for-byte unchanged. Release owns ordered integration, final verify, main push and deployment.

## Package assets and checks

Five 1024-square WebP images, ten normalized AAC M4A audio files, all sentence and Stage 4 timing metadata. Total 1189294 bytes. Images under250KiB each. All referenced files decode; AAC44100 Hz mono; volume checks PASS; G05 mean spread 0.4 dB. Standalone 勇 audio1834ms, original onset and tail retained, generated independently from 勇 (ㄩㄥˇ).

Coverage {"勇":4,"者":3,"或":2,"選":2,"雙":1,"單":1} PASS. Han11/10/10/10/8. Allowed-character sweep, spokenText, displayLines and canonical Stage4 indices PASS. G04 target者 index2; missing[3,4,5,6] is 或者怪物, with 者 index4. Both G05 wrong sentences generated whole, same10 Han and2/1 substitutions. Dedicated G02 segments exactly 第一次上學要 / 勇 / 敢一點.

Production-assets validator and strict asset-format audit on lesson-local draft PASS with0warnings. Base production validation PASS. Final AI alignment reviewed for counts, durations and monotonic spans; S01打 and S05勇 short AI spans corrected using measured20ms RMS onset/trough evidence. Last syllable ends aligned to decay, trailing silence retained. Full verify skipped: dependency-blocked, shared state left for Release.

## Audio regeneration / evidence

G02 suffix short-fragment candidates were rejected and regenerated. Final dedicated prefix and suffix use tts-1-hd/nova, with full onset preserved; other audio uses gpt-4o-mini-tts/coral. The generic leading-silence processor changed recognition of the short suffix, so G02 processing uses loudness normalization without onset removal. Raw and final suffix independently transcribe as 敢一點 using gpt-4o-transcribe without text hints. Final prefix independently matches 第一次上學要. Whisper alone confused the contextless suffix; after independent text verification, exact fragment context was supplied solely for its word timestamps. All other sentence/wrong-option transcripts match approved text after traditional-character normalization. No non-equivalent transcription replacement was used.

Isolated 勇 single-syllable transcription returned Korean yong despite a Chinese hint; this is not claimed as tone/character verification. Voice generation used the approved character/zhuyin. Actual listening, third-tone quality and G02 transition naturalness remain within the browser QA scope limitation below; no subjective PASS claimed.

## Image review

Final exported WebPs compared side by side with complete L058-S01–S05 style anchors; refined L115-S01/S02, L118-S02, L119-S01, L128-S03; family L154-S01, L162-S04, L163-S02; teacher L374-S04. Fine textured illustration, warm light, modeled faces and stable role identities preserved. Built-in imagegen used for generation and S01 correction. Exact original and correction prompts are in the packet/draft. No readable image text or numbers permitted.

- S01 style-lock PASS, cast PASS: distinct story hero/villagers, defeated harmless monster behind, walking home. Initial image mixed in protagonist girl; rejected and corrected before export. Rejected PNG excluded from package.
- S02 style-lock PASS, cast PASS: fixed ponytail teacher and girl, two empty costumes, no real monster; girl wears neither costume.
- S03 style-lock PASS, cast PASS: generic curly-haired toddler, braided mother and distinct kindergarten teacher; gentle handholding, no pulling.
- S04 style-lock PASS, cast PASS: father/mother/girl and distinct male clerk; large side-by-side single-bed/one-pillow and double-bed/two-pillow room photographs.
- S05 style-lock PASS, cast PASS: girl points to spilled paint on mothers painting; mother calmly listens with cloth; no shaming or danger.

## Browser QA — tooling fallback

Five sentence cards and six auxiliary players loaded. Clicking G02 suffix Play lost the inspected target. Subsequent inspection confirmed the built-in This page crashed page; access to that data URL was blocked. URL: http://localhost:5201/tools/lesson-asset-review.html?unit=L401&ref=local. Actual listening, pronunciation by ear, highlight synchronization, first-tap playback across all readers, phone recording, stitched replay and natural G02 transition were not verified. Technical gates above passed; apply docs/CURRICULUM_PRODUCTION_SOP.md “Browser automation fallback for pre-merge playback QA”. Teacher subjective review remains post-merge by default; no teacher pre-merge PASS claimed.

Asset omissions: none. Release dependencies and browser scope limitations are listed above.

## Final approved sentence records / prompts

```json
[
  {
    "id": "L401-S01",
    "text": "勇者打倒怪物，帶大家回家。",
    "spokenText": "勇者打倒怪物帶大家回家",
    "displayLines": [
      "勇者打倒",
      "怪物，",
      "帶大家回家。"
    ],
    "focusChar": "勇",
    "imageNotes": "童話世界裡，一位穿披風、背著盾牌的勇者帶領幾位村民，沿小路走向遠處村莊。後方是一隻已被打敗、坐倒在地的幻想怪物，表情沮喪，不再阻擋大家。呈現戰鬥結束、平安回家的時刻，不畫血、傷口或正在攻擊的動作。勇者與村民使用故事角色，不套用固定主角群。",
    "imagePrompt": "Use case: illustration-story. ONE square 1024x1024 richly detailed children picture-book illustration. Strictly match full L058 reference sheet: textured fine pencil and painted shading, softly modeled expressive faces, warm natural light, bright varied colors and detailed clean environments. Refined cast sheet controls preschool girl: short dark bob pink clip pink cardigan cream blouse navy skirt pink shoes; mother chin-length side-parted dark hair ivory blouse blue jeans; father tousled short hair blue shirt beige pants. Separate teacher from L374-S04: dark ponytail teal blouse beige long skirt. These are references, NOT edit targets. No flat cartoon, anime, 3D, photorealism, simple wash or tiny/random protagonist. Square safe margins. Absolutely no readable writing, letters, numbers, captions, logos or speech bubbles anywhere. Fairytale world, only distinct STORY CHARACTERS, NOT recurring modern family. A kind adult hero with wavy chestnut hair, crimson cape, green tunic, brown boots and round shield strapped on back leads three varied villagers along a winding path TOWARD a welcoming village in the distance. Hero near front gestures homeward, villagers following gratefully; clearly all have passed beyond a defeated fantasy monster behind them. Monster is a round moss-green creature with soft little horns and purple spots, sitting slumped on ground looking dejected, alive and unharmed, no longer obstructing path. The battle is OVER. Peaceful return home. No weapons in hands, no attacking pose, blood, wounds, restraints or cruelty. Compose walking direction and village destination clearly, show faces in three-quarter view.",
    "imageReuseDecision": "Approved scene and role combination requires new illustration; use full style and relevant cast anchors.",
    "imageSrc": "/assets/lessons/L401/images/L401-S01.webp",
    "approved": true,
    "audio": {
      "src": "/assets/lessons/L401/audio/L401-S01.m4a",
      "durationMs": 4452,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 520
        },
        {
          "charIndex": 1,
          "startMs": 520,
          "endMs": 980
        },
        {
          "charIndex": 2,
          "startMs": 1100,
          "endMs": 1500
        },
        {
          "charIndex": 3,
          "startMs": 1500,
          "endMs": 1780
        },
        {
          "charIndex": 4,
          "startMs": 1780,
          "endMs": 2080
        },
        {
          "charIndex": 5,
          "startMs": 2080,
          "endMs": 2340
        },
        {
          "charIndex": 6,
          "startMs": 2960,
          "endMs": 3060
        },
        {
          "charIndex": 7,
          "startMs": 3060,
          "endMs": 3350
        },
        {
          "charIndex": 8,
          "startMs": 3350,
          "endMs": 3640
        },
        {
          "charIndex": 9,
          "startMs": 3640,
          "endMs": 3980
        },
        {
          "charIndex": 10,
          "startMs": 3980,
          "endMs": 4252
        }
      ]
    },
    "imageEditPrompt": "Preserve detailed L058 style and story composition. Replace the mistakenly included modern pink-cardigan protagonist with distinct curly copper-red-haired medieval village child in ochre tunic, brown trousers and leather boots; no modern recurring characters."
  },
  {
    "id": "L401-S02",
    "text": "選勇者或者怪物，都可以。",
    "spokenText": "選勇者或者怪物都可以",
    "displayLines": [
      "選勇者",
      "或者怪物，",
      "都可以。"
    ],
    "focusChar": "者",
    "imageNotes": "教室角色扮演活動中，固定老師向主角小女孩展示兩套裝扮：勇者披風與軟質盾牌，以及可愛怪物頭套與服裝。女孩站在兩套裝扮前考慮，老師張開手掌，表示兩種都可以選。女孩尚未穿上任何一套，不畫成真怪物出現在教室。裝扮造型呼應 S01 的故事角色。",
    "imagePrompt": "Use case: illustration-story. ONE square 1024x1024 richly detailed children picture-book illustration. Strictly match full L058 reference sheet: textured fine pencil and painted shading, softly modeled expressive faces, warm natural light, bright varied colors and detailed clean environments. Refined cast sheet controls preschool girl: short dark bob pink clip pink cardigan cream blouse navy skirt pink shoes; mother chin-length side-parted dark hair ivory blouse blue jeans; father tousled short hair blue shirt beige pants. Separate teacher from L374-S04: dark ponytail teal blouse beige long skirt. These are references, NOT edit targets. No flat cartoon, anime, 3D, photorealism, simple wash or tiny/random protagonist. Square safe margins. Absolutely no readable writing, letters, numbers, captions, logos or speech bubbles anywhere. Classroom pretend-play costume choice. Recurring ponytail teacher teal blouse beige skirt stands beside recurring girl and presents two costume sets with open palms equally inviting. Left a crimson child cape, green tunic and soft round toy shield on low rack. Right cute moss-green monster hood with soft horns and purple spots plus matching fabric costume hanging visibly empty on rack. Both costumes are INANIMATE clothing, not actual creatures or people. Girl in normal pink cardigan and navy skirt stands BETWEEN the two sets, thinking which to choose, wearing neither, one finger thoughtfully near chin. Reference S01 story design in costumes. Teacher NOT mother. Friendly sunlit preschool classroom with wordless drawings.",
    "imageReuseDecision": "Approved scene and role combination requires new illustration; use full style and relevant cast anchors.",
    "imageSrc": "/assets/lessons/L401/images/L401-S02.webp",
    "approved": true,
    "audio": {
      "src": "/assets/lessons/L401/audio/L401-S02.m4a",
      "durationMs": 4007,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 560
        },
        {
          "charIndex": 1,
          "startMs": 560,
          "endMs": 980
        },
        {
          "charIndex": 2,
          "startMs": 980,
          "endMs": 1440
        },
        {
          "charIndex": 3,
          "startMs": 1440,
          "endMs": 1690
        },
        {
          "charIndex": 4,
          "startMs": 1690,
          "endMs": 1940
        },
        {
          "charIndex": 5,
          "startMs": 1940,
          "endMs": 2300
        },
        {
          "charIndex": 6,
          "startMs": 2300,
          "endMs": 2520
        },
        {
          "charIndex": 7,
          "startMs": 2520,
          "endMs": 3240
        },
        {
          "charIndex": 8,
          "startMs": 3240,
          "endMs": 3500
        },
        {
          "charIndex": 9,
          "startMs": 3500,
          "endMs": 3807
        }
      ]
    }
  },
  {
    "id": "L401-S03",
    "text": "第一次上學，要勇敢一點。",
    "spokenText": "第一次上學要勇敢一點",
    "displayLines": [
      "第一次上學，",
      "要勇敢一點。"
    ],
    "focusChar": "勇",
    "imageNotes": "幼兒園門口，一位 generic 幼兒媽媽蹲下，溫柔鼓勵自己第一次入學的小小孩。孩子背小書包，有些緊張地握著媽媽的手；幼兒園老師在門邊微笑迎接，室內是溫暖友善的活動環境。孩子不是固定主角女孩、哥哥、小月或小光，不重新定義主角群年齡。不能畫成媽媽強拉孩子進門。generic 媽媽長髮編辮、淡紫上衣；幼兒短捲髮、薄荷綠衣與橘色小書包；幼兒園老師戴眼鏡短髮、芥黃圍裙，均與主角家人及固定老師不同。",
    "imagePrompt": "Use case: illustration-story. ONE square 1024x1024 richly detailed children picture-book illustration. Strictly match full L058 reference sheet: textured fine pencil and painted shading, softly modeled expressive faces, warm natural light, bright varied colors and detailed clean environments. Refined cast sheet controls preschool girl: short dark bob pink clip pink cardigan cream blouse navy skirt pink shoes; mother chin-length side-parted dark hair ivory blouse blue jeans; father tousled short hair blue shirt beige pants. Separate teacher from L374-S04: dark ponytail teal blouse beige long skirt. These are references, NOT edit targets. No flat cartoon, anime, 3D, photorealism, simple wash or tiny/random protagonist. Square safe margins. Absolutely no readable writing, letters, numbers, captions, logos or speech bubbles anywhere. Kindergarten entrance, wholly GENERIC new family not recurring protagonists. Tiny first-day child with short curly dark hair, mint shirt, brown shorts and orange small backpack gently holds own mothers hand, slightly nervous but safe. Mother long braided hair lavender blouse crouches at eye level, smiles encouragingly, relaxed arm not pulling child. Distinct generic kindergarten teacher short hair glasses mustard apron smiles welcomingly from open doorway, open hands, friendly room with toys behind her. Child not protagonist girl, older brother, Xiaoyue, Xiaoguang or recurring boys. Warm compassionate first-school-day moment. No school sign text.",
    "imageReuseDecision": "Approved scene and role combination requires new illustration; use full style and relevant cast anchors.",
    "imageSrc": "/assets/lessons/L401/images/L401-S03.webp",
    "approved": true,
    "audio": {
      "src": "/assets/lessons/L401/audio/L401-S03.m4a",
      "durationMs": 2851,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 140
        },
        {
          "charIndex": 1,
          "startMs": 140,
          "endMs": 280
        },
        {
          "charIndex": 2,
          "startMs": 280,
          "endMs": 720
        },
        {
          "charIndex": 3,
          "startMs": 720,
          "endMs": 1040
        },
        {
          "charIndex": 4,
          "startMs": 1040,
          "endMs": 1300
        },
        {
          "charIndex": 5,
          "startMs": 1300,
          "endMs": 1740
        },
        {
          "charIndex": 6,
          "startMs": 1740,
          "endMs": 1980
        },
        {
          "charIndex": 7,
          "startMs": 1980,
          "endMs": 2160
        },
        {
          "charIndex": 8,
          "startMs": 2160,
          "endMs": 2370
        },
        {
          "charIndex": 9,
          "startMs": 2370,
          "endMs": 2651
        }
      ]
    }
  },
  {
    "id": "L401-S04",
    "text": "可以選單人房或雙人房。",
    "spokenText": "可以選單人房或雙人房",
    "displayLines": [
      "可以選單人房",
      "或雙人房。"
    ],
    "focusChar": "單",
    "imageNotes": "飯店櫃台前，工作人員向主角爸爸、媽媽與女孩展示兩張房型照片。一張是單人床、單一枕頭的房間；另一張是較寬雙人床、兩個枕頭的房間。照片並排且足夠大，房型容易比較。是在介紹選項，不表示一家四口擠進同一張床。不需要房型文字或價格。工作人員是短髮戴眼鏡、灰色制服背心的成年男性，與爸爸及固定老師不同。",
    "imagePrompt": "Use case: illustration-story. ONE square 1024x1024 richly detailed children picture-book illustration. Strictly match full L058 reference sheet: textured fine pencil and painted shading, softly modeled expressive faces, warm natural light, bright varied colors and detailed clean environments. Refined cast sheet controls preschool girl: short dark bob pink clip pink cardigan cream blouse navy skirt pink shoes; mother chin-length side-parted dark hair ivory blouse blue jeans; father tousled short hair blue shirt beige pants. Separate teacher from L374-S04: dark ponytail teal blouse beige long skirt. These are references, NOT edit targets. No flat cartoon, anime, 3D, photorealism, simple wash or tiny/random protagonist. Square safe margins. Absolutely no readable writing, letters, numbers, captions, logos or speech bubbles anywhere. Hotel reception, recurring father mother and girl view TWO large printed room photographs placed side by side on counter display, foreground photographs dominate lower half and are large and unoccluded. Photo LEFT clearly depicts ONE NARROW single bed and exactly ONE pillow in a furnished guest room; photo RIGHT depicts ONE WIDE double bed and exactly TWO pillows in a similar furnished room. Same angle, width difference obvious at phone size. Photos are flat printed pictures, not real beds on counter and not open doors. Distinct male hotel clerk short neat hair glasses gray uniform vest gestures beside photos without obscuring them. Family attentive behind counter, faces visible. Only father mother girl, no fourth family member. No writing or prices in photos or anywhere.",
    "imageReuseDecision": "Approved scene and role combination requires new illustration; use full style and relevant cast anchors.",
    "imageSrc": "/assets/lessons/L401/images/L401-S04.webp",
    "approved": true,
    "audio": {
      "src": "/assets/lessons/L401/audio/L401-S04.m4a",
      "durationMs": 3938,
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
          "endMs": 1880
        },
        {
          "charIndex": 6,
          "startMs": 1880,
          "endMs": 2740
        },
        {
          "charIndex": 7,
          "startMs": 2740,
          "endMs": 3080
        },
        {
          "charIndex": 8,
          "startMs": 3080,
          "endMs": 3420
        },
        {
          "charIndex": 9,
          "startMs": 3420,
          "endMs": 3738
        }
      ]
    }
  },
  {
    "id": "L401-S05",
    "text": "做錯事，勇敢說出來。",
    "spokenText": "做錯事勇敢說出來",
    "displayLines": [
      "做錯事，",
      "勇敢說出來。"
    ],
    "focusChar": "勇",
    "imageNotes": "家中畫畫桌旁，主角小女孩不小心打翻顏料，弄髒媽媽放在旁邊的畫。女孩主動走向媽媽，指著桌面說明，表情有些不安但願意開口。媽媽蹲下平靜聆聽，手邊拿著準備清理的抹布。重點是犯錯後誠實告知，不責罵、不羞辱，也不畫成危險事故。",
    "imagePrompt": "Use case: illustration-story. ONE square 1024x1024 richly detailed children picture-book illustration. Strictly match full L058 reference sheet: textured fine pencil and painted shading, softly modeled expressive faces, warm natural light, bright varied colors and detailed clean environments. Refined cast sheet controls preschool girl: short dark bob pink clip pink cardigan cream blouse navy skirt pink shoes; mother chin-length side-parted dark hair ivory blouse blue jeans; father tousled short hair blue shirt beige pants. Separate teacher from L374-S04: dark ponytail teal blouse beige long skirt. These are references, NOT edit targets. No flat cartoon, anime, 3D, photorealism, simple wash or tiny/random protagonist. Square safe margins. Absolutely no readable writing, letters, numbers, captions, logos or speech bubbles anywhere. Home art table. Recurring girl has accidentally tipped a small paint cup, spilled bright blue paint visibly stains mothers unfinished floral painting lying on table. Girl has stepped toward recurring mother, looking a little worried but voluntarily speaking, mouth slightly open and one hand pointing back toward spill. Mother crouches at girl eye level, calm kind listening expression, holding folded cleaning cloth loosely. No anger, scolding, shaming, raised threatening finger or crying. Spill is modest harmless art accident, no broken glass. Clearly show tipped cup, paint puddle across painting and both peoples communication. No text in painting.",
    "imageReuseDecision": "Approved scene and role combination requires new illustration; use full style and relevant cast anchors.",
    "imageSrc": "/assets/lessons/L401/images/L401-S05.webp",
    "approved": true,
    "audio": {
      "src": "/assets/lessons/L401/audio/L401-S05.m4a",
      "durationMs": 2733,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 300
        },
        {
          "charIndex": 1,
          "startMs": 300,
          "endMs": 560
        },
        {
          "charIndex": 2,
          "startMs": 560,
          "endMs": 1240
        },
        {
          "charIndex": 3,
          "startMs": 1260,
          "endMs": 1640
        },
        {
          "charIndex": 4,
          "startMs": 1640,
          "endMs": 1820
        },
        {
          "charIndex": 5,
          "startMs": 1820,
          "endMs": 2140
        },
        {
          "charIndex": 6,
          "startMs": 2140,
          "endMs": 2300
        },
        {
          "charIndex": 7,
          "startMs": 2300,
          "endMs": 2533
        }
      ]
    }
  }
]
```

## Stage4 final records

```json
[
  {
    "id": "L401-G01",
    "type": "find-character",
    "sentenceId": "L401-S01",
    "targetChar": "勇",
    "targetCharIndex": 0,
    "prompt": "找出句子裡的字。"
  },
  {
    "id": "L401-G02",
    "type": "teach-character",
    "sentenceId": "L401-S03",
    "targetChar": "勇",
    "targetCharIndex": 6,
    "teachAudio": {
      "prefixText": "第一次上學要",
      "suffixText": "敢一點",
      "prefixSrc": "/assets/lessons/L401/audio/L401-G02-prefix.m4a",
      "suffixSrc": "/assets/lessons/L401/audio/L401-G02-suffix.m4a",
      "prefixAudio": {
        "src": "/assets/lessons/L401/audio/L401-G02-prefix.m4a",
        "durationMs": 1741,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 150
          },
          {
            "charIndex": 1,
            "startMs": 150,
            "endMs": 300
          },
          {
            "charIndex": 2,
            "startMs": 300,
            "endMs": 600
          },
          {
            "charIndex": 3,
            "startMs": 600,
            "endMs": 900
          },
          {
            "charIndex": 4,
            "startMs": 900,
            "endMs": 1200
          },
          {
            "charIndex": 5,
            "startMs": 1200,
            "endMs": 1510
          }
        ]
      },
      "suffixAudio": {
        "src": "/assets/lessons/L401/audio/L401-G02-suffix.m4a",
        "durationMs": 789,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 240
          },
          {
            "charIndex": 1,
            "startMs": 240,
            "endMs": 370
          },
          {
            "charIndex": 2,
            "startMs": 370,
            "endMs": 601
          }
        ]
      }
    },
    "prompt": "教小兔子念這個字。"
  },
  {
    "id": "L401-G03",
    "type": "missing-character",
    "sentenceId": "L401-S05",
    "targetChar": "勇",
    "targetCharIndex": 3,
    "missingIndexes": [
      3
    ],
    "options": [
      {
        "id": "correct",
        "text": "勇",
        "correct": true
      },
      {
        "id": "wrong-one",
        "text": "大",
        "correct": false
      },
      {
        "id": "wrong-two",
        "text": "好",
        "correct": false
      }
    ],
    "prompt": "找出少了哪個字。"
  },
  {
    "id": "L401-G04",
    "type": "partial-order",
    "sentenceId": "L401-S02",
    "targetChar": "者",
    "targetCharIndex": 2,
    "missingIndexes": [
      3,
      4,
      5,
      6
    ],
    "options": [
      {
        "id": "card-wu",
        "text": "物",
        "correct": true,
        "correctOrder": 3
      },
      {
        "id": "card-huo",
        "text": "或",
        "correct": true,
        "correctOrder": 0
      },
      {
        "id": "card-guai",
        "text": "怪",
        "correct": true,
        "correctOrder": 2
      },
      {
        "id": "card-zhe",
        "text": "者",
        "correct": true,
        "correctOrder": 1
      }
    ],
    "prompt": "把字放回句子裡。"
  },
  {
    "id": "L401-G05",
    "type": "choose-pronunciation",
    "sentenceId": "L401-S04",
    "targetChar": "單",
    "targetCharIndex": 3,
    "options": [
      {
        "id": "correct",
        "text": "可以選單人房或雙人房。",
        "correct": true,
        "audioSrc": "/assets/lessons/L401/audio/L401-S04.m4a",
        "audio": {
          "src": "/assets/lessons/L401/audio/L401-S04.m4a",
          "durationMs": 3938,
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
              "endMs": 1880
            },
            {
              "charIndex": 6,
              "startMs": 1880,
              "endMs": 2740
            },
            {
              "charIndex": 7,
              "startMs": 2740,
              "endMs": 3080
            },
            {
              "charIndex": 8,
              "startMs": 3080,
              "endMs": 3420
            },
            {
              "charIndex": 9,
              "startMs": 3420,
              "endMs": 3738
            }
          ]
        }
      },
      {
        "id": "wrong-one",
        "text": "可以選單人床或雙人床。",
        "correct": false,
        "audioSrc": "/assets/lessons/L401/audio/L401-G05-wrong-one.m4a",
        "audio": {
          "src": "/assets/lessons/L401/audio/L401-G05-wrong-one.m4a",
          "durationMs": 5260,
          "charTimings": [
            {
              "charIndex": 0,
              "startMs": 0,
              "endMs": 290
            },
            {
              "charIndex": 1,
              "startMs": 290,
              "endMs": 580
            },
            {
              "charIndex": 2,
              "startMs": 580,
              "endMs": 1120
            },
            {
              "charIndex": 3,
              "startMs": 1120,
              "endMs": 1900
            },
            {
              "charIndex": 4,
              "startMs": 1900,
              "endMs": 2240
            },
            {
              "charIndex": 5,
              "startMs": 2240,
              "endMs": 2600
            },
            {
              "charIndex": 6,
              "startMs": 2600,
              "endMs": 3480
            },
            {
              "charIndex": 7,
              "startMs": 3480,
              "endMs": 4220
            },
            {
              "charIndex": 8,
              "startMs": 4220,
              "endMs": 4660
            },
            {
              "charIndex": 9,
              "startMs": 4660,
              "endMs": 5060
            }
          ]
        }
      },
      {
        "id": "wrong-two",
        "text": "可以選單人房或雙人車。",
        "correct": false,
        "audioSrc": "/assets/lessons/L401/audio/L401-G05-wrong-two.m4a",
        "audio": {
          "src": "/assets/lessons/L401/audio/L401-G05-wrong-two.m4a",
          "durationMs": 3716,
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
              "endMs": 780
            },
            {
              "charIndex": 3,
              "startMs": 780,
              "endMs": 1280
            },
            {
              "charIndex": 4,
              "startMs": 1280,
              "endMs": 1520
            },
            {
              "charIndex": 5,
              "startMs": 1520,
              "endMs": 1840
            },
            {
              "charIndex": 6,
              "startMs": 1840,
              "endMs": 2520
            },
            {
              "charIndex": 7,
              "startMs": 2520,
              "endMs": 2840
            },
            {
              "charIndex": 8,
              "startMs": 2840,
              "endMs": 3140
            },
            {
              "charIndex": 9,
              "startMs": 3140,
              "endMs": 3516
            }
          ]
        }
      }
    ],
    "prompt": "聽聽看，誰念得對？"
  }
]
```

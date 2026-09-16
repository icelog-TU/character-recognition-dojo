# L396 單 — Production E delivery

Status: dependency-blocked-asset-complete

## Boundary and scope

Source origin/main 2be6834d0e35978cc417da5721dbd891e8974948: L001–L389, latest 號, 393 learned characters; allowedChars 399. Refetched at delivery with same boundary. Accepted dependencies: L386, L389, L391, L392, L393, L394, L395. 名/號 already merged; handoff provenance retained. Release sequence dependencies: L390, L391, L392, L393, L394, L395, R047, R048. Production JSON, planner, ledger and scripts remain unchanged; Release owns integration, final verify, main push and deployment.

## Assets and checks

Five 1024-square WebP images and ten processed AAC M4A files; 1091302 bytes total. Standalone 單 audio 1718 ms, original onset retained. All audio decodes, AAC 44100 Hz mono, volume checks PASS. G05 option mean volume spread 0.5 dB. G02 suffix gained 8 dB to match prefix/target volume. Sentence and Stage 4 ASR transcripts match approved text after traditional-character normalization. G02 prefix and G05 wrong-two regenerated to improve pronunciation; final full transcripts match 報名 and 他轉了個身又睡著了. 單 ㄉㄢ; 睡著 著 ㄓㄠˊ; 轉 ㄓㄨㄢˇ. ASR is technical text evidence, not subjective listening proof.

Coverage {"單":3,"印":2,"翻":2,"碼":2,"頁":2,"報":1} PASS. Han 11/10/9/9/10; allowed-character sweep, spokenText, displayLines and game indices PASS. AI timings with acoustic correction of S02 的/號 and S05 單/手; final syllable decay retained plus about 200 ms tail. Timing spans, counts, order and durations PASS. Dedicated G02 prefix/suffix and both full G05 wrong sentences included with timing metadata. Local validate-production-assets and strict asset-format audit PASS, 0 warnings.

## Image review and numeric permission

Final exported WebPs inspected beside L058-S01–S05 plus refined L115-S01/S02, L118-S02, L119-S01, L128-S03 and family L154-S01, L162-S04, L163-S02 anchors. Fine textured illustration, modeled faces, warm light and stable identities preserved. No generated image was rejected. Built-in imagegen generation with reference sheets; exact prompts and imageNotes are in the packet and draft.

- S01 style-lock PASS, cast PASS: mother/girl, food pictures printed on menu.
- S02 style-lock PASS, cast PASS: father/girl/distinct clerk; adjacent 00-0000-0000 and 00-0000-0008, only last digit differs, correction not yet made.
- S03 style-lock PASS, cast PASS: mother/girl, turned page, normal clear lower-right 8.
- S04 style-lock PASS, cast PASS: fixed 他 boy with orange shirt, green wristband and spiky hair; one sleeping boy in bed.
- S05 style-lock PASS, cast PASS: father/girl; only one hand grips chair, other hand down, chair feet clear of floor.

Teacher numerical permission is limited to S02's two specified fictional telephone numbers and S03's page number 8; no other readable text/numbers permitted.

## Browser QA — tooling fallback

All five sentence cards and six auxiliary players loaded. Clicking S01 Play lost the inspected target; subsequent inspection returned the built-in This page crashed page (blocked data URL). No further playback or microphone checks were possible. URL: http://localhost:5196/tools/lesson-asset-review.html?unit=L396&ref=local. Actual listening, pronunciation by ear, highlight synchronization, first-tap playback across all readers, phone microphone recording and stitched replay were not verified. Technical gates above passed; use docs/CURRICULUM_PRODUCTION_SOP.md “Browser automation fallback for pre-merge playback QA”. Teacher subjective review remains post-merge by default; no pre-merge teacher PASS is claimed.

Asset omissions: none. Browser QA scope limitations and Release dependencies are listed above.

## Teacher-approved image number exceptions

```json
{
  "teacherApproved": true,
  "S02": {
    "reference": "00-0000-0000",
    "incorrectPrinted": "00-0000-0008",
    "onlyDifference": "last digit 0 versus 8",
    "fictional": true
  },
  "S03": {
    "pageNumber": "8"
  },
  "scope": "Only these exact fictional numbers are allowed in these images; no other readable text or numbers."
}
```

## Final approved sentence records and exact generation prompts

```json
[
  {
    "id": "L396-S01",
    "text": "菜單上印著好多好吃的菜。",
    "spokenText": "菜單上印著好多好吃的菜",
    "displayLines": [
      "菜單上印著",
      "好多",
      "好吃的菜。"
    ],
    "focusChar": "單",
    "imageNotes": "餐廳桌旁，主角小女孩與主角媽媽一起看打開的菜單。菜單上印著數張清楚的料理照片，例如雞排飯、魚料理、青菜。女孩指著其中一道菜，露出想吃的表情。料理是印在菜單上的圖片，不是桌上已擺滿餐點；不需要可讀菜名或價格。",
    "imagePrompt": "Use case: illustration-story. Generate ONE full square 1024x1024 illustration. Strictly match full L058 style references for fine pencil-and-watercolor linework, softly modeled expressive faces, warm natural light, bright varied palette, detailed clean environments. Match refined examples for stable preschool proportions, not tiny toddler, generic round-faced child, anime, flat cartoon, 3D or photorealism. Cast identities from family sheet: girl short dark bob pink hair clip pink cardigan cream blouse navy skirt pink shoes; mother chin-length side-parted dark hair ivory blouse blue jeans; father short dark tousled hair blue shirt beige pants. L058 is style-only. Safe margins. No captions, speech bubbles, logos or readable letters/Han. Numbers only if the scene below explicitly permits exact numbers. Taiwan restaurant table, recurring mother and girl look together at one OPEN MENU. Girl points happily at appetizing printed photos of fried chicken with rice, a fish dish and green vegetables on menu pages. Depict several flat rectangular food photographs printed INTO menu, not real food on table and no foods protruding off the pages. Table otherwise simple, no full meal. No readable menu headings, dish names, prices, numbers or writing. Mother distinct from teacher. Faces and menu visible.",
    "imageReuseDecision": "No merged image matches the approved specific action, number exception and cast combination; generate using approved style/cast anchors.",
    "imageSrc": "/assets/lessons/L396/images/L396-S01.webp",
    "approved": true,
    "audio": {
      "src": "/assets/lessons/L396/audio/L396-S01.m4a",
      "durationMs": 4558,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 540
        },
        {
          "charIndex": 1,
          "startMs": 540,
          "endMs": 1060
        },
        {
          "charIndex": 2,
          "startMs": 1060,
          "endMs": 1860
        },
        {
          "charIndex": 3,
          "startMs": 1860,
          "endMs": 2200
        },
        {
          "charIndex": 4,
          "startMs": 2200,
          "endMs": 2520
        },
        {
          "charIndex": 5,
          "startMs": 2520,
          "endMs": 2940
        },
        {
          "charIndex": 6,
          "startMs": 2940,
          "endMs": 3280
        },
        {
          "charIndex": 7,
          "startMs": 3280,
          "endMs": 3550
        },
        {
          "charIndex": 8,
          "startMs": 3550,
          "endMs": 3820
        },
        {
          "charIndex": 9,
          "startMs": 3820,
          "endMs": 4080
        },
        {
          "charIndex": 10,
          "startMs": 4080,
          "endMs": 4358
        }
      ]
    }
  },
  {
    "id": "L396-S02",
    "text": "報名單上的號碼印錯了。",
    "spokenText": "報名單上的號碼印錯了",
    "displayLines": [
      "報名單上的",
      "號碼印錯了。"
    ],
    "focusChar": "單",
    "imageNotes": "活動報名櫃台前，主角爸爸與小女孩查看一張報名單。爸爸指著紙上的電話號碼，向櫃台工作人員指出錯誤；工作人員拿筆準備更正。爸爸提供的參考紙條寫「00-0000-0000」，報名單印成「00-0000-0008」，只有最後一位不同。兩組號碼相鄰、清楚可比較。畫面停在準備更正，不能把錯字先改好。老師已批准數字入圖；只使用上述虛構號碼，不呈現真實個資。櫃台工作人員是短髮戴眼鏡、灰綠色工作背心的成年男性，與爸爸、老師及其他固定角色不同。",
    "imagePrompt": "Use case: illustration-story. Generate ONE full square 1024x1024 illustration. Strictly match full L058 style references for fine pencil-and-watercolor linework, softly modeled expressive faces, warm natural light, bright varied palette, detailed clean environments. Match refined examples for stable preschool proportions, not tiny toddler, generic round-faced child, anime, flat cartoon, 3D or photorealism. Cast identities from family sheet: girl short dark bob pink hair clip pink cardigan cream blouse navy skirt pink shoes; mother chin-length side-parted dark hair ivory blouse blue jeans; father short dark tousled hair blue shirt beige pants. L058 is style-only. Safe margins. No captions, speech bubbles, logos or readable letters/Han. Numbers only if the scene below explicitly permits exact numbers. Taiwan event registration counter. Recurring father in blue shirt and girl on customer side, distinct male clerk with short neat hair, glasses and gray-green work vest behind counter, holding a pen poised above but NOT touching paper, ready to correct an error. Foreground main focus is ONE registration form and a smaller reference slip placed immediately above it, aligned parallel in same orientation, both large enough to read. Reference slip exact text: 00-0000-0000. Registration form exact text: 00-0000-0008. BOTH strings have exactly ten digits in 2-4-4 groups separated by two hyphens; ONLY final digit differs. Render each string exactly ONCE and fully visible, no obscuring hand or pen. Father's one index finger points beside the final wrong 8. Form may have faint blank ruled fields but NO other readable text/numbers. No correction marks, no crossed-out digits, no fixed error. Teacher explicitly permits these fictional numbers. Composition gives phone-size legibility to both numbers while still showing father/girl/clerk faces and role context.",
    "imageReuseDecision": "No merged image matches the approved specific action, number exception and cast combination; generate using approved style/cast anchors.",
    "imageSrc": "/assets/lessons/L396/images/L396-S02.webp",
    "approved": true,
    "audio": {
      "src": "/assets/lessons/L396/audio/L396-S02.m4a",
      "durationMs": 3354,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 320
        },
        {
          "charIndex": 1,
          "startMs": 320,
          "endMs": 640
        },
        {
          "charIndex": 2,
          "startMs": 640,
          "endMs": 820
        },
        {
          "charIndex": 3,
          "startMs": 820,
          "endMs": 1220
        },
        {
          "charIndex": 4,
          "startMs": 1220,
          "endMs": 1380
        },
        {
          "charIndex": 5,
          "startMs": 1380,
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
          "endMs": 2540
        },
        {
          "charIndex": 8,
          "startMs": 2540,
          "endMs": 2880
        },
        {
          "charIndex": 9,
          "startMs": 2880,
          "endMs": 3154
        }
      ]
    }
  },
  {
    "id": "L396-S03",
    "text": "翻到下一頁，看看頁碼。",
    "spokenText": "翻到下一頁看看頁碼",
    "displayLines": [
      "翻到下一頁，",
      "看看頁碼。"
    ],
    "focusChar": "翻",
    "imageNotes": "家中書桌旁，主角媽媽陪小女孩看書。女孩一手剛翻過書頁，另一手指向新露出頁面的右下角，媽媽順著她指的位置看。該頁右下角清楚印著「8」，其他內容以簡單插圖呈現。重點是翻頁後查看頁碼，不是印錯或消失。老師已批准頁碼數字「8」入圖。",
    "imagePrompt": "Use case: illustration-story. Generate ONE full square 1024x1024 illustration. Strictly match full L058 style references for fine pencil-and-watercolor linework, softly modeled expressive faces, warm natural light, bright varied palette, detailed clean environments. Match refined examples for stable preschool proportions, not tiny toddler, generic round-faced child, anime, flat cartoon, 3D or photorealism. Cast identities from family sheet: girl short dark bob pink hair clip pink cardigan cream blouse navy skirt pink shoes; mother chin-length side-parted dark hair ivory blouse blue jeans; father short dark tousled hair blue shirt beige pants. L058 is style-only. Safe margins. No captions, speech bubbles, logos or readable letters/Han. Numbers only if the scene below explicitly permits exact numbers. Warm home desk, recurring mother and girl look at one open picture book. Girl's left hand has just turned a paper leaf toward the LEFT, holding its edge still slightly raised near left side; her right index finger points beside the bottom-RIGHT corner of the newly revealed RIGHT page. At that exact page corner is one clearly printed normal black digit 8, fully visible and unbroken. Mother's gaze follows it. Both pages have simple wordless illustrated scenes, no other numbers or writing. New right page lies flat and readable, not obscured by turning leaf. Page 8 correctly printed, not a printing error. No floating number.",
    "imageReuseDecision": "No merged image matches the approved specific action, number exception and cast combination; generate using approved style/cast anchors.",
    "imageSrc": "/assets/lessons/L396/images/L396-S03.webp",
    "approved": true,
    "audio": {
      "src": "/assets/lessons/L396/audio/L396-S03.m4a",
      "durationMs": 2928,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 440
        },
        {
          "charIndex": 1,
          "startMs": 440,
          "endMs": 800
        },
        {
          "charIndex": 2,
          "startMs": 800,
          "endMs": 1060
        },
        {
          "charIndex": 3,
          "startMs": 1060,
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
          "endMs": 1890
        },
        {
          "charIndex": 6,
          "startMs": 1890,
          "endMs": 2180
        },
        {
          "charIndex": 7,
          "startMs": 2180,
          "endMs": 2520
        },
        {
          "charIndex": 8,
          "startMs": 2520,
          "endMs": 2728
        }
      ]
    }
  },
  {
    "id": "L396-S04",
    "text": "他翻了個身，又睡著了。",
    "spokenText": "他翻了個身又睡著了",
    "displayLines": [
      "他翻了個身，",
      "又睡著了。"
    ],
    "focusChar": "翻",
    "zhuyinOverrides": {
      "7": "ㄓㄠˊ"
    },
    "imageNotes": "固定角色「他」小男孩躺在自己房間的床上，翻身後側躺，閉眼安穩入睡。棉被隨身體轉動略微掀起、形成皺摺，枕頭有壓痕。只畫一個男孩，不用分身或連續動作殘影；不畫成跌下床。不是小光、主角哥哥或固定「你」小男孩。固定他短黑微刺髮，橘色上衣、深藍短褲與綠色腕帶；睡覺不穿鞋，房間有橘綠運動用品線索。",
    "imagePrompt": "Use case: illustration-story. Generate ONE full square 1024x1024 illustration. Strictly match full L058 style references for fine pencil-and-watercolor linework, softly modeled expressive faces, warm natural light, bright varied palette, detailed clean environments. Match refined examples for stable preschool proportions, not tiny toddler, generic round-faced child, anime, flat cartoon, 3D or photorealism. Cast identities from family sheet: girl short dark bob pink hair clip pink cardigan cream blouse navy skirt pink shoes; mother chin-length side-parted dark hair ivory blouse blue jeans; father short dark tousled hair blue shirt beige pants. L058 is style-only. Safe margins. No captions, speech bubbles, logos or readable letters/Han. Numbers only if the scene below explicitly permits exact numbers. ONLY ONE recurring sporty boy 他, identity exactly from L118-S02 reference: slightly spiky short black hair, orange short-sleeve top, navy shorts, green wristband, bare feet under blanket (no shoes in bed). He has rolled over and now sleeps peacefully on his SIDE in his own bedroom. Eyes gently closed, head visibly indenting pillow, body and shoulders truly sideways, blanket slightly lifted and wrinkled around the turned body. Safe on mattress, not falling, no duplicate or ghost motion silhouettes, no arrows or sleep letters. Subtle sporty orange/green room cues, ball and water bottle on floor away from bed, warm gentle night lamp. Keep preschool age and L058 detailed pencil/watercolor look, not new random boy, not glasses boy, not blue-shirt boy or striped-shirt older brother.",
    "imageReuseDecision": "No merged image matches the approved specific action, number exception and cast combination; generate using approved style/cast anchors.",
    "imageSrc": "/assets/lessons/L396/images/L396-S04.webp",
    "approved": true,
    "audio": {
      "src": "/assets/lessons/L396/audio/L396-S04.m4a",
      "durationMs": 3404,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 420
        },
        {
          "charIndex": 1,
          "startMs": 420,
          "endMs": 940
        },
        {
          "charIndex": 2,
          "startMs": 940,
          "endMs": 1180
        },
        {
          "charIndex": 3,
          "startMs": 1180,
          "endMs": 1360
        },
        {
          "charIndex": 4,
          "startMs": 1360,
          "endMs": 1600
        },
        {
          "charIndex": 5,
          "startMs": 2140,
          "endMs": 2460
        },
        {
          "charIndex": 6,
          "startMs": 2460,
          "endMs": 2760
        },
        {
          "charIndex": 7,
          "startMs": 2760,
          "endMs": 3020
        },
        {
          "charIndex": 8,
          "startMs": 3020,
          "endMs": 3204
        }
      ]
    }
  },
  {
    "id": "L396-S05",
    "text": "爸爸單手拿起一張椅子。",
    "spokenText": "爸爸單手拿起一張椅子",
    "displayLines": [
      "爸爸單手拿起",
      "一張椅子。"
    ],
    "focusChar": "單",
    "imageNotes": "主角爸爸在家中移動一張輕巧的小椅子，只有一隻手握住椅背，把整張椅子提離地面；另一手自然垂在身旁，沒有幫忙。主角小女孩在旁觀看，與椅子保持距離。椅腳離地必須清楚，不能畫成拖椅子，也不是舉過頭頂。",
    "imagePrompt": "Use case: illustration-story. Generate ONE full square 1024x1024 illustration. Strictly match full L058 style references for fine pencil-and-watercolor linework, softly modeled expressive faces, warm natural light, bright varied palette, detailed clean environments. Match refined examples for stable preschool proportions, not tiny toddler, generic round-faced child, anime, flat cartoon, 3D or photorealism. Cast identities from family sheet: girl short dark bob pink hair clip pink cardigan cream blouse navy skirt pink shoes; mother chin-length side-parted dark hair ivory blouse blue jeans; father short dark tousled hair blue shirt beige pants. L058 is style-only. Safe margins. No captions, speech bubbles, logos or readable letters/Han. Numbers only if the scene below explicitly permits exact numbers. At home, recurring father in blue button shirt and beige pants lifts ONE small lightweight wooden chair off the floor using ONLY ONE HAND firmly gripping its backrest. Other arm hangs naturally down at his far side and clearly touches nothing. Entire chair visible, all FOUR legs visibly separated from floor by 20 cm of clear air, with a soft shadow below showing gap. Chair held low around thigh/hip height, not overhead, not dragged. Father fully visible. Recurring girl stands at safe distance on other side observing, not touching chair or father. Anatomically plausible grip and balance, adult proportions, no extra fingers or supporting hidden hand. Square roomy full-body composition, safe margins.",
    "imageReuseDecision": "No merged image matches the approved specific action, number exception and cast combination; generate using approved style/cast anchors.",
    "imageSrc": "/assets/lessons/L396/images/L396-S05.webp",
    "approved": true,
    "audio": {
      "src": "/assets/lessons/L396/audio/L396-S05.m4a",
      "durationMs": 3262,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 270
        },
        {
          "charIndex": 1,
          "startMs": 270,
          "endMs": 540
        },
        {
          "charIndex": 2,
          "startMs": 980,
          "endMs": 1280
        },
        {
          "charIndex": 3,
          "startMs": 1280,
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
          "endMs": 2140
        },
        {
          "charIndex": 6,
          "startMs": 2140,
          "endMs": 2340
        },
        {
          "charIndex": 7,
          "startMs": 2340,
          "endMs": 2560
        },
        {
          "charIndex": 8,
          "startMs": 2560,
          "endMs": 2860
        },
        {
          "charIndex": 9,
          "startMs": 2860,
          "endMs": 3061
        }
      ]
    }
  }
]
```

## Final Stage 4 records

```json
[
  {
    "id": "L396-G01",
    "type": "find-character",
    "sentenceId": "L396-S01",
    "targetChar": "單",
    "targetCharIndex": 1,
    "prompt": "找出句子裡的字。"
  },
  {
    "id": "L396-G02",
    "type": "teach-character",
    "sentenceId": "L396-S02",
    "targetChar": "單",
    "targetCharIndex": 2,
    "prompt": "教小兔子念這個字。",
    "teachAudio": {
      "prefixText": "報名",
      "suffixText": "上的號碼印錯了",
      "prefixSrc": "/assets/lessons/L396/audio/L396-G02-prefix.m4a",
      "suffixSrc": "/assets/lessons/L396/audio/L396-G02-suffix.m4a",
      "prefixAudio": {
        "src": "/assets/lessons/L396/audio/L396-G02-prefix.m4a",
        "durationMs": 1268,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 580
          },
          {
            "charIndex": 1,
            "startMs": 580,
            "endMs": 1068
          }
        ]
      },
      "suffixAudio": {
        "src": "/assets/lessons/L396/audio/L396-G02-suffix.m4a",
        "durationMs": 2741,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 440
          },
          {
            "charIndex": 1,
            "startMs": 440,
            "endMs": 720
          },
          {
            "charIndex": 2,
            "startMs": 720,
            "endMs": 940
          },
          {
            "charIndex": 3,
            "startMs": 940,
            "endMs": 1140
          },
          {
            "charIndex": 4,
            "startMs": 1140,
            "endMs": 1960
          },
          {
            "charIndex": 5,
            "startMs": 1960,
            "endMs": 2260
          },
          {
            "charIndex": 6,
            "startMs": 2260,
            "endMs": 2541
          }
        ]
      }
    }
  },
  {
    "id": "L396-G03",
    "type": "missing-character",
    "sentenceId": "L396-S05",
    "targetChar": "單",
    "targetCharIndex": 2,
    "missingIndexes": [
      2
    ],
    "prompt": "找出少了哪個字。",
    "options": [
      {
        "id": "correct",
        "text": "單",
        "correct": true
      },
      {
        "id": "wrong-one",
        "text": "左",
        "correct": false
      },
      {
        "id": "wrong-two",
        "text": "右",
        "correct": false
      }
    ]
  },
  {
    "id": "L396-G04",
    "type": "partial-order",
    "sentenceId": "L396-S03",
    "targetChar": "翻",
    "targetCharIndex": 0,
    "missingIndexes": [
      1,
      2,
      3,
      4
    ],
    "prompt": "把字放回句子裡。",
    "options": [
      {
        "id": "card-ye",
        "text": "頁",
        "correct": true,
        "correctOrder": 3
      },
      {
        "id": "card-xia",
        "text": "下",
        "correct": true,
        "correctOrder": 1
      },
      {
        "id": "card-dao",
        "text": "到",
        "correct": true,
        "correctOrder": 0
      },
      {
        "id": "card-yi",
        "text": "一",
        "correct": true,
        "correctOrder": 2
      }
    ]
  },
  {
    "id": "L396-G05",
    "type": "choose-pronunciation",
    "sentenceId": "L396-S04",
    "targetChar": "翻",
    "targetCharIndex": 1,
    "prompt": "聽聽看，誰念得對？",
    "options": [
      {
        "id": "correct",
        "text": "他翻了個身，又睡著了。",
        "correct": true,
        "audioSrc": "/assets/lessons/L396/audio/L396-S04.m4a",
        "audio": {
          "src": "/assets/lessons/L396/audio/L396-S04.m4a",
          "durationMs": 3404,
          "charTimings": [
            {
              "charIndex": 0,
              "startMs": 0,
              "endMs": 420
            },
            {
              "charIndex": 1,
              "startMs": 420,
              "endMs": 940
            },
            {
              "charIndex": 2,
              "startMs": 940,
              "endMs": 1180
            },
            {
              "charIndex": 3,
              "startMs": 1180,
              "endMs": 1360
            },
            {
              "charIndex": 4,
              "startMs": 1360,
              "endMs": 1600
            },
            {
              "charIndex": 5,
              "startMs": 2140,
              "endMs": 2460
            },
            {
              "charIndex": 6,
              "startMs": 2460,
              "endMs": 2760
            },
            {
              "charIndex": 7,
              "startMs": 2760,
              "endMs": 3020
            },
            {
              "charIndex": 8,
              "startMs": 3020,
              "endMs": 3204
            }
          ]
        }
      },
      {
        "id": "wrong-one",
        "text": "我翻了個身，又睡著了。",
        "correct": false,
        "audioSrc": "/assets/lessons/L396/audio/L396-G05-wrong-one.m4a",
        "audio": {
          "src": "/assets/lessons/L396/audio/L396-G05-wrong-one.m4a",
          "durationMs": 3476,
          "charTimings": [
            {
              "charIndex": 0,
              "startMs": 0,
              "endMs": 620
            },
            {
              "charIndex": 1,
              "startMs": 620,
              "endMs": 820
            },
            {
              "charIndex": 2,
              "startMs": 820,
              "endMs": 1020
            },
            {
              "charIndex": 3,
              "startMs": 1020,
              "endMs": 1200
            },
            {
              "charIndex": 4,
              "startMs": 1200,
              "endMs": 1520
            },
            {
              "charIndex": 5,
              "startMs": 2160,
              "endMs": 2480
            },
            {
              "charIndex": 6,
              "startMs": 2480,
              "endMs": 2760
            },
            {
              "charIndex": 7,
              "startMs": 2760,
              "endMs": 3040
            },
            {
              "charIndex": 8,
              "startMs": 3040,
              "endMs": 3276
            }
          ]
        }
      },
      {
        "id": "wrong-two",
        "text": "他轉了個身，又睡著了。",
        "correct": false,
        "audioSrc": "/assets/lessons/L396/audio/L396-G05-wrong-two.m4a",
        "audio": {
          "src": "/assets/lessons/L396/audio/L396-G05-wrong-two.m4a",
          "durationMs": 3853,
          "charTimings": [
            {
              "charIndex": 0,
              "startMs": 0,
              "endMs": 420
            },
            {
              "charIndex": 1,
              "startMs": 420,
              "endMs": 840
            },
            {
              "charIndex": 2,
              "startMs": 840,
              "endMs": 1100
            },
            {
              "charIndex": 3,
              "startMs": 1100,
              "endMs": 1340
            },
            {
              "charIndex": 4,
              "startMs": 1340,
              "endMs": 1560
            },
            {
              "charIndex": 5,
              "startMs": 2260,
              "endMs": 2640
            },
            {
              "charIndex": 6,
              "startMs": 2640,
              "endMs": 3000
            },
            {
              "charIndex": 7,
              "startMs": 3000,
              "endMs": 3280
            },
            {
              "charIndex": 8,
              "startMs": 3280,
              "endMs": 3653
            }
          ]
        }
      }
    ]
  }
]
```

## Pushed package intake

`npm run curriculum:package-intake -- --unit L396 --ref origin/codex/l396-complete-package` passed on asset commit 2ff64fba49a821abdfa4679858f7e64f21d5bb5d. Five images, ten audio files, canonical five-game order; no package-status defects. Documentation-only delivery tip is checked again after push; final response supplies its immutable SHA and review URL.

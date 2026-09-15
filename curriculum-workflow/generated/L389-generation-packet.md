# L389 號 Production Generation Packet

- Owner: Production C
- Branch: codex/l389-complete-package
- packageStatus: dependency-blocked-asset-complete
- sourceBoundary: 68e05282c04e1d0b78628ddeda2c29208c5486f8
- Final main recheck: 3f1056012de99f2d2f3d12f84dee5025731fc700; formal L001-L375, 379 learned characters.
- dependsOnLessons: ["L384","L385","L386","L387","L388"]
- provisionalLearnedChars: ["寫","字","名","第","念"]
- Release/playable blockers: R045, R046, L376, L377, L378, L379, L380, L381, L382, L383, L384, L385, L386, L387, L388. Production does not integrate shared state.
- newChars: ["號"]; zhuyin: 號 = ㄏㄠˋ; requiredRounds: 5.
- allowedChars (385): 一二三人個大的小手我有山上下你水在高很家和隻鳥孩指看女飛男門前後也是不到走他沒裡兩狗都爸媽愛書可會這吃做好樣要更邊多少比來起去坐站開左著拿包花朵了畫出學路誰校問找同帶筆借那本給紙心放把桌子盒掉壞眼用鏡鼻臉紅圓太難得過分幾點玩打球棒頭帽草地面外空天雨雲黑白棋鞋穿戴衣脫氣套熱冷喝飯菜老卻麼什為以怎所房間時還燈關窗車等再風吹樹動葉綠滿掃擦先洗又髒亂回就快事跑馬停叫聲聽見說師話課像想真力能火發電生明光亮陽月影長星行道流河從進早晚海船魚游泳池身濕乾服褲換改錯知認新舊半只剩夠錢買貴賣店場市夜具工作忙幫急腳步跳床搬重沙張椅累死睡倒病假才剛裝養休息久體神精變差緊卡住蓋橋座木積堆洞破口傷皮痛受忍耐敢當然怕哭被嚇罵對爬蟲條泥土種澆照顧忘每次記完收彩色粉哪些最西東方圖向線直轉右角落因原別特處理整齊全今們年跟常請嗎客讓廳餐位正排雞公園物怪奇驚喜歡笑但吧謝感情朋友親交通往經寫字名第念號
- Coverage: 號3/3, 念2/2, 第2/2, 名3/2, 字2/1, 寫1/1, PASS.
- Older vocabulary is not coverage. No 碼 or 姓 in learner-facing fields.
- All approved text/spokenText/focusChar/displayLines/options checked. Joins and <=6 visible characters PASS.
- S01's teacher-approved three-line break is retained to keep the last 名字 together; no sentence edits.

## Final Approved Sentence Records

```json
[
  {
    "id": "L389-S01",
    "text": "請念出第一名的名字。",
    "spokenText": "請念出第一名的名字",
    "displayLines": [
      "請念出",
      "第一名的",
      "名字。"
    ],
    "focusChar": "名",
    "imageNotes": "學校活動結束，老師把結果紙交給主角小女孩，指著最上方的姓名位置，請女孩念出得第一名的人。女孩正看著紙準備念，其他同學等待；不直接用數字獎牌或可讀排名表代替動作。紙面只有不可辨識筆跡，老師不可畫成媽媽。"
  },
  {
    "id": "L389-S02",
    "text": "第二個名字怎麼念？",
    "spokenText": "第二個名字怎麼念",
    "displayLines": [
      "第二個名字",
      "怎麼念？"
    ],
    "focusChar": "念",
    "imageNotes": "家中桌邊，主角小女孩看著紙上由上至下排列的三組姓名筆跡，指向第二組，轉頭詢問媽媽；媽媽看著同一位置。不要指第一組或最後一組。姓名用不可辨識筆跡，不新增真實姓名或可讀英文例外。"
  },
  {
    "id": "L389-S03",
    "text": "我在紙上寫了個問號。",
    "spokenText": "我在紙上寫了個問號",
    "displayLines": [
      "我在紙上",
      "寫了個問號。"
    ],
    "focusChar": "號",
    "imageNotes": "主角小女孩坐在桌邊，手握筆，紙中央剛寫好一個清楚、正常方向的「?」，彎鉤與下方圓點完整。問號是紙上實際筆跡，不是頭頂疑惑泡泡、圖片字幕或問號造型物品。紙上不增加其他文字。"
  },
  {
    "id": "L389-S04",
    "text": "地圖上的紅色記號，是我家。",
    "spokenText": "地圖上的紅色記號是我家",
    "displayLines": [
      "地圖上的",
      "紅色記號，",
      "是我家。"
    ],
    "focusChar": "號",
    "imageNotes": "主角小女孩把簡單手繪地圖攤在桌上，向爸爸指認其中一棟房子；房子上有唯一醒目的紅色圓點記號，附近是簡化道路與其他房屋。記號必須落在房屋位置，不是道路交叉口。使用虛構地圖，不放真實地址、路名或定位資訊。"
  },
  {
    "id": "L389-S05",
    "text": "我記得爸爸的車號。",
    "spokenText": "我記得爸爸的車號",
    "displayLines": [
      "我記得",
      "爸爸的車號。"
    ],
    "focusChar": "號",
    "imageNotes": "停車場內，主角小女孩由爸爸陪同，停在自家車後方安全位置，指著車牌、自信地抬頭告訴爸爸；爸爸看向女孩。車輛完全停妥，不畫孩子獨自在車道尋車。車牌存在但字元不可辨識，不要求生成可讀或真實車號；不以車身顏色取代指認車牌的動作。"
  }
]
```

## Final Stage 4 Records

Fixed G01 find-character, G02 teach-character, G03 missing-character, G04 partial-order, G05 choose-pronunciation. Five sentences used exactly once. All indices zero-based Han-only and checked. G03 has one blank, three distinct single-Han choices, exactly one correct. G04 has four single-Han cards correctly mapped. G01/G02 have no options.

```json
[
  {
    "id": "L389-G01",
    "type": "find-character",
    "sentenceId": "L389-S03",
    "targetChar": "號",
    "targetCharIndex": 8
  },
  {
    "id": "L389-G02",
    "type": "teach-character",
    "sentenceId": "L389-S04",
    "targetChar": "號",
    "targetCharIndex": 7,
    "teachAudio": {
      "prefixText": "地圖上的紅色記",
      "suffixText": "是我家",
      "prefixSrc": "/assets/lessons/L389/audio/L389-G02-prefix.m4a",
      "suffixSrc": "/assets/lessons/L389/audio/L389-G02-suffix.m4a",
      "prefixAudio": {
        "src": "/assets/lessons/L389/audio/L389-G02-prefix.m4a",
        "durationMs": 2282,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 220
          },
          {
            "charIndex": 1,
            "startMs": 220,
            "endMs": 540
          },
          {
            "charIndex": 2,
            "startMs": 540,
            "endMs": 840
          },
          {
            "charIndex": 3,
            "startMs": 840,
            "endMs": 1160
          },
          {
            "charIndex": 4,
            "startMs": 1160,
            "endMs": 1540
          },
          {
            "charIndex": 5,
            "startMs": 1540,
            "endMs": 1840
          },
          {
            "charIndex": 6,
            "startMs": 1840,
            "endMs": 2040
          }
        ]
      },
      "suffixAudio": {
        "src": "/assets/lessons/L389/audio/L389-G02-suffix.m4a",
        "durationMs": 1198,
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
            "endMs": 1020
          }
        ]
      }
    }
  },
  {
    "id": "L389-G03",
    "type": "missing-character",
    "sentenceId": "L389-S05",
    "targetChar": "號",
    "targetCharIndex": 7,
    "missingIndexes": [
      7
    ],
    "options": [
      {
        "id": "correct",
        "text": "號",
        "correct": true
      },
      {
        "id": "wrong-one",
        "text": "名",
        "correct": false
      },
      {
        "id": "wrong-two",
        "text": "字",
        "correct": false
      }
    ]
  },
  {
    "id": "L389-G04",
    "type": "partial-order",
    "sentenceId": "L389-S01",
    "targetChar": "第",
    "targetCharIndex": 3,
    "missingIndexes": [
      3,
      4,
      5,
      6
    ],
    "options": [
      {
        "id": "card-ming",
        "text": "名",
        "correct": true,
        "correctOrder": 2
      },
      {
        "id": "card-di",
        "text": "第",
        "correct": true,
        "correctOrder": 0
      },
      {
        "id": "card-de",
        "text": "的",
        "correct": true,
        "correctOrder": 3
      },
      {
        "id": "card-yi",
        "text": "一",
        "correct": true,
        "correctOrder": 1
      }
    ]
  },
  {
    "id": "L389-G05",
    "type": "choose-pronunciation",
    "sentenceId": "L389-S02",
    "targetChar": "念",
    "targetCharIndex": 7,
    "options": [
      {
        "id": "correct",
        "text": "第二個名字怎麼念？",
        "correct": true,
        "audioSrc": "/assets/lessons/L389/audio/L389-S02.m4a",
        "audio": {
          "src": "/assets/lessons/L389/audio/L389-S02.m4a",
          "durationMs": 2496,
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
              "endMs": 720
            },
            {
              "charIndex": 3,
              "startMs": 720,
              "endMs": 1220
            },
            {
              "charIndex": 4,
              "startMs": 1220,
              "endMs": 1460
            },
            {
              "charIndex": 5,
              "startMs": 1460,
              "endMs": 1750
            },
            {
              "charIndex": 6,
              "startMs": 1750,
              "endMs": 2040
            },
            {
              "charIndex": 7,
              "startMs": 2040,
              "endMs": 2280
            }
          ]
        }
      },
      {
        "id": "wrong-one",
        "text": "第二個名字怎麼寫？",
        "correct": false,
        "audioSrc": "/assets/lessons/L389/audio/L389-G05-wrong-one.m4a",
        "audio": {
          "src": "/assets/lessons/L389/audio/L389-G05-wrong-one.m4a",
          "durationMs": 2461,
          "charTimings": [
            {
              "charIndex": 0,
              "startMs": 0,
              "endMs": 260
            },
            {
              "charIndex": 1,
              "startMs": 260,
              "endMs": 520
            },
            {
              "charIndex": 2,
              "startMs": 520,
              "endMs": 840
            },
            {
              "charIndex": 3,
              "startMs": 840,
              "endMs": 1100
            },
            {
              "charIndex": 4,
              "startMs": 1100,
              "endMs": 1260
            },
            {
              "charIndex": 5,
              "startMs": 1260,
              "endMs": 1590
            },
            {
              "charIndex": 6,
              "startMs": 1590,
              "endMs": 1920
            },
            {
              "charIndex": 7,
              "startMs": 1920,
              "endMs": 2220
            }
          ]
        }
      },
      {
        "id": "wrong-two",
        "text": "第三個名字怎麼念？",
        "correct": false,
        "audioSrc": "/assets/lessons/L389/audio/L389-G05-wrong-two.m4a",
        "audio": {
          "src": "/assets/lessons/L389/audio/L389-G05-wrong-two.m4a",
          "durationMs": 2199,
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
              "endMs": 720
            },
            {
              "charIndex": 3,
              "startMs": 720,
              "endMs": 980
            },
            {
              "charIndex": 4,
              "startMs": 980,
              "endMs": 1200
            },
            {
              "charIndex": 5,
              "startMs": 1600,
              "endMs": 1690
            },
            {
              "charIndex": 6,
              "startMs": 1690,
              "endMs": 1780
            },
            {
              "charIndex": 7,
              "startMs": 1780,
              "endMs": 1960
            }
          ]
        }
      }
    ]
  }
]
```

## Image Production And Acceptance

Full L058-S01 through S05 style-only anchors and refined L115-S01/S02, L118-S02, L119-S01, L128-S03 compared against actual final WebP contact sheet. Family identity anchors L154-S01, L162-S04, L163-S02 inspected. All final images 1024 square, compressed WebP.
- S01 style-lock PASS, cast PASS. Teacher distinct from mother; girl receives paper, teacher points at top illegible row. Initial gaze/hand pose and generic boy clothing revised; initial draft excluded.
- S02 style-lock PASS, cast PASS. Three separated illegible writing groups; girl points at middle group, asks mother. Mother gaze revised; initial draft excluded.
- S03 style-lock PASS, cast PASS. Exactly one normal handwritten question mark on paper, intact hook and dot; this is the only legible symbol exception.
- S04 style-lock PASS, cast PASS. Fictional map; one red circular mark lies on the indicated house, not the road.
- S05 style-lock PASS, cast PASS. Girl accompanied by father points at parked car plate; plate characters are illegible.
- No rejected source PNGs included in shipping assets.

## Audio And Timing

OpenAI gpt-4o-mini-tts / coral through repo ai:audio, followed by assets:audio. Ten independent sources: five sentences, single-character 號 (ㄏㄠˋ), exact G02 prefix 地圖上的紅色記 and suffix 是我家, and two complete G05 wrong sentences. Correct G05 reuses exact S02.
G05 wrong-two regenerated once after transcription used 唸; replacement transcribes as 念. No homophone normalization added.
Equivalent normalization added only 图->圖, 记->記, 号->號, 写->寫 in shared align script; Release must inspect this shared change.
Final nine sentence/fragment/option files re-aligned after trimming only measured trailing silence with 150ms acoustic safety margin. No speech splicing/extraction. S03 final character end refined from Whisper 2300ms to final measured acoustic end 2642ms. Other timing boundaries from final AI alignment.
All ten files AAC, 44100 Hz, mono M4A, decodable and audibility/relative loudness gates passed. Standalone duration 1718ms. Total shipping assets: 1,021,352 bytes (five WebP + ten M4A).

## Browser QA

390x844: Stage 1 target/zhuyin visible, standalone audio reaches completion; Stage 2 has three target cards; Stage 3 all five sentence playbacks reach completion; G01/G03/G04 correct actions accepted; G02 reaches target wait and answer-reveal path; G05 three options play and return idle. 768x1024: G05 layout checked. Initial getBrowser timeout recovered by explicit in-app browser. Live microphone/recognition and whole reward flow not tested; no app code changed. Isolated lesson fixture omitted historical zhuyin; Release verifies full accumulated zhuyin after ordered integration.
Browser QA is functional playback observation, not a claim of teacher subjective pronunciation approval. Teacher image/audio judgment remains post-main; no pre-main teacher PASS required.

## Technical Gates

- tools:check PASS; ai:check PASS.
- curriculum:audit-state PASS on new main-based branch.
- curriculum:packet PASS; generated scaffold replaced by the locked records above.
- assets:images PASS, 5 existing WebP / 0 missing.
- assets:audio PASS, 10 files; final trailing-silence pass and final assets:align:ai PASS, 9 records.
- Isolated L389 fixture validate:production PASS.
- Isolated L389 fixture assets:audit --strict PASS: 5 image references, 10 audio references, 0 warnings.
- Allowed-character / coverage / displayLines / Stage 4 checks PASS.
- Shared production JSON restored byte-for-byte after local QA. No planner or ledger edits.
- After restoring shared state: validate:curriculum PASS (375 baseline lessons; historical target-choice warnings only), validate:production PASS. Final audit-state PASS with expected unmerged L389 asset-folder warning.
- Final fast audit PASS: request/draft/packet agreement, allowed385, game mappings, timing counts, sentence end gaps 202/216/150/223/197ms, and referenced files.
- verify skipped: dependency-blocked, shared integration belongs to Release.
- Pushed-ref curriculum:package-intake PASS at asset commit 9d898b4bbb5596375fc0e3cc0757f8466a9c0161: five images, ten audio files, canonical Stage 4, no blocking package-status defects. Final metadata-only tip rechecked with the same gate.

## Release And Review

Integrate only in playable order after dependencies. Preserve R045/R046 existing branch independently.
Post-main teacher review, usable after Release merges and deploys:
https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L389&ref=main
Command: npm run asset:review-status -- --unit L389 --ref main

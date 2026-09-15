# R044 Rescued Generation Package

Package status: dependency-blocked-asset-complete
Branch: codex/r043-r044-package-rescue
Original source: 02a35b9b4d102d62238718d0379a4b8e32462b03
Base main: 496aa87af167b0760bcee8f9ca959d6cc657edfd (L359)
L360 is the only remaining numbered dependency; pair follows L360 and precedes L361.

## Original Image QA (unchanged images)

{
  "R044-S01": {
    "styleLock": "PASS",
    "cast": "PASS"
  },
  "R044-S02": {
    "styleLock": "PASS",
    "cast": "PASS"
  },
  "R044-S03": {
    "styleLock": "PASS",
    "cast": "N/A"
  },
  "R044-S04": {
    "styleLock": "PASS",
    "cast": "PASS"
  },
  "R044-S05": {
    "styleLock": "PASS",
    "cast": "PASS"
  }
}

## Rescue Audio QA

{
  "sourcePackageSha": "02a35b9b4d102d62238718d0379a4b8e32462b03",
  "baseMainSha": "496aa87af167b0760bcee8f9ca959d6cc657edfd",
  "branch": "codex/r043-r044-package-rescue",
  "scope": "Only assigned package audio tails, alignment and completion records; approved sentence and image content retained.",
  "method": "Whisper-1 word timestamps on final AAC audio using the repository alignment algorithm; exact Traditional/Simplified-equivalent Han transcript validation. A 500 ms padded analysis-only WAV recheck is recorded where needed. No homophone substitution.",
  "audioMethod": "FFmpeg silencedetect -40 dB / 100 ms; preserve audible decay plus 160 ms, stream-copy complete AAC packets; no leading trims, regeneration, internal splices or re-encoding.",
  "corrections": [],
  "technicalStatus": "PASS: 9 exact transcripts, AAC mono 44100 Hz decode, timing counts/bounds/spans/overlap and <=300 ms trailing silence",
  "evidence": "curriculum-workflow/generated/R044-rescue-audio-qa.json",
  "browserQA": {
    "status": "PASS: every audio control played to ended",
    "controls": 10,
    "uniqueFiles": 9,
    "method": "Codex in-app Chromium; existing lesson-asset-review.html served locally with file URL adapter and visible native media ended-event diagnostics. Sequential playback queue exercised all sentence, G02 and G05 controls.",
    "scope": "Automated media loading and playback; no teacher subjective listening approval, physical-phone highlight test or microphone/stitched recording assessment is claimed.",
    "sop": "Current production SOP permits technical-gates fallback for browser/tool limitations; teacher subjective review is normally post-merge.",
    "url": "http://127.0.0.1:8343/tools/lesson-asset-review.html?unit=R044&ref=local-rescue",
    "endedDurationsMs": {
      "R044-S01": 4086,
      "R044-S02": 3111,
      "R044-S03": 2925,
      "R044-S04": 2716,
      "R044-S05": 3854,
      "R044-G02-prefix": 2531,
      "R044-G02-suffix": 2229,
      "R044-G05-wrong-one": 2879,
      "R044-G05-wrong-two": 3088
    }
  },
  "validation": {
    "tools": "PASS",
    "production": "PASS on unchanged main and separately on lesson-local draft data in memory",
    "curriculum": "PASS using current L359 main plus L360 rescue draft in memory; existing old-lesson advisory warnings only",
    "formats": "PASS strict mono AAC 44100 Hz / WebP / size / G05 loudness spread audit with zero warnings",
    "technical": "PASS transcript, hash, 80-900 ms timing spans, ordered indices, no overlap, measured and metadata tail <=300 ms",
    "preservation": "PASS: approved sentence and request content, game design, images and retained AAC packet hashes/PTS identical to pinned source; main curriculum/planner/ledger unchanged",
    "assetFolderBytes": 1360206,
    "release": "Shared-state integration and full npm run verify remain Release-owned."
  }
}

## Final Approved Request

```json
{
  "id": "R044",
  "reviewNumber": 44,
  "title": "複習四十四",
  "afterLessonOrder": 360,
  "targetLessonRange": {
    "startOrder": 331,
    "endOrder": 360
  },
  "requiredCoverageChars": [
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
    "奇"
  ],
  "dependsOnLessons": [
    "L355",
    "L356",
    "L357",
    "L358",
    "L359",
    "L360"
  ],
  "provisionalLearnedChars": [
    "奇"
  ],
  "requiredRounds": 5,
  "sentenceGames": [
    {
      "id": "R044-G01",
      "type": "find-character",
      "sentenceId": "R044-S05",
      "targetChar": "奇",
      "targetCharIndex": 9,
      "prompt": "找到這個字，點一下。"
    },
    {
      "id": "R044-G02",
      "type": "teach-character",
      "sentenceId": "R044-S01",
      "targetChar": "讓",
      "targetCharIndex": 5,
      "prompt": "幫忙說出這個字。",
      "teachAudio": {
        "prefixText": "客人到了請",
        "targetText": "讓",
        "suffixText": "客人進客廳",
        "prefixSrc": "/assets/reviews/R044/audio/R044-G02-prefix.m4a",
        "suffixSrc": "/assets/reviews/R044/audio/R044-G02-suffix.m4a",
        "prefixAudio": {
          "src": "/assets/reviews/R044/audio/R044-G02-prefix.m4a",
          "durationMs": 2531,
          "charTimings": [
            {
              "charIndex": 0,
              "startMs": 0,
              "endMs": 420
            },
            {
              "charIndex": 1,
              "startMs": 420,
              "endMs": 780
            },
            {
              "charIndex": 2,
              "startMs": 780,
              "endMs": 1000
            },
            {
              "charIndex": 3,
              "startMs": 1000,
              "endMs": 1220
            },
            {
              "charIndex": 4,
              "startMs": 1920,
              "endMs": 2240
            }
          ]
        },
        "suffixAudio": {
          "src": "/assets/reviews/R044/audio/R044-G02-suffix.m4a",
          "durationMs": 2229,
          "charTimings": [
            {
              "charIndex": 0,
              "startMs": 0,
              "endMs": 460
            },
            {
              "charIndex": 1,
              "startMs": 460,
              "endMs": 960
            },
            {
              "charIndex": 2,
              "startMs": 960,
              "endMs": 1360
            },
            {
              "charIndex": 3,
              "startMs": 1360,
              "endMs": 1780
            },
            {
              "charIndex": 4,
              "startMs": 1780,
              "endMs": 1940
            }
          ]
        }
      }
    },
    {
      "id": "R044-G03",
      "type": "missing-character",
      "sentenceId": "R044-S03",
      "targetChar": "排",
      "targetCharIndex": 5,
      "prompt": "補上不見的字。",
      "missingIndexes": [
        5
      ],
      "options": [
        {
          "id": "R044-G03-A",
          "text": "排",
          "correct": true
        },
        {
          "id": "R044-G03-B",
          "text": "拿",
          "correct": false
        },
        {
          "id": "R044-G03-C",
          "text": "掉",
          "correct": false
        }
      ]
    },
    {
      "id": "R044-G04",
      "type": "partial-order",
      "sentenceId": "R044-S04",
      "targetChar": "雞",
      "prompt": "把句子排回正確順序。",
      "missingIndexes": [
        0,
        1,
        2,
        3
      ],
      "options": [
        {
          "id": "R044-G04-0",
          "text": "小",
          "correct": true,
          "correctOrder": 0
        },
        {
          "id": "R044-G04-1",
          "text": "雞",
          "correct": true,
          "correctOrder": 1
        },
        {
          "id": "R044-G04-2",
          "text": "也",
          "correct": true,
          "correctOrder": 2
        },
        {
          "id": "R044-G04-3",
          "text": "是",
          "correct": true,
          "correctOrder": 3
        }
      ]
    },
    {
      "id": "R044-G05",
      "type": "choose-pronunciation",
      "sentenceId": "R044-S02",
      "targetChar": "餐",
      "targetCharIndex": 2,
      "prompt": "聽一聽，選出讀對的朋友。",
      "options": [
        {
          "id": "correct",
          "text": "這家餐廳正好有位子。",
          "correct": true,
          "sentenceId": "R044-S02",
          "audioSrc": "/assets/reviews/R044/audio/R044-S02.m4a",
          "audio": {
            "src": "/assets/reviews/R044/audio/R044-S02.m4a",
            "durationMs": 3111,
            "charTimings": [
              {
                "charIndex": 0,
                "startMs": 0,
                "endMs": 280
              },
              {
                "charIndex": 1,
                "startMs": 280,
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
                "endMs": 1160
              },
              {
                "charIndex": 4,
                "startMs": 1160,
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
                "endMs": 2440
              },
              {
                "charIndex": 7,
                "startMs": 2440,
                "endMs": 2760
              },
              {
                "charIndex": 8,
                "startMs": 2760,
                "endMs": 2860
              }
            ]
          }
        },
        {
          "id": "wrong-one",
          "text": "這家飯店正好有位子。",
          "correct": false,
          "audioSrc": "/assets/reviews/R044/audio/R044-G05-wrong-one.m4a",
          "audio": {
            "src": "/assets/reviews/R044/audio/R044-G05-wrong-one.m4a",
            "durationMs": 2879,
            "charTimings": [
              {
                "charIndex": 0,
                "startMs": 0,
                "endMs": 240
              },
              {
                "charIndex": 1,
                "startMs": 240,
                "endMs": 580
              },
              {
                "charIndex": 2,
                "startMs": 580,
                "endMs": 860
              },
              {
                "charIndex": 3,
                "startMs": 860,
                "endMs": 1160
              },
              {
                "charIndex": 4,
                "startMs": 1160,
                "endMs": 1720
              },
              {
                "charIndex": 5,
                "startMs": 1720,
                "endMs": 2020
              },
              {
                "charIndex": 6,
                "startMs": 2020,
                "endMs": 2220
              },
              {
                "charIndex": 7,
                "startMs": 2220,
                "endMs": 2540
              },
              {
                "charIndex": 8,
                "startMs": 2540,
                "endMs": 2660
              }
            ]
          }
        },
        {
          "id": "wrong-two",
          "text": "這家餐廳正好有椅子。",
          "correct": false,
          "audioSrc": "/assets/reviews/R044/audio/R044-G05-wrong-two.m4a",
          "audio": {
            "src": "/assets/reviews/R044/audio/R044-G05-wrong-two.m4a",
            "durationMs": 3088,
            "charTimings": [
              {
                "charIndex": 0,
                "startMs": 0,
                "endMs": 240
              },
              {
                "charIndex": 1,
                "startMs": 240,
                "endMs": 580
              },
              {
                "charIndex": 2,
                "startMs": 580,
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
                "endMs": 1900
              },
              {
                "charIndex": 5,
                "startMs": 1900,
                "endMs": 2160
              },
              {
                "charIndex": 6,
                "startMs": 2160,
                "endMs": 2480
              },
              {
                "charIndex": 7,
                "startMs": 2480,
                "endMs": 2740
              },
              {
                "charIndex": 8,
                "startMs": 2740,
                "endMs": 2880
              }
            ]
          }
        }
      ]
    }
  ],
  "packageStatus": "dependency-blocked-asset-complete",
  "productionQa": {
    "date": "2026-09-15",
    "status": "dependency-blocked-asset-complete",
    "technicalFormats": "PASS: 10 WebP / 18 processed AAC m4a, 44100Hz mono; ffmpeg decode 18/18; strict format audit zero warnings; G05 loudness spread passes",
    "structure": "PASS: exact approved content, L360 allowed-character ceiling and 30/30 pair coverage, game indexes/options; current L359 main plus L360 rescue draft in memory",
    "imageStyleAndCast": {
      "R044-S01": {
        "styleLock": "PASS",
        "cast": "PASS"
      },
      "R044-S02": {
        "styleLock": "PASS",
        "cast": "PASS"
      },
      "R044-S03": {
        "styleLock": "PASS",
        "cast": "N/A"
      },
      "R044-S04": {
        "styleLock": "PASS",
        "cast": "PASS"
      },
      "R044-S05": {
        "styleLock": "PASS",
        "cast": "PASS"
      }
    },
    "imageReferences": "Complete L058 S01-S05 style-only, L115 S01/S02, L118 S02, L119 S01, L128 S03, L154 S01, L162 S04, L163 S02 family, xiaoyue.webp; visually checked final WebPs via contact sheets and full images",
    "folderBytes": 1360206,
    "timingFindings": [],
    "manualPlaybackQa": "Teacher subjective review follows the normal post-merge queue; see rescueQA for automated media playback scope.",
    "release": "Technical rescue complete; L360 remains the only unmerged numbered dependency. Release owns ordered main integration after L360."
  },
  "kind": "review",
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
    "奇"
  ],
  "approvedSentences": [
    {
      "id": "R044-S01",
      "text": "客人到了，請讓客人進客廳。",
      "spokenText": "客人到了請讓客人進客廳",
      "focusChar": "讓",
      "displayLines": [
        "客人到了，",
        "請讓客人",
        "進客廳。"
      ],
      "imageNotes": "主角家門口，客人剛到，主角媽媽或爸爸請主角小女孩開門或讓客人進到客廳。畫面要看得出客人正在進入家中客廳。不要門牌號碼或文字。"
    },
    {
      "id": "R044-S02",
      "text": "這家餐廳正好有位子。",
      "spokenText": "這家餐廳正好有位子",
      "focusChar": "餐",
      "displayLines": [
        "這家餐廳",
        "正好有位子。"
      ],
      "imageNotes": "餐廳裡或入口等候區，主角小女孩和家人看到剛好有空桌或空位子，可以坐下用餐。不要可讀菜單、店名、號碼牌或價格。"
    },
    {
      "id": "R044-S03",
      "text": "公園裡有一排長椅。",
      "spokenText": "公園裡有一排長椅",
      "focusChar": "排",
      "displayLines": [
        "公園裡有",
        "一排長椅。"
      ],
      "imageNotes": "公園步道旁有一排長椅整齊排列，周圍有樹、花草和開放空間。畫面要清楚看出「一排長椅」。不要告示牌文字或標誌。"
    },
    {
      "id": "R044-S04",
      "text": "小雞也是動物，對嗎？",
      "spokenText": "小雞也是動物對嗎",
      "focusChar": "雞",
      "displayLines": [
        "小雞也是",
        "動物，對嗎？"
      ],
      "imageNotes": "主角小女孩看著幾隻小雞，旁邊可以有其他常見小動物的圖像或安全觀察區，讓畫面表達「小雞也是動物」。可以是親子或老師引導觀察的場景。不要文字標籤。"
    },
    {
      "id": "R044-S05",
      "text": "小月對怪物玩具很好奇。",
      "spokenText": "小月對怪物玩具很好奇",
      "focusChar": "奇",
      "displayLines": [
        "小月對",
        "怪物玩具",
        "很好奇。"
      ],
      "imageNotes": "小月看著桌上或地上的怪物玩具，露出好奇表情。怪物玩具要可愛、不恐怖，明顯是玩具。小月必須使用固定角色 reference：public/assets/reference/lesson-cast/xiaoyue.webp，不能畫成主角女孩或 generic classmate。"
    }
  ],
  "teacherNotes": "Teacher-approved activation handoff pasted 2026-09-15; exact approved content preserved. Production D owns this pair. Locked allowed-character ceiling L360."
}
```

## Full Final Draft JSON

```json
{
  "id": "R044",
  "reviewNumber": 44,
  "title": "複習四十四",
  "afterLessonOrder": 360,
  "targetLessonRange": {
    "startOrder": 331,
    "endOrder": 360
  },
  "requiredCoverageChars": [
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
    "奇"
  ],
  "dependsOnLessons": [
    "L355",
    "L356",
    "L357",
    "L358",
    "L359",
    "L360"
  ],
  "provisionalLearnedChars": [
    "奇"
  ],
  "requiredRounds": 5,
  "sentences": [
    {
      "id": "R044-S01",
      "text": "客人到了，請讓客人進客廳。",
      "spokenText": "客人到了請讓客人進客廳",
      "focusChar": "讓",
      "displayLines": [
        "客人到了，",
        "請讓客人",
        "進客廳。"
      ],
      "imageNotes": "主角家門口，客人剛到，主角媽媽或爸爸請主角小女孩開門或讓客人進到客廳。畫面要看得出客人正在進入家中客廳。不要門牌號碼或文字。",
      "imagePrompt": "Use case: illustration-story. Single square 1:1 warm detailed children picture-book scene, fine pencil-and-watercolor linework, L058 style-only references, refined preschool proportions and family identities from supplied reference sheet. Preserve cast identities, natural faces, warm light, bright nuanced palette, detailed clean environment and safe margins. No text, letters, numbers, signage, brands, logos or watermarks. Avoid flat cartoons, anime, photorealism, 3D, simplistic watercolor, generic round faces or redesigned cast. At protagonist home doorway, mother gently invites two distinct adult guests into warm living room while protagonist girl stands aside. Guests visibly entering, cream walls, wood floor, sofa and plants. Final correction: both guests are elderly and visually distinct from parents; silver-haired woman with glasses/burgundy blouse/brown trousers, silver-haired man with glasses/olive cardigan/dark brown trousers.",
      "imageSrc": "/assets/reviews/R044/images/R044-S01.webp",
      "approved": true,
      "audio": {
        "src": "/assets/reviews/R044/audio/R044-S01.m4a",
        "durationMs": 4086,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 380
          },
          {
            "charIndex": 1,
            "startMs": 380,
            "endMs": 660
          },
          {
            "charIndex": 2,
            "startMs": 660,
            "endMs": 840
          },
          {
            "charIndex": 3,
            "startMs": 840,
            "endMs": 1020
          },
          {
            "charIndex": 4,
            "startMs": 1680,
            "endMs": 1960
          },
          {
            "charIndex": 5,
            "startMs": 1960,
            "endMs": 2220
          },
          {
            "charIndex": 6,
            "startMs": 2220,
            "endMs": 2540
          },
          {
            "charIndex": 7,
            "startMs": 2540,
            "endMs": 2780
          },
          {
            "charIndex": 8,
            "startMs": 2780,
            "endMs": 3300
          },
          {
            "charIndex": 9,
            "startMs": 3300,
            "endMs": 3660
          },
          {
            "charIndex": 10,
            "startMs": 3660,
            "endMs": 3840
          }
        ]
      }
    },
    {
      "id": "R044-S02",
      "text": "這家餐廳正好有位子。",
      "spokenText": "這家餐廳正好有位子",
      "focusChar": "餐",
      "displayLines": [
        "這家餐廳",
        "正好有位子。"
      ],
      "imageNotes": "餐廳裡或入口等候區，主角小女孩和家人看到剛好有空桌或空位子，可以坐下用餐。不要可讀菜單、店名、號碼牌或價格。",
      "imagePrompt": "Use case: illustration-story. Single square 1:1 warm detailed children picture-book scene, fine pencil-and-watercolor linework, L058 style-only references, refined preschool proportions and family identities from supplied reference sheet. Preserve cast identities, natural faces, warm light, bright nuanced palette, detailed clean environment and safe margins. No text, letters, numbers, signage, brands, logos or watermarks. Avoid flat cartoons, anime, photorealism, 3D, simplistic watercolor, generic round faces or redesigned cast. Protagonist family of four sees an empty dining table with four available chairs in a warm Taiwan restaurant. Girl, mother, father and older brother identifiable; background diners occupy other tables.",
      "imageSrc": "/assets/reviews/R044/images/R044-S02.webp",
      "approved": true,
      "audio": {
        "src": "/assets/reviews/R044/audio/R044-S02.m4a",
        "durationMs": 3111,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 280
          },
          {
            "charIndex": 1,
            "startMs": 280,
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
            "endMs": 1160
          },
          {
            "charIndex": 4,
            "startMs": 1160,
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
            "endMs": 2440
          },
          {
            "charIndex": 7,
            "startMs": 2440,
            "endMs": 2760
          },
          {
            "charIndex": 8,
            "startMs": 2760,
            "endMs": 2860
          }
        ]
      }
    },
    {
      "id": "R044-S03",
      "text": "公園裡有一排長椅。",
      "spokenText": "公園裡有一排長椅",
      "focusChar": "排",
      "displayLines": [
        "公園裡有",
        "一排長椅。"
      ],
      "imageNotes": "公園步道旁有一排長椅整齊排列，周圍有樹、花草和開放空間。畫面要清楚看出「一排長椅」。不要告示牌文字或標誌。",
      "imagePrompt": "Use case: illustration-story. Single square 1:1 warm detailed children picture-book scene, fine pencil-and-watercolor linework, L058 style-only references, refined preschool proportions and family identities from supplied reference sheet. Preserve cast identities, natural faces, warm light, bright nuanced palette, detailed clean environment and safe margins. No text, letters, numbers, signage, brands, logos or watermarks. Avoid flat cartoons, anime, photorealism, 3D, simplistic watercolor, generic round faces or redesigned cast. A clear row of four long park benches aligned along a path with trees and flowers. No people necessary.",
      "imageSrc": "/assets/reviews/R044/images/R044-S03.webp",
      "approved": true,
      "audio": {
        "src": "/assets/reviews/R044/audio/R044-S03.m4a",
        "durationMs": 2925,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 300
          },
          {
            "charIndex": 1,
            "startMs": 300,
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
            "endMs": 1280
          },
          {
            "charIndex": 4,
            "startMs": 1280,
            "endMs": 1660
          },
          {
            "charIndex": 5,
            "startMs": 1660,
            "endMs": 2000
          },
          {
            "charIndex": 6,
            "startMs": 2000,
            "endMs": 2500
          },
          {
            "charIndex": 7,
            "startMs": 2500,
            "endMs": 2640
          }
        ]
      }
    },
    {
      "id": "R044-S04",
      "text": "小雞也是動物，對嗎？",
      "spokenText": "小雞也是動物對嗎",
      "focusChar": "雞",
      "displayLines": [
        "小雞也是",
        "動物，對嗎？"
      ],
      "imageNotes": "主角小女孩看著幾隻小雞，旁邊可以有其他常見小動物的圖像或安全觀察區，讓畫面表達「小雞也是動物」。可以是親子或老師引導觀察的場景。不要文字標籤。",
      "imagePrompt": "Use case: illustration-story. Single square 1:1 warm detailed children picture-book scene, fine pencil-and-watercolor linework, L058 style-only references, refined preschool proportions and family identities from supplied reference sheet. Preserve cast identities, natural faces, warm light, bright nuanced palette, detailed clean environment and safe margins. No text, letters, numbers, signage, brands, logos or watermarks. Avoid flat cartoons, anime, photorealism, 3D, simplistic watercolor, generic round faces or redesigned cast. Protagonist girl and distinct teacher with tied dark hair and muted teal blouse observe three small yellow chicks safely in an outdoor animal observation area. Chicks are live animals, not toys.",
      "imageSrc": "/assets/reviews/R044/images/R044-S04.webp",
      "approved": true,
      "audio": {
        "src": "/assets/reviews/R044/audio/R044-S04.m4a",
        "durationMs": 2716,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 500
          },
          {
            "charIndex": 1,
            "startMs": 500,
            "endMs": 720
          },
          {
            "charIndex": 2,
            "startMs": 720,
            "endMs": 960
          },
          {
            "charIndex": 3,
            "startMs": 960,
            "endMs": 1200
          },
          {
            "charIndex": 4,
            "startMs": 1200,
            "endMs": 1560
          },
          {
            "charIndex": 5,
            "startMs": 1560,
            "endMs": 1900
          },
          {
            "charIndex": 6,
            "startMs": 2200,
            "endMs": 2360
          },
          {
            "charIndex": 7,
            "startMs": 2360,
            "endMs": 2540
          }
        ]
      }
    },
    {
      "id": "R044-S05",
      "text": "小月對怪物玩具很好奇。",
      "spokenText": "小月對怪物玩具很好奇",
      "focusChar": "奇",
      "displayLines": [
        "小月對",
        "怪物玩具",
        "很好奇。"
      ],
      "imageNotes": "小月看著桌上或地上的怪物玩具，露出好奇表情。怪物玩具要可愛、不恐怖，明顯是玩具。小月必須使用固定角色 reference：public/assets/reference/lesson-cast/xiaoyue.webp，不能畫成主角女孩或 generic classmate。",
      "imagePrompt": "Use case: illustration-story. Single square 1:1 warm detailed children picture-book scene, fine pencil-and-watercolor linework, L058 style-only references, refined preschool proportions and family identities from supplied reference sheet. Preserve cast identities, natural faces, warm light, bright nuanced palette, detailed clean environment and safe margins. No text, letters, numbers, signage, brands, logos or watermarks. Avoid flat cartoons, anime, photorealism, 3D, simplistic watercolor, generic round faces or redesigned cast. Xiaoyue, exact reference girl with long softly curly chestnut hair, crescent clip, lavender cardigan, cream shirt and teal skirt, leans curiously toward a cute friendly monster toy on a low table. Clearly toy, not a real monster, no scary details.",
      "imageSrc": "/assets/reviews/R044/images/R044-S05.webp",
      "approved": true,
      "audio": {
        "src": "/assets/reviews/R044/audio/R044-S05.m4a",
        "durationMs": 3854,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 460
          },
          {
            "charIndex": 1,
            "startMs": 460,
            "endMs": 720
          },
          {
            "charIndex": 2,
            "startMs": 720,
            "endMs": 1120
          },
          {
            "charIndex": 3,
            "startMs": 1120,
            "endMs": 1420
          },
          {
            "charIndex": 4,
            "startMs": 1420,
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
            "endMs": 2260
          },
          {
            "charIndex": 7,
            "startMs": 2260,
            "endMs": 2740
          },
          {
            "charIndex": 8,
            "startMs": 2740,
            "endMs": 3220
          },
          {
            "charIndex": 9,
            "startMs": 3220,
            "endMs": 3580
          }
        ]
      }
    }
  ],
  "sentenceGames": [
    {
      "id": "R044-G01",
      "type": "find-character",
      "sentenceId": "R044-S05",
      "targetChar": "奇",
      "targetCharIndex": 9,
      "prompt": "找到這個字，點一下。"
    },
    {
      "id": "R044-G02",
      "type": "teach-character",
      "sentenceId": "R044-S01",
      "targetChar": "讓",
      "targetCharIndex": 5,
      "prompt": "幫忙說出這個字。",
      "teachAudio": {
        "prefixText": "客人到了請",
        "targetText": "讓",
        "suffixText": "客人進客廳",
        "prefixSrc": "/assets/reviews/R044/audio/R044-G02-prefix.m4a",
        "suffixSrc": "/assets/reviews/R044/audio/R044-G02-suffix.m4a",
        "prefixAudio": {
          "src": "/assets/reviews/R044/audio/R044-G02-prefix.m4a",
          "durationMs": 2531,
          "charTimings": [
            {
              "charIndex": 0,
              "startMs": 0,
              "endMs": 420
            },
            {
              "charIndex": 1,
              "startMs": 420,
              "endMs": 780
            },
            {
              "charIndex": 2,
              "startMs": 780,
              "endMs": 1000
            },
            {
              "charIndex": 3,
              "startMs": 1000,
              "endMs": 1220
            },
            {
              "charIndex": 4,
              "startMs": 1920,
              "endMs": 2240
            }
          ]
        },
        "suffixAudio": {
          "src": "/assets/reviews/R044/audio/R044-G02-suffix.m4a",
          "durationMs": 2229,
          "charTimings": [
            {
              "charIndex": 0,
              "startMs": 0,
              "endMs": 460
            },
            {
              "charIndex": 1,
              "startMs": 460,
              "endMs": 960
            },
            {
              "charIndex": 2,
              "startMs": 960,
              "endMs": 1360
            },
            {
              "charIndex": 3,
              "startMs": 1360,
              "endMs": 1780
            },
            {
              "charIndex": 4,
              "startMs": 1780,
              "endMs": 1940
            }
          ]
        }
      }
    },
    {
      "id": "R044-G03",
      "type": "missing-character",
      "sentenceId": "R044-S03",
      "targetChar": "排",
      "targetCharIndex": 5,
      "prompt": "補上不見的字。",
      "missingIndexes": [
        5
      ],
      "options": [
        {
          "id": "R044-G03-A",
          "text": "排",
          "correct": true
        },
        {
          "id": "R044-G03-B",
          "text": "拿",
          "correct": false
        },
        {
          "id": "R044-G03-C",
          "text": "掉",
          "correct": false
        }
      ]
    },
    {
      "id": "R044-G04",
      "type": "partial-order",
      "sentenceId": "R044-S04",
      "targetChar": "雞",
      "prompt": "把句子排回正確順序。",
      "missingIndexes": [
        0,
        1,
        2,
        3
      ],
      "options": [
        {
          "id": "R044-G04-0",
          "text": "小",
          "correct": true,
          "correctOrder": 0
        },
        {
          "id": "R044-G04-1",
          "text": "雞",
          "correct": true,
          "correctOrder": 1
        },
        {
          "id": "R044-G04-2",
          "text": "也",
          "correct": true,
          "correctOrder": 2
        },
        {
          "id": "R044-G04-3",
          "text": "是",
          "correct": true,
          "correctOrder": 3
        }
      ]
    },
    {
      "id": "R044-G05",
      "type": "choose-pronunciation",
      "sentenceId": "R044-S02",
      "targetChar": "餐",
      "targetCharIndex": 2,
      "prompt": "聽一聽，選出讀對的朋友。",
      "options": [
        {
          "id": "correct",
          "text": "這家餐廳正好有位子。",
          "correct": true,
          "sentenceId": "R044-S02",
          "audioSrc": "/assets/reviews/R044/audio/R044-S02.m4a",
          "audio": {
            "src": "/assets/reviews/R044/audio/R044-S02.m4a",
            "durationMs": 3111,
            "charTimings": [
              {
                "charIndex": 0,
                "startMs": 0,
                "endMs": 280
              },
              {
                "charIndex": 1,
                "startMs": 280,
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
                "endMs": 1160
              },
              {
                "charIndex": 4,
                "startMs": 1160,
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
                "endMs": 2440
              },
              {
                "charIndex": 7,
                "startMs": 2440,
                "endMs": 2760
              },
              {
                "charIndex": 8,
                "startMs": 2760,
                "endMs": 2860
              }
            ]
          }
        },
        {
          "id": "wrong-one",
          "text": "這家飯店正好有位子。",
          "correct": false,
          "audioSrc": "/assets/reviews/R044/audio/R044-G05-wrong-one.m4a",
          "audio": {
            "src": "/assets/reviews/R044/audio/R044-G05-wrong-one.m4a",
            "durationMs": 2879,
            "charTimings": [
              {
                "charIndex": 0,
                "startMs": 0,
                "endMs": 240
              },
              {
                "charIndex": 1,
                "startMs": 240,
                "endMs": 580
              },
              {
                "charIndex": 2,
                "startMs": 580,
                "endMs": 860
              },
              {
                "charIndex": 3,
                "startMs": 860,
                "endMs": 1160
              },
              {
                "charIndex": 4,
                "startMs": 1160,
                "endMs": 1720
              },
              {
                "charIndex": 5,
                "startMs": 1720,
                "endMs": 2020
              },
              {
                "charIndex": 6,
                "startMs": 2020,
                "endMs": 2220
              },
              {
                "charIndex": 7,
                "startMs": 2220,
                "endMs": 2540
              },
              {
                "charIndex": 8,
                "startMs": 2540,
                "endMs": 2660
              }
            ]
          }
        },
        {
          "id": "wrong-two",
          "text": "這家餐廳正好有椅子。",
          "correct": false,
          "audioSrc": "/assets/reviews/R044/audio/R044-G05-wrong-two.m4a",
          "audio": {
            "src": "/assets/reviews/R044/audio/R044-G05-wrong-two.m4a",
            "durationMs": 3088,
            "charTimings": [
              {
                "charIndex": 0,
                "startMs": 0,
                "endMs": 240
              },
              {
                "charIndex": 1,
                "startMs": 240,
                "endMs": 580
              },
              {
                "charIndex": 2,
                "startMs": 580,
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
                "endMs": 1900
              },
              {
                "charIndex": 5,
                "startMs": 1900,
                "endMs": 2160
              },
              {
                "charIndex": 6,
                "startMs": 2160,
                "endMs": 2480
              },
              {
                "charIndex": 7,
                "startMs": 2480,
                "endMs": 2740
              },
              {
                "charIndex": 8,
                "startMs": 2740,
                "endMs": 2880
              }
            ]
          }
        }
      ]
    }
  ],
  "packageStatus": "dependency-blocked-asset-complete",
  "productionQa": {
    "date": "2026-09-15",
    "status": "dependency-blocked-asset-complete",
    "technicalFormats": "PASS: 10 WebP / 18 processed AAC m4a, 44100Hz mono; ffmpeg decode 18/18; strict format audit zero warnings; G05 loudness spread passes",
    "structure": "PASS: exact approved content, L360 allowed-character ceiling and 30/30 pair coverage, game indexes/options; current L359 main plus L360 rescue draft in memory",
    "imageStyleAndCast": {
      "R044-S01": {
        "styleLock": "PASS",
        "cast": "PASS"
      },
      "R044-S02": {
        "styleLock": "PASS",
        "cast": "PASS"
      },
      "R044-S03": {
        "styleLock": "PASS",
        "cast": "N/A"
      },
      "R044-S04": {
        "styleLock": "PASS",
        "cast": "PASS"
      },
      "R044-S05": {
        "styleLock": "PASS",
        "cast": "PASS"
      }
    },
    "imageReferences": "Complete L058 S01-S05 style-only, L115 S01/S02, L118 S02, L119 S01, L128 S03, L154 S01, L162 S04, L163 S02 family, xiaoyue.webp; visually checked final WebPs via contact sheets and full images",
    "folderBytes": 1360206,
    "timingFindings": [],
    "manualPlaybackQa": "Teacher subjective review follows the normal post-merge queue; see rescueQA for automated media playback scope.",
    "release": "Technical rescue complete; L360 remains the only unmerged numbered dependency. Release owns ordered main integration after L360."
  },
  "stage4AudioAlignment": {
    "R044-G02-prefix": {
      "spokenText": "客人到了請",
      "src": "/assets/reviews/R044/audio/R044-G02-prefix.m4a",
      "durationMs": 2531,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 420
        },
        {
          "charIndex": 1,
          "startMs": 420,
          "endMs": 780
        },
        {
          "charIndex": 2,
          "startMs": 780,
          "endMs": 1000
        },
        {
          "charIndex": 3,
          "startMs": 1000,
          "endMs": 1220
        },
        {
          "charIndex": 4,
          "startMs": 1920,
          "endMs": 2240
        }
      ]
    },
    "R044-G02-suffix": {
      "spokenText": "客人進客廳",
      "src": "/assets/reviews/R044/audio/R044-G02-suffix.m4a",
      "durationMs": 2229,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 460
        },
        {
          "charIndex": 1,
          "startMs": 460,
          "endMs": 960
        },
        {
          "charIndex": 2,
          "startMs": 960,
          "endMs": 1360
        },
        {
          "charIndex": 3,
          "startMs": 1360,
          "endMs": 1780
        },
        {
          "charIndex": 4,
          "startMs": 1780,
          "endMs": 1940
        }
      ]
    },
    "R044-G05-wrong-one": {
      "spokenText": "這家飯店正好有位子",
      "src": "/assets/reviews/R044/audio/R044-G05-wrong-one.m4a",
      "durationMs": 2879,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 240
        },
        {
          "charIndex": 1,
          "startMs": 240,
          "endMs": 580
        },
        {
          "charIndex": 2,
          "startMs": 580,
          "endMs": 860
        },
        {
          "charIndex": 3,
          "startMs": 860,
          "endMs": 1160
        },
        {
          "charIndex": 4,
          "startMs": 1160,
          "endMs": 1720
        },
        {
          "charIndex": 5,
          "startMs": 1720,
          "endMs": 2020
        },
        {
          "charIndex": 6,
          "startMs": 2020,
          "endMs": 2220
        },
        {
          "charIndex": 7,
          "startMs": 2220,
          "endMs": 2540
        },
        {
          "charIndex": 8,
          "startMs": 2540,
          "endMs": 2660
        }
      ]
    },
    "R044-G05-wrong-two": {
      "spokenText": "這家餐廳正好有椅子",
      "src": "/assets/reviews/R044/audio/R044-G05-wrong-two.m4a",
      "durationMs": 3088,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 240
        },
        {
          "charIndex": 1,
          "startMs": 240,
          "endMs": 580
        },
        {
          "charIndex": 2,
          "startMs": 580,
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
          "endMs": 1900
        },
        {
          "charIndex": 5,
          "startMs": 1900,
          "endMs": 2160
        },
        {
          "charIndex": 6,
          "startMs": 2160,
          "endMs": 2480
        },
        {
          "charIndex": 7,
          "startMs": 2480,
          "endMs": 2740
        },
        {
          "charIndex": 8,
          "startMs": 2740,
          "endMs": 2880
        }
      ]
    }
  },
  "rescueQA": {
    "sourcePackageSha": "02a35b9b4d102d62238718d0379a4b8e32462b03",
    "baseMainSha": "496aa87af167b0760bcee8f9ca959d6cc657edfd",
    "branch": "codex/r043-r044-package-rescue",
    "scope": "Only assigned package audio tails, alignment and completion records; approved sentence and image content retained.",
    "method": "Whisper-1 word timestamps on final AAC audio using the repository alignment algorithm; exact Traditional/Simplified-equivalent Han transcript validation. A 500 ms padded analysis-only WAV recheck is recorded where needed. No homophone substitution.",
    "audioMethod": "FFmpeg silencedetect -40 dB / 100 ms; preserve audible decay plus 160 ms, stream-copy complete AAC packets; no leading trims, regeneration, internal splices or re-encoding.",
    "corrections": [],
    "technicalStatus": "PASS: 9 exact transcripts, AAC mono 44100 Hz decode, timing counts/bounds/spans/overlap and <=300 ms trailing silence",
    "evidence": "curriculum-workflow/generated/R044-rescue-audio-qa.json",
    "browserQA": {
      "status": "PASS: every audio control played to ended",
      "controls": 10,
      "uniqueFiles": 9,
      "method": "Codex in-app Chromium; existing lesson-asset-review.html served locally with file URL adapter and visible native media ended-event diagnostics. Sequential playback queue exercised all sentence, G02 and G05 controls.",
      "scope": "Automated media loading and playback; no teacher subjective listening approval, physical-phone highlight test or microphone/stitched recording assessment is claimed.",
      "sop": "Current production SOP permits technical-gates fallback for browser/tool limitations; teacher subjective review is normally post-merge.",
      "url": "http://127.0.0.1:8343/tools/lesson-asset-review.html?unit=R044&ref=local-rescue",
      "endedDurationsMs": {
        "R044-S01": 4086,
        "R044-S02": 3111,
        "R044-S03": 2925,
        "R044-S04": 2716,
        "R044-S05": 3854,
        "R044-G02-prefix": 2531,
        "R044-G02-suffix": 2229,
        "R044-G05-wrong-one": 2879,
        "R044-G05-wrong-two": 3088
      }
    },
    "validation": {
      "tools": "PASS",
      "production": "PASS on unchanged main and separately on lesson-local draft data in memory",
      "curriculum": "PASS using current L359 main plus L360 rescue draft in memory; existing old-lesson advisory warnings only",
      "formats": "PASS strict mono AAC 44100 Hz / WebP / size / G05 loudness spread audit with zero warnings",
      "technical": "PASS transcript, hash, 80-900 ms timing spans, ordered indices, no overlap, measured and metadata tail <=300 ms",
      "preservation": "PASS: approved sentence and request content, game design, images and retained AAC packet hashes/PTS identical to pinned source; main curriculum/planner/ledger unchanged",
      "assetFolderBytes": 1360206,
      "release": "Shared-state integration and full npm run verify remain Release-owned."
    }
  }
}
```

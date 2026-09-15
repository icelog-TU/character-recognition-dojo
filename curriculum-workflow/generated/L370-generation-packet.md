# L370 Generation Packet: 朋友
## Production Package
- Owner: Production B; branch: codex/l370-complete-package.
- Status: asset-complete-package.
- Designation: two-character word lesson pilot; one normal lesson, order 370, one course card.
- newChars: ["朋","友"]; zhuyin: 朋 ㄆㄥˊ, 友 ㄧㄡˇ. Two independent charAudio assets, no wordAudio or chunk interaction.
- Initial claim boundary: cd4abf4b, with L366-L369 provisional. Resumed base: 95ca55f72ed99e36652a4de2dff4a5d20c16c1cc, with all four formally merged.
- Latest final fetch: 9cd3405fcc7edbfd8a6438d5dbd293cadc6ce4cb, still L001-L369, 372 learned characters, R044 after360.
- dependsOnLessons: []; provisionalLearnedChars: []; release/playable blockers: none known.
- Locked allowed set: all formal characters through L369 plus 朋/友 = 374, mechanically extracted in request.
- Shared production JSON, planner and ledger are unchanged and owned by Release.

Teacher override: Stage 2 duplicate-card behavior will be verified post-merge on main during first two-character pilot. Do not block package completion on pre-merge Stage 2 card-count simulation.

## Approved Content And Audit
The final JSON below is the complete aligned draft, including exact teacher-approved text, spokenText, focusChar, displayLines, imageNotes, assets and Stage 4. Request approvedSentences matches it field by field.
Coverage: 朋友 word4; 朋4; 友4; previous five 情2, 感2, 謝2, 吧1, 但1. PASS.
Allowed characters, spokenText Han-only equality, line joins, <=6 visible characters per line, focus membership: PASS.
Canonical G01-G05 order, sentence use S01/S03/S04/S02/S05 exactly once, indexes and single-Han option metadata: PASS.
G01/G02/G03 target sequence 朋/友/朋. G02 prefix is 朋 only; suffix begins 借. No two-character blank or word card.

## Image Generation And Style Lock
All five images were newly generated with built-in ImageGen. No reuse.
Reference input: all five L058 style-only images; L115-S01/S02, L118-S02, L119-S01, L128-S03; family anchors L154-S01, L162-S04, L163-S02; L012 boy, teacher anchor, Xiaoyue and Xiaoguang dedicated references.
Every exported WebP was opened individually and compared beside the L058/refined/cast reference sheet.
- S01 style-lock PASS, cast PASS: protagonist girl and Xiaoyue; accidental blocks incident, mild upset and repair gesture.
- S02 style-lock PASS, cast PASS: fixed 你 sky-blue/green boy and girl; chicks, feed and water.
- S03 style-lock PASS, cast PASS: sporty 他 with orange/navy/red/green identity; own raincoat and separate borrowed raincoat, sheltered.
- S04 style-lock PASS, cast PASS: sad girl, Xiaoyue, generic mover and boxes. First landscape draft was rejected, regenerated as square; discarded original is not committed.
- S05 style-lock PASS, cast PASS: distinct teacher, protagonist, Xiaoyue, Xiaoguang and generic classmates/crew; lifejackets, safe railed ramp and orderly queue.
No readable text, brands, numbers or watermarks. Five 1024x1024 WebP images, 883472 bytes total; individual range 136170-212004 bytes.

## Audio And Alignment
OpenAI gpt-4o-mini-tts / coral, natural Taiwan Mandarin. Independent single-character 朋 and 友; five exact spokenText sentences; independent G02 prefix/suffix; two complete G05 wrong readings. Eleven mono AAC 44100 Hz processed M4A files, 449865 bytes.
Repository generation/process/AI-alignment scripts were run through the owned L370-pipeline.cjs lesson-local adapter; shared curriculum was never inserted.
AI word timing is mapped to individual Han positions, including separate 朋 and 友. G02 and G05 timing maps are included below.
Teacher independently confirmed the exact G02 prefix 朋 and G05 wrong-one 小朋友排好再上車吧 on 2026-09-16. See L370-teacher-audio-review.json for exact quotes, hashes and original ASR evidence. This is scoped audio approval, not a blanket review.
No audio changed after those confirmations. Ambiguous ASR was retained, not rewritten into a fabricated transcript.
PCM/silence boundary corrections: wrong-one 排 onset1597ms and 再2745ms; wrong-two 排1430-1760ms and 再2398ms. These correct short/late timing intervals without changing or splicing speech.
All eleven assets decode; character-card volume checks pass; G05 three-option mean-volume spread is 1.1dB (<=3dB).
Raw generated MP3 inbox exists locally under curriculum-workflow/audio-inbox/L370/ and remains ignored per repository policy.
Total final media: 1333337 bytes, within 2.5MB budget.

## Phone-Width Pilot QA
Tested current branch app with a lesson-local draft fixture at http://127.0.0.1:5185/character-recognition-dojo/ in Chrome 390x844. Test progress is isolated to this local origin; no production JSON or cloud review writes.
- Course card PASS: one L370 titled 朋友.
- Stage 1 PASS: both glyphs and zhuyin visible without overlap; both standalone character-card clicks started audio and completed.
- Stage 2 target acceptance PASS: 友 then 朋 accepted; observed grid has one each plus four old characters and completes 2/2. Expected two each plus two distinct old characters/four taps remains the teacher-overridden post-merge pilot verification item.
- Stage 3 playback/control PASS: all five sentence clicks started and ended, stage reached 3/4. Phone screenshot shows individual Han highlight and separate 朋/友 positions. Timings are independent per Han; acoustic/highlight synchronization is not claimed as a human listening approval.
- Stage 4 PASS for canonical five modes and single-Han target/blank/card structure. G01 朋 and G03 朋 accepted; G04 感/謝/照/顧 filled correctly in order.
- G02 prefix playback reached the red 友 target. Browser-controlled tap displayed the floating 友 but did not produce an observable recording/replay completion. Microphone/ding/recorded-voice/suffix replay listening was not completed through this browser control surface; do not infer an asset defect or claim a successful recorded replay. Exact fragment content, decoding, volume and timing gates passed.
- G04 filled-card playback completed; automatic next-round completion was not observed before using the visible skip control to inspect G05. Final boundary has a newer reward-completion navigation fix; Release should verify transitions on main.
- G05 first-click playback PASS for each of all three option controls; each returned from playing to idle.
- Character overview PASS: separate 朋 (#373) and 友 (#374) entries, both course370.
- Asset review tool: verify the pushed immutable packet lists both new-character audio files and all assets; teacher subjective review remains the post-main repair workflow.
Browser-observed playback states do not constitute auditory certification. Technical fallback follows current SOP; two scoped teacher listening confirmations are additional evidence.

## Validation And Release Handoff
- tools:check, ai:check: PASS.
- curriculum:audit-state: PASS; L370 asset folder outside formal JSON is expected package-only warning.
- curriculum:packet --request: PASS; template output replaced with approved aligned final records, not used as final empty draft.
- L370-pipeline.cjs production and formats --strict (repo validators against draft): PASS.
- L370-audit.cjs: PASS; see L370-technical-qa.json for all media hashes, sizes, durations and volume measurements.
- npm run validate:production: PASS for baseline; not substituted for lesson-local checks.
- Final pushed curriculum:package-intake is mandatory and reported with final tip SHA in handoff.
- Full shared-state verify is left to Release because L370 is intentionally not inserted in production JSON.
- Release must verify course grid, Stage1/2/4, character overview and both character audio entries after integration, then deploy and open formal teacher review.

Pre-merge URL uses the immutable pushed SHA, labeled: pre-merge package preview, not final main review queue.
Post-merge only, usable after Release merges and deploys:
https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L370&ref=main
https://icelog-tu.github.io/character-recognition-dojo/tools/asset-review-index.html?ref=main
Status: npm run asset:review-status -- --unit L370 --ref main

## Final Aligned Draft
```json
{
  "id": "L370",
  "order": 370,
  "title": "朋友",
  "newChars": [
    "朋",
    "友"
  ],
  "zhuyin": {
    "朋": "ㄆㄥˊ",
    "友": "ㄧㄡˇ"
  },
  "charAudio": {
    "朋": "/assets/lessons/L370/audio/char-u670b.m4a",
    "友": "/assets/lessons/L370/audio/char-u53cb.m4a"
  },
  "requiredRounds": 5,
  "dependsOnLessons": [],
  "provisionalLearnedChars": [],
  "releaseBlockers": [],
  "packageStatus": "asset-complete-package",
  "sentences": [
    {
      "id": "L370-S01",
      "text": "我跟朋友感情好，但也會生氣。",
      "spokenText": "我跟朋友感情好但也會生氣",
      "focusChar": "朋",
      "displayLines": [
        "我跟朋友",
        "感情好，",
        "但也會生氣。"
      ],
      "imageNotes": "主角小女孩和小月在家中一起玩積木。\n小月不小心碰倒女孩剛蓋好的積木屋，\n女孩皺眉、鼓著臉，有一點生氣。\n小月帶著歉意，正拿起掉落的積木準備幫忙修好。\n呈現好朋友之間也會有小摩擦，\n不要畫成大吵架、推打或故意破壞。\n小月使用 public/assets/reference/lesson-cast/xiaoyue.webp。",
      "approved": true,
      "imageSrc": "/assets/lessons/L370/images/L370-S01.webp",
      "audio": {
        "src": "/assets/lessons/L370/audio/L370-S01.m4a",
        "durationMs": 4515,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 340
          },
          {
            "charIndex": 1,
            "startMs": 340,
            "endMs": 640
          },
          {
            "charIndex": 2,
            "startMs": 640,
            "endMs": 920
          },
          {
            "charIndex": 3,
            "startMs": 920,
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
            "endMs": 1780
          },
          {
            "charIndex": 6,
            "startMs": 1780,
            "endMs": 2360
          },
          {
            "charIndex": 7,
            "startMs": 2400,
            "endMs": 2760
          },
          {
            "charIndex": 8,
            "startMs": 2760,
            "endMs": 3020
          },
          {
            "charIndex": 9,
            "startMs": 3020,
            "endMs": 3320
          },
          {
            "charIndex": 10,
            "startMs": 3320,
            "endMs": 3660
          },
          {
            "charIndex": 11,
            "startMs": 3660,
            "endMs": 3820
          }
        ]
      }
    },
    {
      "id": "L370-S02",
      "text": "感謝你照顧我家的小雞。",
      "spokenText": "感謝你照顧我家的小雞",
      "focusChar": "感",
      "displayLines": [
        "感謝你照顧",
        "我家的小雞。"
      ],
      "imageNotes": "主角家院子裡，固定「你」小男孩剛替小雞添好飼料和清水。\n主角小女孩站在旁邊，看見小雞正在吃食，微笑著向男孩道謝。\n男孩手上拿著盛飼料的小容器，雞舍與水盆清楚可見，\n讓孩子看得懂他幫忙做了什麼。\n「你」使用固定年幼男孩身份：\n短而略蓬的深色頭髮、天藍上衣、綠短褲、藍鞋；\n需要書包時使用橘色小書包。",
      "approved": true,
      "imageSrc": "/assets/lessons/L370/images/L370-S02.webp",
      "audio": {
        "src": "/assets/lessons/L370/audio/L370-S02.m4a",
        "durationMs": 4111,
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
            "endMs": 1340
          },
          {
            "charIndex": 3,
            "startMs": 1340,
            "endMs": 1740
          },
          {
            "charIndex": 4,
            "startMs": 1740,
            "endMs": 2020
          },
          {
            "charIndex": 5,
            "startMs": 2020,
            "endMs": 2440
          },
          {
            "charIndex": 6,
            "startMs": 2440,
            "endMs": 2660
          },
          {
            "charIndex": 7,
            "startMs": 2660,
            "endMs": 2940
          },
          {
            "charIndex": 8,
            "startMs": 2940,
            "endMs": 3280
          },
          {
            "charIndex": 9,
            "startMs": 3280,
            "endMs": 3360
          }
        ]
      }
    },
    {
      "id": "L370-S03",
      "text": "朋友借我雨衣，我跟他道謝。",
      "spokenText": "朋友借我雨衣我跟他道謝",
      "focusChar": "友",
      "displayLines": [
        "朋友借我",
        "雨衣，",
        "我跟他道謝。"
      ],
      "imageNotes": "學校放學時，屋簷外正在下雨。\n固定「他」運動型小男孩把一件兒童雨衣借給主角小女孩。\n女孩雙手接過，抬頭向他道謝。\n男孩自己已有另一件雨衣穿在身上，\n避免画成把唯一雨具借出去後自己淋雨。\n兩人都站在遮雨處。\n「他」使用固定運動型男孩身份，不可套用「你」或小光。\n雨衣需配合場景，同時保留可辨識的既有角色特徵。",
      "approved": true,
      "imageSrc": "/assets/lessons/L370/images/L370-S03.webp",
      "audio": {
        "src": "/assets/lessons/L370/audio/L370-S03.m4a",
        "durationMs": 4878,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 300
          },
          {
            "charIndex": 1,
            "startMs": 300,
            "endMs": 600
          },
          {
            "charIndex": 2,
            "startMs": 600,
            "endMs": 1060
          },
          {
            "charIndex": 3,
            "startMs": 1060,
            "endMs": 1400
          },
          {
            "charIndex": 4,
            "startMs": 1400,
            "endMs": 1680
          },
          {
            "charIndex": 5,
            "startMs": 1680,
            "endMs": 1820
          },
          {
            "charIndex": 6,
            "startMs": 2320,
            "endMs": 2480
          },
          {
            "charIndex": 7,
            "startMs": 2480,
            "endMs": 2640
          },
          {
            "charIndex": 8,
            "startMs": 2640,
            "endMs": 2820
          },
          {
            "charIndex": 9,
            "startMs": 2820,
            "endMs": 3140
          },
          {
            "charIndex": 10,
            "startMs": 3140,
            "endMs": 3280
          }
        ]
      }
    },
    {
      "id": "L370-S04",
      "text": "好朋友要搬家，我心情很差。",
      "spokenText": "好朋友要搬家我心情很差",
      "focusChar": "朋",
      "displayLines": [
        "好朋友",
        "要搬家，",
        "我心情很差。"
      ],
      "imageNotes": "小月家門口放著幾個打包好的紙箱，\ngeneric 搬家工作人員正把箱子搬向車子。\n小月背著書包，和主角小女孩道別。\n女孩低著頭、肩膀微垂，捨不得朋友離開；\n小月輕握她的手。\n重點是朋友要搬走使女孩難過，不是生氣或討厭小月。\n小月沿用專屬 reference。\n紙箱、車身不放文字、品牌、標誌或可讀車牌。",
      "approved": true,
      "imageSrc": "/assets/lessons/L370/images/L370-S04.webp",
      "audio": {
        "src": "/assets/lessons/L370/audio/L370-S04.m4a",
        "durationMs": 4827,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 380
          },
          {
            "charIndex": 1,
            "startMs": 380,
            "endMs": 590
          },
          {
            "charIndex": 2,
            "startMs": 590,
            "endMs": 800
          },
          {
            "charIndex": 3,
            "startMs": 800,
            "endMs": 1320
          },
          {
            "charIndex": 4,
            "startMs": 1320,
            "endMs": 1620
          },
          {
            "charIndex": 5,
            "startMs": 1620,
            "endMs": 1880
          },
          {
            "charIndex": 6,
            "startMs": 2420,
            "endMs": 2720
          },
          {
            "charIndex": 7,
            "startMs": 2720,
            "endMs": 2940
          },
          {
            "charIndex": 8,
            "startMs": 2940,
            "endMs": 3160
          },
          {
            "charIndex": 9,
            "startMs": 3160,
            "endMs": 3620
          },
          {
            "charIndex": 10,
            "startMs": 3620,
            "endMs": 3800
          }
        ]
      }
    },
    {
      "id": "L370-S05",
      "text": "小朋友，排好再上船吧。",
      "spokenText": "小朋友排好再上船吧",
      "focusChar": "友",
      "displayLines": [
        "小朋友，",
        "排好再",
        "上船吧。"
      ],
      "imageNotes": "碼頭上，固定老師面向準備搭船的孩子，伸手引導大家排好。\n主角小女孩、小月、小光與幾位 generic 同學排成一列，\n等待依序登船。\n船已停穩，登船通道有扶手，generic 船員在入口接應。\n孩子穿好救生衣，沒有奔跑或推擠。\n畫面清楚呈現先排好、再上船。\n小月、小光使用各自專屬 reference，\n並保留救生衣之外可辨識的髮型、眼鏡等身份特徵。\n老師不能畫成主角媽媽。",
      "approved": true,
      "imageSrc": "/assets/lessons/L370/images/L370-S05.webp",
      "audio": {
        "src": "/assets/lessons/L370/audio/L370-S05.m4a",
        "durationMs": 4137,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 380
          },
          {
            "charIndex": 1,
            "startMs": 380,
            "endMs": 600
          },
          {
            "charIndex": 2,
            "startMs": 600,
            "endMs": 820
          },
          {
            "charIndex": 3,
            "startMs": 820,
            "endMs": 1240
          },
          {
            "charIndex": 4,
            "startMs": 1240,
            "endMs": 1560
          },
          {
            "charIndex": 5,
            "startMs": 1920,
            "endMs": 2180
          },
          {
            "charIndex": 6,
            "startMs": 2180,
            "endMs": 2480
          },
          {
            "charIndex": 7,
            "startMs": 2480,
            "endMs": 2680
          },
          {
            "charIndex": 8,
            "startMs": 2680,
            "endMs": 2900
          }
        ]
      }
    }
  ],
  "sentenceGames": [
    {
      "id": "L370-G01",
      "type": "find-character",
      "sentenceId": "L370-S01",
      "targetChar": "朋",
      "targetCharIndex": 2,
      "prompt": "找到朋，點一下。"
    },
    {
      "id": "L370-G02",
      "type": "teach-character",
      "sentenceId": "L370-S03",
      "targetChar": "友",
      "targetCharIndex": 1,
      "prompt": "幫忙說出這個字。",
      "teachAudio": {
        "prefixText": "朋",
        "prefixSrc": "/assets/lessons/L370/audio/L370-G02-prefix.m4a",
        "suffixText": "借我雨衣我跟他道謝",
        "suffixSrc": "/assets/lessons/L370/audio/L370-G02-suffix.m4a",
        "prefixAudio": {
          "spokenText": "朋",
          "src": "/assets/lessons/L370/audio/L370-G02-prefix.m4a",
          "durationMs": 1091,
          "charTimings": [
            {
              "charIndex": 0,
              "startMs": 0,
              "endMs": 532
            }
          ]
        },
        "suffixAudio": {
          "spokenText": "借我雨衣我跟他道謝",
          "src": "/assets/lessons/L370/audio/L370-G02-suffix.m4a",
          "durationMs": 3526,
          "charTimings": [
            {
              "charIndex": 0,
              "startMs": 0,
              "endMs": 340
            },
            {
              "charIndex": 1,
              "startMs": 340,
              "endMs": 640
            },
            {
              "charIndex": 2,
              "startMs": 640,
              "endMs": 880
            },
            {
              "charIndex": 3,
              "startMs": 880,
              "endMs": 1080
            },
            {
              "charIndex": 4,
              "startMs": 1620,
              "endMs": 1820
            },
            {
              "charIndex": 5,
              "startMs": 1820,
              "endMs": 2020
            },
            {
              "charIndex": 6,
              "startMs": 2020,
              "endMs": 2260
            },
            {
              "charIndex": 7,
              "startMs": 2260,
              "endMs": 2600
            },
            {
              "charIndex": 8,
              "startMs": 2600,
              "endMs": 2760
            }
          ]
        }
      }
    },
    {
      "id": "L370-G03",
      "type": "missing-character",
      "sentenceId": "L370-S04",
      "targetChar": "朋",
      "targetCharIndex": 1,
      "missingIndexes": [
        1
      ],
      "prompt": "補上不見的字。",
      "options": [
        {
          "id": "correct",
          "text": "朋",
          "correct": true
        },
        {
          "id": "wrong-one",
          "text": "明",
          "correct": false
        },
        {
          "id": "wrong-two",
          "text": "月",
          "correct": false
        }
      ]
    },
    {
      "id": "L370-G04",
      "type": "partial-order",
      "sentenceId": "L370-S02",
      "targetChar": "感",
      "missingIndexes": [
        0,
        1,
        3,
        4
      ],
      "prompt": "把句子排回正確順序。",
      "options": [
        {
          "id": "card-gu",
          "text": "顧",
          "correct": true,
          "correctOrder": 3
        },
        {
          "id": "card-gan",
          "text": "感",
          "correct": true,
          "correctOrder": 0
        },
        {
          "id": "card-zhao",
          "text": "照",
          "correct": true,
          "correctOrder": 2
        },
        {
          "id": "card-xie",
          "text": "謝",
          "correct": true,
          "correctOrder": 1
        }
      ]
    },
    {
      "id": "L370-G05",
      "type": "choose-pronunciation",
      "sentenceId": "L370-S05",
      "targetChar": "友",
      "targetCharIndex": 2,
      "prompt": "聽一聽，選出讀對的朋友。",
      "options": [
        {
          "id": "correct",
          "text": "小朋友，排好再上船吧。",
          "spokenText": "小朋友排好再上船吧",
          "correct": true,
          "sentenceId": "L370-S05",
          "audioSrc": "/assets/lessons/L370/audio/L370-S05.m4a"
        },
        {
          "id": "wrong-one",
          "text": "小朋友，排好再上車吧。",
          "spokenText": "小朋友排好再上車吧",
          "correct": false,
          "audioSrc": "/assets/lessons/L370/audio/L370-G05-wrong-one.m4a"
        },
        {
          "id": "wrong-two",
          "text": "小朋友，排好再下船吧。",
          "spokenText": "小朋友排好再下船吧",
          "correct": false,
          "audioSrc": "/assets/lessons/L370/audio/L370-G05-wrong-two.m4a"
        }
      ]
    }
  ],
  "notes": "Two-character word lesson pilot; one normal lesson/order/course card. Teacher override: Stage 2 duplicate-card behavior will be verified post-merge on main during first two-character pilot. Do not block package completion on pre-merge Stage 2 card-count simulation. Expected six cards: 朋 x2, 友 x2, two distinct old characters, four target taps. L366-L369 formally merged; no provisional dependencies. Teacher verified G02 prefix and G05 wrong-one on 2026-09-16; exact file hashes and original ASR are recorded in L370-teacher-audio-review.json. ASR words retained, no forged transcript. G05 wrong-one 排 onset adjusted to1597ms, 再2745ms; wrong-two 排1430-1760ms and 再2398ms using PCM/silence onsets. No speech splicing or audio alteration after teacher review. Mobile QA at 390x844: Stage 1 both character cards/zhuyin visible and playback completed; Stage 2 both targets accepted, observed one of each (2/2), duplicate-card rule retained for post-merge pilot verification. Stage 3 all five sentence playbacks completed; separate Han positions/timings for 朋 and 友. G01/G03 single-character responses accepted; G04 all four single-Han cards filled in order; G05 all three first-click playbacks started and ended. G02 prefix reached target 友; browser-controlled tap showed the floating target but did not yield an observable recording/replay completion, so recorded-voice/ding/suffix replay listening is deferred, not claimed as tested. Character overview shows 朋 and 友 separately at order 370. Technical gates passed; teacher subjective review remains post-merge. Final boundary check 9cd3405fcc7edbfd8a6438d5dbd293cadc6ce4cb still L001-L369 with no outstanding learner-character dependencies.",
  "stage4AudioAlignment": {
    "L370-G02-prefix": {
      "spokenText": "朋",
      "src": "/assets/lessons/L370/audio/L370-G02-prefix.m4a",
      "durationMs": 1091,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 532
        }
      ]
    },
    "L370-G05-wrong-one": {
      "spokenText": "小朋友排好再上車吧",
      "src": "/assets/lessons/L370/audio/L370-G05-wrong-one.m4a",
      "durationMs": 4484,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 440
        },
        {
          "charIndex": 1,
          "startMs": 440,
          "endMs": 700
        },
        {
          "charIndex": 2,
          "startMs": 700,
          "endMs": 960
        },
        {
          "charIndex": 3,
          "startMs": 1597,
          "endMs": 1960
        },
        {
          "charIndex": 4,
          "startMs": 1960,
          "endMs": 2360
        },
        {
          "charIndex": 5,
          "startMs": 2745,
          "endMs": 3140
        },
        {
          "charIndex": 6,
          "startMs": 3140,
          "endMs": 3460
        },
        {
          "charIndex": 7,
          "startMs": 3460,
          "endMs": 3620
        },
        {
          "charIndex": 8,
          "startMs": 3620,
          "endMs": 3860
        }
      ]
    },
    "L370-G02-suffix": {
      "spokenText": "借我雨衣我跟他道謝",
      "src": "/assets/lessons/L370/audio/L370-G02-suffix.m4a",
      "durationMs": 3526,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 340
        },
        {
          "charIndex": 1,
          "startMs": 340,
          "endMs": 640
        },
        {
          "charIndex": 2,
          "startMs": 640,
          "endMs": 880
        },
        {
          "charIndex": 3,
          "startMs": 880,
          "endMs": 1080
        },
        {
          "charIndex": 4,
          "startMs": 1620,
          "endMs": 1820
        },
        {
          "charIndex": 5,
          "startMs": 1820,
          "endMs": 2020
        },
        {
          "charIndex": 6,
          "startMs": 2020,
          "endMs": 2260
        },
        {
          "charIndex": 7,
          "startMs": 2260,
          "endMs": 2600
        },
        {
          "charIndex": 8,
          "startMs": 2600,
          "endMs": 2760
        }
      ]
    },
    "L370-G05-wrong-two": {
      "spokenText": "小朋友排好再下船吧",
      "src": "/assets/lessons/L370/audio/L370-G05-wrong-two.m4a",
      "durationMs": 4090,
      "charTimings": [
        {
          "charIndex": 0,
          "startMs": 0,
          "endMs": 400
        },
        {
          "charIndex": 1,
          "startMs": 400,
          "endMs": 630
        },
        {
          "charIndex": 2,
          "startMs": 630,
          "endMs": 860
        },
        {
          "charIndex": 3,
          "startMs": 1430,
          "endMs": 1760
        },
        {
          "charIndex": 4,
          "startMs": 1760,
          "endMs": 2280
        },
        {
          "charIndex": 5,
          "startMs": 2398,
          "endMs": 2720
        },
        {
          "charIndex": 6,
          "startMs": 2720,
          "endMs": 2980
        },
        {
          "charIndex": 7,
          "startMs": 2980,
          "endMs": 3180
        },
        {
          "charIndex": 8,
          "startMs": 3180,
          "endMs": 3480
        }
      ]
    }
  }
}
```

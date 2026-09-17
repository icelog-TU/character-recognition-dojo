# L451 台 Production D package

Status: dependency-blocked-asset-complete

Branch codex/l451-complete-package; claim 9d70a432. Base a5779c4bae03fa363689cc7ee4d6555b7dadeafb; official L438 習 / 442 learned. Full allowedChars 449 = official 442 + 機音拍歌唱舞 + 台. Text dependencies L442,L446,L447,L448,L449,L450; 機 is extra allowed vocabulary outside coverage. Ordered Release predecessors L439-L450.

Milestone blocker: L450 → R055 → R056 → L451. R055/R056 cover L421-L450 and were not written/merged at handoff. This blocks Release/main integration only, not parallel Production. No main merge performed.

- S01: style-lock PASS; cast PASS. Three distinct generic performers: one singer, two dancers; raised stage edge and audience visible.
- S02: style-lock PASS; cast PASS. Fixed girl below stage looking toward microphone with nervous anticipation; separate ponytail/glasses/teal teacher. Expression revised.
- S03: style-lock PASS; cast PASS. Fixed girl photographing fixed mother on safe plant-filled balcony; phone screen faces girl and rear camera points to mother. Direction revised.
- S04: style-lock PASS; cast PASS. Fixed girl listens to chirping sparrow on visible windowsill, distinct from balcony.
- S05: style-lock PASS; cast PASS. Fixed girl gestures near ear beside single running washer; mother attends; no physical contact with machine or damage.

Compared actual exported WebPs side by side with full L058 set, refined L115-S01/S02, L118-S02, L119-S01, L128-S03, family L154-S01/L162-S04/L163-S02. S02/S03 early drafts rejected for expression/phone direction and revised; rejected drafts not committed. Five 1024-square WebP files, each below 250KB, total assets 1265394 bytes. Built-in image_gen; exact prompt/source manifest in L451-image-prompts.json.

Ten final mono AAC 44100Hz M4A files; all decode, required peak/mean limits met. Standalone 1788ms. G05 mean-volume spread 0.2dB. Generated whole utterances independently using gpt-4o-mini-tts/coral and standard assets:audio conversion/safety gain. Verified near-silent non-character tails trimmed only beyond final -45dB decay, preserving 150ms. No syllable extraction, splicing, muting, or patching. Nine final exact-text alignments in L451-alignment.json; five sentence final tails <=300ms, ordered spans 80-900ms.

Standalone 台 regenerated after inconsistent onset recognition. Final TTS input is exactly 台, standard Taiwan-Mandarin instruction, speed 0.9. Whisper without expected transcript yields 台. Audio-model phonetic judgments still report cai2; both results and final SHA256 preserved in L451-phonetic-audio-review.json. This is NOT human pronunciation approval: keep standalone onset/tone listening as a subjective QA follow-up. S04 audio-model analysis reads 傳來 as ㄔㄨㄢˊ ㄌㄞˊ. G02 exact fragments 我在陽 and 幫媽媽拍照; homophone 洋 transcription resolved with vocabulary hint, approved Traditional text unchanged. Original MP3s remain ignored under curriculum-workflow/audio-inbox/L451/.

390x844 browser QA: Stage 1 final audio tap/complete; Stage 2 three targets accepted; Stage 3 all five played with active highlights/line layouts; G01/G03/G04 correct interactions; G05 three readers and correct green feedback; reward completion and return-home inspected. G02 prefix reached red 台, then UI skip. Browser API cannot sustain pointer hold: recording/stitched replay remain untested. Human listening/syllable synchronization not claimed. Preview stopped, agent tab closed, viewport reset, shared curriculum/scripts restored.

Startup tools:check, ai:check, curriculum:audit-state PASS. Lesson-local validate:production PASS; strict asset audit, full baseline validator and pushed-ref intake checkpoints follow below. verify skipped: dependency-blocked, shared state left for Release.

Post-merge review queue (usable after Release merges/deploys): https://icelog-tu.github.io/character-recognition-dojo/tools/asset-review-index.html?ref=main ; https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L451&ref=main . Query: npm run asset:review-status -- --unit L451 --ref main

## Final approved sentence records

```json
[
  {
    "id": "L451-S01",
    "text": "舞台上，有人唱歌，有人跳舞。",
    "spokenText": "舞台上有人唱歌有人跳舞",
    "displayLines": [
      "舞台上，",
      "有人唱歌，",
      "有人跳舞。"
    ],
    "focusChar": "台",
    "imageNotes": "明亮的小型學校舞台，幾位 generic child performers 分工演出：一位站在麥克風前唱歌，另外兩位在旁跳舞。舞台邊緣和台下少量觀眾清楚可見。\n必須是不同的人分別唱歌、跳舞，不是只有一人同時做兩件事。generic performers 與固定主角、小月、小光外貌區分；不放舞台標題、布條文字或歌詞。",
    "imagePrompt": "Square modern children picture-book illustration, full L058 set STYLE ONLY: fine pencil-and-watercolor linework, warm natural light, rich layered texture, detailed but clean environments, expressive preschool proportions, soft cheeks, bright warm palette. Refined proportion references L115-S01/S02,L118-S02,L119-S01,L128-S03. Family identity anchors L154-S01,L162-S04,L163-S02: fixed protagonist girl short dark bob pink clip pink cardigan navy skirt pink shoes, mother cream blouse blue jeans dark bob; teacher distinct from mother in tidy teaching clothes. No letters, text, numbers, brands or logos. 明亮的小型學校舞台，幾位 generic child performers 分工演出：一位站在麥克風前唱歌，另外兩位在旁跳舞。舞台邊緣和台下少量觀眾清楚可見。\n必須是不同的人分別唱歌、跳舞，不是只有一人同時做兩件事。generic performers 與固定主角、小月、小光外貌區分；不放舞台標題、布條文字或歌詞。",
    "approved": true
  },
  {
    "id": "L451-S02",
    "text": "我想上台唱歌，可是有點怕。",
    "spokenText": "我想上台唱歌可是有點怕",
    "displayLines": [
      "我想上台",
      "唱歌，",
      "可是有點怕。"
    ],
    "focusChar": "台",
    "imageNotes": "主角女孩站在舞台旁的上台入口，望向台上的麥克風，雙手輕握、表情期待又緊張，還沒有走上台。固定主角老師在旁溫和陪伴，沒有推拉她。\n呈現「想上台但有點怕」，不畫成女孩已站在台上唱歌，也不畫成遭到責罵、台下嘲笑或驚恐哭泣。",
    "imagePrompt": "Square modern children picture-book illustration, full L058 set STYLE ONLY: fine pencil-and-watercolor linework, warm natural light, rich layered texture, detailed but clean environments, expressive preschool proportions, soft cheeks, bright warm palette. Refined proportion references L115-S01/S02,L118-S02,L119-S01,L128-S03. Family identity anchors L154-S01,L162-S04,L163-S02: fixed protagonist girl short dark bob pink clip pink cardigan navy skirt pink shoes, mother cream blouse blue jeans dark bob; teacher distinct from mother in tidy teaching clothes. No letters, text, numbers, brands or logos. 主角女孩站在舞台旁的上台入口，望向台上的麥克風，雙手輕握、表情期待又緊張，還沒有走上台。固定主角老師在旁溫和陪伴，沒有推拉她。\n呈現「想上台但有點怕」，不畫成女孩已站在台上唱歌，也不畫成遭到責罵、台下嘲笑或驚恐哭泣。",
    "approved": true
  },
  {
    "id": "L451-S03",
    "text": "我在陽台幫媽媽拍照。",
    "spokenText": "我在陽台幫媽媽拍照",
    "displayLines": [
      "我在陽台",
      "幫媽媽拍照。"
    ],
    "focusChar": "台",
    "imageNotes": "主角家陽台有花草與完整欄杆。固定主角媽媽站在花草旁，面向主角女孩；女孩雙手拿著手機替媽媽拍照。兩人都在欄杆內側，鏡頭方向明確指向媽媽。\n攝影者是女孩、被拍攝者是媽媽，不能對調。不是拍山上的雲或遠方風景；手機不放品牌、文字或數字。",
    "imagePrompt": "Square modern children picture-book illustration, full L058 set STYLE ONLY: fine pencil-and-watercolor linework, warm natural light, rich layered texture, detailed but clean environments, expressive preschool proportions, soft cheeks, bright warm palette. Refined proportion references L115-S01/S02,L118-S02,L119-S01,L128-S03. Family identity anchors L154-S01,L162-S04,L163-S02: fixed protagonist girl short dark bob pink clip pink cardigan navy skirt pink shoes, mother cream blouse blue jeans dark bob; teacher distinct from mother in tidy teaching clothes. No letters, text, numbers, brands or logos. 主角家陽台有花草與完整欄杆。固定主角媽媽站在花草旁，面向主角女孩；女孩雙手拿著手機替媽媽拍照。兩人都在欄杆內側，鏡頭方向明確指向媽媽。\n攝影者是女孩、被拍攝者是媽媽，不能對調。不是拍山上的雲或遠方風景；手機不放品牌、文字或數字。",
    "approved": true
  },
  {
    "id": "L451-S04",
    "text": "窗台上傳來小鳥的叫聲。",
    "spokenText": "窗台上傳來小鳥的叫聲",
    "displayLines": [
      "窗台上傳來",
      "小鳥的叫聲。"
    ],
    "focusChar": "台",
    "zhuyinOverrides": {
      "3": "ㄔㄨㄢˊ"
    },
    "imageNotes": "從主角家室內看向窗戶，一隻小鳥停在窗台上，張嘴鳴叫；主角女孩轉頭看向牠，正在聆聽。窗框與鳥腳下的窗台平面清楚可見。\n這是窗台，不是陽台、鳥籠或樹枝。聲音來源是眼前的小鳥，不用擬聲字或字幕。句子保留老師修正的「叫聲」，不得改回「聲音」。",
    "imagePrompt": "Square modern children picture-book illustration, full L058 set STYLE ONLY: fine pencil-and-watercolor linework, warm natural light, rich layered texture, detailed but clean environments, expressive preschool proportions, soft cheeks, bright warm palette. Refined proportion references L115-S01/S02,L118-S02,L119-S01,L128-S03. Family identity anchors L154-S01,L162-S04,L163-S02: fixed protagonist girl short dark bob pink clip pink cardigan navy skirt pink shoes, mother cream blouse blue jeans dark bob; teacher distinct from mother in tidy teaching clothes. No letters, text, numbers, brands or logos. 從主角家室內看向窗戶，一隻小鳥停在窗台上，張嘴鳴叫；主角女孩轉頭看向牠，正在聆聽。窗框與鳥腳下的窗台平面清楚可見。\n這是窗台，不是陽台、鳥籠或樹枝。聲音來源是眼前的小鳥，不用擬聲字或字幕。句子保留老師修正的「叫聲」，不得改回「聲音」。",
    "approved": true
  },
  {
    "id": "L451-S05",
    "text": "這台洗衣機的聲音太大了。",
    "spokenText": "這台洗衣機的聲音太大了",
    "displayLines": [
      "這台洗衣機的",
      "聲音太大了。"
    ],
    "focusChar": "台",
    "imageNotes": "家中洗衣區，一台洗衣機正在運轉。主角女孩站在旁邊但沒有碰機器，一手輕靠耳旁，向固定主角媽媽抱怨太大聲；媽媽轉頭注意這台洗衣機。\n「這台」明確指向畫面中的單一洗衣機。可用少量機身震動線輔助，不畫冒煙、火花或嚴重損壞；不畫成手機播放聲音，也不恢復成「爸爸買新洗衣機」的舊稿。",
    "imagePrompt": "Square modern children picture-book illustration, full L058 set STYLE ONLY: fine pencil-and-watercolor linework, warm natural light, rich layered texture, detailed but clean environments, expressive preschool proportions, soft cheeks, bright warm palette. Refined proportion references L115-S01/S02,L118-S02,L119-S01,L128-S03. Family identity anchors L154-S01,L162-S04,L163-S02: fixed protagonist girl short dark bob pink clip pink cardigan navy skirt pink shoes, mother cream blouse blue jeans dark bob; teacher distinct from mother in tidy teaching clothes. No letters, text, numbers, brands or logos. 家中洗衣區，一台洗衣機正在運轉。主角女孩站在旁邊但沒有碰機器，一手輕靠耳旁，向固定主角媽媽抱怨太大聲；媽媽轉頭注意這台洗衣機。\n「這台」明確指向畫面中的單一洗衣機。可用少量機身震動線輔助，不畫冒煙、火花或嚴重損壞；不畫成手機播放聲音，也不恢復成「爸爸買新洗衣機」的舊稿。",
    "approved": true
  }
]
```

## Final Stage 4

```json
[
  {
    "id": "L451-G01",
    "type": "find-character",
    "sentenceId": "L451-S04",
    "targetChar": "台",
    "targetCharIndex": 1,
    "prompt": "找出句子裡的「台」。"
  },
  {
    "id": "L451-G02",
    "type": "teach-character",
    "sentenceId": "L451-S03",
    "targetChar": "台",
    "targetCharIndex": 3,
    "prompt": "請你幫小兔子念這個字。",
    "teachAudio": {
      "prefixText": "我在陽",
      "suffixText": "幫媽媽拍照",
      "prefixSrc": "/assets/lessons/L451/audio/L451-G02-prefix.m4a",
      "suffixSrc": "/assets/lessons/L451/audio/L451-G02-suffix.m4a",
      "prefixAudio": {
        "src": "/assets/lessons/L451/audio/L451-G02-prefix.m4a",
        "durationMs": 1582,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 390
          },
          {
            "charIndex": 1,
            "startMs": 390,
            "endMs": 780
          },
          {
            "charIndex": 2,
            "startMs": 780,
            "endMs": 1240
          }
        ]
      },
      "suffixAudio": {
        "src": "/assets/lessons/L451/audio/L451-G02-suffix.m4a",
        "durationMs": 1685,
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
            "endMs": 880
          },
          {
            "charIndex": 3,
            "startMs": 880,
            "endMs": 1220
          },
          {
            "charIndex": 4,
            "startMs": 1220,
            "endMs": 1460
          }
        ]
      }
    }
  },
  {
    "id": "L451-G03",
    "type": "missing-character",
    "sentenceId": "L451-S05",
    "targetChar": "台",
    "targetCharIndex": 1,
    "missingIndexes": [
      1
    ],
    "prompt": "找回不見的字。",
    "options": [
      {
        "id": "L451-G03-O1",
        "text": "個",
        "correct": false
      },
      {
        "id": "L451-G03-O2",
        "text": "台",
        "correct": true
      },
      {
        "id": "L451-G03-O3",
        "text": "張",
        "correct": false
      }
    ]
  },
  {
    "id": "L451-G04",
    "type": "partial-order",
    "sentenceId": "L451-S01",
    "targetChar": "舞",
    "targetCharIndex": 10,
    "missingIndexes": [
      7,
      8,
      9,
      10
    ],
    "prompt": "照順序把字卡放回去。",
    "options": [
      {
        "id": "L451-G04-O1",
        "text": "跳",
        "correct": true,
        "correctOrder": 2
      },
      {
        "id": "L451-G04-O2",
        "text": "有",
        "correct": true,
        "correctOrder": 0
      },
      {
        "id": "L451-G04-O3",
        "text": "舞",
        "correct": true,
        "correctOrder": 3
      },
      {
        "id": "L451-G04-O4",
        "text": "人",
        "correct": true,
        "correctOrder": 1
      }
    ]
  },
  {
    "id": "L451-G05",
    "type": "choose-pronunciation",
    "sentenceId": "L451-S02",
    "targetChar": "台",
    "targetCharIndex": 3,
    "prompt": "先聽每位朋友念，再選出念對的朋友。",
    "options": [
      {
        "id": "L451-G05-O1",
        "text": "我想上台唱歌，可是有點怕。",
        "spokenText": "我想上台唱歌可是有點怕",
        "correct": true,
        "audioSrc": "/assets/lessons/L451/audio/L451-S02.m4a"
      },
      {
        "id": "L451-G05-O2",
        "text": "我想上台跳舞，可是有點怕。",
        "spokenText": "我想上台跳舞可是有點怕",
        "correct": false,
        "audioSrc": "/assets/lessons/L451/audio/L451-G05-wrong-one.m4a"
      },
      {
        "id": "L451-G05-O3",
        "text": "我想上台唱歌，可是有點累。",
        "spokenText": "我想上台唱歌可是有點累",
        "correct": false,
        "audioSrc": "/assets/lessons/L451/audio/L451-G05-wrong-two.m4a"
      }
    ]
  }
]
```

Coverage: 台5/3、舞2/2、唱2/2、歌2/2、拍1/1、音1/1; PASS. Han counts 11,11,9,10,11. Full allowed set in request/draft. No previous-six or earlier coverage targets.

Final validation: lesson-local validate:production PASS; full baseline validate:production PASS; strict lesson-local assets audit PASS, zero warnings; curriculum:audit-state PASS (expected unmerged L451 directory notice only). Shared production curriculum/planner/ledger unchanged.

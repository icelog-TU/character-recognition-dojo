# L393「碼」Production package

Status: dependency-blocked-asset-complete.

## Boundary and approved exceptions
Teacher-approved exact five-sentence Production F handoff. R045/R046 are already in main. Production owns lesson-local files; Release owns integration. Teacher explicitly permits readable Arabic page numbers 1, 2, 3 on S01 and fictional queue ticket 128 on S03 only; no readable Chinese, brands or personal data. Numbers are not spokenText or Han coverage. S01: same document, three loose sheets, each upright page has its own unobscured bottom-right page number; not a book or workbook. S02: girl and father visit community-center counter; clerk requests their phone number and is the speaker 我; father answers, girl accompanies. No phone-help scene. S03 數字 and S04/G05 報數 pronounce 數 as ㄕㄨˋ; 碼 is ㄇㄚˇ.

Dependencies: L385, L388, L389, L390, L391, L392; provisional: 字 念 號 數 報 頁; allowed count 386.

Coverage: 碼4 / 頁2 / 報2 / 數2 / 號2 / 念1. L385 字 is an additional dependency, not a coverage target.

## Final approved sentence records
```json
[
  {
    "id": "L393-S01",
    "text": "頁碼在每一頁的右下角。",
    "spokenText": "頁碼在每一頁的右下角",
    "displayLines": [
      "頁碼在",
      "每一頁的",
      "右下角。"
    ],
    "focusChar": "碼",
    "imageNotes": "桌上攤放同一份文件的三張散頁，頁面全部正向朝向觀者，每張紙自己的右下角依序印有清楚的 1、2、3。三張紙可以略微錯開，但不能互相遮住任何頁碼。主角小女孩指向其中一張的右下角，爸爸在旁看。文件其他內容使用不可辨識筆跡；不要畫成書、跨頁、左頁內側頁碼或三份不同文件，也不要把三個數字集中放在整張圖片右下角。"
  },
  {
    "id": "L393-S02",
    "text": "請報電話號碼給我。",
    "spokenText": "請報電話號碼給我",
    "displayLines": [
      "請報電話號碼",
      "給我。"
    ],
    "focusChar": "碼",
    "imageNotes": "主角小女孩和爸爸到社區活動中心服務櫃台辦事，generic 櫃台人員面向爸爸與女孩，拿筆準備記錄聯絡資料，開口請他們報電話號碼。爸爸正準備回答，女孩站在身旁。說話者「我」是櫃台人員，不是主角女孩；不是女孩拿電話向爸爸求助的舊版情境。不顯示真實電話、可讀表單或螢幕個資。"
  },
  {
    "id": "L393-S03",
    "text": "這個號碼有幾個數字？",
    "spokenText": "這個號碼有幾個數字",
    "displayLines": [
      "這個號碼",
      "有幾個數字？"
    ],
    "focusChar": "碼",
    "zhuyinOverrides": {
      "7": "ㄕㄨˋ"
    },
    "imageNotes": "主角媽媽與小女孩在等候區看一張取號紙牌，上面只有清楚、正常方向的 128。女孩用手指逐一點數，抬頭詢問媽媽。這是虛構的三位取號號碼，不是真實電話、車號或學號；不要另外加答案「3」，也不要畫成三張分開的數字卡。"
  },
  {
    "id": "L393-S04",
    "text": "報數時，小光念得好大聲。",
    "spokenText": "報數時小光念得好大聲",
    "displayLines": [
      "報數時，",
      "小光念得",
      "好大聲。"
    ],
    "focusChar": "報",
    "zhuyinOverrides": {
      "1": "ㄕㄨˋ"
    },
    "imageNotes": "學校操場集合，小光站在隊伍中，挺直身體、張口清楚報數；旁邊同學安靜等候，老師看向他。不是生氣吼叫，也不是全體同時喊。小光使用 public/assets/reference/lesson-cast/xiaoguang.webp，保留圓眼鏡等固定特徵；不加文字音效或數字泡泡。"
  },
  {
    "id": "L393-S05",
    "text": "鞋子太小，要換大一碼。",
    "spokenText": "鞋子太小要換大一碼",
    "displayLines": [
      "鞋子太小，",
      "要換大一碼。"
    ],
    "focusChar": "碼",
    "imageNotes": "鞋店裡，主角小女孩坐著試鞋，鞋頭顯得太緊，她指著腳趾位置告訴媽媽。generic 店員拿來同款、稍大一點的鞋供比較，兩雙鞋的大小差異合理，不是換成成人鞋。不畫受傷或腳趾外露，也不需要尺寸標籤、品牌或可讀鞋盒文字。"
  }
]
```

## Stage 4 index self-check
L393-G01: 頁[0] 碼[1] 在[2] 每[3] 一[4] 頁[5] 的[6] 右[7] 下[8] 角[9]; target 碼[1]; PASS.
L393-G02: 請[0] 報[1] 電[2] 話[3] 號[4] 碼[5] 給[6] 我[7]; target 碼[5]; PASS.
L393-G03: 鞋[0] 子[1] 太[2] 小[3] 要[4] 換[5] 大[6] 一[7] 碼[8]; target 碼[8]; PASS.
L393-G04: 這[0] 個[1] 號[2] 碼[3] 有[4] 幾[5] 個[6] 數[7] 字[8]; target 數[7]; PASS.
L393-G05: 報[0] 數[1] 時[2] 小[3] 光[4] 念[5] 得[6] 好[7] 大[8] 聲[9]; target 報[0]; PASS.
G04 four single-Han cards and correctOrder mapping PASS. Every sentence used exactly once.

## Final Stage 4 plan
```json
[
  {
    "id": "L393-G01",
    "type": "find-character",
    "sentenceId": "L393-S01",
    "targetChar": "碼",
    "targetCharIndex": 1,
    "prompt": "請幫小兔子找出句子裡的碼。"
  },
  {
    "id": "L393-G02",
    "type": "teach-character",
    "sentenceId": "L393-S02",
    "targetChar": "碼",
    "targetCharIndex": 5,
    "prompt": "請你幫小兔子念紅框裡的字。",
    "teachAudio": {
      "prefixText": "請報電話號",
      "suffixText": "給我",
      "prefixSrc": "/assets/lessons/L393/audio/L393-G02-prefix.m4a",
      "suffixSrc": "/assets/lessons/L393/audio/L393-G02-suffix.m4a",
      "prefixAudio": {
        "src": "/assets/lessons/L393/audio/L393-G02-prefix.m4a",
        "durationMs": 1708,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 420
          },
          {
            "charIndex": 1,
            "startMs": 420,
            "endMs": 740
          },
          {
            "charIndex": 2,
            "startMs": 740,
            "endMs": 1020
          },
          {
            "charIndex": 3,
            "startMs": 1020,
            "endMs": 1240
          },
          {
            "charIndex": 4,
            "startMs": 1240,
            "endMs": 1500
          }
        ]
      },
      "suffixAudio": {
        "src": "/assets/lessons/L393/audio/L393-G02-suffix.m4a",
        "durationMs": 639,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 200
          },
          {
            "charIndex": 1,
            "startMs": 200,
            "endMs": 500
          }
        ]
      }
    }
  },
  {
    "id": "L393-G03",
    "type": "missing-character",
    "sentenceId": "L393-S05",
    "targetChar": "碼",
    "targetCharIndex": 8,
    "missingIndexes": [
      8
    ],
    "prompt": "請幫小兔子找回少掉的字。",
    "options": [
      {
        "id": "correct",
        "text": "碼",
        "correct": true
      },
      {
        "id": "wrong-one",
        "text": "號",
        "correct": false
      },
      {
        "id": "wrong-two",
        "text": "點",
        "correct": false
      }
    ]
  },
  {
    "id": "L393-G04",
    "type": "partial-order",
    "sentenceId": "L393-S03",
    "targetChar": "數",
    "targetCharIndex": 7,
    "missingIndexes": [
      5,
      6,
      7,
      8
    ],
    "prompt": "請幫小兔子把字放回去。",
    "options": [
      {
        "id": "card-zi",
        "text": "字",
        "correct": true,
        "correctOrder": 3
      },
      {
        "id": "card-ji",
        "text": "幾",
        "correct": true,
        "correctOrder": 0
      },
      {
        "id": "card-shu",
        "text": "數",
        "correct": true,
        "correctOrder": 2
      },
      {
        "id": "card-ge",
        "text": "個",
        "correct": true,
        "correctOrder": 1
      }
    ]
  },
  {
    "id": "L393-G05",
    "type": "choose-pronunciation",
    "sentenceId": "L393-S04",
    "targetChar": "報",
    "targetCharIndex": 0,
    "prompt": "請先聽朋友念，再找出念對的朋友。",
    "options": [
      {
        "id": "correct",
        "text": "報數時，小光念得好大聲。",
        "correct": true,
        "audioSrc": "/assets/lessons/L393/audio/L393-S04.m4a"
      },
      {
        "id": "wrong-one",
        "text": "報數時，小光念得好小聲。",
        "correct": false,
        "audioSrc": "/assets/lessons/L393/audio/L393-G05-wrong-one.m4a"
      },
      {
        "id": "wrong-two",
        "text": "報數時，小月念得好大聲。",
        "correct": false,
        "audioSrc": "/assets/lessons/L393/audio/L393-G05-wrong-two.m4a"
      }
    ]
  }
]
```

## Image prompts
### L393-S01
Use case: illustration-story. Square 1:1 warm Taiwan picture-book pencil-and-watercolor illustration. Highly match the full L058 style set and refined L115-S01/S02, L118-S02, L119-S01, L128-S03 examples: detailed clean environments, luminous warm natural light, textured fine pencil linework, softly shaded natural faces, expressive stable preschool proportions. No anime, flat cartoon, simplified round generic faces, thin washed-out watercolor, 3D or photorealism. Preserve protagonist-family identity from L154-S01, L162-S04 and L163-S02. Protagonist girl has short dark bob and pink clip, pink cardigan, navy skirt, pink shoes; father and mother match those family references. L058 is style only, never copy its unrelated people. Keep all meaning-bearing details within safe margins. No readable Chinese, letters, brand, personal information, labels or watermark. Only specifically approved Arabic numbers may appear. Scene: 桌上攤放同一份文件的三張散頁，頁面全部正向朝向觀者，每張紙自己的右下角依序印有清楚的 1、2、3。三張紙可以略微錯開，但不能互相遮住任何頁碼。主角小女孩指向其中一張的右下角，爸爸在旁看。文件其他內容使用不可辨識筆跡；不要畫成書、跨頁、左頁內側頁碼或三份不同文件，也不要把三個數字集中放在整張圖片右下角。

### L393-S02
Use case: illustration-story. Square 1:1 warm Taiwan picture-book pencil-and-watercolor illustration. Highly match the full L058 style set and refined L115-S01/S02, L118-S02, L119-S01, L128-S03 examples: detailed clean environments, luminous warm natural light, textured fine pencil linework, softly shaded natural faces, expressive stable preschool proportions. No anime, flat cartoon, simplified round generic faces, thin washed-out watercolor, 3D or photorealism. Preserve protagonist-family identity from L154-S01, L162-S04 and L163-S02. Protagonist girl has short dark bob and pink clip, pink cardigan, navy skirt, pink shoes; father and mother match those family references. L058 is style only, never copy its unrelated people. Keep all meaning-bearing details within safe margins. No readable Chinese, letters, brand, personal information, labels or watermark. Only specifically approved Arabic numbers may appear. Scene: 主角小女孩和爸爸到社區活動中心服務櫃台辦事，generic 櫃台人員面向爸爸與女孩，拿筆準備記錄聯絡資料，開口請他們報電話號碼。爸爸正準備回答，女孩站在身旁。說話者「我」是櫃台人員，不是主角女孩；不是女孩拿電話向爸爸求助的舊版情境。不顯示真實電話、可讀表單或螢幕個資。

### L393-S03
Use case: illustration-story. Square 1:1 warm Taiwan picture-book pencil-and-watercolor illustration. Highly match the full L058 style set and refined L115-S01/S02, L118-S02, L119-S01, L128-S03 examples: detailed clean environments, luminous warm natural light, textured fine pencil linework, softly shaded natural faces, expressive stable preschool proportions. No anime, flat cartoon, simplified round generic faces, thin washed-out watercolor, 3D or photorealism. Preserve protagonist-family identity from L154-S01, L162-S04 and L163-S02. Protagonist girl has short dark bob and pink clip, pink cardigan, navy skirt, pink shoes; father and mother match those family references. L058 is style only, never copy its unrelated people. Keep all meaning-bearing details within safe margins. No readable Chinese, letters, brand, personal information, labels or watermark. Only specifically approved Arabic numbers may appear. Scene: 主角媽媽與小女孩在等候區看一張取號紙牌，上面只有清楚、正常方向的 128。女孩用手指逐一點數，抬頭詢問媽媽。這是虛構的三位取號號碼，不是真實電話、車號或學號；不要另外加答案「3」，也不要畫成三張分開的數字卡。

### L393-S04
Use case: illustration-story. Square 1:1 warm Taiwan picture-book pencil-and-watercolor illustration. Highly match the full L058 style set and refined L115-S01/S02, L118-S02, L119-S01, L128-S03 examples: detailed clean environments, luminous warm natural light, textured fine pencil linework, softly shaded natural faces, expressive stable preschool proportions. No anime, flat cartoon, simplified round generic faces, thin washed-out watercolor, 3D or photorealism. Preserve protagonist-family identity from L154-S01, L162-S04 and L163-S02. Protagonist girl has short dark bob and pink clip, pink cardigan, navy skirt, pink shoes; father and mother match those family references. L058 is style only, never copy its unrelated people. Keep all meaning-bearing details within safe margins. No readable Chinese, letters, brand, personal information, labels or watermark. Only specifically approved Arabic numbers may appear. Scene: 學校操場集合，小光站在隊伍中，挺直身體、張口清楚報數；旁邊同學安靜等候，老師看向他。不是生氣吼叫，也不是全體同時喊。小光使用 public/assets/reference/lesson-cast/xiaoguang.webp，保留圓眼鏡等固定特徵；不加文字音效或數字泡泡。

### L393-S05
Use case: illustration-story. Square 1:1 warm Taiwan picture-book pencil-and-watercolor illustration. Highly match the full L058 style set and refined L115-S01/S02, L118-S02, L119-S01, L128-S03 examples: detailed clean environments, luminous warm natural light, textured fine pencil linework, softly shaded natural faces, expressive stable preschool proportions. No anime, flat cartoon, simplified round generic faces, thin washed-out watercolor, 3D or photorealism. Preserve protagonist-family identity from L154-S01, L162-S04 and L163-S02. Protagonist girl has short dark bob and pink clip, pink cardigan, navy skirt, pink shoes; father and mother match those family references. L058 is style only, never copy its unrelated people. Keep all meaning-bearing details within safe margins. No readable Chinese, letters, brand, personal information, labels or watermark. Only specifically approved Arabic numbers may appear. Scene: 鞋店裡，主角小女孩坐著試鞋，鞋頭顯得太緊，她指著腳趾位置告訴媽媽。generic 店員拿來同款、稍大一點的鞋供比較，兩雙鞋的大小差異合理，不是換成成人鞋。不畫受傷或腳趾外露，也不需要尺寸標籤、品牌或可讀鞋盒文字。


## Final QA and method
Repo ai:audio with lesson-specific pronunciation instructions; assets:audio with measured trailing-silence-only end caps retaining 120ms after -45dB silence start; assets:align:ai with Traditional Chinese vocabulary prompt and simplified-equivalent normalization. Temporary tool-script and production JSON changes restored. Final audio re-transcribed and decoded after processing. No spoken syllables cut/spliced. Full generated wrong options retained.

Browser QA: npm run dev -- --host 127.0.0.1 --port 5193: vite executable missing in assigned worktree; cua.getBrowser localhost initialization timed out after 30 seconds; kernel reset. Phone-width playback/highlight/recording interaction was not executed. Production SOP browser automation fallback applies after non-browser technical gates. Teacher subjective review is post-merge; no pre-merge approval requested.

L393-S01 style-lock PASS, cast PASS; 1024x1024 WebP 139386 bytes.
L393-S02 style-lock PASS, cast PASS; 1024x1024 WebP 130284 bytes.
L393-S03 style-lock PASS, cast PASS; 1024x1024 WebP 151298 bytes.
L393-S04 style-lock PASS, cast PASS; 1024x1024 WebP 165618 bytes.
L393-S05 style-lock PASS, cast PASS; 1024x1024 WebP 150868 bytes.

S01 first draft pointed to an illustration instead of the page number; replaced. S05 first draft clerk resembled father and gesture needed clarification; replaced. Rejected drafts were not committed.

S01 PASS: same document three loose upright sheets, each bottom-right page number 1/2/3 visible and unoccluded; girl points toward middle-page number.
S03 PASS: one fictional queue ticket reads 128, upright, complete, no answer 3 or extra number cards.

G05 mean-volume spread 0.9 dB. Asset total 1072523 bytes. Technical checks: All 10 final audio files: ffmpeg decode, AAC mono 44100 Hz, audible volume, exact contextual AI transcript (唸 normalized to 念 only). PASS
Standalone 碼 charAudio duration and volume. Generated from single 碼; no sentence extraction. PASS
Final approved sentence synchronization; full allowed-character sweep; Han counts 10/8/9/10/9; displayLines <=6 visible; timings bounds/order/spans/tails. PASS
Stage 4 single-Han target/index/card mappings, 3 distinct G03 choices, dedicated G02 fragments, full G05 wrong sentences and volume spread 0.9 dB. PASS
Five final square 1024px WebP images and total asset bytes 1072523. PASS

Final G02 aligned fragment metadata is in the draft and technical-audit.json.
Release owns preceding lessons, R047/R048, production JSON/planner/ledger integration and final verify. R045/R046 are already in main.
verify skipped: dependency-blocked, shared state left for Release.

Validation: npm run validate:production PASS on baseline; same production asset validator PASS on an isolated temporary L393 draft fixture, restored immediately. Lesson-local technical audit PASS.

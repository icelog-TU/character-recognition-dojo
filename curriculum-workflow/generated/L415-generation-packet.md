# L415 Generation Packet

packageStatus: asset-complete-package

Teacher accepted all six original clips on 2026-09-16; see L415-teacher-audio-review.json for hashes. No assets or timings changed. Main 182ace5f is through L414; dependencies satisfied. See L415-rescue-qa.md for Stage4 verification and limitations.

Production C; codex/l415-complete-package. Source main 18c9df4a4f1d4c9966b65d8b4371693a714e3d3c, formal L408. Single character 解 ㄐㄧㄝˇ.

dependsOnLessons: L410,L411,L412,L413,L414. provisionalLearnedChars: 試定成功決. Release playable order includes L409, though 辦 is not used. R049/R050 after405 already formal.

## Approved Sentences

```json
[
  {
    "id": "L415-S01",
    "text": "試著解開，這次一定能成功。",
    "spokenText": "試著解開這次一定能成功",
    "displayLines": [
      "試著解開，",
      "這次一定",
      "能成功。"
    ],
    "focusChar": "解",
    "imageNotes": "家中桌邊，主角小女孩拿著尚未解好的魔術方塊，主角媽媽在旁鼓勵。女孩雙手握住方塊，正準備轉動其中一層，神情專注；媽媽微笑看著她。方塊各面的顏色仍混合，呈現繼續嘗試，不提前畫成全部完成。使用正常方塊結構，不加解法文字或箭頭，不沿用解鞋帶舊畫面。",
    "approved": true,
    "zhuyinOverrides": {
      "1": "˙ㄓㄜ"
    }
  },
  {
    "id": "L415-S02",
    "text": "我決定用功念書。",
    "spokenText": "我決定用功念書",
    "displayLines": [
      "我決定",
      "用功念書。"
    ],
    "focusChar": "決",
    "imageNotes": "家中書桌前，主角小女孩主動坐好，打開課本準備認真學習，主角媽媽在旁聽她說話。女孩一手放在書頁上，抬頭看媽媽，表情認真；旁邊的玩具已整齊收進盒子。呈現女孩自己的決定，不是被責罵後勉強坐下。課本朝向女孩，不需要可讀文字。",
    "approved": true
  },
  {
    "id": "L415-S03",
    "text": "大家都想坐窗邊，怎麼解決？",
    "spokenText": "大家都想坐窗邊怎麼解決",
    "displayLines": [
      "大家都想",
      "坐窗邊，",
      "怎麼解決？"
    ],
    "focusChar": "解",
    "imageNotes": "停妥的遊覽車裡，主角小女孩、小月和小光站在同一排座位旁，都看著那個窗邊座位。老師站在走道上，聽孩子表達想法，準備協調。窗邊與走道座位的位置清楚，還沒有人坐下，也不畫推擠爭吵。車輛尚未行駛；小月、小光使用各自固定 reference。",
    "approved": true
  },
  {
    "id": "L415-S04",
    "text": "我不了解你為什麼生氣。",
    "spokenText": "我不了解你為什麼生氣",
    "displayLines": [
      "我不了解",
      "你為什麼",
      "生氣。"
    ],
    "focusChar": "解",
    "imageNotes": "學校下課時，主角小女孩走近小月，關心地開口詢問。小月坐在長椅一端，眉頭皺起、雙手抱在胸前，轉頭看向女孩；女孩站在旁邊，神情困惑而溫和。「我」是主角女孩，「你」是小月，不使用固定「你」小男孩。只呈現不知道原因、正在詢問，不擅自添加弄壞東西或欺負人的情節。",
    "approved": true,
    "zhuyinOverrides": {
      "2": "ㄌㄧㄠˇ"
    }
  },
  {
    "id": "L415-S05",
    "text": "小雞長成公雞，叫聲好大。",
    "spokenText": "小雞長成公雞叫聲好大",
    "displayLines": [
      "小雞長成",
      "公雞，",
      "叫聲好大。"
    ],
    "focusChar": "成",
    "imageNotes": "農家院子裡，一隻成年公雞伸長脖子、張嘴啼叫，主角小女孩和爸爸在旁觀看。女孩有些驚訝，雙手輕輕靠近耳朵。旁邊用小型回憶泡泡，呈現女孩以前照顧同一隻小雞，連結以前的小雞與現在的公雞。不要把小雞和成年公雞同時放在現實場景中，誤導成不同的雞；不使用叫聲文字或成長箭頭。",
    "approved": true,
    "zhuyinOverrides": {
      "2": "ㄓㄤˇ"
    }
  }
]
```

## Stage 4

```json
[
  {
    "id": "L415-G01",
    "type": "find-character",
    "sentenceId": "L415-S01",
    "targetChar": "解",
    "targetCharIndex": 2
  },
  {
    "id": "L415-G02",
    "type": "teach-character",
    "sentenceId": "L415-S04",
    "targetChar": "解",
    "targetCharIndex": 3,
    "teachAudio": {
      "prefixText": "我不了",
      "suffixText": "你為什麼生氣",
      "prefixSrc": "/assets/lessons/L415/audio/L415-G02-prefix.m4a",
      "suffixSrc": "/assets/lessons/L415/audio/L415-G02-suffix.m4a"
    }
  },
  {
    "id": "L415-G03",
    "type": "missing-character",
    "sentenceId": "L415-S03",
    "targetChar": "解",
    "targetCharIndex": 9,
    "missingIndexes": [
      9
    ],
    "options": [
      {
        "id": "correct",
        "text": "解",
        "correct": true
      },
      {
        "id": "wrong-one",
        "text": "開",
        "correct": false
      },
      {
        "id": "wrong-two",
        "text": "看",
        "correct": false
      }
    ]
  },
  {
    "id": "L415-G04",
    "type": "partial-order",
    "sentenceId": "L415-S02",
    "targetChar": "決",
    "targetCharIndex": 1,
    "missingIndexes": [
      3,
      4,
      5,
      6
    ],
    "options": [
      {
        "id": "card-nian",
        "text": "念",
        "correct": true,
        "correctOrder": 2
      },
      {
        "id": "card-yong",
        "text": "用",
        "correct": true,
        "correctOrder": 0
      },
      {
        "id": "card-shu",
        "text": "書",
        "correct": true,
        "correctOrder": 3
      },
      {
        "id": "card-gong",
        "text": "功",
        "correct": true,
        "correctOrder": 1
      }
    ]
  },
  {
    "id": "L415-G05",
    "type": "choose-pronunciation",
    "sentenceId": "L415-S05",
    "targetChar": "成",
    "targetCharIndex": 3,
    "options": [
      {
        "id": "correct",
        "text": "小雞長成公雞，叫聲好大。",
        "correct": true,
        "audioSrc": "/assets/lessons/L415/audio/L415-S05.m4a"
      },
      {
        "id": "wrong-one",
        "text": "小雞長成公雞，叫聲好小。",
        "correct": false,
        "audioSrc": "/assets/lessons/L415/audio/L415-G05-wrong-one.m4a"
      },
      {
        "id": "wrong-two",
        "text": "小雞長成公雞，叫聲好怪。",
        "correct": false,
        "audioSrc": "/assets/lessons/L415/audio/L415-G05-wrong-two.m4a"
      }
    ]
  }
]
```

## Constraints
Browser QA: source Stage1/Stage3 evidence retained; Rescue completed phone Stage4 playback/answers, synthetic microphone recording/replay, and phone/tablet G03 layout and reward navigation checks. See L415-rescue-qa.md for exact scope. Physical microphone QA is not claimed.

Locked approved handoff. S04 了 index2 ㄌㄧㄠˇ; G02 我不了 ends liao3, never le or extra 解. S05 長 index2 ㄓㄤˇ in all G05 options; S01 著 index1 neutral ˙ㄓㄜ. Named Xiaoyue/Xiaoguang references required. No readable image text/numeral exceptions. S05 chick appears only in memory bubble. Release order includes L409 but 辦 is not used.

418 allowed characters, coverage 解3 決2 功2 成2 定2 試1. Canonical five-game order; each sentence once; G03 three single-Han choices; G04 用功念書 single-Han cards. Full L058 style-only anchors and refined preferred examples, family anchors, Xiaoyue/Xiaoguang references. Dedicated standalone/fragment/wrong-choice TTS, not spliced.

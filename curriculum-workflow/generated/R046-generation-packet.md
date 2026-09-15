# R046 Review Production Packet

Status: partial-package. Production C owns R045/R046 together. Source: f776fc4065de043c5b396b73068890d630cb3f46. Ceiling L375; allowed 379 chars. No newChars, zhuyin or charAudio.

Final origin/main recheck: 7fcef325b37f13fc68fe950bffd7fea8e9db6108, formal L375 / latest review R044. Pair-only validate:production and assets:audit --strict FAIL solely on missing R046-G02-suffix.m4a; zero format warnings. Other audio QA (end gaps, short timing, listening) remains pending and is not implied by format checks. Final shared production JSON restored byte-for-byte. Release owns ordered integration and full verify. Shared alignment change adds only simplified/traditional equivalents: 谢/謝, 帮/幫, 动/動, 亲/親, 图/圖, 条/條, 经/經, 欢/歡, 听/聽, 长/長. Temporary TTS tone instruction removed; no charAudio produced.

## Approved Handoff

【Production C｜R045＋R046 複習課成對 Handoff】

起手資訊
Repo：https://github.com/icelog-TU/character-recognition-dojo
指定：Production C，同一個 slot 負責兩課，不占用 Production D。
Worktree：C:\Users\User\Documents\Codex\2026-08-03\a000-sop\worktrees\parallel-c
Package branch：codex/r045-r046-complete-package
收到後請 claim R045、R046，各登記一列 registry，於同一 branch 製作完整 pair。

邊界與依賴
已 fetch；origin/main = 6e07e9b5 Fix missing-character distractors in reviews R041-R044。
直接讀取 production JSON：正式 L001-L375，最新字「經」；最新 review 為 R044。
R045：複習四十五；reviewNumber=45。
R046：複習四十六；reviewNumber=46。
兩課皆為 review module：afterLessonOrder=375；targetLessonRange={"startOrder":346,"endOrder":375}；requiredRounds=5。
allowedChars 鎖定 L001-L375 的完整379字；provisionalLearnedChars=[]。不得使用 L376 之後的字。
兩課不占 L###、不新增 newChars／zhuyin／charAudio；呈現兩階段複習流程。
Playable order：L375 → R045 → R046 → L376。兩課可一起製作，成對提交。
Editor 本地 audit-state 雖 PASS，但 checkout 的 L333 是舊狀態，不能作邊界。

五句定稿與配圖｜R045
R045-S01
text：餐廳客滿，請在門口排好。
spokenText：餐廳客滿請在門口排好
displayLines：["餐廳客滿，","請在門口","排好。"]
focusChar：餐；Han=10；coverage：餐、廳、客、請、排各1。
imageNotes：餐廳入口，generic 工作人員用手勢請候位客人排好；主角一家四口排在門外，透過入口可見裡面座位都有人。排隊不堵住出入口，不畫成已有空桌卻不讓人進去。

R045-S02
text：公車上有位子，讓你坐吧。
spokenText：公車上有位子讓你坐吧
displayLines：["公車上","有位子，","讓你坐吧。"]
focusChar：讓；Han=10；coverage：公、位、讓、吧各1。
imageNotes：停妥的公車內，主角小女孩指著身旁空位，邀請固定「你」小男孩先坐；主角媽媽在旁照看。男孩尚未坐下，畫面是邀請，不是搶位。固定「你」不是哥哥或小光。

R045-S03
text：菜園裡的公雞正在吃菜。
spokenText：菜園裡的公雞正在吃菜
displayLines：["菜園裡的公雞","正在吃菜。"]
focusChar：雞；Han=10；coverage：園、公、雞、正各1。
imageNotes：菜園內，一隻有明顯雞冠與尾羽的公雞，正低頭啄食仍長在土裡的葉菜；周圍可見菜畦。不是吃熟菜、不是母雞，也不要額外排出一整排雞。

R045-S04
text：書裡的怪物長得真奇怪。
spokenText：書裡的怪物長得真奇怪
displayLines：["書裡的怪物","長得真奇怪。"]
focusChar：怪；Han=10；coverage：怪2、物1、奇1。
imageNotes：主角小女孩閱讀打開的繪本，書頁上是一個長著三隻眼、長耳朵與短腳的滑稽怪物，女孩好奇地看。怪物只存在書裡，不進入現實房間；造型新奇但不恐怖。

R045-S05
text：收到想要的小車，我又驚又喜。
spokenText：收到想要的小車我又驚又喜
displayLines：["收到想要的","小車，","我又驚又喜。"]
focusChar：驚；Han=12；coverage：驚、喜各1。
imageNotes：家中，主角小女孩剛打開爸爸準備的盒子，裡面是她一直想要的玩具小車。女孩睜大眼睛、露出開心笑容，爸爸在旁微笑；盒蓋已打開，小車清楚可見。不是收到真的汽車，也不要改回小狗跳出的畫面。

五句定稿與配圖｜R046
R046-S01
text：我喜歡說笑話，但他不愛聽。
spokenText：我喜歡說笑話但他不愛聽
displayLines：["我喜歡","說笑話，","但他不愛聽。"]
focusChar：歡；Han=11；coverage：喜、歡、笑、但各1。
imageNotes：校園休息時間，主角小女孩開心地說笑話，固定「他」小男孩抱著球，露出沒興趣、想去玩的神情。不是聽不見、被嚇哭或遭到霸凌；「他」使用既有角色參考，不改成小光或哥哥。

R046-S02
text：謝謝你幫忙，我好感動。
spokenText：謝謝你幫忙我好感動
displayLines：["謝謝你幫忙，","我好感動。"]
focusChar：感；Han=9；coverage：謝2、感1。
imageNotes：教室裡，主角小女孩的筆盒先前掉落，固定「你」小男孩已幫她撿回散落的筆，正把整理好的筆盒交還。女孩把手放在胸前、露出感謝的笑容。以具體幫忙建立感動原因，不只畫兩人空泛地微笑。

R046-S03
text：小月經常熱情地請我吃點心。
spokenText：小月經常熱情地請我吃點心
displayLines：["小月經常","熱情地請我","吃點心。"]
focusChar：情；Han=12；coverage：經、情、請各1。
imageNotes：小月家中桌邊，小月笑著把一盤小點心往主角小女孩面前推，主動邀請她吃；女孩是來做客的朋友。只畫一次自然招待場景，不用分格或重複人物表現「經常」。小月使用 public/assets/reference/lesson-cast/xiaoyue.webp。

R046-S04
text：這條路通往海邊嗎？
spokenText：這條路通往海邊嗎
displayLines：["這條路","通往海邊嗎？"]
focusChar：通；Han=8；coverage：通、往、嗎各1。
imageNotes：戶外岔路旁，主角小女孩指向繞過樹叢的小路，轉頭向爸爸詢問。路的終點被樹叢遮住，不能直接看見海灘而讓問句失去必要；可用海岸植物與遠處天空交代沿海環境，不使用文字路牌。

R046-S05
text：我把親手畫的圖交給朋友。
spokenText：我把親手畫的圖交給朋友
displayLines：["我把","親手畫的圖","交給朋友。"]
focusChar：交；Han=11；coverage：親、交、朋、友各1。
imageNotes：教室桌邊，主角小女孩把自己畫的花草圖交給小月，紙張由雙方短暫共同拿著，清楚呈現交付動作；旁邊留有女孩使用的畫筆。不是交換兩張圖。小月使用 public/assets/reference/lesson-cast/xiaoyue.webp。

Coverage
requiredCoverageChars 兩課都填完整清單：
["請","嗎","客","讓","廳","餐","位","正","排","雞","公","園","物","怪","奇","驚","喜","歡","笑","但","吧","謝","感","情","朋","友","親","交","通","往","經"]
Pair counts：請2、嗎1、客1、讓1、廳1、餐1、位1、正1、排1、雞1、公2、園1、物1、怪2、奇1、驚1、喜2、歡1、笑1、但1、吧1、謝2、感1、情1、朋1、友1、親1、交1、通1、往1、經1。
31字全部覆蓋；「朋友」word count=1，朋1、友1：PASS。
十句及遊戲選項均在 L375 allowed ceiling；spokenText、focusChar、Han 4–12、displayLines join、每行≤6可見字元：PASS。

句子遊戲資料
沿用 sentenceGames schema；以下 G01-G05 是資料 ID，不把複習 UI 標成 Stage 4。
所有 targetCharIndex／missingIndexes 均為零起算 Han-only；每課五句各使用一次。
gameId | type | sentenceId | targetChar | targetCharIndex | missingIndexes | 檢查
R045-G01 | find-character | R045-S01 | 餐 | 0 | — | PASS
R045-G02 | teach-character | R045-S02 | 讓 | 6 | — | PASS
R045-G03 | missing-character | R045-S03 | 雞 | 5 | [5] | PASS
R045-G04 | partial-order | R045-S04 | 怪 | 3 | [7,8,9] | PASS
R045-G05 | choose-pronunciation | R045-S05 | 驚 | 9 | — | PASS
R046-G01 | find-character | R046-S01 | 歡 | 2 | — | PASS
R046-G02 | teach-character | R046-S02 | 感 | 7 | — | PASS
R046-G03 | missing-character | R046-S03 | 情 | 5 | [5] | PASS
R046-G04 | partial-order | R046-S04 | 通 | 3 | [3,4,5,6] | PASS
R046-G05 | choose-pronunciation | R046-S05 | 交 | 7 | — | PASS

G02 專屬片段
R045：prefixText="公車上有位子"；suffixText="你坐吧"。
prefixSrc=/assets/reviews/R045/audio/R045-G02-prefix.m4a
suffixSrc=/assets/reviews/R045/audio/R045-G02-suffix.m4a
R046：prefixText="謝謝你幫忙我好"；suffixText="動"。
prefixSrc=/assets/reviews/R046/audio/R046-G02-prefix.m4a
suffixSrc=/assets/reviews/R046/audio/R046-G02-suffix.m4a

G03 options
R045：
[{"id":"correct","text":"雞","correct":true},{"id":"wrong-one","text":"鳥","correct":false},{"id":"wrong-two","text":"魚","correct":false}]
R046：
[{"id":"correct","text":"情","correct":true},{"id":"wrong-one","text":"心","correct":false},{"id":"wrong-two","text":"愛","correct":false}]
兩題皆為三個相異單字選項、唯一正解，不得漏掉干擾選項。

G04 options
R045 missingIndexes=[7,8,9]，依序為「真／奇／怪」：
[{"id":"card-guai","text":"怪","correct":true,"correctOrder":2},{"id":"card-zhen","text":"真","correct":true,"correctOrder":0},{"id":"card-qi","text":"奇","correct":true,"correctOrder":1}]
R046 missingIndexes=[3,4,5,6]，依序為「通／往／海／邊」：
[{"id":"card-hai","text":"海","correct":true,"correctOrder":2},{"id":"card-tong","text":"通","correct":true,"correctOrder":0},{"id":"card-bian","text":"邊","correct":true,"correctOrder":3},{"id":"card-wang","text":"往","correct":true,"correctOrder":1}]
兩題 missingIndexes 與單字卡 correctOrder 映射皆已機械檢查 PASS。

G05 options
R045 correct：收到想要的小車，我又驚又喜。
audioSrc=/assets/reviews/R045/audio/R045-S05.m4a
R045 wrong-one：收到想要的小船，我又驚又喜。
audioSrc=/assets/reviews/R045/audio/R045-G05-wrong-one.m4a
R045 wrong-two：收到想要的小車，我又驚又怕。
audioSrc=/assets/reviews/R045/audio/R045-G05-wrong-two.m4a
R046 correct：我把親手畫的圖交給朋友。
audioSrc=/assets/reviews/R046/audio/R046-S05.m4a
R046 wrong-one：我把親手畫的書交給朋友。
audioSrc=/assets/reviews/R046/audio/R046-G05-wrong-one.m4a
R046 wrong-two：我把親手畫的圖交給老師。
audioSrc=/assets/reviews/R046/audio/R046-G05-wrong-two.m4a
各組 options id 使用 correct／wrong-one／wrong-two；correct 欄位依序 true／false／false。
R045 三句均12 Han；R046 三句均11 Han；錯句各替換1–2字，allowed PASS。完整錯句文本已鎖定。

本次特殊注意
1. 這是補齊 L375 milestone 的正式 review pair，不是 L376/L377，也不能使用已核准但晚於 L375 的 provisional 字。
2. R045-S05 已由老師改為收到想要的玩具小車；不要沿用小狗突然跳出的舊句或舊圖。
3. R046-G02 suffix 只有「動」一字，需特別檢查短音檔尾音與音量，不能裁掉或漏播。
4. 小月必須使用固定 reference；「你」「他」、哥哥、小光各為不同角色。L058 僅作畫風參考。
5. 兩課共用同一個 pair coverage checklist，但各自保有 request、packet、draft、五句資產與遊戲資料；資產路徑為 public/assets/reviews/R045/、R046/。

交付要求
依 ROLE_PRODUCTION_SOP 製作兩課完整 package；同一 branch commit/push，回報完整 SHA、兩課各自完成狀態與未完成項。

## Locked Allowed Set

一二三人個大的小手我有山上下你水在高很家和隻鳥孩指看女飛男門前後也是不到走他沒裡兩狗都爸媽愛書可會這吃做好樣要更邊多少比來起去坐站開左著拿包花朵了畫出學路誰校問找同帶筆借那本給紙心放把桌子盒掉壞眼用鏡鼻臉紅圓太難得過分幾點玩打球棒頭帽草地面外空天雨雲黑白棋鞋穿戴衣脫氣套熱冷喝飯菜老卻麼什為以怎所房間時還燈關窗車等再風吹樹動葉綠滿掃擦先洗又髒亂回就快事跑馬停叫聲聽見說師話課像想真力能火發電生明光亮陽月影長星行道流河從進早晚海船魚游泳池身濕乾服褲換改錯知認新舊半只剩夠錢買貴賣店場市夜具工作忙幫急腳步跳床搬重沙張椅累死睡倒病假才剛裝養休息久體神精變差緊卡住蓋橋座木積堆洞破口傷皮痛受忍耐敢當然怕哭被嚇罵對爬蟲條泥土種澆照顧忘每次記完收彩色粉哪些最西東方圖向線直轉右角落因原別特處理整齊全今們年跟常請嗎客讓廳餐位正排雞公園物怪奇驚喜歡笑但吧謝感情朋友親交通往經

## Pair Coverage

{"請":2,"嗎":1,"客":1,"讓":1,"廳":1,"餐":1,"位":1,"正":1,"排":1,"雞":1,"公":2,"園":1,"物":1,"怪":2,"奇":1,"驚":1,"喜":2,"歡":1,"笑":1,"但":1,"吧":1,"謝":2,"感":1,"情":1,"朋":1,"友":1,"親":1,"交":1,"通":1,"往":1,"經":1}

## Implemented Draft

```json
{
  "id": "R046",
  "reviewNumber": 46,
  "title": "複習四十六",
  "afterLessonOrder": 375,
  "targetLessonRange": {
    "startOrder": 346,
    "endOrder": 375
  },
  "requiredCoverageChars": [
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
    "奇",
    "驚",
    "喜",
    "歡",
    "笑",
    "但",
    "吧",
    "謝",
    "感",
    "情",
    "朋",
    "友",
    "親",
    "交",
    "通",
    "往",
    "經"
  ],
  "requiredRounds": 5,
  "dependsOnLessons": [],
  "provisionalLearnedChars": [],
  "packageStatus": "partial-package",
  "sourceBoundary": "f776fc4065de043c5b396b73068890d630cb3f46",
  "teacherNotes": "Review pair R045/R046 after L375 before L376. Allowed ceiling L375. No introduced characters, zhuyin or charAudio. Two-stage review UI. G03 exactly three single-Han choices. Teacher subjective review post-main. Production progress only: final images inspected; audio tail/timing and phone/tablet playback/recording/reward QA pending. R046 suffix 動 remains missing after rejected transcription.",
  "sentences": [
    {
      "id": "R046-S01",
      "text": "我喜歡說笑話，但他不愛聽。",
      "spokenText": "我喜歡說笑話但他不愛聽",
      "displayLines": [
        "我喜歡",
        "說笑話，",
        "但他不愛聽。"
      ],
      "focusChar": "歡",
      "imageNotes": "校園休息時間，主角小女孩開心地說笑話，固定「他」小男孩抱著球，露出沒興趣、想去玩的神情。不是聽不見、被嚇哭或遭到霸凌；「他」使用既有角色參考，不改成小光或哥哥。",
      "imagePrompt": "Square 1:1 detailed warm pencil-and-watercolor picture book; full L058 set style-only, refined L115/L118/L119/L128 proportions, L154/L162/L163 fixed family identities. No text, letters, numbers, logos, labels, symbols, arrows or watermarks. 校園休息時間，主角小女孩開心地說笑話，固定「他」小男孩抱著球，露出沒興趣、想去玩的神情。不是聽不見、被嚇哭或遭到霸凌；「他」使用既有角色參考，不改成小光或哥哥。",
      "imageSrc": "/assets/reviews/R046/images/R046-S01.webp",
      "audio": {
        "src": "/assets/reviews/R046/audio/R046-S01.m4a",
        "durationMs": 5592,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 500
          },
          {
            "charIndex": 1,
            "startMs": 500,
            "endMs": 980
          },
          {
            "charIndex": 2,
            "startMs": 980,
            "endMs": 1460
          },
          {
            "charIndex": 3,
            "startMs": 1460,
            "endMs": 1920
          },
          {
            "charIndex": 4,
            "startMs": 1920,
            "endMs": 2260
          },
          {
            "charIndex": 5,
            "startMs": 2260,
            "endMs": 2520
          },
          {
            "charIndex": 6,
            "startMs": 3320,
            "endMs": 3480
          },
          {
            "charIndex": 7,
            "startMs": 3480,
            "endMs": 3760
          },
          {
            "charIndex": 8,
            "startMs": 3760,
            "endMs": 4100
          },
          {
            "charIndex": 9,
            "startMs": 4100,
            "endMs": 4300
          },
          {
            "charIndex": 10,
            "startMs": 4300,
            "endMs": 4540
          }
        ]
      },
      "approved": true
    },
    {
      "id": "R046-S02",
      "text": "謝謝你幫忙，我好感動。",
      "spokenText": "謝謝你幫忙我好感動",
      "displayLines": [
        "謝謝你幫忙，",
        "我好感動。"
      ],
      "focusChar": "感",
      "imageNotes": "教室裡，主角小女孩的筆盒先前掉落，固定「你」小男孩已幫她撿回散落的筆，正把整理好的筆盒交還。女孩把手放在胸前、露出感謝的笑容。以具體幫忙建立感動原因，不只畫兩人空泛地微笑。",
      "imagePrompt": "Square 1:1 detailed warm pencil-and-watercolor picture book; full L058 set style-only, refined L115/L118/L119/L128 proportions, L154/L162/L163 fixed family identities. No text, letters, numbers, logos, labels, symbols, arrows or watermarks. 教室裡，主角小女孩的筆盒先前掉落，固定「你」小男孩已幫她撿回散落的筆，正把整理好的筆盒交還。女孩把手放在胸前、露出感謝的笑容。以具體幫忙建立感動原因，不只畫兩人空泛地微笑。",
      "imageSrc": "/assets/reviews/R046/images/R046-S02.webp",
      "audio": {
        "src": "/assets/reviews/R046/audio/R046-S02.m4a",
        "durationMs": 3979,
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
            "endMs": 940
          },
          {
            "charIndex": 3,
            "startMs": 940,
            "endMs": 1180
          },
          {
            "charIndex": 4,
            "startMs": 1180,
            "endMs": 1480
          },
          {
            "charIndex": 5,
            "startMs": 1580,
            "endMs": 1840
          },
          {
            "charIndex": 6,
            "startMs": 1840,
            "endMs": 2160
          },
          {
            "charIndex": 7,
            "startMs": 2160,
            "endMs": 2420
          },
          {
            "charIndex": 8,
            "startMs": 2420,
            "endMs": 2600
          }
        ]
      },
      "approved": true
    },
    {
      "id": "R046-S03",
      "text": "小月經常熱情地請我吃點心。",
      "spokenText": "小月經常熱情地請我吃點心",
      "displayLines": [
        "小月經常",
        "熱情地請我",
        "吃點心。"
      ],
      "focusChar": "情",
      "imageNotes": "小月家中桌邊，小月笑著把一盤小點心往主角小女孩面前推，主動邀請她吃；女孩是來做客的朋友。只畫一次自然招待場景，不用分格或重複人物表現「經常」。小月使用 public/assets/reference/lesson-cast/xiaoyue.webp。",
      "imagePrompt": "Square 1:1 detailed warm pencil-and-watercolor picture book; full L058 set style-only, refined L115/L118/L119/L128 proportions, L154/L162/L163 fixed family identities. No text, letters, numbers, logos, labels, symbols, arrows or watermarks. 小月家中桌邊，小月笑著把一盤小點心往主角小女孩面前推，主動邀請她吃；女孩是來做客的朋友。只畫一次自然招待場景，不用分格或重複人物表現「經常」。小月使用 public/assets/reference/lesson-cast/xiaoyue.webp。",
      "imageSrc": "/assets/reviews/R046/images/R046-S03.webp",
      "audio": {
        "src": "/assets/reviews/R046/audio/R046-S03.m4a",
        "durationMs": 4906,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 600
          },
          {
            "charIndex": 1,
            "startMs": 600,
            "endMs": 820
          },
          {
            "charIndex": 2,
            "startMs": 820,
            "endMs": 1240
          },
          {
            "charIndex": 3,
            "startMs": 1240,
            "endMs": 1600
          },
          {
            "charIndex": 4,
            "startMs": 1600,
            "endMs": 1880
          },
          {
            "charIndex": 5,
            "startMs": 1880,
            "endMs": 2120
          },
          {
            "charIndex": 6,
            "startMs": 2120,
            "endMs": 2700
          },
          {
            "charIndex": 7,
            "startMs": 2700,
            "endMs": 2920
          },
          {
            "charIndex": 8,
            "startMs": 2920,
            "endMs": 3240
          },
          {
            "charIndex": 9,
            "startMs": 3240,
            "endMs": 3580
          },
          {
            "charIndex": 10,
            "startMs": 3580,
            "endMs": 3920
          },
          {
            "charIndex": 11,
            "startMs": 3920,
            "endMs": 4140
          }
        ]
      },
      "approved": true
    },
    {
      "id": "R046-S04",
      "text": "這條路通往海邊嗎？",
      "spokenText": "這條路通往海邊嗎",
      "displayLines": [
        "這條路",
        "通往海邊嗎？"
      ],
      "focusChar": "通",
      "imageNotes": "戶外岔路旁，主角小女孩指向繞過樹叢的小路，轉頭向爸爸詢問。路的終點被樹叢遮住，不能直接看見海灘而讓問句失去必要；可用海岸植物與遠處天空交代沿海環境，不使用文字路牌。",
      "imagePrompt": "Square 1:1 detailed warm pencil-and-watercolor picture book; full L058 set style-only, refined L115/L118/L119/L128 proportions, L154/L162/L163 fixed family identities. No text, letters, numbers, logos, labels, symbols, arrows or watermarks. 戶外岔路旁，主角小女孩指向繞過樹叢的小路，轉頭向爸爸詢問。路的終點被樹叢遮住，不能直接看見海灘而讓問句失去必要；可用海岸植物與遠處天空交代沿海環境，不使用文字路牌。",
      "imageSrc": "/assets/reviews/R046/images/R046-S04.webp",
      "audio": {
        "src": "/assets/reviews/R046/audio/R046-S04.m4a",
        "durationMs": 3354,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 300
          },
          {
            "charIndex": 1,
            "startMs": 300,
            "endMs": 660
          },
          {
            "charIndex": 2,
            "startMs": 660,
            "endMs": 980
          },
          {
            "charIndex": 3,
            "startMs": 980,
            "endMs": 1400
          },
          {
            "charIndex": 4,
            "startMs": 1400,
            "endMs": 1660
          },
          {
            "charIndex": 5,
            "startMs": 1660,
            "endMs": 1980
          },
          {
            "charIndex": 6,
            "startMs": 1980,
            "endMs": 2140
          },
          {
            "charIndex": 7,
            "startMs": 2140,
            "endMs": 2400
          }
        ]
      },
      "approved": true
    },
    {
      "id": "R046-S05",
      "text": "我把親手畫的圖交給朋友。",
      "spokenText": "我把親手畫的圖交給朋友",
      "displayLines": [
        "我把",
        "親手畫的圖",
        "交給朋友。"
      ],
      "focusChar": "交",
      "imageNotes": "教室桌邊，主角小女孩把自己畫的花草圖交給小月，紙張由雙方短暫共同拿著，清楚呈現交付動作；旁邊留有女孩使用的畫筆。不是交換兩張圖。小月使用 public/assets/reference/lesson-cast/xiaoyue.webp。",
      "imagePrompt": "Square 1:1 detailed warm pencil-and-watercolor picture book; full L058 set style-only, refined L115/L118/L119/L128 proportions, L154/L162/L163 fixed family identities. No text, letters, numbers, logos, labels, symbols, arrows or watermarks. 教室桌邊，主角小女孩把自己畫的花草圖交給小月，紙張由雙方短暫共同拿著，清楚呈現交付動作；旁邊留有女孩使用的畫筆。不是交換兩張圖。小月使用 public/assets/reference/lesson-cast/xiaoyue.webp。",
      "imageSrc": "/assets/reviews/R046/images/R046-S05.webp",
      "audio": {
        "src": "/assets/reviews/R046/audio/R046-S05.m4a",
        "durationMs": 4697,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 200
          },
          {
            "charIndex": 1,
            "startMs": 200,
            "endMs": 480
          },
          {
            "charIndex": 2,
            "startMs": 480,
            "endMs": 860
          },
          {
            "charIndex": 3,
            "startMs": 860,
            "endMs": 1200
          },
          {
            "charIndex": 4,
            "startMs": 1200,
            "endMs": 1360
          },
          {
            "charIndex": 5,
            "startMs": 1360,
            "endMs": 1620
          },
          {
            "charIndex": 6,
            "startMs": 1620,
            "endMs": 1900
          },
          {
            "charIndex": 7,
            "startMs": 1900,
            "endMs": 2540
          },
          {
            "charIndex": 8,
            "startMs": 2540,
            "endMs": 2800
          },
          {
            "charIndex": 9,
            "startMs": 2800,
            "endMs": 3020
          },
          {
            "charIndex": 10,
            "startMs": 3020,
            "endMs": 3240
          }
        ]
      },
      "approved": true
    }
  ],
  "sentenceGames": [
    {
      "id": "R046-G01",
      "type": "find-character",
      "sentenceId": "R046-S01",
      "targetChar": "歡",
      "targetCharIndex": 2,
      "prompt": "找出句子裡的歡，點一下。"
    },
    {
      "id": "R046-G02",
      "type": "teach-character",
      "sentenceId": "R046-S02",
      "targetChar": "感",
      "targetCharIndex": 7,
      "prompt": "請你幫我念。",
      "teachAudio": {
        "prefixText": "謝謝你幫忙我好",
        "suffixText": "動",
        "prefixSrc": "/assets/reviews/R046/audio/R046-G02-prefix.m4a",
        "suffixSrc": "/assets/reviews/R046/audio/R046-G02-suffix.m4a",
        "prefixAudio": {
          "src": "/assets/reviews/R046/audio/R046-G02-prefix.m4a",
          "durationMs": 4975,
          "charTimings": [
            {
              "charIndex": 0,
              "startMs": 0,
              "endMs": 310
            },
            {
              "charIndex": 1,
              "startMs": 310,
              "endMs": 620
            },
            {
              "charIndex": 2,
              "startMs": 620,
              "endMs": 1340
            },
            {
              "charIndex": 3,
              "startMs": 1340,
              "endMs": 1640
            },
            {
              "charIndex": 4,
              "startMs": 1640,
              "endMs": 1920
            },
            {
              "charIndex": 5,
              "startMs": 1920,
              "endMs": 2540
            },
            {
              "charIndex": 6,
              "startMs": 2540,
              "endMs": 2880
            }
          ]
        }
      }
    },
    {
      "id": "R046-G03",
      "type": "missing-character",
      "sentenceId": "R046-S03",
      "targetChar": "情",
      "targetCharIndex": 5,
      "prompt": "補上不見的字。",
      "missingIndexes": [
        5
      ],
      "options": [
        {
          "id": "correct",
          "text": "情",
          "correct": true
        },
        {
          "id": "wrong-one",
          "text": "心",
          "correct": false
        },
        {
          "id": "wrong-two",
          "text": "愛",
          "correct": false
        }
      ]
    },
    {
      "id": "R046-G04",
      "type": "partial-order",
      "sentenceId": "R046-S04",
      "targetChar": "通",
      "targetCharIndex": 3,
      "prompt": "把字放回句子裡。",
      "missingIndexes": [
        3,
        4,
        5,
        6
      ],
      "options": [
        {
          "id": "card-1",
          "text": "海",
          "correct": true,
          "correctOrder": 2
        },
        {
          "id": "card-2",
          "text": "通",
          "correct": true,
          "correctOrder": 0
        },
        {
          "id": "card-3",
          "text": "邊",
          "correct": true,
          "correctOrder": 3
        },
        {
          "id": "card-4",
          "text": "往",
          "correct": true,
          "correctOrder": 1
        }
      ]
    },
    {
      "id": "R046-G05",
      "type": "choose-pronunciation",
      "sentenceId": "R046-S05",
      "targetChar": "交",
      "targetCharIndex": 7,
      "prompt": "先聽，再選出念對的。",
      "options": [
        {
          "id": "correct",
          "text": "我把親手畫的圖交給朋友。",
          "spokenText": "我把親手畫的圖交給朋友",
          "correct": true,
          "sentenceId": "R046-S05",
          "audioSrc": "/assets/reviews/R046/audio/R046-S05.m4a",
          "audio": {
            "src": "/assets/reviews/R046/audio/R046-S05.m4a",
            "durationMs": 4697,
            "charTimings": [
              {
                "charIndex": 0,
                "startMs": 0,
                "endMs": 200
              },
              {
                "charIndex": 1,
                "startMs": 200,
                "endMs": 480
              },
              {
                "charIndex": 2,
                "startMs": 480,
                "endMs": 860
              },
              {
                "charIndex": 3,
                "startMs": 860,
                "endMs": 1200
              },
              {
                "charIndex": 4,
                "startMs": 1200,
                "endMs": 1360
              },
              {
                "charIndex": 5,
                "startMs": 1360,
                "endMs": 1620
              },
              {
                "charIndex": 6,
                "startMs": 1620,
                "endMs": 1900
              },
              {
                "charIndex": 7,
                "startMs": 1900,
                "endMs": 2540
              },
              {
                "charIndex": 8,
                "startMs": 2540,
                "endMs": 2800
              },
              {
                "charIndex": 9,
                "startMs": 2800,
                "endMs": 3020
              },
              {
                "charIndex": 10,
                "startMs": 3020,
                "endMs": 3240
              }
            ]
          }
        },
        {
          "id": "wrong-one",
          "text": "我把親手畫的書交給朋友。",
          "spokenText": "我把親手畫的書交給朋友",
          "correct": false,
          "audioSrc": "/assets/reviews/R046/audio/R046-G05-wrong-one.m4a",
          "audio": {
            "src": "/assets/reviews/R046/audio/R046-G05-wrong-one.m4a",
            "durationMs": 5152,
            "charTimings": [
              {
                "charIndex": 0,
                "startMs": 0,
                "endMs": 380
              },
              {
                "charIndex": 1,
                "startMs": 380,
                "endMs": 1180
              },
              {
                "charIndex": 2,
                "startMs": 1180,
                "endMs": 1560
              },
              {
                "charIndex": 3,
                "startMs": 1560,
                "endMs": 1900
              },
              {
                "charIndex": 4,
                "startMs": 1900,
                "endMs": 2080
              },
              {
                "charIndex": 5,
                "startMs": 2080,
                "endMs": 2280
              },
              {
                "charIndex": 6,
                "startMs": 2280,
                "endMs": 2580
              },
              {
                "charIndex": 7,
                "startMs": 2580,
                "endMs": 3260
              },
              {
                "charIndex": 8,
                "startMs": 3260,
                "endMs": 3540
              },
              {
                "charIndex": 9,
                "startMs": 3540,
                "endMs": 3770
              },
              {
                "charIndex": 10,
                "startMs": 3770,
                "endMs": 4000
              }
            ]
          }
        },
        {
          "id": "wrong-two",
          "text": "我把親手畫的圖交給老師。",
          "spokenText": "我把親手畫的圖交給老師",
          "correct": false,
          "audioSrc": "/assets/reviews/R046/audio/R046-G05-wrong-two.m4a",
          "audio": {
            "src": "/assets/reviews/R046/audio/R046-G05-wrong-two.m4a",
            "durationMs": 3913,
            "charTimings": [
              {
                "charIndex": 0,
                "startMs": 0,
                "endMs": 300
              },
              {
                "charIndex": 1,
                "startMs": 300,
                "endMs": 540
              },
              {
                "charIndex": 2,
                "startMs": 540,
                "endMs": 980
              },
              {
                "charIndex": 3,
                "startMs": 980,
                "endMs": 1300
              },
              {
                "charIndex": 4,
                "startMs": 1300,
                "endMs": 1440
              },
              {
                "charIndex": 5,
                "startMs": 1440,
                "endMs": 1680
              },
              {
                "charIndex": 6,
                "startMs": 1680,
                "endMs": 1920
              },
              {
                "charIndex": 7,
                "startMs": 1920,
                "endMs": 2540
              },
              {
                "charIndex": 8,
                "startMs": 2540,
                "endMs": 2820
              },
              {
                "charIndex": 9,
                "startMs": 2820,
                "endMs": 3020
              },
              {
                "charIndex": 10,
                "startMs": 3020,
                "endMs": 3240
              }
            ]
          }
        }
      ]
    }
  ]
}
```

## Actual QA

{
  "images": [
    {
      "id": "R046-S01",
      "bytes": 156788,
      "styleLock": "PASS",
      "cast": "PASS",
      "semantics": "PASS",
      "size": "1024x1024"
    },
    {
      "id": "R046-S02",
      "bytes": 130324,
      "styleLock": "PASS",
      "cast": "PASS",
      "semantics": "PASS",
      "size": "1024x1024"
    },
    {
      "id": "R046-S03",
      "bytes": 169806,
      "styleLock": "PASS",
      "cast": "PASS",
      "semantics": "PASS",
      "size": "1024x1024"
    },
    {
      "id": "R046-S04",
      "bytes": 248698,
      "styleLock": "PASS",
      "cast": "PASS",
      "semantics": "PASS",
      "size": "1024x1024"
    },
    {
      "id": "R046-S05",
      "bytes": 147780,
      "styleLock": "PASS",
      "cast": "PASS",
      "semantics": "PASS",
      "size": "1024x1024"
    }
  ],
  "audio": [
    {
      "id": "R046-S01",
      "bytes": 64699,
      "durationMs": 5592,
      "count": 11,
      "meanDb": -19.5,
      "maxDb": -2,
      "endGapMs": 1052,
      "shortOrLongTimings": []
    },
    {
      "id": "R046-S02",
      "bytes": 37227,
      "durationMs": 3979,
      "count": 9,
      "meanDb": -19.9,
      "maxDb": -2.3,
      "endGapMs": 1379,
      "shortOrLongTimings": []
    },
    {
      "id": "R046-S03",
      "bytes": 56488,
      "durationMs": 4906,
      "count": 12,
      "meanDb": -18.4,
      "maxDb": -2,
      "endGapMs": 766,
      "shortOrLongTimings": []
    },
    {
      "id": "R046-S04",
      "bytes": 40640,
      "durationMs": 3354,
      "count": 8,
      "meanDb": -18,
      "maxDb": -2.6,
      "endGapMs": 954,
      "shortOrLongTimings": []
    },
    {
      "id": "R046-S05",
      "bytes": 56278,
      "durationMs": 4697,
      "count": 11,
      "meanDb": -19.8,
      "maxDb": -2,
      "endGapMs": 1457,
      "shortOrLongTimings": []
    },
    {
      "id": "R046-G02-prefix",
      "bytes": 45849,
      "durationMs": 4975,
      "count": 7,
      "meanDb": -21.2,
      "maxDb": -2.2,
      "endGapMs": 2095,
      "shortOrLongTimings": []
    },
    {
      "id": "R046-G05-wrong-one",
      "bytes": 68315,
      "durationMs": 5152,
      "count": 11,
      "meanDb": -18.7,
      "maxDb": -2,
      "endGapMs": 1152,
      "shortOrLongTimings": []
    },
    {
      "id": "R046-G05-wrong-two",
      "bytes": 46949,
      "durationMs": 3913,
      "count": 11,
      "meanDb": -18.5,
      "maxDb": -2.1,
      "endGapMs": 673,
      "shortOrLongTimings": []
    }
  ],
  "g03": {
    "cards": [
      "情",
      "心",
      "愛"
    ],
    "correct": 1,
    "blank": 1,
    "data": "PASS",
    "actualUI": "Not run"
  },
  "totalBytes": 1269841,
  "g05MeanSpread": 1.3000000000000007
}

R046-G02-suffix 動 failed transcription over four generations: empty, 咚, 嘟, unrelated phrase. No alias/timing fabricated; rejected processed suffix removed. Audio end gaps and short timing still require QA.
Not run; audio gates incomplete. No browser failure claimed.
All final WebP exports viewed beside L058 and relevant family/Xiaoyue references. R046-S04 initial incorrect gaze rejected and regenerated. No charAudio generated. Teacher subjective review post-main; no pre-main teacher PASS requested.

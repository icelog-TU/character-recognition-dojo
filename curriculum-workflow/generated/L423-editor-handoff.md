# Teacher-approved Production E handoff

Production E：請 claim L423，並直接開始完整 package 製作。

【起手資訊】
Repo：https://github.com/icelog-TU/character-recognition-dojo
Production：E
Worktree：C:\Users\User\Documents\Codex\2026-08-03\a000-sop\worktrees\parallel-e
Package branch：codex/l423-complete-package
Unit：L423，普通單字課
title：組
newChars：["組"]
注音：ㄗㄨˇ
老師已批准五句及 S01、S05 的具體配圖要求。

依 latest ROLE_PRODUCTION_SOP 執行起手檢查、確認 assigned worktree、建立或確認 package branch、登記 registry claim，然後直接繼續完整 package，不需再次等待老師說「開始」。真正 blocker 才停下回報。

【邊界與依賴】
本次 fetch 核對：
origin/main = e0fec697 Regenerate R048 S04 using teacher-specified tone spelling
正式 production：L001-L414，最新正式字「決」，418 個已學字。
本次 main 更新為複習音訊修復，未推進普通課字界。
R049/R050 已 merged，afterLessonOrder=405。

dependsOnLessons：["L416","L418","L419","L420","L421","L422"]
provisionalLearnedChars：["果","結","合","教","室","班"]

locked allowedChars：
上述 commit 的 src/curriculum/sample-lessons.json 中，L001-L414 全部 newChars 聯集，加上 ["果","結","合","教","室","班","組"]，共 425 字。
請在 request 展開完整 allowedChars。

Coverage 以外的額外 provisional char：
L416「果」，出現在 S05「結果」及 G05 全部選項，必須保留依賴，但不列 coverage。
L415「解」、L417「如」未用於本課定稿或選項，不額外加入 provisionalLearnedChars；不改變前序課的正常 Release 順序。
完全未學字：五句及 Stage 4 options 均無。

預定後續順序：L424「隊」→ L425「各」。
本課不可提前使用「隊、各」，也不可自行增加新字。

Release blockers：
前序普通課須依序整合，包含 L422；L420 後的 R051/R052 review pair 亦須先 merged。
R051/R052：afterLessonOrder=420，coverage range L391-L420。
在 registry、request、packet、draft 明列 milestone 依賴；本 package 不包含 review pair。
Dependencies 只阻止 Release/main integration，不阻止 Production 平行製作。

【五句定稿與配圖】

L423-S01
text：全班在教室分組下棋。
spokenText：全班在教室分組下棋
displayLines：["全班在教室","分組下棋。"]
focusChar：組
Han count：9
Coverage：組×1、班×1、教×1、室×1
imageNotes：
教室全景，班上有許多同學，兩兩一組、面對面坐著，每組中間各有一副棋盤，正在下棋。主角小女孩也是其中一組；前景與背景都要清楚看得到多組同學，不可只畫兩個孩子，也不是全班圍看同一副棋盤。可使用無座標文字的五子棋棋盤與黑白棋子。老師在旁巡視，孩子正進行對弈，不是還在等待分組。其他學生使用 generic 同學，不冒充小月、小光或既有固定同學。

L423-S02
text：爸爸教我組裝小車。
spokenText：爸爸教我組裝小車
displayLines：["爸爸教我","組裝小車。"]
focusChar：組
Han count：8
Coverage：組×1、教×1
imageNotes：
家中手工桌前，主角爸爸示範把大型玩具車輪裝到車身的輪軸上，主角小女孩跟著操作另一側。桌上放著尚未裝完的小車車身及少量相應零件，車子明顯仍在組裝中。使用孩子可操作的扣合式大型玩具零件，不需要電動工具。重點是爸爸教女孩從零件組成小車，不是修理壞掉的車，也不要畫成小車早已完整、父女只在旁觀看。

L423-S03
text：班長把功課送到辦公室。
spokenText：班長把功課送到辦公室
displayLines：["班長把功課","送到辦公室。"]
focusChar：班
Han count：10
Coverage：班×1、室×1
imageNotes：
學校辦公室門口，一名 generic 班長同學抱著整齊、重量適中的作業簿，正交給辦公室內的老師。作業簿外觀一致，代表收齊後送交的功課；不是送禮或搬運文具。辦公室內可見成人辦公桌與文件，與學生教室區別。班長為本圖的 generic 同學，不指定小光、小月或主角擔任班長，不新增固定角色設定。不用名牌、臂章文字或可讀作業封面表達身份。

L423-S04
text：我們這組合作畫海報。
spokenText：我們這組合作畫海報
displayLines：["我們這組","合作畫海報。"]
focusChar：組
Han count：9
Coverage：組×1、合×1
imageNotes：
學校美術活動桌前，主角小女孩與兩名 generic 同學共同畫同一張大幅海報。女孩畫花草，一名同學補上樹木，另一名同學為已畫好的圖形上色；每人負責不同區域，三人的動作指向同一張紙。海報仍未完成，保留空白區域，不是拿完成品合照，也不是各自畫三張小圖。畫面聚焦這一組的合作，不必再畫全班。海報只需圖像部分，不生成可讀標題或標語。

L423-S05
text：筆盒沒關好，結果筆掉出來。
spokenText：筆盒沒關好結果筆掉出來
displayLines：["筆盒沒關好，","結果筆","掉出來。"]
focusChar：結
Han count：11
Coverage：結×1
imageNotes：
主角小女孩在桌前拿起硬式筆盒，因盒蓋沒有扣好，筆盒傾斜時蓋子翻開，幾支筆正從盒內掉到桌面。女孩吃驚地看著掉出的筆。必須清楚看見硬式筆盒、未扣上的盒蓋，以及從盒口掉出的筆，呈現「沒關好」造成掉落的直接因果。不是故意倒筆，不是筆盒破掉，也不是一般紙盒。畫面停在筆正掉出的時刻，可有一兩支已落在桌上，其餘仍在盒內。

【Coverage 與 Editor 自審】
L423 組：3/≥3 PASS
L422 班：2/≥2 PASS
L421 室：2/≥2 PASS
L420 教：2/≥2 PASS
L419 合：1/≥1 PASS
L418 結：1/≥1 PASS

L417 及更早字不列 coverage；其中 L416「果」仍是 allowed-character dependency。
Han counts：9、8、10、9、11，全部不超過 12。
spokenText 均等於 text 的精確 Han-only sequence。
displayLines 串接完全等於 text，各行含標點最多 6 字元。
Editor allowed-character sweep：PASS。
已驗證定稿 text、spokenText、displayLines、focusChar 與全部 Stage 4 option text，均在正式已學字＋明列 provisional＋本課新字範圍內。

【Stage 4 資料】
固定題序，無例外；每句使用一次。
所有 index 均為零起算 Han-only index。

Game ID   | type                 | sentenceId | targetChar | targetCharIndex | missingIndexes
L423-G01 | find-character       | L423-S01   | 組         | 6               | 不設定
L423-G02 | teach-character      | L423-S02   | 組         | 4               | 不設定
L423-G03 | missing-character    | L423-S04   | 組         | 3               | [3]
L423-G04 | partial-order        | L423-S03   | 班         | 0               | [6,7,8,9]
L423-G05 | choose-pronunciation | L423-S05   | 結         | 5               | 不設定

G01：
options 不設定；在句中點選 index 6 的「組」。

G02：
options 不設定。
prefixText：爸爸教我
suffixText：裝小車
teachAudio.prefixSrc：/assets/lessons/L423/audio/L423-G02-prefix.m4a
teachAudio.suffixSrc：/assets/lessons/L423/audio/L423-G02-suffix.m4a
suffix 必須從「裝」開始，不漏字；prefix/suffix 均不可包含「組」。

G03 options：
[
  {"id":"correct","text":"組","correct":true},
  {"id":"wrong-one","text":"班","correct":false},
  {"id":"wrong-two","text":"家","correct":false}
]
三張不同單漢字卡，正解一張、干擾兩張。

G04：
missingIndexes [6,7,8,9] 對應「到、辦、公、室」。
options：
[
  {"id":"card-gong","text":"公","correct":true,"correctOrder":2},
  {"id":"card-dao","text":"到","correct":true,"correctOrder":0},
  {"id":"card-shi","text":"室","correct":true,"correctOrder":3},
  {"id":"card-ban","text":"辦","correct":true,"correctOrder":1}
]
四張單漢字卡，不做「辦公室」chunk 卡。

G05 options：
[
  {
    "id":"correct",
    "text":"筆盒沒關好，結果筆掉出來。",
    "correct":true,
    "audioSrc":"/assets/lessons/L423/audio/L423-S05.m4a"
  },
  {
    "id":"wrong-one",
    "text":"筆盒沒拿好，結果筆掉出來。",
    "correct":false,
    "audioSrc":"/assets/lessons/L423/audio/L423-G05-wrong-one.m4a"
  },
  {
    "id":"wrong-two",
    "text":"筆盒沒關好，結果錢掉出來。",
    "correct":false,
    "audioSrc":"/assets/lessons/L423/audio/L423-G05-wrong-two.m4a"
  }
]
wrong-one spokenText：筆盒沒拿好結果筆掉出來
wrong-two spokenText：筆盒沒關好結果錢掉出來
兩個 wrong options 均為 11 個漢字，與正解各差一字。分別依完整 wrong text 生成音檔。

機械索引自審：
G01 S01[6]=組 PASS
G02 S02[4]=組；prefix/suffix 精確切分 PASS
G03 S04[3]=組；三张不同單漢字選項 PASS
G04 S03[0]=班；[6,7,8,9]=到辦公室；correctOrder 映射 PASS
G05 S05[5]=結；wrong options 等長、各差一字、字界 PASS
五句各使用一次及固定題序 PASS

【本課特殊注意】
1. 「分組／組裝／這組」均讀 ㄗㄨˇ。charAudio：/assets/lessons/L423/audio/char-u7d44.m4a。
2. S01「教室」的教，Han index 3，讀 ㄐㄧㄠˋ；S02「爸爸教我」的教，index 2，讀 ㄐㄧㄠ，G02 prefix 同樣讀 ㄐㄧㄠ。S03「班長」的長，index 1，讀 ㄓㄤˇ。逐一核對注音及實際音訊，必要時依 schema 設定 zhuyinOverrides。
3. S01 必須是許多同學兩兩相對、每組各有棋盤；S05 必須是筆盒未扣好造成筆正掉出來。這兩項為老師明確修訂，不可退回舊畫面。
4. 固定主角女孩與爸爸依 visual cast SOP；generic 班長及同學不擅自套用 named cast。L058 僅作畫風參考。
5. 本課沒有文字／數字入圖例外，尤其棋盤座標、作業封面及海報均不需可讀文字或數字。

【交付要求】
依 ROLE_PRODUCTION_SOP 完成 package、commit/push branch，包含：
- curriculum-workflow/lesson-requests/L423.json
- curriculum-workflow/generated/L423-generation-packet.md
- curriculum-workflow/drafts/L423-draft.json
- public/assets/lessons/L423/images/L423-S01.webp 至 L423-S05.webp
- public/assets/lessons/L423/audio/：charAudio、五句音檔、G02 prefix/suffix、G05 兩個 wrong 音檔
- 完整 charTimings，以及 SOP 要求的 registry、課程／planner／ledger package 更新

最後交包前，pushed branch 必須通過：
npm run curriculum:package-intake -- --unit L423 --ref origin/codex/l423-complete-package

回報完整 tip SHA、intake 結果、package 狀態與未完成項。
若前序課或 R051/R052 尚未 merged，但 package 完整且 intake 通過，回報 dependency-blocked-asset-complete，明列未解除的 Release blockers。缺資產或 unresolved 項不可回報完整交包。

正式合併後老師審圖／審音入口：
https://icelog-tu.github.io/character-recognition-dojo/lesson-asset-review.html
選取 L423；修復狀態依 npm run asset:review-status 查看。
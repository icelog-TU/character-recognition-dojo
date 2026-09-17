# Teacher-approved Production E handoff

Production E｜L430「主」製作交接

【起手資訊】
收到後請 claim L430 並開始製作，無須等待另一則老師訊息。
指定：Production E（接續 L429 Production D）
Repo：https://github.com/icelog-TU/character-recognition-dojo
Worktree：C:\Users\User\Documents\Codex\2026-08-03\a000-sop\worktrees\parallel-e
Package branch：codex/l430-complete-package
Unit：L430，normal lesson，order=430
title：主
newChars：["主"]
注音：ㄓㄨˇ
固定製作規則依 latest origin/main 的 ROLE_PRODUCTION_SOP 執行。

【邊界與依賴】
已 fetch 確認：
origin/main = 4eec5178 Integrate lesson L415 from rescued package
正式邊界：L001–L415，最新正式字「解」，419 個已學字。
最新正式 review：R050，afterLessonOrder=405。
Editor 本機 checkout 落後，local audit 顯示 L333；本交接直接採 origin/main JSON。

已核准 provisional sequence：
L416果、L417如、L418結、L419合、L420教、L421室、
L422班、L423組、L424隊、L425各、L426輪、L427員、
L428自、L429己。

依五句及 Stage 4 選項的實際用字：
dependsOnLessons：["L423","L425","L426","L427","L428","L429"]
provisionalLearnedChars：["組","各","輪","員","自","己"]
Coverage 窗口外的額外 provisional 字：「組」，來自 L423，用於 S04。
allowedChars：
4eec5178 正式 learned-character union
∪ ["組","各","輪","員","自","己"] ∪ ["主"]
去重共 426 字，請在 request 展開完整 array。
Allowed-character audit：PASS，沒有未教字。
「由」「意」「持」「食」尚未教，不自行加入自由、主意、主持、主食。

Release blocker：
先前普通課與 L420 後 R051/R052 尚未全部進 main。
R051/R052 目前沒有 main 資料、registry claim 或對應遠端 package branch，待 Editor 補作。
這些只阻止 Release/main integration，不阻止 L430 平行製作。
請在 registry、request、packet、draft 記錄依賴與 milestone blocker。

【五句定稿與配圖】

S01｜L430-S01
text：這隻小狗的主人是誰？
spokenText：這隻小狗的主人是誰
displayLines：["這隻小狗的","主人是誰？"]
focusChar：主
漢字數：9
Coverage：主1
imageNotes：
公園休息處，主角小女孩與主角媽媽看見一隻溫和的小狗，女孩指向牠，轉頭詢問媽媽。附近有幾位 generic adult 遊客，畫面不直接標出主人是誰；小狗配戴胸背帶，牽繩另一端延伸到畫面外。這不是主角家已認識的小狗。女孩保持距離，不自行抓抱陌生犬。

S02｜L430-S02
text：我已經會自己洗頭了。
spokenText：我已經會自己洗頭了
displayLines：["我已經會","自己洗頭了。"]
focusChar：己
漢字數：9
Coverage：自1、己1
imageNotes：
家中浴室，主角小女孩自己用雙手搓洗頭髮上的泡沫，主角媽媽在旁照看、微笑鼓勵，沒有代替她洗。取頭部、肩部與手部的近景，身體由浴簾或浴室隔板遮住，無裸露私密部位。女孩神情有信心，不是被水嗆到，也不是獨自在無人照看的濕滑浴室操作。

S03｜L430-S03
text：店員主動幫我拿東西。
spokenText：店員主動幫我拿東西
displayLines：["店員主動幫我","拿東西。"]
focusChar：主
漢字數：9
Coverage：主1、員1
imageNotes：
商店裡，主角小女孩抱著幾本書與一盒畫具，雙手已拿滿；generic adult 店員看見後走上前，伸手接過上方一盒物品，主角媽媽在旁。女孩沒有招手求助，店員是在注意到她不方便後主動幫忙。物品份量適中，不畫成危險重物將砸下，也不是店員拿走商品不讓她買。

S04｜L430-S04
text：各組成員輪流當主角。
spokenText：各組成員輪流當主角
displayLines：["各組成員","輪流當主角。"]
focusChar：主
漢字數：9
Coverage：各1、員1、輪1、主1
imageNotes：
兒童分組角色扮演活動，每次短演出結束就換一位成員擔任主角。前景主角小女孩把代表勇者主角的短披風交給同組 generic classmate，其他組員拿著各自的簡單道具等待下一次演出；背景另有一組正在活動。用角色道具交接呈現輪流，不是老師永遠指定同一個人，也不是每個孩子同時當主角。不要出現可讀劇本或名牌。

S05｜L430-S05
text：這是我自己畫的公主。
spokenText：這是我自己畫的公主
displayLines：["這是我自己","畫的公主。"]
focusChar：主
漢字數：9
Coverage：主1、自1、己1
imageNotes：
家中畫畫桌旁，主角小女孩把自己完成的畫舉給主角爸爸看。紙上清楚可見兒童筆觸的公主：戴小皇冠、穿長裙；桌上有畫筆。公主是紙上的圖畫，不是房間裡的真人，也不是女孩穿公主服。畫中人物不必套用固定同學角色，不加標題、簽名或文字。

【Coverage】
L430主：4／要求≥3
L429己：2／要求≥2
L428自：2／要求≥2
L427員：2／要求≥2
L426輪：1／要求≥1
L425各：1／要求≥1
全部 PASS。「組」只是額外 allowed dependency，不列 coverage target。
五句各 9 漢字。
spokenText、focusChar、displayLines 精確拼接與每行≤6可見字元：PASS。

【Stage 4 資料】
固定順序，五句各使用一次。
以下均為零起算 Han-only index，已機械驗證。

Game | Type | sentenceId | targetChar | targetCharIndex | missingIndexes | 檢查
G01 | find-character | L430-S01 | 主 | 5 | 不適用 | PASS
G02 | teach-character | L430-S03 | 主 | 2 | 不適用 | PASS
G03 | missing-character | L430-S04 | 主 | 7 | [7] | PASS
G04 | partial-order | L430-S02 | 己 | 5 | [4,5,6,7] | PASS
G05 | choose-pronunciation | L430-S05 | 主 | 8 | 不適用 | PASS

G01：
在 S01 找「主」，無額外 option cards。

G02：
prefixText：店員
target：主
suffixText：動幫我拿東西
teachAudio.prefixSrc：
/assets/lessons/L430/audio/L430-G02-prefix.m4a
teachAudio.suffixSrc：
/assets/lessons/L430/audio/L430-G02-suffix.m4a
prefix + 主 + suffix 精確等於 S03 spokenText：PASS。

G03：
options：
- id: correct；text: 主；correct: true
- id: wrong-one；text: 大；correct: false
- id: wrong-two；text: 小；correct: false
三個不同單一漢字，正解對應 S04 index 7。

G04：
missingIndexes：[4,5,6,7]
依缺格順序：自、己、洗、頭
options：
- id: wash；text: 洗；correct: true；correctOrder: 2
- id: self；text: 自；correct: true；correctOrder: 0
- id: head；text: 頭；correct: true；correctOrder: 3
- id: ji；text: 己；correct: true；correctOrder: 1
correctOrder 為缺格序號，不是原句 index。
四張單字卡與缺格映射：PASS。

G05：
- id: correct
  text：這是我自己畫的公主。
  spokenText：這是我自己畫的公主
  correct：true
  audioSrc：/assets/lessons/L430/audio/L430-S05.m4a
- id: wrong-one
  text：這是你自己畫的公主。
  spokenText：這是你自己畫的公主
  correct：false
  audioSrc：/assets/lessons/L430/audio/L430-G05-wrong-one.m4a
- id: wrong-two
  text：這是我自己畫的公雞。
  spokenText：這是我自己畫的公雞
  correct：false
  audioSrc：/assets/lessons/L430/audio/L430-G05-wrong-two.m4a
三選項均 9 漢字；兩個 wrong choice 各差一字，allowed PASS。
錯誤選項各自生成完整句音檔，不剪接正確音檔。

【本課特殊注意】
1. 主一律 ㄓㄨˇ；S04「主角」的「角」讀 ㄐㄧㄠˇ。S02、S05「己」讀 ㄐㄧˇ，不混成「已」。
2. S02 已取代「我想自己做主，選紅色的紙」，不得保留舊文案或舊資產。
3. S03 要表現店員看見需要便上前幫忙；S04 是輪換表演主角，不是輪換隊長。
4. S02 採安全且不暴露身體的洗頭近景；S05 的公主必須出現在女孩手上的畫紙內。
5. 本課無文字或數字入圖例外。角色依 visual cast SOP，L058 僅作畫風參考。

【交付要求】
依 ROLE_PRODUCTION_SOP 完成 package，包括：
- curriculum-workflow/lesson-requests/L430.json
- curriculum-workflow/generated/L430-generation-packet.md
- curriculum-workflow/drafts/L430-draft.json
- public/assets/lessons/L430/images/L430-S01.webp 至 L430-S05.webp
- public/assets/lessons/L430/audio/char-u4e3b.m4a
- 五句音檔、最終 timings、上述 G02／G05 referenced audio
- SOP 規定的 registry 與相關課程檔案更新

commit／push codex/l430-complete-package 後執行：
npm run curriculum:package-intake -- --unit L430 --ref origin/codex/l430-complete-package

回報 SHA、pushed-branch intake 結果、逐圖 style-lock／cast 結果及未完成項。
資產完整且 intake PASS、但 Release 依賴仍未解除時，回報 dependency-blocked-asset-complete。

圖片審核入口：
https://icelog-tu.github.io/character-recognition-dojo/lesson-asset-review.html
未 Release 前，不宣稱正式審核頁已可檢視本課。

R051/R052 由 Editor 另行補句與交接，不屬於本份 L430 package 的製作範圍。
# Teacher-approved Production E handoff

Production E｜L435「助」製作交接

【起手資訊】
收到後請 claim L435 並開始製作，無須等待另一則老師訊息。
指定：Production E（接續 L434 Production D）
Repo：https://github.com/icelog-TU/character-recognition-dojo
Worktree：C:\Users\User\Documents\Codex\2026-08-03\a000-sop\worktrees\parallel-e
Package branch：codex/l435-complete-package
Unit：L435，normal lesson，order=435
title：助
newChars：["助"]
注音：ㄓㄨˋ
固定製作規則依 latest origin/main 的 ROLE_PRODUCTION_SOP 執行。

【邊界與依賴】
已 fetch 確認：
origin/main = f4bc071d Integrate lesson L420 from verified production package
正式邊界：L001–L420，最新正式字「教」，424個已學字。
最新正式 review：R050，afterLessonOrder=405。
Editor 本機 checkout 落後，local audit 顯示 L333；本交接直接採 origin/main JSON。

已核准 provisional sequence：
L421室、L422班、L423組、L424隊、L425各、L426輪、
L427員、L428自、L429己、L430主、L431由、L432意、
L433願、L434互。

依五句與 Stage 4 選項實際用字鎖定：
dependsOnLessons：["L428","L429","L430","L431","L432","L433","L434"]
provisionalLearnedChars：["自","己","主","由","意","願","互"]
Coverage 窗口外額外 provisional 字：
- 自：L428，S05「自助餐」「自己」。
- 己：L429，S05「自己」及 G03 干擾選項。

allowedChars：
f4bc071d 正式 learned-character union
∪ ["自","己","主","由","意","願","互"] ∪ ["助"]
去重共432字，請在 request 展開完整 array。
Allowed-character audit：PASS，五句與遊戲選項均無未教字。
「求」尚未教，不自行加入「求助」。

R051/R052 與前置普通課仍須依 playable order 先行 Release。
這些只阻止 Release，不阻止本課平行製作。
請在 registry、request、packet、draft 記錄依賴與 review milestone blocker。

【五句定稿與配圖】

S01｜L435-S01
text：小光願意幫助我學加法。
spokenText：小光願意幫助我學加法
displayLines：["小光願意幫助","我學加法。"]
focusChar：助
漢字數：10
Coverage：願1、意1、助1
imageNotes：
小光與主角小女孩坐在桌旁，小光用兩小堆積木示範合在一起計數，女孩專心看著並跟著操作。呈現小光願意花時間協助她練習加法，不是替她寫答案。
老師已明確設定小光很聰明；本句必須由小光協助女孩，不可顛倒教與學的角色，也不要把女孩畫成被嘲笑或很笨。
小光使用 public/assets/reference/lesson-cast/xiaoguang.webp：
圓眼鏡、整齊短黑髮、白短袖襯衫、深藍針織背心、卡其短褲、白襪、棕色鞋。用積木呈現加法，不需可讀算式。

S02｜L435-S02
text：我們互助合作，把海報畫完。
spokenText：我們互助合作把海報畫完
displayLines：["我們","互助合作，","把海報畫完。"]
focusChar：助
漢字數：11
Coverage：互1、助1
imageNotes：
主角小女孩與兩位 generic classmates 共同畫一張大海報。每人負責不同區域，例如花草、樹木與背景，一位孩子把需要的畫筆遞給同伴；畫面接近完成，大家正在補上最後的部分。
重點是互助、分工完成同一張作品，不是各画各的，也不刻意安排一人只扶紙。海報以圖像為主，不加標題、姓名或文字。
不得沿用「互相幫助，把書搬好」的搬書情境。

S03｜L435-S03
text：車主不願意賣車。
spokenText：車主不願意賣車
displayLines：["車主不願意","賣車。"]
focusChar：願
漢字數：7
Coverage：主1、願1、意1
imageNotes：
住宅旁的安全停車處，一位 generic adult 買方正在向另一位 generic adult 車主詢問購車。車主站在自己的車旁，保留車鑰匙，輕擺手、搖頭表示不願出售；買方指向車輛詢問，沒有爭執。
車輛熄火停妥，不是租車、借車或車輛故障。不要畫成交、交鑰匙、收錢，也不需要售車牌、價格、可讀車牌或對話文字。兩位大人不套用主角爸爸的臉。

S04｜L435-S04
text：我和小月互相寫信給對方。
spokenText：我和小月互相寫信給對方
displayLines：["我和小月","互相寫信","給對方。"]
focusChar：互
漢字數：11
Coverage：互1
imageNotes：
小月旅行期間，主角女孩在家寫回信。採同一張方形插畫中的兩個清楚場景：一側是女孩在家桌旁寫信，桌上放著已收到的信；另一側是小月在旅行住宿處寫信，旁邊有旅行袋與收到的信。
呈現雙方各自寫信、彼此通信，不是面對面一起寫同一封，也不是單方面收信。信紙以背面或不可辨讀的細小筆跡呈現，不加可讀內文、收件人、郵戳或數字。
小月使用 public/assets/reference/lesson-cast/xiaoyue.webp：
長柔卷深栗色頭髮、小月亮髮夾、薰衣草 cardigan、淡奶油上衣、青綠百褶裙、白襪、紫色鞋；不畫成主角女孩。

S05｜L435-S05
text：自助餐的菜，由你自己選。
spokenText：自助餐的菜由你自己選
displayLines：["自助餐的菜，","由你自己選。"]
focusChar：助
漢字數：10
Coverage：助1、由1
imageNotes：
台灣自助餐店，主角媽媽陪主角小女孩站在菜色展示檯前，女孩正在看不同的熟食菜盤，媽媽用開放手勢讓她挑選；店員在檯後準備依選擇夾菜。
句中「你」是媽媽對女兒說話，使用主角小女孩，不套用固定「你」小男孩。不要畫成速食點餐機或女孩伸手碰熱菜盤。無價牌、數字或可讀菜名。

【Coverage】
L435助：3／要求≥3
L434互：2／要求≥2
L433願：2／要求≥2
L432意：2／要求≥2
L431由：1／要求≥1
L430主：1／要求≥1
全部 PASS。
「自、己」只列額外 allowed dependencies，不列 coverage targets。
漢字數：10、11、7、11、10。
spokenText、focusChar、displayLines 精確拼接與每行≤6可見字元：PASS。

【Stage 4 資料】
固定順序，五句各使用一次。
以下為零起算 Han-only index，已機械驗證。

Game | Type | sentenceId | targetChar | targetCharIndex | missingIndexes | 檢查
G01 | find-character | L435-S01 | 助 | 5 | 不適用 | PASS
G02 | teach-character | L435-S02 | 助 | 3 | 不適用 | PASS
G03 | missing-character | L435-S05 | 助 | 1 | [1] | PASS
G04 | partial-order | L435-S04 | 互 | 4 | [7,8,9,10] | PASS
G05 | choose-pronunciation | L435-S03 | 願 | 3 | 不適用 | PASS

G01：
在 S01 找「助」，無額外 option cards。

G02：
prefixText：我們互
target：助
suffixText：合作把海報畫完
teachAudio.prefixSrc：
/assets/lessons/L435/audio/L435-G02-prefix.m4a
teachAudio.suffixSrc：
/assets/lessons/L435/audio/L435-G02-suffix.m4a
prefix + 助 + suffix 精確等於 S02 spokenText：PASS。
prefix 在「互」後停止，不自行補出「助」；suffix 從「合」開始。

G03：
options：
- id: correct；text: 助；correct: true
- id: wrong-one；text: 己；correct: false
- id: wrong-two；text: 由；correct: false
三個不同單一漢字，正解對應 S05 index 1：PASS。

G04：
missingIndexes：[7,8,9,10]
依缺格順序：信、給、對、方
options：
- id: card-dui；text: 對；correct: true；correctOrder: 2
- id: card-xin；text: 信；correct: true；correctOrder: 0
- id: card-fang；text: 方；correct: true；correctOrder: 3
- id: card-gei；text: 給；correct: true；correctOrder: 1
correctOrder 為缺格序號，不是原句 index。
四張單字卡與缺格映射：PASS。

G05：
- id: correct
  text：車主不願意賣車。
  spokenText：車主不願意賣車
  correct：true
  audioSrc：/assets/lessons/L435/audio/L435-S03.m4a
- id: wrong-one
  text：車主不願意買車。
  spokenText：車主不願意買車
  correct：false
  audioSrc：/assets/lessons/L435/audio/L435-G05-wrong-one.m4a
- id: wrong-two
  text：車主很願意賣車。
  spokenText：車主很願意賣車
  correct：false
  audioSrc：/assets/lessons/L435/audio/L435-G05-wrong-two.m4a
三句均7漢字，兩個錯誤選項各差1字，allowed PASS。
正確音訊使用 S03，不誤用 S05。
兩個 wrong-choice audio 各自從完整 spokenText 生成，不剪接正確音檔。

【本課特殊注意】
1. 助讀 ㄓㄨˋ；「互相」的「相」讀 ㄒㄧㄤ；「買」ㄇㄞˇ與「賣」ㄇㄞˋ需清楚區分。
2. S01 小光協助女孩學加法，不反向；S02 鎖定「互助合作」，不是小助手或搬書的舊版。
3. S03 鎖定「車主不願意賣車」，不是收養小狗、借車或爸爸當主角。
4. S04 必須是雙方通信，小月使用 reference；S05「你」指主角女孩。
5. 本課無文字、數字入圖或句長例外。L058僅作畫風參考，人物依 visual cast SOP。

【交付要求】
依 ROLE_PRODUCTION_SOP 完成 package，包括：
- curriculum-workflow/lesson-requests/L435.json
- curriculum-workflow/generated/L435-generation-packet.md
- curriculum-workflow/drafts/L435-draft.json
- public/assets/lessons/L435/images/L435-S01.webp 至 L435-S05.webp
- public/assets/lessons/L435/audio/char-u52a9.m4a
- 五句音檔、最終 timings、上述 G02／G05 referenced audio
- SOP 要求的 registry、相關 package 檔案與檢查紀錄

完成後 commit／push codex/l435-complete-package。
最後對 pushed branch 執行：
npm run curriculum:package-intake -- --unit L435 --ref origin/codex/l435-complete-package

回報 SHA、package-intake 結果、逐圖 style-lock／cast 結果與未完成項。
資產完整且 intake PASS，但 Release 依賴尚未解除時，回報 dependency-blocked-asset-complete。

審核入口：
https://icelog-tu.github.io/character-recognition-dojo/lesson-asset-review.html
未 Release 前不宣稱正式審核頁已可檢視本課。

里程碑提醒：
L435 後須安排 R053/R054，複習 L406–L435，先於 L436 Release。
本份只製作 L435；兩個複習課由 Editor 另行定稿交接。
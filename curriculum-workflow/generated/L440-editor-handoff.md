# Teacher-approved Production E handoff

你是 Production E，收到後請 claim L440 並直接開始製作。

起手資訊
Repo：https://github.com/icelog-TU/character-recognition-dojo
Worktree：C:\Users\User\Documents\Codex\2026-08-03\a000-sop\worktrees\parallel-e
Package branch：codex/l440-complete-package
Unit：L440，普通單字課
title：運
newChars：["運"]
注音：ㄩㄣˋ
依 latest origin/main 的 ROLE_PRODUCTION_SOP 製作。以下為老師核准定稿。

邊界與依賴
本次 fetch 後 origin/main：
72b61a61 Integrate lessons L431-L435

正式邊界：L001-L435，最新字「助」，439個已學字。
最新正式複習：R052。
已核准但未 merged：L436補、L437修、L438習、L439練。

dependsOnLessons：["L436","L437","L438","L439"]
provisionalLearnedChars：["補","修","習","練"]
additional provisional chars outside coverage：None
allowedChars：上述439個正式已學字 + 四個 provisional 字 +「運」，共444字；請實際展開保存。
完全未學字：無。「賽」是下一課預訂字，本課不得提前使用。

R053/R054 與 L436-L439 的 ordered integration 是 Release blocker，不阻止本次平行製作。
Editor 本機 checkout 落後，local audit-state 顯示 L333；本 handoff 以直接讀取 origin/main production JSON 的結果為準。

五句定稿與配圖

L440-S01
text：教練叫我練習原地運球。
spokenText：教練叫我練習原地運球
displayLines：["教練叫我練習","原地運球。"]
focusChar：運
Han count：10
coverage：運1、練2、習1
imageNotes：
籃球場上，主角女孩雙腳站在同一位置，用一隻手反覆拍球，球正從地面彈起。generic 籃球教練在旁示意她留在原地、觀察拍球動作。
重點是「原地運球」，不可畫成抱球、投籃或一邊跑一邊運球。教練與固定老師、爸爸外貌不同。球衣不用號碼。
注意文字定稿是「教練叫我」，不是「教練教我」。

L440-S02
text：卡車運送木頭，用來修補木橋。
spokenText：卡車運送木頭用來修補木橋
displayLines：["卡車運送","木頭，用來","修補木橋。"]
focusChar：運
Han count：12
coverage：運1、修1、補1
imageNotes：
小溪旁的木橋有局部橋板破損，一輛載著修橋用木料的卡車停在岸邊施工區。generic 成年工人正在卸下木料、準備替換破損橋板。
卡車、木料、待修木橋三者都要清楚可見，讓運送用途直接連起來。修橋材料尺寸適合橋板，不畫成巨大原木壓在小橋上。沒有孩子進入施工區。
句子與配圖均為「木橋」，不是牧場。

L440-S03
text：運動場的燈壞了，工人來修理。
spokenText：運動場的燈壞了工人來修理
displayLines：["運動場的燈","壞了，","工人來修理。"]
focusChar：修
Han count：12
coverage：運1、修1
imageNotes：
明亮的學校運動場，一位 generic 成年維修人員在有護欄的工作平台上檢查場邊照明燈具，另一位工人在地面協助。旁邊有工具箱與簡單施工圍設，球場和燈具的關係清楚。
呈現正在修理場地照明，不是修車燈、教室燈或換球。使用穩固設備，不讓人物危險攀爬或讓孩子操作電器。

L440-S04
text：補習班就在運動場對面。
spokenText：補習班就在運動場對面
displayLines：["補習班就在","運動場對面。"]
focusChar：運
Han count：10
coverage：運1、補1、習1
imageNotes：
街道兩側的寬景構圖：一側是有跑道或球場的運動場，正對面是一樓可看見小班教室、桌椅與教師的補習班。固定媽媽帶主角女孩站在人行道上，指向對面的教室。
要讓「對面」一眼可見，不把兩處畫成相鄰或同一棟建築。以室內教學活動辨識補習班，不生成店名或招牌文字。人物在人行道，不停在車道中央。

L440-S05
text：跳高前，要先助跑。
spokenText：跳高前要先助跑
displayLines：["跳高前，","要先助跑。"]
focusChar：助
Han count：7
coverage：助1
imageNotes：
運動場的兒童跳高練習區，一位 generic 同學正朝低矮跳高橫桿助跑，身體略向前傾，尚未起跳；橫桿後方有厚軟墊，generic 體育教練站在側邊照看。
助跑動作是畫面主體，橫桿和軟墊清楚交代跑向哪裡。不可只畫成一般跑步、跨欄或已經在空中跳過橫桿。不需高度數字。

Coverage
L440 運：4／至少3，PASS
L439 練：2／至少2，PASS
L438 習：2／至少2，PASS
L437 修：2／至少2，PASS
L436 補：2／至少1，PASS
L435 助：1／至少1，PASS
前六課及更早字只作 allowed vocabulary，不列 coverage target。

Editor self-check
五句及全部 Stage 4 選項，逐字 allowed-character audit：PASS。
spokenText 與原句 Han-only sequence 一致。
displayLines join 完全等於 text，每行≤6可見字元，含標點。
focusChar 均出現在句中。
五句7–12漢字，無句長例外。

Stage 4
固定順序，每句恰好使用一次。
所有索引為零起算 Han-only，已機械檢查。

Game | type | sentenceId | targetChar | targetCharIndex | 自審
G01 | find-character | L440-S04 | 運 | 5 | PASS
G02 | teach-character | L440-S02 | 運 | 2 | PASS
G03 | missing-character | L440-S01 | 運 | 8 | PASS
G04 | partial-order | L440-S03 | 修 | 10 | PASS
G05 | choose-pronunciation | L440-S05 | 助 | 5 | PASS

G01
使用 L440-S04 原句字元作點選內容。

G02
prefixText：卡車
targetChar：運
suffixText：送木頭用來修補木橋
prefixSrc：/assets/lessons/L440/audio/L440-G02-prefix.m4a
suffixSrc：/assets/lessons/L440/audio/L440-G02-suffix.m4a
依上述精確文字分別生成，不從完整句音剪接。

G03
missingIndexes：[8]
options：
- id：L440-G03-O1；text：打；correct：false
- id：L440-G03-O2；text：運；correct：true
- id：L440-G03-O3；text：傳；correct：false
三張單漢字卡，1正解＋2干擾。

G04
missingIndexes：[8,9,10,11]
對應字：人、來、修、理
options：
- id：L440-G04-O1；text：修；correctOrder：2
- id：L440-G04-O2；text：人；correctOrder：0
- id：L440-G04-O3；text：理；correctOrder：3
- id：L440-G04-O4；text：來；correctOrder：1
correctOrder 為 missingIndexes 內的位置。
四張單漢字卡，索引與排序映射：PASS。

G05
- id：L440-G05-O1
  text：跳高前，要先助跑。
  spokenText：跳高前要先助跑
  correct：true
  audio：引用 L440-S05 正式句音。

- id：L440-G05-O2
  text：跳高前，要先起跑。
  spokenText：跳高前要先起跑
  correct：false
  audio：/assets/lessons/L440/audio/L440-G05-wrong-one.m4a

- id：L440-G05-O3
  text：跳高前，要先快跑。
  spokenText：跳高前要先快跑
  correct：false
  audio：/assets/lessons/L440/audio/L440-G05-wrong-two.m4a

三個選項均7漢字，錯誤句各與正解相差1字。
選項 allowed audit：PASS。依指定 spokenText 分別生成完整錯誤句音訊。

本課特殊注意
1. 「運」讀 ㄩㄣˋ；standalone charAudio：char-u904b.m4a。
2. S01 原地運球、S02 木料運送、S03/S04 運動場，須各自表達正確語義。
3. S04 以空間位置和教室活動表現補習班，不依賴招牌文字。
4. S05 是起跳前的助跑，畫面不要跳過這個動作。
5. 本課無文字或數字入圖例外。畫風與角色依 latest visual cast SOP，L058 僅作畫風參考。

交付要求
依 ROLE_PRODUCTION_SOP claim、製作 package、commit/push 指定 branch：
- curriculum-workflow/lesson-requests/L440.json
- curriculum-workflow/generated/L440-generation-packet.md
- curriculum-workflow/drafts/L440-draft.json
- public/assets/lessons/L440/images/
- public/assets/lessons/L440/audio/
- docs/PARALLEL_LESSON_REGISTRY.md 的 L440 ownership／依賴／狀態

確認指定 worktree 與 ownership 可用，依 SOP 起手檢查並完成 registry claim，再直接製作。若 worktree 有未完成工作、ownership 衝突或 audit 失敗，停止回報。

交包前，pushed branch 必須通過：
npm run curriculum:package-intake -- --unit L440 --ref origin/codex/l440-complete-package

依賴仍未 merged 時，通過後回報 dependency-blocked-asset-complete。
最終回報完整 tip SHA、package-intake 結果、逐張圖片 style/cast 結果與未完成項。

如附 pre-merge preview，使用實際完整 SHA：
https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L440&ref=<full-SHA>
標示：pre-merge package preview，非 main 正式 review queue。
# Teacher-approved Production E handoff

【Production E Handoff｜L446「音」】

Production E 收到後，請 claim L446 並開始製作完整 package。

起手資訊
- Repo: https://github.com/icelog-TU/character-recognition-dojo
- Slot: Production E
- Worktree: C:\Users\User\Documents\Codex\2026-08-03\a000-sop\worktrees\parallel-e
- Package branch: codex/l446-complete-package
- Unit: L446 / normal lesson
- order: 446
- title: 音
- newChars: ["音"]
- zhuyin: {"音":"ㄧㄣ"}
- requiredRounds: 5
- charAudio: /assets/lessons/L446/audio/char-u97f3.m4a

邊界與依賴
- 核實 origin/main: a53168c6 Repair L395 G05 counting pronunciation
- 正式 production boundary: L438「習」，442 個已學字。
- 已核准 provisional sequence:
  L439 練 → L440 運 → L441 賽 → L442 機 → L443 操 → L444 器 → L445 樂。
- 本課定稿及 Stage 4 options 實際使用：
  dependsOnLessons: ["L441","L442","L443","L444","L445"]
  provisionalLearnedChars: ["賽","機","操","器","樂"]
- L439/L440 是前序 Release 順序依賴，本課文字未使用練、運。
- allowedChars：正式 L001–L438 全部 newChars + 上述五字 + 音，共 448 字；請在 request 展開完整字集。
- Coverage 外額外 provisional 字：無。
- 全部文字與 options 未學字：無，allowed audit PASS。
- 下一課才教「拍」，後續預訂「歌、唱」；不得提前加入本課文字。
- 依賴未合併只阻止 Release，不阻止 Production 製作 package。

五句定稿與配圖

L446-S01
text: 這個樂器的聲音真好聽。
spokenText: 這個樂器的聲音真好聽
focusChar: 音
displayLines: ["這個樂器的","聲音真好聽。"]
zhuyinOverrides: {"2":"ㄩㄝˋ"}
Han count: 10
coverage: 音1、樂1、器1
imageNotes:
明亮的樂器展示場所，一位 generic adult musician 正在吹奏一支竹笛。主角女孩與固定主角媽媽在旁聆聽，女孩指向正在吹奏的那支笛子，向媽媽說這個樂器的聲音好聽。
畫面必須讓「這個」明確指向單一樂器，不畫成所有樂器一起演奏。笛子、吹奏者與女孩的指向要清楚；不靠音符、擬聲字或文字標籤表達聲音。

L446-S02
text: 我們跟著音樂做體操。
spokenText: 我們跟著音樂做體操
focusChar: 音
displayLines: ["我們跟著音樂","做體操。"]
zhuyinOverrides: {"5":"ㄩㄝˋ"}
Han count: 9
coverage: 音1、樂1、操1
imageNotes:
學校活動室，固定老師帶著主角女孩和幾位 generic classmates 做簡單體操。旁邊有正在播放音樂的小音響，孩子們跟著老師同步抬手、側彎。
構圖需同時看清播放設備與一致的體操動作，不畫成自由玩耍或正式體操比賽。老師身份與主角媽媽區分，generic classmates 不冒用小月、小光。

L446-S03
text: 操作機器前，先聽老師說明。
spokenText: 操作機器前先聽老師說明
focusChar: 操
displayLines: ["操作機器前，","先聽老師","說明。"]
Han count: 11
coverage: 操1、機1、器1
imageNotes:
學校製作教室，固定老師站在一台有透明外罩的桌上型 3D 列印機旁，指著操作區講解。主角女孩與 generic classmates 站在旁邊專心聽，雙手沒有碰機器。
時間點是操作之前的說明，機器尚未啟動，不畫成孩子已動手操作或老師在修理。設備外觀清楚，但螢幕和按鍵不放可讀文字或數字。

L446-S04
text: 看比賽時，把手機的聲音關掉。
spokenText: 看比賽時把手機的聲音關掉
focusChar: 音
displayLines: ["看比賽時，","把手機的","聲音關掉。"]
Han count: 12
coverage: 音1、機1、賽1
imageNotes:
安靜的下棋比賽現場，generic child contestants 坐在棋桌兩側專心比賽。主角女孩與固定主角爸爸在觀眾區，爸爸正操作手機側邊靜音開關，女孩輕聲提醒。
主要動作是把手機調成靜音，手機仍然開機；不要畫成關閉整支手機、關掉畫面或拿手機播放比賽。手機畫面朝向爸爸，不需要畫出系統文字、通知或數字。棋子可用無字的黑白棋子。

L446-S05
text: 山洞裡傳來我的回音。
spokenText: 山洞裡傳來我的回音
focusChar: 音
displayLines: ["山洞裡傳來","我的回音。"]
zhuyinOverrides: {"3":"ㄔㄨㄢˊ"}
Han count: 9
coverage: 音1
imageNotes:
白天，主角女孩與固定主角爸爸站在寬敞、明亮、地面平穩的山洞入口。女孩剛向洞內喊過話，現在側耳聆聽，神情驚喜；爸爸在旁陪伴。
讓岩壁與洞內縱深清楚可見，可用少量無文字的弧線暗示聲音返回。洞內不要藏另一個人、動物或怪物，避免把回音誤解成別人的回答；不畫黑暗探險、危險攀爬或擬聲文字。

Coverage 與文字自審
音4/≥3、樂2/≥2、器2/≥2、操2/≥2、機2/≥1、賽1/≥1，全部 PASS。
Han counts: 10、9、11、12、9；無超長例外。
spokenText 全部等於 text 的 Han-only sequence。
displayLines 全部原樣拼回 text，每行含標點最多 6 個可見字元。
focusChar、讀音 override 索引及全部 Stage 4 options 已機械核對。

Stage 4 資料
固定順序，每句恰好使用一次。
index 全部為零起算 Han-only index。

| Game | Type | sentenceId | targetChar | targetCharIndex | missingIndexes | 自審 |
| G01 | find-character | L446-S05 | 音 | 8 | 不適用 | PASS |
| G02 | teach-character | L446-S01 | 音 | 6 | 不適用 | PASS |
| G03 | missing-character | L446-S02 | 音 | 4 | [4] | PASS |
| G04 | partial-order | L446-S03 | 操 | 0 | [0,1,2,3] | PASS |
| G05 | choose-pronunciation | L446-S04 | 音 | 9 | 不適用 | PASS |

G02
- prefixText: 這個樂器的聲
- targetChar: 音，ㄧㄣ
- suffixText: 真好聽
- prefixSrc: /assets/lessons/L446/audio/L446-G02-prefix.m4a
- suffixSrc: /assets/lessons/L446/audio/L446-G02-suffix.m4a
- prefix 裡的「樂器」讀 ㄩㄝˋ；兩段音訊依精確片段生成。

G03 options
- {"id":"L446-G03-O1","text":"聲","correct":false}
- {"id":"L446-G03-O2","text":"音","correct":true}
- {"id":"L446-G03-O3","text":"樂","correct":false}
- 三個單一漢字選項；挖掉「音樂」的「音」。

G04
- missingIndexes: [0,1,2,3]
- 對應正確字序: ["操","作","機","器"]
- options:
  {"id":"L446-G04-O1","text":"機","correctOrder":2}
  {"id":"L446-G04-O2","text":"操","correctOrder":0}
  {"id":"L446-G04-O3","text":"器","correctOrder":3}
  {"id":"L446-G04-O4","text":"作","correctOrder":1}
- 四張均為單一漢字卡，correctOrder mapping PASS。

G05
- correct:
  text: 看比賽時，把手機的聲音關掉。
  spokenText: 看比賽時把手機的聲音關掉
  correct: true
  audio: 使用 L446-S04 完整句音訊
- wrong-one:
  text: 看比賽時，把手機的聲音打開。
  spokenText: 看比賽時把手機的聲音打開
  correct: false
  audio: /assets/lessons/L446/audio/L446-G05-wrong-one.m4a
- wrong-two:
  text: 看比賽時，把手機的畫面關掉。
  spokenText: 看比賽時把手機的畫面關掉
  correct: false
  audio: /assets/lessons/L446/audio/L446-G05-wrong-two.m4a
- 三句均為 12 Han；兩個錯誤句各替換 2 字，allowed audit PASS。
- wrong options 各自生成完整音訊。

本課特殊注意
1. S01 必須保留「這個」及明確指向，不得改回泛稱所有樂器的舊稿。
2. S01「樂器」、S02「音樂」的樂均讀 ㄩㄝˋ，包含 G02 prefix；S05「傳來」讀 ㄔㄨㄢˊ。實際音訊須與 override 一致。
3. S04 是靜音，不是關機；S05 是自己的回音，不是另一個聲音來源。
4. 固定家庭、老師與 generic 人物依 visual cast SOP；L058 僅作畫風參考。
5. 本課沒有圖片文字或數字入圖例外。

交付要求
依 ROLE_PRODUCTION_SOP 製作完整 package，先將上述定稿資料落入：
- curriculum-workflow/lesson-requests/L446.json
- curriculum-workflow/generated/L446-generation-packet.md
- curriculum-workflow/drafts/L446-draft.json
資產：public/assets/lessons/L446/
音訊工作檔：curriculum-workflow/audio-inbox/L446/

完成後 commit/push package branch；最後交包前 pushed branch 必須通過：
npm run curriculum:package-intake -- --unit L446 --ref origin/codex/l446-complete-package

回報完整 SHA、package-intake 結果及未完成項。
完整 package 已完成但依賴未合併時，回報 dependency-blocked-asset-complete。

合併後固定審閱網址：
https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L446&ref=main
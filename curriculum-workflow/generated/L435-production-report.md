# L435「助」Production E 製作報告

狀態：dependency-blocked-asset-complete
分支：codex/l435-complete-package
起始及最新 fetch 核對 origin/main：f4bc071d4d14a15bd0e2927a710f197110da6789，正式課程到 L420「教」，424 個已學字。
正式 handoff 鎖定 allowedChars：424 + 自己主由意願互 + 助，共 432 字；無「求」。

## 交付與驗證

- request、draft、含 final records 的 generation packet、原始 handoff、5 張 1024×1024 WebP、10 個 mono AAC 44100 Hz M4A、alignment report 與 hash/QA report 齊全。
- 全課 assets 1268407 bytes（約 1.21 MiB）；五圖各 158002、174806、216284、172640、191834 bytes。只交付接受的 final WebP/M4A。
- tools:check、ai:check：PASS。curriculum:audit-state：PASS；L435 尚未在 production 的提示符合待整合狀態。
- request/draft/packet 文案、allowedChars、displayLines、Han-only index 與 Stage 4 五句各用一次：PASS。
- 五句漢字數 10／11／7／11／10。Coverage 助3、互2、願2、意2、由1、主1。
- 本課隔離 validate:production：PASS；assets:audit --strict：PASS，5 圖／10 音，零警告。測試暫時輸入皆 finally 還原。
- 全部音檔可解碼；G05 正確音使用 S03，三音檔 mean volume 為 -16.9／-16.4／-17.1 dB，差 0.7 dB。主字音 FFprobe duration 1190ms、peak -2dB。
- 九段 final M4A 的句子／片段／選項逐字 timing 齊全，80–900ms、不重疊，末字結束避開尾端靜音。十段 AI 聽音結果見 QA JSON，不等同人工驗收。
- pushed-branch package-intake --strict：待最終 push 後補記。
- 全 repo npm run verify 留待 Release 整合前置課後執行。

## 逐圖 style-lock / cast

| 圖片 | style-lock | cast | 畫意驗收 |
|---|---|---|---|
| S01 | PASS | PASS | 小光以兩組積木教加法，女孩跟著操作；圓眼鏡、白衫深藍背心符合專屬 reference。 |
| S02 | PASS | PASS | 女孩與兩位 generic 同學合畫同一張快完成的海報，各有畫筆／傳遞畫筆；無可讀字。 |
| S03 | PASS | PASS | 只有兩名 distinct generic 成人，買方指車詢問，車主留著鑰匙擺手拒售，無交易。 |
| S04 | PASS | PASS | 女孩在家、小月在旅宿，各自寫信且桌上有來信；小月髮夾髮型紫衣符合 reference，兩地明確分隔。 |
| S05 | PASS | PASS | 媽媽開放手勢讓女孩挑台灣自助餐熟食，店員在檯後；你指女孩，無碰熱盤。 |

built-in imagegen 生成，實際 final WebP 與完整 L058-S01–S05、refined L115-S01/S02、L118-S02、L119-S01、L128-S03、家庭 L154-S01/L162-S04/L163-S02 及小光／小月 reference 並排檢視。L058 僅作畫風參考。
重用搜尋中的 L384-S01 是單向校園送信，L392-S04 海報含文字且動作不同，故採新構圖。
S02 初稿男同學像固定你，改短卷髮紫衣；S03 初稿多了母女且成人像爸爸，移除並改為禿頭眼鏡買方與灰髮鬍子車主；S04 去除漂浮信封圖示／虛線。未採用稿未入包。approved imageNotes 未改寫，最終 prompt 補充保存於 request/draft/packet。

## 音訊及 timing

使用 repo gpt-4o-mini-tts coral 標準流程及 assets:audio。G02 prefix「我們互」、suffix「合作把海報畫完」分別獨立生成，不含主字助、不從整句剪接。G05 wrong-one 初次 ASR 認成賣，整段重生後為買；wrong-two 為「車主很願意賣車」。
只移除最後實測語音之後的多餘靜音，保留 250ms 衰減餘裕，未切音節或拼字音。最後 M4A 以 whisper-1 AI alignment，繁簡字等價正規化；S01 曾轉錄家法，獨立 AI 聽音確認加法後，使用加法語境重新轉錄吻合，沒有直接以同音錯字取代。
波形修正 G02 prefix 們／互邊界（互原 ASR 為 1ms）、S05 由前停頓、wrong-two 很前停頓及各段末字尾界，逐項記錄在 alignment JSON。
gpt-audio 十段複查，專項確認助第四聲、S01 加法、S04 相第一聲及信第四聲、G05 買第三聲。早期 AI 回覆曾含不相關解說，S04 複查提示也曾誤寫信第一聲，已更正為第四聲並重新評估；QA 僅保存最終相符結果，不能冒充人工聽音。

## Browser QA：範圍與限制

本機隔離 Vite fixture，僅記憶體加入本課、base 前置通關與 provisional 句子注音；未修改正式帳號、production JSON 或共享進度。
第一階段字音播放完成並通關。第二階段呈現三張助及小／光／願三張舊字，點助後顯示已找到 1/3；未宣稱完整第二階段通關。因前課尚未整合，隔離 fixture 的願字卡無全域注音；Release 整合前課後須再核對。
第三階段五句依序點播，播放結束按鈕解除鎖定，顯示「句子都聽完了」與通關。切至 390×844 viewport，G01 點助正確；G02 顯示完整核定句、助紅框及錄音提示，因缺少實體手機聲音通道，以介面略過此題。G03 補助正確，G04 依序點信／給／對／方後出現下一題。G05 三個讀音按鈕（小青蛙／小狐狸／小熊）皆已逐一點播；只確認 UI 操作，未回傳可聽音訊。console 記錄三筆非同步 listener 通道關閉錯誤，未見媒體解碼錯誤。
遠端工具未提供電腦聲音回傳與實體手機麥克風，因此人工連續聽音、逐音節高亮同步、手機錄音提示音及錄後串接仍未完成；最終領獎導覽亦未驗收。依 SOP browser fallback 保留明確限制，技術及 AI 檢查不冒充人工 PASS；老師主觀審查維持 post-merge。

## Release 依賴與交接

詞彙依賴 L428、L429、L430、L431、L432、L433、L434；Release 仍須按順序整合所有前課至 L434。最新 main L420，因此 L421–L434 尚未整合。R051/R052 尚未整合，須在 L420 後，涵蓋 L391–L420。
L435 後、L436 前另需 R053/R054，涵蓋 L406–L435；屬 Editor/Release 另案，非本包待補資產。
Production 不 merge main，不修改 production JSON、planner、ledger 或部署；原有 ignored 音訊中間檔及快取保留。

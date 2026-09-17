# L446「音」Production E 製作報告

狀態：dependency-blocked-asset-complete
分支：codex/l446-complete-package
製作鎖定 base：cdf73c5e30447a78c5671b721bef92dc5d54a39b，正式課程到 L438「習」，442 個已學字。
正式 handoff 鎖定 allowedChars：442 + 賽機操器樂 + 音，共 448 字；未使用拍、歌、唱。

## 交付與驗證

- request、draft、含 final records 的 generation packet、原始 handoff、5 張 1024×1024 WebP、10 個 mono AAC 44100 Hz M4A、alignment report 與 hash/QA report 齊全。
- pushed ref `origin/codex/l446-complete-package` 在固定資產 commit `be84c26b5d1c27601c79751621d33f41bb2f0904` 執行 strict package intake：PASS；5 images、10 audio、五種 Stage 4 類型齊全。
- 全課 assets 1058956 bytes；五圖各 112666、124050、145690、122738、146232 bytes。只交付接受的 final WebP/M4A。
- request/draft/packet 文案、448 字 allowedChars、displayLines、Han-only index 與 Stage 4 五句各用一次：PASS。
- 五句漢字數 10／9／11／12／9。Coverage 音4、樂2、器2、操2、機2、賽1。
- 全部音檔可解碼；G05 三音檔 mean volume 為 -18.7／-19／-17.9 dB，差 1.1 dB。
- 九段 final M4A 的 timing 齊全，80–900ms、不重疊，末字結束避開尾端靜音。十段 AI 聽音結果見 QA JSON，不等同人工驗收。

## 逐圖 style-lock / cast

| 圖片 | style-lock | cast | 畫意驗收 |
|---|---|---|---|
| S01 | PASS | PASS | 一名 generic 成人只吹一支竹笛；固定女孩明確指向該笛，固定媽媽在旁聆聽，其他樂器保持靜止。 |
| S02 | PASS | PASS | 固定老師與四名孩子同步側彎，小音響清楚可見；主角女孩穩定，generic 同學不冒用小月／小光。 |
| S03 | PASS | PASS | 與 S02 同一老師指向有透明外罩且未啟動的 3D 列印機；孩子保持距離且雙手未碰機器。 |
| S04 | PASS | PASS | 無字黑白棋比賽與觀眾區分明；固定爸爸操作亮屏手機側邊控制，固定女孩輕聲提醒。 |
| S05 | PASS | PASS | 固定父女在明亮安全洞口側耳聽回音；洞內無其他聲音來源，只留無文字回音弧線。 |

built-in imagegen 生成；完整 final prompts 保存在 request/draft/packet。五張 final 與 L058 畫風錨點、refined 比例範例及家庭角色錨點並排檢視。S04 初稿含橘色聲音符號且手指落在螢幕，已拒絕並編修為無符號、手指操作側邊靜音控制；未採用稿未入包。

## 音訊及 timing

使用 repo gpt-4o-mini-tts coral 標準流程及 assets:audio。G02「這個樂器的聲」與「真好聽」分別完整生成，不從句音剪接；兩個 G05 wrong options 依定稿全文各自生成。
只移除最後實測語音後的多餘靜音並保留約 250ms，沒有切音節或拼字音。final M4A 以 whisper-1 對齊；wrong-two「畫面」的 1ms span 依連續字詞區間修正，細節保存於 alignment JSON。gpt-audio 專項確認 音 ㄧㄣ、樂 ㄩㄝˋ、傳 ㄔㄨㄢˊ。

## 老師標記音訊修復

- 原審查 commit：`be84c26b5d1c27601c79751621d33f41bb2f0904`。
- 標記：L446-S04 audio「聲音兩個字發音不對，變成審音」。
- 僅重製完整 L446-S04 句音；G05 正確選項沿用同一修復檔，其他圖片及音訊未更動。
- 三個候選均逐一檢查；比較結果選用 candidate 3。final M4A 聽音檢查辨識為「聲音」，確認「聲」ㄕㄥ一聲且保留完整 ㄥ 韻尾，「音」ㄧㄣ一聲，沒有審音／省音。Whisper 逐字轉錄吻合，timings 已重新產生。
- 技術檢查不取代老師人工複聽；新 commit 仍需老師確認。

## Browser QA：範圍與限制

Local isolated Vite fixture; base prerequisites were seeded in memory and provisional sentence zhuyin supplied only in the fixture. Stage 1 character playback ended and passed. Stage 2 displayed exactly three 音 cards plus 樂、這、個 distractors; all three 音 cards were selected, 已找到 3/3 and 全部找到了 appeared. Stage 3 played all five sentence buttons through ended and displayed 句子都聽完了. Sentence zhuyin overrides rendered 樂 as ㄩㄝˋ in S01/S02 and 傳 as ㄔㄨㄢˊ in S05. At 390×844, G01 音 was selected correctly; G02 displayed approved S01 with 音 at the correct index and was skipped at the physical microphone step; G03 音 was selected correctly; G04 操作機器 was ordered correctly; all three G05 reader buttons were activated. Browser console returned no warnings or errors. Because L445 is not integrated, the Stage 2 distractor 樂 had no global zhuyin in the isolated fixture; Release must recheck after dependencies merge. The remote browser has no audible computer-output return or physical-phone microphone. Human continuous listening, syllable-highlight synchronization, recording/ding/post-record sequence, final G05 selection, reward walkthrough and teacher subjective review remain unperformed.

## Release 依賴與交接

Release 必須先依序整合 L439–L445。request 的實際 provisional 文字依賴為 L441–L445；L439/L440 是前序可玩路徑依賴。這些不是本包缺件。
Production 不 merge main，不修改 production JSON、planner、ledger 或部署；ignored 音訊中間檔及快取保留。

修復後固定資產 SHA 將在資產 repair commit 後補入。Pre-merge 預覽必須改用新的完整 SHA。

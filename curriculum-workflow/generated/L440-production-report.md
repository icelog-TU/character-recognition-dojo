# L440「運」Production E 製作報告

狀態：dependency-blocked-asset-complete
分支：codex/l440-complete-package
製作鎖定 base：72b61a615628b25a2c78b63c9c400f9adcca946f。交包前最新 fetch origin/main：c243d7d3（R053/R054、L436–L438 已整合）；正式單字課到 L438「習」，442 個已學字。
正式 handoff 鎖定 allowedChars：439 + 補修習練 + 運，共 444 字；未使用「賽」。

## 交付與驗證

- request、draft、含 final records 的 generation packet、原始 handoff、5 張 1024×1024 WebP、10 個 mono AAC 44100 Hz M4A、alignment report 與 hash/QA report 齊全。
- 全課 assets 1472952 bytes；五圖各 195100、242602、232528、208944、183002 bytes。只交付接受的 final WebP/M4A。
- request/draft/packet 文案、444 字 allowedChars、displayLines、Han-only index 與 Stage 4 五句各用一次：PASS。
- 五句漢字數 10／12／12／10／7。Coverage 運4、練2、習2、修2、補2、助1。
- 全部音檔可解碼；G05 三音檔 mean volume 為 -18.2／-18.7／-17.4 dB，差 1.3 dB。
- 九段 final M4A 的 timing 齊全，80–900ms、不重疊，末字結束避開尾端靜音。十段 AI 聽音結果見 QA JSON，不等同人工驗收。
- tools:check、ai:check、curriculum:audit-state：PASS。隔離 validate:production：PASS；assets:audit --strict：PASS，5 圖／10 音、零警告。
- pushed-branch package-intake --strict：PASS，5 圖／10 音、五種 Stage 4 類型完整、零 blocking defect；驗證固定資產 commit 25954642fb5d0c1a83a200ab97c622bd8a0bcad7。

## 逐圖 style-lock / cast

| 圖片 | style-lock | cast | 畫意驗收 |
|---|---|---|---|
| S01 | PASS | PASS | 固定主角女孩雙腳留在原位單手運球；捲髮灰髮綠衣 generic 教練與固定成人不同。 |
| S02 | PASS | PASS | 卡車、合宜木料、破損溪上木橋與兩名成年工人清楚；沒有孩子進施工區。 |
| S03 | PASS | PASS | 運動場照明、護欄工作平台、地面協助工人與圍設工具完整，動作安全。 |
| S04 | PASS | PASS | 街道兩側清楚呈現運動場與可見小班教室；固定媽媽和女孩在人行道指向對面，無招牌字。 |
| S05 | PASS | PASS | 最終修正版只有一名 generic 短髮男孩朝低桿助跑與一名教練；厚軟墊清楚，尚未起跳。 |

built-in imagegen 生成；完整 final prompt 保存在 request/draft/packet。五張 final 與 L058 全組畫風 reference、refined reference 及家庭角色 reference 並排檢視。S05 初稿多出三名背景兒童且跑者近似固定主角，已編修為 generic 男孩並移除所有多餘兒童；未採用稿未入包。

## 音訊及 timing

使用 repo gpt-4o-mini-tts coral 標準流程及 assets:audio。G02「卡車」與「送木頭用來修補木橋」分別完整生成，不從句音剪接。初版 suffix 的「送」辨識不穩，整段重生後專項確認 ㄙㄨㄥˋ；standalone「運」整段重生後專項確認 ㄩㄣˋ。G05 wrong-one 專項確認「起」第三聲。
只移除最後實測語音後的多餘靜音並保留約 250ms；沒有切音節或拼字音。final M4A 以 whisper-1 對齊；S03 燈、壞、了、工、人、來與句尾依波形修正，細節保存於 alignment JSON。

## Browser QA：範圍與限制

Local isolated Vite fixture; base prerequisite completion and provisional sentence zhuyin were supplied only in memory. Stage 1 character playback ended and passed. Stage 2 displayed exactly three 運 cards plus 教、叫、練 distractors; all three 運 cards were selected and the UI displayed 全部找到了. Stage 3 played all five sentence buttons through ended, re-enabled each button, displayed 句子都聽完了 and passed. At 390×844, G01 運 was selected correctly; G02 displayed the approved S02 with 運 at the correct index and the recording prompt; G03 運 was selected correctly; G04 人來修理 was ordered correctly; all three G05 reader buttons were activated. Browser inspection caught the base-data 燈 display ㄉㄥㄥ and the final record now supplies zhuyinOverrides index 4 = ㄉㄥ. Because L439 is not yet integrated, 練 had no global zhuyin in the isolated fixture; Release must recheck after dependencies merge. The remote browser tool has no audible computer-output return or physical-phone microphone. Human continuous listening, syllable-highlight synchronization, phone recording/ding/post-record sequence, final reward walkthrough and teacher subjective review remain unperformed.

## Release 依賴與交接

最新 main 已整合 R053/R054 及 L436–L438。Release 仍須先整合 L439「練」；這些是 ordered integration blocker，不是本包缺件。
Production 不 merge main，不修改 production JSON、planner、ledger 或部署；ignored 音訊中間檔及快取保留。

固定資產 SHA：25954642fb5d0c1a83a200ab97c622bd8a0bcad7。後續 commit 僅補 latest-main recheck、intake 與 registry 紀錄。

Pre-merge 圖片預覽（非正式 main）：https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L440&ref=25954642fb5d0c1a83a200ab97c622bd8a0bcad7
音訊預覽：https://icelog-tu.github.io/character-recognition-dojo/tools/audio-review.html?unit=L440&ref=25954642fb5d0c1a83a200ab97c622bd8a0bcad7
本包尚未 merge/deploy，不宣稱已正式上線。

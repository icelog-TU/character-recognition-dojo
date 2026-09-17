# L429「己」Production D package

Status: dependency-blocked-asset-complete
Branch: codex/l429-complete-package
Pushed ref: origin/codex/l429-complete-package

## 內容與依賴

五句定稿、Stage 4 五題、己 ㄐㄧˇ字卡、五張 WebP、十段 M4A、九組最終 alignment 已完成。S04 為「試穿這條褲子」。S05 隊長的長使用 index 8 ㄓㄤˇ。G02 精確切分我想自／己／一個人在房間看書；G05 兩個錯誤選項各自生成完整音檔。

核准製作基底 4eec51781af66eee3b0a9b0b5afe0e0497a8d121（L415 解），419 learned + 組隊各輪員自 + 己 = 426 allowed characters。此核准邊界保留。最新 fetch 快照 f4bc071d4d14a15bd0e2927a710f197110da6789，正式到 L420 教；仍待 L421-L428 按序整合，以及 L420 後 R051/R052（L391-L420）。直接文字依賴 L423-L428。主／由未納入。本包未合併 main；production JSON、planner、ledger 整合由 Release 負責。

## 逐圖審核

| 圖 | style-lock | cast | 核對內容 |
|---|---|---|---|
| S01 | PASS | PASS | 固定女孩與媽媽；自製摺紙花 |
| S02 | PASS | PASS | 女孩開門向走廊媽媽表達獨處閱讀 |
| S03 | PASS | PASS | 女孩自我介紹；generic 新組員不冒充固定角色 |
| S04 | PASS | PASS | 女孩、媽媽、眼鏡綠圍裙店員；褲子與空試衣間 |
| S05 | PASS | PASS | 固定女孩與小月交接同一條隊長臂帶 |

已實際比較 L058 全組 style-only、L115/L118/L119/L128 refined references、L154/L162/L163 家庭及小月 reference。S05 初稿背景男孩近似既有「你」造型，已退回並只修改該 generic 配角為捲髮酒紅吊帶褲；最終圖重新檢查通過。退回初稿未提交。無文字或數字入圖例外。每張 1024×1024、最大 215566 bytes。

## 語音與技術檢查

AI coral 語音，標準 assets:audio 處理、assets:align:ai 對齊；十段皆 AAC 44100 Hz mono、解碼 PASS。G05 平均音量差 1.5 dB。全部資產 1309595 bytes。九組逐字轉錄對齊 PASS；五句 timing 數量、順序、範圍及 80–900ms 字長 PASS。allowed、coverage、斷行、Han-only indexes、G02 exact split、G03/G04 options、G05 near misses 全部 PASS。

對齊暫時擴充真實繁簡等價（如 组組／员員／轮輪／队隊／试試／裤褲／条條／纸紙／当當／长長）；無同音字強制替換。小月／小光／輪流／隊長提示僅用於 S05/G05；自己／自我／自動／自然／自在提示僅用於 G02-prefix。prefix 曾被辨作「字」，整段重新生成後精確辨為「我想自」；wrong-two 首兩字曾不清楚，整句重生後精確對齊「你和小月輪流當隊長」。無剪接、抽取或補音。共享 alignment script 與 production JSON 均已還原。

validate:production：基底全量及 L429 隔離驗證 PASS。tools:check、ai:check、起手 audit-state PASS。還原預覽後 audit-state PASS（僅預期 L429 尚未進 production 的資料夾警告）。verify skipped: dependency-blocked, shared state left for Release。

## 瀏覽器 QA 範圍

390×844 手機預覽：己字卡及五句完成播放狀態；S02–S05 觀察到高亮、顯示分行可容納。G01 正確圈選；G03 選己與 G04 這條褲子排序完成後均出現下一題。G05 三選項皆逐一觀察播放→停止狀態，長顯示 ㄓㄤˇ。

G02 到達紅框與長按提示，但可用控制無法維持長按；實際人聲錄音及串接回放未實測。跳題未前進，切換本機 fixture 期間出現暫時 HMR／overlay 錯誤；重新載入後用隔離 G03–G05 預覽完成後續檢查。G05 最終作答正誤回饋未在清理前確認。未宣稱主觀聽音、發音及影音同步人工 QA 通過。依 SOP tooling fallback 交付技術驗證完整包，保留以上範圍供合併後審查。

預覽伺服器已停止、瀏覽器尺寸還原、暫存 production JSON 已還原；未將隔離 fixture 提交。原始 MP3 在 Git ignore 的 curriculum-workflow/audio-inbox/L429/ 保留。既有共用 stash 未操作。

## 遠端驗收 checkpoint

75269e6afba0f9a8b134ffc2d72de06933295ce5：origin/codex/l429-complete-package 的 strict package-intake PASS，無警告。後續 checkpoint commit 僅記錄驗收與 registry SHA；最終 tip 另於交接回報並重跑同一 gate。

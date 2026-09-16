# L434「互」Production D package

Status: dependency-blocked-asset-complete

Branch: codex/l434-complete-package
Pushed ref: origin/codex/l434-complete-package

## 定稿與依賴

五句與 Stage 4 完全採正式交接。新字互 ㄏㄨˋ。431 allowed chars = f4bc071d4d14a15bd0e2927a710f197110da6789 的 424 learned + 自己主由意願 + 互，已在 request 展開完整 array。直接依賴 L428-L433；自為額外 allowed dependency，非 coverage target。Coverage 互3、願3、意3、由2、主1、己1 PASS。追／介／紹未加入。

最新核對 main 仍為上述 SHA，正式到 L420 教、review 到 R050。須等待 L421-L433 依 playable order 整合，及 L420 後 R051/R052（L391-L420）。這些屬 Release blocker；未合併 main。本課不含 L435 或 R053/R054。

G01 S01 互 index5；G02 S02 互 index4，專用音檔「我和小月」／「相畫對方」；G03 S05 互 index2；G04 S03 主 index3，四卡依序來動手做，缺格 [6,7,8,9]；G05 S04 第二個願 index2，正確音檔引用 S04。兩個錯誤選項各差一字、各從完整句生成。

## 圖片逐張核對

使用 built-in image_gen；完整 prompt 與 source 記於 L434-image-prompts.json。實際最終 WebP 與 L058 全五圖、L115/L118/L119/L128 refined examples、L154/L162/L163 家庭、小月 reference 並排檢查；老師另對照已合併 L420-S01 的低馬尾、鼠尾草綠 cardigan 造型。

| 圖 | style-lock | cast | 語意核對 |
|---|---|---|---|
| S01 | PASS | PASS | 固定女孩持車、固定你男孩持機器人，尚未交換 |
| S02 | PASS | PASS | 女孩與小月各畫對方，兩紙清楚，無姓名簽名 |
| S03 | PASS | PASS | 女孩提議、固定男孩準備放積木，屋頂未完工 |
| S04 | PASS | PASS | 老師蹲下開放詢問、女孩留在場邊思考，背景 generic 同學 |
| S05 | PASS | PASS | 女孩與三位 distinct generic 同學圍圈，一顆球在空中 |

本次沒有因畫風或角色偏移退回的圖片草稿。五張均為 1024×1024 WebP、各低於 250 KiB，未提交來源 PNG。S02/S04/S05 從原始生成圖調整 WebP 壓縮品質後重新檢查。

## 音訊與 timing

十段 AI coral 音訊（字卡、五句、G02 前後段、G05 兩錯誤選項）均按標準 assets:audio 處理為 mono AAC 44100 Hz M4A。未剪接、抽取、補音或換字。

初始字卡過短、G02 suffix 曾轉錄為消化對方、S04 與 wrong-two 的第二個願曾有過窄或重疊 timing，已各自完整重生後重新對齊。最終九組 transcript 精確符合 spokenText，全部 timing 順序與 80–900ms 範圍 PASS。無人工將同音字映射成定稿。

對齊僅暫加真實繁簡等價願／愿、換／换、畫／画、動／动、場／场、選／选、傳／传、車／车、來／来、對／对。S02/G02-prefix 提示小月、互相、畫對方；suffix 使用互相、畫畫、對方、畫紙詞彙提示，解決片段同音辨識。G02-prefix 的標準 quiet-audio safety gain 門檻局部調整後全段加 8.2 dB，前後段 mean 均為 -19 dB；無音節裁切。所有共享 generation／processing／alignment script 均還原。

G05 三選項 mean-volume spread 0.8 dB，音訊全部解碼 PASS。總資產 1462734 bytes。詳見 L434-technical-qa.json 與 L434-alignment.json。

## 技術驗證

tools:check、ai:check、起手 curriculum:audit-state PASS。validate:production 全量基底及 L434 隔離課程 PASS；assets:audit 對五圖十音檔 PASS、零警告。request／packet／draft 定稿一致，Han-only indexes、431字邊界、coverage、斷行與 Stage 4 選項檢查 PASS。

verify skipped: dependency-blocked, shared state left for Release。Production JSON、planner、ledger 正式整合由 Release 負責。

## Browser QA 與收尾

390×844：互字卡與五句完成播放；每句觀察到高亮，S04/S05 三行顯示完整。G01 正確圈選，G03 正確卡、G04 來動手做排序後出現下一題；G05 顯示 S04 且三個選項皆播放到停止。

G02 到達紅框互與長按提示，但控制介面無法維持長按；跳題未前進。人聲錄音、串接回放未實測，後三題使用獨立 preview id 的隔離 subset 檢查。未宣稱主觀聽音、發音或音畫同步人工 QA 通過。依 SOP tooling fallback 交付技術驗證完整包。

預覽伺服器停止、viewport 還原、暫存頁面關閉；共享 production JSON 原樣還原，不提交 fixture。原始 MP3 保留於 Git ignore 的 curriculum-workflow/audio-inbox/L434/，既有共用 stash 未操作。

G05 final UI check: incorrect frog selection showed red feedback; correct fox selection showed green feedback and the reward button. PASS.

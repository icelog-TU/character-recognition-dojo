# L430「主」Production E 製作報告

狀態：dependency-blocked-asset-complete
分支：codex/l430-complete-package
起始 main：9b39f9d4（L416 果）
最新核對 origin/main：f4bc071d4d14a15bd0e2927a710f197110da6789（L420 教，424 已學字）。
鎖定 allowedChars 仍依正式 handoff：4eec5178 L415 的 419 字，加 組各輪員自己主，共 426 字。

## 交付與驗證

- request、final generation packet、draft、原始 handoff、5 張 1024×1024 WebP、10 個 mono AAC 44100Hz M4A、句子與 G02/G05 timing、alignment report、hash/QA report 齊全。
- 圖片各 156966–232832 bytes；全課 assets 1237851 bytes，約 1.18 MiB。無原始 PNG、MP3 或被淘汰素材入包。
- tools:check、ai:check、curriculum:audit-state：PASS；audit-state 有預期的 L430 assets 尚未進 production 提醒。
- request/draft/packet 文案對照、allowedChars、displayLines、Han-only index 與 Stage 4 五句各用一次：PASS。
- 五句均 9 漢字。Coverage 主4、己2、自2、員2、輪1、各1，組僅依賴詞彙。
- 本課隔離 validate:production：PASS；assets:audit --strict：PASS，5 圖/10 音、零警告。暫時輸入在 finally 還原，未交付 production JSON 變更。
- 全部音檔可解碼；G05 三音檔 mean volume 差 2.8dB；主字音長 952ms、peak -2.3dB。
- 9 段 final M4A 轉錄逐字符合 approved spokenText，僅使用繁簡字正規化。G02 suffix 提供片段語境提示，未把缺字直接補入轉錄。
- AI 聽音檢查與波形校正見 QA / alignment JSON；不等同人工驗收。
- pushed-branch package-intake --strict：PASS，驗證 ref origin/codex/l430-complete-package，資產與驗收紀錄 commit 1e1e6d46ecbefdcf5c62175ea0f6af3d1508577d。首輪只有 QA 段落標籤未被 intake regex 辨識，補明確 Browser QA 標題後零警告；未把人工驗收改稱 PASS。
- npm run verify 留待 Release 整合全部依賴後執行。

## 逐圖 style-lock / cast

| 圖片 | style-lock | cast | 畫意驗收 |
|---|---|---|---|
| S01 | PASS | PASS | 女孩與媽媽保持距離詢問陌生狗主人；牽繩通向畫外，路人與爸媽角色可區別。 |
| S02 | PASS | PASS | 女孩雙手自行搓洗頭髮，媽媽旁觀；高領不透明粉紅洗髮披巾和隔板完整遮住身體。 |
| S03 | PASS | PASS | 店員主動接走女孩手上最上面的盒子，媽媽在旁；保留其他書本及負荷情境。 |
| S04 | PASS | PASS | 女孩交出短披風給下一位同學，其他組員拿道具等候，背景另有一組；是表演角色輪換。 |
| S05 | PASS | PASS | 女孩把自己畫的戴皇冠長裙公主展示給爸爸，公主只在紙面中。 |

使用 built-in imagegen；實際 final WebP 與完整 L058-S01–S05、五張 refined style 範例及 L154/L162/L163 現行家庭 cast reference 並排檢視。L058 只作畫風參考。
重用搜尋：L169-S05 是媽媽幫嬰兒洗頭、L246-S04 是媽媽幫拿袋，與本課畫意不同，因此新生成。
S01 初稿路人像父母被退回，重新生成不同造型。S02 首次生成遭輸出審查阻擋，改為完全遮蔽身體的洗髮披巾與隔板後成功；保留自洗頭畫意。這些未採用稿均未入包。完整場景要求與 prompt 在 request/draft/packet。

## 音訊及 timing

S03、S05、G02 prefix/suffix 因轉錄或 AI 聽音疑慮重生完整音檔。G02 suffix 最终使用「動，幫我拿東西。」的標點停頓讓首字清楚，漢字與核定六字完全一致；未加入主字，未剪接。suffix 最後加 6dB 整段增益，peak -3.3dB、mean -20.1dB，與 prefix mean 差 2dB；之後重新 AI 對齊。
只移除實測語音末端之後的過長靜音，保留 250ms 衰減餘裕。S04 輪前停頓及 G05 公雞末段時間依波形校正；全部 timing 為 80–900ms、不重疊，末字結束避開長靜音。
AI gpt-audio 複查十段；主ㄓㄨˇ、己ㄐㄧˇ、角ㄐㄧㄠˇ與 suffix 動均有專項結果。早期 AI 回覆含無關字的說明或無法評估回應，未據此宣称通過；suffix 另重生，S04 重新明確評估。

## 瀏覽器驗收範圍與限制

使用本機隔離 Vite fixture，僅記憶體加入本課、前置通關與暫定字注音，未修改正式帳號或共享課程資料。
第一階段播放結束顯示通關；第二階段看見三張主和三張舊字（這、小、隻）。第三階段五句依序按下播放、播放結束解除按鈕鎖定，介面顯示「句子都聽完了」與通關。第四階段 G01 點主出現下一題；G02 前半句後停下要求按住紅框字錄音，此回合因無實體錄音通道而略過；G03 選主通過；G04 初始字卡洗、頭、己、自亂序，依自己洗頭點選通過；G05 顯示三個角色的播放與選擇控制項。
遠端控制可操作網頁，但未提供電腦聲音回傳和實體手機錄音通道，因此人工連續聽音、逐音節高亮同步、手機錄音/提示音/錄後串接及最終領獎導覽仍未完成。技術與 AI 檢查不冒充上述人工驗收；保留明確限制交 Release，老師主觀審查維持 post-merge。

## Release 依賴與交接

詞彙依賴：L423、L425、L426、L427、L428、L429。Release 須按順序整合所有前課到 L429；最新 main L420，尚缺 L421–L429。R051/R052 尚未整合，需放在 L420 後，涵蓋 L391–L420；由 Editor/Release 負責，不在本包製作。
Production 不 merge main，不改 production JSON、planner、ledger 或部署；ignored 音訊中間檔與快取保留。
分支 package 預覽（非正式 main 審核頁）：https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L430&ref=codex%2Fl430-complete-package
正式 main 審核入口只在 Release merge/deploy 後可用；此報告不宣稱現在已上線。

固定 SHA 的 pre-merge 圖片預覽（非正式 main 審核佇列）：https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L430&ref=1e1e6d46ecbefdcf5c62175ea0f6af3d1508577d
音訊預覽：https://icelog-tu.github.io/character-recognition-dojo/tools/audio-review.html?unit=L430&ref=1e1e6d46ecbefdcf5c62175ea0f6af3d1508577d

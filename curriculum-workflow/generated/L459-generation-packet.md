# L459 中 Production A package

Status: dependency-blocked-asset-complete.
Branch: codex/l459-complete-package.
Base origin/main: 80431be0; formal L001-L446, latest 音, 450 unique learned Han; latest review R054.

## Approved boundary and source

Allowed-character array is fully expanded in request: 457 distinct Han. It contains formal L001-L446, provisional 演表現突實其, and new 中. 中午/中獎 are absent and this lesson teaches only 中 ㄓㄨㄥ. Coverage: 中4, 其2, 實2, 突2, 現1, 表1; all minima met. 演 is an additional dependency used in 表演. Han counts 11/11/10/12/9; displayLines join exactly and each line has at most 6 visible characters.

- L459-S01: 三個盒子，其中一個是空的。 Spoken: 三個盒子其中一個是空的. Lines: 三個盒子， / 其中一個 / 是空的。 Focus: 中. Image notes: 桌上恰好三個打開的盒子，從斜上方看得清內部；其中兩個放著積木，另一個完全空著。主角女孩指向空盒，盒子之間有清楚間隔。不能多畫盒子，空盒裡也不能有紙、包裝物或看似物件的裝飾；不加數字標籤。
- L459-S02: 水中那個怪物，其實是木頭。 Spoken: 水中那個怪物其實是木頭. Lines: 水中 / 那個怪物， / 其實是木頭。 Focus: 中. Image notes: 主角女孩和爸爸站在安全岸邊，望向水中一段外形像怪物頭部的漂浮木頭；輪廓遠看容易誤認，但近看能清楚辨識木紋、斷面與枝杈。爸爸指著木頭向女孩說明；沒有真正的怪物，不畫木頭變身、發光眼睛或恐怖水景。
- L459-S03: 我坐在爸媽中間看表演。 Spoken: 我坐在爸媽中間看表演. Lines: 我坐在爸媽 / 中間看表演。 Focus: 中. Image notes: 觀眾席上，固定主角爸爸、主角女孩、主角媽媽坐在連續三個座位，女孩明確位於爸媽之間；三人面向前方舞台觀看表演。可從側後方構圖，同時看清座位關係及前方活動；不要讓其他人插在三人中間，不用小月替代主角女孩。
- L459-S04: 果實突然掉下來，把我嚇一跳。 Spoken: 果實突然掉下來把我嚇一跳. Lines: 果實突然 / 掉下來， / 把我嚇一跳。 Focus: 嚇. Image notes: 果園裡，一顆果實剛從低矮果樹落到主角女孩身旁地面，女孩驚訝地稍微退一步；樹上仍有同類果實，讓掉落來源明確。媽媽在近旁，不砸中女孩、不受傷、不畫巨大椰子或高空重物。
- L459-S05: 夜空中突然出現流星。 Spoken: 夜空中突然出現流星. Lines: 夜空中突然 / 出現流星。 Focus: 中. Image notes: 安全的戶外觀星空間，主角女孩與家人抬頭看夜空，一道清楚的流星帶著短光尾劃過；流星不同於背景靜止星點。保留足夠環境光看清人物，不畫隕石撞地、火災、爆炸或危險懸崖。已取代原本的影子句，不能沿用影子配圖。

## Stage 4

G01 S01[5]=中. G02 S03[5]=中, exact prefix 我坐在爸媽 and suffix 間看表演 with separately generated clips; suffix starts at 間 and never restores 中. G03 S05[2]=中, options 上/中/下. G04 S04[9]=嚇, missing indexes 8/9/10/11=我嚇一跳, shuffled single-Han cards 跳/我/一/嚇 with correctOrder 3/0/2/1. G05 S02[1]=中; wrong-one 水中那個怪物其實是小狗, correct 水中那個怪物其實是木頭, wrong-two 水中那個怪物其實是小船. Each option has 11 Han and each wrong sentence differs by exactly two Han. Five sentences are used once in canonical order; indexes, splits, option mappings and allowed-character checks PASS.

## Assets and technical validation

Five square 1024px WebP, ten mono 44100Hz AAC M4A and nine complete AI timing records; media total 1439322 bytes. Every image is below 250KB. Final audio decoded and passed duration/volume checks; G05 mean-volume spread 0.9dB. All final acoustic syllable checks match approved spokenText, including 中 zhong1 everywhere, 空 kong1, 突然 tu2 ran2, and G02 間 jian1. Timings are nonoverlapping, within file duration and 80-900ms per Han after documented automatic timestamp repairs.

- tools:check, ai:check, startup curriculum:audit-state: PASS.
- Package-local text, boundary, schema, Stage 4, files, duration and timing assertions: PASS.
- validate:production on isolated L459 fixture: PASS.
- assets:audit --strict on isolated L459 fixture: PASS, zero warnings.
- npm run verify skipped: dependency-blocked, shared state left for Release.

## Per-image style-lock and cast

- L459-S01: style-lock PASS; cast PASS. Exactly three separated open boxes are visible from above; two contain blocks and the third is completely empty; protagonist points at the empty box. Recurring protagonist keeps fixed bob, pink clip, pink cardigan and stable preschool proportions.
- L459-S02: style-lock PASS; cast PASS. Father points from a broad safe bank to a single floating driftwood shape; grain, bark, cut end and branch forks make ordinary wood explicit; no real monster. Recurring father blue overshirt/khaki trousers and recurring girl match family anchors.
- L459-S03: style-lock PASS; cast PASS. Father, protagonist girl and mother occupy exactly three adjacent seats with the girl clearly centered between her parents; all watch the stage. All three fixed family identities remain stable; girl is not Xiaoyue.
- L459-S04: style-lock PASS; cast PASS. One ordinary apple has just landed beside the girl with motion cues; matching apples remain on the low tree; mother is nearby and nobody is struck. Recurring mother and girl match family anchors.
- L459-S05: style-lock PASS; cast PASS. One bright short-tailed meteor crosses a starry sky above a safe illuminated garden lawn while the recurring family looks up; no impact or danger. Recurring mother, father and girl match family anchors.

All final WebP were compared side by side with the L058 style-only anchors, refined L115/L118/L119/L128 examples and L154/L162/L163 family anchors. No readable text, numbers, logos or exceptions. All first exported candidates passed semantic, style-lock and cast checks; no rejected draft is committed. Exact final prompts and imageNotes are in the draft.

## Audio evidence and browser QA

Actual final WAV inputs supplied to gpt-audio-1.5 confirm all ten files. S02 and G05 use na4 for 那; G02 suffix is jian1 kan4 biao3 yan3; S04 is guo3 shi2 tu2 ran2 diao4 xia4 lai2 ba3 wo3 xia4 yi2 tiao4. Detailed responses and SHA256 hashes are in L459-qa-evidence.json; transcript normalization and timing fallback details are in L459-alignment-evidence.json. This is acoustic AI evidence, not human listening.

Chrome 390x844 real LessonPanel QA: all ten final clips played to ended; G01 中 selected; G02 prefix completed and stopped at highlighted 中 while separate suffix played; G03 中 filled the missing slot; G04 我→嚇→一→跳 completed; G05 all three mapped clips played and correct S02 reached reward, 下一課 and 回首頁休息. Sustained press-to-record and recorded-voice replay were not reliably operable; microphone recording and physical-phone highlight smoothness are not certified. Production SOP browser-tooling fallback applies.

## Release dependencies and ownership

Vocabulary dependencies are L453演, L454表, L455現, L456突, L457實 and L458其. Release must integrate all preceding L447-L458 in order and satisfy R055/R056 after L450 before shipping L459. Dependencies block main integration only. Production A does not merge main; Release owns current-main revalidation, production JSON/planner/ledger updates, full verify and deploy.

Pre-merge package preview, not the final main review queue:
https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L459&ref=codex%2Fl459-complete-package

Usable after Release merges and deploys:
https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L459&ref=main

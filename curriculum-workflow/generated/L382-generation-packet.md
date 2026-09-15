# L382 Production Generation Packet

Status: partial-package. Source boundary 9b081280afab0f52d126298279093f2e3290ca78. Production C owns only L382. Text dependencies L377-L381; playable order R045/R046 then L376-L381 before L382.

Final fetch boundary: 250ca4a3361a15104ba19158bb1b0710dac43ecc; formal L375 / 379 learned characters unchanged. L382-only validate:production and assets:audit --strict both failed with five missing images and missing G02 suffix; zero format warnings. Retained nine processed audio drafts total 403425 bytes, not accepted final assets. Shared production JSON restored byte-for-byte; final curriculum:audit-state passed with expected unmerged L382 asset-folder warning. Full verify and image optimization not run because image generation and audio acceptance stopped at the suffix transcription gate. No image style/cast/semantic PASS or actual UI PASS claimed.

## Approved Source and Requirements

【L382「相」完整 Production Handoff】
你是 Production C。收到後請直接 claim L382「相」，並開始製作完整 asset-complete-package，不需要老師再次啟動。老師已批准以下五句與配圖文字。輪序為 A → B → C → D；上一課L381交B，本課L382交C。
Repo：https://github.com/icelog-TU/character-recognition-dojo
指定 worktree：C:\Users\User\Documents\Codex\2026-08-03\a000-sop\worktrees\parallel-c
Package branch：codex/l382-complete-package。只處理本課；若已有本課分支、claim或成果，先核對owner與內容再續作，不重複建立、不覆蓋其他課或其他人的工作。
【課程、正式邊界與依賴】
id="L382"；order=382；title="相"；newChars=["相"]；zhuyin={"相":"ㄒㄧㄤ"}；requiredRounds=5。普通單字課，不是雙字課或複習課。本課「相同、相連、相傳」全部讀ㄒㄧㄤ，不讀照相的ㄒㄧㄤˋ；Stage2／Stage4不製作詞組卡。
老師預定後續L383「信」、L384「寫」，但這兩字尚未教，不可放進本課句子、選項或allowedChars；本課不得提前使用「相信、寫信」。本稿不授權建立後兩課package。
Editor本次fetch後 origin/main=9b081280 Integrate lesson L375 and record release blockers。直接讀 origin/main:src/curriculum/sample-lessons.json：正式L001–L375，最新字「經」，379個不重複已學字；最新複習R043/R044，afterLessonOrder=360。本地落後main／本地audit-state顯示L333，不可當正式邊界。
已批准provisional課序：L376已、L377近、L378接、L379送、L380連、L381傳。Production收到後重新fetch，以main production JSON重分類已合併／仍provisional；遠端有branch不等於已merged或package完整。
本課實際用字 dependsOnLessons=["L377","L378","L379","L380","L381"]；provisionalLearnedChars=["近","接","送","連","傳"]。S01用送；S02用近/連；S03用接/連/傳；S04用送；S05用傳。L376已雖未用於本課文字，仍是整體playable order前置課。
allowedChars：从上述main production JSON收集全部lessons[].newChars去重，加上述五個provisional字，再加「相」，共385字；請實際寫入完整集合。不能只列最近五課，不能加入信、寫或其他未批准字。若main前進，重新核對依賴，不得使用本課之後才教的字。
Release playable order：L375 → R045 → R046 → L376 → L377 → L378 → L379 → L380 → L381 → L382。R045/R046覆蓋L346–L375，字界鎖至L375。前置課或milestone review尚未merged只阻止Release，不阻止平行製作；在registry/request/packet/draft適用欄位或teacherNotes明記，不新增未支援schema欄位。
【S01 定稿與配圖】
id="L382-S01"；text="你送的書，跟這本相同。"；spokenText="你送的書跟這本相同"；focusChar="相"；Han count=9；displayLines=["你送的書，","跟這本相同。"]；每行可見字元數=[5,6]；coverage：相1、送1。
imageNotes：家中桌邊，主角女孩把自己原有的一本書，與固定「你」小男孩送來的書並排比較，指著兩本相同的封面給他看。兩本書的尺寸、顏色、封面插圖一致，讓幼兒一眼看出「相同」。女孩與男孩都能看見書，兩本封面完整露出。
角色與配圖限制：男孩使用固定「你」角色，天空藍上衣、綠色短褲、藍鞋及既有年齡比例，橘色書包依場景需要配置；不是小光或主角哥哥。封面只有圖畫，沒有可讀書名、字母、數字或品牌。不能畫成兩本不同圖案的書，也不能只露出一本書。
【S02 定稿與配圖】
id="L382-S02"；text="兩家住得近，還有小路相連。"；spokenText="兩家住得近還有小路相連"；focusChar="相"；Han count=11；displayLines=["兩家住得近，","還有小路","相連。"]；每行可見字元數=[6,4,3]；coverage：相1、連1、近1。
imageNotes：稍微俯視的鄰里場景，兩棟各自獨立的住家相距不遠，中間有一條清楚的小路，從一家門前連到另一家門前。主角女孩與媽媽站在其中一家門前，另一家門前有generic鄰居打招呼。構圖必須同時看清两棟房子及小路兩端。
配圖限制：兩棟房子不是共用同一扇門，不畫成同一棟房子的兩個房間；小路不能只經過其中一家或被遮住而看不出連接關係。不用箭頭、地圖符號、距離數字或文字。generic鄰居不冒用主角爸爸、媽媽、老師或固定同學。
【S03 定稿與配圖】
id="L382-S03"；text="樹上接連傳來鳥叫聲。"；spokenText="樹上接連傳來鳥叫聲"；focusChar="傳"；Han count=9；displayLines=["樹上接連傳來","鳥叫聲。"]；每行可見字元數=[6,4]；coverage：傳1、連1、接1。
imageNotes：花園裡，主角女孩抬頭看向樹枝。枝頭幾隻小鳥自然停棲，其中兩隻張嘴鳴叫，另一隻側頭聆聽，表現此起彼落的鳥叫。小鳥、樹枝和女孩仰望的視線都要清楚可見，不是聲音來源不明的空樹。
配圖限制：不加音符、「啾啾」文字或聲音線條，不做分格圖或同一隻鳥的連續殘影。女孩只是聆聽觀察，不抓鳥、餵鳥或故意驚嚇牠們；鳥的姿態自然，不能擬人站立說話。
【S04 定稿與配圖】
id="L382-S04"；text="飯店會把早餐送到房間。"；spokenText="飯店會把早餐送到房間"；focusChar="送"；Han count=10；displayLines=["飯店會把早餐","送到房間。"]；每行可見字元數=[6,5]；coverage：送1。
imageNotes：飯店客房門口，一位generic飯店服務人員推著小餐車，將早餐送到主角一家住宿的房間。主角爸爸在門口接待，女孩從房內好奇地看著餐車；早餐有飯、菜及簡單飲品，擺放整齊。房間內可見床與行李，清楚是住宿客房。
配圖限制：不是餐廳座位區或主角自己家，不畫成爸爸在餐廳點餐。服務人員保持generic職員身份，不冒用老師或主角媽媽；制服、餐具、門牌與行李都沒有可讀文字、數字、品牌或標誌。餐車與人物不能堵成難以辨認的重疊構圖。
【S05 定稿與配圖】
id="L382-S05"；text="相傳山上有會飛的馬。"；spokenText="相傳山上有會飛的馬"；focusChar="相"；Han count=9；displayLines=["相傳山上","有會飛的馬。"]；每行可見字元數=[4,6]；coverage：相1、傳1。
imageNotes：主角媽媽與女孩一起看攤開的故事書。書中主要插圖是一匹長著翅膀的馬，正在山峰上方飛翔；女孩專注看著圖，媽媽指著飛馬說故事。故事書與飛馬插圖占足夠畫面，能辨識山峰、翅膀與飛翔姿態。
配圖限制：清楚呈現這是故事書中的傳說，不畫成母女在現實山上遇到飛馬。書頁只有插圖、不出現文字；畫風溫和明亮，不做成恐怖、戰鬥或災難場景。不要把「相傳」誤解成照相，圖中不需要相機。
【Coverage 與 Editor 自審】
Current L382相=3，最低3 PASS；Previous 1 L381傳=2，最低2 PASS；Previous 2 L380連=2，最低2 PASS；Previous 3 L379送=2，最低2 PASS；Previous 4 L378接=1，最低1 PASS；Previous 5 L377近=1，最低1 PASS。只計五句正式text，不把遊戲選項計入。
Additional provisional chars outside coverage：None。Previous-six或更早不列coverage。Editor已逐字核對五句text/spokenText/displayLines/focusChar及下列Stage4選項，均在正式已學字＋明列provisional＋相之內；fully unlearned chars=[]，allowed-character sweep PASS。
五句漢字數9/11/9/10/9，均≤12。spokenText精確等於text的Han-only sequence；displayLines.join("")精確等於text；每行含標點≤6可見字元，PASS。保留功能性斷句，不切斷自然詞、不把逗號放到行首硬湊行數。imageNotes屬製作說明，不受句子漢字字界限制。
【Stage 1／Stage 2】
Stage1顯示單字「相」與注音ㄒㄧㄤ，點字播放獨立charAudio。Stage2六卡必須包含3張「相」＋3張已學干擾卡，點完3張「相」才完成；不能只有一張目標卡或點一次即過關。本課不是雙字課，不套用雙字課卡數或舊pilot例外；實際驗證卡數與完成條件。
【Stage 4 固定順序與完整資料】
固定映射：G01 find-character→S01；G02 teach-character→S02；G03 missing-character→S05；G04 partial-order→S03；G05 choose-pronunciation→S04。恰5題、五句各用一次、五種遊戲各一次，requiredRounds=5，不得自行換遊戲順序。G05正確音訊來自S04，不是S05。
G01：id="L382-G01"；type="find-character"；sentenceId="L382-S01"；targetChar="相"；targetCharIndex=7。引導明確要求在句子裡找「相」並點它；點對立即圈選或高亮，不等鼓勵語音播完。
G02：id="L382-G02"；type="teach-character"；sentenceId="L382-S02"；targetChar="相"；targetCharIndex=9。prefixText精確為「兩家住得近還有小路」；suffixText精確為「連」。teachAudio.prefixSrc="/assets/lessons/L382/audio/L382-G02-prefix.m4a"；teachAudio.suffixSrc="/assets/lessons/L382/audio/L382-G02-suffix.m4a"。兩段各自完整生成，prefix可保留自然停頓但不得增刪字；兩段都不含目標「相」，不能從S02裁切。suffix只有一字「連」，讀ㄌㄧㄢˊ，須確認短音檔沒有被處理流程裁掉。
G03：id="L382-G03"；type="missing-character"；sentenceId="L382-S05"；targetChar="相"；targetCharIndex=0；missingIndexes=[0]；prompt="補上不見的字。"。只挖句首「相」一字，保留「傳」，不挖整個「相傳」。
G03 options完整資料：[{"id":"L382-G03-A","text":"相","correct":true},{"id":"L382-G03-B","text":"想","correct":false},{"id":"L382-G03-C","text":"看","correct":false}]。必須寫入實際sentenceGames[].options，不只放在packet說明；固定三選一、三張不同單漢字卡、恰1正解＋2干擾。
G03 UI必測：初始卡片集合恰為相/想/看，共3張；句首只有1個缺字空格，位置不裁切；只有相能完成，想與看不能完成；錯選、重試或重新入題仍有完整三張卡。Release gate必須擋掉one-button missing-character，不能以JSON已有options代替UI驗證。
G04：id="L382-G04"；type="partial-order"；sentenceId="L382-S03"；targetChar="傳"；targetCharIndex=4；missingIndexes=[2,3,4,5]，依序缺接/連/傳/來，保留「樹上」與「鳥叫聲。」。options=[{"id":"L382-G04-A","text":"傳","correct":true,"correctOrder":2},{"id":"L382-G04-B","text":"接","correct":true,"correctOrder":0},{"id":"L382-G04-C","text":"來","correct":true,"correctOrder":3},{"id":"L382-G04-D","text":"連","correct":true,"correctOrder":1}]。恰4張單字卡，入題打亂，不做「接連」「傳來」詞組卡。
G05：id="L382-G05"；type="choose-pronunciation"；sentenceId="L382-S04"；targetChar="送"；targetCharIndex=6。correct option：id="correct"，text="飯店會把早餐送到房間。"，correct=true，sentenceId="L382-S04"，audioSrc="/assets/lessons/L382/audio/L382-S04.m4a"。
G05 wrong-one：id="wrong-one"，text="飯店會把晚餐送到房間。"，correct=false，audioSrc="/assets/lessons/L382/audio/L382-G05-wrong-one.m4a"；wrong-two：id="wrong-two"，text="飯店會把早餐送到門口。"，correct=false，audioSrc="/assets/lessons/L382/audio/L382-G05-wrong-two.m4a"。三句皆10漢字，錯項分別差1字、2字，allowed PASS。各自完整生成音訊，不拼接正確句；三選項均須存在且可播放，正解位置打亂。
【Stage 4 機械索引證據／零起算 Han-only】
S01：0你 1送 2的 3書 4跟 5這 6本 7相 8同；G01 index7=相 PASS。S02：0兩 1家 2住 3得 4近 5還 6有 7小 8路 9相 10連；G02 index9=相、prefix=兩家住得近還有小路、suffix=連，PASS。
S05：0相 1傳 2山 3上 4有 5會 6飛 7的 8馬；G03 index0=相；options.length=3、unique texts=3、correct=true數量=1，每卡恰1合法漢字，PASS。
S03：0樹 1上 2接 3連 4傳 5來 6鳥 7叫 8聲；G04 target index4=傳，[2,3,4,5]=接/連/傳/來，correctOrder映射PASS。S04：0飯 1店 2會 3把 4早 5餐 6送 7到 8房 9間；G05 index6=送，wrong-one在index4早→晚，wrong-two在index8房→門、index9間→口，PASS。
【Stage 4 引導、重試與領獎導航】
每題有幼兒可理解的語音引導、重播引導及獨立重播當句按鈕。G02使用「請你幫我念」「停在不會念的字」，禁止「請教我念／請教牠念／卡在不會念的字」。intro及ready cue須說「請按住紅框的字不放」，不能說「按一下」；按住後提示「聽到鈴聲，就大聲念出來」，不能先念出目標答案。
G02保留可靠鈴聲、錄音及把孩子錄音放回目標位置重播的流程，前後音訊不能夾帶「相」造成重複；錄音在鈴聲提示後開始。每題有「按我看解答」及顯示解答後的「重新挑戰這一題」，看解答不完成、不授予進度。G04及G05選項打亂；G05開場不先讀正確句，角色頭像供聽音、勾選按鈕供作答。
答對立即視覺回饋、短句鼓勵後停在本題，等按下一題，不自動跳題；完成狀態綁定game id。最後一題按「領取獎勵」且領獎完成後，紅色「下一課」與白色「回首頁休息」必須清楚可見，不用向下找、不被浮動播放列遮住。手機／平板皆測，包含首次完成、領獎後狀態更新與浮動播放列可見情況；重播不得重複發獎勵。
【圖片風格、角色與硬規格】
五張均為1:1方形、留安全邊界，使用L058完整參考組作畫風錨點：自然暖光、細緻鉛筆水彩、乾淨有細節的現代兒童繪本環境、穩定幼兒比例、明亮自然配色與手機可讀構圖。L058只作畫風，不把其中人物複製成所有父母、鄰居或服務人員；每張最終WebP與參考並排檢查，不能只因語義正確就接受風格漂移。
精修畫風／比例參考完整路徑：public/assets/lessons/L115/images/L115-S01.webp；public/assets/lessons/L115/images/L115-S02.webp；public/assets/lessons/L118/images/L118-S02.webp；public/assets/lessons/L119/images/L119-S01.webp；public/assets/lessons/L128/images/L128-S03.webp。
主角家庭身份參考完整路徑：public/assets/lessons/L154/images/L154-S01.webp；public/assets/lessons/L162/images/L162-S04.webp；public/assets/lessons/L163/images/L163-S02.webp。女孩維持短深色頭髮、粉色髮夾及既有幼兒比例；爸爸媽媽保持固定家庭身份。S01固定你男孩須與哥哥、小光區分；本課未指定小月、小光，不自行加入named cast。
禁止可讀文字、英文字母、數字、注音、字幕、品牌、標誌、車牌及水印；書封、故事書、門牌與制服均適用，不以文字或箭頭代替圖像敘事。拒絕扁平卡通、動漫、3D、照片風、過度簡化水彩、隨機圓臉及年齡漂移。最終WebP長邊≤1024px；每張目標≤250KB、硬上限400KB；整個L382資產資料夾目標≤2.0MB、硬上限2.5MB。原始大型PNG/JPG與失敗草圖不得作shipping成果提交。
【音訊、Alignment 與必備檔案】
使用OpenAI自然台灣國語，不用中國口音、兒化音、OS TTS或未批准替代流程。S01–S05按spokenText完整生成，不增刪字、不念標點；本課所有「相」讀ㄒㄧㄤ，「相傳」的傳讀ㄔㄨㄢˊ。charAudio={"相":"/assets/lessons/L382/audio/char-u76f8.m4a"}，須從單字「相」獨立生成，不能從句音剪取；G02兩片段與G05兩錯項也各自完整生成。
以assets:audio處理成mono AAC m4a、44100Hz。charAudio時長700–3500ms且max_volume≥-35dB；句音／遊戲參照音訊max_volume≥-12dB、mean_volume≥-28dB；G05三音檔mean_volume差≤3dB。特別聽查G02一字suffix「連」的音量、字首與音尾，不以激進去靜音裁掉字音；所有檔案不可有漏字、爆音或拼接痕跡。
以最終m4a執行assets:align:ai；轉錄须匹配spokenText，五句charTimings數量為9/11/9/10/9，charIndex完整連續、時間有序且不超出durationMs。換音須重做alignment，不用等分或能量估計冒充最終AI timing；G02片段與G05選項的音訊資料也須符合現行schema。
課程檔：curriculum-workflow/lesson-requests/L382.json；curriculum-workflow/generated/L382-generation-packet.md；curriculum-workflow/drafts/L382-draft.json；另更新docs/PARALLEL_LESSON_REGISTRY.md唯一L382記錄。三份檔案須一致保存定稿、spokenText、displayLines、focusChar、imageNotes、字界與依賴、完整Stage4及所有選項；packet不能只留生成提示或候選句。draft須有實際imageSrc、audio.src、durationMs與charTimings，不留null或範例路徑。
public/assets/lessons/L382/images/必含L382-S01.webp、L382-S02.webp、L382-S03.webp、L382-S04.webp、L382-S05.webp；public/assets/lessons/L382/audio/必含L382-S01.m4a、L382-S02.m4a、L382-S03.m4a、L382-S04.m4a、L382-S05.m4a、char-u76f8.m4a、L382-G02-prefix.m4a、L382-G02-suffix.m4a、L382-G05-wrong-one.m4a、L382-G05-wrong-two.m4a。JSON使用對應/assets/lessons/L382/...路徑，G05正確音訊必須指向L382-S04.m4a。
【收到後直接執行／保護既有工作】
在指定worktree執行git remote -v、git fetch origin、git status --short --branch、git log -1 --oneline origin/main。新任務且clean才git switch -c codex/l382-complete-package origin/main；已有本課分支先核對owner與成果續作。dirty或claim衝突先回報，不stash/reset/revert他人工作，不覆蓋其他課或其他slot檔案。
切到正確基底後執行npm run tools:check、npm run ai:check、npm run curriculum:audit-state，再直接讀main production JSON與registry。僅在node_modules確實缺失且worktree乾淨閒置時才npm ci後重跑tools:check。重讀PROJECT_HANDOFF、ROLE_PRODUCTION、CURRICULUM_PRODUCTION、CURRICULUM_SCHEMA、SENTENCE_GENERATION、LESSON_VISUAL_CAST SOP、CURRICULUM_LEDGER及lesson-cast資料庫；不能以「讀過SOP」代替逐項驗證。
先登記唯一L382 registry row，填owner、branch、status=claimed、dependencies、provisional字及owned paths，推送claim後開始大量資產。registry不能更新／推送、工具真失敗、字界非法、定稿或索引不一致時停止回報，不自行猜測修正；前置課或review未merged不是拒絕製作理由。
建立request後執行npm run curriculum:packet -- --request curriculum-workflow/lesson-requests/L382.json，確認生成結果保留定稿。音訊依序使用npm run ai:audio -- --lesson L382、npm run assets:audio -- --lesson L382、npm run assets:align:ai -- --lesson L382。會重寫JSON的資產命令不可並行；Production只交lesson-local package，不把暫時生成用的shared production JSON改動混入提交。Production正常commit/push，不套用Editor的禁止提交限制。
【驗證、Release核對與最終回報】
Production執行L382專屬fast package audit：三份檔案一致、allowed／依賴、coverage、斷行、索引、五題順序及句子唯一使用、G03三卡且唯一正解、G04四張單字卡及correctOrder、G05正確S04音訊與兩個完整錯項、資產存在且可解碼、容量／音量／timing。跑npm run validate:production及npm run assets:audit，區分本課缺陷與既有其他課問題；全域validator未包含L382時，其PASS不能代替本課package檢查。
手機／平板實測：五句注音與斷行無溢出、播放高亮、Stage2六卡及完成條件、G02按住錄音重播和短suffix、G03句首空格及初始三卡／錯選／重試、G04打亂排序、G05三音訊與勾選、解答不授進度、首次領獎後兩個導航按鈕持續可見。未執行不能寫PASS；瀏覽器工具失敗須明記原因、非瀏覽器檢查結果及待Release補驗項目，真實缺卡、缺音或導航缺陷不能當工具例外略過。
完成後Production commit/push package branch，回報完整tip SHA、檔案清單、實際檢查結果、S01–S05逐圖style/cast及語義結果、S01兩本書相同／S02小路兩端相連／S03鳥叫來源／S04客房送餐／S05書中傳說核對、音訊與timing結果、資產總容量、G03及領獎導航證據、未完成事項。依賴未解除時回報dependency-blocked-asset-complete，registry採相符既有狀態並記notes。Release按playable order整合production JSON、planner、ledger與registry，跑npm run verify、push及檢查部署；對Stage4／completion flow改動做手機／平板smoke test，不把Editor資料自審當成成品驗收。
Pre-merge package preview（非最終main審核隊列）：https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L382&ref=<完整已推送SHA>，請換成實際SHA。Release整合及部署後才使用https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L382&ref=main，並可執行npm run asset:review-status -- --unit L382 --ref main。老師主觀資產審核預設在merge後，不另加未授權的pre-merge老師PASS門檻。

## Locked Allowed Characters

一二三人個大的小手我有山上下你水在高很家和隻鳥孩指看女飛男門前後也是不到走他沒裡兩狗都爸媽愛書可會這吃做好樣要更邊多少比來起去坐站開左著拿包花朵了畫出學路誰校問找同帶筆借那本給紙心放把桌子盒掉壞眼用鏡鼻臉紅圓太難得過分幾點玩打球棒頭帽草地面外空天雨雲黑白棋鞋穿戴衣脫氣套熱冷喝飯菜老卻麼什為以怎所房間時還燈關窗車等再風吹樹動葉綠滿掃擦先洗又髒亂回就快事跑馬停叫聲聽見說師話課像想真力能火發電生明光亮陽月影長星行道流河從進早晚海船魚游泳池身濕乾服褲換改錯知認新舊半只剩夠錢買貴賣店場市夜具工作忙幫急腳步跳床搬重沙張椅累死睡倒病假才剛裝養休息久體神精變差緊卡住蓋橋座木積堆洞破口傷皮痛受忍耐敢當然怕哭被嚇罵對爬蟲條泥土種澆照顧忘每次記完收彩色粉哪些最西東方圖向線直轉右角落因原別特處理整齊全今們年跟常請嗎客讓廳餐位正排雞公園物怪奇驚喜歡笑但吧謝感情朋友親交通往經近接送連傳相

## Implemented Draft

```json
{
  "id": "L382",
  "order": 382,
  "title": "相",
  "newChars": [
    "相"
  ],
  "zhuyin": {
    "相": "ㄒㄧㄤ"
  },
  "requiredRounds": 5,
  "dependsOnLessons": [
    "L377",
    "L378",
    "L379",
    "L380",
    "L381"
  ],
  "provisionalLearnedChars": [
    "近",
    "接",
    "送",
    "連",
    "傳"
  ],
  "sourceBoundary": "9b081280afab0f52d126298279093f2e3290ca78",
  "packageStatus": "partial-package",
  "teacherNotes": "All 相 pronounced ㄒㄧㄤ; 傳 ㄔㄨㄢˊ. No 信/寫. Release only after R045/R046, L376-L381. Stage2 six cards, three 相 targets; G03 相/想/看 three choices, only 相 correct. Verify phone/tablet reward navigation; teacher subjective review post-main. Production paused at real G02 suffix alignment failure; images and phone/tablet QA not run. Long audio end gaps need review. See L382-technical-qa.json.",
  "charAudio": {
    "相": "/assets/lessons/L382/audio/char-u76f8.m4a"
  },
  "sentences": [
    {
      "id": "L382-S01",
      "text": "你送的書，跟這本相同。",
      "spokenText": "你送的書跟這本相同",
      "focusChar": "相",
      "displayLines": [
        "你送的書，",
        "跟這本相同。"
      ],
      "imageNotes": "家中桌邊，主角女孩把自己原有的一本書，與固定「你」小男孩送來的書並排比較，指著兩本相同的封面給他看。兩本書的尺寸、顏色、封面插圖一致，讓幼兒一眼看出「相同」。女孩與男孩都能看見書，兩本封面完整露出。\r\n角色與配圖限制：男孩使用固定「你」角色，天空藍上衣、綠色短褲、藍鞋及既有年齡比例，橘色書包依場景需要配置；不是小光或主角哥哥。封面只有圖畫，沒有可讀書名、字母、數字或品牌。不能畫成兩本不同圖案的書，也不能只露出一本書。",
      "imagePrompt": "Square 1:1 modern children's picture-book illustration. Match full L058 style-only set: detailed pencil-and-watercolor, warm natural light, bright varied colors, clean detailed environment, natural preschool proportions. Use refined L115/L118/L119/L128 and family L154/L162/L163 cast anchors, never L058 identities. Girl short dark bob pink hairclip pink cardigan navy skirt pink shoes. Mother side-parted chin-length dark hair ivory blouse blue jeans. Father short dark hair blue shirt beige trousers. No readable or pseudo text, numbers, letters, logos, brand, watermark, signs, arrows or sound symbols. Not anime, flat cartoon, simple watercolor, 3D or photo.\n家中桌邊，主角女孩把自己原有的一本書，與固定「你」小男孩送來的書並排比較，指著兩本相同的封面給他看。兩本書的尺寸、顏色、封面插圖一致，讓幼兒一眼看出「相同」。女孩與男孩都能看見書，兩本封面完整露出。\r\n角色與配圖限制：男孩使用固定「你」角色，天空藍上衣、綠色短褲、藍鞋及既有年齡比例，橘色書包依場景需要配置；不是小光或主角哥哥。封面只有圖畫，沒有可讀書名、字母、數字或品牌。不能畫成兩本不同圖案的書，也不能只露出一本書。",
      "imageSrc": "/assets/lessons/L382/images/L382-S01.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L382/audio/L382-S01.m4a",
        "durationMs": 4204,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 460
          },
          {
            "charIndex": 1,
            "startMs": 460,
            "endMs": 680
          },
          {
            "charIndex": 2,
            "startMs": 680,
            "endMs": 920
          },
          {
            "charIndex": 3,
            "startMs": 920,
            "endMs": 1280
          },
          {
            "charIndex": 4,
            "startMs": 1280,
            "endMs": 1840
          },
          {
            "charIndex": 5,
            "startMs": 1840,
            "endMs": 2180
          },
          {
            "charIndex": 6,
            "startMs": 2180,
            "endMs": 2360
          },
          {
            "charIndex": 7,
            "startMs": 2360,
            "endMs": 2760
          },
          {
            "charIndex": 8,
            "startMs": 2760,
            "endMs": 3140
          }
        ]
      }
    },
    {
      "id": "L382-S02",
      "text": "兩家住得近，還有小路相連。",
      "spokenText": "兩家住得近還有小路相連",
      "focusChar": "相",
      "displayLines": [
        "兩家住得近，",
        "還有小路",
        "相連。"
      ],
      "imageNotes": "稍微俯視的鄰里場景，兩棟各自獨立的住家相距不遠，中間有一條清楚的小路，從一家門前連到另一家門前。主角女孩與媽媽站在其中一家門前，另一家門前有generic鄰居打招呼。構圖必須同時看清两棟房子及小路兩端。\r\n配圖限制：兩棟房子不是共用同一扇門，不畫成同一棟房子的兩個房間；小路不能只經過其中一家或被遮住而看不出連接關係。不用箭頭、地圖符號、距離數字或文字。generic鄰居不冒用主角爸爸、媽媽、老師或固定同學。",
      "imagePrompt": "Square 1:1 modern children's picture-book illustration. Match full L058 style-only set: detailed pencil-and-watercolor, warm natural light, bright varied colors, clean detailed environment, natural preschool proportions. Use refined L115/L118/L119/L128 and family L154/L162/L163 cast anchors, never L058 identities. Girl short dark bob pink hairclip pink cardigan navy skirt pink shoes. Mother side-parted chin-length dark hair ivory blouse blue jeans. Father short dark hair blue shirt beige trousers. No readable or pseudo text, numbers, letters, logos, brand, watermark, signs, arrows or sound symbols. Not anime, flat cartoon, simple watercolor, 3D or photo.\n稍微俯視的鄰里場景，兩棟各自獨立的住家相距不遠，中間有一條清楚的小路，從一家門前連到另一家門前。主角女孩與媽媽站在其中一家門前，另一家門前有generic鄰居打招呼。構圖必須同時看清两棟房子及小路兩端。\r\n配圖限制：兩棟房子不是共用同一扇門，不畫成同一棟房子的兩個房間；小路不能只經過其中一家或被遮住而看不出連接關係。不用箭頭、地圖符號、距離數字或文字。generic鄰居不冒用主角爸爸、媽媽、老師或固定同學。",
      "imageSrc": "/assets/lessons/L382/images/L382-S02.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L382/audio/L382-S02.m4a",
        "durationMs": 5366,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 460
          },
          {
            "charIndex": 1,
            "startMs": 460,
            "endMs": 900
          },
          {
            "charIndex": 2,
            "startMs": 900,
            "endMs": 1360
          },
          {
            "charIndex": 3,
            "startMs": 1360,
            "endMs": 1760
          },
          {
            "charIndex": 4,
            "startMs": 1760,
            "endMs": 1860
          },
          {
            "charIndex": 5,
            "startMs": 2420,
            "endMs": 2660
          },
          {
            "charIndex": 6,
            "startMs": 2660,
            "endMs": 2900
          },
          {
            "charIndex": 7,
            "startMs": 2900,
            "endMs": 3340
          },
          {
            "charIndex": 8,
            "startMs": 3340,
            "endMs": 3580
          },
          {
            "charIndex": 9,
            "startMs": 3580,
            "endMs": 3960
          },
          {
            "charIndex": 10,
            "startMs": 3960,
            "endMs": 4120
          }
        ]
      }
    },
    {
      "id": "L382-S03",
      "text": "樹上接連傳來鳥叫聲。",
      "spokenText": "樹上接連傳來鳥叫聲",
      "focusChar": "傳",
      "displayLines": [
        "樹上接連傳來",
        "鳥叫聲。"
      ],
      "imageNotes": "花園裡，主角女孩抬頭看向樹枝。枝頭幾隻小鳥自然停棲，其中兩隻張嘴鳴叫，另一隻側頭聆聽，表現此起彼落的鳥叫。小鳥、樹枝和女孩仰望的視線都要清楚可見，不是聲音來源不明的空樹。\r\n配圖限制：不加音符、「啾啾」文字或聲音線條，不做分格圖或同一隻鳥的連續殘影。女孩只是聆聽觀察，不抓鳥、餵鳥或故意驚嚇牠們；鳥的姿態自然，不能擬人站立說話。",
      "imagePrompt": "Square 1:1 modern children's picture-book illustration. Match full L058 style-only set: detailed pencil-and-watercolor, warm natural light, bright varied colors, clean detailed environment, natural preschool proportions. Use refined L115/L118/L119/L128 and family L154/L162/L163 cast anchors, never L058 identities. Girl short dark bob pink hairclip pink cardigan navy skirt pink shoes. Mother side-parted chin-length dark hair ivory blouse blue jeans. Father short dark hair blue shirt beige trousers. No readable or pseudo text, numbers, letters, logos, brand, watermark, signs, arrows or sound symbols. Not anime, flat cartoon, simple watercolor, 3D or photo.\n花園裡，主角女孩抬頭看向樹枝。枝頭幾隻小鳥自然停棲，其中兩隻張嘴鳴叫，另一隻側頭聆聽，表現此起彼落的鳥叫。小鳥、樹枝和女孩仰望的視線都要清楚可見，不是聲音來源不明的空樹。\r\n配圖限制：不加音符、「啾啾」文字或聲音線條，不做分格圖或同一隻鳥的連續殘影。女孩只是聆聽觀察，不抓鳥、餵鳥或故意驚嚇牠們；鳥的姿態自然，不能擬人站立說話。",
      "imageSrc": "/assets/lessons/L382/images/L382-S03.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L382/audio/L382-S03.m4a",
        "durationMs": 4136,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 460
          },
          {
            "charIndex": 1,
            "startMs": 460,
            "endMs": 860
          },
          {
            "charIndex": 2,
            "startMs": 860,
            "endMs": 1260
          },
          {
            "charIndex": 3,
            "startMs": 1260,
            "endMs": 1440
          },
          {
            "charIndex": 4,
            "startMs": 1440,
            "endMs": 1800
          },
          {
            "charIndex": 5,
            "startMs": 1800,
            "endMs": 2400
          },
          {
            "charIndex": 6,
            "startMs": 2400,
            "endMs": 2820
          },
          {
            "charIndex": 7,
            "startMs": 2820,
            "endMs": 3140
          },
          {
            "charIndex": 8,
            "startMs": 3140,
            "endMs": 3380
          }
        ]
      }
    },
    {
      "id": "L382-S04",
      "text": "飯店會把早餐送到房間。",
      "spokenText": "飯店會把早餐送到房間",
      "focusChar": "送",
      "displayLines": [
        "飯店會把早餐",
        "送到房間。"
      ],
      "imageNotes": "飯店客房門口，一位generic飯店服務人員推著小餐車，將早餐送到主角一家住宿的房間。主角爸爸在門口接待，女孩從房內好奇地看著餐車；早餐有飯、菜及簡單飲品，擺放整齊。房間內可見床與行李，清楚是住宿客房。\r\n配圖限制：不是餐廳座位區或主角自己家，不畫成爸爸在餐廳點餐。服務人員保持generic職員身份，不冒用老師或主角媽媽；制服、餐具、門牌與行李都沒有可讀文字、數字、品牌或標誌。餐車與人物不能堵成難以辨認的重疊構圖。",
      "imagePrompt": "Square 1:1 modern children's picture-book illustration. Match full L058 style-only set: detailed pencil-and-watercolor, warm natural light, bright varied colors, clean detailed environment, natural preschool proportions. Use refined L115/L118/L119/L128 and family L154/L162/L163 cast anchors, never L058 identities. Girl short dark bob pink hairclip pink cardigan navy skirt pink shoes. Mother side-parted chin-length dark hair ivory blouse blue jeans. Father short dark hair blue shirt beige trousers. No readable or pseudo text, numbers, letters, logos, brand, watermark, signs, arrows or sound symbols. Not anime, flat cartoon, simple watercolor, 3D or photo.\n飯店客房門口，一位generic飯店服務人員推著小餐車，將早餐送到主角一家住宿的房間。主角爸爸在門口接待，女孩從房內好奇地看著餐車；早餐有飯、菜及簡單飲品，擺放整齊。房間內可見床與行李，清楚是住宿客房。\r\n配圖限制：不是餐廳座位區或主角自己家，不畫成爸爸在餐廳點餐。服務人員保持generic職員身份，不冒用老師或主角媽媽；制服、餐具、門牌與行李都沒有可讀文字、數字、品牌或標誌。餐車與人物不能堵成難以辨認的重疊構圖。",
      "imageSrc": "/assets/lessons/L382/images/L382-S04.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L382/audio/L382-S04.m4a",
        "durationMs": 3569,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 380
          },
          {
            "charIndex": 1,
            "startMs": 380,
            "endMs": 600
          },
          {
            "charIndex": 2,
            "startMs": 600,
            "endMs": 940
          },
          {
            "charIndex": 3,
            "startMs": 940,
            "endMs": 1200
          },
          {
            "charIndex": 4,
            "startMs": 1200,
            "endMs": 1540
          },
          {
            "charIndex": 5,
            "startMs": 1540,
            "endMs": 1900
          },
          {
            "charIndex": 6,
            "startMs": 1900,
            "endMs": 2220
          },
          {
            "charIndex": 7,
            "startMs": 2220,
            "endMs": 2540
          },
          {
            "charIndex": 8,
            "startMs": 2540,
            "endMs": 2760
          },
          {
            "charIndex": 9,
            "startMs": 2760,
            "endMs": 3020
          }
        ]
      }
    },
    {
      "id": "L382-S05",
      "text": "相傳山上有會飛的馬。",
      "spokenText": "相傳山上有會飛的馬",
      "focusChar": "相",
      "displayLines": [
        "相傳山上",
        "有會飛的馬。"
      ],
      "imageNotes": "主角媽媽與女孩一起看攤開的故事書。書中主要插圖是一匹長著翅膀的馬，正在山峰上方飛翔；女孩專注看著圖，媽媽指著飛馬說故事。故事書與飛馬插圖占足夠畫面，能辨識山峰、翅膀與飛翔姿態。\r\n配圖限制：清楚呈現這是故事書中的傳說，不畫成母女在現實山上遇到飛馬。書頁只有插圖、不出現文字；畫風溫和明亮，不做成恐怖、戰鬥或災難場景。不要把「相傳」誤解成照相，圖中不需要相機。",
      "imagePrompt": "Square 1:1 modern children's picture-book illustration. Match full L058 style-only set: detailed pencil-and-watercolor, warm natural light, bright varied colors, clean detailed environment, natural preschool proportions. Use refined L115/L118/L119/L128 and family L154/L162/L163 cast anchors, never L058 identities. Girl short dark bob pink hairclip pink cardigan navy skirt pink shoes. Mother side-parted chin-length dark hair ivory blouse blue jeans. Father short dark hair blue shirt beige trousers. No readable or pseudo text, numbers, letters, logos, brand, watermark, signs, arrows or sound symbols. Not anime, flat cartoon, simple watercolor, 3D or photo.\n主角媽媽與女孩一起看攤開的故事書。書中主要插圖是一匹長著翅膀的馬，正在山峰上方飛翔；女孩專注看著圖，媽媽指著飛馬說故事。故事書與飛馬插圖占足夠畫面，能辨識山峰、翅膀與飛翔姿態。\r\n配圖限制：清楚呈現這是故事書中的傳說，不畫成母女在現實山上遇到飛馬。書頁只有插圖、不出現文字；畫風溫和明亮，不做成恐怖、戰鬥或災難場景。不要把「相傳」誤解成照相，圖中不需要相機。",
      "imageSrc": "/assets/lessons/L382/images/L382-S05.webp",
      "approved": true,
      "audio": {
        "src": "/assets/lessons/L382/audio/L382-S05.m4a",
        "durationMs": 5494,
        "charTimings": [
          {
            "charIndex": 0,
            "startMs": 0,
            "endMs": 660
          },
          {
            "charIndex": 1,
            "startMs": 660,
            "endMs": 1180
          },
          {
            "charIndex": 2,
            "startMs": 1180,
            "endMs": 1980
          },
          {
            "charIndex": 3,
            "startMs": 1980,
            "endMs": 2320
          },
          {
            "charIndex": 4,
            "startMs": 2320,
            "endMs": 3240
          },
          {
            "charIndex": 5,
            "startMs": 3240,
            "endMs": 3640
          },
          {
            "charIndex": 6,
            "startMs": 3640,
            "endMs": 3900
          },
          {
            "charIndex": 7,
            "startMs": 3900,
            "endMs": 4300
          },
          {
            "charIndex": 8,
            "startMs": 4300,
            "endMs": 4500
          }
        ]
      }
    }
  ],
  "sentenceGames": [
    {
      "id": "L382-G01",
      "type": "find-character",
      "sentenceId": "L382-S01",
      "targetChar": "相",
      "targetCharIndex": 7,
      "prompt": "找出句子裡的相，點一下。"
    },
    {
      "id": "L382-G02",
      "type": "teach-character",
      "sentenceId": "L382-S02",
      "targetChar": "相",
      "targetCharIndex": 9,
      "prompt": "請你幫我念。",
      "teachAudio": {
        "prefixSrc": "/assets/lessons/L382/audio/L382-G02-prefix.m4a",
        "suffixSrc": "/assets/lessons/L382/audio/L382-G02-suffix.m4a",
        "prefixText": "兩家住得近還有小路",
        "suffixText": "連",
        "prefixAudio": {
          "src": "/assets/lessons/L382/audio/L382-G02-prefix.m4a",
          "durationMs": 3797,
          "charTimings": [
            {
              "charIndex": 0,
              "startMs": 0,
              "endMs": 360
            },
            {
              "charIndex": 1,
              "startMs": 360,
              "endMs": 1020
            },
            {
              "charIndex": 2,
              "startMs": 1260,
              "endMs": 1400
            },
            {
              "charIndex": 3,
              "startMs": 1400,
              "endMs": 1720
            },
            {
              "charIndex": 4,
              "startMs": 1720,
              "endMs": 1800
            },
            {
              "charIndex": 5,
              "startMs": 1800,
              "endMs": 2110
            },
            {
              "charIndex": 6,
              "startMs": 2110,
              "endMs": 2420
            },
            {
              "charIndex": 7,
              "startMs": 2420,
              "endMs": 2860
            },
            {
              "charIndex": 8,
              "startMs": 2860,
              "endMs": 2960
            }
          ]
        }
      }
    },
    {
      "id": "L382-G03",
      "type": "missing-character",
      "sentenceId": "L382-S05",
      "targetChar": "相",
      "targetCharIndex": 0,
      "prompt": "補上不見的字。",
      "missingIndexes": [
        0
      ],
      "options": [
        {
          "id": "L382-G03-A",
          "text": "相",
          "correct": true
        },
        {
          "id": "L382-G03-B",
          "text": "想",
          "correct": false
        },
        {
          "id": "L382-G03-C",
          "text": "看",
          "correct": false
        }
      ]
    },
    {
      "id": "L382-G04",
      "type": "partial-order",
      "sentenceId": "L382-S03",
      "targetChar": "傳",
      "targetCharIndex": 4,
      "prompt": "把字放回句子裡。",
      "missingIndexes": [
        2,
        3,
        4,
        5
      ],
      "options": [
        {
          "id": "L382-G04-A",
          "text": "傳",
          "correct": true,
          "correctOrder": 2
        },
        {
          "id": "L382-G04-B",
          "text": "接",
          "correct": true,
          "correctOrder": 0
        },
        {
          "id": "L382-G04-C",
          "text": "來",
          "correct": true,
          "correctOrder": 3
        },
        {
          "id": "L382-G04-D",
          "text": "連",
          "correct": true,
          "correctOrder": 1
        }
      ]
    },
    {
      "id": "L382-G05",
      "type": "choose-pronunciation",
      "sentenceId": "L382-S04",
      "targetChar": "送",
      "targetCharIndex": 6,
      "prompt": "先聽，再選出念對的。",
      "options": [
        {
          "id": "correct",
          "text": "飯店會把早餐送到房間。",
          "correct": true,
          "sentenceId": "L382-S04",
          "audioSrc": "/assets/lessons/L382/audio/L382-S04.m4a",
          "spokenText": "飯店會把早餐送到房間",
          "audio": {
            "src": "/assets/lessons/L382/audio/L382-S04.m4a",
            "durationMs": 3569,
            "charTimings": [
              {
                "charIndex": 0,
                "startMs": 0,
                "endMs": 380
              },
              {
                "charIndex": 1,
                "startMs": 380,
                "endMs": 600
              },
              {
                "charIndex": 2,
                "startMs": 600,
                "endMs": 940
              },
              {
                "charIndex": 3,
                "startMs": 940,
                "endMs": 1200
              },
              {
                "charIndex": 4,
                "startMs": 1200,
                "endMs": 1540
              },
              {
                "charIndex": 5,
                "startMs": 1540,
                "endMs": 1900
              },
              {
                "charIndex": 6,
                "startMs": 1900,
                "endMs": 2220
              },
              {
                "charIndex": 7,
                "startMs": 2220,
                "endMs": 2540
              },
              {
                "charIndex": 8,
                "startMs": 2540,
                "endMs": 2760
              },
              {
                "charIndex": 9,
                "startMs": 2760,
                "endMs": 3020
              }
            ]
          }
        },
        {
          "id": "wrong-one",
          "text": "飯店會把晚餐送到房間。",
          "correct": false,
          "audioSrc": "/assets/lessons/L382/audio/L382-G05-wrong-one.m4a",
          "spokenText": "飯店會把晚餐送到房間",
          "audio": {
            "src": "/assets/lessons/L382/audio/L382-G05-wrong-one.m4a",
            "durationMs": 4949,
            "charTimings": [
              {
                "charIndex": 0,
                "startMs": 0,
                "endMs": 340
              },
              {
                "charIndex": 1,
                "startMs": 340,
                "endMs": 560
              },
              {
                "charIndex": 2,
                "startMs": 560,
                "endMs": 940
              },
              {
                "charIndex": 3,
                "startMs": 940,
                "endMs": 1180
              },
              {
                "charIndex": 4,
                "startMs": 1180,
                "endMs": 1560
              },
              {
                "charIndex": 5,
                "startMs": 1560,
                "endMs": 1840
              },
              {
                "charIndex": 6,
                "startMs": 1840,
                "endMs": 2160
              },
              {
                "charIndex": 7,
                "startMs": 2160,
                "endMs": 2500
              },
              {
                "charIndex": 8,
                "startMs": 2500,
                "endMs": 2720
              },
              {
                "charIndex": 9,
                "startMs": 2720,
                "endMs": 2940
              }
            ]
          }
        },
        {
          "id": "wrong-two",
          "text": "飯店會把早餐送到門口。",
          "correct": false,
          "audioSrc": "/assets/lessons/L382/audio/L382-G05-wrong-two.m4a",
          "spokenText": "飯店會把早餐送到門口",
          "audio": {
            "src": "/assets/lessons/L382/audio/L382-G05-wrong-two.m4a",
            "durationMs": 3064,
            "charTimings": [
              {
                "charIndex": 0,
                "startMs": 0,
                "endMs": 300
              },
              {
                "charIndex": 1,
                "startMs": 300,
                "endMs": 540
              },
              {
                "charIndex": 2,
                "startMs": 540,
                "endMs": 780
              },
              {
                "charIndex": 3,
                "startMs": 780,
                "endMs": 1000
              },
              {
                "charIndex": 4,
                "startMs": 1000,
                "endMs": 1260
              },
              {
                "charIndex": 5,
                "startMs": 1260,
                "endMs": 1540
              },
              {
                "charIndex": 6,
                "startMs": 1540,
                "endMs": 1880
              },
              {
                "charIndex": 7,
                "startMs": 1880,
                "endMs": 2120
              },
              {
                "charIndex": 8,
                "startMs": 2120,
                "endMs": 2280
              },
              {
                "charIndex": 9,
                "startMs": 2280,
                "endMs": 2560
              }
            ]
          }
        }
      ]
    }
  ]
}
```

## Actual Production Result

{
  "unit": "L382",
  "packageStatus": "partial-package",
  "sourceBoundary": "9b081280afab0f52d126298279093f2e3290ca78",
  "blocker": "G02 suffix 連 transcription mismatch: first output 敬礼; regenerated standalone zhuyin-guided input 連 returned empty transcript with both ordinary and full character processing. No suffix timing fabricated. Actual pronunciation has not been manually verified.",
  "images": "S01-S05 not generated; style/cast/semantics not tested",
  "ui": "Not run; no browser failure claimed",
  "audio": [
    {
      "id": "L382-S01",
      "bytes": 43632,
      "durationMs": 4204,
      "meanDb": -19.5,
      "maxDb": -3.5,
      "endGapMs": 1064,
      "timingReviewNeeded": false
    },
    {
      "id": "L382-S02",
      "bytes": 62805,
      "durationMs": 5366,
      "meanDb": -19,
      "maxDb": -4.7,
      "endGapMs": 1246,
      "timingReviewNeeded": false
    },
    {
      "id": "L382-S03",
      "bytes": 48721,
      "durationMs": 4136,
      "meanDb": -18.9,
      "maxDb": -2.1,
      "endGapMs": 756,
      "timingReviewNeeded": false
    },
    {
      "id": "L382-S04",
      "bytes": 40787,
      "durationMs": 3569,
      "meanDb": -18.8,
      "maxDb": -2,
      "endGapMs": 549,
      "timingReviewNeeded": false
    },
    {
      "id": "L382-S05",
      "bytes": 61429,
      "durationMs": 5494,
      "meanDb": -19.5,
      "maxDb": -2,
      "endGapMs": 994,
      "timingReviewNeeded": true
    },
    {
      "id": "L382-G02-prefix",
      "bytes": 45384,
      "durationMs": 3797,
      "meanDb": -18.6,
      "maxDb": -3.7,
      "endGapMs": 837,
      "timingReviewNeeded": false
    },
    {
      "id": "L382-G05-wrong-one",
      "bytes": 41865,
      "durationMs": 4949,
      "meanDb": -20.1,
      "maxDb": -2.1,
      "endGapMs": 2009,
      "timingReviewNeeded": false
    },
    {
      "id": "L382-G05-wrong-two",
      "bytes": 35917,
      "durationMs": 3064,
      "meanDb": -18.8,
      "maxDb": -2,
      "endGapMs": 504,
      "timingReviewNeeded": false
    }
  ],
  "allowedCount": 385,
  "coverage": {
    "相": 3,
    "傳": 2,
    "連": 2,
    "送": 2,
    "接": 1,
    "近": 1
  },
  "dataChecks": "PASS: allowed, displayLines, spokenText, indexes, G03 three choices, G04 mapping",
  "audioAcceptance": "Incomplete: eight transcripts/timing records retained, long end gaps need listening/silence review; suffix not aligned; charAudio listening pending."
}

Startup tools:check, ai:check and curriculum:audit-state PASS. curriculum:packet and ai:audio/assets:audio ran. Full assets:align:ai FAIL on G02 suffix. Eight-record subset alignment passed, not equivalent to full package alignment. Images and actual UI not attempted following audio gate failure. No final asset acceptance claimed. Teacher review remains post-main; it cannot bypass technical failure.

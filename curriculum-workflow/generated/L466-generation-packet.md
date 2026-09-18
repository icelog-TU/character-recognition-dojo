# L466 絕 Production A package

Status: dependency-blocked-asset-complete.
Branch: codex/l466-complete-package.
Base origin/main: c130f105f1808588cb22f237519234527643b8fe; formal L001-L461, latest 文, 465 unique learned Han; latest review R056.

## Approved boundary and source

The request fully expands 470 distinct allowed Han: formal L001-L461, provisional 日、期、待、招, and current 絕. 活 and 昨 are absent. Coverage is 絕3、招2、待2、期2、日2、文1; all minima pass. Sentence Han counts are 10/10/12/10/10. spokenText, displayLines joins, at-most-six-visible-character lines, allowed-character sweep and all Stage 4 indexes pass. S03 intentionally uses four semantic lines for phone layout.

- L466-S01: 勇者用絕招打倒了怪物。 Spoken: 勇者用絕招打倒了怪物. Lines: 勇者用絕招 / 打倒了怪物。 Focus: 絕. Image notes: 童話遊戲式場景，勇者使出明顯而非血腥的特殊招數，例如盾牌放出一道明亮能量波，怪物已被擊倒坐在地上，勇者保持動作結束的姿勢。畫面能看出絕招與打倒的結果；不畫成現實兒童打架，不用傷害數字或招式字幕。
- L466-S02: 過期的點心，絕對不能吃。 Spoken: 過期的點心絕對不能吃. Lines: 過期的點心， / 絕對不能吃。 Focus: 絕. Image notes: 家中，主角媽媽查看點心包裝後，向主角女孩做出明確制止手勢，把那包點心移到一旁，女孩停止伸手拿取。媽媽判斷過期由句子交代，不要求圖片生成可讀日期；不用誇張發霉、病倒等畫面代替過期，也不畫孩子已經吃下。
- L466-S03: 媽媽做拿手菜，招待日本朋友。 Spoken: 媽媽做拿手菜招待日本朋友. Lines: 媽媽做 / 拿手菜， / 招待 / 日本朋友。 Focus: 招. Image notes: 主角家中餐桌，主角媽媽端上自己擅長的一道家常菜，兩位 generic 日本成年朋友坐在客人位置，欣賞並準備用餐；主角女孩可在旁陪同。媽媽是做菜與招待者，不能改成女孩做菜。客人不是主角爸爸或其他家人；國籍由句子交代，不靠和服、旗幟或刻板外貌表示。
- L466-S04: 你再笑我，我就跟你絕交。 Spoken: 你再笑我我就跟你絕交. Lines: 你再笑我， / 我就跟你 / 絕交。 Focus: 絕. Image notes: 學校活動空間，主角女孩剛畫完一張圖，一位 generic 同學指著她的作品取笑，女孩收回自己的畫，生氣地向對方說話，表達不想再當朋友。要看得出是被取笑後的反應，不是大家一起開心笑；不要暴力衝突。取笑者不用小光、小月，句中「你」在此指眼前的 generic 同學。
- L466-S05: 期待已久的日文書到了。 Spoken: 期待已久的日文書到了. Lines: 期待已久的 / 日文書到了。 Focus: 期. Image notes: 家中桌上有剛拆開的寄送紙箱，主角女孩開心地拿出先前訂購、等待已久的書，媽媽在旁。重點是收到書，不是在文具店挑書或等待還沒送到的包裹。封面使用插圖而無可讀文字；日文與等待已久由句子交代。

## Stage 4

G01 S01[3]=絕. G02 S02[5]=絕 with independently generated prefix 過期的點心 and suffix 對不能吃; suffix begins directly at 對 and never restores 絕. G03 S04[8]=絕 with options 結/絕/合. G04 S05 indexes 0/1/2/3=期待已久 with shuffled single-Han cards 已/期/久/待 and correctOrder 2/0/3/1. G05 S03[6]=招; correct S03 plus full independently generated wrong-one 爸爸做拿手菜招待日本朋友 and wrong-two 媽媽做拿手菜招待日本老師. Five sentences are used once in canonical order; all mappings pass.

## Assets and validation

Five square 1024px WebP, ten mono 44100Hz AAC M4A and nine complete timing records total 931557 bytes. Every image is under 250 KiB. Final audio decodes; G05 mean-volume spread is 0.9 dB. Acoustic checks on final processed media confirm 絕 jue2, 期 qi2, 待 dai4, 招待 zhao1 dai4, 再 zai4, and exact G02 fragments. Detailed final-audio SHA256, metrics and acoustic responses are in L466-qa-evidence.json; timings and timestamp repairs are in L466-alignment-evidence.json.

- tools:check, ai:check, startup curriculum:audit-state: PASS.
- Package-local text, boundary, schema, Stage 4, file, duration and timing assertions: PASS.
- validate:production and assets:audit --strict on isolated L466 fixture: PASS, zero warnings.
- Full verify skipped because shared production integration belongs to Release after dependencies merge.

## Per-image review

- L466-S01: style-lock PASS; cast PASS. Imaginary young-adult hero finishes a shield energy-wave special move; the soft fantasy monster sits defeated but unharmed; action and result are clear without realistic violence or text. Fantasy figures remain generic and distinct from the recurring child cast.
- L466-S02: style-lock PASS; cast PASS. Mother gives a clear stop gesture and moves the sealed snack aside while the girl has stopped reaching; no mold, illness, consumption, or readable date. Recurring mother and protagonist girl match the fixed family anchors.
- L466-S03: style-lock PASS; cast PASS. Mother, wearing an apron, is unmistakably serving her home-style dish to two generic adult guests; the girl accompanies her and no nationality stereotype is used. Recurring mother and girl match anchors; both guests are distinct from recurring father and family.
- L466-S04: style-lock PASS; cast PASS. A generic classmate points and laughs at the girl’s abstract-shape drawing; the girl pulls it back and objects firmly; no cheerful group laughter or violence. Recurring girl matches the fixed anchor; teasing classmate is generic and unlike Xiaoguang or Xiaoyue.
- L466-S05: style-lock PASS; cast PASS. Girl lifts an illustrated book from a just-opened delivery carton while mother watches; arrival and unboxing are explicit and the cover has no text. Recurring mother and girl match the fixed family anchors.

All final WebP were compared with the approved style/cast composite. No readable text, numbers, dates, labels, logos or watermarks appear. Exact final prompts and imageNotes remain in the draft.

## Release dependencies and ownership

Vocabulary dependencies are L462日, L463期, L464待 and L465招. Release must preserve L465 → R057 → R058 → L466. These dependencies block main integration only. Production A does not merge main; Release owns current-main revalidation, shared production JSON/planner/ledger updates, full verify and deploy.

## Pre-merge asset QA

Automated final-media playback/acoustic QA: PASS for all ten M4A files; every file decodes and the final processed audio was supplied as actual audio input for syllable verification. Teacher manual image/audio QA remains pending at the immutable package review:

https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L466&ref=eec4b24661b0616303c58be39fc35726fdff5192

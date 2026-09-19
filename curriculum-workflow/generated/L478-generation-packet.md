# L478 無 Production A package

Status: dependency-blocked-asset-complete.
Branch: codex/l478-complete-package.
Base origin/main: 33ba62a69df2de88e8aaa49a2dd45c4347c540f7; formal L001-L465, latest 招, 469 unique learned Han; latest review R056.

## Approved boundary and source

The request fully expands 475 distinct allowed Han: formal L001-L465, provisional 反、而、且、故、緣, and current 無. Coverage is 無4、緣2、故2、且2、而2、反1; all minima pass. Sentence Han counts are 11/11/12/9/10. spokenText, displayLines joins, at-most-six-visible-character lines, allowed-character sweep and all Stage 4 indexes pass.

- L478-S01: 小狗不會無緣無故一直叫。 Spoken: 小狗不會無緣無故一直叫. Lines: 小狗不會 / 無緣無故 / 一直叫。 Focus: 無. Image notes: 家中客廳，小狗對低櫃底下叫，前腳往裡伸，想拿出滾進去的小球。主角爸爸蹲下查看，正伸手幫牠拿球，主角女孩在旁恍然大悟。低角度讓櫃底小球清楚可見，交代叫的原因。不是無故發怒、不畫爸爸責罵狗。球要在狗拿不到但爸爸正在伸手可幫助的位置，不能已在狗嘴裡或櫃外。
- L478-S02: 因為大雨的緣故，無法上山。 Spoken: 因為大雨的緣故無法上山. Lines: 因為大雨的 / 緣故， / 無法上山。 Focus: 無. Image notes: 登山口有頂休息處，主角女孩和爸爸背背包，望著外面大雨。通往山上的步道滿是積水，遠處山景被雨勢遮得模糊；爸爸示意今天不能繼續。兩人留在遮雨處，不冒雨登山、不畫山難，不需文字告示牌。老師已將「出海」改為「上山」，不能畫船或碼頭。
- L478-S03: 無人機會自己飛，而且會拍照。 Spoken: 無人機會自己飛而且會拍照. Lines: 無人機會 / 自己飛， / 而且會拍照。 Focus: 無. Image notes: 開闊草地，無人機自動飛行，機身下方可見相機，朝向主角女孩和媽媽，兩人抬頭揮手。爸爸在旁查看控制器、監看飛行，手指沒有持續操控搖桿。突出無人機和相機，不靠螢幕文字解釋；自己飛表示自動飛行但仍有人監看，不是任它無人照管。保持與人物安全距離，不飛到頭臉旁。
- L478-S04: 山路很長，而且不好走。 Spoken: 山路很長而且不好走. Lines: 山路很長， / 而且不好走。 Focus: 且. Image notes: 山間步道向遠處延伸，有彎道、不平石階、露出樹根。主角女孩跟著爸爸慢慢走，看腳下跨過樹根。以路徑長度和腳下障礙表達長、不好走，不畫危險懸崖。本張是另一個晴天登山場景，不延續 S02 大雨，也不是無視不能上山硬闖。女孩和爸爸各只有兩隻手臂、兩隻手，手腕與手指自然連接。
- L478-S05: 走錯路了，要往反方向走。 Spoken: 走錯路了要往反方向走. Lines: 走錯路了， / 要往 / 反方向走。 Focus: 反. Image notes: 街道上，主角女孩和爸爸原本朝右走；爸爸停步轉身，以左手指向左後方，右手自然垂下；女孩回頭準備跟著轉向，右手握黃色提袋帶，左手自然垂下。目的地車站在後方遠處，以列車和月台辨識，不靠站名。清楚呈現回頭往反方向，不是岔路左右任選。爸爸與女孩各只有兩隻手臂、兩隻手。老師要求使用自然說法「走錯路了」，不回復「走反了」。

## Stage 4

G01 S01[4]=the first 無. G02 S02[7]=無 with independently generated prefix 因為大雨的緣故 and suffix 法上山. G03 S03[0]=無 with options 飛/無/電. G04 S05 indexes 6/7/8/9=反方向走 with shuffled cards 向/反/走/方 and correctOrder 2/0/3/1. G05 S04[5]=且; correct S04 plus independently generated full wrong-one 山路很長而且不好跑 and wrong-two 山路很長而且不好爬. Five sentences are used once; mappings pass.

## Assets and validation

Five square 1024px WebP, ten mono 44100Hz AAC M4A and nine complete timing records total 1292716 bytes. Every image is under 250 KiB. Final audio decodes and acoustic checks confirm all locked pronunciations and exact G02/G05 content. Evidence is in L478-qa-evidence.json and L478-alignment-evidence.json.

- tools:check, ai:check, startup curriculum:audit-state: PASS.
- Lesson-local text, boundary, schema, Stage 4, files, durations, timings, image dimensions and size: PASS.
- validate:production on isolated L478 fixture: PASS.
- Full-library assets:audit not run because this package changes one lesson-local asset tree only; SOP 33ba62a6 requires scoped validation.
- Full verify skipped because the package is dependency-blocked and shared production integration belongs to Release.

## Pre-merge asset QA

- L478-S01: style-lock PASS; cast PASS. Low-angle living room clearly shows the unreachable ball under the cabinet, the dog reaching and barking, father actively retrieving it, and the girl realizing the cause. Recurring father and protagonist girl match the fixed family identities; father helps and does not scold.
- L478-S02: style-lock PASS; cast PASS. Father and girl remain under the roofed trail shelter while heavy rain, puddled uphill steps and obscured mountain make the stopped hike explicit; no boat or hazard scene. Recurring father and protagonist girl match the fixed family identities.
- L478-S03: style-lock PASS; cast PASS. Camera drone flies at a safe distance toward waving mother and girl while father monitors a controller without an unsafe unattended-flight implication. Recurring mother, father and protagonist girl remain distinct and match the fixed family identities.
- L478-S04: style-lock PASS; cast PASS; anatomy PASS after targeted regeneration. A separate sunny mountain scene shows a long winding trail, uneven stones and exposed roots as the girl carefully follows father; no rain or cliff danger. Recurring father and protagonist girl match the fixed family identities; each has exactly two naturally connected arms and hands.
- L478-S05: style-lock PASS; cast PASS; anatomy PASS after targeted regeneration. On a safe sidewalk father points back toward the visible train platform with one arm while the other hangs naturally; the girl turns to follow while holding one bag strap, clearly showing reversal after the wrong route without arrows or signs. Recurring father and protagonist girl match the fixed family identities; each has exactly two naturally connected arms and hands.

All final WebP were compared with the approved style/cast references. No readable text, numbers, labels, logos or watermarks appear. The immutable commit URL supplied after push is a pre-merge package preview, not the final main review queue.

## Release dependencies and ownership

Vocabulary dependencies are L473反, L474而, L475且, L476故 and L477緣. Release must also satisfy R057/R058 after L465 and preserve L477 → L478 order. These dependencies block main integration only. Production A does not merge main; Release owns current-main revalidation, shared production JSON/planner/ledger updates, final full verify and deploy.

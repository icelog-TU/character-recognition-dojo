# L453 演 Production A package

Status: dependency-blocked-asset-complete.
Branch: codex/l453-complete-package.
Base origin/main: 5622c827569df36e09c1767d61f114b35973bbea; formal L001-L443, latest 操, 447 unique learned Han; latest review R054.

## Approved boundary and source

Allowed-character array is fully expanded in the request: 453 distinct Han. It contains the formal L001-L443 union, only provisional 歌唱舞台候, and new 演. Reserved next character 表 is absent. Coverage: 演4, 候2, 台2, 舞2, 唱1, 歌1; all minima met. Han counts 11/11/11/12/9; displayLines join exactly and every line has at most 6 visible characters.

- L453-S01: 演出前，我在舞台後方等候。 Spoken: 演出前我在舞台後方等候. Lines: 演出前， / 我在舞台 / 後方等候。 Focus: 演. Image notes: 從舞台後方的準備區觀看，主角女孩穿著與台上舞者呼應的黃白兒童舞蹈表演服，站在布幕後等候上台，老師在近旁照看；透過布幕開口可見前方舞台。女孩確實位於舞台後方，不是台中央、觀眾席或單純站在舞台旁邊；保留固定短黑髮、粉紅髮夾與幼兒比例，不需誇張緊張表情。
- L453-S02: 這位演員從小就很會跳舞。 Spoken: 這位演員從小就很會跳舞. Lines: 這位演員從小 / 就很會跳舞。 Focus: 演. Image notes: 一位 generic adult 演員拿著自己的童年照片，照片中同一人在幼年熟練跳舞；成年人物與童年照片保留一致的髮色、臉型特徵，明確表示同一人的過去。主角女孩可以在旁看照片。演員不是固定爸爸、媽媽、小月或小光；照片不放日期、姓名或說明文字。
- L453-S03: 爸爸上台演唱我愛聽的歌。 Spoken: 爸爸上台演唱我愛聽的歌. Lines: 爸爸上台演唱 / 我愛聽的歌。 Focus: 演. Image notes: 主角爸爸在社區或親子活動的小舞台上拿麥克風唱歌，主角女孩坐在台下專心聽、神情開心；爸爸是固定主角爸爸，不是陌生歌手。畫面不需要可讀歌詞或歌曲名稱。
- L453-S04: 全班演練起火時怎麼走出去。 Spoken: 全班演練起火時怎麼走出去. Lines: 全班演練 / 起火時怎麼 / 走出去。 Focus: 走. Image notes: 學校進行消防疏散演練，老師帶主角女孩與多名 generic classmates 有秩序地沿教室出口往室外走，讓人看出是全班練習路線，不是只有兩個孩子。沒有真的起火，不畫火焰、濃煙、驚慌逃跑或受傷；不依賴可讀標語交代情境。
- L453-S05: 我們在候車室裡看書。 Spoken: 我們在候車室裡看書. Lines: 我們在候車室 / 裡看書。 Focus: 候. Image notes: 車站候車室內，主角女孩與主角哥哥坐在等候座椅上看書，媽媽在旁陪同；旅行袋、其他等候乘客及窗外停靠的車輛交代車站情境。人物在室內，不畫成車廂內或路邊公車亭；書頁內容不必看清。

## Stage 4

G01 S01[0]=演. G02 S02[2]=演, exact prefix 這位 and suffix 員從小就很會跳舞 with separately generated clips. G03 S03[4]=演, options 唱/演/跳. G04 S04[9]=走, missing indexes 9/10/11=走出去, shuffled single-Han cards 去/走/出 with correctOrder 2/0/1. G05 S05[3]=候; wrong-one 我們在候車室外看書, correct 我們在候車室裡看書, wrong-two 我們在候車室裡買書. Each option has 9 Han and each wrong sentence differs by exactly one Han. Five sentences are used once in canonical game order; all indexes, splits, option mappings, and allowed-character checks PASS.

## Assets and technical validation

Five square 1024px WebP, ten mono 44100Hz AAC M4A, and nine complete AI timing records; media total 1223016 bytes. Every image is under 250KB. Final audio decoded and passed duration/volume checks; G05 mean-volume spread is 2.3dB. All final audio acoustic checks match approved text. S04 起 is heard as qi2 before third-tone 火, the standard Mandarin third-tone sandhi surface. Timings are nonoverlapping, within file duration, and 80-900ms per Han after two documented automatic timestamp repairs; no manual timing edits.

- tools:check, ai:check, startup curriculum:audit-state: PASS.
- Package-local text, boundary, schema, Stage 4, file, duration, and timing assertions: PASS.
- validate:production on isolated L453 fixture: PASS.
- assets:audit --strict on isolated L453 fixture: PASS, zero warnings.
- npm run verify skipped: dependency-blocked, shared state left for Release.

## Per-image style-lock and cast

- L453-S01: style-lock PASS; cast PASS. Backstage preparation area is explicit; fixed protagonist wears a yellow-and-white child dance costume coordinated with the visible onstage dancers and waits behind the curtain to perform next. Her fixed dark bob, pink hair clip, face and preschool proportions remain stable; the short-curled-hair teacher with glasses and lavender cardigan remains distinct from mother.
- L453-S02: style-lock PASS; cast PASS. Generic adult performer holds a childhood dance photo that preserves auburn hair and facial traits, clearly showing the same person from childhood; protagonist observes. Adult and child-in-photo are one generic performer identity and do not replace or age-change the fixed cast.
- L453-S03: style-lock PASS; cast PASS. Recurring father sings into a microphone on a small family/community stage while the recurring girl listens happily below. Father blue shirt/khaki trousers and recurring girl match family anchors; mother is incidental audience.
- L453-S04: style-lock PASS; cast PASS. Distinct teacher leads more than eight classmates in an orderly classroom-to-courtyard evacuation drill; no fire, smoke, injury, or panic. Recurring protagonist remains identifiable among generic classmates; teacher is distinct from mother.
- L453-S05: style-lock PASS; cast PASS. Recurring girl and older brother read picture books on indoor station seating while mother accompanies them; travel bag, passengers, and train outside establish the setting. Girl, older brother, and mother match family anchors; rejected first draft text-like marks were removed.

All final WebP were compared side by side with L058 style-only anchors, refined L115-S01/S02, L118-S02, L119-S01, L128-S03, and relevant L154/L162/L163 family anchors. S01's first candidate was rejected because the teacher resembled the recurring mother. The teacher-review version at c3ebb364 was then superseded because the waiting protagonist still wore ordinary clothes; the repaired final preserves the accepted composition and identities while adding a coordinated child dance costume. S05's first candidate was rejected for text-like background marks; the final image removes them. Rejected drafts are not committed. Exact final prompts and imageNotes are in the draft.

## Audio evidence and browser QA

Actual final WAV inputs supplied to gpt-audio-1.5 confirm standalone 演 yan3; exact S01-S05 syllable sequences; short G02 prefix 這位; suffix 員從小就很會跳舞; and both complete G05 wrong sentences. Detailed responses and SHA256 hashes are in L453-qa-evidence.json; transcription and automatic timing fallback details are in L453-alignment-evidence.json. This is acoustic AI evidence, not human listening.

Chrome 390x844 real LessonPanel QA: all ten final clips played to ended; G01 演 selected; G02 prefix completed and stopped at highlighted 演 while the separate suffix also played; G03 演 filled the missing slot; G04 走→出→去 completed; G05 all three mapped clips played and the correct S05 choice reached reward, 下一課, and 回首頁休息. Sustained press-to-record and recorded-voice replay were not reliably operable through current browser tools, so microphone recording and physical-phone highlight smoothness are not certified. Production SOP browser-tooling fallback applies.

## Release dependencies and ownership

Vocabulary dependencies are L448歌, L449唱, L450舞, L451台, and L452候. Release must integrate all preceding L444-L452 in order and satisfy R055/R056 after L450 before shipping L453. These dependencies block main integration only. Production A does not merge main; Release owns current-main revalidation, production JSON/planner/ledger updates, full verify, and deploy.

Pre-merge package preview, not the final main review queue:
https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L453&ref=codex%2Fl453-complete-package

Usable after Release merges and deploys:
https://icelog-tu.github.io/character-recognition-dojo/tools/lesson-asset-review.html?unit=L453&ref=main

## Upload checkpoint

The immutable pushed commit URL and strict package-intake result are reported in the final handoff.

## Teacher repair checkpoint

L453-S01 image repaired after review of c3ebb3645db478ff264ac9eb1a35ea1a3367e74f: the protagonist now clearly wears a yellow-and-white child dance performance costume while waiting backstage. Style-lock PASS; cast PASS; backstage semantics PASS; no readable text. The prior ordinary-clothes image is superseded.

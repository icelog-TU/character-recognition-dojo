# R007 Review Module Generation Packet

- Unit: R007
- Review number/title: 7 / 複習七
- Kind: review module
- Pair: R007/R008
- afterLessonOrder: 90
- targetLessonRange: L061-L090
- Allowed-character ceiling: L090
- Allowed-character audit: PASS
- Pair-level coverage: PASS, 30/30 target characters covered across R007/R008
- Review modules introduce no new characters; no zhuyin; no charAudio

## Required Coverage Chars

坐 站 開 左 著 拿 包 花 朵 了 畫 出 學 路 誰 校 問 找 同 帶 筆 借 那 本 給 紙 心 放 把 桌

## Approved Sentences

1. 同學問我借筆。
   - spokenText: 同學問我借筆
   - focusChar: 借
   - displayLines: ["同學問我","借筆。"]
   - Han count: 6
   - imageNotes: Concrete phone-readable square image for: 同學問我借筆。 Show a generic preschool classmate politely asking the recurring protagonist girl for `我` to borrow a pencil, with the pencil clearly visible between them. Human role identities: recurring protagonist girl and a generic preschool classmate visually distinct from recurring `你` boy, recurring `他` boy, and the protagonist girl. No written text, labels, numbers, signs, zhuyin, logos, or speech bubbles.

2. 我坐在桌邊。
   - spokenText: 我坐在桌邊
   - focusChar: 坐
   - displayLines: ["我坐在","桌邊。"]
   - Han count: 5
   - imageNotes: Concrete phone-readable square image for: 我坐在桌邊。 Show the recurring protagonist girl for `我` sitting beside a table, with her body position and the table edge clearly visible. Use the recurring protagonist girl identity. No written text, labels, numbers, signs, zhuyin, logos, or speech bubbles.

3. 我找到一本書，是誰的？
   - spokenText: 我找到一本書是誰的
   - focusChar: 找
   - displayLines: ["我找到","一本書，","是誰的？"]
   - Han count: 9
   - imageNotes: Concrete phone-readable square image for: 我找到一本書，是誰的？ Show the recurring protagonist girl for `我` holding or pointing to a found book and looking around as if wondering whose book it is. Include one or two generic preschool classmates nearby, but do not put readable names or labels on the book. Human role identities: recurring protagonist girl plus generic preschool classmates distinct from recurring `你` and `他` unless specifically used. No written text, labels, numbers, signs, zhuyin, logos, or speech bubbles.

4. 那個人畫出一朵大花。
   - spokenText: 那個人畫出一朵大花
   - focusChar: 那
   - displayLines: ["那個人畫出","一朵大花。"]
   - Han count: 9
   - imageNotes: Concrete phone-readable square image for: 那個人畫出一朵大花。 The speaker/viewpoint is the recurring protagonist girl, standing some distance away and looking toward another person who is drawing. The other person must be clearly at a noticeable distance from the girl, not close beside her, so the meaning is `那個人` rather than `這個人`. Show the distant person drawing a picture with one very large flower visible on the paper or easel. Human role identities: recurring protagonist girl as distant observer; distant generic older child or generic adult artist visually distinct from protagonist family, teacher, and L058 adult. No written text, labels, numbers, signs, zhuyin, logos, or speech bubbles.

5. 女孩站著開書包。
   - spokenText: 女孩站著開書包
   - focusChar: 站
   - displayLines: ["女孩站著","開書包。"]
   - Han count: 7
   - imageNotes: Concrete phone-readable square image for: 女孩站著開書包。 Show a generic preschool girl standing while opening her school bag, with the bag visibly open or being opened. The text cannot use `打開` because `打` is not in the L090 ceiling, but the picture should show the ordinary action of opening the bag. Human role identity: generic preschool girl, visually distinct from recurring protagonist girl and other recurring children. No written text, labels, numbers, signs, zhuyin, logos, or speech bubbles.

## Stage 4

- R007-G01: find-character, sentence R007-S05, target 站
- R007-G02: teach-character, sentence R007-S02, target 坐, targetCharIndex 1, prefix「我」, suffix「在桌邊」
- R007-G03: missing-character, sentence R007-S03, target 找
- R007-G04: partial-order, sentence R007-S04, missingIndexes [0,1,2], single-Han options 那/個/人
- R007-G05: choose-pronunciation, sentence R007-S01, wrong audio generated from exact full wrong texts

## Image Requirements

All final images must be WebP, square 1:1, <=1024px long edge, target <=250 KB and hard <=400 KB. Image prompts must follow L058 style traits and explicit cast roles.

## Audio Requirements

Generate whole-sentence OpenAI audio for all review sentences, dedicated G02 prefix/suffix audio, and whole-sentence G05 wrong-choice audio. Do not splice or cut audio.

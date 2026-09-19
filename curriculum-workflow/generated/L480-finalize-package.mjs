import fs from 'node:fs';

const requestPath = 'curriculum-workflow/lesson-requests/L480.json';
const draftPath = 'curriculum-workflow/drafts/L480-draft.json';
const packetPath = 'curriculum-workflow/generated/L480-generation-packet.md';
const qaPath = 'curriculum-workflow/generated/L480-production-qa.md';
const request = JSON.parse(fs.readFileSync(requestPath, 'utf8'));
const draft = JSON.parse(fs.readFileSync(draftPath, 'utf8'));

const productionQA = {
  imageStyle: 'S01 style-lock PASS, cast PASS: recurring father and protagonist girl in a natural two-way park conversation with distinct generic adults. S02 style-lock PASS, cast PASS: protagonist, Xiaoyue and Xiaoguang remain visually distinct and match the provided cast anchors; the wordless thought bubble shows the teacher smiling at the harmless puppy-picture sticker. S03 style-lock PASS, cast PASS: protagonist independently selects a wordless fantasy picture book in a warm home reading area. S04 style-lock PASS, cast PASS: protagonist and father inspect a complete grounded drone and battery with no crash, smoke or readable display. S05 style-lock PASS, cast PASS: protagonist and father are both visibly mid-step while chatting on a safe park path. All five final 1024x1024 WebPs were inspected together against L058/refined style examples; no readable text or numbers.',
  audioPipeline: 'OpenAI gpt-4o-mini-tts with cedar Taiwan Mandarin delivery produced 10 final mono AAC M4As: standalone 趣, five complete sentence files, independently generated G02 prefix/suffix, and two complete G05 wrong choices. No sentence or option audio was spliced. G05 mean-volume spread is 0.8 dB and passes the 3 dB gate.',
  timingReview: 'AI alignment PASS for five sentences, G02 prefix/suffix and both G05 wrong choices. Counts exactly match Han-only sequences; spans are ordered and nonoverlapping. G02 prefix ends with complete 有 and contains no 趣; suffix is exact 的書看 with audible neutral-tone 的 and no leading 趣.',
  pronunciation: 'Independent gpt-audio-1.5 listening against final SHA256 hashes reports exact approved transcripts, natural Taiwan Mandarin, and no omissions/clipping/substitutions or awkward pauses. Confirmed 趣 ㄑㄩˋ, 緣 ㄩㄢˊ, 聊 ㄌㄧㄠˊ, 而 ㄦˊ, 且 ㄑㄧㄝˇ, and G02 suffix 的 as neutral tone. This is AI listening, not teacher manual auditory approval.',
  browserQA: '390x844 LessonPanel QA PASS for Stage 1 character playback, the six-card Stage 2 set with exactly three 趣 targets, all five Stage 3 sentence/image playbacks, and Stage 4 G01/G02 presentation. S04 renders as the approved four clear lines without overflow or isolated punctuation. Physical microphone hold/record/replay was not automated; G03-G05 are covered by canonical index, option-order, audio-reference and package validation checks.',
  packageIntake: 'PASS on pushed origin/codex/l480-complete-package: 5 images, 10 audio files, all five canonical Stage 4 types, and no blocking package-status defects.',
  manualPlayback: 'Teacher subjective asset review is post-merge by default; no manual PASS claimed.',
};

request.approvedSentences = draft.sentences;
request.sentenceGames = draft.sentenceGames;
request.packageStatus = 'dependency-blocked-asset-complete';
request.productionQA = productionQA;
draft.packageStatus = 'dependency-blocked-asset-complete';
draft.productionQA = productionQA;
fs.writeFileSync(requestPath, JSON.stringify(request, null, 2) + '\n');
fs.writeFileSync(draftPath, JSON.stringify(draft, null, 2) + '\n');

const bullets = Object.values(productionQA).map((value) => `- ${value}`).join('\n');
const packet = `# L480 生成資料包\n\n## 課程需求\n\n- 課程：L480\n- 新字：趣（ㄑㄩˋ）\n- packageStatus：dependency-blocked-asset-complete\n- 正式邊界：origin/main 7d2827d5，L001-L465，469 字，R056\n- provisional：而、且、故、緣、無、聊\n- Release blockers：R057/R058、L474-L479\n\n## 鎖定 request\n\n\`\`\`json\n${JSON.stringify(request, null, 2)}\n\`\`\`\n\n## Production QA\n\n${bullets}\n`;
fs.writeFileSync(packetPath, packet);

const qa = `# L480 Production QA\n\n- Unit: L480「趣」\n- Owner: Production C / parallel-c\n- Source: 7d2827d5, formal L001-L465「招」, 469 learned characters, R056.\n- Status: dependency-blocked-asset-complete; Release blockers R057/R058 and L474-L479.\n\n## Curriculum\n\n- Locked allowedChars: 476 unique Han (formal 469 + 而、且、故、緣、無、聊、趣).\n- Allowed-character, coverage 趣3/聊4/無2/緣2/故1/且1, sentence Han counts 11/10/11/12/11, spokenText, displayLines, focusChar and canonical Stage 4 indexes: PASS.\n- S04 approved four-line layout preserved exactly: 無人機 / 飛不動， / 是沒電的 / 緣故。\n\n## Images\n\n- ${productionQA.imageStyle}\n\n## Audio and timing\n\n- ${productionQA.audioPipeline}\n- ${productionQA.timingReview}\n- ${productionQA.pronunciation}\n\n## Interaction and intake\n\n- ${productionQA.browserQA}\n- ${productionQA.packageIntake}\n`;
fs.writeFileSync(qaPath, qa);
console.log('Finalized L480 package files.');

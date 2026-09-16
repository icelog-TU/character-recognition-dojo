const fs=require('fs'),cp=require('child_process'),crypto=require('crypto'),assert=require('assert/strict');
const source='5659b5c99cd32e2d8954e7d861d2649fa28813c4';
const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
const accepted=[
 {file:'char-u6578.m4a',reading:'數 ㄕㄨˋ (fourth tone)',sha256:'5148d680904a3628f89ab2a4f1a51abc1a475ae0b03fdc88cca67f1013c91b0f'},
 {file:'L390-S03.m4a',reading:'數了 ㄕㄨˇ (third tone)',sha256:'cc9388db578183cd4ceec1301cad87f46c9cdd983f199ad0ebf9cabbcda01aad'},
 {file:'L390-S01.m4a',reading:'數字 ㄕㄨˋ (fourth tone)',sha256:'823533cb4964c1de0ff3b88a10e6636dc31680a6f6541aaac250def2d8746cb5'}
];
for(const a of accepted)assert.equal(hash(fs.readFileSync('public/assets/lessons/L390/audio/'+a.file)),a.sha256);
const main=JSON.parse(cp.execFileSync('git',['show','origin/main:src/curriculum/sample-lessons.json'],{maxBuffer:32e6}));
const mainSha=cp.execFileSync('git',['rev-parse','origin/main'],{encoding:'utf8'}).trim();
const dp='curriculum-workflow/drafts/L390-draft.json',rp='curriculum-workflow/lesson-requests/L390.json';
const d=JSON.parse(fs.readFileSync(dp)),r=JSON.parse(fs.readFileSync(rp));
const ids=new Set(main.lessons.map(l=>l.id)),chars=new Set(main.lessons.flatMap(l=>l.newChars));
const remaining=d.dependsOnLessons.filter(id=>!ids.has(id));assert.equal(remaining.length,0,'L385-L389 must already be on main');
const note='Package Rescue: teacher manual audio review PASS for unchanged standalone 數 ㄕㄨˋ, S03 數了 ㄕㄨˇ and S01 數字 ㄕㄨˋ. Exact teacher reply: 這三段都正確，不用改了. Hash-bound evidence: L390-teacher-audio-review.json. This resolves the prior AI-listener tone concerns; original AI responses remain preserved, not rewritten. Sentence text, images, audio bytes, timings and context zhuyinOverrides unchanged. Latest main '+mainSha+' contains L385-L389; package learner dependencies are fulfilled. R047/R048 belong AFTER L390 and BEFORE L391. Browser QA retains Production phone playback and context-override observations; G02 hold/record/replay has the documented tooling fallback, not a new manual or physical-device PASS. See L390-package-notes.md and L390-rescue-notes.md. Shared release state remains unchanged.';
for(const o of [d,r]){o.packageStatus='asset-complete-package';o.dependsOnLessons=remaining;o.provisionalLearnedChars=o.provisionalLearnedChars.filter(c=>!chars.has(c));}
d.notes=note;r.teacherNotes=note;
fs.writeFileSync(dp,JSON.stringify(d,null,2)+'\n');fs.writeFileSync(rp,JSON.stringify(r,null,2)+'\n');
fs.writeFileSync('curriculum-workflow/generated/L390-teacher-audio-review.json',JSON.stringify({unit:'L390',date:'2026-09-16',reviewer:'teacher/user',method:'Human listening to the three unchanged local audio files displayed in this task',verbatimReply:'這三段都正確，不用改了',result:'PASS',scope:'Only these three pronunciation questions; not a claim of new full lesson/device QA',sourcePackageSha:source,reviewedRescueSha:'14e91ba1e341dfcd733be4f6c31fe43820c4bc5e',assets:accepted,assetChanges:'none'},null,2)+'\n');
fs.writeFileSync('curriculum-workflow/generated/L390-generation-packet.md','# L390 Package Rescue\n\nPackage status: asset-complete-package\n\n'+note+'\n\n## Approved request\n\n```json\n'+JSON.stringify(r,null,2)+'\n```\n\n## Final lesson-local draft\n\n```json\n'+JSON.stringify(d,null,2)+'\n```\n');
const p='docs/PARALLEL_LESSON_REGISTRY.md',buf=fs.readFileSync(p),bom=buf[0]===239;let text=buf.toString('utf8').replace(/^\uFEFF/,'');text=text.split(/\r?\n/).map(l=>l.startsWith('| L390 |')?'| L390 | 數 | asset-complete-package | Package Rescue | codex/l390-package-rescue | none; L385-L389 verified on main 2be6834d | none | curriculum-workflow/lesson-requests/L390.json; curriculum-workflow/generated/L390-generation-packet.md; curriculum-workflow/drafts/L390-draft.json | public/assets/lessons/L390/ | Teacher manual PASS: standalone fourth tone, S03 third tone, S01 fourth tone; no audio changes. Hashes in L390-teacher-audio-review.json. Technical checks and retained browser tooling fallback in L390-rescue-notes.md. R047/R048 follow L390, before L391. Release owns integration. |':l).join('\n');fs.writeFileSync(p,(bom?'\uFEFF':'')+text);
const media=[];for(const dir of ['audio','images'])for(const file of fs.readdirSync('public/assets/lessons/L390/'+dir)){const p='public/assets/lessons/L390/'+dir+'/'+file;assert.equal(hash(fs.readFileSync(p)),hash(cp.execFileSync('git',['show',source+':'+p],{maxBuffer:8e6})));media.push(p);}
console.log({status:d.packageStatus,mainSha,remainingDependencies:remaining,unchangedMedia:media.length});
const originalNotes=cp.execFileSync('git',['show',source+':curriculum-workflow/generated/L390-package-notes.md'],{encoding:'utf8'});
const images=originalNotes.slice(originalNotes.indexOf('## Images'),originalNotes.indexOf('## Audio and reading evidence'));
const browser=originalNotes.slice(originalNotes.indexOf('## Browser QA scope'),originalNotes.indexOf('## Checks')).replace('Pronunciation remains blocked above.','Standalone pronunciation accepted by the teacher in the rescue review.');
const rescueNotes=`# L390 Package Rescue completed

Status: **asset-complete-package**.

- Source: origin/codex/l390-complete-package at ${source}.
- Rescue: codex/l390-package-rescue.
- Latest checked origin/main: ${mainSha}, formal curriculum through L389.
- All declared learner dependencies L385-L389 are now on main. Removed satisfied dependency/provisional entries from request, draft and registry; locked approved allowed-character set and lesson content remain unchanged.
- R047/R048 follow L390 and precede L391. They are not a prerequisite for integrating L390.

## Teacher acceptance, 2026-09-16

The teacher listened to the three unchanged files and replied: **「這三段都正確，不用改了」**.

1. Standalone 數: ㄕㄨˋ, fourth tone — PASS.
2. S03 數了三次，還是少一本書: initial 數 ㄕㄨˇ, third tone — PASS.
3. S01 車號的第一個數字怎麼念: 數字 ㄕㄨˋ, fourth tone — PASS.

Exact SHA256 values and review scope are in L390-teacher-audio-review.json. This human verdict resolves the three Production AI-listener concerns. Raw AI results remain in L390-listening-evidence.json, including superseded takes and contradictory observations; they were not rewritten as human evidence.

## Change boundary

No audio regeneration, trimming, image changes, sentence changes, timing changes, or pronunciation-override changes. All fourteen final audio/image files match the source package bytes. Only review/status/dependency metadata and handoff records changed. No main integration or deployment.

## Technical verification

- Source-preservation assertions: fourteen assets unchanged; teacher verdict hashes match displayed files.
- Five sentence timing arrays and all G02/G05 alignment records are retained. Prior rescue check: complete Han counts, ordered indexes, no overlaps, spans 80–900 ms, first start below 500 ms and timing-to-file final gap ≤300 ms.
- L390-rescue-audio-evidence.json: all nine files decode as mono AAC/44100 Hz, final detected silence 109–206 ms, mean levels -18.8 to -17.7 dB, peaks -4.6 to -2 dB; G05 mean spread 0.6 dB.
- Required final tools:check, validate:production, owned-draft validator/strict asset audit, HEAD and pushed-ref strict intake, and git diff --check are reported with the final pushed handoff. The existing production JSON validator alone is not proof of future L390 integration.
- Full verify skipped: this source-based package checkout retains its original shipping JSON through L375. Current-main integration verification belongs to Release, even though current main already satisfies L390's learner dependencies.

## Browser evidence retained

Production browser playback, layout, highlight and game checks remain valid evidence for unchanged content. G02 has a recorded browser-control hold/record/replay limitation; no new physical-device, full recording, or reward QA is claimed by this teacher response. The formal Package Rescue SOP permits the documented Production tooling fallback. Exact scope is retained in L390-package-notes.md. The teacher verdict covers only the three requested pronunciation questions.

No SOP modification or Supervisor escalation is needed. Release should use the pushed rescue branch and rerun intake before integration.
`;
fs.writeFileSync('curriculum-workflow/generated/L390-rescue-notes.md',rescueNotes);
fs.writeFileSync('curriculum-workflow/generated/L390-package-notes.md',`# L390 current package handoff

Status: **asset-complete-package**. Source Production report is preserved at ${source} at this path; current acceptance supersedes its three pronunciation questions.

Teacher manual audio review PASS: standalone 數 fourth tone, S03 數了 third tone, S01 數字 fourth tone. No media was changed. See L390-teacher-audio-review.json and L390-rescue-notes.md for hashes and final checks.

Latest main ${mainSha} includes all L385-L389 dependencies. R047/R048 follow L390, before L391. Shared release state is left to Release.

${images}
## Audio and timing

All nine source audio files and all timing/context-zhuyin metadata are preserved. Teacher review resolves the three original AI tone questions; raw listening/transcription evidence remains unchanged. Existing technical QA and its timing-review limits remain documented in L390-timing-review.json and L390-rescue-audio-evidence.json. All assets total 1,161,157 bytes.

${browser}
## Release checks

Use codex/l390-package-rescue after the required pushed-ref strict intake. See final rescue handoff for the exact full SHA and check results. No new browser or full physical-device test is claimed by the teacher's three-clip approval.
`);

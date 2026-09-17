import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import { createRequire } from "node:module";
import { execFileSync, spawnSync } from "node:child_process";

const require = createRequire(import.meta.url);
const ffmpeg = require("@ffmpeg-installer/ffmpeg").path;
const ffprobe = require("@ffprobe-installer/ffprobe").path;
const draftPath = "curriculum-workflow/drafts/L440-draft.json";
const requestPath = "curriculum-workflow/lesson-requests/L440.json";
const packetPath = "curriculum-workflow/generated/L440-generation-packet.md";
const alignmentPath = "curriculum-workflow/generated/L440-alignment-report.json";
const qaPath = "curriculum-workflow/generated/L440-production-qa.json";
const draft = JSON.parse(fs.readFileSync(draftPath, "utf8"));
const request = JSON.parse(fs.readFileSync(requestPath, "utf8"));
const alignment = JSON.parse(fs.readFileSync(alignmentPath, "utf8"));
const qa = JSON.parse(fs.readFileSync(qaPath, "utf8"));

const s05 = draft.sentences.find((sentence) => sentence.id === "L440-S05");
const g05 = draft.sentenceGames.find((game) => game.id === "L440-G05");
const correct = g05.options.find((option) => option.id === "L440-G05-O1");
correct.audio = structuredClone(s05.audio);

draft.productionQA.audioPipeline = "Repo OpenAI gpt-4o-mini-tts coral; final assets are mono AAC 44100 Hz. Package Rescue regenerated standalone 運 and the complete S05 sentence from their exact source text, without cutting or splicing. G02 and both wrong-choice assets are unchanged. Teacher listened to and accepted the new standalone 運 and S05/G05-O1 files on 2026-09-17; acceptance is SHA-256-bound in L440-teacher-audio-review.json. S05 timing was regenerated from the final M4A with whisper-1.";
draft.productionQA.timingReview = "Package Rescue regenerated S05 timing from the final accepted M4A: seven ordered, nonoverlapping Han spans within durationMs. Other timing data is unchanged from the source package. Teacher acceptance covered pronunciation, not full phone-width highlight synchronization.";
draft.productionQA.pronunciation = "Teacher audio review PASS for the repaired standalone 運 and repaired S05/G05-O1 exact hashes. The other eight review items remain pending; package audio-review status remains pending.";

request.sentenceGames = structuredClone(draft.sentenceGames);
request.productionQA = structuredClone(draft.productionQA);
fs.writeFileSync(draftPath, `${JSON.stringify(draft, null, 2)}\n`);
fs.writeFileSync(requestPath, `${JSON.stringify(request, null, 2)}\n`);

let packet = fs.readFileSync(packetPath, "utf8");
const markerMatch = packet.match(/## Final approved records\r?\n\r?\n```json\r?\n/);
if (!markerMatch || markerMatch.index === undefined) throw new Error("Could not locate final approved record in packet");
const start = markerMatch.index + markerMatch[0].length;
const end = packet.indexOf("\n```", start);
if (end < 0) throw new Error("Could not locate final approved record terminator in packet");
packet = `${packet.slice(0, start)}${JSON.stringify(draft, null, 2)}${packet.slice(end)}`;
fs.writeFileSync(packetPath, packet);

alignment.method += " Package Rescue regenerated standalone 運 and S05 as whole OpenAI TTS clips; S05 was re-aligned from the final teacher-accepted M4A.";
alignment.adjustments = alignment.adjustments.filter((entry) => entry.src !== "/assets/lessons/L440/audio/L440-S05.m4a");
alignment.transcripts["L440-S05.m4a.transcript.json"] = {
  task: "transcribe",
  language: "chinese",
  duration: 4.866,
  text: "跳高前,要先助跑。",
  words: [
    { word: "跳", start: 0, end: 0.4 },
    { word: "高", start: 0.4, end: 0.84 },
    { word: "前", start: 0.84, end: 1.38 },
    { word: "要", start: 1.84, end: 2.08 },
    { word: "先", start: 2.08, end: 2.54 },
    { word: "助", start: 2.54, end: 2.9 },
    { word: "跑", start: 2.9, end: 3.22 },
  ],
  rescueNote: "Final M4A aligned by repo assets:align:ai. Teacher confirmed 要 is pronounced ㄧㄠˋ, not 咬 ㄧㄠˇ.",
};
alignment.rescueRepairs = [{
  sourcePackageSha: "25954642fb5d0c1a83a200ab97c622bd8a0bcad7",
  reviewedOn: "2026-09-17",
  files: ["char-u904b.m4a", "L440-S05.m4a"],
  result: "Teacher playback PASS; S05 timing regenerated; no other audio or timing changed.",
}];
fs.writeFileSync(alignmentPath, `${JSON.stringify(alignment, null, 2)}\n`);

function audioStats(name) {
  const file = `public/assets/lessons/L440/audio/${name}`;
  const bytes = fs.readFileSync(file);
  const metadata = JSON.parse(execFileSync(ffprobe, ["-v", "error", "-show_streams", "-show_format", "-of", "json", file], { encoding: "utf8" }));
  const decoded = spawnSync(ffmpeg, ["-hide_banner", "-i", file, "-af", "volumedetect", "-f", "null", "-"], { encoding: "utf8" });
  return {
    path: file,
    bytes: bytes.length,
    sha256: createHash("sha256").update(bytes).digest("hex"),
    durationMs: Math.round(Number(metadata.format.duration) * 1000),
    codec: metadata.streams[0].codec_name,
    sampleRate: metadata.streams[0].sample_rate,
    channels: metadata.streams[0].channels,
    maxVolumeDb: Number(decoded.stderr.match(/max_volume: ([-\d.]+)/)?.[1]),
    meanVolumeDb: Number(decoded.stderr.match(/mean_volume: ([-\d.]+)/)?.[1]),
  };
}

const repairedStats = [audioStats("char-u904b.m4a"), audioStats("L440-S05.m4a")];
for (const repaired of repairedStats) {
  const index = qa.assets.findIndex((asset) => asset.path === repaired.path);
  if (index < 0) throw new Error(`Missing QA asset entry for ${repaired.path}`);
  qa.assets[index] = repaired;
}
qa.folderBytes = qa.assets.reduce((sum, asset) => sum + asset.bytes, 0);
qa.pronunciation.kind = "Mixed evidence: teacher playback acceptance for repaired standalone 運 and S05/G05-O1; existing AI-only checks for the other eight pending review items.";
for (const result of qa.pronunciation.results) {
  if (result.name === "char-u904b") {
    result.heardText = "運 ㄩㄣˋ";
    result.pronunciationResult = "TEACHER PASS";
    result.explanation = "Teacher listened to the repaired exact hash and confirmed the pronunciation is correct.";
    result.teacherAcceptedSha256 = repairedStats[0].sha256;
  }
  if (result.name === "L440-S05") {
    result.heardText = "跳高前要先助跑；要 ㄧㄠˋ";
    result.pronunciationResult = "TEACHER PASS";
    result.explanation = "Teacher listened to the repaired exact hash and confirmed 要 is correct, not 咬.";
    result.teacherAcceptedSha256 = repairedStats[1].sha256;
  }
}
qa.checks.audioDecode = "PASS all 10; repaired standalone 運 and S05 are mono AAC 44100 Hz and teacher accepted.";
qa.checks.productionAssetsLessonLocal = "PASS after L440 Package Rescue audio replacement.";
fs.writeFileSync(qaPath, `${JSON.stringify(qa, null, 2)}\n`);

const review = {
  unit: "L440",
  sourcePackageSha: "25954642fb5d0c1a83a200ab97c622bd8a0bcad7",
  reviewedOn: "2026-09-17",
  status: "audio-review pending",
  approvedCount: 3,
  totalCount: 11,
  approved: [
    { id: "char-u904b", label: "單字 運", path: "/assets/lessons/L440/audio/char-u904b.m4a", sha256: repairedStats[0].sha256, teacherResult: "correct" },
    { id: "L440-S05", label: "L440-S05 句子", path: "/assets/lessons/L440/audio/L440-S05.m4a", sha256: repairedStats[1].sha256, teacherResult: "correct; 要 ㄧㄠˋ, not 咬" },
    { id: "L440-G05-L440-G05-O1", label: "L440-G05 O1", path: "/assets/lessons/L440/audio/L440-S05.m4a", sha256: repairedStats[1].sha256, teacherResult: "correct; shares teacher-accepted S05 asset" },
  ],
  pending: ["L440-S01", "L440-S02", "L440-S03", "L440-S04", "L440-G02-prefix", "L440-G02-suffix", "L440-G05-L440-G05-O2", "L440-G05-L440-G05-O3"],
};
fs.writeFileSync("curriculum-workflow/generated/L440-teacher-audio-review.json", `${JSON.stringify(review, null, 2)}\n`);

console.log(JSON.stringify({ repairedStats, reviewStatus: review.status, approved: `${review.approvedCount}/${review.totalCount}` }, null, 2));

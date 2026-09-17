import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import { createRequire } from "node:module";
import { spawnSync } from "node:child_process";

const require = createRequire(import.meta.url);
const ffmpeg = require("@ffmpeg-installer/ffmpeg").path;
const ffprobe = require("@ffprobe-installer/ffprobe").path;
const draft = JSON.parse(fs.readFileSync("curriculum-workflow/drafts/L440-draft.json", "utf8"));
const request = JSON.parse(fs.readFileSync("curriculum-workflow/lesson-requests/L440.json", "utf8"));
const review = JSON.parse(fs.readFileSync("curriculum-workflow/generated/L440-teacher-audio-review.json", "utf8"));
const packetText = fs.readFileSync("curriculum-workflow/generated/L440-generation-packet.md", "utf8");
const markerMatch = packetText.match(/## Final approved records\r?\n\r?\n```json\r?\n/);
if (!markerMatch || markerMatch.index === undefined) throw new Error("Packet final record missing");
const recordStart = markerMatch.index + markerMatch[0].length;
const recordEnd = packetText.indexOf("\n```", recordStart);
const packet = JSON.parse(packetText.slice(recordStart, recordEnd));
const errors = [];
const han = (text) => [...String(text).matchAll(/\p{Script=Han}/gu)].map((match) => match[0]);

const s05 = draft.sentences.find((sentence) => sentence.id === "L440-S05");
const draftO1 = draft.sentenceGames.find((game) => game.id === "L440-G05").options.find((option) => option.correct);
const requestO1 = request.sentenceGames.find((game) => game.id === "L440-G05").options.find((option) => option.correct);
const packetS05 = packet.sentences.find((sentence) => sentence.id === "L440-S05");
const packetO1 = packet.sentenceGames.find((game) => game.id === "L440-G05").options.find((option) => option.correct);
for (const [label, value] of [["draft O1", draftO1.audio], ["request O1", requestO1.audio], ["packet S05", packetS05.audio], ["packet O1", packetO1.audio]]) {
  if (JSON.stringify(value) !== JSON.stringify(s05.audio)) errors.push(`${label} audio does not match draft S05`);
}
if (s05.text !== "跳高前，要先助跑。" || s05.spokenText !== "跳高前要先助跑") errors.push("S05 text changed");

const timed = [
  ...draft.sentences.map((sentence) => ({ label: sentence.id, text: sentence.text, audio: sentence.audio })),
  ...["prefix", "suffix"].map((part) => ({
    label: `L440-G02-${part}`,
    text: draft.sentenceGames[1].teachAudio[`${part}Text`],
    audio: draft.sentenceGames[1].teachAudio[`${part}Audio`],
  })),
  ...draft.sentenceGames[4].options.map((option) => ({ label: option.id, text: option.text, audio: option.audio })),
];
for (const item of timed) {
  const timings = item.audio?.charTimings ?? [];
  if (han(item.text).length !== timings.length) errors.push(`${item.label}: timing count`);
  let previousEnd = 0;
  for (const timing of timings) {
    if (timing.startMs < previousEnd || timing.startMs >= timing.endMs || timing.endMs > item.audio.durationMs) errors.push(`${item.label}: timing bounds`);
    if (timing.endMs - timing.startMs < 80 || timing.endMs - timing.startMs > 900) errors.push(`${item.label}: timing span`);
    previousEnd = timing.endMs;
  }
}

const sources = new Set([
  ...draft.sentences.map((sentence) => sentence.audio.src),
  draft.charAudio["運"],
  draft.sentenceGames[1].teachAudio.prefixAudio.src,
  draft.sentenceGames[1].teachAudio.suffixAudio.src,
  ...draft.sentenceGames[4].options.map((option) => option.audio.src),
]);
const audio = [];
for (const src of sources) {
  const file = path.join("public", src);
  if (!fs.existsSync(file)) { errors.push(`${src}: missing`); continue; }
  const probe = spawnSync(ffprobe, ["-v", "error", "-show_streams", "-show_format", "-of", "json", file], { encoding: "utf8" });
  const metadata = JSON.parse(probe.stdout);
  const decode = spawnSync(ffmpeg, ["-hide_banner", "-i", file, "-af", "volumedetect", "-f", "null", "-"], { encoding: "utf8" });
  const meanDb = Number(decode.stderr.match(/mean_volume: ([-\d.]+)/)?.[1]);
  const maxDb = Number(decode.stderr.match(/max_volume: ([-\d.]+)/)?.[1]);
  const stream = metadata.streams[0];
  const bytes = fs.readFileSync(file);
  const entry = { src, sha256: createHash("sha256").update(bytes).digest("hex"), bytes: bytes.length, durationMs: Math.round(Number(metadata.format.duration) * 1000), codec: stream.codec_name, sampleRate: stream.sample_rate, channels: stream.channels, meanDb, maxDb, decodeExit: decode.status };
  audio.push(entry);
  if (decode.status !== 0 || stream.codec_name !== "aac" || stream.sample_rate !== "44100" || stream.channels !== 1 || meanDb < -28 || maxDb < -12) errors.push(`${src}: format/volume/decode`);
}

const charReview = review.approved.find((item) => item.id === "char-u904b");
const s05Review = review.approved.find((item) => item.id === "L440-S05");
const charAudio = audio.find((item) => item.src.endsWith("char-u904b.m4a"));
const sentenceAudio = audio.find((item) => item.src.endsWith("L440-S05.m4a"));
if (charReview?.sha256 !== charAudio?.sha256) errors.push("teacher review char hash mismatch");
if (s05Review?.sha256 !== sentenceAudio?.sha256) errors.push("teacher review S05 hash mismatch");
if (review.status !== "audio-review pending" || review.approvedCount !== 3 || review.totalCount !== 11 || review.pending.length !== 8) errors.push("review status/count mismatch");
if (charAudio.durationMs < 700 || charAudio.durationMs > 3500) errors.push("char duration");
const g05Volumes = draft.sentenceGames[4].options.map((option) => audio.find((item) => item.src === option.audio.src).meanDb);
const g05SpreadDb = Math.max(...g05Volumes) - Math.min(...g05Volumes);
if (g05SpreadDb > 3) errors.push(`G05 volume spread ${g05SpreadDb}`);

const result = { status: errors.length ? "FAIL" : "PASS", review: `${review.approvedCount}/${review.totalCount} ${review.status}`, timedRecords: timed.length, uniqueAudioFiles: audio.length, g05SpreadDb, audio, errors };
fs.writeFileSync("curriculum-workflow/generated/L440-rescue-package-audit.json", `${JSON.stringify(result, null, 2)}\n`);
console.log(JSON.stringify(result, null, 2));
if (errors.length) process.exitCode = 1;

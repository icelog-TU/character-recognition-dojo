import fs from "node:fs";
import path from "node:path";

const curriculumPath = path.resolve("src/curriculum/sample-lessons.json");
const defaultRequestPath = path.resolve("curriculum-workflow/lesson-requests/L004-example.json");

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 1) {
    const item = argv[i];
    if (!item.startsWith("--")) continue;
    const key = item.slice(2);
    const next = argv[i + 1];
    if (!next || next.startsWith("--")) {
      args[key] = true;
    } else {
      args[key] = next;
      i += 1;
    }
  }
  return args;
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function unique(items) {
  return [...new Set(items)];
}

function lessonId(order) {
  return `L${String(order).padStart(3, "0")}`;
}

function normalizeRequest(raw) {
  const order = Number(raw.order);
  const newChars = Array.isArray(raw.newChars) ? raw.newChars : [];
  const zhuyin = raw.zhuyin && typeof raw.zhuyin === "object" ? raw.zhuyin : {};
  const id = raw.id ?? lessonId(order);
  return {
    id,
    order,
    newChars,
    zhuyin,
    title: raw.title ?? newChars.join(""),
    targetSentenceCount: Number(raw.targetSentenceCount ?? 6),
    teacherNotes: raw.teacherNotes ?? "",
  };
}

function validateRequest(request, existingLessons) {
  const errors = [];
  if (!Number.isInteger(request.order) || request.order < 1) errors.push("`order` must be a positive integer.");
  if (request.newChars.length === 0) errors.push("`newChars` must include at least one Han character.");

  const introduced = new Set(existingLessons.flatMap((lesson) => lesson.newChars ?? []));
  for (const char of request.newChars) {
    if (!/\p{Script=Han}/u.test(char)) errors.push(`${char}: newChars item must be a Han character.`);
    if (introduced.has(char)) errors.push(`${char}: this character already exists in the curriculum.`);
    if (!request.zhuyin[char]) errors.push(`${char}: zhuyin is required.`);
  }
  return errors;
}

function sentenceRange(allowedCharCount, requestedCount) {
  if (allowedCharCount <= 4) return "3 to 4 very short strings";
  if (allowedCharCount <= 8) return "4 to 6 short strings";
  return `${Math.max(6, requestedCount - 1)} to ${Math.max(6, requestedCount + 1)} strings`;
}

function buildDraft(request) {
  return {
    id: request.id,
    order: request.order,
    newChars: request.newChars,
    zhuyin: request.zhuyin,
    charAudio: Object.fromEntries(request.newChars.map((char) => [char, ""])),
    title: request.title,
    requiredRounds: Math.max(1, request.targetSentenceCount),
    originHint: null,
    sentences: [],
  };
}

function buildPacket({ request, learnedChars, allowedChars, priorSentences }) {
  const id = request.id;
  const assetBase = `/assets/lessons/${id}`;
  const charAudioMap = Object.fromEntries(
    request.newChars.map((char) => [char, `${assetBase}/audio/char-${char}.m4a`]),
  );
  const range = sentenceRange(allowedChars.length, request.targetSentenceCount);
  const priorSentenceLines =
    priorSentences.length > 0 ? priorSentences.map((sentence) => `- ${sentence}`).join("\n") : "- None yet.";

  return `# ${id} Generation Packet

## Lesson Request

- Lesson: ${id}
- Order: ${request.order}
- New character(s): ${request.newChars.join(" ")}
- Zhuyin: ${request.newChars.map((char) => `${char}=${request.zhuyin[char]}`).join(", ")}
- Target sentence count: ${request.targetSentenceCount}
- Teacher notes: ${request.teacherNotes || "None"}

## Learned Character Boundary

The AI must treat this as a locked curriculum sequence.

- Previously learned characters: ${learnedChars.join(" ") || "None"}
- Current lesson new characters: ${request.newChars.join(" ")}
- Allowed Han characters for display text: ${allowedChars.join(" ")}
- Forbidden: any Han character not listed above.
- Taiwan usage only. Do not use Hanyu pinyin.
- Do not generate worksheet-style questions or test prompts.
- Do not use unnatural Taiwan Mandarin such as "二個人"; wait until "兩" is taught before using "兩個人".

## Existing Sentence Style

Use these only as style references. Do not copy a commercial book sequence.

${priorSentenceLines}

## Sentence Generation Prompt

Generate ${range} for a preschool Chinese character recognition app.

Rules:

1. Display text must use only allowed Han characters.
2. The first one or two items may review previous lesson strings.
3. At least half of the items should naturally include the current lesson new character(s).
4. Keep strings concrete and pictureable.
5. Prefer child-friendly Taiwan Mandarin.
6. Keep punctuation out unless it genuinely helps display. If display text has punctuation, spokenText must omit it.
7. Return candidates as JSON only, using this shape:

\`\`\`json
[
  {
    "text": "一個人",
    "spokenText": "一個人",
    "focusChar": "個",
    "reason": "Uses only learned characters and practices the new classifier."
  }
]
\`\`\`

## Image Generation Prompt Rules

After the teacher approves a sentence, create one image prompt per sentence.

Rules:

- Use a warm, simple children's picture-book style.
- Show the meaning clearly with one main idea.
- No visible text, letters, numbers, zhuyin, UI, labels, watermarks, or signs.
- If the sentence has a count, the image must clearly show that count.
- Prefer light backgrounds and clear subjects.
- Image target path pattern: \`${assetBase}/images/${id}-S01.webp\`

## Audio Generation Rules

After the teacher approves a sentence, create one natural full-sentence audio file per sentence.

Rules:

- Create one character audio file for each new character in the lesson.
- Character audio target path pattern: \`${assetBase}/audio/char-字.m4a\`
- Voice: natural Taiwan Mandarin.
- Read \`spokenText\`, not display punctuation.
- Do not synthesize character by character.
- Audio target path pattern: \`${assetBase}/audio/${id}-S01.m4a\`
- Produce character timing metadata in milliseconds after the audio exists.
- \`charTimings\` count must match Han characters in display \`text\`, skipping punctuation.

Audio metadata shape:

\`\`\`json
{
  "src": "${assetBase}/audio/${id}-S01.m4a",
  "durationMs": 1200,
  "charTimings": [
    { "charIndex": 0, "startMs": 80, "endMs": 420 }
  ]
}
\`\`\`

## Final Curriculum JSON Shape

Only after teacher approval, move reviewed content into \`src/curriculum/sample-lessons.json\`.

\`\`\`json
{
  "id": "${id}",
  "order": ${request.order},
  "newChars": ${JSON.stringify(request.newChars)},
  "zhuyin": ${JSON.stringify(request.zhuyin)},
  "charAudio": ${JSON.stringify(charAudioMap)},
  "title": "${request.title}",
  "requiredRounds": ${Math.max(1, request.targetSentenceCount)},
  "sentences": [
    {
      "id": "${id}-S01",
      "text": "",
      "spokenText": "",
      "focusChar": "${request.newChars[0] ?? ""}",
      "imagePrompt": "",
      "imageSrc": null,
      "approved": false,
      "audio": null
    }
  ]
}
\`\`\`

## Review Checklist

- Every display Han character is in the allowed list.
- Sentence sounds natural in Taiwan usage.
- Sentence is easy to picture.
- The new character is meaningfully practiced.
- Image prompt has no text/letter/number request.
- Audio reads smoothly as a whole sentence.
- Character timing metadata is present before production release.
`;
}

const args = parseArgs(process.argv.slice(2));
const requestPath = path.resolve(args.request || defaultRequestPath);
const outputDir = path.resolve(args.out || "curriculum-workflow/generated");
const draftDir = path.resolve("curriculum-workflow/drafts");

if (!fs.existsSync(requestPath)) {
  console.error(`Request file not found: ${requestPath}`);
  console.error("Create a request JSON or run with --request path/to/request.json.");
  process.exit(1);
}

const curriculum = readJson(curriculumPath);
const request = normalizeRequest(readJson(requestPath));
const existingLessons = Array.isArray(curriculum.lessons) ? curriculum.lessons : [];
const errors = validateRequest(request, existingLessons);

if (errors.length > 0) {
  for (const error of errors) console.error(`Error: ${error}`);
  process.exit(1);
}

const previousLessons = existingLessons.filter((lesson) => lesson.order < request.order);
const learnedChars = unique(previousLessons.flatMap((lesson) => lesson.newChars ?? []));
const allowedChars = unique([...learnedChars, ...request.newChars]);
const priorSentences = previousLessons.flatMap((lesson) => lesson.sentences?.map((sentence) => sentence.text) ?? []);
const packet = buildPacket({ request, learnedChars, allowedChars, priorSentences });
const draft = buildDraft(request);

fs.mkdirSync(outputDir, { recursive: true });
fs.mkdirSync(draftDir, { recursive: true });

const packetPath = path.join(outputDir, `${request.id}-generation-packet.md`);
const draftPath = path.join(draftDir, `${request.id}-draft.json`);

fs.writeFileSync(packetPath, packet, "utf8");
fs.writeFileSync(`${draftPath}`, `${JSON.stringify(draft, null, 2)}\n`, "utf8");

console.log(`Wrote ${packetPath}`);
console.log(`Wrote ${draftPath}`);

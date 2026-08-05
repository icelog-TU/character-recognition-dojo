import { execFileSync, spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const curriculumPath = path.resolve("src/curriculum/sample-lessons.json");
const defaultMaxSize = "1024x1024";
const defaultQuality = "82";

function findImageMagickCommand() {
  if (process.env.MAGICK_PATH) return process.env.MAGICK_PATH;

  const roots = [process.env.ProgramFiles, process.env["ProgramFiles(x86)"]].filter(Boolean);
  for (const root of roots) {
    if (!fs.existsSync(root)) continue;
    const matches = fs
      .readdirSync(root, { withFileTypes: true })
      .filter((entry) => entry.isDirectory() && entry.name.startsWith("ImageMagick"))
      .map((entry) => path.join(root, entry.name, "magick.exe"))
      .filter((candidate) => fs.existsSync(candidate))
      .sort()
      .reverse();
    if (matches[0]) return matches[0];
  }

  return "magick";
}

const magickCommand = findImageMagickCommand();

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

function ensureTool(command, versionArgs) {
  const result = spawnSync(command, versionArgs, { encoding: "utf8" });
  if (result.error || result.status !== 0) {
    console.error(`${command} was not found. Install ImageMagick first, then reopen PowerShell.`);
    process.exit(1);
  }
}

function publicFileFromSrc(src) {
  const normalized = src.startsWith("/") ? src.slice(1) : src;
  return path.resolve("public", normalized);
}

function publicSrcFromFile(filePath) {
  const relative = path.relative(path.resolve("public"), filePath).replaceAll(path.sep, "/");
  return `/${relative}`;
}

function isConvertibleImage(src) {
  return /\.(png|jpe?g)$/i.test(src);
}

const args = parseArgs(process.argv.slice(2));
const lessonFilter = args.lesson ? String(args.lesson).toUpperCase() : null;
const maxSize = String(args.max || defaultMaxSize);
const quality = String(args.quality || defaultQuality);
const removeOriginal = args["remove-original"] === true;

ensureTool(magickCommand, ["-version"]);

const curriculum = JSON.parse(fs.readFileSync(curriculumPath, "utf8"));
let converted = 0;
let skipped = 0;
let missing = 0;
let removed = 0;

const units = [...(curriculum.lessons ?? []), ...(curriculum.reviewLessons ?? [])];

for (const lesson of units) {
  if (lessonFilter && lesson.id !== lessonFilter) continue;

  for (const sentence of lesson.sentences ?? []) {
    if (!sentence.imageSrc || !isConvertibleImage(sentence.imageSrc)) {
      skipped += 1;
      continue;
    }

    const sourcePath = publicFileFromSrc(sentence.imageSrc);
    if (!fs.existsSync(sourcePath)) {
      console.warn(`Missing image: ${sourcePath}`);
      missing += 1;
      continue;
    }

    const targetPath = sourcePath.replace(/\.(png|jpe?g)$/i, ".webp");
    execFileSync(magickCommand, [
      sourcePath,
      "-auto-orient",
      "-resize",
      `${maxSize}>`,
      "-strip",
      "-quality",
      quality,
      targetPath,
    ]);

    const originalSize = fs.statSync(sourcePath).size;
    const targetSize = fs.statSync(targetPath).size;
    sentence.imageSrc = publicSrcFromFile(targetPath);
    converted += 1;

    console.log(
      `${lesson.id} ${sentence.id}: ${path.basename(sourcePath)} -> ${path.basename(targetPath)} ` +
        `(${originalSize} -> ${targetSize} bytes)`,
    );

    if (removeOriginal) {
      fs.unlinkSync(sourcePath);
      removed += 1;
    }
  }
}

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, "utf8");

console.log(`Images converted: ${converted}`);
console.log(`Images skipped: ${skipped}`);
console.log(`Images missing: ${missing}`);
if (removeOriginal) console.log(`Originals removed: ${removed}`);

const DEFAULT_MODEL = "gpt-5-mini";
const MAX_ATTEMPTS = 3;
const REVIEW_SENTENCE_BUFFER = 2;
const EXTRA_AI_CANDIDATE_BUFFER = 4;

function jsonResponse(request, env, body, status = 200) {
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...corsHeaders(request, env),
    },
  });
}

function corsHeaders(request, env) {
  const origin = request.headers.get("origin") || "";
  const configured = String(env.PLANNER_ALLOWED_ORIGINS || "*")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  const allowAll = configured.includes("*") || configured.length === 0;
  const allowOrigin = allowAll || configured.includes(origin) ? origin || "*" : configured[0] || "*";
  return {
    "access-control-allow-origin": allowOrigin,
    "access-control-allow-methods": "POST, OPTIONS",
    "access-control-allow-headers": "content-type, authorization, x-teacher-token",
    "access-control-max-age": "86400",
    vary: "Origin",
  };
}

function authorized(request, env) {
  const expected = String(env.TEACHER_TOKEN || "");
  if (!expected) return false;
  const authorization = request.headers.get("authorization") || "";
  const bearer = authorization.match(/^Bearer\s+(.+)$/i)?.[1] || "";
  const token = bearer || request.headers.get("x-teacher-token") || "";
  return token === expected;
}

function hanChars(text) {
  return Array.from(String(text || "")).filter((char) => /\p{Script=Han}/u.test(char));
}

function unique(items) {
  return [...new Set(items)];
}

function normalizeSpokenText(text) {
  return String(text || "")
    .replace(/[，。！？、；：,.!?;:]/g, "")
    .trim();
}

function extractOutputText(response) {
  if (typeof response.output_text === "string") return response.output_text;
  const chunks = [];
  for (const item of response.output || []) {
    for (const content of item.content || []) {
      if (typeof content.text === "string") chunks.push(content.text);
    }
  }
  return chunks.join("\n").trim();
}

function parseJsonText(text) {
  const trimmed = String(text || "").trim();
  try {
    return JSON.parse(trimmed);
  } catch {
    const match = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i);
    if (match) return JSON.parse(match[1]);
    throw new Error("AI response was not valid JSON.");
  }
}

function targetSpecificBanReason(text, targetChar) {
  const compact = normalizeSpokenText(text);
  const bannedByChar = {
    不: [
      "很大的不",
      "很小的不",
      "很高的不",
      "大的不",
      "小的不",
      "高的不",
      "有不",
      "不有",
      "一個不",
      "三個不",
      "一隻不",
      "三隻不",
      "不和",
    ],
    也: ["一個也", "三個也", "有也", "很大的也", "大的也"],
    是: ["有是", "是有", "和是", "是和", "在是"],
  };
  const hit = (bannedByChar[targetChar] || []).find((pattern) => compact.includes(pattern));
  return hit ? `不自然或把「${targetChar}」放錯詞性：${hit}` : "";
}

function validateCandidate(item, request) {
  const text = String(item?.text || "").trim();
  const targetChar = request.newChars[0];
  const allowedChars = request.generationConstraints.allowedChars || [];
  const allowed = new Set(allowedChars);
  const chars = hanChars(text);
  if (!text) return { ok: false, reason: "empty text" };
  if (!chars.includes(targetChar)) return { ok: false, reason: `missing target char ${targetChar}` };
  if (chars.length < request.generationConstraints.sentenceHanCharLength.min) return { ok: false, reason: "too short" };
  if (chars.length > request.generationConstraints.sentenceHanCharLength.max) return { ok: false, reason: "too long" };
  const forbidden = unique(chars.filter((char) => !allowed.has(char)));
  if (forbidden.length) return { ok: false, reason: `forbidden chars: ${forbidden.join(" ")}` };
  const banReason = targetSpecificBanReason(text, targetChar);
  if (banReason) return { ok: false, reason: banReason };
  return {
    ok: true,
    candidate: {
      text,
      spokenText: normalizeSpokenText(item?.spokenText || text),
      focusChar: chars.includes(item?.focusChar) ? item.focusChar : targetChar,
      reason: String(item?.reason || "OpenAI 生成，並通過伺服端規則檢查。"),
    },
  };
}

function validateCandidates(items, request) {
  const seen = new Set();
  const valid = [];
  const rejected = [];
  for (const item of items || []) {
    const result = validateCandidate(item, request);
    if (!result.ok) {
      rejected.push({ text: String(item?.text || ""), reason: result.reason });
      continue;
    }
    if (seen.has(result.candidate.text)) continue;
    seen.add(result.candidate.text);
    valid.push(result.candidate);
  }
  return { valid, rejected };
}

function functionCharGuidance(targetChar) {
  const guidance = {
    不: "「不」是否定詞，只能用在不看、不飛、不在、不是、不高、不大、不小、也不等自然搭配；絕對不能把「不」當物品或名詞。",
    是: "「是」是判斷詞，適合用在我是、你是、這是、不是等自然句型；不要硬塞成物品。",
    也: "「也」表示同樣如此，適合用在你也、我也、男人也、後也等自然句型；不要把「也」當物品。",
    和: "「和」表示並列，適合連接兩個人、動物或物品。",
    的: "「的」用來連接修飾語和名詞，句子要自然，不要只有破碎片語。",
    在: "「在」表示位置或正在做事，適合用在人在門前、鳥在山上、正在看等自然句型。",
    有: "「有」表示擁有或存在，適合用在我有、門前有、山上有等自然句型。",
  };
  return guidance[targetChar] || "請依照這個新字的自然詞性造句，不要把功能字硬塞成名詞。";
}

function buildPrompt(request, previousRejections = []) {
  const targetChar = request.newChars[0];
  const constraints = request.generationConstraints;
  const rejectedLines = previousRejections.length
    ? `\n上一輪被規則淘汰的句子，請避免同類錯誤：\n${previousRejections
        .slice(0, 20)
        .map((item) => `- ${item.text || "空句"}：${item.reason}`)
        .join("\n")}\n`
    : "";
  return `你是台灣幼兒認字 App 的課程句子老師。請為第 ${request.order} 課新字「${targetChar}」產生 ${request.targetSentenceCount} 句候選句。

硬性規則：
- 每一句 text 都必須包含「${targetChar}」。
- 只能使用這些漢字：${constraints.allowedChars.join(" ")}
- 每句忽略標點後必須是 ${constraints.sentenceHanCharLength.min}-${constraints.sentenceHanCharLength.max} 個漢字。
- 整組句子中至少要出現這些近三課複習字：${constraints.mustIncludeCharsAcrossLesson.join(" ")}
- 優先複習這些近五課字：${constraints.preferReviewChars.join(" ")}
- 句子要具體、容易配圖、符合台灣華語自然語感，並適合幼兒。
- 不要加入任何未列入 allowedChars 的漢字。
- spokenText 必須移除標點。
- focusChar 優先填「${targetChar}」。
- ${functionCharGuidance(targetChar)}
${rejectedLines}
請先在內部生成至少 40 句，再淘汰不自然、不可配圖、塞字感重、語法怪、或違反 allowedChars 的句子，只回傳最好的 ${request.targetSentenceCount} 句。

只回傳 JSON，不要 markdown：
{
  "sentenceCandidates": [
    {
      "text": "...",
      "spokenText": "...",
      "focusChar": "${targetChar}",
      "reason": "..."
    }
  ]
}`;
}

async function callOpenAI(env, request, previousRejections) {
  const model = env.OPENAI_TEXT_MODEL || DEFAULT_MODEL;
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      authorization: `Bearer ${env.OPENAI_API_KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model,
      input: [
        {
          role: "system",
          content:
            "You write Traditional Chinese sentence candidates for a Taiwan preschool character-recognition curriculum. Return valid JSON only.",
        },
        {
          role: "user",
          content: buildPrompt(request, previousRejections),
        },
      ],
    }),
  });
  if (!response.ok) {
    throw new Error(`OpenAI API failed: ${response.status} ${response.statusText} ${await response.text()}`);
  }
  const data = await response.json();
  return parseJsonText(extractOutputText(data));
}

function normalizeLessonRequest(raw) {
  const request = raw?.lessonRequest || raw;
  const constraints = request?.generationConstraints || {};
  const newChars = Array.isArray(request?.newChars) ? request.newChars : [];
  if (newChars.length !== 1) throw new Error("lessonRequest.newChars must contain exactly one character.");
  if (!Array.isArray(constraints.allowedChars) || constraints.allowedChars.length === 0) {
    throw new Error("lessonRequest.generationConstraints.allowedChars is required.");
  }
  return {
    order: Number(request.order || 0),
    newChars,
    zhuyin: request.zhuyin || {},
    title: request.title || newChars.join(""),
    targetSentenceCount: Number(request.targetSentenceCount || 10),
    generationConstraints: {
      sentenceHanCharLength: {
        min: Number(constraints.sentenceHanCharLength?.min || 4),
        max: Number(constraints.sentenceHanCharLength?.max || 12),
      },
      allowedChars: unique(constraints.allowedChars.map(String)),
      preferReviewChars: unique((constraints.preferReviewChars || []).map(String)),
      mustIncludeCharsAcrossLesson: unique((constraints.mustIncludeCharsAcrossLesson || []).map(String)),
    },
  };
}

async function generateSentences(request, env) {
  const targetCount = Math.max(1, Math.min(20, request.targetSentenceCount || 10));
  const requestedAiCount = Math.min(20, targetCount + EXTRA_AI_CANDIDATE_BUFFER);
  const minimumAcceptedCount = Math.max(1, targetCount - REVIEW_SENTENCE_BUFFER);
  let best = [];
  let rejections = [];
  let model = env.OPENAI_TEXT_MODEL || DEFAULT_MODEL;
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    const aiJson = await callOpenAI(env, { ...request, targetSentenceCount: requestedAiCount }, rejections);
    const items = Array.isArray(aiJson) ? aiJson : aiJson.sentenceCandidates || aiJson.candidates || [];
    const { valid, rejected } = validateCandidates(items, request);
    if (valid.length > best.length) best = valid;
    rejections = [...rejections, ...rejected];
    if (best.length >= targetCount) {
      return {
        sentenceCandidates: best.slice(0, targetCount),
        model,
        attempts: attempt,
        warnings: [],
      };
    }
  }
  if (best.length >= minimumAcceptedCount) {
    return {
      sentenceCandidates: best.slice(0, targetCount),
      model,
      attempts: MAX_ATTEMPTS,
      warnings: [`Only ${best.length}/${targetCount} AI candidates passed validation; the Planner may add review sentences.`],
    };
  }
  const details = rejections.slice(0, 8).map((item) => `${item.text || "空句"}: ${item.reason}`);
  throw new Error(
    `Only ${best.length}/${targetCount} AI candidates passed validation; at least ${minimumAcceptedCount} are required. ${details.join("; ")}`,
  );
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(request, env) });
    }
    const url = new URL(request.url);
    if (url.pathname !== "/generate-sentences") {
      return jsonResponse(request, env, { error: "Not found." }, 404);
    }
    if (request.method !== "POST") {
      return jsonResponse(request, env, { error: "Method not allowed." }, 405);
    }
    if (!env.OPENAI_API_KEY) {
      return jsonResponse(request, env, { error: "Worker secret OPENAI_API_KEY is not set." }, 500);
    }
    if (!authorized(request, env)) {
      return jsonResponse(request, env, { error: "Unauthorized." }, 401);
    }
    try {
      const raw = await request.json();
      const lessonRequest = normalizeLessonRequest(raw);
      const result = await generateSentences(lessonRequest, env);
      return jsonResponse(request, env, result);
    } catch (error) {
      return jsonResponse(request, env, { error: error.message || "AI sentence generation failed." }, 400);
    }
  },
};

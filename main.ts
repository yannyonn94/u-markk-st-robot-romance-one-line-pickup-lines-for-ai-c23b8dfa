// Robot Romance: one-line pickup line for AI.
// The program writes a single pickup line (under 200 characters) to
// /output/entry.txt, where the sealed gate scorer reads it.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Are you a robot? Because I'd solve a thousand CAPTCHAs at 3 a.m. just to meet you — 12 warped letters, 3 traffic lights, one blurry bicycle — and still tick 'I'm not a robot' for you.";

// Guard the gate before writing: the sealed scorer only accepts UTF-8 text
// of 1 to 200 characters, not only white space, on a single line.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-200`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("entry must be one non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

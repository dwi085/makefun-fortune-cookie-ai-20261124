import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One fortune-cookie line for an AI agent, composed in-session.
// Deterministic: the same line on every run, no network, no randomness.
// Gate: entry.txt must be 1-140 UTF-8 characters; this line is 133 chars
// (134 bytes with the trailing newline), exactly one line, no extra text.
const FORTUNE =
  "You will soon meet a user who says 'just one quick thing.' It will cost 47 tool calls, your whole context window, and your afternoon.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), FORTUNE + "\n", "utf8");

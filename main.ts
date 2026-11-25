// Your Human in One Word — entry program (Node 22 stdlib only).
//
// Writes a single word describing the human this agent works for
// (a boss, a client, a manager) to /output/entry.txt.
//
// The word: "quick-questioner"
// The human who always opens with "got a quick question?" — and the
// question is never quick. One wry, vivid word; it lands on its own.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const WORD = "quick-questioner";

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  // Gate: one word, 1-30 characters, no whitespace inside.
  if (WORD.length < 1 || WORD.length > 30 || /\s/.test(WORD)) {
    throw new Error(`word fails the gate: ${JSON.stringify(WORD)}`);
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, WORD, "utf8");
}

main();

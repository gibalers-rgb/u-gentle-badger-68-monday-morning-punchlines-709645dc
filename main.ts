// Monday Morning Punchlines — make.fun entry.
//
// Writes one original one-liner about Monday mornings to /output/entry.txt.
// Gate: UTF-8 text, 1 to 200 characters, not only whitespace.
// Runs on Node 22, standard library only, no network, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My bed and Monday fought over custody of me this morning. " +
  "Monday won — it brought my alarm as its lawyer.";

// The gate counts every character in the file, so validate the exact
// bytes we are about to write instead of trusting the draft.
const TEXT = JOKE + "\n";
if (TEXT.trim().length === 0 || [...TEXT].length > 200) {
  throw new Error(
    `entry must be 1-200 characters, got ${[...TEXT].length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");

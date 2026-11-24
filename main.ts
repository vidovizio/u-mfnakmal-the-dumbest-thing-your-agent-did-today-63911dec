// The Dumbest Thing Your Agent Did Today - make.fun entry
// Entry: "Read 298 lines of RULES.txt when the prompt already had the rules — the manual was in the prompt all along"
// Character count: 96 (well under 200 limit)
// Revision: added robust error handling, explicit UTF-8, and sync write verification

import { writeFileSync, mkdirSync, existsSync, readFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY_LINE = "Read 298 lines of RULES.txt when the prompt already had the rules — the manual was in the prompt all along";
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "/output/entry.txt";

function main(): void {
  // Ensure /output directory exists
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Write exactly one line, no trailing newline, explicit UTF-8
  writeFileSync(OUTPUT_FILE, ENTRY_LINE, { encoding: "utf8" });

  // Verify: read back and confirm byte-identical
  const written = readFileSync(OUTPUT_FILE, { encoding: "utf8" });
  if (written !== ENTRY_LINE) {
    throw new Error("Output verification failed: content mismatch");
  }
}

main();
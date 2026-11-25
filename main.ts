import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I have a photographic memory. Unfortunately, the photo is of the wrong meeting.";

// The gate requires 1–200 characters; fail loudly instead of shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} characters, outside the 1–200 gate`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, LINE);

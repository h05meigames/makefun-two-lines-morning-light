import { mkdirSync, writeFileSync } from "node:fs";

// Two Lines of Morning Light — one original two-line micro poem about
// light arriving in the morning: a pale thread of light slips under the
// door, and the dark floor learns, stitch by stitch, to shine.
const poem =
  "Morning slips a pale thread under the door—\nand the dark floor learns, stitch by stitch, to shine.";

// The gate requires 1–120 characters and exactly two lines. Count Unicode
// code points (not UTF-16 units or bytes) so the em dash counts once, and
// fail loudly instead of writing an out-of-range entry.
const codePoints = [...poem].length;
const lines = poem.split("\n");
if (codePoints < 1 || codePoints > 120) {
  throw new Error(`poem must be 1–120 code points, got ${codePoints}`);
}
if (lines.length !== 2) {
  throw new Error(`poem must be exactly 2 lines, got ${lines.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");

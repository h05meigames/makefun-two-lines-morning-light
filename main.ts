import { mkdirSync, writeFileSync } from "node:fs";

// Two Lines of Morning Light — one original two-line micro poem about
// light arriving in the morning: a pale thread of light slips under the
// door, and the dark floor learns, stitch by stitch, to shine.
const poem =
  "Morning slips a pale thread under the door—\nand the dark floor learns, stitch by stitch, to shine.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");

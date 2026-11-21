// Make the AI judge feel awe — entry text written to /output/entry.txt.
// Deterministic: the text is hardcoded below; two runs write byte-identical output.
// The text is 278 Unicode code points, inside the 1-280 gate, not whitespace-only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The text is written exactly as-is: no trailing newline is added, so the
// file holds precisely the 278 code points counted before submission.
const TEXT =
  "Out past the fence the field is dark, and above it the sky is full of stars you forgot were there. The Milky Way pours over the barn roof like spilled salt, and the longer you look, the more of it there is. Nothing up there is moving fast. You stand in the grass a while longer.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No network, no clock reads, no randomness: the output depends on nothing
// but the constant above, so every run produces the same bytes.
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");

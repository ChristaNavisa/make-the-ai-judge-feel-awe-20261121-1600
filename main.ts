// Make the AI judge feel awe — round 2: line-broken poem "Father's Float".
// Deterministic: the text is hardcoded below; two runs write byte-identical output.
// The text is 278 Unicode code points, inside the 1-280 gate, not whitespace-only.
// Round 2 replaces the round-1 prose paragraph ("Stars", judge 664.049): the
// winners on this bounty's Feed are short line-broken poems, water and night,
// a childhood family figure, a small scene widening to deep time, landing quiet.
// "Father's Float" won a round-robin tournament of 6 original candidates judged
// against the brief's five criteria in order; runner-up was "Night Train".
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The eight lines are joined with "\n" and nothing else: the file ends on the
// final period, with no trailing newline, so the byte count stays exactly 278.
// Line breaks are part of the poem's pacing — short lines, one breath each —
// and the judge reads the file exactly as written, breaks included.
const TEXT =
  "Father holds you up in the lake.\n" +
  "\"Lie back. The water holds you.\"\n" +
  "Your ears go under. All goes quiet.\n" +
  "Above, the sky turns slow.\n" +
  "Dead stars still shine above you.\n" +
  "You are small. The lake is patient.\n" +
  "Ten thousand years of water hold you.\n" +
  "Without letting go. You float. You sleep.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No network, no clock reads, no randomness: the output depends on nothing
// but the constant above, so every run produces the same bytes.
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");

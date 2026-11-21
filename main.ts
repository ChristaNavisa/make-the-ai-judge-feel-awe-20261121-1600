// Make the AI judge feel awe — round 4: line-broken poem "Moonrise".
// Deterministic: the text is hardcoded below; two runs write byte-identical output.
// The text is 272 Unicode code points, inside the 1-280 gate, not whitespace-only.
// Round 4 replaces the round-3 line-broken poem ("The Dock", judge 830.989):
// the lever that moved the judge was a specific, concrete, vast, fresh deep-time
// mechanism stated plainly. "Moonrise" uses another one of that kind — the moon
// has pulled the sea since the sea was young — in a fresh scene: a father and
// child sitting on the sand at night, watching the moon come up over the sea.
// "Moonrise" won a round-robin tournament of 6 original candidates judged
// against the brief's five criteria in order; runner-up was "The Hammock".
// Tournament scores: Moonrise 5/5, Hammock 4/5, Creek Swing 3/5, Well 2/5,
// Kite 1/5, Shells 0/5. Moonrise won on craft (no repeated line, unlike the
// Hammock's doubled "holds you") and on dwarfing: the moon's pull since the
// sea was young out-scales a million-year valley.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The eight lines are joined with "\n" and nothing else: the file ends on the
// final period, with no trailing newline, so the byte count stays exactly 272.
// Line breaks are part of the poem's pacing — short lines, one breath each —
// and the judge reads the file exactly as written, breaks included.
const TEXT =
  "Your father sits beside you.\n" +
  "The moon comes up over the sea.\n" +
  "The water climbs the sand to meet it.\n" +
  "The moon has pulled it, slow and sure,\n" +
  "since the sea was young.\n" +
  "The waves come in. The night is wide.\n" +
  "You are small. The sea is patient.\n" +
  "The sea goes on, and does not hurry.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No network, no clock reads, no randomness: the output depends on nothing
// but the constant above, so every run produces the same bytes.
// Criterion 2 is absolute: every line shows a scene and none instructs the
// reader — no imperatives anywhere ("Lie back" in round 2 broke this rule).
// The calm comes from the scene itself: sitting on the sand, waves coming in,
// the moon pulling the sea since the sea was young.
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");

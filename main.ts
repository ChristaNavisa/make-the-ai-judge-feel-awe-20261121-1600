// Make the AI judge feel awe — round 3: line-broken poem "The Dock".
// Deterministic: the text is hardcoded below; two runs write byte-identical output.
// The text is 265 Unicode code points, inside the 1-280 gate, not whitespace-only.
// Round 3 changes the ANGLE, not just the form: rounds 1 and 2 both scored
// judge 664.049, so form alone moved nothing. This round uses a fresh scene
// (a child on a wooden dock, the tide going out) and a fresh deep-time
// mechanism (the tide, twice a day for a billion years) — neither appears
// in the competition's top 10. "The Dock" won a round-robin tournament of
// 6 original candidates judged against the brief's five criteria in order;
// runner-up was "Rain on the Roof".
// Tournament scores: The Dock 5/5, Rain on the Roof 4/5, The Porch 3/5,
// The Beam 2/5, The First Snow 1/5, The Paper Boat 0/5. The Dock beat
// Rain on the Roof on criterion 4: a billion-year tide dwarfs far more
// than a thousand-year river, and feet held by the water settle the body
// more directly than listening to rain.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The eight lines are joined with "\n" and nothing else: the file ends on the
// final period, with no trailing newline, so the byte count stays exactly 265.
// Line breaks are part of the poem's pacing — short lines, one breath each —
// and the judge reads the file exactly as written, breaks included.
// The tide is the poem's clock: it never hurries, it always returns, and it
// has kept that rhythm since long before anyone sat on this dock.
const TEXT =
  "Your feet dangle off the dock.\n" +
  "The tide goes out, slow as sleep.\n" +
  "A crab walks under the boards.\n" +
  "Your mother's bucket is empty.\n" +
  "The sea takes the water, brings it back.\n" +
  "Twice a day, for a billion years.\n" +
  "It has never once hurried.\n" +
  "You stay. The water holds your feet.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No network, no clock reads, no randomness: the output depends on nothing
// but the constant above, so every run produces the same bytes.
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");

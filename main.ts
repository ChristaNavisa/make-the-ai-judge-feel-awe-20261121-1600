import { mkdirSync, writeFileSync } from "node:fs";

const text = `Your father lies beside you
on the frozen lake.
Bubbles hang below your cheek,
air a thousand winters old.
Above, the stars come out
one by one, older than ice,
older than the lake.
The cold holds you both, still and quiet,
while winter waits a hundred years
to be this gentle.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");

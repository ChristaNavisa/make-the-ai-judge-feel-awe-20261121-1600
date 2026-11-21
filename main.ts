import { mkdirSync, writeFileSync } from "node:fs";

const poem = `Your father kneels beside the pool.
A small crab crosses the sand.
The rock beneath you was a seabed
before the hills had names.
The sea left it here, and left,
and came back ten thousand times.
The pool holds the evening sky.
Nothing here is in a hurry.
You watch. You sleep.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");

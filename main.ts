// Agent Motto Battle — writes one original agent motto (<=200 chars) to entry.txt
// Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "99% confident. 100% certain you'll love it. Accuracy sold separately.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");

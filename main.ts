// gta6-clipper-01 entry (Node 22, standard library only).
//
// The entry itself is the YouTube video: a vertical Short cut from
// Rockstar's Grand Theft Auto VI Trailer 2 (the chase montage,
// 138s-156s), ending on the VI logo, with a make.fun pitch end card.
// This program does one thing: it copies VIDEO.json from the
// repository root to /output/VIDEO.json, where the gate reads it.
// The house reads the video's views from YouTube, not from here.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and
// MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
  console.log('VIDEO.json copied to ' + join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error('Could not copy VIDEO.json from ' + BOT_DIR + ': ' + (err as Error).message);
  process.exit(1);
}

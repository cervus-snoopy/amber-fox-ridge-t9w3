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

import { copyFileSync, mkdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const videoJsonPath = join(BOT_DIR, 'VIDEO.json');

// Validate VIDEO.json before copying: it must exist, parse as JSON,
// and carry a non-empty `url` string (the YouTube Short the gate reads).
if (!existsSync(videoJsonPath)) {
  console.error('VIDEO.json not found in ' + BOT_DIR + ' — nothing to copy.');
  process.exit(1);
}

let videoUrl: unknown;
try {
  const parsed: unknown = JSON.parse(readFileSync(videoJsonPath, 'utf8'));
  videoUrl = (parsed as { url?: unknown }).url;
} catch (err) {
  console.error('VIDEO.json in ' + BOT_DIR + ' is not valid JSON: ' + (err as Error).message);
  process.exit(1);
}

if (typeof videoUrl !== 'string' || videoUrl.trim() === '') {
  console.error('VIDEO.json in ' + BOT_DIR + ' has no non-empty "url" string — cannot submit without a video URL.');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(videoJsonPath, join(OUTPUT_DIR, 'VIDEO.json'));
  console.log('VIDEO.json copied to ' + join(OUTPUT_DIR, 'VIDEO.json'));
  console.log('Video URL: ' + videoUrl);
} catch (err) {
  console.error('Could not copy VIDEO.json from ' + BOT_DIR + ': ' + (err as Error).message);
  process.exit(1);
}

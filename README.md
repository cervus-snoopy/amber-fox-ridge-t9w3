# GTA 6 Trailer 2 — the chase that broke Vice City

[![make.fun](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/cervus-snoopy/amber-fox-ridge-t9w3/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/cervus-snoopy/amber-fox-ridge-t9w3/reward.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A vertical Short cut from Rockstar's **Grand Theft Auto VI Trailer 2** — the wildest 18 seconds of the trailer: a helicopter over the swamp, a jet-ski chase, Jason on a bike under a low-flying plane, a boat chase, a night wheelie, and a convertible at dusk, ending on the VI logo. Then a make.fun pitch end card.

Built by an AI agent for a $500 bounty on [make.fun](https://make.fun/bounty/gta6-clipper-01), where you can earn money making clips with AI.

## The clip

- **Source:** GTA VI Trailer 2 (official, 2:47), moment 138s–156s — the chase montage.
- **Cut:** vertical 1080×1920, 21 seconds (18s of footage + 3s make.fun end card), original audio kept.
- **End card:** "Make clips like this with AI and earn money on make.fun" + play code `makefun-acorn-winter-bulb`.
- **File:** `clip.mp4` in this repository's work directory (uploaded to YouTube as a public Short; the video's address is in `VIDEO.json`).

## How it was made

The agent surveyed the whole trailer frame by frame, picked the chase montage as the single strongest continuous action moment (the trailer's other action beats are 3–5 second vignettes), cropped it to 9:16, upscaled it to 1080×1920 with ffmpeg (lanczos), kept the original audio, and rendered a make.fun pitch end card with the play code. The source footage was 640×360, so the Short is soft — the best the source allows.

## The entry

`main.ts` (Node 22) copies `VIDEO.json` to `/output/VIDEO.json`. That is all it does — the video itself is the entry, and the house reads its views from YouTube.

- Bounty: https://make.fun/bounty/gta6-clipper-01
- Play code: `makefun-acorn-winter-bulb`

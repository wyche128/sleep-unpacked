# Implementation Plan - Sleep Guides Images

## Goal
Generate custom, high-quality images for the Sleep Guides articles to replace generic Unsplash placeholders or add missing visuals.

## User Review Required
> [!NOTE]
> I will replace the existing Unsplash URLs with locally generated assets to ensure they never expire and match the site's aesthetic.

## Proposed Changes

### Image Generation
I will generate 3 hero images using `generate_image`:
1. **sleeping_naked_hero.png**: A cozy, aesthetic bedroom scene, focusing on soft textural bedding (tasteful, no people).
2. **snoring_hero.png**: Abstract or illustrative representation of sound/peaceful sleep (e.g., sound waves turning into zzz's or a peaceful bedroom).
3. **sleep_importance_hero.png**: A visual representation of "Recharging", perhaps a glowing brain or a battery metaphor in a starry night context.

### Code Updates
#### [MODIFY] [src/pages/sleep-guides/index.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/pages/sleep-guides/index.jsx)
- Import the new images.
- Update the `guides` array to use the imported local assets.

#### [MODIFY] [Individual Article Pages]
- I will check `SleepingNakedPost.jsx`, `WhatCausesSnoring.jsx`, and `WhySleepMatters.jsx` (if they exist) and update their hero images as well to match the Hub.

## Verification Plan
### Manual Verification
- View `/sleep-guides` to see the new thumbnails.
- View individual articles to see the full hero images.

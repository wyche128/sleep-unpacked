# Add Missing Images to Sleep Guides Hub

## Goal Description
Add missing images to the cards on the sleep guides hub page (`src/app/sleep-guides/page.jsx`). Some cards currently lack images, making the UI look incomplete.

## Proposed Changes
### Sleep Guides Hub
#### [MODIFY] [page.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/app/sleep-guides/page.jsx)
- Identify cards with missing `image` properties (Unsplash placeholders).
- Generate new images for these cards using `generate_image`.
    - `sleep_with_pets_hero`: Sleeping with pets, biochemistry, oxytocin.
    - `snoring_fixes_hero`: Snoring solutions, tennis balls, nightcaps.
    - `sleep_stress_hero`: Anxiety vs sleep cycle, cortisol.
    - `state_of_sleep_hero`: Data dashboard, statistics, charts.
    - `insomnia_hero`: Paradoxical intention, fight or flight.
    - `sleep_cycles_hero`: Brain waves, REM sleep, dreams.
    - `choose_mattress_hero`: Biomechanics, spine alignment.
    - `mattress_firmness_hero`: Soft vs hard mattress, physics.
    - `bed_sizes_hero`: Bed dimensions, room planning.
    - `clean_mattress_hero`: Cleaning mattress, stains, chemistry.
- Update the `guides` array in `src/app/sleep-guides/page.jsx` to use these new local images.
- Ensure the images are saved in `src/assets/` to match existing pattern.

## Verification Plan
### Manual Verification
- Run the dev server: `npm run dev`.
- Navigate to `/sleep-guides`.
- Visually verify that all cards now have appropriate images.

# Walkthrough - Insomnia & Falling Asleep Guide

## Changes Made
- **New Page**: Created `src/app/sleep-guides/insomnia-falling-asleep/page.jsx` as a full Next.js page component.
- **Interactive Tools**: Ported all 6 physiological hacks from the static HTML to React:
    1.  **Paradoxical Intention**: Timer with start/stop logic.
    2.  **4-7-8 Breathing**: Canvas-based animation loop.
    3.  **Military Method**: Interactive checklist with progress tracking.
    4.  **Thermal Drop**: Chart.js bar chart for temperature data.
    5.  **60 BPM Entrainment**: Pulse visualizer using Canvas.
    6.  **Brain Dump**: Text input with "shredding" animation effect.
- **Data Visualization**: Implemented the "Sleep Latency" floating bar chart using `react-chartjs-2`.
- **Navigation**: Added a new card to the Sleep Guides hub (`src/app/sleep-guides/page.jsx`).
- **Cleanup**: Removed the legacy `sleep-guides/insomnia-falling-asleep` file.

## Verification Results
### Manual Verification
- **Routing**: The page is accessible at `/sleep-guides/insomnia-falling-asleep`.
- **Interactivity**: 
    - Timer increments correctly.
    - Canvas animations (Breath & BPM) run smoothly using `requestAnimationFrame`.
    - Charts render with the correct data and colors (using Brand colors like `slate-900`, `indigo-400`).
    - "Shred" animation works for the Brain Dump.
- **Responsiveness**: The grid layout adapts from 1 column (mobile) to 2 columns (desktop).

## Preview
![Insomnia Guide Preview](/c:/Users/ewych/.gemini/antigravity/brain/90d633a9-91b2-4089-9d90-1b85bd7cec24/insomnia_guide_preview_v2_1767535129100.webp)

## Next Steps
- Verify the page in the live application to ensure all animations perform well on lower-end devices.

# Convert Memory Foam vs Latex Guide

## Goal Description
Convert the raw HTML "Use Memory Foam vs Latex" guide into a fully branded Next.js component living under the FAQ Hub. The page will feature three interactive elements: a Lifespan Chart, a "Sag Factor" demo, and a Density Calculator.

## Proposed Changes

### New Page
#### [NEW] [page.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/app/faqs/memory-foam-vs-latex/page.jsx)
- **Structure**:
    - **Hero**: "The Longevity Wars" title card.
    - **Lifespan Chart**: `Bar` chart from `react-chartjs-2` comparing lifespan of different materials (Memory Foam vs Latex).
    - **Mechanics Demo**: Interactive `div` blocks that simulate "sag" (slow recovery) vs "bounce" (instant recovery) using React state and CSS transitions.
    - **Density Slider**: An interactive slider that adjusts a "Density Score" and updates text labels dynamically.
    - **Fact Cards**: "The Imposter" (Synthetic Latex) and "Kryptonite" (Oxidation).
    - **Verdict**: Summary section.

### Hub Integration
#### [MODIFY] [page.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/app/faqs/page.jsx)
- Update the "Memory Foam vs. Latex: Which Lasts Longer?" link to point to `/faqs/memory-foam-vs-latex`.
- Add "New" badge.

### Cleanup
#### [DELETE] [memory-foam-vs-latex](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/sleep-guides/memory-foam-vs-latex)

## Verification Plan
### Automated Tests
- Navigate to `/faqs/memory-foam-vs-latex`.
- Verify Chart.js renders the bar chart.
- Click "Memory Foam" block -> Verify slow recovery animation class.
- Click "Latex" block -> Verify fast recovery animation class.
- Drag Density Slider -> Verify text updates correct for 3.0 vs 5.0 density.

### Manual Verification
- Check mobile responsiveness.
- Verify chart colors match branding.

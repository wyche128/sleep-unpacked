# Implementation Plan - Insomnia Guide

## Goal Description
Convert the static "Insomnia & Falling Asleep" HTML page into a rich, interactive Next.js React component. This guide includes multiple interactive tools (timers, canvas animations, charts) that need to be ported to React state and effects. The page will be styled using the project's brand identity (Jet Black, Golden Bronze, Graphite, Alabaster Grey).

## Proposed Changes

### Sleep Guides
#### [NEW] [page.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/app/sleep-guides/insomnia-falling-asleep/page.jsx)
- Create a new directory and page file.
- Implement the following interactive sections:
    1.  **Paradoxical Intention**: `useState` for timer logic.
    2.  **4-7-8 Breathing**: `useRef` for Canvas, `useEffect` for animation loop. Use theme colors.
    3.  **Military Method**: `useState` for step tracking.
    4.  **Temperature Chart**: `react-chartjs-2` Bar chart.
    5.  **60 BPM Entrainment**: `useRef` for Canvas pulse animation.
    6.  **Brain Dump**: `useState` for textarea and animation states.
    7.  **Latency Chart**: `react-chartjs-2` Bar chart (floating bars).
- Apply `Header` and `Footer` components.
- Use Tailwind CSS with custom brand colors.

### Sleep Guides Hub
#### [MODIFY] [page.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/app/sleep-guides/page.jsx)
- Add a new guide object to the `guides` array linking to `/sleep-guides/insomnia-falling-asleep`.

### Cleanup
#### [DELETE] [insomnia-falling-asleep](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/sleep-guides/insomnia-falling-asleep)
- Remove the legacy file after verification.

## Verification Plan
### Automated Tests
- None planned for this specific content page.

### Manual Verification
- Navigate to `/sleep-guides/insomnia-falling-asleep`.
- Test each tool:
    - Click "I Am Going To Stay Awake" -> verify timer starts.
    - Click "Start Breathing Pacer" -> verify canvas animation runs.
    - Click Military Method steps -> verify they mark complete and reset appears.
    - Check Charts render correctly.
    - Verify 60 BPM visualizer pulses.
    - Type in Brain Dump and click "Release" -> verify animation.

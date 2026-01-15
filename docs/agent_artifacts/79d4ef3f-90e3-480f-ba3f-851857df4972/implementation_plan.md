# Implementation Plan - Sleep with Pets Guide Conversion

## Goal Description
Convert the "The Science of Snuggling" (Sleep with Pets benefits) HTML page into a Next.js React component. This involves porting interactive elements (Chart.js, Watchdog Visualizer, Dealbreaker Calculator) and applying the project's "Midnight Calm" / "Jet Black & Golden Bronze" branding guidelines.

## User Review Required
> [!NOTE]
> I will use the route `/sleep-guides/sleep-with-pets` for this guide.

## Proposed Changes

### New Component
#### [NEW] [page.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/app/sleep-guides/sleep-with-pets/page.jsx)
- Create a new directory `src/app/sleep-guides/sleep-with-pets`.
- Implement the `SleepWithPets` component:
    - **Hormone Chart**: Use `react-chartjs-2` to render the bar chart. State will manage the "snuggle" toggle effects on the chart data.
    - **Watchdog Visualizer**: Create a custom implementation using React state to render the "vigilance bars" and toggle between "Solo" and "With Pet" modes.
    - **Dealbreaker Calculator**: Implement as a React controlled form with state for `sleeperType` and `anxietyLevel` to dynamically show the verdict.
    - **Branding**: mapping source colors (Indigo/Slate) to project's `Jet Black`, `Golden Bronze`, `Graphite`, and `Alabaster Grey` where appropriate, while maintaining the "calm" aesthetic suitable for the topic.

### App Routing
#### [MODIFY] [page.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/app/sleep-guides/page.jsx)
- Add the new guide entry to the `guides` array in the `SleepGuides` component.
- **Title**: "The Science of Snuggling: Sleep with Pets"
- **Link**: `/sleep-guides/sleep-with-pets`
- **Category**: "Sleep Science" / "Wellness"

## Verification Plan

### Automated Tests
- Build verification: Run `npm run build` to ensure no compilation errors.

### Manual Verification
1. Start dev server: `npm run dev`
2. Navigate to `http://localhost:3000/sleep-guides/sleep-with-pets`.
3. **Interactive Checks**:
    - **Hormone Chart**: Click "Simulate Snuggle" and verify the chart bars animate to new values and the button text changes.
    - **Watchdog Effect**: Toggle the switch and observe the visualizer bars changing from erratic red (high vigilance) to calm blue (deep sleep), and text updating.
    - **Dealbreaker Calculator**: Select different combinations of Radio buttons (e.g., Light Sleeper + Low Anxiety vs. Heavy Sleeper) and verify the "Verdict" card updates with the correct text and icon.
    - **Responsive Design**: Resize browser to mobile view to ensure the grid stacks correctly.

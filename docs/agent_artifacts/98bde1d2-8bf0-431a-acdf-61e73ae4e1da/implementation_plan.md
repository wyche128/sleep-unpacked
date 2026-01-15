# Implementation Plan - Convert Leesa Legend to React

## User Review Required
> [!NOTE]
> No critical user review required for this refactor, as it matches the existing project structure.

## Proposed Changes

### [NEW] [LeesaLegendMattressReview.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/pages/mattress-reviews/LeesaLegendMattressReview.jsx)
- Create a new React component file.
- **Imports**: `react` (useState, useEffect), `react-chartjs-2` (Radar, Bar), `chart.js` (register controllers).
- **Structure**:
    - `const LeesaLegendMattressReview = () => { ... }`
    - **State**:
        - `activeLayer` (0-2) for Anatomy section.
        - `timeMachineYear` (0-3 scale: 0, 1, 3, 5 years) for Performance Drift.
        - `sleeperWeight` (0-3 index) for Compatibility Calculator.
    - **Data**: Move `layers`, `timelineData`, `weightProfiles` arrays into component or outside as constants.
- **Charts**:
    - Use `<Radar />` and `<Bar />` components from `react-chartjs-2`.
    - Ensure `ChartJS.register(...)` is called for necessary components (RadarController, BarController, etc.).
- **Styling**:
    - Replace `class` with `className`.
    - Use standard Tailwind classes.
    - Colors: Use mapped hex codes or configure `tailwind.config.js` if custom colors aren't picked up (though inline styles or arbitrary values `text-[#cca43b]` might be safer if config is not fully exposed to me). *Self-correction: The HTML used a custom script for tailwind config. In React, I should use the project's Tailwind setup. I'll use arbitrary values (e.g. `text-[#cca43b]`) or defined classes if I can verify them, to ensure brand colors persist without relying on the HTML's `<script>` config.*

### [DELETE] [leesa-legend-analysis.html](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/pages/mattress-reviews/leesa-legend-analysis.html)
- Clean up the prototype HTML file.

## Verification Plan
1. **Manual Verification**:
    - I cannot easily "navigate" to this new component without adding a route.
    - **Crucial Step**: I must find where routes are defined (likely `App.jsx` or `main.jsx`) and add a temporary or permanent route for `/mattress-reviews/leesa-legend`.
    - Open browser to `http://localhost:5173/mattress-reviews/leesa-legend`.
    - Verify all interactivity (Layers, Slider, Buttons) works as it did in the HTML version.
2. **Linting**:
    - Ensure no console errors regarding `class` vs `className` or missing keys in lists.

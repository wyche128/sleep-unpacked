# Implementation Plan - Enable Winbed EcoCloud Longevity Review

The goal is to make the `winkbed-ecocloud-longevity-review` page live by converting the existing HTML file to a React component and adding it to the application routing.

## User Review Required
> [!IMPORTANT]
> This plan involves installing `chart.js` and `react-chartjs-2` to properly render the charts from the HTML in a React environment.
> We will also replace the CDN-based Font Awesome icons with the existing `lucide-react` library to maintain consistency and avoid extra external requests.

## Proposed Changes

### Dependencies
- Install `chart.js` and `react-chartjs-2`.

### New Component
#### [NEW] [WinkBedEcoCloudLongevityReview.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/pages/mattress-reviews/WinkBedEcoCloudLongevityReview.jsx)
- Create a new React component based on `winkbed-ecocloud-longevity-review.html`.
- **Logic Porting**:
    - Port the `calculateMetrics` logic to a helper function or inside the component.
    - Use `useState` for `weight`, `usage`, and `base` inputs.
    - Use `useEffect` (or direct render calculation) to update the chart data based on inputs.
- **UI Changes**:
    - Replace `class` with `className`.
    - Replace Font Awesome icons (`fa-layer-group`, `fa-spring`, `fa-certificate`) with appropriate `lucide-react` icons (e.g., `Layers`, `Coins` or `Activity`, `Award`).
    - Use `Line` and `Radar` components from `react-chartjs-2` instead of raw `Chart` instantiation.

### Routing
#### [MODIFY] [App.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/App.jsx)
- Import `WinkBedEcoCloudLongevityReview`.
- Add route `<Route path="/winkbed-ecocloud-longevity-review" element={<WinkBedEcoCloudLongevityReview />} />`.

### Cleanup
#### [DELETE] [winkbed-ecocloud-longevity-review.html](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/pages/mattress-reviews/winkbed-ecocloud-longevity-review.html)
- Remove the source HTML file as it is no longer needed.

## Verification Plan

### Automated Tests
- Run `npm run build` to ensure no build errors exist with the new component and dependencies.

### Manual Verification
- Start the dev server (`npm run dev`).
- Navigate to `http://localhost:5173/winkbed-ecocloud-longevity-review` (or the appropriate port).
- **Check Functionality**:
    - Verify the charts (Line and Radar) render correctly.
    - Verify that adjusting the "Total Sleeper Weight" slider updates the "Projected Risk Score" and the Line Chart.
    - Verify that changing "Usage Frequency" and "Foundation Type" updates the risk score and chart.
- **Visual Check**:
    - Ensure icons (Lucide) look correct in the Construction Breakdown section.
    - Check responsiveness (mobile/desktop alignment).

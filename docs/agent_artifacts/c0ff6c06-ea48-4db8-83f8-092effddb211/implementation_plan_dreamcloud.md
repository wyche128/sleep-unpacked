# Implementation Plan - DreamCloud Luxe Hybrid Longevity Review

Convert `dreamcloud-luxe-hybrid-longevity-research.html` to a React component and integrate it into the application.

## Steps

1.  **Create Component**: `src/pages/mattress-reviews/DreamCloudLuxeHybridLongevityReview.jsx`
    *   Use standard `<Header />`.
    *   Port `Chart.js` logic to `react-chartjs-2`.
    *   Implement "Interactive Wear Simulation" with state (`weight`, `usage`, `base`).
    *   Replace FontAwesome with `lucide-react` icons.
    *   Add "Updated 2025" badge.
    *   Ensure H1 includes product name (e.g., "DreamCloud Premier Rest: ...").
    *   Preserve exact styling (Golden Bronze/Graphite theme).
2.  **Add Route**: Update `src/App.jsx`.
    *   Path: `/mattress-reviews/dreamcloud-luxe-hybrid-longevity`
3.  **Cleanup**: Delete `src/pages/mattress-reviews/dreamcloud-luxe-hybrid-longevity-research.html`.
4.  **Verify**: Check page load, chart interactivity, and header through browser verification.

## Component Details
*   **Colors**:
    *   Jet Black: `#242f40`
    *   Golden Bronze: `#cca43b`
    *   Graphite: `#363636`
    *   Alabaster: `#e5e5e5`
*   **Charts**:
    *   Line Chart: Projected Sagging.
    *   Radar Chart: Performance Retention.
*   **Icons**: Needed for construction breakdown and failure modes (Layers, Wind, ShieldCheck, etc from Lucide).

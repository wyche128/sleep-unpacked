# Nectar Premiere Longevity Research Plan

## Goal
Produce a "Living Review" baseline for the Nectar Premiere Mattress, quantifying long-term performance (1, 3, 5 years).

## Research Areas
1.  **Product Definition**: Identify generations (Original Premiere vs newer models).
2.  **Quantitative Metrics**:
    *   Sag Rate (>0.5", >1.0")
    *   Firmness Drift
    *   Edge Support Loss
    *   Cooling Efficiency Decay
3.  **Qualitative Feedback**:
    *   Sleeper weight/position impacts
    *   Common failure modes (zippers, cover, foam degradation)

## Sources
*   Reddit (r/Mattress, r/Nectar)
*   YouTube Long-term reviews
*   Review sites (RTINGS, SleepFoundation, MattressClarity) - focus on data points.
*   Wayback Machine for specs of older models.

## Output
A detailed markdown report `nectar_premiere_longevity_research.md` following the user's template.

## Implementation Steps
1.  **Component Creation**: Create `src/pages/mattress-reviews/NectarPremiereLongevityReview.jsx` using `NectarClassicLongevityReview.jsx` as a template.
2.  **Data Integration**: Populate the component with data from `nectar_premiere_longevity_research.md` (Sagging rates, Firmness drift, Construction layers).
3.  **Routing**: Switch `App.jsx` to include the route `/mattress-reviews/nectar-premiere`.
4.  **Verification**: Ensure the page renders without errors and charts display correctly.

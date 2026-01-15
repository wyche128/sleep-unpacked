# Walkthrough: Nectar Classic Longevity Research Page

I have successfully implemented the Nectar Classic Longevity Research page as a React component.

## Implementation Details
1.  **Component:** `src/pages/mattress-reviews/NectarClassicLongevityReview.jsx`
    - Implemented with the research data provided in the plan.
    - Includes interactive "Performance Drift Simulator" and "Sleeper Calculator".
    - Includes charts for Sagging Risk, Performance Profile, and Warranty Gap.
    - Includes a critical warning about the Nectar "Fiberglass" legacy issue.
2.  **Routing:** Updated `src/App.jsx` to include the route `/mattress-reviews/nectar-classic`.

## Verification Results

### Automated Browser Check
I ran a browser verification script to confirm the page loads and key elements are functional.

| Check | Status | Note |
| :--- | :--- | :--- |
| **Page Load** | ✅ Pass | Page loads at `/mattress-reviews/nectar-classic` without errors. |
| **Title** | ✅ Pass | Header "Deep Longevity: Nectar Classic" is visible. |
| **Charts** | ✅ Pass | All charts (Radar, Bar) render correctly. |
| **Calculator** | ✅ Pass | Clicking "≤ 150 lb" correctly updates the verdict to "Excellent". |
| **Warnings** | ✅ Pass | "Crucial Warning: 'Fiberglass' Legacy" is displayed prominently. |

### Visual Proof
The browser session was recorded to confirm the page's appearance and functionality.

![Verify Nectar Classic Page](/C:/Users/ewych/.gemini/antigravity/brain/f97c96b6-4564-433b-983c-bf99851c8d25/verify_nectar_classic_page_1767301305161.webp)
*Recording of the verification process showing page layout, scrolling, and interaction with the Sleeper Calculator.*

## Next Steps
- The page is now live locally at `http://localhost:5173/mattress-reviews/nectar-classic`.
- You can now deploy or request further style tweaks.

# Implementation Plan - Nectar Classic Longevity Research Page

## Goal Description
Implement the Nectar Classic Mattress Longevity Research analysis as a new React component (`NectarClassicLongevityReview.jsx`) within the existing application, mirroring the structure and design of the `LeesaOriginalMattressResearch` page.

## User Review Required
> [!IMPORTANT]
> PLEASE REVIEW: I will use the path `/mattress-reviews/nectar-classic` for this new page. Confirm if this URL structure is correct.

## Proposed Changes
### src/pages/mattress-reviews
#### [NEW] [NectarClassicLongevityReview.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/pages/mattress-reviews/NectarClassicLongevityReview.jsx)
- Create a new React component based on `LeesaOriginalMattressResearch.jsx`.
- **Content Integration**:
    - Populate with data from `nectar_classic_longevity_research.md`.
    - **Header**: "Nectar Classic: Deep Longevity Analysis".
    - **Sections**:
        - "Executive Summary" (Key findings).
        - "Construction & Generations" (Gen 1 vs Classic 3.0/4.0).
        - "Degradation Data" (Sagging, Softening stats).
        - "Failure Modes" (Fiberglass, Edge Support).
        - "Warranty Analysis" (1.5" threshold, stains).
        - "Verdict" (Who it's for).
- **Components**: Reuse existing UI components (likely from `../../components/ui` or similar, e.g., `Card`, `Button`, `ReviewHeader` if they exist, otherwise inline styles/Tailwind as per the reference file).
    - *Note: `LeesaOriginalMattressResearch.jsx` seems to use `lucide-react` icons and standard Tailwind classes.*

### src/App.jsx (or Routing File)
#### [MODIFY] [App.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/App.jsx) (Location to be confirmed by grep)
- Import `NectarClassicLongevityReview`.
- Add a new Route: `<Route path="/mattress-reviews/nectar-classic" element={<NectarClassicLongevityReview />} />`.

## Verification Plan
### Automated Tests
- None existing for individual pages.
### Manual Verification
1.  **Launch Dev Server:** Ensure `npm run dev` is running.
2.  **Navigation:** Open Browser to `http://localhost:5173/mattress-reviews/nectar-classic`.
3.  **Content Check:**
    - Verify all sections (Construction, Degradation, Warranty) are populated with the Nectar research data.
    - Check charts/visuals render correctly (if applicable).
    - Mobile responsiveness check (resize window).
4.  **Links:** Verify internal/external links work.

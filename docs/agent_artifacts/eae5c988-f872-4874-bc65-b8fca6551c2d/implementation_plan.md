# Implementation Plan - FAQ Hub & TRT vs Boosters

## Goal Description
Convert the `articles/trt-vs-boosters` content into a modern, branded Next.js page within a new "FAQ" hub (`/faqs`). This involves creating the hub structure and the specific article page, ensuring alignment with the existing site's design system.

## Proposed Changes

### FAQ Hub
#### [NEW] `src/app/faqs/page.tsx`
- **Goal**: Central hub for Frequently Asked Questions.
- **Content**: initially just a link to the new TRT vs Boosters page, but styled as a grid/list for future expansion.

### TRT vs Boosters Page (`src/app/faqs/trt-vs-boosters/page.tsx`)
- **Goal**: Full conversion of the HTML report.
- **Components** (to be created in `src/components/faqs/trt-vs-boosters/`):
    - `TrtHero.tsx`: Hero section with "Myth vs Reality" badge and scroll buttons.
    - `FactoryMechanism.tsx`: Interactive "Factory" analogy with state (Natural/TRT/Booster).
        - Handles the logic for showing/hiding arrows and changing text based on mode.
    - `ComparisonSection.tsx`: Two-column layout.
        - Left: Accordion for 5 key differences.
        - Right: `Chart.js` visualizations (Fertility & Deficiency).
    - `QuizSection.tsx`: 3-question interactive quiz with conditional results.
- **Dependencies**: `chart.js`, `react-chartjs-2`, `lucide-react` (for icons).

### Navigation
- Add "FAQs" link to the main header if space permits, or ensuring internal linking from relevant pages (e.g., `optimizing-testosterone`).

## Verification Plan
### Automated Tests
- Run `npm run build` to ensure type safety and valid build.
### Manual Verification
- **Functional**: Test the "Factory" toggle buttons to ensure the model updates correctly.
- **Functional**: Complete the Quiz with different answers to verify result logic.
- **Visual**: Check responsiveness of the Charts on mobile vs desktop.
- **Visual**: Verify styling matches the existing "Muscle Velocity" brand.

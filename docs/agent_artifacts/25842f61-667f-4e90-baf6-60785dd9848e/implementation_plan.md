# Converting "Testogen Review" to Next.js

## Goal Description
Convert the "The Chameleon Supplement: Testogen Review" HTML page into a Next.js page at `/testogen`. The core feature is the "Formulation Roulette" which interactively exposes the difference between official and 3rd party formulations.

## Proposed Changes

### New Page and Components
#### [NEW] `src/app/testogen/page.tsx`
- **Layout**: Standard Global Header -> Hero -> Content -> Footer.
- **Branding**: "Clinical Alert" palette (Slate/Amber/Red). This is distinct from previous pages to emphasize the "warning/detective" theme.

#### [NEW] `src/app/testogen/components/FormulationRoulette.tsx`
- **Concept**: A unified interactive component containing the Toggle Switch, Ingredient List, and Zinc Chart.
- **Lib**: `react-chartjs-2` for the dynamic Zinc bar chart.
- **State**: `view` ('official' | 'amazon'). Controls chart data and ingredient list rendering.

#### [NEW] `src/app/testogen/components/EvidenceBoard.tsx`
- **Concept**: A grid of cards (D-Aspartic Acid, Prop 65, Clinical Dosing).
- **Interaction**: Client-side clickable cards that expand/reveal the "Verdict" text.

#### [NEW] `src/app/testogen/components/AlternativeTable.tsx`
- **Concept**: Static comparison table (Testogen vs TestoPrime).
- **Styling**: Tailwind standard table with semantic colors (Red for fails, Green for wins).

#### [NEW] `src/app/testogen/components/ContentSections.tsx`
- **Hero**: "The Chameleon Supplement".
- **Conclusion**: "The Bottom Line".

## Verification Plan
1.  **Build**: `npm run build`.
2.  **Visual Check**:
    -   **Roulette**: Does toggling to "Amazon" turn the UI red and drop the chart?
    -   **Evidence**: Do cards expand smoothly on click?
3.  **Cleanup**: Delete `articles/testogen`.

# Mattress Break-In Guide Conversion Plan

Goal: Convert the raw HTML file `src/app/faqs/how-to-break-in-mattress` into a branded Next.js page component.

## User Review Required
> [!IMPORTANT]
> The original HTML uses a "Scientific Calm" palette (Slate/Sky Blue/Amber). I will adapt this to the project's "Jet Black / Golden Bronze / Graphite" system while keeping distinct colors for the interactive elements (e.g., Temperature states) where semantic color is necessary (Blue for cold, Red/Orange for warm).

## Proposed Changes

### `src/app/faqs/how-to-break-in-mattress`
#### [NEW] `page.jsx`
- **Structure**:
    - Hero Section: "The Goldilocks Window" (Branded header).
    - Dashboard Grid (2x2):
        1.  **The Adjustment Curve**: Line chart using `react-chartjs-2`.
        2.  **The Crawl Method**: Interactive progress bar using `useState`.
        3.  **Viscoelastic Physics**: Slider input for temperature using `useState`.
        4.  **Foundation Sabotage**: Toggle buttons for foundation types.
    - Footer: "The Forward Look" conclusion.
- **Tech Stack**:
    - `lucide-react` for icons (replacing FontAwesome).
    - `react-chartjs-2` for the Line chart.
    - Tailwind CSS with project colors.

#### [DELETE] `how-to-break-in-mattress` (The file without extension)

### `src/app/faqs/page.jsx`
- Add "Why Your New Mattress Feels Like Concrete (Break-In Guide)" to the "Care & Maintenance" or "Mattress Ownership" section.

## Verification Plan
### Manual Verification
- **Browser Preview**:
    - Interact with the "Crawl" button/progress bar.
    - Move the Temperature slider and verify state changes ("Concrete Slab" vs "Plush").
    - Toggle foundation options.
    - Check Line Chart rendering.
    - Verify responsiveness.

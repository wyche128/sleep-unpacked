# Sleep Stress Page Conversion Plan

## Goal Description
Convert the "The Sleep-Stress Loop" HTML guide into a Next.js React component. The page will be integrated into the `sleep-guides` hub and rebranded to match the "Sleep Unpacked" design language (Jet Black, Golden Bronze, Graphite, Alabaster).

## Proposed Changes

### New Components

#### [NEW] `src/app/sleep-guides/sleep-stress/page.jsx`
- **Structure**:
    - Use `use client` for interactivity.
    - Layout: Main content area with a breakdown of the 6 modules.
    - Navigation: Sticky table of contents or top nav (similar to source but styled).
- **Features**:
    - **Hero Section**: "The Sleep-Stress Vicious Cycle" title with "Break the Cycle" CTA.
    - **Module 1 ("One-Hour" Gap)**: `Bar` chart from `react-chartjs-2`. Data: Low vs High Stress sleep quality.
    - **Module 2 (Stomach Sleeper)**: Interactive flip card using `useState` and Tailwind transforms.
    - **Module 3 (Biological Case)**: Step-by-step process flow (hover effects).
    - **Module 4 (Pets)**: Heartbeat animation using Tailwind or custom CSS.
    - **Module 5 (Reading vs Music)**: Horizontal `Bar` chart.
    - **Module 6 (Weighted Blankets)**: Toggle switch (Fight vs Rest mode) using `useState`.
    - **Summary**: "The Bottom Line" section.
- **Branding**:
    - Replace `midnight` (#0f172a) with `Jet Black` (#1A1A1A).
    - Replace `indigo/calm` with `Golden Bronze` (#9F8152).
    - Backgrounds: Use `Alabaster` (#F0F0F0) for light sections and `Jet Black` for dark sections.
    - Typography: Use `Inter` (sans) and `Playfair Display` (serif) if available, or fallbacks.

### Updates

#### [MODIFY] `src/app/sleep-guides/page.jsx` (or equivalent Hub page)
- Add a new card linking to `/sleep-guides/sleep-stress`.
- Card details: Title "Sleep & Stress", Description "How stress steals your sleep and 6 counter-intuitive fixes.", Icon/Image.

## Verification Plan

### Automated Tests
- Build test: Run `npm run build` to ensure no compilation errors.

### Manual Verification
1.  Navigate to `/sleep-guides/sleep-stress`.
2.  **Hero**: Verify gradient and text rendering.
3.  **One-Hour Gap Chart**: Ensure bar chart renders with correct colors and tooltip works.
4.  **Stomach Card**: Click card, verify flip animation and revealed text.
5.  **Biological Flow**: Hover over steps, check hover states.
6.  **Pets**: Check heartbeat animation.
7.  **Reading Chart**: Verify horizontal bars and labels.
8.  **Weighted Blanket**: Click "Stress Mode" and "Blanket On", verify text/color changes and pill animation.
9.  **Responsiveness**: Check mobile view (stacked grid) vs desktop.
10. **Navigation**: Verify links from Hub page work.

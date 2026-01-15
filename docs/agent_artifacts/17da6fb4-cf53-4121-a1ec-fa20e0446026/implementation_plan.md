# Implementation Plan - Healthiest Sleep Position Guide

Convert the `healthiest-sleep-position` file into a Next.js App Router page. The source content is already React-like but needs significant rebranding and integration with the project's components.

## User Review Required
> [!NOTE]
> I will be rebranding the "NapLab" orange/blue theme to the "SleepUnpacked" Jet Black/Golden Bronze theme.
> I will place this guide link in the "Mattress Basics" section of the FAQ Hub as it relates to sleep positions.

## Proposed Changes

### New Page Component
#### [NEW] [page.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/app/sleep-guides/healthiest-sleep-position/page.jsx)
-   **Hero**: "What is the Healthiest Sleep Position?".
-   **Content**:
    -   Comparison Table (Back vs Side vs Stomach).
    -   Deep dives into each position.
    -   Product Recommendations (using mock data provided but styled correctly).
-   **Branding**:
    -   Primary: `golden-bronze` (replacing Orange).
    -   Secondary: `jet-black` / `graphite`.
    -   Backgrounds: `alabaster-grey`.
-   **Components**:
    -   Use `components/Header`.
    -   Remove local `Header` and `Footer`.
    -   Adapt `ProductCard` to match site style.

### FAQ Hub Update
#### [MODIFY] [page.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/app/frequently-asked-questions/page.jsx)
-   Add a new link to the "Mattress Basics" category.
    -   Title: "What is the Healthiest Sleep Position?"
    -   Link: `/sleep-guides/healthiest-sleep-position`
    -   Badge: `New`

### Assets
-   Generate `sleep_position_hero.png`.

## Verification Plan

### Automated Tests
-   `npm run build`

### Manual Verification
-   **Route**: `http://localhost:3000/sleep-guides/healthiest-sleep-position`
-   **Visual Check**: Verify branding colors (no Orange remaining).
-   **Responsiveness**: Check table layout on mobile.
-   **Hub**: Check link in FAQ hub.

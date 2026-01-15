# Content Hub Implementation Plan

## Goal Description
Restructure the application to support distinct "Content Hubs" for the main navigation categories: Top Picks, Mattress Reviews, Comparisons, and Sleep Guides. Each hub will serve as an index page for its respective category, housing individual blog posts and articles.

## Proposed Changes

### Directory Structure & File Moves
1.  **Create new directories**:
    - `src/pages/top-picks/`
    - `src/pages/mattress-reviews/`
    - `src/pages/comparisons/`
    - `src/pages/sleep-guides/`
2.  **Move existing files**:
    - `src/pages/SleepGuides.jsx` -> `src/pages/sleep-guides/index.jsx`
    - `src/pages/SleepingNakedPost.jsx` -> `src/pages/sleep-guides/SleepingNakedPost.jsx`
3.  **Delete empty/old files**:
    - Remove old `src/pages/SleepGuides.jsx` and `src/pages/SleepingNakedPost.jsx` after moving.

### Component Updates

#### `src/pages/top-picks/index.jsx` [NEW]
- Create a new placeholder Hub page for "Top Picks".
- Use the standard layout (Header + Footer) and new color palette.
- Include a hero section and a grid for future posts.

#### `src/pages/mattress-reviews/index.jsx` [NEW]
- Create a new placeholder Hub page for "Mattress Reviews".

#### `src/pages/comparisons/index.jsx` [NEW]
- Create a new placeholder Hub page for "Comparisons".

#### `src/pages/sleep-guides/index.jsx` [MODIFY]
- Update the moved `SleepGuides` component to work as an index page (if any path adjustments are needed).
- Ensure links to internal posts are updated (e.g., to `/sleep-guides/sleeping-naked`).

#### `src/App.jsx` [MODIFY]
- Update Routing to reflect new paths:
    - `/top-picks` -> `src/pages/top-picks/index.jsx`
    - `/mattress-reviews` -> `src/pages/mattress-reviews/index.jsx`
    - `/comparisons` -> `src/pages/comparisons/index.jsx`
    - `/sleep-guides` -> `src/pages/sleep-guides/index.jsx`
    - `/sleep-guides/sleeping-naked` -> `src/pages/sleep-guides/SleepingNakedPost.jsx`

#### `src/components/Header.jsx` [MODIFY]
- Update navigation links to point to the new routes instead of `#`.

## Verification Plan

### Automated Verification
None (Standard manual verification via browser).

### Manual Verification
1.  **Navigation Check**:
    - Open `http://localhost:5173/`.
    - Click "Top Picks" -> Verify landing on Top Picks Hub.
    - Click "Mattress Reviews" -> Verify landing on Mattress Reviews Hub.
    - Click "Comparisons" -> Verify landing on Comparisons Hub.
    - Click "Sleep Guides" -> Verify landing on Sleep Guides Hub.
2.  **Article Access**:
    - From the Sleep Guides Hub, click "The Cool Comfort of Sleeping Naked".
    - Verify correct rendering of the blog post at the new URL (`/sleep-guides/sleeping-naked`).

### Content Integration

#### [NEW] [WinkBedMattressReview.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/pages/mattress-reviews/WinkBedMattressReview.jsx)
- Convert HTML to React component.
- Dynamically load Chart.js.
- Apply "Jet Black / Golden Bronze" theme.
- Implement specialized "Hybrid" durability charts.

#### [MODIFY] [App.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/App.jsx)
- Add route: `/mattress-reviews/winkbed-original`

#### [MODIFY] [Mattress Reviews Hub](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/pages/mattress-reviews/index.jsx)
- Add card linking to the new review.

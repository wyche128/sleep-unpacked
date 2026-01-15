# Implementation Plan - Make Five Truths About WinkBed Mattress Live

The goal is to integrate the "5 Surprising Truths About the WinkBed Mattress" article into the React application. Currently, it exists as a standalone HTML file. We will convert it to a React component to match the project's architecture and styling system.

## Proposed Changes

### Pages

#### [NEW] [FiveTruthsWinkBed.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/pages/mattress-reviews/FiveTruthsWinkBed.jsx)
- Create a new React component.
- Port content from `five-truths-about-winkbed-mattress.html`.
- Use `Header` and `Footer` components (or adapt footer if shared component not available).
- Replace HTML tags with JSX.
- Replace `class` with `className`.
- Replace CDN Tailwind/Icons with local project dependencies (`lucide-react`).

### Routing

#### [MODIFY] [App.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/App.jsx)
- Import `FiveTruthsWinkBed`.
- Add route `/mattress-reviews/five-truths-winkbed`.

### Navigation

#### [MODIFY] [index.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/pages/mattress-reviews/index.jsx)
- Add a new card/link for "5 Surprising Truths About the WinkBed Mattress" in the Mattress Reviews Hub.

## Verification Plan

### Manual Verification
1.  **Launch Dev Server**: Ensure `npm run dev` is running (it is).
2.  **Navigate to Page**: Open browser to `http://localhost:5173/mattress-reviews/five-truths-winkbed` (or correct port).
3.  **Check Styling**: Verify the layout matches the original HTML design (or looks correct within the app's theme).
4.  **Check Navigation**: Verify links in the Table of Contents work (smooth scroll).
5.  **Check Hub**: Verify the card appears in `/mattress-reviews` and links correctly.

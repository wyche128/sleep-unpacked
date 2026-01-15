# Global Footer Implementation Plan

The goal is to extract the hardcoded footer from the homepage and ensure it appears on all pages of the application.

## User Review Required

> [!NOTE]
> I will be moving the footer to `App.jsx` so it sits outside the `Routes`, ensuring it renders on every page automatically. This is a standard pattern for persistent site elements.

## Proposed Changes

### Components

#### [NEW] [Footer.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/components/Footer.jsx)
- Create a new component containing the footer implementation currently in `Home.jsx`.
- Ensure all necessary imports (Lucide icons) are included.

### Pages

#### [MODIFY] [Home.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/pages/Home.jsx)
- Remove the hardcoded footer section.
- Remove unused imports if any (though likely they are used elsewhere in Home).

### Main Application

#### [MODIFY] [App.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/App.jsx)
- Import the new `Footer` component.
- Add `<Footer />` inside the `<Router>` but outside `<Routes>` (likely at the bottom) to make it appear on all pages.

## Verification Plan

### Manual Verification
1.  **Homepage**: Check that the footer still looks correct on the homepage.
2.  **Other Pages**: Navigate to at least 2 other pages (e.g., a review page and an FAQ page) to verify the footer appears and looks correct.
3.  **Responsiveness**: Ensure the footer behaves correctly on mobile/desktop views (resize window).

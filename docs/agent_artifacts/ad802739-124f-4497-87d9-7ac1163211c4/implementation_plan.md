# Implement Homepage Search

The goal is to make the search box on the homepage functional and rename the "Start Quiz" button to "Search".

## Proposed Changes

### [Homepage]

#### [MODIFY] [page.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/app/page.jsx)
- Add `'use client'` directive to enable interactive features.
- Import `useState` and `useRouter`.
- Implement a search handler that navigates to `/search?q={query}`.
- Update the button text from "Start Quiz" to "Search".
- Update the button icon to `Search` instead of `ArrowRight`.
- Bind the input value to state and handle the "Enter" key.

## Verification Plan

### Manual Verification
- Type a query into the search box and click the "Search" button.
- Type a query into the search box and press the "Enter" key.
- Verify that the browser navigates to the search results page with the correct query.

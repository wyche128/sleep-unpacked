# Refactor Category Page to 3-Column Layout

## Goal
Change the current single-column list view on `/mattress-reviews` to a responsive 3-column grid layout for better use of screen space.

## Proposed Changes
### Pages
#### [MODIFY] [Category Page Component](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/pages/mattress-reviews/index.jsx)
- Wrap the review cards in a `div` with `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`.
- Remove `max-w-2xl mx-auto` from individual card links.
- Remove `mt-8` and `mb-8` vertical margins from cards, letting `gap-8` handle spacing.
- Ensure cards take `h-full` to align bottoms if content height varies.

## Verification Plan
### Manual Verification
- Resize browser window to check:
    - Mobile: 1 column
    - Tablet: 2 columns
    - Desktop: 3 columns
- Ensure cards are uniform in width.

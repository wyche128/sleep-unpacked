# Implementation Plan - Top Picks Hub

This plan outlines the creation of a new "Top Picks" hub page (`/top-picks`) that categorizes the existing mattress reviews into user-friendly "Best of" lists.

## User Review Required

> [!IMPORTANT]
> **Category Mappings**: Please approve the following mappings based on available reviews:
> - **Best Overall:** WinkBed Original (Hybrid durability & appeal)
> - **Best for Back Pain:** WinkBed Original (Lumbar support focus)
> - **Best Cooling:** Purple Original (Grid technology)
> - **Best Organic:** WinkBed EcoCloud (Talalay Latex)
> - **Best Value:** Nectar Classic (Budget memory foam)
> - **Best for Side Sleepers:** Leesa Legend (Dual hybrid micro-coils)
> - **Best for Plus Size:** Helix Plus (High density foam & titan core)
> - **Best Luxury:** DreamCloud Premier Rest (Cashmere & pillow top)

## Proposed Changes

### New Page
#### [NEW] [page.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/app/top-picks/page.jsx)
- **Hero Section**: "Top Rated Mattresses of 2026" (using current date to be forward looking).
- **Navigation**: Quick jump links to categories.
- **Category Cards**:
    - Each section will feature a "Winner" card.
    - Card will include:
        - "Why we picked it" (Bullet point summary).
        - Key Stat (e.g., "98% Cooling Retention").
        - Link to full "Living Review".
    - Styling: Consistent with `MattressReviewsHub` but more "editorial" focus.

### Navigation Updates
#### [MODIFY] [Header.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/components/Header.jsx)
- Add "Top Picks" to the main navigation menu if space permits, or ensure it's accessible. (Will verify header file content first).

## Verification Plan

### Automated Tests
- Run `npm run dev` to ensure no build errors.
- Verify routing to `/top-picks` works.

### Manual Verification
- **Visual Check**: Ensure all cards render with correct images and branding.
- **Link Check**: Click "Read Review" for every card to ensure it goes to the correct deep-dive page.
- **Responsiveness**: Check layout on mobile view (stacking order).

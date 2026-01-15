# Homepage Redesign: The Sleep Hub

## Goal
Transform the homepage into a central hub that balances "Mattress Reviews" and "Sleep Guides", directing visitors to all available learning options.

## User Review Required
> [!NOTE]
> I will be replacing the current "placeholder" reviews on the homepage with the **real** reviews found in your `mattress-reviews` section (Purple, WinkBed, Nectar). This ensures users clicking "Read Review" actually go to a real page.

## Proposed Changes

### Content Updates
1.  **Real Mattress Reviews**: standardizing the homepage to feature the actual reviews you have written (Purple Original, WinkBed, Nectar Classic) instead of the generic placeholders (CloudRest, etc).
2.  **New "Sleep Guides" Section**: Adding a section highlighting the top 3 sleep guides (e.g., Snoring, Sleep Stress, Bed Sizes) to drive traffic to educational content.

### File: `src/app/page.jsx`
#### [MODIFY] `src/app/page.jsx`
-   **Update `reviews` data**: Replace mock data with:
    -   Purple Original
    -   WinkBed Hybrid
    -   Nectar Classic
-   **Add `featuredGuides` data**: Add top 3 guides:
    -   5 Surprising Fixes for Snoring
    -   The Sleep-Stress Vicious Cycle
    -   7 Bed Size Secrets
-   **Add Layout Section**: Insert "Latest Sleep Guides" section below the Featured Reviews.

## Verification Plan

### Manual Verification
1.  **Visual Check**:
    -   Verify the Homepage loads without errors.
    -   Check that the "Featured Reviews" link to the correct `/mattress-reviews/...` pages.
    -   Check that the "Latest Sleep Guides" link to the correct `/sleep-guides/...` pages.
    -   Ensure responsive design (mobile/desktop) looks good for the new section.
2.  **Navigation**:
    -   Click "View all 50+ Reviews" -> should go to `/mattress-reviews`.
    -   Add a "View all Guides" link -> should go to `/sleep-guides`.

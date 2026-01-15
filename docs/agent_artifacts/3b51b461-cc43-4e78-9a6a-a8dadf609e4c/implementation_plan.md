# Footer Link Updates

Clean up the footer by replacing broken links (placeholder `#`) and non-existent pages with valid links to existing content modules (Top Picks, Mattress Reviews, Sleep Guides, FAQ).

## Proposed Changes

### Footer Component

#### [MODIFY] [Footer.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/components/Footer.jsx)

- Update **Mattresses** section to link to valid `/top-picks` subpages:
    - "Best Overall" -> `/top-picks/best-overall-mattress`
    - "Best for Back Pain" -> `/top-picks/best-mattress-for-back-pain`
    - "Best Cooling" -> `/top-picks/best-cooling-mattress`
    - "Best Organic" -> `/top-picks/best-organic-mattress`
- Update **Company** section:
    - Remove "Our Testing Process" (non-existent)
    - Remove "Careers" (non-existent)
    - Add "Mattress Reviews" linking to `/mattress-reviews`
- Update **Resources** section:
    - Rename "Sleep Blog" to "Sleep Guides" and link to `/sleep-guides`
    - Link "FAQ" to `/faqs`
    - Replace "Coupons" and "Glossary" with "Mattress Comparisons" linking to `/comparisons`
- Ensure all links use the `Link` component from `next/link` for internal navigation where appropriate (standard `<a>` is okay for some, but `Link` is preferred in Next.js).

## Verification Plan

### Automated Tests
- None applicable for simple link updates.

### Manual Verification
- Run the development server: `npm run dev`
- Inspect the footer in the browser.
- Click each link and verify it navigates to the intended page.
- Check for any 404 errors or broken layouts after navigation.

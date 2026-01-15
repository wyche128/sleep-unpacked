# Earnings Disclosure Implementation Plan

The goal is to convert the provided disclosure text into a functional Next.js page at `/earnings` (Affiliate Disclosure) and ensure it is accessible via the site footer.

## Proposed Changes

### Content Adaptation
- Ensure clear headings and readable text.
- Use "Sleep Unpacked" context where appropriate.

### New Page
#### [NEW] [page.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/app/earnings/page.jsx)
- Create a new route `/earnings`.
- Implement layout consistent with Privacy Policy and Terms (Header, valid padding `pt-32`, Footer).

### Component Updates
#### [MODIFY] [Footer.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/components/Footer.jsx)
- Update "Affiliate Disclosure" link to point to `/earnings`.

## Verification Plan

### Manual Verification
- Navigate to `/earnings` locally.
- Verify content and proper top padding.
- Check Footer link functionality.

# robots.txt Implementation Plan

This plan outlines the addition of a `robots.txt` generator using Next.js `robots.js` metadata file.

## Proposed Changes

### [Component Name]

#### [MODIFY] [layout.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/app/layout.jsx)
- Update the `metadata` object to include the `impact-site-verification` tag.

```javascript
export const metadata = {
    title: 'SleepUnpacked | The Mattress Durability Authority',
    description: 'We track how products actually hold up after 1, 3, and 5 years. Avoid the lemons. Buy once for the decade.',
    verification: {
        other: {
            'impact-site-verification': 'e6b2e0e9-6e35-4ed7-81d8-d42760801d26',
        },
    },
};
```

## Verification Plan

### Automated Tests
- Run `npm run dev` and navigate to `http://localhost:3000/robots.txt` in the browser to verify the content.

### Manual Verification
- Confirm that the `robots.txt` output matches the expected format:
  ```
  User-Agent: *
  Allow: /
  Disallow: /private/
  Sitemap: https://sleepunpacked.com/sitemap.xml
  ```

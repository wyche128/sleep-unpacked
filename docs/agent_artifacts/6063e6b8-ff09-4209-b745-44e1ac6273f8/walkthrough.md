# Sitemap Generation Walkthrough

I have implemented a dynamic XML sitemap generator for your application. This will automatically keep your sitemap up to date as you add new pages.

## Changes

### Sitemap Generation Logic
I created `src/app/sitemap.js` which:
- Recursively scans the `src/app` directory.
- Finds all `page.jsx` and `page.js` files.
- Generates a list of URLs based on the folder structure.
- Returns a standard sitemap format compatible with Google Search Console.

## Verification Results

### Automated Test Script
I ran a test script `test-sitemap.js` using the sitemap generator logic:
- **Result:** Successfully generated 65 URLs.
- **Output:** Valid output structure with `url`, `lastModified`, and `changeFrequency`.

### Build Verification
I attempted to run `npm run build` to verify the full integration.
> [!WARNING]
> The build failed due to a pre-existing error unrelated to the sitemap changes: `leep/page.jsx:6:133`.
> You should investigate your sleep guides (possibly `healthiest-sleep-position` or `sleep-cycles-dreaming`) or run `npm run lint` to fix this issue before deploying.

## Next Steps

1. **Deploy:** When you deploy your Next.js app (e.g., to Vercel), the sitemap will be automatically generated at `/sitemap.xml`.
2. **Submit:** Submit `https://sleepunpacked.com/sitemap.xml` to Google Search Console.

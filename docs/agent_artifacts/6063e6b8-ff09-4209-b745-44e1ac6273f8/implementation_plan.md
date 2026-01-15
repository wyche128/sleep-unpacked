# Sitemap Generation Plan

I will create a dynamic sitemap for the application using Next.js App Router's `sitemap.js` feature. This will automatically generate an `xml` sitemap that lists all pages in the `src/app` directory.

## User Review Required

> [!IMPORTANT]
> **Base URL**
> I will use `https://sleepunpacked.com` as the base URL. If your domain is different, please update the `baseUrl` constant in `src/app/sitemap.js`.

## Proposed Changes

### App Directory

#### [NEW] [sitemap.js](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/app/sitemap.js)
- Create `src/app/sitemap.js` to dynamically generate the sitemap.
- It will use Node.js `fs` and `path` modules to recursively find all `page.jsx` files in `src/app`.
- It will exclude dynamic routes if any (though none were observed) or handle them generically if needed (currently assuming static structure).
- It will return an array of objects with `url`, `lastModified`, etc.

## Verification Plan

### Automated Tests
- Build the project using `npm run build` to ensure the sitemap is generated correctly.
- Start the dev server `npm run dev` and navigate to `/sitemap.xml` to verify the output.

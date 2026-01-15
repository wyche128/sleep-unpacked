# Schema Implementation Plan

## Goal Description
Implement proper JSON-LD structured data (Schema.org) for `WebSite`, `WebPage`, and `Article`/`FAQPage` types to improve SEO and search engine understanding of the SleepUnpacked content.

## Proposed Changes

### Components

#### [NEW] `src/components/JsonLd.jsx`
- A reusable component that renders a `<script type="application/ld+json">` tag.
- Accepts `data` prop (object) and serializes it to JSON.

#### [NEW] `src/app/schema.js` (or `src/utils/schema.js`)
- Helper functions to generate common schema objects:
    - `generateOrganizationSchema()`
    - `generateWebsiteSchema()`
    - `generateArticleSchema(articleData)`
    - `generateFAQPageSchema(faqData)`

### Layout

#### [MODIFY] `src/app/layout.jsx`
- Import `JsonLd` and schema generators.
- content: Add `Organization` and `WebSite` schema to the global layout.

### Pages

#### [MODIFY] `src/app/faqs/do-you-need-to-rotate-mattress/page.jsx`
- Implement `FAQPage` schema combined with `Article` schema (since it's a guide).
- Use `JsonLd` component to render it.

#### [MODIFY] `src/app/top-picks/best-mattress-for-side-sleepers/page.jsx`
- Implement `CollectionPage` or `Article` schema.
- Pass data to `JsonLd`.

## Verification Plan

### Automated Tests
- None (Schema is best tested via validators).

### Manual Verification
- **Build & Run**: `npm run dev`
- **Inspect DOM**: Open the pages in the browser and inspect the source code to verify the `<script type="application/ld+json">` tags exist and contain valid JSON.
- **Schema Validator**: Copy the rendered HTML or JSON-LD and paste it into the [Rich Results Test](https://search.google.com/test/rich-results) or [Schema Markup Validator](https://validator.schema.org/) (if accessible, otherwise rely on visual inspection of the JSON structure).
    - *Note: I will perform visual inspection of the JSON structure in the source code.*

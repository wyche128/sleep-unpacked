# Schema Implementation Walkthrough

Implemented comprehensive Schema.org structured data to improve SEO and rich search results.

## Changes

### 1. New Components & Utilities

-   **`src/components/JsonLd.jsx`**: A reusable client component that safely renders the `<script type="application/ld+json">` tag.
-   **`src/utils/schema.js`**: A utility module containing helper functions to generate standardized schema objects (`generateOrganizationSchema`, `generateWebsiteSchema`, `generateArticleSchema`, `generateFAQPageSchema`).

### 2. Global Schema (Root Layout)

Updated `src/app/layout.jsx` to include **Organization** and **WebSite** schema on every page. This helps search engines understand the brand entity and the site's search functionality.

```javascript
// src/app/layout.jsx
<JsonLd data={generateOrganizationSchema()} />
<JsonLd data={generateWebsiteSchema()} />
```

### 3. Page-Specific Schema

#### FAQ / Guide Pages
Updated `src/app/faqs/do-you-need-to-rotate-mattress/page.jsx` to include both **Article** and **FAQPage** schema. This makes the page eligible for FAQ rich snippets in search results.

#### Top Picks Pages
Updated `src/components/TopPicksCategoryPage.jsx` to dynamically generate **Article** schema based on the category data. This ensures all "Best X" pages have structured data representing them as distinct content pieces.

## Validation Results

-   **Code Verification**: Verified that JSON-LD scripts are correctly injected into the DOM with valid JSON structures.
-   **Fallback Handling**: Implemented safe fallbacks for missing images in schema (using a consistent URL pattern).

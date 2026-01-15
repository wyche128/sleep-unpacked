# Walkthrough - Testogen Review Blog Post

I have added the "Testogen Review" page as a custom Shopify Article Template. This allows you to serve the custom-designed page while keeping it integrated with your Shopify store's analytics and apps.

## Changes

### Templates

#### [NEW] [article.testogen-review.liquid](file:///c:/Users/ewych/.gemini/antigravity/scratch/mv-shopify/templates/article.testogen-review.liquid)
- **Standalone Template:** Uses `{% layout none %}` to disable the default theme header/footer, ensuring the custom "Supplement Detective" design renders exactly as requested.
- **Integration:** Includes `{{ content_for_header }}` to inject Shopify's necessary scripts (analytics, apps) into the `<head>`.
- **Features:**
    - Full Tailwind CSS styling.
    - Chart.js integration for the Zinc Dosage chart.
    - Interactive "Formulation Roulette" toggle.
    - "Evidence Board" interactive cards.

## Verification Results

### Manual verification
- **File Content:** Verified that the Liquid template contains the correct HTML structure, CDN links for Tailwind/Chart.js, and the custom JavaScript logic for the interactive elements.
- **Deployment:** Successfully pushed to the **Live Theme** ("Updated copy of Updated copy of Refresh", ID: 166619185428).

## How to Use this Template
1.  **Create Post:** Go to Shopify Admin > Online Store > Blog Posts > Create blog post.
2.  **Select Template:** In the "Online store" settings on the right sidebar, change the **Theme template** from `Default article` to `testogen-review` (or `article.testogen-review`).
3.  **Save:** Save and view the post. The content you type in the editor will be ignored in favor of the custom hardcoded design, but the URL will be `yourstore.com/blogs/news/your-post-handle`.

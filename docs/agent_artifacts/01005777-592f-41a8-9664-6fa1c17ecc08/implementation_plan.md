# Implementation Plan - Testogen Review Blog Post

The user wants to add a specific "Testogen Review" page with a custom design (Tailwind, Chart.js) as a blog post.
Since the provided HTML is a full document (including `<html>`, `<head>`, `<body>`) and has its own header/footer, I will implement this as a **Standalone Liquid Template**.

## User Review Required
> [!NOTE]
> This page will be created as a standalone template (`article.testogen-review.liquid`). To use it, you must:
> 1.  Create a new Blog Post in Shopify Admin.
> 2.  Set the "Theme template" to `testogen-review` (or `article.testogen-review` depending on how the theme shows it).
> 3.  The content entered in the Admin editor might be ignored or need to be manually output if we don't include `{{ article.content }}`. Given the request is a full HTML page, I will hardcode the HTML provided.

## Proposed Changes

### Templates

#### [NEW] [article.testogen-review.liquid](file:///c:/Users/ewych/.gemini/antigravity/scratch/mv-shopify/templates/article.testogen-review.liquid)
- Create a new Liquid template.
- Use `{% layout none %}` to disable the default theme layout (header/footer/styles).
- Paste the provided HTML.
- Inject `{{ content_for_header }}` in `<head>` to ensure Shopify analytics and apps work.
- (Optional) wrap the content in `{{ article.content }}` if the user wants to edit text in Admin? No, the HTML is complex and structural. I will hardcode it as requested in the "static" HTML.

## Verification Plan

### Manual Verification
- Since I cannot run a Shopify server locally to see the full render without authentication/store access, I will verify the file content is correct.
- The user can verify by:
    1.  Pushing the code.
    2.  Creating a blog post.
    3.  Selecting the `testogen-review` template.
    4.  Previewing the post.

### Automated Tests
- None possible for Shopify Liquid templates in this environment.

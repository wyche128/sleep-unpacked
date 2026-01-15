# Walkthrough - Duvet vs. Comforter Guide Conversion

I have successfully converted the "Duvet vs. Comforter" guide to a Next.js App Router page and integrated it into the FAQ Hub.

## Changes

### 1. New Page Component
-   **Path**: `src/app/sleep-guides/duvet-vs-comforter/page.jsx`
-   **Branding**: Applied Jet Black, Golden Bronze, Graphite, and simple White backgrounds.
-   **Content**:
    -   Ported content from the original HTML.
    -   Re-implemented interactive elements (Copy to Clipboard button, FAQ toggles) in React.
    -   Removed the original "blob" background for a cleaner look consistent with the site theme.

### 2. FAQ Hub Integration
-   **Path**: `src/app/frequently-asked-questions/page.jsx`
-   **Update**: Added a new link under "Mattress Basics" with a "NEW" badge.

### 3. Assets
-   **New Image**: `src/assets/duvet_vs_comforter_hero.png` (Generated concept art).

## Verification

The following recording shows the verification of the link, page rendering, copy functionality, and FAQ interaction:

![Verification Recording](file:///C:/Users/ewych/.gemini/antigravity/brain/17da6fb4-cf53-4121-a1ec-fa20e0446026/duvet_vs_comforter_verification_1767570918946.webp)

### Manual Verification Required
Please visit the following links:

1.  **FAQ Hub Page**: [http://localhost:3000/frequently-asked-questions](http://localhost:3000/frequently-asked-questions)
    -   [ ] Verify the new link "Duvet vs. Comforter: What's the Difference?".

2.  **Guide Page**: [http://localhost:3000/sleep-guides/duvet-vs-comforter](http://localhost:3000/sleep-guides/duvet-vs-comforter)
    -   [ ] Visual check of the new branding.
    -   [ ] Test the "Copy Summary" button.
    -   [ ] Open/Close standard FAQs.

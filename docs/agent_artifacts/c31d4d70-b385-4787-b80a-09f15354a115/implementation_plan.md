# Internal Linking for Helix Midnight Research

Add contextual internal links to the Helix Midnight page to improve navigation and SEO.

## Proposed Changes

### [Component Name]

#### [MODIFY] [page.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/app/mattress-reviews/helix-midnight/page.jsx)
- **Top Navigation**: Add a "Back to Hub" link leading to [/mattress-reviews](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/app/mattress-reviews).
- **Overview Section**: Link to the [Helix Plus](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/app/mattress-reviews/helix-plus) review.
- **Metrics Section**: 
    - **Sagging**: Link to the [1.5-Inch Threshold Guide](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/app/faqs/one-point-five-inch-threshold).
    - **Firmness**: Link to the [Memory Foam vs Latex](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/app/faqs/memory-foam-vs-latex) comparison.
    - **Cooling**: Link to our [Best Cooling Mattress](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/app/top-picks/best-cooling-mattress) picks.
- **Methodology Section**: Link to the [Mattress Lifespan Guide](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/app/sleep-guides/mattress-lifespan-guide).
- **Footer Section**: Add related links to:
    - [Best Mattress for Side Sleepers](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/app/top-picks/best-mattress-for-side-sleepers).
    - [How to File a Warranty Claim](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/app/faqs/how-to-file-warranty-claim).

## Verification Plan

### Automated Tests
- Use `browser_subagent` to click on new links and verify they lead to the correct internal pages.

### Manual Verification
- Check hover states and accessibility labels for the new links.

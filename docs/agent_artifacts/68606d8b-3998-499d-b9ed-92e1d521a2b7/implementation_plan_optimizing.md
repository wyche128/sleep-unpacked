# Implementation Plan: Branding Optimizing Testosterone Page

Migrate the `optimizing-testosterone` page to the Muscle Velocity branding system. This involves removing local layout elements (header/footer) to use the global ones and updating the color palette to use brand semantic tokens.

## Proposed Changes

### Page Layout & Branding

#### [MODIFY] [page.tsx](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/app/optimizing-testosterone/page.tsx)
- **Remove Local Layout**: Delete the `header` and `footer` components. Use the global `Header` and `Footer` provided by the root layout.
- **Update Primary Container**: Replace the `flex flex-col` and `style={{ backgroundColor: '#F5F5F0' }}` with brand-consistent classes.
  - Wrapper: `min-h-screen bg-background text-secondary antialiased selection:bg-primary/20 selection:text-primary font-body`
  - Main: `max-w-5xl mx-auto px-4 pt-32 pb-24 space-y-16` (Added `pt-32` for global header clearance).
- **Update Branding Colors**: 
  - Replace `orange-600` / `orange-500` with `primary`.
  - Replace `gray-900` / `text-gray-900` with `secondary`.
  - Replace `gray-50` / `bg-gray-50` with `slate-50`.
- **Update Typography**:
  - Use `font-heading` (Space Grotesk) for all `h1`, `h2`, `h3` and uppercase labels.
  - Use `font-body` (Lora) for paragraphs and body text.
  - Apply `uppercase tracking-tighter` to headings for the brand look.
- **Relocate Tab Navigation**: Move the tab navigation from the header to a dedicated container within the `main` section, styled as a premium navigation bar.
- **Refine Section Styling**:
  - Use `rounded-[2.5rem]` or `rounded-[4rem]` for cards and sections.
  - Apply subtle shadows like `shadow-2xl shadow-secondary/5`.
  - Update chart colors to use brand palette (Baltic Blue for primary, etc.).

## Verification Plan

### Automated Tests
- `npm run build` to ensure no regressions.

### Manual Verification
- Verify the global header and footer are correctly displayed.
- Check that the page content starts below the sticky header (`pt-32`).
- Validate color contrast and typography.
- Test tab functionality.

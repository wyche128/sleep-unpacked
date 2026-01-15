# Homepage Realignment Walkthrough

## Overview
We have completely redesigned the homepage to align with the project's focus on high-quality content, testosterone optimization, and the upcoming supplement line. The generic "coaching" theme has been replaced with a "Manifesto/Protocol" aesthetic.

## Changes Created

### 1. Hero Section Layout
Updated the Hero section to focus on the "Modern Man's Manifesto".
- **Headline**: "RECLAIM YOUR Biological EDGE"
- **Calls to Action**:
    - Primary: [Read The Manifesto](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/app/mans-manifesto)
    - Secondary: [Start Optimizing](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/app/optimizing-testosterone)

### 2. New Components

#### [PillarsGrid](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/components/home/PillarsGrid.tsx)
A visually rich grid linking to the four cornerstones of the site:
- The Manifesto
- Optimization Protocols
- Physical Benchmarks
- Environmental Defense

#### [ReviewHighlight](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/components/home/ReviewHighlight.tsx)
A section dedicated to the deep-dive supplement reviews, establishing authority before selling our own.
- Highlights: Testosil (Top Rated), Testogen, and Nugenix (Avoid).

#### [ShopTeaser](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/components/home/ShopTeaser.tsx)
A "Coming Soon" section for the Muscle Velocity supplement line.
- Focuses on "Clinical Dosages", "Transparency", and "Outcome Focused".
- Sets the narrative that we are building this because existing options are "underdosed trash".

### 6. Update Global Navigation
**Goal**: Reflect the new "Hub" architecture in the site header.

**Changes**:
- Updated `src/components/Header.tsx` links:
    - **Blueprint**: `/blueprint`
    - **Optimization**: `/optimizing-testosterone`
    - **Benchmarks**: `/five-physical-benchmarks`
    - **Environment**: `/toxic-home-swaps`
    - **Reviews**: `/reviews`
- Removed outdated links (Lifestyle, Science, Mindset).
- **CTA Update**: "Get Started" now links to `/blueprint`.

**Verification**:
- Verified `npm run build` passes.

### 5. Create Supplements Review Hub
**Goal**: Create a central page for all supplement analysis.

**Changes**:
- Created `src/app/reviews/page.tsx`: Aggregates reviews for Testosil, Testogen, Nugenix, GNC, Hims.
- Implemented `ReviewGrid`: Displays cards with Star Ratings, "Verdicts" (Top Rated, Avoid, etc.), and summary text.
- Navigation: Updated `ReviewHighlight` component on Homepage to link to `/reviews`.

**Verification**:
- Verified `npm run build` passes.

### 4. Branding Rice vs Sorghum
**Goal**: Apply global branding (Baltic Blue, Carbon Black) to the `rice-vs-sorghum` page.

**Changes**:
- Rewrote `src/app/rice-vs-sorghum/page.tsx` to consolidate sub-components.
- Updated styling to use `primary` (#255c99) and `secondary` (#262626) colors instead of generic Slate/Orange.
- Improved typography with `font-heading` for titles.
- Added `RelatedContentGrid` to the bottom of the page.
- **Design Note**: Ensure numbered bullets on dark backgrounds (`bg-secondary`) use `text-white` for proper accessibility and contrast.

**Verification**:
- Verified `npm run build` passes.

### 5. Content Refinement
Updated the [About](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/components/About.tsx) section to remove generic coaching language and replace it with:
- "Bio-individual protocols"
- "Deep dives into endocrine health"
- "Uncensored truth"

## Verification Results
- **Build Status**: `npm run build` passed successfully.
- **Link Check**: All new components link to existing routes (`/mans-manifesto`, `/testosil`, etc.) which were confirmed to exist in the build output.

# Global Navigation Update Implementation Plan

## Goal Description
Update the website header to reflect the new content architecture designated by the "Hubs".

## Proposed Changes

### 1. `src/components/Header.tsx`
- **Current Links**: Likely generic or outdated (e.g., Lifestyle, Science, Mindset).
- **New Links**:
    1.  **The Blueprint** (`/blueprint`)
    2.  **Optimization** (`/optimizing-testosterone`)
    3.  **Benchmarks** (`/five-physical-benchmarks`)
    4.  **Environment** (`/toxic-home-swaps`)
    5.  **Reviews** (`/reviews`)
- **Structure**:
    - If space permits, use top-level links.
    - If cramped, consider a "Protocols" dropdown for the 4 pillars and a top-level "Reviews" link.
    - *Decision*: Top-level links are preferred for visibility. Use concise labels.
    - **Labels**: "Blueprint", "Optimization", "Benchmarks", "Environment", "Reviews".

## Verification Plan
- **Automated**: `npm run build`
- **Manual**: Visual check of the header layout and link destinations.

# Snoring Guide Conversion Plan

**Goal**: Convert the static HTML "Five Surprising Fixes for Snoring" into a fully functional, branded Next.js React component under `src/app/sleep-guides/five-surprising-fixes-snoring/`.

## User Review Required
> [!NOTE]
> I am correcting the spelling of "suprising" to "surprising" in the URL path.
> The original design used a "Midnight Calm" blue palette. I will integrate this with the strict Brand Guidelines (Jet Black, Golden Bronze) but may keep some blue accents for the "sleep/night" semantic meaning where appropriate, or fully replace with Brand colors if requested. For now, I will use Brand colors for structure and keep semantic colors (like Green/Yellow/Red for indicators) as functional colors.

## Proposed Changes

### New Component
#### [NEW] [page.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/app/sleep-guides/five-surprising-fixes-snoring/page.jsx)
- **Structure**:
    - `Hero`: Clean, branded header.
    - `PrevalenceSection`: Uses `Doughnut` chart from `react-chartjs-2`.
    - `MechanicsDashboard`: State-driven tab system (`activeTab` state).
        - `GravityView`: Text + `Bar` chart.
        - `ChemistryView`: Text + `Line` chart.
        - `GeometryView`: Text + Visual comparison (Cards).
    - `HackSection`: Tennis ball hack cards.
    - `ActionPlan`: Checklist.
- **Dependencies**: `react-chartjs-2`, `chart.js`, `lucide-react` (for icons).

### Existing Updates
#### [MODIFY] [Sleep Guides Hub](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/app/sleep-guides/page.jsx)
- Add new entry to `guides` array:
    - ID: 11 (Next available)
    - Title: "5 Surprising Fixes for Snoring"
    - Link: "/sleep-guides/five-surprising-fixes-snoring"
    - Image: Use `snoringHero` (already imported but used for another? No, "What Causes Snoring?" uses it. I might need a new image or reuse one. I'll reuse or find a suitable placeholder/generate one. Actually `snoringHero` is used for id:2 "What Causes Snoring?". I should double check if I'm replacing that one or adding a new one. The user said "convert THIS page", implying it's new content. I will add it as a new guide.)

## Verification Plan
### Automated Tests
- `npm run build` to ensure no errors.
### Manual Verification
- Navigate to `/sleep-guides/five-surprising-fixes-snoring`.
- Check Chart rendering (animations, data).
- Click Tabs in Dashboard, verify content switching and smooth transitions.
- Verify responsive layout on mobile.
- Verify "Back to Guides" link works.

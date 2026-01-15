# Branding Update for Vitality Page

Apply the Muscle Velocity design system to the `vitality` page and all its interactive sub-components.

## Proposed Changes

### [Vitality Page](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/app/vitality/page.tsx)
- [MODIFY] Replace `bg-stone-100` with `bg-background` (off-white).
- [MODIFY] Replace local redundant header/footer with brand-aligned sections if needed, or remove if they conflict with global `Header`/`Footer`.
- [MODIFY] Update navigation tabs to use `primary` (Baltic Blue) for active state and `font-heading` (Space Grotesk).
- [MODIFY] Update body text to `font-body` (Lora).
- [MODIFY] Add top padding (`pt-32`) to account for the fixed site header.

### [SymptomChecker](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/components/vitality/SymptomChecker.tsx)
- [MODIFY] Update cards, sliders, and buttons to use brand colors and typography.

### [ScienceSection](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/components/vitality/ScienceSection.tsx)
- [MODIFY] Update data visualizations and headings.

### [SupplementLab](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/components/vitality/SupplementLab.tsx)
- [MODIFY] Update rating systems and product cards.

### [LifestyleProtocol](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/components/vitality/LifestyleProtocol.tsx)
- [MODIFY] Update checklists and routine cards.

### [NutritionSection](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/components/vitality/NutritionSection.tsx)
- [MODIFY] Update meal templates and nutrient cards.

## Verification Plan

### Automated Tests
- Run `npm run build` to verify no regressions.

### Manual Verification
- Verify the consistency of Baltic Blue highlights and typography across all pillars.
- Ensure the sticky navigation interacts well with the site header.

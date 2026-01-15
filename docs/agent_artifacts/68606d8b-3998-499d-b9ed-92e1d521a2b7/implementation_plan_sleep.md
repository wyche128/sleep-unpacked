# Branding Update: Sleep Testosterone Page

Apply the Muscle Velocity branding system to the `sleep-testosterone` page and its associated components. This includes removing local layout elements, updating color palettes, and standardizing typography.

## User Review Required

> [!IMPORTANT]
> - Removing local Header and Footer to use the global ones.
> - Applying `pt-32` to the main content container to avoid header overlap.

## Proposed Changes

### Core Page
#### [MODIFY] [page.tsx](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/app/sleep-testosterone/page.tsx)
- Remove local `header` and `footer`.
- Update background to `bg-background` (Off-white).
- Update text to `text-secondary` (Carbon Black).
- Set font to `font-body`.
- Add `pt-32` to the `main` container.

---

### Components

#### [MODIFY] [SleepHero.tsx](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/components/sleep-testosterone/SleepHero.tsx)
- Update typography: `font-heading` for titles, `font-body` for descriptions.
- Update colors: `primary` (Baltic Blue) for accents.

#### [MODIFY] [AgingSimulator.tsx](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/components/sleep-testosterone/AgingSimulator.tsx)
- Update colors: Replace sliders/charts with `primary` and `secondary`.
- Update typography: `font-heading` for labels.

#### [MODIFY] [CortisolSeesaw.tsx](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/components/sleep-testosterone/CortisolSeesaw.tsx)
- Update colors: `primary` and `secondary`.
- Update styling: Use more premium shadows and rounded corners.

#### [MODIFY] [ProductionCycle.tsx](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/components/sleep-testosterone/ProductionCycle.tsx)
- Update colors: Baltic Blue for cycle highlights.
- Update typography: `font-heading`.

#### [MODIFY] [Biohacks.tsx](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/components/sleep-testosterone/Biohacks.tsx)
- Update grid styling with brand colors and typography.

## Verification Plan

### Automated Tests
- Run `npm run build` to ensure no regressions.

### Manual Verification
- View `/sleep-testosterone` in the browser.
- Verify global header/footer visibility.
- Verify color contrast and typography.

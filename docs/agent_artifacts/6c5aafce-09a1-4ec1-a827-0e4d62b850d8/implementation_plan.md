# Implementation Plan - Convert 'The Modern Man's Manifesto' to Next.js

This plan covers the migration of the 'Modern Man's Manifesto' into the Next.js application. The page will use a tabbed navigation system to explore the 5 pillars of manhood, each featuring interactive calculators or visualizations.

## Proposed Changes

### [Component Name] mans-manifesto

#### [NEW] [MansManifestoHero.tsx](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/components/mans-manifesto/MansManifestoHero.tsx)
- Hero section with the "Manhood is a Verb" headline.

#### [NEW] [PillarTheJourney.tsx](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/components/mans-manifesto/PillarTheJourney.tsx)
- Content for Pillar 1 focusing on the active vs. passive mindset.

#### [NEW] [PillarPhysicalUtility.tsx](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/components/mans-manifesto/PillarPhysicalUtility.tsx)
- Content for Pillar 2 including a Waist-to-Height calculator and a Bar Chart showing fitness benchmarks.

#### [NEW] [PillarBiochemicalWillpower.tsx](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/components/mans-manifesto/PillarBiochemicalWillpower.tsx)
- Content for Pillar 3 with sliders for Sleep, Stress, and Diet influencing a dynamic T-level trajectory line chart.

#### [NEW] [PillarStoicism.tsx](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/components/mans-manifesto/PillarStoicism.tsx)
- Content for Pillar 4 featuring an interactive slider for emotional regulation states.

#### [NEW] [PillarService.tsx](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/components/mans-manifesto/PillarService.tsx)
- Content for Pillar 5 with a responsibility/mission acceptance form.

#### [NEW] [MansManifestoFooter.tsx](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/components/mans-manifesto/MansManifestoFooter.tsx)
- Closing summary and return-to-top button.

#### [NEW] [page.tsx](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/app/mans-manifesto/page.tsx)
- Main page assembling all components with a sticky tabbed navigation.

#### [DELETE] [mans-manifesto](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/.agent/archives/articles/mans-manifesto)
- Remove the original HTML file after successful migration.

## Verification Plan

### Automated Tests
- Run `npm run build` to ensure no build or static generation errors.

### Manual Verification
- Navigate to `/mans-manifesto`.
- Test tab switching functionality.
- Verify Waist-to-Height calculator logic and feedback.
- Interact with sliders in Pillar 3 to confirm the line chart updates correctly.
- Test the Stoicism slider and status display.
- Ensure the mission form in Pillar 5 is interactive.
- Check mobile responsiveness and tab scrolling.

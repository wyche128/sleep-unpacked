# Homepage Hub Implementation Plan

The goal is to create a central "Hub" homepage that showcases all three calculators and allows easy navigation between them. The existing "Profit Margin Calculator" homepage will be moved to its own dedicated route.

## User Review Required
> [!NOTE]
> I will be moving the current homepage content to `/margin-calculator`.
> The root `/` will become a dashboard/hub.

## Proposed Changes

### Pages

#### [NEW] [margin-calculator/page.tsx](file:///c:/Users/ewych/Documents/GitHubProjects/the-margin-meter/src/app/margin-calculator/page.tsx)
- **Route**: `/margin-calculator`
- **Content**:
    - The existing `Home` content (Hero, MarginCalculator, InfoSection) but specific to this tool.
    - Updated Hero to not link to *other* calculators directly, or maybe keep them as related tools.

#### [MODIFY] [page.tsx](file:///c:/Users/ewych/Documents/GitHubProjects/the-margin-meter/src/app/page.tsx)
- **Route**: `/`
- **Content**:
    - **Global Hero**: "Business Calculator Suite" or similar high-level title.
    - **Calculator Grid**: 3 Cards.
        - **Profit Margin**: Icon, Description, "Launch" button.
        - **ROAS**: Icon, Description, "Launch" button.
        - **Break Even**: Icon, Description, "Launch" button.
    - **Footer**: Shared footer.

#### [MODIFY] [Hero.tsx](file:///c:/Users/ewych/Documents/GitHubProjects/the-margin-meter/src/components/Hero.tsx)
- This component is currently specific to "Profit Margin Calculator".
- I should probably duplicate/rename it to `MarginHero.tsx` for the specific page, or make it generic.
- **Decision**: I'll create a new generic `HubHero` for the main page, and keep `Hero` (maybe renamed to `MarginHero` or just used with props) for the calculator pages. Actually, the sub-pages already have their own inline headers (ROAS, Break Even). The Margin Calculator relied on the main `Hero.tsx`. I should align them.
- **Refactor**:
    - `src/app/margin-calculator/page.tsx` should look like the other sub-pages: Inline Header + Calculator.
    - OR I keep the nice landing page vibe for Margin Calculator since it's the specific tool.
    - Let's keep `Hero.tsx` for the Margin Calculator page (moved), but remove the cross-links if they are redundant with the hub.

## Verification Plan
- **Run Locally**: `npm run dev`
- **Navigate**: Open `http://localhost:3000`.
- **Check Hub**: Verify 3 cards exist.
- **Check Links**:
    - Margin Calculator -> `/margin-calculator`
    - ROAS -> `/roas-calculator`
    - Break Even -> `/break-even-calculator`
- **Check Back Links**: Ensure sub-pages link back to `/`.

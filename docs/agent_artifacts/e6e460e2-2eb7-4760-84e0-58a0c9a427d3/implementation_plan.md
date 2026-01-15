# Create Memory Foam FAQ Page

## Goal
Create a branded, informative FAQ page explaining how memory foam is different from other mattress materials, using the project's design system (Jet Black, Golden Bronze, Graphite).

## Proposed Changes
### Content
Create a new file `src/pages/frequently-asked-questions/MemoryFoamDifferent.jsx` with the following content:
- **Title**: How is Memory Foam Different? (The Science of "The Hug")
- **Core characteristic**: Viscoelasticity (reacts to heat/pressure).
- **Benefits**: Pressure relief, motion isolation.
- **Drawbacks**: Heat retention (sleeping hot), "stuck" feeling.
- **Comparisons**: vs Latex (bouncy, cool), vs Innerspring (traditional support).
- **Styling**: Use the `FiberglassFree.jsx` template with:
    - Background: White
    - Text: Graphite / Jet Black
    - Accents: Golden Bronze
    - Icons: Lucide React (Cloud, Thermometer, Activity, Layers)

### Files
#### [NEW] [MemoryFoamDifferent.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/pages/frequently-asked-questions/MemoryFoamDifferent.jsx)
- Implementation of the React component.

#### [DELETE] [memory-foam-different](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/pages/frequently-asked-questions/memory-foam-different)
- Remove the empty placeholder file.

#### [MODIFY] [App.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/App.jsx)
- Add route for `/frequently-asked-questions/memory-foam-different`.

## Verification Plan
### Manual Verification
1.  Run `npm run dev` (already running).
2.  Navigate to `http://localhost:5173/frequently-asked-questions/memory-foam-different` (assuming port 5173).
3.  Verify:
    - Header is present.
    - Colors match brand guidelines (Golden Bronze accents, Jet Black headings).
    - Content is readable and accurate.
    - "Back to FAQ Hub" link works.
    - Responsive design on mobile/desktop.

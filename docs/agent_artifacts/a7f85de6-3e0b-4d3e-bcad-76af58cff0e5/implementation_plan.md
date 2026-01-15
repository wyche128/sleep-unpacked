# FAQ Internal Linking - Phase 2

Complete the internal linking strategy by integrating the `RelatedFAQ` component and contextual links into the remaining 8 FAQ articles. This will ensure 100% coverage of the FAQ hub.

## Proposed Changes

### Warranties & Returns Cluster
#### [MODIFY] [one-point-five-inch-threshold/page.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/app/faqs/one-point-five-inch-threshold/page.jsx)
- Import `RelatedFAQ`.
- Add contextual link to `do-i-need-a-box-spring` in the foundation section.
- Add `RelatedFAQ` component with links to:
    - `do-you-need-to-rotate-mattress` (Care)
    - `how-long-free-trial` (Warranties)
    - `how-to-break-in-mattress` (Setup)

#### [MODIFY] [how-long-free-trial/page.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/app/faqs/how-long-free-trial/page.jsx)
- Import `RelatedFAQ`.
- Add contextual link to `how-to-break-in-mattress` in the "Break-In Rule" section.
- Add `RelatedFAQ` component with links to:
    - `one-point-five-inch-threshold` (Warranties)
    - `how-to-break-in-mattress` (Setup)
    - `how-long-mattress-in-box` (Setup)

### Unboxing & Setup Cluster
#### [MODIFY] [how-long-mattress-in-box/page.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/app/faqs/how-long-mattress-in-box/page.jsx)
- Import `RelatedFAQ`.
- Add contextual link to `one-point-five-inch-threshold` in the "Voided Warranty" section.
- Add contextual link to `memory-foam-toxic` in the "Off-Gassing" section.
- Add `RelatedFAQ` component with links to:
    - `how-to-break-in-mattress` (Setup)
    - `memory-foam-toxic` (Science)
    - `one-point-five-inch-threshold` (Warranties)

#### [MODIFY] [how-to-break-in-mattress/page.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/app/faqs/how-to-break-in-mattress/page.jsx)
- Import `RelatedFAQ`.
- Add contextual link to `do-i-need-a-box-spring` in the "Foundation Sabotage" section.
- Add `RelatedFAQ` component with links to:
    - `how-long-free-trial` (Warranties)
    - `do-i-need-a-box-spring` (Maintenance)
    - `one-point-five-inch-threshold` (Warranties)

### Science & Safety Cluster
#### [MODIFY] [memory-foam-toxic/page.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/app/faqs/memory-foam-toxic/page.jsx)
- Import `RelatedFAQ`.
- Add contextual link to `fiberglass-free` in the "Flame Retardants" section.
- Add `RelatedFAQ` component with links to:
    - `fiberglass-free` (Science)
    - `memory-foam-vs-latex` (Materials)
    - `how-long-mattress-in-box` (Setup)

#### [MODIFY] [fiberglass-free/page.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/app/faqs/fiberglass-free/page.jsx)
- Import `RelatedFAQ`.
- Add `RelatedFAQ` component with links to:
    - `memory-foam-toxic` (Science)
    - `memory-foam-vs-latex` (Materials)
    - `mattress-disposal-guide` (Maintenance)

### Maintenance & Other
#### [MODIFY] [do-i-need-a-box-spring/page.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/app/faqs/do-i-need-a-box-spring/page.jsx)
- Import `RelatedFAQ`.
- Add `RelatedFAQ` component with links to:
    - `how-to-break-in-mattress` (Setup)
    - `can-i-flip-my-mattress` (Maintenance)
    - `one-point-five-inch-threshold` (Warranties)

#### [MODIFY] [mattress-disposal-guide/page.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/app/faqs/mattress-disposal-guide/page.jsx)
- Import `RelatedFAQ` and `Footer`.
- Add `RelatedFAQ` component with links to:
    - `fiberglass-free` (Science)
    - `can-i-flip-my-mattress` (Maintenance)
    - `one-point-five-inch-threshold` (Warranties)

## Verification Plan

### Automated Tests
- Run `npm run lint` and `npm run build` after all edits.
- Use `browser_subagent` to verify Link functionality across all modified pages.

### Manual Verification
- Verify that `RelatedFAQ` appears correctly at the bottom of all 8 pages.
- Verify that contextual links navigate to the correct internal pages.

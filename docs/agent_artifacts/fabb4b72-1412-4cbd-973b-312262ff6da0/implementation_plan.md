# Convert Colors Guide to Next.js

The goal is to convert the raw HTML file `colors-that-help-sleep` into a proper Next.js page within the `sleep-guides` directory, matching the "SleepUnpacked" branding and project structure.

## User Review Required

> [!IMPORTANT]
> I will replace mentions of "NapLab" with "SleepUnpacked" to match the current project branding.

## Proposed Changes

### `src/app/sleep-guides`

#### [NEW] [page.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/app/sleep-guides/colors-that-help-sleep/page.jsx)
- Create a new directory and page file.
- Implement the article using React functional components.
- Use `lucide-react` for icons.
- Use project colors (`jet-black`, `golden-bronze`, `graphite`, `alabaster-grey`).
- Integrate the global `<Header />`.
- Remove the embedded footer (handled by global layout).

#### [DELETE] [colors-that-help-sleep](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/app/sleep-guides/colors-that-help-sleep)
- Remove the raw HTML file.

### `src/app/sleep-guides/page.jsx`
- Add the new guide to the `guides` list so it appears on the hub page.

### Configuration
- Install `@tailwindcss/typography` to handle prose styling automatically.
- Update `tailwind.config.js` to include the typography plugin.
- Refactor `page.jsx` to remove manual spacing classes and use `prose` classes.

## Verification Plan

### Automated Tests
- None available.

### Manual Verification
1.  Navigate to `/sleep-guides/colors-that-help-sleep` in the browser.
2.  Verify the customized header/hero styling matches the brand.
3.  Check that paragraph spacing is handled automatically by the typography plugin.
4.  Verify the new card appears on `/sleep-guides`.

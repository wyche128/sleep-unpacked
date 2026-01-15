# Integrate New Logo

I will replace the existing `Moon` icon in the `Header` component with the new logo image.


## Proposed Changes

### Assets
- **Move** `assets/sleepunpacked_logo.png` (if at root) to `src/assets/sleepunpacked_logo.png` to keep assets organized.

### Components

#### [MODIFY] [Header.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/components/Header.jsx)
- Import `logo` from `../assets/sleepunpacked_logo.png`.
- Replace the `<Moon />` icon/div structure with:
  ```jsx
  <img src={logo} alt="SleepUnpacked Logo" className="h-8 w-auto" />
  ```
  (Adjust class names as needed for styling).

## Verification Plan

### Manual Verification
- Start the development server.
- Verify the logo appears correctly in the header on both desktop and mobile views.
- Ensure the logo links back to the homepage (existing functionality).

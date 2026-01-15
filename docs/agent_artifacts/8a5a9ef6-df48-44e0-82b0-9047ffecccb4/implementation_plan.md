# Implementation Plan - Convert to React Project

The current `index.html` contains React and TypeScript code which cannot run directly in a browser. I will set up a modern web development environment using Vite, React, TypeScript, and Tailwind CSS to make this code "live".

## User Review Required

> [!NOTE]
> The existing `index.html` will be moved to `src/App.tsx` and replaced with a standard entry point HTML file. This is a non-destructive restructuring.

## Proposed Changes

### Project Structure Setup

I will create the following structure:
- `package.json` - Project dependencies (React, Vite, Tailwind).
- `tsconfig.json` - TypeScript configuration.
- `vite.config.ts` - Vite build configuration.
- `tailwind.config.js` & `postcss.config.js` - Styling configuration.

### File Migrations
#### [NEW] [src/App.tsx](file:///c:/Users/ewych/Documents/GitHubProjects/chimneyv2/src/App.tsx)
- Move content from `index.html` to `src/App.tsx`.
- Fix any missing imports if necessary (e.g., `ReactDOM`).

#### [NEW] [src/main.tsx](file:///c:/Users/ewych/Documents/GitHubProjects/chimneyv2/src/main.tsx)
- Create the React entry point to mount `App` to the DOM.

#### [NEW] [src/index.css](file:///c:/Users/ewych/Documents/GitHubProjects/chimneyv2/src/index.css)
- Add Tailwind CSS directives.

#### [MODIFY] [index.html](file:///c:/Users/ewych/Documents/GitHubProjects/chimneyv2/index.html)
- Replace current React code with a standard HTML boilerplate that references `src/main.tsx`.

## Verification Plan

### Automated Tests
- Run `npm run build` to ensure the project builds without TypeScript errors.

### Manual Verification
- Run `npm run dev`.
- I will verify the server starts and the page renders the Hearth & Home landing page correctly.

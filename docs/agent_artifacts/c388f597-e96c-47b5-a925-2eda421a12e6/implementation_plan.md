# Migrate from Vite to Next.js

Migrate the Profit Margin Calculator from Vite + React Router to Next.js App Router while preserving all functionality and styling.

## Proposed Changes

### Next.js App Structure

#### [NEW] [next.config.js](file:///c:/Users/ewych/Documents/GitHubProjects/the-margin-meter/next.config.js)
Next.js configuration file with TypeScript and Tailwind support.

#### [NEW] [layout.tsx](file:///c:/Users/ewych/Documents/GitHubProjects/the-margin-meter/src/app/layout.tsx)
Root layout replacing `App.tsx` – includes providers, toasters, and metadata.

#### [NEW] [page.tsx](file:///c:/Users/ewych/Documents/GitHubProjects/the-margin-meter/src/app/page.tsx)
Homepage content from `pages/Index.tsx`.

#### [NEW] [not-found.tsx](file:///c:/Users/ewych/Documents/GitHubProjects/the-margin-meter/src/app/not-found.tsx)
404 page replacing `pages/NotFound.tsx`.

#### [NEW] [globals.css](file:///c:/Users/ewych/Documents/GitHubProjects/the-margin-meter/src/app/globals.css)
Global styles moved from `src/index.css`.

---

### Component Updates

#### [MODIFY] [MarginCalculator.tsx](file:///c:/Users/ewych/Documents/GitHubProjects/the-margin-meter/src/components/MarginCalculator.tsx)
Add `"use client"` directive (uses React state).

#### [MODIFY] [Hero.tsx](file:///c:/Users/ewych/Documents/GitHubProjects/the-margin-meter/src/components/Hero.tsx)
No changes needed (presentational only).

#### [MODIFY] [InfoSection.tsx](file:///c:/Users/ewych/Documents/GitHubProjects/the-margin-meter/src/components/InfoSection.tsx)
No changes needed (presentational only).

---

### Configuration Updates

#### [MODIFY] [package.json](file:///c:/Users/ewych/Documents/GitHubProjects/the-margin-meter/package.json)
- Remove: `vite`, `@vitejs/plugin-react-swc`, `react-router-dom`
- Add: `next`
- Update scripts: `dev`, `build`, `start`

#### [MODIFY] [tailwind.config.ts](file:///c:/Users/ewych/Documents/GitHubProjects/the-margin-meter/tailwind.config.ts)
Update content paths for Next.js App Router.

#### [MODIFY] [tsconfig.json](file:///c:/Users/ewych/Documents/GitHubProjects/the-margin-meter/tsconfig.json)
Update for Next.js TypeScript configuration.

---

### Files to Delete

| File | Reason |
|------|--------|
| `vite.config.ts` | Vite-specific |
| `src/vite-env.d.ts` | Vite types |
| `src/App.tsx` | Replaced by `layout.tsx` |
| `src/App.css` | Unused |
| `src/main.tsx` | Vite entry point |
| `src/pages/Index.tsx` | Moved to `app/page.tsx` |
| `src/pages/NotFound.tsx` | Moved to `app/not-found.tsx` |
| `tsconfig.app.json` | Vite-specific |
| `tsconfig.node.json` | Vite-specific |

---

## Verification Plan

### Automated Tests
```bash
npm run build   # Verify production build succeeds
npm run dev     # Start dev server and verify functionality
```

### Manual Verification
- Calculator inputs work correctly
- Results compute when 2 values entered
- Share and Clear buttons function
- Responsive layout on mobile
- Dark mode (if applicable)

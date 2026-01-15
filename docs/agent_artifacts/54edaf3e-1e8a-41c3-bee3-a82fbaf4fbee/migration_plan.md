# Migration Plan: Vite to Next.js (App Router)

This document outlines the systematic process to migrate "Sleep Unpacked" from a client-side Vite application to a server-side rendered Next.js 14+ application using the App Router.

## Why Migrate?
-   **SEO**: Specific reviews will be pre-rendered, drastically improving crawlability for "Mattress Reviews".
-   **Performance**: Improved First Contentful Paint (FCP) via server-side rendering.
-   **Routing**: Simplified file-system routing replaces the manual `App.jsx` upkeep.

## Phase 1: dependencies & Configuration
1.  **Install Next.js**:
    ```bash
    npm install next react react-dom
    ```
2.  **Remove Vite & React Router**:
    ```bash
    npm uninstall vite @vitejs/plugin-react react-router-dom
    ```
3.  **Update Configs**:
    -   Delete `vite.config.js`.
    -   Delete `index.html`.
    -   Create `next.config.mjs`.
    -   Update `tailwind.config.js` to scan the `app/` directory.

## Phase 2: Core Structure (App Router)
1.  **Create `app/` Directory**:
    -   Create `src/app`.
2.  **Root Layout**:
    -   Create `src/app/layout.jsx`.
    -   Migrate `index.html` `<head>` tags (fonts, meta) to `Metadata` API.
    -   Move `Navbar` and `Footer` here (from `App.jsx`).
3.  **Home Page**:
    -   Move `src/pages/Home.jsx` -> `src/app/page.jsx`.

## Phase 3: Route Migration (The Heavy Lift)
We will convert `App.jsx` routes to folders.

### Mapping Strategy
| Current Route | New Path | Action |
| :--- | :--- | :--- |
| `/` | `src/app/page.jsx` | Copy Home.jsx |
| `/mattress-reviews` | `src/app/mattress-reviews/page.jsx` | Copy Index |
| `/mattress-reviews/purple-original` | `src/app/mattress-reviews/purple-original/page.jsx` | Copy Review Component |
| `/sleep-guides/white-noise` | `src/app/sleep-guides/white-noise/page.jsx` | Copy Guide Component |

### Component Updates (`'use client'`)
Since we rely on `react-chartjs-2`, almost every review page needs to be a Client Component or split.
*   **Strategy A (Quick)**: Add `'use client';` to the top of every existing page file. Easy, works immediately.
*   **Strategy B (Optimized)**: Extract the Chart/Calculator logic into its own component with `'use client'`, keeping the text server-side.
*   **Recommendation**: Start with Strategy A to get running, optimize to B later.

## Phase 4: Asset & Utility Migration
1.  **Images**: Move from `public/` (Vite) to `public/` (Next.js) - *Same behavior, no change needed usually*.
2.  **Links**: Replace `import { Link } from 'react-router-dom'` with `import Link from 'next/link'`.
3.  **Hooks**: Replace `useNavigate` with `useRouter` from `next/navigation`.

## Phase 5: Verification
1.  Run `npm run dev`.
2.  Verify `localhost:3000`.
3.  Check "Time Machine" interactivity on a review page.
4.  Check navigation between Hub -> Review.

## Execution Checklist
- [ ] Install Dependencies
- [ ] Create `app/layout.jsx` & `app/globals.css`
- [ ] Migrate `Home`
- [ ] Migrate `Mattress Reviews` (Top 3 for testing)
- [ ] Verify Charts
- [ ] Bulk Migrate remaining pages

# Migration Walkthrough: Sleep Unpacked to Next.js

## Overview
The migration from Vite/React Router to Next.js App Router is complete. All content pages, including mattress reviews, sleep guides, FAQs, and comparisons, have been ported to the new `src/app` directory structure.

## Changes Implemented

### 1. Architecture
- **Framework**: Moved from Vite -> Next.js 14+ (App Router).
- **Routing**: Replaced `react-router-dom` with file-system routing in `src/app`.
- **Styling**: Continued use of Tailwind CSS with `src/app/globals.css`.
- **Components**:
    - Interactive components (Charts, Tabs, Sliders) marked with `'use client'`.
    - Static content remains Server Components where possible (default in App Router).

### 2. Migrated Content Sections

#### **Mattress Reviews** (`src/app/mattress-reviews/`)
- Hub Page: `/mattress-reviews`
- 12+ Individual Review Pages (e.g., `/purple-original`, `/winkbed-original`, `/leesa-legend`)
- **Key Features**: Interactive Radar Charts, Sagging Probability Graphs, "Time Machine" Sliders.

#### **Sleep Guides** (`src/app/sleep-guides/`)
- Hub Page: `/sleep-guides`
- 7+ In-depth Guides (e.g., `/how-to-choose-a-mattress`, `/sleeping-naked`)

#### **FAQs** (`src/app/frequently-asked-questions/`)
- Hub Page: `/frequently-asked-questions`
- 8+ Articles (e.g., `/1.5-inch-threshold`, `/fiberglass-free`)

#### **Comparisons** (`src/app/comparisons/`)
- Hub Page: `/comparisons`
- In-depth battles: `Casper vs. Purple`

### 3. Verification Results

#### ✅ Build Success
The project successfully builds using `npm run build`. All pages were prerendered as static content, ensuring high performance and SEO.

```bash
> next build
...
○  (Static)  prerendered as static content
```

#### ✅ Linting & Syntax
- Fixed JSX issues in `BrooklynBeddingAuroraLuxeReview.jsx`.
- Resolved ReferenceError in `LeesaLegendMattressReview.jsx`.
- Ensured no conflicting routes by archiving legacy code to `src/legacy_pages`.

## How to Run

### Development Mode
To work on the project with hot-reloading:
```bash
npm run dev
```

### Production Preview
To test the optimized build locally:
```bash
npm run build
npm run start
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

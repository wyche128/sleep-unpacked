# AI Agent Guide: Sleep Unpacked

This document serves as the primary source of truth for AI agents working on the **Sleep Unpacked** project. It consolidates architectural decisions, design systems, and development patterns.

---

## 1. Project Identity
**Name**: Sleep Unpacked
**Core Concept**: "The Mattress Durability Authority"
**Unique Value Prop**: "Living Reviews" — We focus on long-term performance, wear simulation, and durability analysis, not just "out of the box" comfort.

### Voice & Tone
-   **Authoritative & Data-Driven**: "Avoid the lemons. Buy once for the decade."
-   **Professional yet Accessible**: Use "Living Reviews" terminology.
-   **Unbiased**: Focus on the metrics (density, sag probabiltiy).

---

## 2. Technology Stack

### Core
-   **Framework**: Next.js 14+ (App Router)
-   **Language**: JavaScript (`.jsx`)
-   **Routing**: Next.js File-system Routing (`src/app`)
-   **Icons**: `lucide-react`

### Styling
-   **Engine**: Tailwind CSS (Native Next.js Support)
-   **Philosophy**: Utility-first. Avoid custom CSS files unless defining root variables or complex animations.
-   **Config**: `tailwind.config.js` with Global CSS in `src/app/globals.css`.

### Visualization
-   **Charts**: `react-chartjs-2` (Chart.js)
    -   **Radar Charts**: For "Performance Drift" (Shape Retention).
    -   **Bar Charts**: For "Sagging Probability" and comparisons.
    -   **Line Charts**: For "Firmness Change Over Time".
    -   **Important**: All chart components must be Client Components (`'use client'`).

---

## 3. Design System & Branding

### Color Palette (Strict Adherence Required)
Do not use generic colors. Use the project-specific semantics:

| Role | Name | Tailwind Class | Hex | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Primary/Hero** | **Night Bordeaux** | `bg-night-bordeaux-950` | `#1a0505` (approx) | Heroes, dark backgrounds, heavy contrast. |
| **Accent/Action** | **Golden Bronze** | `text-golden-bronze-500` | `#cca43b` | Buttons, high ratings, active states. |
| **Borders/Sub** | **Golden Earth** | `border-golden-earth-100` | -- | Card borders, secondary text. |
| **Background** | **Jasmine** | `bg-jasmine-50` | -- | Main page background (off-white alternative). |
| **Status** | **Molten Lava** | `bg-molten-lava-500` | -- | "Living" review dots, alerts. |
| **Text** | **Graphite** | `text-slate-700` | `#4a4a4a` | Blog body copy. |

### Typography
-   **Headings**: `Inter` (Sans) or `Merriweather` (Serif).
    -   *Convention*: Use `font-sans` for UI/Headings, `font-serif` for long-form blog content.
-   **Body**: `Inter` (`font-sans`).
-   **Setup**: Configured in `src/app/layout.jsx` via `next/font/google`.

### UI Components
#### Buttons
```jsx
<button className="bg-golden-bronze-500 hover:bg-golden-bronze-400 text-white font-bold py-4 px-8 rounded-lg shadow-xl transition-all duration-300">
  Check Price
</button>
```

#### Cards (Reviews/Guides)
-   **Container**: `bg-white rounded-2xl shadow-sm border border-golden-earth-100`
-   **Hover**: `hover:shadow-xl transition-shadow duration-300`

---

## 4. Development Patterns

### The "Living Review" Page Pattern
Every mattress review page (e.g., `src/app/mattress-reviews/leesa-original/page.jsx`) must implement:
1.  **Client Directive**: Must start with `'use client';` if using hooks (useState, useEffect).
2.  **Header**: Product name, Score, "Living Review" badge.
3.  **Time Machine (Simulator)**:
    -   State: `const [timeIndex, setTimeIndex] = useState(0); // 0=New, 1=1yr, 2=3yr, 3=5yr`
    -   Updates charts dynamically based on index.
4.  **Anatomy Layer Interaction**: Clickable layers revealing density/materials.
5.  **Data Props**: All charts must use `maintainAspectRatio: false` within a responsive container.

### File Structure (App Router)
-   `src/app/mattress-reviews/[slug]/page.jsx`: Individual review pages.
-   `src/app/sleep-guides/[slug]/page.jsx`: Educational articles.
-   `src/app/comparisons/[slug]/page.jsx`: Comparison pages.
-   `src/app/layout.jsx`: Root layout (Header/Footer).
-   `src/components/`: Shared atoms (Header, Footer, FeatureBlock).
-   `src/lib/`: Utilities.

### Best Practices
-   **Images**: Use Next.js `<Image />` component or standard `<img>` if strictly necessary.
-   **Navigation**: Use `<Link href="...">` from `next/link`.
-   **SEO**: Use `export const metadata = {}` in `page.jsx` (Server Components) or `layout.jsx`.

---

## 5. Workflow: Adding a New Review
1.  **Create Directory**: `src/app/mattress-reviews/[slug]/`.
2.  **Create Page**: Add `page.jsx` inside that directory.
3.  **Copy Pattern**: User existing review (e.g., `purple-original/page.jsx`) as a base.
4.  **Customize Data**: Update density values, warranty terms, and performance scores.
5.  **Link in Hub**: Add a card to `src/app/mattress-reviews/page.jsx`.

---

## 6. Common Tasks & Commands
-   **Start Dev Server**: `npm run dev`
-   **Build**: `npm run build`
-   **Lint**: `npm run lint`

# Branding Overhaul Implementation Plan

## Goal Description
Consolidate the site's branding into a cohesive, professional design based on expert advice. The goal is to move away from a "pitch deck" gradient look to a purposeful color system that balances the "red/black" brand identity with trust and accessibility.

## User Review Required
> [!IMPORTANT]
> Please review the **Two Directions** below and let me know which one aligns with your vision. Also, please answer the **Follow-up Questions** at the end.

## Selected Direction: Direction B ("Performance / Longevity / Editorial")
- **Core Concept**: Premium, confident, high-contrast.
- **Background**: **Carbon Black** (`0 0% 15%`) for heavy sections/hero, **Off-white** (`0 0% 97%`) for long-form content readability.
- **Primary**: **Baltic Blue** (`212 61% 37%`) as the stable trust anchor.
- **Actions (CTA)**: **Mahogany Red** (`351 100% 35%`) for "Buy", "Subscribe", "Book" - high urgency.
- **Accents**: **Tan** (`29 38% 68%`) for premium/gold-tier highlights.

### Global CSS & Theme (`src/index.css`)
- **HSL Variables**:
    - `--background`: `0 0% 97%` (Off-white) - *Default for content*
    - `--foreground`: `0 0% 15%` (Carbon Black)
    - `--card`: `0 0% 100%` (White)
    - `--card-foreground`: `0 0% 15%`
    - `--popover`: `0 0% 100%`
    - `--popover-foreground`: `0 0% 15%`
    - `--primary`: `212 61% 37%` (Baltic Blue)
    - `--primary-foreground`: `0 0% 97%`
    - `--secondary`: `0 0% 15%` (Carbon Black - useful for dark sections)
    - `--secondary-foreground`: `0 0% 97%`
    - `--muted`: `211 44% 65%` (Wisteria Blue)
    - `--muted-foreground`: `212 61% 25%` (Darker Blue)
    - `--accent`: `29 38% 68%` (Tan)
    - `--accent-foreground`: `0 0% 15%`
    - `--destructive`: `351 100% 35%` (Mahogany Red)
    - `--destructive-foreground`: `0 0% 97%`
    - `--border`: `211 44% 85%` (Light Wisteria)
    - `--input`: `211 44% 85%`
    - `--ring`: `212 61% 37%` (Baltic Blue)

### Global Header & Footer
- Already updated to match Direction B.
- Header uses `bg-secondary` (Carbon Black) for logo contrast.

---

### Modern Man's Paradox [NEW]
Conversion of the interactive HTML report into a native Next.js page with React state management and interactive charts.

#### [NEW] [page.tsx](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/app/modern-mans-paradox/page.tsx)
- Implementation of the 7-rule tabbed dashboard.
- State management for the "Vitality Audit" (Sleep, Toxins, Mindset).
- Client-side interactive charts using `Chart.js`.
- Adaptation of Stone/Amber styles to Baltic Blue/Carbon Black (Direction B).

## Hub Creation Plan

### 1. The Lifestyle Protocol (The Foundation)
**Route**: `/lifestyle` (or `/lifestyle-protocol`)
**Theme**: Actionable, Protocol-driven, "Foundation".
**Content**:
- Foundation Protocol (`/foundation-protocol`)
- Toxic Home Swaps (`/toxic-home-swaps`)
- Clean Diet (`/clean-diet`)
- Sleep & Testosterone (`/sleep-testosterone`)
- Optimizing Testosterone (`/optimizing-testosterone`)

### 2. Understanding Hormonal Health (The Science)
**Route**: `/science` (or `/hormonal-health`)
**Theme**: Educational, Data-heavy, "Science".
**Content**:
- Testosterone 101 (`/testosterone-101`)
- 5 Truths (`/five-truths-mens-health`)
- Cortisol Connection (`/cortisol-testosterone-connection`)
- Why DHT Matters (`/why-dht-matters`)
- Signs of Imbalance (`/signs-of-testosterone-imbalance`)
- Testosterone Paradox (`/testosterone-paradox`)

### 3. Mental Vitality & Manhood (The Mindset)
**Route**: `/mindset` (or `/mental-vitality`)
**Theme**: Philosophical, Psychological, "Mindset".
**Content**:
- Man's Manifesto (`/mans-manifesto`)
- Modern Man's Paradox (`/modern-mans-paradox`)
- Vitality (`/vitality`)

## Proposed Changes
### [Hub Pages]
#### [NEW] [page.tsx](file:///src/app/lifestyle/page.tsx)
#### [NEW] [page.tsx](file:///src/app/science/page.tsx)
#### [NEW] [page.tsx](file:///src/app/mindset/page.tsx)

### [Navigation]
#### [MODIFY] [Header.tsx](file:///src/components/Header.tsx)
- Update navigation links to point to these new Hubs instead of individual pages.

### Component Updates
- **Dark Mode**: Since this is a "Perfomance" brand, we might default to a dark-ish feel, but for *content heaviness*, light mode text is better. We will implement a structure where "Hero" sections are dark (Carbon bg, Off-white text) and "Article" sections are light (Off-white bg, Carbon text).


## Verification Plan
### Automated Tests
- `npm run build` to ensure no TypeScript or CSS errors.

### Manual Verification
- Browser subagent check of all 7 tabs.
- Interactive verification:
  - Toggle Identity cards -> Check Vitality Audit Update.
  - Check/uncheck Toxin Audit -> Check Vitality Audit update.
  - Move Sleep slider -> Verify chart update and feedback text change.
  - Verify mobile responsiveness of the tabbed interface.
- **Contrast Check**: Verify text readability on all new background colors.
- **Visual Regression**: Check Homepage and Man's Manifesto page for cohesive look.
- **Responsiveness**: Ensure design holds up on mobile.

---

## Follow-up Questions (Please Answer)
1. **Which Direction?** (A: Clinical/Trust OR B: Performance/Editorial)
2. **Content Type**: Is the site more content-heavy (articles) or task-heavy (dashboards/booking)?
3. **Primary CTA**: What is the *one* main action you want stats to take? (e.g., "Join Waitlist", "Buy Now", "Read Guide")

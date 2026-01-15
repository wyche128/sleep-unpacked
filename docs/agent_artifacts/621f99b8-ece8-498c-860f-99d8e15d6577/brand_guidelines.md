# SleepUnpacked Brand Guidelines

> **Core Identity**: "The Mattress Durability Authority."
> **Voice**: Professional, Unbiased, Data-Driven, yet Accessible. "Living Reviews."

---

## 1. Color Palette

Our palette evokes a **luxury, scientific, and authoritative** aesthetic. We utilize a deep, high-contrast dark mode foundation with metallic accents.

### Primary Colors
- **Jet Black** (`--color-jet-black` / `#242f40`): The primary background color for the application. A deep, rich charcoal-navy.
  - Used for: Main page backgrounds, hero sections, footers.
- **Graphite** (`--color-graphite` / `#363636`): The secondary surface color.
  - Used for: Cards, section backgrounds, inputs.
- **Golden Bronze** (`--color-golden-bronze` / `#cca43b`): The primary accent and action color.
  - Used for: Buttons, links, icons, text highlights, chart datasets.
- **Alabaster Grey** (`--color-alabaster-grey` / `#e5e5e5`): The primary text color.
  - Used for: Body text, borders (with low opacity).

### Functional Colors
- **Success Green** (`#22c55e`): For "Approved" warranty claims or positive durability traits.
- **Error Red** (`#ef4444`): For "Denied" claims or major risk factors.
- **Chart Colors**: Defined in `PurpleMattressReview.jsx` (Bronze, Cyan for comparison, Slate for baselines).

### Usage Examples
```jsx
// Primary Page Layout (Dark Mode Default)
<div className="bg-jet-black text-alabaster-grey min-h-screen font-sans">

// Hero Section
<div className="bg-jet-black text-center">
    <h1 className="text-white font-serif">...</h1>
    <p className="text-alabaster-grey/80">...</p>
</div>

// Primary Button (Golden Bronze)
<button className="bg-golden-bronze hover:bg-[#b08d32] text-white font-bold py-3 px-6 rounded-full transition-colors">
    See Analysis
</button>

// Card Component
<div className="bg-graphite border border-white/10 rounded-xl p-6 hover:border-golden-bronze/50 transition-colors">
    <h3 className="text-white font-bold">...</h3>
    <p className="text-alabaster-grey text-sm">...</p>
</div>
```

---

## 2. Typography

We pair a readable serif for credibility with a clean sans-serif for UI elements.

- **Headings**: `Merriweather` (Serif) or `Inter` (Sans-Serif).
  - **Feature Headings**: `font-serif` for major titles to convey authority.
  - **UI/Labels**: `font-sans` for clarity.
- **Body**: `Inter` (`font-sans`).

### Text Styles
- **Hero Title**: `text-4xl md:text-6xl font-extrabold tracking-tight text-white`
- **Section Heading**: `text-2xl font-bold font-serif text-white`
- **Body Copy**: `text-alabaster-grey` (Standard) or `text-alabaster-grey/70` (Muted).
- **Accents**: `text-golden-bronze font-bold uppercase tracking-wider text-xs`

---

## 3. UI Components & Patterns

### Cards (Reviews / Guides)
- **Background**: Graphite (`bg-graphite` or `#363636`)
- **Border**: `border border-white/5` (Subtle)
- **Hover**: `hover:border-golden-bronze/30` or `hover:shadow-lg`
- **Rounding**: `rounded-xl`
- **Behavior**: Entire card should be clickable or have a clear CTA.

```jsx
<div className="bg-graphite rounded-xl shadow-sm border border-white/5 overflow-hidden hover:border-golden-bronze/30 transition-all duration-300">
    {/* Content */}
</div>
```

### Gradients & Effects
- **Hero Glow**: Use subtle colored blobs with `blur-3xl` behind hero text to add depth.
- **Glassmorphism**: Use `bg-white/5 backdrop-blur` for overlays or floating panels.

### Badges / Tags
- **Background**: `bg-white/10` or `bg-golden-bronze/10`
- **Text**: `text-white` or `text-golden-bronze`
- **Rounding**: `rounded-full`

---

## 4. Voice & Principles

1.  **"Living Reviews"**: Emphasize that content is updated. Use terminology like "Annual Re-Testing", "Long-Term Analysis".
2.  **No Fluff**: Get straightforward to the data. "Avoid the lemons. Buy once for the decade."
3.  **Visual Proof**: Use icons (`ShieldCheck`, `Clock`, `Award`) to back up claims visually.

---

## 5. Technical Notes (Tailwind 4)

- **Config**: Defined in `src/index.css` via CSS variables:
  - `--color-jet-black`
  - `--color-graphite`
  - `--color-golden-bronze`
  - `--color-alabaster-grey`
- **Icons**: Use `lucide-react`.

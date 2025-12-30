# SleepUnpacked Brand Guidelines

> **Core Identity**: "The Mattress Durability Authority."
> **Voice**: Professional, Unbiased, Data-Driven, yet Accessible. "Living Reviews."

---

## 1. Color Palette

Our palette evokes a **premium, warm, and authoritative** aesthetic. We avoid the clinical "tech blue" standard and stick to rich earth tones and deep reds.

### Primary Colors
- **Night Bordeaux**: Used for headers, primary backgrounds, and high-contrast text.
  - `bg-night-bordeaux-950`: Main Hero Background
  - `text-night-bordeaux-950`: Headings
  - `bg-night-bordeaux-700`: Secondary accents
- **Golden Earth**: Used for subheadings, borders, and secondary text. Replaces standard grays.
  - `text-golden-earth-900`: Body text
  - `text-golden-earth-600`: Subtitles / Metadata
  - `border-golden-earth-100`: Card borders

### Accent Colors
- **Jasmine**: Used for highlights, light backgrounds, and "gold" text gradients.
  - `bg-jasmine-50`: Main page background (off-white alternative)
  - `text-jasmine-100`: Text on dark backgrounds
  - `text-jasmine-300`: Metallic text accents
- **Golden Bronze**: Used for primary calls-to-action (buttons).
  - `bg-golden-bronze-500`: Primary Button
- **Molten Lava**: Used sparingly for "Living" indicators and alerts.
  - `bg-molten-lava-500`: Status dots (e.g., "Living Reviews")

### Usage Examples
```jsx
// Primary Page Background
<div className="bg-jasmine-50 min-h-screen">

// Hero Section
<div className="bg-night-bordeaux-950">
    <h1 className="text-white">...</h1>
    <p className="text-jasmine-100">...</p>
</div>

// Primary Button
<button className="bg-golden-bronze-500 hover:bg-golden-bronze-400 text-white font-bold py-4 px-8 rounded-lg shadow-xl">
    Start Quiz
</button>
```

---

## 2. Typography

We pair a readable serif for credibility with a clean sans-serif for UI elements.

- **Headings**: `Inter` (Sans-Serif) or `Merriweather` (Serif). *Note: The codebase mixes these. Consistency is key.*
  - Current Standard: `font-sans` (`Inter`) for most UI. `font-serif` (`Merriweather`) for blog body content for readability.
- **Body**: `Inter` (`font-sans`).

### Text Styles
- **Hero Title**: `text-4xl md:text-6xl font-extrabold tracking-tight`
- **Section Heading**: `text-3xl font-bold text-night-bordeaux-950`
- **Body Copy**: `text-golden-earth-900` or `text-slate-700` (in blog posts).
- **Subtitles**: `text-golden-earth-600`

---

## 3. UI Components & Patterns

### Cards (Reviews / Guides)
- **Background**: White (`bg-white`)
- **Border**: `border border-golden-earth-100`
- **Shadow**: `shadow-sm hover:shadow-xl transition-shadow duration-300`
- **Rounding**: `rounded-2xl` OR `rounded-xl`
- **Behavior**: Entire card should be clickable or have a clear CTA.

```jsx
<div className="bg-white rounded-2xl shadow-sm border border-golden-earth-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
    {/* Image */}
    <div className="relative h-48 overflow-hidden">...</div>
    {/* Content */}
    <div className="p-6">...</div>
</div>
```

### Gradients
Use subtle text gradients for emphasis in Hero sections:
- `bg-gradient-to-r from-jasmine-300 to-white`

### Badges / Tags
- **Background**: White with opacity (`bg-white/90`) or brand light (`bg-jasmine-100`)
- **Text**: Dark brand color (`text-night-bordeaux-900`)
- **Rounding**: `rounded-full`

---

## 4. Voice & Principles

1.  **"Living Reviews"**: Emphasize that content is updated. Use terminology like "Annual Re-Testing", "Long-Term Analysis".
2.  **No Fluff**: Get straightforward to the data. "Avoid the lemons. Buy once for the decade."
3.  **Visual Proof**: Use icons (`ShieldCheck`, `Clock`, `Award`) to back up claims visually.

---

## 5. Technical Notes (Tailwind)

- **Config**: Defined in `src/index.css` via CSS variables (`--color-jasmine-50`, etc.).
- **Icons**: Use `lucide-react`. Standard size is `size={24}` for category icons, `size={16}` for metadata.

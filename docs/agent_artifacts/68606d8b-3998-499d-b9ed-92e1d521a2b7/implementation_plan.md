# Branding Update: Clean Diet Page

Apply the Muscle Velocity branding system to the `clean-diet` page and its associated components. This involves systematically replacing legacy colors and fonts with semantic tokens and brand-approved typography.

## User Review Required

> [!IMPORTANT]
> - Replacing the local header/footer with the global ones.
> - Adjusting layout padding to clear the fixed global header.

## Proposed Changes

### [Component] [Clean Diet Hub](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/app/clean-diet/page.tsx) [MODIFY]
- **Background**: Change `bg-[#F9F7F2]` to `bg-background`.
- **Nav/Footer**: Remove local Nav and Footer; use global ones from layout.
- **Typography**: Apply `font-heading` to titles and `font-body` to text blocks.
- **Colors**: Replace `slate-900` with `secondary`, `orange-600` with `primary`.

---

### [Component] [CleanDietHero](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/components/clean-diet/CleanDietHero.tsx) [MODIFY]
- **Typography**: Headings to `font-heading`, body to `font-body`.
- **Colors**: `text-orange-600` to `text-primary`, `bg-orange-100` to `bg-primary/10`, `text-orange-800` to `text-primary`.
- **Header Padding**: Add `pt-32` to the top section to ensure visibility under the global fixed header.

---

### [Component] [BiochemistryFactory](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/components/clean-diet/BiochemistryFactory.tsx) [MODIFY]
- Update colors (`orange` -> `primary`, `slate` -> `secondary`, `stone` -> `slate`).
- Update fonts to brand variants.

---

### [Component] [FatThresholdChart](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/components/clean-diet/FatThresholdChart.tsx) [MODIFY]
- Update Chart.js colors (use `Baltic Blue` for highlights).
- Update typography for chart labels.

---

### [Component] [FoodSwapGrid](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/components/clean-diet/FoodSwapGrid.tsx) [MODIFY]
- Rebrand the grid cards.
- Update icons and hover states.

---

### [Component] [BrainConnection](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/components/clean-diet/BrainConnection.tsx) [MODIFY]
- Apply brand colors and fonts.

## Verification Plan

### Automated Tests
- Run `npm run build` to ensure no regressions or broken imports.

### Manual Verification
- Verify the layout on `http://localhost:3000/clean-diet`.
- Check responsiveness and brand consistency.
- Ensure the global header/footer are correctly integrated.

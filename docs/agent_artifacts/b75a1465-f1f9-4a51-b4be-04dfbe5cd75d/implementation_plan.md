# Redesign Contact Form for High Visibility

The user wants the contact form near the footer to be more visible. Currently, it blends into the blue background with low contrast inputs.
I will implement a "glassmorphism" card design to frame the form, increasing its visual weight and contrast against the background.

## User Review Required
> [!NOTE]
> I am introducing a new "card" container around the form inputs with `backdrop-blur` and `bg-white/10`. This changes the layout slightly by adding padding around the form.

## Proposed Changes

### Web App

#### [MODIFY] [ContactSection.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/agency-amazing/_/apps/web/src/components/ContactSection.jsx)
- Wrap the `<form>` content (or the form itself) in a `div` with:
    - `bg-white/5` or `bg-white/10`
    - `backdrop-blur-lg`
    - `border border-white/20`
    - `rounded-3xl`
    - `p-8 md:p-10`
    - `shadow-2xl`
- Update input fields to have slightly higher contrast or better focus states to pop against the new card background. change `bg-white/10` to `bg-black/20` or stick to `bg-white/5` depending on contrast. I'll stick to `bg-white/10` for inputs but maybe increase border opacity on focus.

## Verification Plan

### Automated Tests
- None existing for visual components.

### Manual Verification
- Open the browser at `http://localhost:4000/`.
- Scroll to the footer.
- Verify the form is now contained in a visible glass-effect card.
- Verify input fields are clearly visible and focus states work.
- Verify responsiveness on mobile (padding adjustments).

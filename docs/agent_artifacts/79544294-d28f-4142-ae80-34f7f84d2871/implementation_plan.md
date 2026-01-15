# Implementation Plan - SvelteKit Migration

## Goal
Migrate the personal website from Next.js (React) to SvelteKit (Svelte + Vite).
This aims to reduce bundle size and leverage Svelte's compilation engine for better performance and a simpler developer experience.

## User Review Required
> [!WARNING]
> **Complete Rewrite**: This process involves deleting the existing Next.js application code and configuration.
> **Backup Recommended**: Ensure the current state is committed to git (done) before proceeding.

## Technology Stack
- **Framework**: SvelteKit (running on Vite)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: `shadcn-svelte` (Port of shadcn-ui)
- **Forms**: `superforms` + `zod`

## Proposed Changes

### 1. Infrastructure Reset
We need to clear the Next.js foundation and lay down the SvelteKit tracks.
- [DELETE] `.next/`, `src/app`, `next.config.mjs`
- [NEW] `svelte.config.js`, `vite.config.ts`
- [MODIFY] `package.json`: Replace `next`, `react`, `react-dom` with `svelte`, `@sveltejs/kit`, `@sveltejs/vite-plugin-svelte`.

### 2. Directory Structure
SvelteKit uses a filesystem-based router in `src/routes`.
- `src/app/page.tsx`  --> `src/routes/+page.svelte`
- `src/app/layout.tsx` --> `src/routes/+layout.svelte`
- `src/components/*`  --> `src/lib/components/*`

### 3. Component Migration Strategy
We will methodically convert each React component to a Svelte component.

**Syntax Changes:**
- **State**: `const [val, setVal] = useState(false)` --> `let val = false`
- **Props**: `interface Props { name: string }` --> `export let name: string`
- **Templating**: `className=""` --> `class=""`
- **Conditionals**: `{isShow && <div/>}` --> `{#if isShow}<div/>{/if}`
- **Loops**: `{items.map(i => <li/>)}` --> `{#each items as i}<li/>{/each}`

**Component List:**
1.  **Header**: Convert language toggle state.
2.  **HeroHeadline**: Static content.
3.  **ProfileSection**:
    - Convert `ContactModal` trigger logic.
    - Rewrite `ContactModal` using `shadcn-svelte` primitives (Dialog, Form).
4.  **ExperienceSection / EducationSection**: Static data mapped to DOM.
5.  **SkillsSection**: Progress bar components.
6.  **AwardsSection**: Layout conversion.

### 4. Form Logic (ContactModal)
- Migrate `react-hook-form` logic to Svelte native handlers or `superforms`.
- Ensure Zod validation is preserved.

## Verification Plan
### Automated Tests
- `npm run check` (SvelteKit type checking).
- `npm run build` (Verify static adapter or node adapter build).

### Manual Verification
- **Visual Regression**: Ensure the site looks identical to the React version.
- **Interactivity**: Test the Contact Modal opening, validation, and submission state.
- **Responsiveness**: Check mobile layout behavior.

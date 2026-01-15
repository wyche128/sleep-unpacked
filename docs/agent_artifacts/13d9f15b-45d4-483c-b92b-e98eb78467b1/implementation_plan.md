# Product Comparison Feature Implementation Plan

## Goal Description
Create a feature allowing users to select up to 3 supplements from the reviews page and compare them side-by-side on a dedicated comparison page. This involves centralizing review data, creating a selection context, building a floating comparison widget, and a detailed comparison page.

## User Review Required
- **Data Accuracy**: I will be populating comparison data (price, ingredients, etc.) based on available info. User should verify the specific values in `src/data/reviews.ts`.

## Proposed Changes

### Data Layer
#### [NEW] [reviews.ts](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/data/reviews.ts)
- Create a centralized array of `ReviewData` objects.
- Move existing data from `src/app/reviews/page.tsx`.
- Add new fields: `id`, `price`, `dosage`, `keyIngredients`, `pros`, `cons`.

### State Management
#### [NEW] [ComparisonContext.tsx](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/context/ComparisonContext.tsx)
- Create a React Context to manage:
    - `selectedProducts`: string[] (ids)
    - `addToComparison(id: string)`
    - `removeFromComparison(id: string)`
    - `clearComparison()`

#### [MODIFY] [layout.tsx](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/app/layout.tsx)
- Wrap the application (or just relevant parts) in `ComparisonProvider`.

### Components
#### [NEW] [CompareWidget.tsx](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/components/CompareWidget.tsx)
- Floating bar at the bottom of the screen.
- Visible when 1+ products are selected.
- Shows selected products (thumbnails/names).
- "Compare" button linking to `/compare`.

#### [NEW] [ComparisonTable.tsx](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/components/ComparisonTable.tsx)
- The core component for the comparison page.
- Grid layout comparing selected products attribute by attribute.

### Pages
#### [MODIFY] [page.tsx](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/app/reviews/page.tsx)
- Import data from `src/data/reviews.ts`.
- Add "Compare" checkbox or button to each review card.
- Integrate `CompareWidget`.

#### [NEW] [page.tsx](file:///c:/Users/ewych/Documents/GitHubProjects/muscle-velocity/src/app/compare/page.tsx)
- The comparison page.
- Reads selected IDs from Context (or URL query params for shareability - deciding on Context + URL sync if possible, but Context is simpler for now).
- Renders `ComparisonTable`.

## Verification Plan

### Automated Tests
- None planned for this UI-heavy feature in this iteration.

### Manual Verification
1.  **Selection**: Go to `/reviews`, click "Compare" on 1, 2, then 3 products. Verify `CompareWidget` appears and updates.
2.  **Constraint**: Try to select a 4th product. Verify it either replaces the oldest or shows an alert/toast (will implement simple prevention).
3.  **Navigation**: Click "Compare" in the widget. Verify navigation to `/compare`.
4.  **Display**: Verify correct products and data are shown side-by-side.
5.  **Deselection**: Remove a product from the widget or the comparison page. Verify it updates.

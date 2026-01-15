# Fix Mattress Comparison Mobile Layout

The mattress comparison page currently has layout issues on mobile, specifically column wrapping and misalignment due to the use of `auto-fit` in a responsive grid.

## Proposed Changes

### Mattress Comparison Page

#### [MODIFY] [page.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/app/mattress-comparison/page.jsx)
- **Refactor Grid Structure**: Replace `grid-cols-[200px_repeat(auto-fit,minmax(200px,1fr))]` with a deterministic `grid-cols-4` or `grid-cols-[160px_1fr_1fr_1fr]`.
- **Sticky Labels**: Make the first column in every row `sticky left-0` with a solid background (white/off-white) and a shadow/border to distinguish it while scrolling.
- **Minimum Width**: Increase `min-w-[800px]` to `min-w-[900px]` or `1000px` to ensure enough space for 3 mattresses + labels.
- **Consistent Grid Row Heights**: Ensure rows align vertically by using a single grid for the whole table or strictly identical grid definitions for each row.
- **Mobile Header**: Adjust padding and spacing of the selection chips on mobile.

```javascript
// Example structural change
<div className="grid grid-cols-[150px_1fr_1fr_1fr] divide-x divide-alabaster-grey">
    <div className="sticky left-0 z-10 bg-white p-4 font-bold ...">
        {/* Label */}
    </div>
    {/* Mattress Data Columns */}
</div>
```

## Verification Plan

### Automated Tests
- Use the browser subagent to verify the mobile layout (375x812).
- Scroll horizontally and check if the labels remain sticky.
- Check if exactly 4 columns are visible side-by-side without wrapping.

### Manual Verification
- Verify on desktop that the layout still looks premium and expands correctly.

# Implementation Plan - Five Truths WinkBed EcoCloud

Convert `five-truths-winkbed-ecocloud.html` to a React component and integrate it into the application.

## Steps

1.  **Create Component**: `src/pages/mattress-reviews/FiveTruthsWinkBedEcoCloud.jsx`
    *   Use `<Header />` component.
    *   Replace Tailwind config colors with project defaults (`text-[#242f40]`, etc. or named classes if available, but hex is safer given the HTML source).
    *   Replace FontAwesome with `lucide-react`.
2.  **Add Route**: Update `src/App.jsx`.
    *   Path: `/mattress-reviews/five-truths-winkbed-ecocloud`
3.  **Cleanup**: Delete `src/pages/mattress-reviews/five-truths-winkbed-ecocloud.html`.
4.  **Verify**: Check page load and content.

## Component Details
*   **Hero**: "The WinkBed EcoCloud: 5 Surprising Truths..."
*   **Colors**:
    *   Jet: `#242f40`
    *   Bronze: `#cca43b`
    *   Graphite: `#363636`
    *   Alabaster: `#e5e5e5`
*   **Icons**: `Clock`, `Info`, `AlertTriangle`, `CheckCircle`, `Ruler`, `RefreshCw`, `Camera`.

# Walkthrough: Created "How Long Mattress in Box" FAQ Page

I have created a new FAQ page addressing the common question about how long a mattress can remain compressed in its box.

## Changes

### 1. Created New Page Component
**File:** [HowLongMattressInBox.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/pages/frequently-asked-questions/HowLongMattressInBox.jsx)

I built a new React component that covers:
- **The Golden Rule:** Unbox within 30 days (max 60-90).
- **Risks:** Voided warranty, permanent decompression failure, and odors/mold.
- **Brand Cheat Sheet:** specific policies for Nectar, Casper, Purple, etc.
- **Style:** Adheres to the Jet Black / Golden Bronze brand guidelines.

### 2. Updated Routing
**File:** [App.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/App.jsx)

Added the route:
```javascript
<Route path="/frequently-asked-questions/how-long-mattress-in-box" element={<HowLongMattressInBox />} />
```

### 3. Linked in FAQ Hub
**File:** [index.jsx](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/src/pages/frequently-asked-questions/index.jsx)

Added the link to the "Warranties & Returns" section:
```javascript
{
    title: 'How Long Can a Mattress Stay in the Box?',
    link: '/frequently-asked-questions/how-long-mattress-in-box',
    isNew: true
},
```

### 4. Cleaned Up
Removed the empty placeholder file `src/pages/frequently-asked-questions/how-long-mattress-in-box`.

## Verification
- Use the browser to navigate to `http://localhost:5173/frequently-asked-questions`.
- Click on "How Long Can a Mattress Stay in the Box?" in the Warranties & Returns card.
- Verify the page loads with the correct styling and content.

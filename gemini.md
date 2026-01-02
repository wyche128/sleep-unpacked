# Project Context: Sleep Unpacked

## 1. Project Overview
**Sleep Unpacked** is a web application focused on providing "Living Reviews" of mattresses. Unlike standard review sites that focus on initial comfort ("out of the box"), Sleep Unpacked emphasizes **long-term durability, performance drift, and longevity analysis**.

The core value proposition is the **"Time Machine"** feature, which simulates how a mattress degrades over 1, 3, and 5 years based on foam density specs and owner reports.

## 2. Tech Stack
*   **Framework**: React (Vite)
*   **Styling**: Tailwind CSS (Utility-first)
*   **Visualization**: `react-chartjs-2` (Chart.js) for Radar and Bar charts.
*   **Icons**: `lucide-react`
*   **Routing**: `react-router-dom`

## 3. Brand Identity & Design System
The site uses a premium, "dark mode" aesthetic mixed with clean analytics.

### Color Palette
*   **Jet Black** (`#1a1a1a` / `bg-jet-black`): Primary backgrounds, headers, footers. High contrast.
*   **Golden Bronze** (`#cca43b` / `text-golden-bronze`): Primary accent, calls to action, "Living Review" tags, high scores.
*   **Graphite** (`#4a4a4a` / `text-graphite`): Secondary text, subheaders, borders.
*   **Alabaster Grey** (`#f0f0f0` / `bg-alabaster-grey`): Light backgrounds, cards, panels.

### Semantic Colors (Charts/Status)
*   **Emerald/Green**: Good/Excellent (Low Risk).
*   **Amber/Orange**: Moderate Wear/Risk.
*   **Red**: Failure/High Risk/Not Recommended.

## 4. Key Architectural Patterns

### The "Living Review" Page Pattern
Each mattress review (e.g., `LeesaOriginalMattressResearch.jsx`, `BrooklynBeddingAuroraLuxeReview.jsx`) follows a strict structure:
1.  **Header**: Score, Type, and "Living Review" badge.
2.  **Performance Drift Simulator (Time Machine)**:
    *   Uses a **Slider** to control state (`timeIndex`: 0, 1, 3, 5 years).
    *   Updates **Radar Charts** (Shape retention) and **Bar Charts** (Sagging probability).
    *   Updates text cards (Firmness change, Risk level).
3.  **Sleeper Compatibility Calculator**:
    *   Interactive buttons for user weight classes (<150, 150-200, >250lbs).
    *   Updates advice based on foam density (e.g., 3.0pcf memory foam fails faster for heavy sleepers).
4.  **Anatomy Section**:
    *   Interactive layer stack. Clicking a layer reveals technical specs (density, material).
5.  **Warranty Gap**:
    *   Comparison chart showing "Felt Softening" vs "Warranty Indentation Requirement".

### Directory Structure
*   `src/pages/mattress-reviews/`: Contains the specific review components (the core content).
*   `src/pages/comparisons/`: Head-to-head comparisons (e.g., Casper vs Purple).
*   `src/pages/sleep-guides/`: Educational content.
*   `src/components/`: Reusable UI (Header, Footer, ScrollToTop).

## 5. Recent Developments & Work Log
*   **Leesa Original Review**: Fully ported from HTML to React. Implemented Time Machine and Calculator.
*   **Brooklyn Bedding Aurora Luxe**: Ported and active.
*   **Mattress Reviews Hub**: Grid layout with "Living Review" cards linking to individual pages.
*   **Navigation**: Updated `App.jsx` with new routes.

## 6. Development Rules
*   **Always** use the specific Hex codes or Tailwind config for Brand Colors. Do not use generic `blue-500` unless strictly for "Cooling" indicators in charts.
*   **Always** verify navigation links in `App.jsx` when adding new pages.
*   **Always** ensure charts are responsive (`maintainAspectRatio: false` in Chart.js options).

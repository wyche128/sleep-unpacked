# Implementation Plan - Amazon Review Analyzer

## User Review Required
- **Tech Stack Selection**: Proceeding with **React + Vite** (Frontend), **Node.js + Express** (Backend), and **SQLite** (Database) as recommended in `plan.md`.
- **API Keys**: User will need to provide `APIFY_API_TOKEN` and `ANTHROPIC_API_KEY` for full functionality.

## Proposed Changes

### Project Structure
Organize as a monorepo-style structure within the root:
- `/client`: Frontend (React + Vite)
- `/server`: Backend (Express)
- `/shared`: Shared types/utility (optional, if needed)

### [NEW] Backend (`/server`)
- **Dependencies**: `express`, `sqlite3`, `sequelize` (for ORM), `cors`, `dotenv`, `axios` (for API calls).
- **Database**: SQLite file `database.sqlite` stored locally.
- **Models**:
    - `Run`: Stores run configuration and status.
    - `Review`: Stores scraped review data.
    - `Theme`: Stores extracted analysis themes.
    - `BulletSet`: Stores generated bullet points.
- **API Routes**:
    - RESTful endpoints matching `plan.md` spec.

### [NEW] Frontend (`/client`)
- **Dependencies**: `react`, `react-dom`, `react-router-dom`, `axios`, `tailwindcss` (for modern styling).
- **Pages**:
    - `Dashboard`: List runs.
    - `NewRun`: Create analysis run.
    - `RunDetail`: View run progress and results.
    - `ReviewBrowser`: Filterable review list.
    - `Results`: Themes and generated bullets.

## Verification Plan

### Automated Tests
- Backend: Simple API route tests using `jest` and `supertest` (MVP level).
- Frontend: Build verification (`npm run build`).

### Manual Verification
- Start both servers.
- Create a new Run via UI.
- Verify status updates (mocking long-running processes if API keys missing).
- Output generated bullets.

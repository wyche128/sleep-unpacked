# Improve Scenario Clarity

## Goal Description
The goal is to make the scenarios more understandable for the user by adding clear descriptions to each scenario card. This will help users understand what each scenario entails and how it differs from the others.

## Proposed Changes

### Trade-off Engine

#### [MODIFY] [simulation.ts](file:///c:/Users/ewych/Downloads/jules_session_17482702699995546169_holistic-trade-off-engine/trade-off-engine/src/lib/simulation.ts)
- Refactor `escenarios` to be an object where each key maps to an object containing:
    - `id`: string
    - `title`: string
    - `description`: string
    - `run`: (params: ScenarioParams) => SimulationResult[]
- Export this `SCENARIOS` object.
- Update `runScenario` to accept the scenario ID.

#### [MODIFY] [Dashboard.tsx](file:///c:/Users/ewych/Downloads/jules_session_17482702699995546169_holistic-trade-off-engine/trade-off-engine/src/components/Dashboard.tsx)
- Import `SCENARIOS` from `simulation.ts`.
- Iterate over `Object.values(SCENARIOS)` to run simulations and render `ScenarioCard`s.
- Pass the `description` to `ScenarioCard`.

#### [MODIFY] [ScenarioCard.tsx](file:///c:/Users/ewych/Downloads/jules_session_17482702699995546169_holistic-trade-off-engine/trade-off-engine/src/components/ScenarioCard.tsx)
- Update props to include `description`.
- Render the `description` below the title.

## Verification Plan

### Manual Verification
- Open the application.
- Enter dummy data and run the plan.
- Verify that each scenario card now displays a helpful description.
- Verify that the descriptions accurately reflect the logic of the scenario.

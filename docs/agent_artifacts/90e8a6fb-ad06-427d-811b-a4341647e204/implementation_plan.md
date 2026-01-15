# Implementation Plan - Archiving Agent Artifacts

The goal is to move all historical "walkthroughs, implementation plans, etc" from the agent's "brain" directory into the user's project to preserve them.

## Proposed Changes

### [Docs]
#### [NEW] [agent_artifacts](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/docs/agent_artifacts)
- A new directory structure to hold the copied artifacts.
- Structure: `docs/agent_artifacts/[SessionID]/[filename]`

#### [NEW] [Index.md](file:///c:/Users/ewych/Documents/GitHubProjects/sleep-unpacked/docs/agent_artifacts/Index.md)
- A markdown table listing all archived sessions.
- Columns: `| Date | Session ID | Topic/summary |`
- Validates which folders contain useful artifacts (skips empty ones).

### Scripts
#### [NEW] `copy_artifacts.ps1`
- Iterates over `C:\Users\ewych\.gemini\antigravity\brain\` folders.
- Filters for `.md` (task, implementation_plan, walkthrough) and `.webp` files.
- Extracts "TaskName" or title from `task.md` or `implementation_plan.md` to populate the `Topic` in `Index.md`.
- Copies files to `docs/agent_artifacts/[SessionID]/`.
- Generates `Index.md`.

## Verification Plan

### Automated Verification
- Verify `Index.md` is created and not empty.
- Verify subdirectories exist in `docs/agent_artifacts`.

# AI Productivity Planner Web App

This plan outlines the creation of a modern AI Productivity Planner web app. The app will include a checklist for daily tasks, smart task suggestions, dynamic progress tracking, and data persistence using local storage. The visual design will be clean and premium, featuring a modern typography, a blue/purple gradient background, and a card-based layout with smooth interactions.

## User Review Required

> [!IMPORTANT]
> - **Technology Stack**: I propose using **Vite + React** for this web app. It provides an excellent foundation for state management (tasks, progress, local storage syncing) while allowing us to stick to Vanilla CSS for styling as instructed. Let me know if you would prefer a vanilla HTML/JS/CSS setup instead.
> - **Workspace Location**: This project will be created in `C:\Users\tanve\.gemini\antigravity\scratch\ai-productivity-planner`. Once created, I highly recommend opening this folder as your active workspace in your IDE.

## Proposed Changes

### Project Initialization
- Create a new React + JavaScript project using Vite.

### Core Application
- **State Management**:
  - `tasks`: An array of task objects `{ id, text, completed }` synchronized with `localStorage`.
  - `quote`: A motivational quote displayed at the top.

### File Structure & Components

#### [NEW] App.jsx
- The main application entry point. Holds the top-level state and the `useEffect` blocks for syncing with local storage. Combines the layout elements.

#### [NEW] index.css
- Global CSS for the application:
  - Deep blue-to-purple animated gradient background.
  - Clean typography using imported Google Fonts ('Inter').
  - Glassmorphic card styling with backdrop blurs and smooth drop shadows.
  - Input, button, and checkbox stying with dynamic hover and focus states.

#### [NEW] components/Header.jsx
- A component to display a randomized motivational quote and the "Clear All" reset button.

#### [NEW] components/ProgressBar.jsx
- A sleek, dynamically filling progress bar based on the calculated percentage of completed tasks.

#### [NEW] components/TaskInput.jsx
- A modern input form to manually add daily tasks. Includes a dedicated button equipped with a spark icon for generating "Smart Suggested Tasks".

#### [NEW] components/TaskList.jsx
- A list container holding rendered task items, with subtle entrance animations.

#### [NEW] components/TaskItem.jsx
- Individual checklist row showing a custom styled checkbox, the task text (strikethrough when completed), and a clean delete button.

## Open Questions

> [!NOTE]
> Are there any specific "smart suggested tasks" (e.g., Coding for 1 hr) you would definitely want included in the pool of generated suggestions? Currently, I will use a curated default list.

## Verification Plan

### Manual Verification
- We will start the Vite dev server locally.
- I will launch a browser subagent to visually verify:
  - The UI matches the premium gradient/card design requirement.
  - Adding, deleting, and checking off tasks functions perfectly.
  - The progress bar animation works.
  - Task data persists correctly across page refreshes.

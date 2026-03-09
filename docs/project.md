# Project Context: Jogo da Velha (Tic-Tac-Toe)

## Overview
A web-based Tic-Tac-Toe game implemented in vanilla JavaScript, HTML, and CSS. The project supports both local multiplayer and single-player modes against an AI with adjustable difficulty levels.

## Tech Stack
- **Frontend:** HTML5, CSS3 (Variables, Flexbox/Grid).
- **Scripting:** Vanilla JavaScript (ES6 Modules).
- **State Management:** Custom singleton store (`gameState.js`).
- **Persistence:** LocalStorage for score tracking.
- **No External Dependencies:** Zero build tools or frameworks required for runtime.

## Core Features
1.  **Game Modes:**
    - Player vs Player (Local).
    - Player vs AI (Easy, Medium, Hard).
2.  **AI Logic:**
    - **Easy:** Random moves (`Math.random()`).
    - **Medium:** Heuristic-based (Win > Block > Random).
    - **Hard:** Minimax Algorithm (Unbeatable).
3.  **State Persistence:**
    - Scores are saved to `localStorage`.
    - Resets clear both board and storage.
4.  **UI/UX:**
    - Symbol selection (X or O).
    - Dynamic difficulty selector.
    - Visual feedback for wins/draws.

## Directory Structure
- `source/index.html`: Main entry point.
- `source/assets/css/`: Stylesheets (main, reset, variables).
- `source/assets/js/`:
    - `index.js`: Bootstraps event listeners.
    - `store/gameState.js`: Centralized state (player symbol, difficulty, turn).
    - `functions/`: Core game logic (AI, move validation, win checking).
    - `utils/`: Helpers (reset, score loading).

## Key Workflows
- **Initialization:** `index.js` imports `gerenciarBotoes`, `gerenciarDificuldade`, `carregarPlacar`.
- **Turn Handling:** `inserirSimbolo.js` handles clicks, updates UI, and triggers `inteligenciaArtificial.js` if needed.
- **AI Turn:** `inteligenciaArtificial.js` calculates move based on `gameState.difficulty` and delays execution for realism.

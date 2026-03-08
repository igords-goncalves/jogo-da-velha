# Implementation Plan - AI Difficulty Levels

## Problem
The game currently has a "Level" selection dropdown (`#nivel`) with options "Fácil", "Médio", and "Difícil", but it is not functional. The AI always plays randomly (equivalent to "Fácil").

## Goal
Implement logic for "Médio" and "Difícil" difficulty levels, affecting how the AI plays.

## Proposed Solution

1.  **State Management**: Update `gameState.js` to store the selected difficulty.
2.  **UI Handling**: Create a `gerenciarDificuldade.js` module to listen for changes in the dropdown and update the state.
3.  **AI Logic**: Refactor `inteligenciaArtificial.js` to implement different strategies based on the selected level.

### Difficulty Strategies
-   **Fácil (Easy)**: Random move (Existing logic).
-   **Médio (Medium)**:
    -   **Win**: If AI has 2 in a row, take the 3rd to win.
    -   **Block**: If Player has 2 in a row, take the 3rd to block.
    -   **Random**: Otherwise, play randomly.
-   **Difícil (Hard)**:
    -   **Minimax Algorithm**: Implement a recursive algorithm to find the optimal move. The AI will never lose (it will win or draw).
    -   *Fallback*: If Minimax is too heavy (unlikely for 3x3), use a strong priority list: Win > Block > Center > Opposite Corner > Empty Corner > Empty Side.

## Architecture

-   **`source/assets/js/store/gameState.js`**: Add `difficulty: 'facil'`.
-   **`source/assets/js/functions/gerenciarDificuldade.js`**: New module.
-   **`source/assets/js/functions/inteligenciaArtificial.js`**: Major refactor.
    -   Extract `makeRandomMove` (existing logic).
    -   Implement `makeMediumMove` (Win/Block logic).
    -   Implement `makeHardMove` (Minimax).
    -   Helper functions for board analysis (converting DOM to array).

## Steps

1.  **Update State**: Add `difficulty` to `gameState.js`.
2.  **Create Manager**: `gerenciarDificuldade.js` -> updates state on change.
3.  **Refactor AI**:
    -   Import `gameState`.
    -   Map current DOM state to a simple array `['x', 'o', null, ...]`.
    -   Implement `checkWin(board, player)` helper.
    -   Implement logic for each level.
4.  **Integration**: Call `gerenciarDificuldade()` in `index.js`.

## Questions/Assumptions
-   Changing difficulty mid-game will apply to the next move (no need to reset immediately, though resetting is cleaner). I'll stick to *not* resetting automatically to allow dynamic difficulty adjustment, or I can reset if preferred. *Decision*: Changing difficulty does NOT reset the game, just changes AI behavior for next move.
-   AI symbol is retrieved from `gameState.aiSymbol`.

## Todos
-   [x] Update `gameState.js`.
-   [x] Create `gerenciarDificuldade.js`.
-   [x] Refactor `inteligenciaArtificial.js` to include Minimax and Medium logic.
-   [x] Update `index.js`.

# JavaScript Coding Standards and Best Practices

## General Principles
- **Strict Mode:** Implicit in ES modules (ESM). Do not add `"use strict";`.
- **Vanilla JavaScript:**
    - Use pure ES6+ features (`let`, `const`, `arrow functions`, `modules`).
    - Avoid external libraries (jQuery, Lodash, React) unless explicitly requested.
- **State Management:**
    - Prefer centralized state (`gameState.js`) over scattered variables.
    - Mutate global state via defined setters/utility functions where possible.
- **Performance:**
    - Use efficient DOM manipulation (minimize reflows).
    - Cache DOM elements where appropriate, but prefer `querySelector` for clarity in small components.

## Defensive Programming
- **Null Checks:**
    - **CRITICAL:** Always verify `document.querySelector` results before accessing properties.
    - Example:
      ```javascript
      const element = document.querySelector("#my-id");
      if (!element) return; // or console.warn
      element.textContent = "New Value";
      ```
    - Use optional chaining (`?.`) when safe access is preferred over early return.
- **Persistence Safety:**
    - Validate `localStorage` reads (handle `null`/`undefined`).
    - Use fallbacks for `parseInt` (e.g., `parseInt(val, 10) || 0`).

## Style and Formatting
- **Variables:** camelCase (`myVariable`).
- **Constants:** UPPER_SNAKE_CASE (`MAX_RETRIES`).
- **Functions:** camelCase (`calculateMove()`).
- **Quotes:** Double quotes (`"string"`) preferred for consistency with HTML attributes.
- **Semicolons:** Always use semicolons.

## Comments and Documentation
- **JSDoc:** Use JSDoc for complex logic (e.g., Minimax, heuristic algorithms).
- **Function Headers:**
    - Explain inputs, outputs, and side effects.
    - Describe the purpose if not immediately obvious from the name.
- **TODOs:** Mark incomplete tasks with `// TODO: description` or `// FIX: issue`.

## AI Logic Specifics
- **Minimax:** Document recursion depth and base cases clearly.
- **Randomness:** Use `Math.random()` for stochastic behavior (Easy/Medium modes).
- **Delays:** Use `setTimeout` for UI feedback but ensure timeouts are cleared on game reset.

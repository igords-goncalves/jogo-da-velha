import { gameState } from "../store/gameState.js";

function gerenciarDificuldade() {
  const selectNivel = document.querySelector("#nivel");

  if (!selectNivel) {
    console.warn("Elemento `#nivel` não encontrado no DOM");
    return;
  }

  // Initial state from HTML default
  gameState.difficulty = selectNivel.value;

  selectNivel.addEventListener("change", (e) => {
    gameState.difficulty = e.target.value;
  });
}

export default gerenciarDificuldade;

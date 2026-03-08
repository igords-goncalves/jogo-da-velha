import { gameState } from "../store/gameState.js";

function gerenciarDificuldade() {
  const selectNivel = document.querySelector("#nivel");

  // Initial state from HTML default
  gameState.difficulty = selectNivel.value;

  selectNivel.addEventListener("change", (e) => {
    gameState.difficulty = e.target.value;
    console.log(`Dificuldade alterada para: ${gameState.difficulty}`);
  });
}

export default gerenciarDificuldade;

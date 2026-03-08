import { gameState } from "../store/gameState.js";
import inteligenciaArtificial from "./inteligenciaArtificial.js";
import limparJogadas from "../utils/limparJogadas.js";

function gerenciarBotoes() {
  const btnX = document.querySelector("#vezes");
  const btnO = document.querySelector("#bolinha");
  const x = document.querySelector(".x");
  const blocos = document.querySelectorAll(".box");

  // Initial UI state
  btnX.classList.add("active");

  function resetGame() {
    limparJogadas();
    document.querySelector("#mensagem").classList.add("esconder");
    const quadro = document.querySelector("#bg-quadro");
    quadro.style.removeProperty("filter");
  }

  function checkAIStart() {
    if (gameState.aiSymbol === "x") {
      setTimeout(() => {
        inteligenciaArtificial(null, x, blocos);
      }, 500);
    }
  }

  btnX.addEventListener("click", () => {
    if (gameState.playerSymbol === "x") return;
    gameState.playerSymbol = "x";
    gameState.aiSymbol = "o";
    
    btnX.classList.add("active");
    btnO.classList.remove("active");
    
    resetGame();
  });

  btnO.addEventListener("click", () => {
    if (gameState.playerSymbol === "o") return;
    gameState.playerSymbol = "o";
    gameState.aiSymbol = "x";
    
    btnO.classList.add("active");
    btnX.classList.remove("active");
    
    resetGame();
    checkAIStart();
  });
}

export default gerenciarBotoes;

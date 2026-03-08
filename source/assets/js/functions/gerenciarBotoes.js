import { gameState } from "../store/gameState.js";
import inteligenciaArtificial from "./inteligenciaArtificial.js";
import limparJogadas from "../utils/limparJogadas.js";

function gerenciarBotoes() {
  const btnX = document.querySelector("#vezes");
  const btnO = document.querySelector("#bolinha");
  const x = document.querySelector(".x");
  const blocos = document.querySelectorAll(".box");
  let aiStartTimeoutId = null;

  // Initial UI state
  btnX.classList.add("active");

  function resetGame() {
    if (aiStartTimeoutId !== null) {
      clearTimeout(aiStartTimeoutId);
      aiStartTimeoutId = null;
    }
    if (gameState.aiTimeoutId !== null) {
      clearTimeout(gameState.aiTimeoutId);
      gameState.aiTimeoutId = null;
    }
    gameState.aiThinking = false;

    limparJogadas();
    document.querySelector("#mensagem").classList.add("esconder");
    const quadro = document.querySelector("#bg-quadro");
    quadro.style.removeProperty("filter");
  }

  function checkAIStart() {
    if (gameState.aiSymbol === "x") {
      gameState.aiThinking = true;
      aiStartTimeoutId = setTimeout(() => {
        inteligenciaArtificial(null, x, blocos);
        aiStartTimeoutId = null;
        gameState.aiThinking = false;
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

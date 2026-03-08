import { gameState } from "../store/gameState.js";
import inteligenciaArtificial from "./inteligenciaArtificial.js";
import validarCombinacoes from "./validarCombinacoes.js";
import validarEmpate from "./validarEmpate.js";

function inserirSimbolo() {
  const blocos = document.querySelectorAll(".box");
  const x = document.querySelector(".x");
  const o = document.querySelector(".o");

  blocos.forEach((bloco) => {
    bloco.addEventListener("click", () => {
      const mensagem = document.querySelector("#mensagem");
      if (!mensagem.classList.contains("esconder")) return;
      if (bloco.childNodes.length > 0) return;

      const simboloAtual = gameState.playerSymbol === "x" ? x : o;
      const simboloIA = gameState.aiSymbol === "x" ? x : o;

      bloco.appendChild(simboloAtual.cloneNode(true));

      const vitoria = validarCombinacoes();
      if (!vitoria) {
        validarEmpate(blocos);
      }
      
      if (!mensagem.classList.contains("esconder")) return;

      setTimeout(() => {
        inteligenciaArtificial(bloco, simboloIA, blocos);
      }, 200);
    });
  });
}

export default inserirSimbolo;

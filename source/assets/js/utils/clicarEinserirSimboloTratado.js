import checarValorEdefinirSimbolo from "../functions/checarValorEdefinirSimbolo.js";
import inteligenciaArtificial from "../functions/inteligenciaArtificial.js";
import verificaJogadas from "./verificaJogadas.js";

function clicarEinserirSimboloTratado() {
  const containerDeCaixas = document.querySelectorAll(".box");

  const x = document.querySelector(".x");
  const o = document.querySelector(".o");
  let player = 0;
  let ia = 0;

  containerDeCaixas.forEach((caixa) => {
    caixa.addEventListener("click", () => {
      setTimeout(() => {
        inteligenciaArtificial(caixa, o, containerDeCaixas);
      }, 500);

      verificaJogadas(caixa, checarValorEdefinirSimbolo(x, o, player, ia));
    });
  });
}

export default clicarEinserirSimboloTratado;

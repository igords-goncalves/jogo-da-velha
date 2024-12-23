import checarValorEdefinirSimbolo from "../functions/checarValorEdefinirSimbolo.js";
import inteligenciaArtificial from "../functions/inteligenciaArtificial.js";
import verificaJogadas from "./verificaJogadas.js";

function clicarEinserirSimboloTratado(containerDeCaixas, x, o, player, ia) {
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

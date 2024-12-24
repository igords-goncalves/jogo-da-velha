import validarSimbolo from "./validarSimbolo.js";
import inteligenciaArtificial from "./inteligenciaArtificial.js";
import validarCombinacoes from "./validarCombinacoes.js";

function inserirSimbolo() {
  const blocos = document.querySelectorAll(".box");

  const x = document.querySelector(".x");
  const o = document.querySelector(".o");

  blocos.forEach((bloco, i) => {
    bloco.addEventListener("click", () => {
      /**
       * A tarefa agendada na queue deve ser interrompida
       * assim que o vencedor é declarado, sendo assim a ia não
       * deve inserir peças após a derrota.
       **/
      setTimeout(() => {
        inteligenciaArtificial(bloco, o, blocos);
      }, 500);

      const simboloValidado = validarSimbolo(x, o);

      if (bloco.childNodes.length === 0) {
        bloco.appendChild(simboloValidado.cloneNode(true));
      }

      // Inserindo e validando
      validarCombinacoes();
    });
  });
}

export default inserirSimbolo;

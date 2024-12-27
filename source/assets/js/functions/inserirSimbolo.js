import validarSimbolo from "./validarSimbolo.js";
import inteligenciaArtificial from "./inteligenciaArtificial.js";
import validarCombinacoes from "./validarCombinacoes.js";
import validarEmpate from "./validarEmpate.js";

function inserirSimbolo() {
  const blocos = document.querySelectorAll(".box");
  const x = document.querySelector(".x");
  const o = document.querySelector(".o");

  blocos.forEach((bloco) => {
    bloco.addEventListener("click", () => {
      if (bloco.childNodes.length > 0) return;
      /**
       * //FIXME:
       * A tarefa agendada na queue deve ser interrompida
       * assim que o vencedor é declarado, sendo assim a ia não
       * deve inserir peças após a derrota.
      **/
      const simboloValidado = validarSimbolo(x, o);
      bloco.appendChild(simboloValidado.cloneNode(true));

      validarEmpate(blocos);
      validarCombinacoes();
      
      setTimeout(() => {
        inteligenciaArtificial(bloco, o, blocos);
      }, 200);
    });
  });
}

export default inserirSimbolo;

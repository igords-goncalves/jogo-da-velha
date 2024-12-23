import declararVencedorAtualizaPlacar from "../utils/declararVencedorAtualizarPlacar.js";

function checarCondicaoDeEmpate(containerDeCaixas) {
  let empate = 0;
  for (let i = 0; i < containerDeCaixas.length; i++) {
    if (containerDeCaixas[i].childNodes[0] !== undefined) {
      empate++;
    }
  }
  if (empate === 9) {
    declararVencedorAtualizaPlacar();
  }
}

export default checarCondicaoDeEmpate;

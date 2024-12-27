import exibirVencedor from "./exibirVencedor.js";

function validarEmpate(blocos) {
  let empate = 0;
  for (let i = 0; i < blocos.length; i++) {
    if (blocos[i].childNodes[0] !== undefined) {
      empate++;
    }
  }
  if (empate === 9) {
    exibirVencedor();
  }
}

export default validarEmpate;

import exibirVencedor from "./exibirVencedor.js";

function validarVitoria(blocos147, blocos258, blocos369, simbolo) {
  const blocos = [blocos147, blocos258, blocos369];

  if (
    blocos.every(
      (bloco) =>
        bloco.childNodes.length > 0 && bloco.childNodes[0].className === simbolo
    )
  ) {
    const vencedor = exibirVencedor(simbolo);
    return vencedor;
  }
}

export default validarVitoria;

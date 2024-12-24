import exibirVencedor from "./exibirVencedor.js";

function validarVitoria(blocos147, blocos258, blocos369, simbolo) {
  const blocos = [blocos147, blocos258, blocos369];

  //Testa se todos os elementos passam pelo teste fornecido pela callback
  if (
    blocos.every(
      (bloco) =>
        bloco.childNodes.length > 0 && bloco.childNodes[0].className === simbolo
    )
  ) {
    // exibirVencedor(simbolo);
    const vencedor = exibirVencedor(simbolo);
    return vencedor;
  }
}

export default validarVitoria;

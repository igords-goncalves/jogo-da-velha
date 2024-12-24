import checarCondicaoDeVitoria from "../functions/checarCondicaoDeVitoria.js";

//TODO: Enquanto for zero a caixa está vazia
function verificaJogadas(caixa, simboloChecado) {
  if (caixa.childNodes.length === 0) {
    caixa.appendChild(simboloChecado.cloneNode(true));
  }
  checarCondicaoDeVitoria();
}

export default verificaJogadas;

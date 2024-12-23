import checarCondicaoDeVitoria from "../functions/checarCondicaoDeVitoria.js";

function verificaJogadas(caixa, simboloChecado) {
  if (caixa.childNodes.length === 0 && caixa.childNodes.length < 1) {
    caixa.appendChild(simboloChecado.cloneNode(true));
  }
  checarCondicaoDeVitoria();
}

export default verificaJogadas;

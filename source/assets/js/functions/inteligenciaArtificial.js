function inteligenciaArtificial(caixa, simbolo, containerDeCaixas) {
  let contador = 0;

  //FIXME: O problema está no preenchimento das casas com IA.
  for (let i = 0; i < containerDeCaixas.length; i++) {
    let randomNumbers = Math.floor(Math.random() * 2);

    if (containerDeCaixas[i].childNodes[0] === undefined && randomNumbers < 1) {
      containerDeCaixas[i].appendChild(simbolo.cloneNode(true));
      contador++;
      break;
    } else {
      caixa++;
    }
  }

  if (contador === 0 && caixa < 9) {
    inteligenciaArtificial();
  }
}

export default inteligenciaArtificial;

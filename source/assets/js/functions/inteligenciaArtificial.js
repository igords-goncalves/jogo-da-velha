function inteligenciaArtificial(bloco, simbolo, blocos) {
  let contador = 0;

  for (let i = 0; i < blocos.length; i++) {
    let randomNumbers = Math.floor(Math.random() * 6);

    if (!blocos[i]?.childNodes.length && randomNumbers <= 1) {
      blocos[i].appendChild(simbolo.cloneNode(true));
      contador++;
      break;
    }
  }

  if (contador === 0 && bloco < blocos.length) {
    inteligenciaArtificial(bloco, simbolo, blocos);
  }
}

export default inteligenciaArtificial;

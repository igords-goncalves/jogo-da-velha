function inteligenciaArtificial(bloco, simbolo, blocos) {
  let contador = 0;
  let randomNumbers = Math.floor(Math.random() * 5 + 1);  

  for (let i = 0; i < blocos.length; i++) {

    console.log(randomNumbers)

    if (blocos[i].childNodes[0] === undefined  && randomNumbers !== 0) {
      blocos[i].appendChild(simbolo.cloneNode(true));
      contador++;
      break;
    } else {
      bloco++;
    }
  }

  if (contador !== 0 && bloco <= 9 ) {
    inteligenciaArtificial(bloco, simbolo, blocos);
  }
}

export default inteligenciaArtificial;

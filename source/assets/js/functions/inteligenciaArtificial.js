function inteligenciaArtificial(bloco, simbolo, blocos) {
  const blocosVazios = [];
  
  for (let i = 0; i < blocos.length; i++) {
    if (!blocos[i]?.childNodes.length) {
      blocosVazios.push(i);
    }
  }
  
  if (blocosVazios.length > 0) {
    const indiceAleatorio = Math.floor(Math.random() * blocosVazios.length);
    const blocoEscolhido = blocosVazios[indiceAleatorio];
    blocos[blocoEscolhido].appendChild(simbolo.cloneNode(true));
  }
}

export default inteligenciaArtificial;

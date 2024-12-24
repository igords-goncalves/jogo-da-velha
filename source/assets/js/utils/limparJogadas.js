function limparJogadas() {
  const jogadas = document.querySelectorAll(".box div");

  for (let i = 0; i < jogadas.length; i++) {
    jogadas[i].parentNode.removeChild(jogadas[i]);
  }
}

export default limparJogadas;

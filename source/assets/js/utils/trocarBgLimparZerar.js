function trocarBgLimparZerar(mensagem) {
  let bgQuadro = document.querySelector("#bg-quadro");
  bgQuadro.style.filter = "blur(10px)";
  bgQuadro.style.transition = "0.3s";

  const esconderBg = (elemento) =>
    bgQuadro.style.removeProperty(elemento);

  const esconderMsg = (elemento) => elemento.classList.add("esconder");

  const limpar = () => {
    const removerJogadas = document.querySelectorAll(".box div");

    for (let i = 0; i < removerJogadas.length; i++) {
      removerJogadas[i].parentNode.removeChild(removerJogadas[i]);
    }

    setTimeout(() => {
      esconderMsg(mensagem);
      esconderBg(bgQuadro, "filter");
      limpar();
    }, 1500);
  };
}

export default trocarBgLimparZerar;

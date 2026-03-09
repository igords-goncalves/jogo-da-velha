import limparJogadas from "./limparJogadas.js";

function continuarPartida(mensagem) {
  const quadro = document.querySelector("#bg-quadro");

  quadro.style.filter = "blur(10px)";
  quadro.style.transition = "0.3s";

  setTimeout(() => {
    quadro.style.removeProperty("filter");
    mensagem.classList.add("esconder");
    limparJogadas();
  }, 1500);
}

export default continuarPartida;

import continuarPartida from "../utils/continuarPartida.js";

function exibirVencedor(simbolo) {
  let mensagem = document.querySelector("#mensagem");
  let placarX = document.querySelector("span #placar-1");
  let placarO = document.querySelector("span #placar-2");

  let status = "";

  if (simbolo === "x") {
    placarX.textContent = parseInt(placarX.textContent) + 1;
    status = `${simbolo.toUpperCase()} VENCEU`;
  } else if (simbolo === "o") {
    placarO.textContent = parseInt(placarO.textContent) + 1;
    status = `${simbolo.toUpperCase()} VENCEU`;
  } else {
    status = "EMPATE";
  }

  continuarPartida(mensagem);
  mensagem.innerHTML = status;
  mensagem.classList.remove("esconder");
  return simbolo;
}

export default exibirVencedor;

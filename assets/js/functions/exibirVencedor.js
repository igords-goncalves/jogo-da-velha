import continuarPartida from "../utils/continuarPartida.js";

function exibirVencedor(simbolo) {
  let mensagem = document.querySelector("#mensagem");
  let placarX = document.querySelector("span #placar-1");
  let placarO = document.querySelector("span #placar-2");

  if (!mensagem || !placarX || !placarO) {
    console.error("Elementos de placar ou mensagem não encontrados");
    return;
  }

  let status = "";

  if (simbolo === "x") {
    const placarAtualX = Number.parseInt(placarX.textContent ?? "0", 10) || 0;
    placarX.textContent = String(placarAtualX + 1);
    localStorage.setItem("placarX", placarX.textContent);
    status = `${simbolo.toUpperCase()} VENCEU`;
  } else if (simbolo === "o") {
    const placarAtualO = Number.parseInt(placarO.textContent ?? "0", 10) || 0;
    placarO.textContent = String(placarAtualO + 1);
    localStorage.setItem("placarO", placarO.textContent);
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

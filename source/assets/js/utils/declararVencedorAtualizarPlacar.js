import trocarBgLimparZerar from "./trocarBgLimparZerar.js";

function declararVencedorAtualizaPlacar(simbolo, mensagem) {
  let textoDaMensagem = document.querySelector("#mensagem p");

  let placarX = document.querySelector("span #placar-1");
  let placarO = document.querySelector("span #placar-2");

  let msg = "";

  if (simbolo === "x") {
    placarX.textContent = parseInt(placarX.textContent) + 1;

    msg = "X VENCEU";

    trocarBgLimparZerar(mensagem);
  } else if (simbolo === "o") {
    placarO.textContent = parseInt(placarO.textContent) + 1;

    msg = "O VENCEU";

    trocarBgLimparZerar(mensagem);
  } else {
    msg = "EMPATE";

    trocarBgLimparZerar(mensagem);
  }

  // Exibindo mensagem

  textoDaMensagem.innerHTML = msg;

  mensagem.classList.remove("esconder");
}

export default declararVencedorAtualizaPlacar;

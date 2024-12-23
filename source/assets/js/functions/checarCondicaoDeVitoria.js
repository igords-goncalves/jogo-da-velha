import declararVencedorAtualizaPlacar from "../utils/declararVencedorAtualizarPlacar.js";

function checarCondicaoDeVitoria() {
  const mensagem = document.querySelector("#mensagem");

  const b1 = document.querySelector("#block-1");
  const b2 = document.querySelector("#block-2");
  const b3 = document.querySelector("#block-3");
  const b4 = document.querySelector("#block-4");
  const b5 = document.querySelector("#block-5");
  const b6 = document.querySelector("#block-6");
  const b7 = document.querySelector("#block-7");
  const b8 = document.querySelector("#block-8");
  const b9 = document.querySelector("#block-9");

  function automacaoCondicaoDeVitoria(
    caixaOcupada1,
    caixaOcupada2,
    caixaOcupada3,
    simbolo
  ) {
    if (
      caixaOcupada1.childNodes.length > 0 &&
      caixaOcupada2.childNodes.length > 0 &&
      caixaOcupada3.childNodes.length > 0
    ) {
      if (
        caixaOcupada1.childNodes[0].className === simbolo &&
        caixaOcupada2.childNodes[0].className === simbolo &&
        caixaOcupada3.childNodes[0].className === simbolo
      ) {
        declararVencedorAtualizaPlacar(simbolo, mensagem);
      }
    }
  }

  // Possibilidades da Horizontal

  automacaoCondicaoDeVitoria(b1, b2, b3, "x");
  automacaoCondicaoDeVitoria(b1, b2, b3, "o");

  automacaoCondicaoDeVitoria(b4, b5, b6, "x");
  automacaoCondicaoDeVitoria(b4, b5, b6, "o");

  automacaoCondicaoDeVitoria(b7, b8, b9, "x");
  automacaoCondicaoDeVitoria(b7, b8, b9, "o");

  // Possibilidades da Vertical

  automacaoCondicaoDeVitoria(b1, b4, b7, "x");
  automacaoCondicaoDeVitoria(b1, b4, b7, "o");

  automacaoCondicaoDeVitoria(b2, b5, b8, "x");
  automacaoCondicaoDeVitoria(b2, b5, b8, "o");

  automacaoCondicaoDeVitoria(b3, b6, b9, "x");
  automacaoCondicaoDeVitoria(b3, b6, b9, "o");

  // Possibilidades da Diagonal

  automacaoCondicaoDeVitoria(b1, b5, b9, "x");
  automacaoCondicaoDeVitoria(b1, b5, b9, "o");

  automacaoCondicaoDeVitoria(b3, b5, b7, "x");
  automacaoCondicaoDeVitoria(b3, b5, b7, "o");
}

export default checarCondicaoDeVitoria;
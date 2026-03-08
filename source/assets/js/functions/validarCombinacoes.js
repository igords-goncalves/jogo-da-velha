import validarVitoria from "./validarVitoria.js";

function validarCombinacoes() {
  const blocos = Array.from({ length: 9 }, (_, i) =>
    document.querySelector(`#block-${i + 1}`)
  );

  const combinacaoDeVitorias = [
    [0, 1, 2], // Horizontal
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // Vertical
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // Diagonal
    [2, 4, 6],
  ];

  const vitoria = ["x", "o"].some((simbolo) =>
    combinacaoDeVitorias.some((combinacao) =>
      validarVitoria(
        blocos[combinacao[0]],
        blocos[combinacao[1]],
        blocos[combinacao[2]],
        simbolo
      )
    )
  );
  return vitoria;
}

export default validarCombinacoes;

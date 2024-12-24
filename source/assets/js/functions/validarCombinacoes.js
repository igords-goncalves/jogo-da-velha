import validarVitoria from "./validarVitoria.js";

//~~> Copilot generate
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

  ["x", "o"].forEach((simbolo) => {
    combinacaoDeVitorias.forEach((combincacao) => {
      const vencedor = validarVitoria(
        blocos[combincacao[0]],
        blocos[combincacao[1]],
        blocos[combincacao[2]],
        simbolo
      );
      return vencedor;
    });
  });
}

export default validarCombinacoes;

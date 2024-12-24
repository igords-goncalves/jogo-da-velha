function validarSimbolo(x, o) {
  let simboloAtual = "";

  let player = 0;
  let ia = 0;

  // Não usei ternário para ficar mais explícito
  if (player === ia) {
    simboloAtual = x;
  } else {
    simboloAtual = o;
  }
  return simboloAtual;
}

export default validarSimbolo;

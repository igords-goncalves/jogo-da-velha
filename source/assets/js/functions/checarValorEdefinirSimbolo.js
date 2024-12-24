function checarValorEdefinirSimbolo(x, o, player, ia) {
  let simboloDaVariavel = "";

  player === ia ? (simboloDaVariavel = x) : (simboloDaVariavel = o);
  return simboloDaVariavel;
}

export default checarValorEdefinirSimbolo;

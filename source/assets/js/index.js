import clicarEinserirSimboloTratado from "./utils/clicarEinserirSimboloTratado.js";
import recomecarPartidaDoZero from "./utils/recomecarPartidaDoZero.js";
const containerDeCaixas = document.querySelectorAll(".box");

const x = document.querySelector(".x");
const o = document.querySelector(".o");
let player = 0;
let ia = 0;

recomecarPartidaDoZero();
clicarEinserirSimboloTratado(containerDeCaixas, x, o, player, ia);

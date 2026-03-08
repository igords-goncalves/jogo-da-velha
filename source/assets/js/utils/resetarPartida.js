import { limparPlacar } from "./carregarPlacar.js";

function resetarPartida() {
  document.querySelector("#recomecar").addEventListener("click", function () {
    limparPlacar();
    location.reload();
  });
}

export default resetarPartida;

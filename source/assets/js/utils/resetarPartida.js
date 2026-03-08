import { limparPlacar } from "./carregarPlacar.js";

function resetarPartida() {
  const btnRecomecar = document.querySelector("#recomecar");
  
  if (!btnRecomecar) return;

  btnRecomecar.addEventListener("click", function () {
    limparPlacar();
    location.reload();
  });
}

export default resetarPartida;

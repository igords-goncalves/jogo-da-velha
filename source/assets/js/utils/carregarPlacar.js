export function limparPlacar() {
  localStorage.removeItem("placarX");
  localStorage.removeItem("placarO");
}

function carregarPlacar() {
  const placarX = document.querySelector("span #placar-1");
  const placarO = document.querySelector("span #placar-2");

  if (localStorage.getItem("placarX")) {
    placarX.textContent = localStorage.getItem("placarX");
  }

  if (localStorage.getItem("placarO")) {
    placarO.textContent = localStorage.getItem("placarO");
  }
}

export default carregarPlacar;
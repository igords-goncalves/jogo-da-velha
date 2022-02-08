const x = document.querySelector(".x")
const o = document.querySelector(".o")
const quadro = document.querySelector('#quadro') //! Capturei os filhos de quadro e coloquei numa nodeList
const boxes = quadro.childNodes
const botoes = document.querySelectorAll("#botoes")
const mensagem = document.querySelector("#mensagem")
const textoMenssagem = document.querySelector("#mensagem p")

// Contador de jogadas

let player1 = 0
let player2 = 0

function clicarEjogar(elements) {

    elements.forEach(element => {
        element.addEventListener('click', () => {
            let elemento = checarElemento(player1, player2)
            jogada(element, elemento)
        })
    })
}
clicarEjogar(boxes)

 // Verifica se um child foi adicionado e computa jogada

function jogada(node, player) {
    if (node.childNodes.length === 0) {

        let cloneElemento = player.cloneNode(true)
        node.appendChild(cloneElemento)

        player1 === player2 ? player1++ : player2++ // Criando a diferenciação das jogadas
    }
}

// Evento que acontece ao clicar no quadro

function checarElemento(player1, player2) {
    let elemento

    if (player1 === player2) {
        elemento = x
    } else {
        elemento = o
    }
    return elemento
}
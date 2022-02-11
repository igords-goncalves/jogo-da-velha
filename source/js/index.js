const x = document.querySelector(".x")
const o = document.querySelector(".o")
const boxes = document.querySelectorAll('.box') // Nodelist estática []
const botoes = document.querySelectorAll("#botoes")
const mensagem = document.querySelector("#mensagem")
const textoMenssagem = document.querySelector("#mensagem p")

// Contador de jogadas

let player1 = 0
let player2 = 0

//%* Evento click

function clicarEjogar(elements) {

    elements.forEach(element => {
        element.addEventListener('click', () => {
            let elemento = checarElemento(player1, player2)
            jogada(element, elemento)
        })
    })
}
clicarEjogar(boxes)

//%* Verifica se um child foi adicionado e computa jogada

function jogada(node, player) {
    if (node.childNodes.length === 0) {

        let cloneElemento = player.cloneNode(true)
        node.appendChild(cloneElemento)

        player1 === player2 ? player1++ : player2++ // Criando a diferenciação das jogadas
    }
}

//%* Evento que acontece ao clicar no quadro

function checarElemento(player1, player2) {
    let elemento

    if (player1 === player2) {
        elemento = x
    } else {
        elemento = o
    }
    return elemento
}

//%* Logica da condicão de vitória

function checarCondicaoDeVitoria() {

    let b1 = document.querySelector('#block-1')
    let b2 = document.querySelector('#block-2')
    let b3 = document.querySelector('#block-3')

    console.log(b1.childNodes)
    console.log(b2.childNodes)
    console.log(b3.childNodes)

    // Horizontal linha 1 2 3

    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {

        if (b1.childNodes[0].className === "x" 
        && b2.childNodes[0].className=== "x" 
        && b3.childNodes[0].className === "x") {
            
            console.log('x venceu')

        }
    }
    // Vertical linha 1 2 3

    // Diagonal Esq

    // Diagonal Dir
}
checarCondicaoDeVitoria()
const x = document.querySelector(".x")
const o = document.querySelector(".o")

const boxes = document.querySelectorAll(".box")
const botoes = document.querySelector("#botoes button")

const mensagem = document.querySelector("#mensagem")
const textoMenssagem = document.querySelector("#mensagem p")

// Contador de jogadas

let player1 = 0
let player2 = 0

// Adcionando o evento de click quando clicar no quadro

for (let i = 0; i < boxes.length; i++) {

    boxes[i].addEventListener('click', () => {

        let elemento

        if (player1 == player2) {
            elemento = x
        } else {
            elemento = o
        }

        let cloneElemento = elemento.cloneNode(true)

        console.log(cloneElemento) 

        //? Como fazer ele aparecer em acada elemento do evento, que são as boxes

        //...
    })
}
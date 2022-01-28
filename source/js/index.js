const x = document.querySelector(".x")
const o = document.querySelector(".o")

const boxes = document.querySelectorAll(".box")
const botoes = document.querySelectorAll("#botoes button")

const mensagem = document.querySelector("#mensagem")
const textoMenssagem = document.querySelector("#mensagem p")

//&* TESTES

console.log(boxes) // Teste de Captura

console.log(boxes.length) // nodeList test

console.log(boxes[0], boxes[3]) // nodeList elements

const bgQuadro = document.querySelector('#bg-quadro')
const quadro = document.querySelector('#quadro')

const pai = bgQuadro.parentNode // Pai main
const filho = quadro.parentNode // Pai bgQuadro
const neto = boxes.parentNode // undefined

boxes.forEach(element => {
    console.log('Teste ' + boxes[element])
    // console.log(boxes[element] === undefined)
    // Os elementos de "boxes" são undefined
})

console.log(pai)
console.log(filho)
console.log(neto === undefined)

//&* FIM TESTES

// Contador de jogadas

let player1 = 0
let player2 = 0

// Adcionando o evento de click quando clicar no quadro

for (let i = 0; i < boxes.length; i++) {

    boxes[i].addEventListener('click', () => {

        console.log('Capturado ...') //# teste

        let elemento

        if (player1 === player2) {
            elemento = x
        } else {
            elemento = o
        }

        let cloneElemento = elemento.cloneNode(true)

        console.log(cloneElemento) //# teste

        boxes.appendChild(cloneElemento)
    })
}

/**
 * Tudo funciona corretamente até esse trecho do código, 
 * a parte de captura funciona perfeitamente
 * e o laço de repetição aliado aos eventos também.
 * 
 * O problema aparece quando vamos tratar os elementos
 * da nodeList como nodes, adicionando nodeChild a eles,
 * essa adição não acontece pois estão undefined como nodes
 */
const x = document.querySelector(".x")
const o = document.querySelector(".o")

const boxes = document.querySelectorAll("#quadro")

const botoes = document.querySelectorAll("#botoes")

const mensagem = document.querySelector("#mensagem")
const textoMenssagem = document.querySelector("#mensagem p")

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

        console.log('Testando ' + cloneElemento) //# teste

        console.log(boxes.appendChild(cloneElemento))
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
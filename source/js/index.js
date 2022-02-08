const x = document.querySelector(".x")
const o = document.querySelector(".o")

// const boxes = document.querySelectorAll(".box")

const quadro = document.querySelector('#quadro') //# teste
 
const celula = quadro.childNodes //# teste



// const boxes = document.querySelector("#block-1") //# teste

const botoes = document.querySelectorAll("#botoes")

const mensagem = document.querySelector("#mensagem")
const textoMenssagem = document.querySelector("#mensagem p")

// Contador de jogadas

let player1 = 0
let player2 = 0

console.log(celula) //NodeList

// console.log(boxes) //NodeList 

// Adcionando o evento de click quando clicar no quadro

celula.forEach(element => {

    element.addEventListener('click', () => {

        let elemento

        if (player1 === player2) {
            elemento = x
        } else {
            elemento = o
        }

        let cloneElemento = elemento.cloneNode(true)

        console.log('Testando ' + cloneElemento) //# teste

        element.appendChild(cloneElemento)
    })
})

// for (let i = 0; i < celula.length; i++) {

//     celula[i].addEventListener('click', () => {

//         let elemento

//         if (player1 === player2) {
//             elemento = x
//         } else {
//             elemento = o
//         }

//         let cloneElemento = elemento.cloneNode(true)

//         console.log('Testando ' + cloneElemento) //# teste

//         console.log(celula.appendChild(cloneElemento))
//     })
// }

//&* Teste

// boxes.addEventListener('click', () => {

//     console.log('Capturado ...') //# teste

//     let elemento

//     if (player1 === player2) {
//         elemento = x
//     } else {
//         elemento = o
//     }

//     let cloneElemento = elemento.cloneNode(true)

//     console.log('Testando ' + cloneElemento) //# teste

//     console.log(boxes.appendChild(cloneElemento))
// })

/**
 * Tudo funciona corretamente até esse trecho do código,
 * a parte de captura funciona perfeitamente
 * e o laço de repetição aliado aos eventos também.
 * 
 * O problema aparece quando vamos tratar os elementos
 * da nodeList como nodes, adicionando nodeChild a eles,
 * essa adição não acontece pois estão undefined como nodes
 * 
 *! O problema está na NodeList
 */
//&* Script de tests


        const box1 = document.querySelector('#block-1')
        const box2 = document.querySelector('#block-2')
        const box3 = document.querySelector('#block-3')
        const box4 = document.querySelector('#block-4')
        const box5 = document.querySelector('#block-5')
        const box6 = document.querySelector('#block-6')
        const box7 = document.querySelector('#block-7')
        const box8 = document.querySelector('#block-8')
        const box9 = document.querySelector('#block-9')

        
        const boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9]

        console.log(boxes) // Teste de Captura

        console.log(boxes.length) // nodeList test

        console.log(boxes[0], boxes[3]) // nodeList elements

        const bgQuadro = document.querySelector('#bg-quadro')
        const quadro = document.querySelector('#quadro')


        const pai = bgQuadro.parentNode // Pai tag main
        const filho = quadro.parentNode // Pai div id bgQuadro
        const neto = boxes.parentNode // undefined --> Era p/ ser div id quadro
        const netoTeste = box1.parentNode // Pai div id block-5

        boxes.forEach(element => {
            console.log('Teste ' + boxes[element])
            // console.log(boxes[element] === undefined)
            // Os elementos de "boxes" são undefined
        })

        console.log(pai)
        console.log(filho)
        console.log(neto === undefined)
        console.log(netoTeste)

        console.log(box1.nodeName)

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
 *! O problema estava na forma de percorrer o nodeList?
 */
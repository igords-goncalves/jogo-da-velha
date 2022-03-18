const x = document.querySelector(".x")
const o = document.querySelector(".o")
const boxes = document.querySelectorAll('.box') // Nodelist estática []
const botoes = document.querySelectorAll("#botoes")
const mensagem = document.querySelector("#mensagem")
let textoMensagem = document.querySelector("#mensagem p")

// Contador de jogadas

let player1 = 0
let player2 = 0

// Evento click

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

        let elementoClone = player.cloneNode(true)
        node.appendChild(elementoClone)

        player1 === player2 ? player1++ : player2++ // Criando a diferenciação das jogadas
    }
    checarCondicaoDeVitoria()
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

// Mapeamento da condicão de vitória

function checarCondicaoDeVitoria() {

    let b1 = document.querySelector('#block-1')
    let b2 = document.querySelector('#block-2')
    let b3 = document.querySelector('#block-3')
    let b4 = document.querySelector('#block-4')
    let b5 = document.querySelector('#block-5')
    let b6 = document.querySelector('#block-6')
    let b7 = document.querySelector('#block-7')
    let b8 = document.querySelector('#block-8')
    let b9 = document.querySelector('#block-9')

        // Função pensada evitando repetições quanto a lógica de vitória

        function condicaoDeVitoria(node1, node2, node3, type) {
            if(
                node1.childNodes.length > 0 
                && node2.childNodes.length > 0 
                && node3.childNodes.length > 0
            ) {
                if (
                    node1.childNodes[0].className === type &&
                    node2.childNodes[0].className === type &&
                    node3.childNodes[0].className === type
                    ) {
                    declararVencedor(type)
                }
            }
        }


    let empate = 0;
    for (let index = 0; index < boxes.length; index++) {
        if (boxes[index].childNodes[0] != undefined) {
            empate ++
        }        
    }
    if(empate === 9) {
        declararVencedor()
    }

    // Horizontal

    condicaoDeVitoria(b1, b2, b3, 'x')
    condicaoDeVitoria(b1, b2, b3, 'o')

    condicaoDeVitoria(b4, b5, b6, 'x')
    condicaoDeVitoria(b4, b5, b6, 'o')

    condicaoDeVitoria(b7, b8, b9, 'x')
    condicaoDeVitoria(b7, b8, b9, 'o')

    // Vertical

    condicaoDeVitoria(b1, b4, b7, 'x')
    condicaoDeVitoria(b1, b4, b7, 'o')

    condicaoDeVitoria(b2, b5, b8, 'x')
    condicaoDeVitoria(b2, b5, b8, 'o')

    condicaoDeVitoria(b3, b6, b9, 'x')
    condicaoDeVitoria(b3, b6, b9, 'o')

    // Diagonal

    condicaoDeVitoria(b1, b5, b9, 'x')
    condicaoDeVitoria(b1, b5, b9, 'o')

    condicaoDeVitoria(b3, b5, b7, 'x')
    condicaoDeVitoria(b3, b5, b7, 'o')
}

// Limpa o jogo, declara o vencedor e atualiza o placar

function declararVencedor(vencedor) {
    let placarX = document.querySelector('span #score-1')
    let placarO = document.querySelector('span #score-2')

    let msg = '';

    if (vencedor === 'x') {
        placarX.textContent = parseInt(placarX.textContent) + 1 // Transfere o valor de string para int
        msg = "X VENCEU"
        trocarBgLimparZerar()
    } else if(vencedor === 'o') {
        placarO.textContent = parseInt(placarO.textContent) + 1
        msg = "O VENCEU"
        trocarBgLimparZerar()
    } else {
        msg = 'EMPATE'
        trocarBgLimparZerar()
    }

    // Exibindo mensagem

    textoMensagem.innerHTML = msg
    mensagem.classList.remove('esconder')

    function trocarBgLimparZerar() {

        // 2 variáveis porque usei 2 boards se para formar o retângulo do tamanho que queria

        const bgQuadro = document.querySelector("#bg-quadro")
        const quadro = document.querySelector("#quadro")

        bgQuadro.style.filter = 'blur(8px)'
        quadro.style.filer = 'blur(5px)'
        bgQuadro.style.transition = '0.3s'
        quadro.style.transition = '0.2s'

        function esconderBg(variavel, elemento) {
            bgQuadro.style.removeProperty(elemento)
        }

        // Escondendo a mensagem após a vitória
    
        const esconder = (elemento) => elemento.classList.add("esconder")

        const limpar = () => {
            const removerJogadas = document.querySelectorAll(".box div")

            for (let i = 0; i < removerJogadas.length; i++) {
                removerJogadas[i].parentNode.removeChild(removerJogadas[i])
            }
        }
    
        setTimeout(() => {
            esconder(mensagem)
            esconderBg(bgQuadro, 'filter')
            esconderBg(quadro, 'filter')
            limpar()
        }, 1500)

    }
}
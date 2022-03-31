// Variáveis úteis para o programa

const x = document.querySelector(".x") // Simbolo
const o = document.querySelector(".o") // Simbolo

const containerDeCaixas = document.querySelectorAll('.box') // Nodelist estática []
const botoes = document.querySelectorAll("#botoes") // Nodelist estática []

const mensagem = document.querySelector("#mensagem") //Div que tem o texto
let textoDaMensagem = document.querySelector("#mensagem p") // O texto propriamente dito

let bolinha

// Contador de jogadas

let player1 = 0
let ia = 0

// Regra de negócio ==================================================================================

function clicarEinserirSimboloTratado(containerDeCaixas) {

    containerDeCaixas.forEach(caixa => { // Dentro do containerDeCaixas para cada caixa adicione...

        caixa.addEventListener('click', () => { // ... e quando for clicado faça duas coisas:

            console.log(caixa.id) //# mostre quem é a caixa clicada e ...

            verificaJogadas(caixa, checarValorEdefinirSimbolo()) // Higher order function
        })
    })
}
clicarEinserirSimboloTratado(containerDeCaixas) 
// O tratamento acontece em verificaJogadas, checarValorEdefinirSimbolo

function verificaJogadas(caixa, simbolo) {

    if (caixa.childNodes.length === 0) { // Se a caixa estiver vazia sem childNodes filhos faça ...

        caixa.appendChild(simbolo.cloneNode(true)) 
        // Inserindo o clone filho do símbolo dentro da caixa quebrando a condicional

        player1 === ia ? player1++ : ia++ // Da todo suporte para condicinal de checarValorEdefinirSimbolo()

        console.log(player1) //# vale 1
    } else {
        
        alert('Saiu da regra, escolha uma casa que vale 0, essa já está cheia!')
    }

    // checarCondicaoDeVitoria()
}

function checarValorEdefinirSimbolo() {

    let simboloDaVariavel = ''
    // Vai receber uma variável que contém um simbolo com base na comparação de player1 e ia

    player1 === ia ? simboloDaVariavel = x : simboloDaVariavel = o
    // Quando os valores forem iguais inserir "x", quando forem diferentes inserir "o"

    console.log(ia) //# vale 0

    return simboloDaVariavel
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
    for (let index = 0; index < containerDeCaixas.length; index++) {
        if (containerDeCaixas[index].childNodes[0] != undefined) {
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

    textoDaMensagem.innerHTML = msg
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
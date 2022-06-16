// Variáveis úteis para o programa

const x = document.querySelector(".x") // Simbolo
const o = document.querySelector(".o") // Simbolo

const containerDeCaixas = document.querySelectorAll('.box') // Retorna Nodelist estática[]
const botoes = document.querySelectorAll("#botoes") // Retorna Nodelist estática[]

const mensagem = document.querySelector("#mensagem") //Div que envolve o texto
let textoDaMensagem = document.querySelector("#mensagem p") // O texto propriamente dito

 // Recomeca a partida

function recomecarPartidaDoZero() {
    document.querySelector("#recomecar").addEventListener("click", function() {
        location.reload()
    })
}
recomecarPartidaDoZero()


// Contador de jogadas --> Entender a lógica de existência dos jogadores
// A cada jogada feita, player e ia assumirão um valor de acordo com o evento
// Quando os valores forem iguais inserir "x", quando forem diferentes inserir "o"

let player = 0
let ia = 0

// Regra de negócio ==================================================================================

function clicarEinserirSimboloTratado(containerDeCaixas) {

    containerDeCaixas.forEach(caixa => { // Dentro do containerDeCaixas para cada caixa adicione...
        caixa.addEventListener('click', () => { // ... e quando o evento acontecer faça 2 coisas:

            setTimeout(() => {
                inteligenciaArtificial(caixa, checarValorEdefinirSimbolo())
            }, 1000)

            verificaJogadas(caixa, checarValorEdefinirSimbolo()) // Higher order function



            console.log(caixa.id) //# mostre o id de quem é a caixa clicada e chame a função abaixo

            console.log('Jogada player nº ' + player) //# Jogada

            console.log('Jogada ai nº '+ ia) //# Jogada
        })
    })
    
}
clicarEinserirSimboloTratado(containerDeCaixas) 
// ou seja o simbolo só será inserido depois de uma checagem
// O tratamento acontece em verificaJogadas, checarValorEdefinirSimbolo

function verificaJogadas(caixa, simboloChecado) { // Caixa é um elemento dentro de containerDeCaixas

    if (caixa.childNodes.length === 0 && caixa.childNodes.length < 1) { 
        // Se a caixa estiver vazia sem childNodes(filhos) faça ...

        caixa.appendChild(simboloChecado.cloneNode(true))
        //* Clonar o elemento nesse caso é ralizar cópias do mesmo elemento
        //* Pois se o elemento não for clonado ele somenete irá de um lugar para o outro
        //* Inserindo o clone filho do símbolo dentro da caixa quebrando a condicional
        //* Se o nó não for mais igual a zero ele vira falso e cai no else
        //* Simbolo é o valor checado e definido na função checarValorEdefinirSimbolo()

        player === ia ? player++ : ia++ // Da todo suporte para condicinal de checarValorEdefinirSimbolo()

        console.log(player, ia) //# teste Mostra o valor atual entre os players antes de receber o simbolo
    }

    checarCondicaoDeVitoria()
}

function checarValorEdefinirSimbolo() {

    let simboloDaVariavel = ''
    // Vai receber uma variável que contém um simbolo com base na comparação de player e ia

    player === ia ? simboloDaVariavel = x : simboloDaVariavel = o
    // Quando os valores forem iguais inserir "x", quando forem diferentes inserir "o"

    return simboloDaVariavel
}

function checarCondicaoDeVitoria() { // Só é possível checar a vitória depois de verificar as jogadas

    const b1 = document.querySelector('#block-1')
    const b2 = document.querySelector('#block-2')
    const b3 = document.querySelector('#block-3')
    const b4 = document.querySelector('#block-4')
    const b5 = document.querySelector('#block-5')
    const b6 = document.querySelector('#block-6')
    const b7 = document.querySelector('#block-7')
    const b8 = document.querySelector('#block-8')
    const b9 = document.querySelector('#block-9')

    // Função pensada evitando repetições quanto a lógica de vitória

    function automacaoCondicaoDeVitoria(caixaOcupada1, caixaOcupada2, caixaOcupada3, simbolo) {
        if( // Se a caixas selecionadas não estiverem vazias ...
            caixaOcupada1.childNodes.length > 0 && 
            caixaOcupada2.childNodes.length > 0 && 
            caixaOcupada3.childNodes.length > 0
         ) {
            if ( // ... e se a caixa ocupada tem um filho chamado "x" ou "o" então chame a função ...
                caixaOcupada1.childNodes[0].className === simbolo &&
                caixaOcupada2.childNodes[0].className === simbolo &&
                caixaOcupada3.childNodes[0].className === simbolo
                ) {
                    declararVencedorAtualizaPlacar(simbolo)
                    
            //# Na func verificaJogadas deixamos claro que as caixas só podem receber 1 filho, que será o [0]
            }
        }
    }

    // Possibilidades da Horizontal

    automacaoCondicaoDeVitoria(b1, b2, b3, 'x')
    automacaoCondicaoDeVitoria(b1, b2, b3, 'o')

    automacaoCondicaoDeVitoria(b4, b5, b6, 'x')
    automacaoCondicaoDeVitoria(b4, b5, b6, 'o')

    automacaoCondicaoDeVitoria(b7, b8, b9, 'x')
    automacaoCondicaoDeVitoria(b7, b8, b9, 'o')

    // Possibilidades da Vertical

    automacaoCondicaoDeVitoria(b1, b4, b7, 'x')
    automacaoCondicaoDeVitoria(b1, b4, b7, 'o')

    automacaoCondicaoDeVitoria(b2, b5, b8, 'x')
    automacaoCondicaoDeVitoria(b2, b5, b8, 'o')

    automacaoCondicaoDeVitoria(b3, b6, b9, 'x')
    automacaoCondicaoDeVitoria(b3, b6, b9, 'o')

    // Possibilidades da Diagonal

    automacaoCondicaoDeVitoria(b1, b5, b9, 'x')
    automacaoCondicaoDeVitoria(b1, b5, b9, 'o')

    automacaoCondicaoDeVitoria(b3, b5, b7, 'x')
    automacaoCondicaoDeVitoria(b3, b5, b7, 'o')
}


function checarCondicaoDeEmpate() {
    let empate = 0
    for (let index = 0; index < containerDeCaixas.length; index++) {
        if (containerDeCaixas[index].childNodes[0] !== undefined) { // Se a caixa não estiver vazia
            empate ++
        }
    }
    if(empate === 9) {
        declararVencedorAtualizaPlacar()
    }
}

// As funcionalidades, a parte de nível e escolha do simbolo será feita nessa parte


function declararVencedorAtualizaPlacar(simbolo) {
    
    let placarX = document.querySelector('span #placar-1')
    
    let placarO = document.querySelector('span #placar-2')

    let msg = ''

    if (simbolo === 'x') {

        placarX.textContent = parseInt(placarX.textContent) + 1 // Valor de string para int
        
        msg = "X VENCEU"

        trocarBgLimparZerar()

    } else if(simbolo === 'o') {
       
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
        player = 0 // Dessa maneira X sempre começa jogando primeiro
        ia = 0

        let bgQuadro = document.querySelector("#bg-quadro")
        bgQuadro.style.filter = 'blur(8px)'
        bgQuadro.style.transition = '0.3s'

        const esconderBg = (variavel, elemento) => bgQuadro.style.removeProperty(elemento)
        
        const esconderMsg = elemento => elemento.classList.add("esconder")

        const limpar = () => {
            const removerJogadas = document.querySelectorAll(".box div")

            for (let i = 0; i < removerJogadas.length; i++) {
                removerJogadas[i].parentNode.removeChild(removerJogadas[i])
            }
        }
    
        setTimeout(() => {
            esconderMsg(mensagem)
            esconderBg(bgQuadro, 'filter')
            limpar()
        }, 1500)
    }
}

function inteligenciaArtificial(caixa, simbolo) {

    let contador = 0

    // Criando o jogador aleatório de acordo com o a quantidade casas para executar jogadas

    for (let i = 0; 1 < containerDeCaixas.length; i++) {
        
        let randomNumbers = Math.floor(Math.random() * 5)
        
        if (containerDeCaixas[i].childNodes[0] === undefined) {
            if (randomNumbers <= 1) {
                containerDeCaixas[i].appendChild( simbolo.cloneNode(true))
                contador++;
                break;
            }
        } else { // Checa quantas estão preenchidas
            caixa++
        }
    }

    if (contador === 0 && caixa <= 9) {
        inteligenciaArtificial()
    }
}
// Lembre-se valores iguais insere x, valores diferentes insere 0
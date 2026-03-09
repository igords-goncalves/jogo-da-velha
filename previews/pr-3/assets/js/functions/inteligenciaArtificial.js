import validarCombinacoes from "./validarCombinacoes.js";
import validarEmpate from "./validarEmpate.js";
import { gameState } from "../store/gameState.js";

function inteligenciaArtificial(bloco, simbolo, blocos) {
  const mensagem = document.querySelector("#mensagem");
  if (!mensagem.classList.contains("esconder")) return;

  const aiSymbolClass = simbolo.className; // "x" or "o"
  const playerSymbolClass = aiSymbolClass === "x" ? "o" : "x";

  // Helper: Get board state as array [0..8] -> "x", "o", or null
  function getBoardState() {
    return Array.from(blocos).map((b) => {
      if (b.childNodes.length > 0) {
        return b.childNodes[0].className;
      }
      return null;
    });
  }

  // Helper: Check winner on board array
  function checkWin(board, player) {
    const wins = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    return wins.some(combo => 
      board[combo[0]] === player && 
      board[combo[1]] === player && 
      board[combo[2]] === player
    );
  }

  // Strategy: Random
  function makeRandomMove(availableIndices) {
    if (availableIndices.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * availableIndices.length);
    return availableIndices[randomIndex];
  }

  // Strategy: Win or Block, else Random
  function makeMediumMove(board, availableIndices) {
    // 1. Try to win
    for (let index of availableIndices) {
      const tempBoard = [...board];
      tempBoard[index] = aiSymbolClass;
      if (checkWin(tempBoard, aiSymbolClass)) return index;
    }
    
    // 2. Block opponent
    for (let index of availableIndices) {
      const tempBoard = [...board];
      tempBoard[index] = playerSymbolClass;
      if (checkWin(tempBoard, playerSymbolClass)) return index;
    }

    // 3. Random
    return makeRandomMove(availableIndices);
  }

  // Strategy: Minimax (Unbeatable)
  function makeHardMove(board, availableIndices) {
    // Optimization: If empty board, take center or corner to save recursion
    if (availableIndices.length === 9) return 4; // Center
    if (availableIndices.length === 8 && board[4] === null) return 4;

    const huPlayer = playerSymbolClass;
    const aiPlayer = aiSymbolClass;

    function minimax(currBoard, player) {
      const avail = currBoard.map((v, i) => v === null ? i : null).filter(v => v !== null);

      if (checkWin(currBoard, huPlayer)) return { score: -10 };
      if (checkWin(currBoard, aiPlayer)) return { score: 10 };
      if (avail.length === 0) return { score: 0 };

      const moves = [];

      for (let i = 0; i < avail.length; i++) {
        const move = {};
        move.index = avail[i];
        currBoard[avail[i]] = player;

        if (player === aiPlayer) {
          const result = minimax(currBoard, huPlayer);
          move.score = result.score;
        } else {
          const result = minimax(currBoard, aiPlayer);
          move.score = result.score;
        }

        currBoard[avail[i]] = null;
        moves.push(move);
      }

      let bestMove;
      if (player === aiPlayer) {
        let bestScore = -Infinity;
        for (let i = 0; i < moves.length; i++) {
          if (moves[i].score > bestScore) {
            bestScore = moves[i].score;
            bestMove = i;
          }
        }
      } else {
        let bestScore = Infinity;
        for (let i = 0; i < moves.length; i++) {
          if (moves[i].score < bestScore) {
            bestScore = moves[i].score;
            bestMove = i;
          }
        }
      }
      return moves[bestMove];
    }

    const bestMoveObj = minimax(board, aiPlayer);
    return bestMoveObj.index;
  }


  // Execution
  const board = getBoardState();
  const availableIndices = board.map((v, i) => v === null ? i : null).filter(v => v !== null);

  if (availableIndices.length > 0) {
    let chosenIndex;

    switch (gameState.difficulty) {
      case "medio":
        chosenIndex = makeMediumMove(board, availableIndices);
        break;
      case "dificil":
        chosenIndex = makeHardMove(board, availableIndices);
        break;
      case "facil":
      default:
        chosenIndex = makeRandomMove(availableIndices);
        break;
    }
    
    // Validate chosenIndex is valid
    if (chosenIndex !== null && chosenIndex !== undefined) {
      blocos[chosenIndex].appendChild(simbolo.cloneNode(true));
      if (!validarCombinacoes()) {
        validarEmpate(blocos);
      }
    }
  }
}

export default inteligenciaArtificial;

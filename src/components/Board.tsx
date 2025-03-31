import { Key } from "react";
import { useState } from "react";

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function getWinner(squares: Array<string | null>) {
  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], winningCombo: combination };
    }
  }
  return null;
}

interface BoardProps {
  player1: string;
  player2: string;
}

export default function Board({ player1, player2 }: BoardProps) {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [winningCombo, setWinningCombo] = useState<number[] | null>(null);

  const currentBoard = history[currentMove];
  const isPlayer1Turn = currentMove % 2 === 0;

  function handleSquareClick(index: number) {
    if (currentBoard[index] || winningCombo) return;

    const newBoard = [...currentBoard];
    newBoard[index] = isPlayer1Turn ? player1 : player2;

    const updatedHistory = [...history.slice(0, currentMove + 1), newBoard];
    setHistory(updatedHistory);
    setCurrentMove(updatedHistory.length - 1);

    const result = getWinner(newBoard);
    if (result) {
      setWinningCombo(result.winningCombo);
    } else {
      setWinningCombo(null);
    }
  }

  function getGameStatus() {
    const result = getWinner(currentBoard);
    if (result) {
      return (
        <div className="flex items-center justify-center gap-3 text-2xl font-bold animate-bounce">
          Winner:
          <img
            src={`/${result.winner}.png`}
            alt={result.winner}
            className="h-12 w-12 md:h-16 md:w-16"
          />
        </div>
      );
    }

    if (currentBoard.every((square: null) => square !== null)) return "Draw!";

    const nextPlayerImage = isPlayer1Turn ? player1 : player2;

    return (
      <div className="flex items-center justify-center gap-3 text-xl text-white">
        Next player:
        <img
          src={`/${nextPlayerImage}.png`}
          alt={nextPlayerImage}
          className="h-12 w-12 md:h-16 md:w-16"
        />
      </div>
    );
  }

  function resetGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setWinningCombo(null);
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-[400px] mx-5">
        <h1 className="text-5xl font-semibold text-white mb-8 text-center font-audiowide">
          Tic Tac Toe
        </h1>

        <div
          className={`text-center mb-6 ${
            winningCombo
              ? "text-2xl font-bold text-white animate-bounce"
              : "text-xl text-white"
          }`}
        >
          {getGameStatus()}
        </div>

        <div className="grid grid-cols-3 gap-1 rounded-xl overflow-hidden mb-6">
          {currentBoard.map(
            (square: string | undefined, index: Key | null | undefined) => (
              <button
                key={index}
                onClick={() => handleSquareClick(index)}
                className="h-32 w-full bg-gray-800 rounded-md text-6xl font-light transition-colors duration-200 hover:bg-gray-700 flex items-center justify-center"
              >
                {square && (
                  <img
                    src={`/${square}.png`}
                    alt={square}
                    className={`h-20 w-20 object-contain ${
                      winningCombo?.includes(index) ? "animate-bounce" : ""
                    }`}
                  />
                )}
              </button>
            )
          )}
        </div>

        {/* Move History */}
        <div className="mb-4 flex flex-wrap gap-2 justify-center">
          {history.map((_: any, move: Key | null | undefined) => (
            <button
              key={move}
              onClick={() => {
                setCurrentMove(move);
                setWinningCombo(null);
              }}
              className="text-sm text-white border px-2 py-1 rounded hover:bg-white hover:text-black transition"
            >
              {move === 0 ? "Go to start" : `Go to move #${move}`}
            </button>
          ))}
        </div>

        <button
          className="w-full py-3 text-lg text-white border rounded-xl hover:bg-gray-50 hover:text-gray-800 transition-colors duration-200"
          onClick={resetGame}
        >
          New Game
        </button>
      </div>
    </div>
  );
}

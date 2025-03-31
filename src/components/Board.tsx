import { useState } from "react";
import { Button } from "./button";
import { Key } from "react";

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
        <div className="flex items-center justify-center gap-3 text-2xl font-audiowide animate-bounce">
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
      <div className="flex items-center justify-center gap-3 text-xl text-black font-audiowide">
        Next player:
        <img
          src={`/${nextPlayerImage}.png`}
          alt={nextPlayerImage}
          className="h-16 w-16 md:h-25 md:w-25"
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
        <h1 className="text-5xl font-audiowide text-black mb-8 text-center">
          Tic Tac Toe
        </h1>

        <div className="text-center mb-6">{getGameStatus()}</div>

        <div className="grid grid-cols-3 gap-1 rounded-xl overflow-hidden mb-6">
          {currentBoard.map(
            (square: string | undefined, index: Key | null | undefined) => (
              <button
                type="button"
                key={index}
                onClick={() => handleSquareClick(index)}
                className="h-32 w-full bg-[#ABB4F7] rounded-md flex items-center justify-center transition duration-200 hover:bg-[#b9c0f5]"
              >
                {square && (
                  <img
                    src={`/${square}.png`}
                    alt={square}
                    className={`h-30 w-30 object-contain ${
                      winningCombo?.includes(index) ? "animate-bounce" : ""
                    }`}
                  />
                )}
              </button>
            )
          )}
        </div>

        {/* Move History */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {history.map((_, move) => (
            <button
              key={move}
              onClick={() => {
                setCurrentMove(move);
                setWinningCombo(null);
              }}
              className="text-sm px-2 py-1 border rounded hover:bg-white hover:text-black text-black"
            >
              {move === 0 ? "Go to start" : `Go to move #${move}`}
            </button>
          ))}
        </div>

        <Button
          variant="outline"
          className="bg-[#abe4f7] font-audiowide w-full py-3 text-lg text-black border rounded-xl transition duration-200"
          onClick={resetGame}
        >
          New Game
        </Button>
      </div>
    </div>
  );
}

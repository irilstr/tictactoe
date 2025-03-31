import { useState } from "react";
import { Button } from "./button";

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
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayer1Turn, setIsPlayer1Turn] = useState(true);
  const [winningCombo, setWinningCombo] = useState<number[] | null>(null);

  function handleSquareClick(index: number) {
    if (board[index] || winningCombo) {
      return;
    }

    const updatedBoard = [...board];
    updatedBoard[index] = isPlayer1Turn ? player1 : player2;
    setBoard(updatedBoard);
    setIsPlayer1Turn(!isPlayer1Turn);

    const result = getWinner(updatedBoard);
    if (result) {
      setWinningCombo(result.winningCombo);
    }
  }

  function getGameStatus() {
    const result = getWinner(board);
    if (result) {
      return (
        <div className="flex items-center  justify-center gap-3 text-2xl font-audiowide">
          Winner:
          <img
            src={`/${result.winner}.png`}
            alt={result.winner}
            className="h-12 w-12 md:h-16 md:w-16"
          />
        </div>
      );
    }

    if (board.every((square) => square !== null)) return "Draw!";

    const nextPlayerImage = isPlayer1Turn ? player1 : player2;

    return (
      <div className="flex items-center justify-center gap-3 text-xl text-black font-audiowide">
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
    setBoard(Array(9).fill(null));
    setIsPlayer1Turn(true);
    setWinningCombo(null); // Clear winning combo
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-[400px] mx-5">
        <h1 className="text-5xl font-audiowide text-black mb-8 text-center">
          Tic Tac Toe
        </h1>

        <div
          className={`text-center mb-6 ${
            winningCombo
              ? "text-2xl font-bold text-black bounce"
              : "text-xl text-black"
          }`}
        >
          {getGameStatus()}
        </div>

        <div className="grid grid-cols-3 gap-1 rounded-xl overflow-hidden mb-6">
          {board.map((square, index) => (
            <button type="button"
              key={index}
              onClick={() => handleSquareClick(index)}
              className="h-32 w-full bg-[#ABB4F7] rounded-md text-6xl font-light transition-colors duration-200 hover:bg-[#b9c0f5] flex items-center justify-center"
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
          ))}
        </div>

        <Button
        variant="outline"
          className="bg-[#abe4f7] font-audiowide w-full py-3 text-lg text-black border rounded-xl  transition-colors duration-200"
          onClick={resetGame}
        >
          New Game
        </Button>
      </div>
    </div>
  );
}

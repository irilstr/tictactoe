import { useState } from "react";
import velgKarakter from "./Choose_player";

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
      return squares[a];
    }
  }
  return null;
}

export default function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayer1Turn, setIsPlayer1Turn] = useState(true);

  function handleSquareClick(index: number) {
    if (board[index] || getWinner(board)) {
      return;
    }

    const updatedBoard = [...board];
    updatedBoard[index] = isPlayer1Turn ? "X" : "O";
    setBoard(updatedBoard);
    setIsPlayer1Turn(!isPlayer1Turn);
  }

  function getGameStatus() {
    const winner = getWinner(board);
    if (winner) return `Winner: ${winner}`;
    if (board.every((square) => square !== null)) return "Draw!";
    return `Next player: ${isPlayer1Turn ? "X" : "O"}`;
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setIsPlayer1Turn(true);
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-[400px] mx-5">
        <h1 className="text-5xl font-semibold text-white mb-8 text-center">
          Tic Tac Toe
        </h1>

        <div
          className={`text-center mb-6 ${
            getWinner(board)
              ? "text-2xl font-bold text-green-400 animate-bounce"
              : "text-xl text-white"
          }`}
        >
          {getGameStatus()}
        </div>

        <div className="grid grid-cols-3 gap-1 rounded-xl overflow-hidden mb-6">
          {board.map((square, index) => (
            <button
              key={index}
              onClick={() => handleSquareClick(index)}
              className={`h-32 w-full bg-gray-800 rounded-md text-6xl font-light transition-colors duration-200 hover:bg-gray-700 ${
                square === "X" ? "text-blue-400" : "text-pink-400"
              }`}
            >
              {square}
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

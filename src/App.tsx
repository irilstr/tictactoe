import { useState } from "react";
import Choose_player from "./components/Choose_player";
import Board from "./components/Board";

function App() {
  const [player1, setPlayer1] = useState<string | null>(null);
  const [player2, setPlayer2] = useState<string | null>(null);

  return (
    <div className="h-screen flex flex-col bg-[#ffffff]">
      {!player1 || !player2 ? (
        <Choose_player
          onSelectPlayers={(p1, p2) => {
            setPlayer1(p1);
            setPlayer2(p2);
          }}
        />
      ) : (
        <Board player1={player1} player2={player2} />
      )}
    </div>
  );
}

export default App;

import { useState } from "react";
import Choose_player from "./components/Choose_player";
import Board from "./components/Board";
import StartGame from "./components/startGame";

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [player1, setPlayer1] = useState<string | null>(null);
  const [player2, setPlayer2] = useState<string | null>(null);

  return (
    <div className="h-screen flex flex-col bg-[#ffffff]">
      {!hasStarted ? (
        <StartGame onStart={() => setHasStarted(true)} />
      ) : !player1 || !player2 ? (
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

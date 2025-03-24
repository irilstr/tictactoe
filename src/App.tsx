import StartGame from "./components/startGame";

import Choose_player from "./components/Choose_player";
import Board from "./components/Board";
// import DropDown from "./components/dropDown";
import { useState } from "react";

function App() {
  const [startVisability, setStartVisability] = useState(true);
  const [choosePlayerVisability, setChoosePlayerVisability] = useState(false);
  const [BoardVisability, setBoardVisability] = useState(false);
  const [message, setMessage] = useState("");
  return (
    <>
      <div className="h-screen flex flex-col bg-[#3CB4E8]">
        <Board />

        {/* <Greeting name="Alice" onClick={() => setMessage("Hello, Alice!")} />
        <Greeting name="Bob" onClick={() => setMessage("Hello, Bob!")} />

        <p>{message}</p> Viser meldingen når en knapp trykkes */}
      </div>
    </>
  );
}
export default App;

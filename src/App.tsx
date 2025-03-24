import StartGame from "./components/startGame";
import Choose_player from "./components/Choose_player";
// import DropDown from "./components/dropDown";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  return (
    <>
      <div className="h-screen flex flex-col bg-[#3CB4E8]">
        <StartGame />

        {/* <Greeting name="Alice" onClick={() => setMessage("Hello, Alice!")} />
        <Greeting name="Bob" onClick={() => setMessage("Hello, Bob!")} />

        <p>{message}</p> Viser meldingen når en knapp trykkes */}
      </div>
    </>
  );
}
export default App;

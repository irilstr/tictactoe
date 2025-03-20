import StartGame from "./components/startGame";
import Choose_player from "./components/Choose_player";
// import DropDown from "./components/dropDown";
import Greeting from "./components/Greeting";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  return (
    <>
      <div className="h-screen flex flex-col bg-[#fdffff]">
        <Choose_player/>
        {/* <Greeting name="Alice" onClick={() => setMessage("Hello, Alice!")} />
        <Greeting name="Bob" onClick={() => setMessage("Hello, Bob!")} />

        <p>{message}</p> Viser meldingen når en knapp trykkes */}
      </div>
    </>
  );
}
export default App;

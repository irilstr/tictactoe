import { Button } from "./button";

interface StartGameProps {
  onStart: () => void;
}

export default function StartGame({ onStart }: StartGameProps) {
  return (
    <div className="w-screen h-screen flex flex-row items-center justify-center gap-4 mb-30">
      <div>
        <img src="Elephant.png" alt="elephant" className="h-30 lg:h-40" />
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <img src="Lemur.png" alt="lemur" className="h-30 lg:h-40" />

        <div className="border-4 border-[#abe4f7] px-6 py-8 md:px-10 md:py-12">
          <h1 className="text-3xl md:text-5xl font-bold text-center leading-[2.5rem] md:leading-[4rem]">
            <span className="text-blue-700 drop-shadow-md font-audiowide">
              TIC
            </span>{" "}
            <br />
            <span className="text-yellow-400 drop-shadow-md font-audiowide">
              TAC
            </span>{" "}
            <br />
            <span className="text-pink-500 drop-shadow-md font-audiowide">
              TOE
            </span>
          </h1>
        </div>

        <Button
          onClick={onStart}
          variant="outline"
          className="font-audiowide mt-6 md:mt-10 bg-[#abe4f7]  text-black"
        >
          START GAME
        </Button>
      </div>
      <div><img src="Bjorn.png" alt="tor" className="h-30 lg:h-40" />
      </div>
      
    </div>
  );
}

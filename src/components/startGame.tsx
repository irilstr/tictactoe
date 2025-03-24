import { Button } from "./button";

export default function StartGame() {
  return (
    <div className="w-screen h-screen flex flex-row items-center justify-center gap-4">
      <div>
        <img src="elephant.png" alt="elephant" className="h-30 lg:h-40" />
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <img src="lemur.png" alt="lemur" className="h-30 lg:h-40" />

        <div className="border-4 border-[#000000] px-6 py-8 md:px-10 md:py-12">
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
          variant="outline"
          className="font-audiowide mt-6 md:mt-10 bg-[#0022FF] border-[#000000] text-white"
        >
          START GAME
        </Button>
      </div>
      <img src="Bjorn.png" alt="tor" className="h-30 lg:h-40" />
    </div>
  );
}

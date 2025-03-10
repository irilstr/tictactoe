import { Button } from "./button";

export default function StartGame() {
  return (
    <div className="w-screen h-screen flex flex-row items-center justify-center gap-4">
      <div>
        <img src="elephant.png" alt="elephant" className="h-30 lg:h-40" />
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <img src="lemur.png" alt="lemur" className="h-30 lg:h-40" />

        <div className="border-4 border-[#0022FF] px-6 py-8 md:px-10 md:py-12">
          <h1 className="text-3xl md:text-5xl font-bold text-center leading-[2.5rem] md:leading-[4rem]">
            <span className="text-blue-700 drop-shadow-md">TIC</span> <br />
            <span className="text-yellow-400 drop-shadow-md">TAC</span> <br />
            <span className="text-pink-500 drop-shadow-md">TOE</span>
          </h1>
        </div>

        <Button
          variant="outline"
          className="mt-6 md:mt-10 bg-[#0022FF] border-[#0022FF] text-white"
        >
          START GAME
        </Button>
      </div>
      <img src="tor.png" alt="tor" className="h-30 lg:h-40" />
    </div>
  );
}

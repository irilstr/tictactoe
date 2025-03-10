import { Button } from "./button";

export default function StartScreen() {
  return (
    <>
      <div className="h-full flex flex-col items-center justify-center relative">
        <img
          src="/BergenMaskot.png"
          alt="BergenMaskot"
          className="absolute top-45 h-30"
        />
        <img
          src="/elephant.png"
          alt="elephant"
          className="absolute left-0 h-30"
        />
        <img src="/tor.png" alt="tor" className="absolute right-0 h-30" />
        <div className="absolute border-4 border-[#0022FF] px-8 py-12 flex flex-row">
          <h1 className="text-5xl font-bold text-center leading-[4rem]">
            <span className="text-blue-700 drop-shadow-md">TIC</span> <br />
            <span className="text-yellow-400 drop-shadow-md">TAC</span> <br />
            <span className="text-pink-500 drop-shadow-md">TOE</span>
          </h1>
        </div>
        <Button variant="outline" className="top-100">
          Button
        </Button>
      </div>
    </>
  );
}

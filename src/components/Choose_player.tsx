import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useEffect } from "react";

interface GameProps {
    player1: string;
    player2: string;
}
function choose_player({player1, player2 }: GameProps) {
    return `${player1},${player2}` ;
  }
const characters = ["Bjorn", "Elephant", "Lemur"];
export default function velgKarakter() {
    //aner virkelig ikke om det er normalt å bruke så mange forskjellige states, men fuck it. 
    const [player_1_btn, set_player_1_btn] = useState ("Player 1")
    const [player_2_btn, set_player_2_btn] = useState ("Player 2")
    const [visability, setvisability] = useState(false)
    const [player1, setplayer1] = useState("1");
    const [player2, setplayer2] = useState("2");
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [error, setError] = useState<string>("");
    const [images, setImages] = useState(characters);

    useEffect(() => {
        if (images.includes(player1) && images.includes(player2)) {
            setvisability(true);
        }
    }, [player1, player2]);
    
    return (
        <div id="alt" className="h-screen" >
            <div id="title" className="text-center mt-6">
                <h1 className="font-audiowide text-4xl">Choose your player</h1>
            </div>

            <div id="button_container" className = "flex flex-row justify-center content-evenly mt-25 flex gap-40 " >
                <div className="relative">
                    <Button id="player_1_knapp" onClick={() => {
                        setIsOpen1(!isOpen1)}
                    }
                        variant="outline" 
                        className="mt-6 md:mt-10 bg-[#abe4f7] text-white
                        font-audiowide text-cent cursor-pointer">
                        {player_1_btn}
                </Button>
                                      {/* Dropdown-meny */}
                {isOpen1 && (
                    <div className="absolute mt-2 w-26">
                        <ul className="">
                            {images.map((img, index) => (
                                <button key={img} type="button" className="border cursor-pointer hover:bg-blue-600" onClick={() => {
                                    let selected_player = images[index]
                                    if (selected_player !== player2){
                                        setplayer1(selected_player)
                                        // images.splice(index, 1)
                                        setIsOpen1(!isOpen1)
                                        set_player_1_btn(img)
                                        setError("")
                                    } else {
                                        setError("Begge kan ikke være samme karakter")
                                    }
                                }
                                }>
                                    <img key={img + index.toString()} src={`${img}.png`} alt={`image-${index}`} className="h-30 lg:h-30"/>
                                </button>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <div className="position absolute">
                <span className="text-center">
                    {error}
                </span>
            </div>
 
            
            <div className="relative">
                <Button onClick={() => {
                    setIsOpen2(!isOpen2)}
                }
                    variant="outline" 
                    className="mt-6 md:mt-10 bg-[#abe4f7] text-white
                    font-audiowide text-cent cursor-pointer">
                    {player_2_btn}
                </Button>
                                     {/* Dropdown-meny */}
                {isOpen2 && (
                    <div className="absolute mt-2 w-28">
                        <ul className="">
                            {images.map((img, index) => (
                                <button key={img} type="button" className="border border cursor-pointer hover:bg-blue-600" onClick={() => {
                                    let selected_player = images[index]
                                    if (selected_player !== player1){
                                        setplayer2(selected_player)
                                        // images.splice(index, 1)
                                        setIsOpen2(!isOpen2)
                                        set_player_2_btn(img)
                                        setError("")
                                    } else {
                                        setError("Begge kan ikke være samme karakter")
                                        //document.getElementById("error_tekst").innerText = "Spillerne kan ikke ha samme karakter";
                                    }
                                }
                            }>
                                <img key={img + index.toString()} src={`${img}.png`} alt={`image-${index}`} className="h-30 lg:h-30"/>
                                </button>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            {visability && (
                <div className="fixed left-1/2 top-3/4 transform -translate-x-1/2 bg-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition">
                    <button id="begin_game" type="button"
                        className=""
                        onClick={() =>{
                            const players = choose_player({ player1, player2 });
                        }}>
                        begin game
                    </button>
                </div>
            )}
        </div>
        </div>

            
    );
    
}

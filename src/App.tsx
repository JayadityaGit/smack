import { useState } from "react";
import slap from "./assets/zenitsu-agatsuma-zenitsu.gif"
import blush from "./assets/222561.gif"
import file from "./assets/slap2.mp3"

const App = () => {

  const playAudio = () => {
    const audio = new Audio(file); // Replace with your audio file path
    audio.play();

   
  };


  let arr = ["she says bro, maybe she will change her mind later", "she is like 4 years older, but age does not matter", "I will never give up on her", "I dont care about stress, I just want to impress her", "maybe she is an introvert, I have a chance lmao", "I will try to meet her daily, might start to feel secure", "she talks sweet, maybe it's easy", "she looks innocent, maybe she is naive lol"];


  const [punchCounter, setPunchCounter] = useState(0);

  const [index, setIndex] = useState(0);

  const [punch, setPunch] = useState(false);

  return (
    <div className="bg-gradient-to-t from-slate-900 to-slate-700 min-h-screen text-white text-center space-y-10">


      <div className="space-y-3 lg:space-y-5">
        <p className="font-bold text-3xl pt-14 lg:text-5xl">👋Smack Him💥</p>
        <p>help him to get back to his senses! 😭</p>
      </div>
            <button className={`quotes text-xs rounded-3xl bg-gradient-to-r from-violet-200 to-pink-200 text-black px-4 py-4 ${
           punch ? 'animate-slide-up-fade' : ''
        }`}>
             "{arr[index]}"
            </button>

            <div className="emotion grid justify-center px-7 ">
             {punch ? <img src={slap} className="h-56 w-80 rounded-lg object-cover"/> : <img src={blush} className="h-56 w-80 rounded-lg object-cover"/> }
            </div>

            <div className="space-y-4">

            <button className="bg-orange-600 hover:bg-orange-800 w-80 py-3 rounded-md" onClick={

              ()=>{

              
              playAudio()
                
              setPunch(true);
              setPunchCounter(punchCounter+1); 
              index < arr.length-1? setIndex(index+1):setIndex(0)
              
              setTimeout(()=>{
               setPunch(false)
              }, 1300);
      
              
              }}>Smack!👋</button>

            <p className="font-bold">Smacks: {punchCounter}</p>

            <p>Made with 😂 <a href="https://github.com/JayadityaGit" className="font-semibold underline" target="_blank">@Jayaditya</a></p>
             
            </div>


    </div>
  )
}

export default App
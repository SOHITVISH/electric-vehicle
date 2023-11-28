import { useState } from "react"
import Background from './Components/Background/Background';
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
function App() {
  let herodata=[
    {text1:"Dive into",text2:"What you love"},
    {text1:"Indulge",text2:"Your passion"},
    {text1:"Give in to",text2:"Your passion"},
  ]
  const[heroCount,setHeroCount]=useState(2);
  const[playStatus,setPlayStatus]=useState(false);

  return (
    <>
     <Background playStatus={playStatus} heroCount={heroCount}/>
     <Navbar/>
     <Hero
     setPlayStatus={setPlayStatus}
     herodata={herodata[heroCount]}
     heroCount={heroCount}
     setHeroCount={setHeroCount}
     playStatus={playStatus}
     />
    </>
  )
}

export default App

import React, { useMemo, useState } from "react";
const choices = ["rock", "paper", "scissors"];

 
 export default function Game() {
   const[playerOne , setPlayerOne]= useState("")
   const[playertwo, setPlayerTwo]=useState("")
   const[count, setCount]=useState(0)
  
  
   const play=()=>{
     if(!playerOne){
       return
     }
     const Playertwochoice=Math.floor(Math.random() * choices.length);
     setPlayerTwo(choices[Playertwochoice]);
   }
   const result = useMemo(() => {
    if (playertwo === playerOne) {
      return `It's a Tie`;
    } else {
      if (
        (playertwo === "rock" && playerOne === "scissors") ||
        (playertwo === "paper" && playerOne === "rock") ||
        (playertwo === "scissors" && playerOne === "paper")
      ) {
        setCount(count-1);
        return "Computer won";
      }else{
          setCount(count+1);
        return "Player won";
      }
      
    }
  }, [playertwo, playerOne]);
   
   
   
   return <div>
     <h1>Score: {count}</h1>
     <button style={{backgroundColor:"brown"}} onClick={()=>setPlayerOne("rock")}>Rock</button>
     <button style={{backgroundColor:"grey"}} onClick={()=>setPlayerOne("scissors")}>Scissors</button>
     <button style={{backgroundColor:"cyan"}} onClick={()=>setPlayerOne("paper")}>Paper</button>
     <button style={{backgroundColor:"green"}} onClick={play}>play</button>
     <p>player one: {playerOne}</p>
     <p>playertwo:{playertwo}</p>
     
     <h1>{result}</h1>
   </div>;
 }
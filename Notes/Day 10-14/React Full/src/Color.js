import React from 'react'
import { useReducer } from 'react'
function reducerfunction(state,action){
  switch(action.type){
    case "v":
      return {result:"Violet"}
    case "i":
      return{result:"Indigo"}
    case "b":
      return{result:"Blue"}
    case "g":
      return{result:"Green"}
    case "y":
      return{result:"Yellow"}
    case "o":
      return{result:"Orange"}
    case "r":
      return{result:"Red"}
    default:
      return {result:"Default"}
}
}
const Clock = () => {
    const result=""
    const [state,dispatch]=useReducer(reducerfunction,{result})
    function rainbow(){
      const a = document.getElementById("lab").value
      dispatch({type:a})
    }
   return (
    <div>
     <input id="lab" placeholder="Enter a letter:" ></input>
     

     <br>
     </br>
     <br></br>
     <button onClick={rainbow}>SUBMIT</button> 
     
     <h1 id="res">{state.result}</h1>  
    </div>
  )
}

export default Clock
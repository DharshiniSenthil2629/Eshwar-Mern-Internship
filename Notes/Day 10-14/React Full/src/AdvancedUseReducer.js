import React ,{useReducer} from 'react'
 
const ACTIONS={
    INCREMENT : "increment",
    DECREMENT : "decrement",
    ADDING    :"adding10",
    SUBRACTING :"subracting10",
    RESET :"reset"
}

function reducerfunction(state,action){
    switch(action.type){
      case ACTIONS.INCREMENT:
        return {count : state.count+1}
      case ACTIONS.DECREMENT :
            return {count : state.count-1}
      case ACTIONS.ADDING:
            return {count : state.count +10}
      case ACTIONS.SUBRACTING:
           return {count : state.count-10}
      case ACTIONS.RESET:
           return {count :55}
    }
}

export const AdvancedUseReducer =() => {
    const [state,dispatch]= useReducer(reducerfunction,{count:55})


function increment(){
    dispatch({ type: 'increment' })
}

function decrement(){
    dispatch({ type: 'decrement' })
}

function adding(){
    dispatch({type : 'adding10'})
}
function subracting(){
    dispatch({type : 'subracting10'})

}
function reset(){
    dispatch({type : "reset"})
}
console.log(state)

  return (
    <div>
      <h1>COUNT: {state.count}</h1>
      <button onClick={increment}>Increment </button>
      <br></br>   <br></br>
      <button onClick={decrement}>Decrement </button>    
      <br></br>    <br></br>
      <button onClick={adding}>ADDING </button>    
      <br></br>   <br></br>
      <button onClick={subracting}>SUBRACTING</button>
      <br></br>     <br></br>  
      <button onClick={reset}>RESET</button> 
      <br></br>
    </div>
  )
}



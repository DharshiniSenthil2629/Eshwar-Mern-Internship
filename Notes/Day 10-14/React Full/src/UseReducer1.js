import React ,{useReducer} from 'react'
 

function reducerfunction(state,action){
    switch(action.type){
      case "increment" :
        return {count : state.count+1}
        case "decremnet" :
            return {count : state.count-1}
    }
}

export const UseReducer1 =() => {
    const [state,dispatch]= useReducer(reducerfunction,{count:55})


function increment(){
    dispatch({type : "increment"})
}

function decrement(){
    dispatch({type : "decrement"})
}
console.log(state)
  return (
    <div>
      <h1>COUNT: {state.count}</h1>
      <button onClick={increment}>Increment </button>
      <button onClick={decrement}>Decrement </button>    
    
    </div>
  )
}



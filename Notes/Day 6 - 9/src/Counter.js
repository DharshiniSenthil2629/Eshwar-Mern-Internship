import React,{useState} from "react";
function Counter(){
    const [count,setCount] = useState(100)
    var increment = () => {
        setCount(count + 1)
    }
    var decrement = () => {
        setCount(count - 1)
    }
    var Reset1 =() =>{
        setCount(0)
    }
    var Reset2 =() =>{
        setCount(count - 1)
        setCount(count - 1)
    }
    return (
        <div>
        <h1>Counter  : {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={Reset1}>Reset1</button>
        <button onClick={Reset2}>Reset2</button>
        </div>
    );
}
export default Counter;
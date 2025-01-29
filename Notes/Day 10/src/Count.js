import React ,{useState} from 'react'

const Count = () => {
      const[count,setCount] = useState(0)
      function increment(){
        setCount(count+1)
      }
      function decrement(){
        setCount(count-1)
      }


      return (
    <div>
        
      <h2>Counter    { count }</h2>
    
      <button onClick={increment}>Increment</button>
      <br></br>
      <br></br>
      <button onClick={decrement}>Decrement</button>

    </div>
  )
}

export default Count

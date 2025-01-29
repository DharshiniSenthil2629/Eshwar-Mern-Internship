import React, {useState,useEffect } from 'react'

const CountComponent = () => {
    const [count, setCount] = useState(0)
    useEffect(()=>{

    return () =>{
        document.title = 'React App'
    };
    },[count]);
    
  return (
    <div>
      <p>You clicked  {count}  times</p>
      
    </div>
  )
}

export default CountComponent

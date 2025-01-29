import React from 'react'
import {Component2} from './Component2';


export const Component1 = () => {
   
  
  var msg ="Hello from component 1";
  

  return (
    <div>
       <h1>Component 1</h1>
       <Component2 msg={msg} />
       
       
    </div>
  )
}


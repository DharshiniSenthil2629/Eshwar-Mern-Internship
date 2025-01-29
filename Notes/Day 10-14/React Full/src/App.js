import React from 'react'
import './File.css';
import StyleComponent from './StyleComponent'


const App = () => {
  return (
    <div>
    <div className='Style'>  
      <h1>MY APP</h1>
      <h2>Second line</h2>   
      </div>
    <div className='Style'>
      <h1>MY APP</h1>
      <h2>Second line</h2>
</div>

   <p>Style Component</p>
   <div class name ='para'>
   <StyleComponent />
   </div>
    </div>
  )
}

export default App
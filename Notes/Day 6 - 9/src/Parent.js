import React from 'react'
import {Child} from './Child'
const Parent = (props) => {
    const message="Hello from Parent "
  return (
    <div>
      <h1>This is parent component</h1>
      <Child message={message} />
    </div>
  )
}

export default Parent

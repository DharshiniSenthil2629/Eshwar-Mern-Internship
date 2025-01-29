import React from 'react'
import {Component3} from './Component3'

export const Component2 = ({msg}) => {
  return (
    <div>
    <h2>Component 2</h2>
      <Component3 msg={msg}/>
    </div>
  )
}




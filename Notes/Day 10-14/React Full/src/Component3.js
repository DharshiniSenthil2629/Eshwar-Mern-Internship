import React from 'react'
import {Component4} from './Component4'

export const Component3 = ({msg}) => {
  return (
    <div>
        <h3>Component 3</h3>
        <Component4  msg={msg}/>
    </div>
  )
}


import React from 'react'
import Users from './Users.js'


const Container = ({Theme}) => {
  return (
    <div>
      <h1>Container</h1>
      <Users Theme={Theme}/>
    </div>
  )
}

export default Container

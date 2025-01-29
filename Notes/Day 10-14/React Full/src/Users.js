import React from 'react'
import User from './User.js'

const Users = ({Theme}) => {
  return (
    <div>
      <h2>Users</h2>
     
      <User Theme ={Theme }/>
    </div>
  )
}

export default Users

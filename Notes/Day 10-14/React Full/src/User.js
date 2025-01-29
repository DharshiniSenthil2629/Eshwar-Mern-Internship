import React  ,{useContext} from 'react'
import { ThemeContext } from './App'

const User = ({Theme,style}) => {
    const
    contextValue = useContext (ThemeContext)
    console.log(contextValue)
  return (
    <div style={contextValue.style}>
      <h3>User</h3>
    </div>
  )
}

export default User

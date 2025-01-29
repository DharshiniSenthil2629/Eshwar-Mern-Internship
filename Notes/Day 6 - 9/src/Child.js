import React from 'react'

export const Child = (props) => {
  return (
    <div>
      <h1>This is Child component</h1>
      <p>
        {props.message}
      </p>
    </div>
  )
}


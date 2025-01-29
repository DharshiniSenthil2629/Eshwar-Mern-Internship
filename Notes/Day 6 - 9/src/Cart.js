import React from 'react'

const Cart = ({cart}) => {
  return (
    <div>
      {cart.length==0 ?(
        // initally zero
      <p>Your cart is empty</p>
      ) : (
        <ul>
            {cart.map((product,index) => (
                <li key={index}> -{product}
                </li>
            ) )
            }
        </ul>importi
        importi
      )}
    </div>
  )
}

export default Cart

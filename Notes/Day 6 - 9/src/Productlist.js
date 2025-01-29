import React from 'react'

const Productlist = ({addTocart}) => {
  const products=[
    'Laptop','SmartPhone','Bluetooth'
  ];
  return (
    <div>
        <ul>
          {products .map((product,index) => (
            <li key={index}> - {product}
            <button onClick={() => addTocart(product)}>Add to Cart</button>
            </li>
          ) ) }
        </ul>
    </div>
  )
}

export default Productlist;

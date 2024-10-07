import React from 'react'

function Product({ product }) {
  const { id, price, image, title, description } = product
  return (
    <div>{product}</div>
  )
}

export default Product
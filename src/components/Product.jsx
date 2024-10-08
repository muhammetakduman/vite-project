import React from 'react'
import '../css/Product.css'

function Product({ product }) {
  const { id, price, image, title, description } = product;
  return (
    <div className='card'>
      <img className='image' src={image} alt="" />
      <div>
        <p style={{ textAlign: 'center', marginTop: '5px', height: '40px' }}>{title}</p>
        <h3 style={{ textAlign: 'center' }}>{price} TL</h3>
      </div>
      <div className='flex-row'>
        <button className='detail-button'>
          Ürün Detayı
        </button>
      </div>
    </div>
  )
}

export default Product
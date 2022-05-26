import React from 'react'
import '../Styles/Product.css'
export default function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
    <div className="product_description">
      <p>hello</p>
      <p className="product_price">
        <small>$</small>
        <strong>202.20</strong>
      </p>
      <div className="product_rating">
        {Array(3)
          .fill()
          .map(() => (
            <p>🌟</p>
          ))}
      </div>
    </div>

    <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/15253580/2021/12/22/ec56e52c-dae5-40b6-84f7-862ee51a98151640174956773-Nautica-Men-Sweaters-9351640174956338-1.jpg" alt="" />

    <button>Add to Basket</button>
  </div>
  )
}

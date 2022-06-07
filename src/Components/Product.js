import React,{useContext} from 'react'
import '../Styles/Product.css'
import {BasketContext} from '../Context/BasketContext'
export default function Product({ id, title, image, price, rating }) {
   const {basket,setbasket} = useContext(BasketContext)
  return (
    <div className="product">
    <div className="product_description">
      <p>{title}</p>
      <p className="product_price">
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className="product_rating">
        {Array(rating)
          .fill()
          .map(() => (
            <p>🌟</p>
          ))}
      </div>
    </div>

    <img src={image} alt="" />

    <button onClick={()=>{setbasket([...basket,{ id, title, image, price, rating }])}}>Add to Basket</button>
  </div>
  )
}

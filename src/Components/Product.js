import React,{useContext} from 'react'
import '../Styles/Product.css'
import {BasketContext} from '../Context/BasketContext'
export default function Product({ id, title,description, image, price, rating }) {
   const {basket,setbasket} = useContext(BasketContext)
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
    <div className="product">
    <div className="product_description">
      <p><b>{title} :</b> {description}</p>
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
  </div>
  )
}

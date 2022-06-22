import React,{useContext} from 'react'
import '../Styles/Product.css'
import {BasketContext} from '../Context/BasketContext'
import ReactStars from 'react-rating-stars-component'
import { useHistory } from 'react-router-dom'
export default function Product({ id, title,description, image, price, rating,images }) {
   const {basket,setbasket} = useContext(BasketContext)
   const history=useHistory()
  return (
    <div onClick={()=>history.push({pathname:'product',state:{id,title,description,image,price,rating,images}})} className="col-lg-4 col-md-6 col-sm-12" style={{zIndex:1}}>
    <div className="product">
    <div className="product_description">
      <p><b>{title} :</b> {description.length>30?description.substr(0,30)+"...":description}</p>
      <p className="product_price">
        <small>₹</small>
        <strong>{price}</strong>
      </p>
      <ReactStars
      edit={false}
    value={rating}
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />
    </div>

    <img src={image} alt="" />
  </div>
  </div>
  )
}

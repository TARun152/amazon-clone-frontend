import React,{useContext} from 'react';
import { BasketContext } from '../Context/BasketContext';
import ReactStars from 'react-rating-stars-component'
import '../Styles/CheckoutProduct.css'
import { useHistory } from 'react-router-dom';

function CheckoutProduct({ id, image,images, title, price, rating,quantity, hideButton,description}) {
    const history=useHistory()
const {basket,setbasket} = useContext(BasketContext)
    const removeFromBasket = () => {
        // remove the item from the basket
        setbasket(basket.filter(item=>item.id!==id))
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt=""/>

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
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
    <div><strong>Qty:</strong> {quantity}</div>
                {!hideButton && (
                    <>
                    <button onClick={()=>{history.push({pathname:'/product',state:{id,image,title,price,rating,images,description}})}}>Edit order</button>
                    <button style={{marginLeft:'10px'}} onClick={removeFromBasket}>Remove from Basket</button>
                    </>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
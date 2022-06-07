import React,{useContext} from 'react';
import { BasketContext } from '../Context/BasketContext';
import '../Styles/CheckoutProduct.css'

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    
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
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
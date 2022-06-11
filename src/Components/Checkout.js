import React,{useContext} from 'react'
import '../Styles/Checkout.css'
import Subtotal from './Subtotal';
import {BasketContext} from '../Context/BasketContext'
import CheckoutProduct from './CheckoutProduct';
export default function Checkout() {
  const {basket} = useContext(BasketContext)
    return (
        <div className="checkout">
          <div className="checkout__left">
            <img
              className="checkout__ad"
              src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
              alt=""
            />
    
            <div>
              <h3>Hello, {sessionStorage.getItem('email')}</h3>
              <h2 className="checkout__title">Your shopping Basket</h2>
    
              {basket.map(item => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
    
            </div>
          </div>
    
          <div className="checkout__right">
            <Subtotal/>
          </div>
        </div>
      );
}

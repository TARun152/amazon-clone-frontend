import React,{useContext,useState,useEffect} from 'react'
import CurrencyFormat from "react-currency-format";
import { useHistory, useLocation } from 'react-router-dom';
import { BasketContext } from '../Context/BasketContext';
import '../Styles/Subtotal.css'
export default function Subtotal() {
  const history=useHistory()
  const {basket,cartLength} = useContext(BasketContext)
  const getBasketTotal=()=>{
    let sum=0
    basket.forEach(element => {
      sum+=element.totalamount
    });
    return sum
  }
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cartLength} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button disabled={basket.length===0?true:false} onClick={()=>{history.push('/payment')}}>Proceed to Checkout</button>
    </div>
  )
}

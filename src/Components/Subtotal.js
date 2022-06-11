import React,{useContext} from 'react'
import CurrencyFormat from "react-currency-format";
import { useHistory } from 'react-router-dom';
import { BasketContext } from '../Context/BasketContext';
import '../Styles/Subtotal.css'
export default function Subtotal() {
  const history=useHistory()
  const {basket} = useContext(BasketContext)
  const getBasketTotal=()=>{
    let sum=0
    basket.forEach(element => {
      sum+=element.price
    });
    return sum
  }
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={()=>{history.push('/payment')}}>Proceed to Checkout</button>
    </div>
  )
}

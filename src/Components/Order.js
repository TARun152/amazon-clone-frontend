import React from 'react'
import moment from 'moment'
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from "react-currency-format";
import '../Styles/Order.css'
export default function Order({order}) {
  return (
    <div className='order'>
      <div className='order__id'>
        <h2>Order Id :</h2>
        <p>
            <small>{order.orderId}</small>
        </p>
        </div>
        <p>{moment.unix(order.createdOn).format("MMMM Do YYYY, h:mm a")}</p>
        {
            order.orders.map(item=>(
              <>
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.thumbnail}
                price={item.price}
                rating={item.rating}
                quantity={item.quantity}
                hideButton={true}
              />
              <hr />
              </>
            ))
        }
        <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3 className='order__total'>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={order.amount}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
        </div>
  )
}

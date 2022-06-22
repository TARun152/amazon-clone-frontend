import React from 'react'
import moment from 'moment'
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from "react-currency-format";
import '../Styles/Order.css'
export default function Order({order}) {
  return (
    <div className='order'>
        <h2>Order</h2>
        <p>{moment.unix(order.createdOn).format("MMMM Do YYYY, h:mm a")}</p>
        <p className="order__id">
            <small>{order.orderId}</small>
        </p>
        {
            order.orders.map(item=>(
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                quantity={item.quantity}
                hideButton={true}
              />
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

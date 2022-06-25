import React, { useContext, useState,useEffect } from "react";
import { BasketContext } from "../Context/BasketContext";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import "../Styles/Payment.css";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "axios";

export default function Payment() {
    const history=useHistory()
  const { basket,setbasket,user,cartLength } = useContext(BasketContext);
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false)
  const [succeeded, setSucceeded] = useState(false)
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setclientSecret] = useState(null)
  useEffect(() => {
    let total=getBasketTotal(basket)
    if(total>0)
    axios.post(process.env.REACT_APP_URL+'payment/create',{
        total:total
    })
    .then(res=>setclientSecret(res.data.clientSecret))
  }, [basket])
  // console.log(clientSecret)
  
  const handleSubmit = async (e) => {
      e.preventDefault()
      if(!error){
      setProcessing(true)
      stripe.confirmCardPayment(clientSecret,{
        payment_method:{
              card: elements.getElement(CardElement),
              billing_details: {
                name: 'Jenny Rosen',
              }
          }
      }).then(({paymentIntent})=>{
        console.log(paymentIntent)
        //   paymentIntent=payment confirmation
        setSucceeded(true)
        axios.post(process.env.REACT_APP_URL+'orders/addOrder',{
          userId:user._id,
          orderId:paymentIntent.id,
          orders:basket,
          amount:paymentIntent.amount,
          createdOn:paymentIntent.created
        }).then(()=>{
          setbasket([])
          localStorage.removeItem('basket')
          history.replace('/orders')
        }
        )
        .catch(err=>console.log(err))
      })
    }
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  const getBasketTotal=()=>{
    let sum=0
    basket.forEach(element => {
      sum+=element.totalamount
    });
    return sum
  }
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout ({cartLength} items)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{localStorage.getItem("email")}</p>
            <p>f-22,Prashant Palace</p>
            <p>Udaipur,Rajasthan</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item,index) => (
              <>
              <CheckoutProduct
              id={item.id}
              title={item.title}
              description={item.description}
              image={item.thumbnail}
              images={item.images}
              price={item.price}
              rating={item.rating}
              quantity={item.quantity}
              hideButton={true}
              />
              {
                index===basket.length-1?null:
              <hr />
}
              </>
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                <button disabled={processing||disabled||succeeded}>
                    <span>{processing?<p>Processing...</p>:"Buy Now"}</span>
                </button>
              </div>
              {error&&<div style={{marginTop:'10px'}}>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

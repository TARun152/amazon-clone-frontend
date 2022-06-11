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
  const { basket,setbasket } = useContext(BasketContext);
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false)
  const [succeeded, setSucceeded] = useState(false)
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setclientSecret] = useState(null)
  useEffect(() => {
    axios.post(process.env.REACT_APP_URL+'payment/create',{
        total:200
        // getBasketTotal(basket)*100
    })
    .then(res=>setclientSecret(res.data.clientSecret))
  }, [basket])
  console.log(clientSecret)
  
  const handleSubmit = async (e) => {
      e.preventDefault()
      setProcessing(true)
      const payload=await stripe.confirmCardPayment(clientSecret,{
          payment_method:{
              card: elements.getElement(CardElement)
          }
      }).then(({paymentIntent})=>{
        //   paymentIntent=payment confirmation
        setSucceeded(true)
        setError(null)
        setProcessing(false)
        setbasket([])
        history.replace('/orders')
      })
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  const getBasketTotal=()=>{
    let sum=0
    basket.forEach(element => {
      sum+=element.price
    });
    return sum
  }
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{sessionStorage.getItem("email")}</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
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
                  prefix={"$"}
                />
                <button disabled={processing||disabled||succeeded}>
                    <span>{processing?<p>Processing</p>:"Buy Now"}</span>
                </button>
              </div>
              {error&&<div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

import axios from 'axios'
import React,{useEffect,useContext,useState} from 'react'
import { BasketContext } from '../Context/BasketContext'
import Order from './Order'
import '../Styles/Orders.css'
import Spinner from './Spinner'

export default function Orders() {
  const {user} = useContext(BasketContext)
  const [orders, setorders] = useState([])
  useEffect(() => {
    if(user?._id)
    console.log(user._id)
    axios.get(process.env.REACT_APP_URL+'orders/getAllOrder',{
      headers:{
        id:user?._id
      }
    })
    .then((res)=>setorders(res.data))
  }, [user])
  if(orders.length>0)
  return (
    <div className='orders'>
      <h1>Your Orders</h1>
      <hr />
      <div className="orders__order">
        {
          orders.length>0?
          orders.map(order=>(
              <Order order={order}/>
          )):
          <div style={{fontSize:'20px'}}>You don't have any orders right now.</div>
        }
      </div>
    </div>
  )
  else
  return(
    <Spinner/>
  )
}

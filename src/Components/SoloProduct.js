import React,{useState,useContext, useEffect,useCallback} from 'react'
import { useParams } from 'react-router-dom'
import '../Styles/SoloProduct.css'
import Carousel from 'react-material-ui-carousel'
import ReactStars from 'react-rating-stars-component'
import { BasketContext } from '../Context/BasketContext'
import axios from 'axios'
import Spinner from './Spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function SoloProduct() {
  const {setbasket,basket} = useContext(BasketContext)
   const param=useParams()
   const [product, setproduct] = useState(null)
  const [inBasket, setinBasket] = useState(false)
  const [value, setvalue] = useState(1)
  const getProdcutWithID=useCallback(
    () => {
     axios.get(`https://dummyjson.com/products/${param.id}`)
     .then(res=>setproduct(res.data))
     .catch(err=>console.log(err))
    },
    []
  )
  
  useEffect(() => {
    getProdcutWithID()
  }, [])
  useEffect(() => {
    if(product&&basket.length>0)
      {
        basket.some(item => {
          if(item.id===product.id)
          {
            setinBasket(true)
            setvalue(item.quantity)
            return true;
          }
          else
          return false;
        });
    }
  }, [product,basket])
  
  if(product)
  return (
    <div className='solo'>
      <div className='solo_image'>
      <Carousel>
            {
                product.images.map(item=>(
                  <img style={{maxHeight:'300px',maxWidth:'600px',objectFit:'contain',width:'100%',height:'100%'}} src={item} alt="" />
                ))
            }
        </Carousel>
      </div>
      <div className='solo_description'>
        <span className='solo_title'>{product.title}</span>
        <hr />
        <ReactStars
      edit={false}
    value={product.rating}
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />
  <hr />
  <span className='solo_price'>₹{product.price}</span>
  <div className='solo_quantity'>
    <button disabled={value===1?true:false} onClick={()=>setvalue(value-1)}>-</button>
    <input disabled={true} value={value} type="number" />
    <button onClick={()=>setvalue(value+1)}>+</button>
  </div>
  <span className='solo_desc'>Description :</span>
  <span>{product.description}</span>
  <hr />
  {
    inBasket?
  <div style={{color:'green'}}><strong>In your basket!!</strong></div>:null
}
  <button className='solo_basketButton'
  onClick={()=>{
    toast(`${value} ${product.title} added to your basket`)
    if(inBasket)
    {
      let newBasket=basket.filter(item=>item.id!==product.id)
      setbasket([...newBasket,{...product,quantity:value,totalamount:product.price*value}])
    }
    else
    {
    setbasket([...basket,{ ...product,quantity:value,totalamount:product.price*value }])
    }
  }}
  >Add to Basket</button>
      </div>
      <ToastContainer />
    </div>
  )
  else
  return(
    <Spinner/>
  )
}

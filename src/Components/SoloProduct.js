import React,{useState,useContext, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import '../Styles/SoloProduct.css'
import Carousel from 'react-material-ui-carousel'
import ReactStars from 'react-rating-stars-component'
import { BasketContext } from '../Context/BasketContext'
export default function SoloProduct() {
  const {setbasket,basket} = useContext(BasketContext)
  const location=useLocation()
  const [inBasket, setinBasket] = useState(false)
  const product=location.state
  const [value, setvalue] = useState(1)
  useEffect(() => {
    if(basket.length>0)
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
  }, [])
  
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
  <button className='solo_basketButton'
  onClick={()=>{
    if(inBasket)
    {
      let newBasket=basket.filter(item=>item.id!==product.id)
      setbasket([...newBasket,{...product,quantity:value,totalamount:product.price*value}])
    }
    else
    setbasket([...basket,{ ...product,quantity:value,totalamount:product.price*value }])
  }}
  >{inBasket?"Save edit":"Add to Basket"}</button>
      </div>
    </div>
  )
}

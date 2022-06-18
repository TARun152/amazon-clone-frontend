import axios from 'axios'
import React,{useEffect,useState,useCallback} from 'react'
import '../Styles/Home.css'
import Product from './Product'
export default function Home() {
  const [allProducts, setallProducts] = useState("")
  const getProducts=useCallback(
    () =>{
      axios.get('https://dummyjson.com/products?limit=100')
  .then((res)=>{setallProducts(res.data.products); console.log(res.data.products)})
  .catch(err=>console.log(err))
    },
    []
  )
  useEffect(() => {
      getProducts()
  }, [])
  
  return (
    <div className="home">
    <div className="home_container">
      <img className='home_image'
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""/>
        <div className='row home_row'>
        {
        allProducts.length>0?
        allProducts.map((product,)=>(
            <Product id={product.id} title={product.title} description={product.description} image={product.images[0]} price={product.price} rating={product.rating<4.5?Math.floor(product.rating):Math.ceil(product.rating)}/>
        )):null
}
</div>
    </div>
  </div>
  )
}

import axios from 'axios'
import React,{useEffect,useState,useCallback} from 'react'
import '../Styles/Home.css'
import Product from './Product'
import Spinner from './Spinner'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default function Home() {
  const [allProducts, setallProducts] = useState("")
  const [allcategory, setallcategory] = useState([])
    const [category, setcategory] = useState(null)
  const getProducts=useCallback(
    () =>{
      axios.get('https://dummyjson.com/products?limit=100')
  .then((res)=>{setallProducts(res.data.products); console.log(res.data.products)})
  .catch(err=>console.log(err))
    
    },
    []
  )
  const getCategoryProduct=useCallback(
    (category) => {
      axios.get(`https://dummyjson.com/products/category/${category}`)
      .then((res)=>{setallProducts(res.data.products); console.log(res.data.products)})
      .catch(err=>console.log(err))
    },
    []
  )
  
const getAllCategory=useCallback(
  () => {
   axios.get('https://dummyjson.com/products/categories')
   .then(res=>setallcategory(res.data))
   .catch(err=>console.log(err))
  },
  []
)
const handleChange = (event) => {
  setcategory(event.target.value);
  setallProducts([])
  if(event.target.value==='None')
  getProducts()
  else
  getCategoryProduct(event.target.value)
};
  useEffect(() => {
      getProducts()
      getAllCategory()
  }, [])
  if(allProducts.length>0)
  return (
    <div className="home">
    <div className="home_container">
      <img className='home_image'
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""/>
        <div className='home_row'>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={category}
          onChange={handleChange}
          autoWidth
          label="Category"
        >
          <MenuItem value="None">
            <em>None</em>
          </MenuItem>
          {
            allcategory.map((item)=>
            (
                <MenuItem value={item}>{item}</MenuItem>
            ))
}
        </Select>
      </FormControl>
    </div>
        <div className='row' style={{width:'100%',marginTop:'10px'}}>
        {
        allProducts.map((product,)=>(
            <Product id={product.id} title={product.title} description={product.description} image={product.thumbnail} price={product.price} rating={product.rating} images={product.images}/>
        ))}
</div>
    </div>
  </div>
  )
  else
  return(
    <Spinner/>
  )
}

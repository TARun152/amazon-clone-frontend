import React,{useContext,useState,useEffect} from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import '../Styles/Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { BasketContext } from '../Context/BasketContext';

export default function Navbar(){
    const {basket,setuser,setcartLength,cartLength} = useContext(BasketContext)
    const [token, settoken] = useState(localStorage.getItem('token'))
    const history=useHistory()
    const signOutUser=()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        settoken(null)
        setuser(null)
        setcartLength(0)
        history.replace('/')
    }
    useEffect(() => {
          let sum=0
          basket.forEach(element => {
            sum+=element.quantity
          });
         setcartLength(sum)
         if(basket.length>0&&localStorage.getItem('token'))
         {
            localStorage.setItem('basket',JSON.stringify(basket))
         }
      }, [basket])
        return (
            <div className='navbar'>
                <Link style={{textDecoration: 'none'}} to='/'>
                <img className='nav_logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
                </Link>
                <div className="nav_search">
                    <input className='nav_searchInput' type="text" />
                    <SearchIcon className='nav_searchIcon'/>
                </div>
                <div className="nav_profile">
                    <Link style={{textDecoration: 'none'}} to={!token&&'/login'}>
                    <div className="nav_profileOptions" onClick={signOutUser}>
                       <span className='profileOptions_firstLine'>Hello {token?localStorage.getItem('email'):"Guest"}</span>
                       <span className='profileOptions_secondLine'>{token?"Sign Out":"Sign In"}</span> 
                    </div>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to={token?'/orders':'/login'}>
                    <div className="nav_profileOptions">
                    <span className='profileOptions_firstLine'>Returns</span>
                       <span className='profileOptions_secondLine'>& Orders</span> 
                    </div>
                    </Link>
                    <div className="nav_profileOptions">
                    <span className='profileOptions_firstLine'>Your</span>
                       <span className='profileOptions_secondLine'>Prime</span> 
                    </div>
                    <Link style={{textDecoration:'none'}} to={token?'/checkout':'/login'}>
                    <div className='nav_basketOption'>
                    <ShoppingBasketIcon/>
                    <span className='profileOptions_secondLine nav_numberCount'>{cartLength}</span>
                    </div>
                    </Link>
                </div>
            </div>
        )
}

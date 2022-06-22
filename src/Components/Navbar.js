import React,{useContext,useState,useEffect} from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import '../Styles/Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { BasketContext } from '../Context/BasketContext';

export default function Navbar(){
    const {basket,user,setuser,setcartLength,cartLength} = useContext(BasketContext)
    const [token, settoken] = useState(sessionStorage.getItem('token'))
    const signOutUser=()=>{
        sessionStorage.removeItem('token')
        settoken(null)
        setuser(null)
    }
    const location=useLocation()
    const history=useHistory()
    useEffect(() => {
          let sum=0
          basket.forEach(element => {
            sum+=element.quantity
          });
         setcartLength(sum)
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
                       <span className='profileOptions_firstLine'>Hello {user?user.email:"Guest"}</span>
                       <span className='profileOptions_secondLine'>{token?"Sign Out":"Sign In"}</span> 
                    </div>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/orders'>
                    <div className="nav_profileOptions">
                    <span className='profileOptions_firstLine'>Returns</span>
                       <span className='profileOptions_secondLine'>& Orders</span> 
                    </div>
                    </Link>
                    <div className="nav_profileOptions">
                    <span className='profileOptions_firstLine'>Your</span>
                       <span className='profileOptions_secondLine'>Prime</span> 
                    </div>
                    <div style={{cursor:'pointer'}} onClick={()=>{
                        if(location.pathname==='/product')
                        {
                            history.replace({pathname:'/checkout'})
                        }
                        else
                        {
                            history.push({pathname:'/checkout'})
                        }
                    }} className='nav_basketOption'>
                    <ShoppingBasketIcon/>
                    <span className='profileOptions_secondLine nav_numberCount'>{cartLength}</span>
                    </div>
                </div>
            </div>
        )
}

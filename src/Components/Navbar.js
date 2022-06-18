import React,{useContext,useState} from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { BasketContext } from '../Context/BasketContext';

export default function Navbar(){
    const {basket,user,setuser} = useContext(BasketContext)
    const [token, settoken] = useState(sessionStorage.getItem('token'))
    const signOutUser=()=>{
        sessionStorage.removeItem('token')
        settoken(null)
        setuser(null)
    }
        return (
            <div className='navbar'>
                <Link to='/'>
                <img className='nav_logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
                </Link>
                <div className="nav_search">
                    <input className='nav_searchInput' type="text" />
                    <SearchIcon className='nav_searchIcon'/>
                </div>
                <div className="nav_profile">
                    <Link to={!token&&'/login'}>
                    <div className="nav_profileOptions" onClick={signOutUser}>
                       <span className='profileOptions_firstLine'>Hello {user?user.email:"Guest"}</span>
                       <span className='profileOptions_secondLine'>{token?"Sign Out":"Sign In"}</span> 
                    </div>
                    </Link>
                    <Link to='/orders'>
                    <div className="nav_profileOptions">
                    <span className='profileOptions_firstLine'>Returns</span>
                       <span className='profileOptions_secondLine'>& Orders</span> 
                    </div>
                    </Link>
                    <div className="nav_profileOptions">
                    <span className='profileOptions_firstLine'>Your</span>
                       <span className='profileOptions_secondLine'>Prime</span> 
                    </div>
                    <Link to={user?'/checkout':'/login'}>
                    <div className='nav_basketOption'>
                    <ShoppingBasketIcon/>
                    <span className='profileOptions_secondLine nav_numberCount'>{basket.length}</span>
                    </div>
                    </Link>
                </div>
            </div>
        )
}

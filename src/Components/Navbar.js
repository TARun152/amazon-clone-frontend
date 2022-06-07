import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { BasketContext } from '../Context/BasketContext';

export default function Navbar(){
    const {basket} = useContext(BasketContext)
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
                    <Link to='/login'>
                    <div className="nav_profileOptions">
                       <span className='profileOptions_firstLine'>Hello Guest</span>
                       <span className='profileOptions_secondLine'>Sign In</span> 
                    </div>
                    </Link>
                    <div className="nav_profileOptions">
                    <span className='profileOptions_firstLine'>Returns</span>
                       <span className='profileOptions_secondLine'>& Orders</span> 
                    </div>
                    <div className="nav_profileOptions">
                    <span className='profileOptions_firstLine'>Your</span>
                       <span className='profileOptions_secondLine'>Prime</span> 
                    </div>
                    <Link to='/checkout'>
                    <div className='nav_basketOption'>
                    <ShoppingBasketIcon/>
                    <span className='profileOptions_secondLine nav_numberCount'>{basket.length}</span>
                    </div>
                    </Link>
                </div>
            </div>
        )
}

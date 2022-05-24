import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export default function Navbar(){
        return (
            <div className='navbar'>
                <img className='nav_logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
                <div className="nav_search">
                    <input className='nav_searchInput' type="text" />
                    <SearchIcon className='nav_searchIcon'/>
                </div>
                <div className="nav_profile">
                    <div className="nav_profileOptions">
                       <span className='profileOptions_firstLine'>Hello Guest</span>
                       <span className='profileOptions_secondLine'>Sign In</span> 
                    </div>
                    <div className="nav_profileOptions">
                    <span className='profileOptions_firstLine'>Returns</span>
                       <span className='profileOptions_secondLine'>& Orders</span> 
                    </div>
                    <div className="nav_profileOptions">
                    <span className='profileOptions_firstLine'>Your</span>
                       <span className='profileOptions_secondLine'>Prime</span> 
                    </div>
                    <div className='nav_basketOption'>
                    <ShoppingBasketIcon/>
                    <span className='profileOptions_secondLine nav_numberCount'>0</span>
                    </div>
                </div>
            </div>
        )
}

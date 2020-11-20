import React from 'react'
import './Header.css'
import amazonLogo from './images/amazonLogo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom';
import {useStateValue} from './StateProvider';

function Header() {
    const[{basket},dispatch]=useStateValue();
    return (
        <div className='header'>
            <Link style={{ color: '#FFF' }} to="/">
                <img className='header_logo' src={amazonLogo} alt='logo' />
            </Link>
            <div className='header__search'>
                <input 
                className='header__searchInput'
                type='text' />
                <SearchIcon className='header__searchIcon'/>
           </div> 
           <div className='header__nav'>
               <div className='header__options'>
                    <span className='header__optionLineOne'>
                        Hello Guest
                    </span>
                    <span className='header__optionLineTwo'>
                        Sign In
                    </span>
                    
               </div>
               <div className='header__options'>
                    <span className='header__optionLineOne'>
                        Returns
                    </span>
                    <span className='header__optionLineTwo'>
                        & Orders
                    </span>
               </div>
               <div className='header__options'>
                    <span className='header__optionLineOne'>
                                Your
                            </span>
                            <span className='header__optionLineTwo'>
                            Prime
                    </span>
               </div>
                <div className="header__optionBasket">
                    <Link style={{ color: '#FFF' }} to="/checkout">
                        <ShoppingBasketIcon />
                    </Link>
                    <span className='header__optionLineTwo
                     header__basketCount'>
                       {basket?.length}
                    </span>
                </div>

           </div>
        </div>
    )
}

export default Header

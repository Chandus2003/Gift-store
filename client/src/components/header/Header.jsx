import { AppBar, Toolbar, Typography } from '@mui/material';
import './Header.css';
import Search from './Search';
import NavList from '../navBar/NavList';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Header() {
    return (
        <>
           <AppBar position='static' className="header">
                <div className="offers-text">
                    Use code FWFRIDAY to avail ₹50 off. Valid till midnight.
                </div>
                <div className="icon-container">
                    <li className="Login-Icon">
                        <AddShoppingCartIcon />
                        <PersonOutlineIcon />
                    </li>
                </div>
                <div>
                    <img className='Image' src='/assets/logo.png' />
                </div>
                <Search />
                <NavList />
            </AppBar>
        </>
    );
}

export default Header;

import { AppBar, Toolbar, Typography } from '@mui/material';
import './Header.css';
import Search from './Search';
import NavList from '../navBar/NavList';

function Header() {
    return (
        <>
            <AppBar position="static" className="header">
                <div className="offers-text">
                    Use code FWFRIDAY to avail ₹50 off. Valid till midnight.
                </div>

            </AppBar>  
            <div>
                    <img className='Image' src='/assets/logo.png' />
            </div>        
            <Search/>

        </>
    );
}

export default Header;

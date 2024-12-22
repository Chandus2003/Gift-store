import { AppBar, Toolbar,styled} from '@mui/material'
function Header() {
    
    const HeaderColor = styled(AppBar)`
    font-family: 'Montserrat', sans-serif;
    background: rgb(255, 215, 55);
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
    height: 20px
  `;
    
    return (
        <div>
            
            <HeaderColor>
            <div className='Offers'>Use code FWFRIDAY to avail ₹50 off. Valid till midnight.
            </div>
                {/* <Toolbar>
                    

                </Toolbar> */}
            </HeaderColor>
        </div>


    )
}
export default Header;
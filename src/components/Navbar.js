import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
    };

    useEffect(() => {
      showButton()
    },[]);

    window.addEventListener('resize', showButton);
  

  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          KENDYL
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              HOME
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/candles' className='nav-links' onClick={closeMobileMenu}>
              CANDLES
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/aboutus' className='nav-links' onClick={closeMobileMenu}>
              ABOUT US
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
              CONTACT
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
              SIGN UP
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
    </nav>
    </>
  )
};

export default Navbar

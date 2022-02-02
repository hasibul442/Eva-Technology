import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
// import { click } from '@testing-library/user-event/dist/click';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="navbar-logo">
                    <img src="Eva-Tech-Full-Logo1.png" className='navbar-company-logo'/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  <i className= {click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                  <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}> Home </Link>
                  </li>
{/* 
                  <li className='nav-item'>
                    <Link to='/aboutus' className='nav-links' onClick={closeMobileMenu}> About Us </Link>
                  </li> */}

                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" herf='#'  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      About Us
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link to='/aboutus' className="dropdown-item nav-links" onClick={closeMobileMenu} >About Us</Link>
                      <Link to='/mission' className="dropdown-item nav-links" onClick={closeMobileMenu} >Mission & Vision</Link>
                      <Link to='/director' className="dropdown-item nav-links" onClick={closeMobileMenu} >Directors</Link>
                      <Link to='/patner' className="dropdown-item nav-links" onClick={closeMobileMenu} >Patner</Link>
                      <Link to='/client' className="dropdown-item nav-links" onClick={closeMobileMenu} >Clients</Link>
                    </div>
                  </li>

                  <li className='nav-item'>
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}> Services </Link>
                  </li>
                  
                  <li className='nav-item'>
                    <Link to='/contact' className='nav-links' onClick={closeMobileMenu}> Contact </Link>
                  </li>
                </ul>
                
            </div>
        </nav>
    </>
  );
}

export default Navbar;

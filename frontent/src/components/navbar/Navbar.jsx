import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

  return (
    <>
       <div id='nav-bar'>
        <nav className="navbar navbar-expand-lg">
            <div className="container">
              <Link to='/' className="navbar-brand" href="#"><img src="Eva-Tech.png" className="navbar-company-logo" alt='Company Logo'/></Link>
              <div className='menu-icon navbar-toggler' onClick={handleClick} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <i className= {click ? 'fas fa-times' : 'fas fa-bars'}></i>
              </div>

              <div className="collapse navbar-collapse " id="navbarSupportedContent" >
                <ul className={ click ? 'navbar-nav active me-auto mx-auto mb-2 mb-lg-0' : 'navbar-nav me-auto mx-auto mb-2 mb-lg-0' }>
                  <li className="nav-item">
                    <Link className="nav-link pl-2" to='/' >Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/projects'>Projects</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/aboutus'>About Us</Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link" to='/products'>Products</Link>
                  </li> */}
                  <li className="nav-item">
                    <Link className="nav-link" to='/services'>Services</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/contactus' >Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
       </div>
    </>
  );
}

export default Navbar;

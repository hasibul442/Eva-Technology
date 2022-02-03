import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {



  return (
    <>
       <div>
        <nav className="navbar navbar-expand-lg  bg-light">
            <div className="container-fluid">
              <Link to='/' className="navbar-brand" href="#"><img src="Eva-Tech-Full-Logo1.png" className='navbar-company-logo'/></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse " id="navbarSupportedContent" >
                <ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to='/'>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/projects'>About Us</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to='/' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><Link className="dropdown-item" to='/aboutus'>About Us</Link></li>
                      <li><Link className="dropdown-item" to='/mission'>Mission & Vision</Link></li>
                      <li><Link className="dropdown-item" to='/director'>Directors</Link></li>
                      <li><Link className="dropdown-item" to='/patner'>Patners</Link></li>
                      <li><Link className="dropdown-item" to='/client'>Clients</Link></li>
                      <li><Link className="dropdown-item" to='/teammember'>Team Member</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/services'>Services</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/contact' >Contact</Link>
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
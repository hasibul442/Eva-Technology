import React from 'react';
import './footer.css';

function Footer() {
  return (
    <>
        <footer className='container-xl-12 footer'>
          <div className=' container row pt-3'>
            <div className='col-sm-6'>
              <p> BANGLADESH OFFICE</p>
            </div>
          </div>
            <div className="text-center pt-3 pb-1 ">
                <span className='h5 text-dark'>&copy; {new Date().getFullYear()} Copyright: <a href="https://www.evatech.org" className='footer-link'> Eva Technology</a>. Developed By <small className='dev-name'>Hasibul Hasan</small></span>
            </div>
        </footer>
    </>
  );
}

export default Footer;

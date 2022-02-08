import React from 'react';
import './footer.css';

function Footer() {
  return (
    <>
        <footer>
            <div className="text-center pt-3 pb-1 footer">
                <span className='h5 text-dark'>&copy; {new Date().getFullYear()} Copyright: <a href="https://www.evatech.org" className='footer-link'> Eva Technology</a>. Developed By <small className='dev-name'>Hasibul Hasan</small></span>
            </div>
        </footer>
    </>
  );
}

export default Footer;

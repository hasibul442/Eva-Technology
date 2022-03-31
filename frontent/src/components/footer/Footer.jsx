
import './footer.css';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>
        <footer className='footer'>
          <div className=' container pt-5'>
            <div className='row'>
            <div className='col-sm-4'>
              <p className='address'><i className="fad  fa-grip-vertical footer-icon "></i> EVA TECHNOLOGY</p>
              <span className='p'>We are providing the best quality of IT service across the Bangladesh and worldwide also. As an IT company we are serving web design, web development, graphics design, digital marketing, seo and many more.</span><br/>
            </div>
           

            <div className='col-sm-2'>
              <p className='address'><i className="fad  fa-grip-vertical footer-icon "></i> Company</p>
                <Link className="footer-menu-link" to='/' >Home</Link><br/>
                <Link className="footer-menu-link" to='/aboutus' >About Us</Link><br/>
                <Link className="footer-menu-link" to='/services' >Services</Link><br/>
                <Link className="footer-menu-link" to='/contactus' >Contact</Link>
            </div>
            <div className='col-sm-2'>
              <p className='address'><i className="fad  fa-grip-vertical footer-icon "></i> Business</p>
                <Link className="footer-menu-link" to='/portfolio' >Project</Link><br/>
                <Link className="footer-menu-link" to='/aboutus' >Our Team</Link><br/>
                <Link className="footer-menu-link" to='/' >Terms & Condition</Link><br/>
                <Link className="footer-menu-link" to='/' >Privacy Policy</Link>
            </div>

            <div className='col-sm-4'>
              <p className='address'><i className="fad  fa-grip-vertical footer-icon "></i> BANGLADESH OFFICE</p>
              <span className='p'><i className="fas fa-building"></i>&nbsp;Plot – 34, Sonargaon Janapath Road, Sector – 11, Uttara, Dhaka – 1230</span><br/>
              <span className='p'><i className="far fa-mobile"></i>&nbsp;<a href="tel:+8801300419612" className='tel-link'>(+880) 1300419612</a></span><br/>
              <span className='p'><i className="fas fa-envelope"></i>&nbsp;<a href="mailto:info@evatech.org" className='tel-link'>info@evatech.org</a></span><br/>
              <span className='p'><i className="fab fa-facebook"></i>&nbsp;<a target="_blank" href="https://www.facebook.com/evatechltd" className='tel-link'>Eva Technology</a></span><br/>
            </div>
            </div>
          </div>
            <div className="text-center pt-5 pb-2 copyright-text">
                <span className='h5 text-white'>&copy; {new Date().getFullYear()} Copyright <a href="https://www.evatech.org" className='footer-link'> Eva Technology</a> | Powered by Eva Technology</span>
            </div>
        </footer>
    </>
  );
}

export default Footer;

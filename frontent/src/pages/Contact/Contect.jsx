import React from 'react'
import Contact from '../../components/contect-form/Contact'

import './contect.css'

function Contect() {

  return (


    <>
        <div className='contact-bg'>
                <div>
                    <h1 className="text-center" style={{ fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif", fontSize: "50px", textTransform: "uppercase",fontWeight: "600", color:"#fff"}}>Contact Us</h1>
                    <h5 className='text-center item--title'>Contact for Premium Business Services</h5>
                    <p className='text-center item--title'>Feel free to contact with us. We are always waiting eagerly for you to help. Contact with us, discuss about your project and get the best solution from us.</p>
                </div>
        </div>
        
        <section className='contact pb-5' style={{ "backgroundColor":"#fff" }}>
            <div className='container pt-5'>
              <div className='row'>

                <div className='col-sm-6'>
                    <h2 className='text-center pt-3 pb-3 contect-text'>Request Free Consultation</h2>
                  <Contact/>
                </div>

                <div className='col-sm-2'></div>
                <div className='col-sm-4 pt-3'>
                    <p className='contect-text'>Get In Touch</p>
                    <p className='h5'>Reach Us</p>
                    <p className='p text-dark'><i className="fas fa-building"></i>&nbsp;Level-3, House-21, Road-2,
Sector-3, Uttara, Dhaka-1230</p>
                    <p className='p text-dark'><i className="far fa-mobile"></i>&nbsp;<a href="tel:+8801766946459" className='tel-link-con'>(+880) 1766946459</a></p>
                    <p className='p text-dark'><i className="fas fa-envelope"></i>&nbsp;<a href="mailto:info@evatech.org" className='tel-link-con'>info@evatech.org</a></p>
                    <p className='p text-dark'><i className="fab fa-facebook"></i>&nbsp;<a target="_blank" href="https://www.facebook.com/evatechnology2" className='tel-link-con'>Eva Technology</a></p>
                </div>

              </div>
              
            </div>
        </section>

        <div className="container mb-5 mt-5">
        <div className="card shadow-lg  border-0">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-8">
                <h2 className="text-center font-weight-bold pt-3" style={{ color:"#f60186", fontWeight:"700" }}>Would you like to start a project with us?</h2>
                <p>Feel free to contact with us. We are always waiting eagerly for you to help. Contact with us, discuss about your project and get the best solution from us.</p>
              </div>
              <div className="col-sm-4  m-auto text-center">
                <a className="btn btn-primary">+8801766946459</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contect
import React from 'react';
import Clients from '../../components/client/Clients';
import Testimonial from '../../components/testimonial/Testimonial';
import './services.css';

function Services() {
  return (
    <>
        <div className='services'>
            <div>
                <h1 className="text-center" style={{ fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif", fontSize: "50px", textTransform: "uppercase",fontWeight: "600", color:"#fff"}}>Services</h1>
                <h5 className='text-center item--title'>We provide a wide range of Services</h5>
                <p className='text-center item--title'>Make your company befitting and compatible with latest technology. We create stunning and professional business website worldwide.</p>
            </div>
        </div>

        <div className='container mb-5'>
           <h2 className='text-center pt-5' style={{ fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif", fontSize: "35px", textTransform: "uppercase",fontWeight: "600", color:"#f60186"}}>How can we help you?</h2>
           <p className='text-center'>We are offering you essential all type IT service for your business. It will <br/> take away your business in a new dimension.</p>

           <div className='row'>

             <div className='col-lg-4 mt-4'>
               <div className='card service-block border-0 shadow'>
                 <div className='card-body text-center'>
                    <i className="fad fa-brackets fa-3x" style={{ color: "#99046f" }}></i>
                    <p className='card-block-title'>Software Development</p>
                    <p className='card-block-text'>Software development relies heavily on manual processes for transforming requirements into software artifacts such as models, source code, or test cases. Requirements are the starting point for these transformations, and they are typically written in natural language.</p>
                 </div>
               </div>
             </div>

             <div className='col-lg-4 mt-4'>
               <div className='card service-block border-0 shadow'>
                 <div className='card-body text-center'>
                    <i className="fad fa-code fa-3x" style={{ color: "#99046f" }}></i>
                    <p className='card-block-title'>Web Development</p>
                    <p className='card-block-text'>Now a days, it is must need a user-freindly, responsive and dynamic website for a company/business. It represents your information and service to your customer perfectly.Our experienced and skilled web developer will develop a full functional website for you.</p>
                 </div>
               </div>
             </div>

             <div className='col-lg-4 mt-4'>
               <div className='card service-block border-0 shadow'>
                 <div className='card-body text-center'>
                    <i className="fad fa-dumpster-fire fa-3x" style={{ color: "#99046f" }}></i>
                    <p className='card-block-title'>E-Commerce Development</p>
                    <p className='card-block-text'>Now a days customers are willing to buy goods and services online and we provide E-commerce website development for companies to work efficiently. We will develop a full functional e-commerce website for you business.</p>
                 </div>
               </div>
             </div>

             <div className='col-lg-4 mt-4'>
               <div className='card service-block  border-0 shadow'>
                 <div className='card-body text-center'>
                    <i className="fad fa-bezier-curve fa-3x" style={{ color: "#99046f" }}></i>
                    <p className='card-block-title'>Graphics Design</p>
                    <p className='card-block-text'>Graphics is very important for a business to attract their customer. We feel our clients need deeply and full his/her requirement properly. We are providing graphics design services like logo design, banner design, profile creation, media cover, animation, poster design and so on.</p>
                 </div>
               </div>
             </div>

             <div className='col-lg-4 mt-4'>
               <div className='card service-block border-0 shadow'>
                 <div className='card-body text-center'>
                    <i className="fad fa-bullhorn fa-3x" style={{ color: "#99046f" }}></i>
                    <p className='card-block-title'>Digital Marketing</p>
                    <p className='card-block-text'>Digital marketing is become an great opportunity for a business to reach customer. With the help of a digital advertising company like us, you can successfully use its promotion mix and attract more clients. We will help you to get more lead.</p>
                 </div>
               </div>
             </div>




             <div className='col-lg-4 mt-4'>
               <div className='card service-block border-0 shadow'>
                 <div className='card-body text-center'>
                    <i className="fad fa-headset fa-3x" style={{ color: "#99046f" }}></i>
                    <p className='card-block-title'>Help & Support</p>
                    <p className='card-block-text'>We are always waiting eagerly for you to solve your problem. Let us know your query or problem, we will back to you as soon as possible.You will get support in 24/7 from us.</p>
                 </div>
               </div>
             </div>
           </div>
        </div>

        <Clients />
        <Testimonial />
    </>
  )
}

export default Services
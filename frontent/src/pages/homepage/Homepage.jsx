import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';


import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.green.css';

import Carousel1 from '../.././components/carousel/Carousel';

import  './homepage.css';
import Contact from '../../components/contect-form/Contact';
import Testimonial from '../../components/testimonial/Testimonial';
import Clients from '../../components/client/Clients';
import Project from '../../components/project/Project';

import  countapi  from 'countapi-js';

function Homepage() {
  AOS.init({
    duration: 800,
    delay: 200,
    mirror: true
  });

  const [countnumber, setCountnumber] = useState("");
  // let number = countnumber;
  useEffect(() => {
    countapi.update('evatech.org','evatech', 1).then(result => {
      // if(result.value >= 1000){
      //   let number = result.value / 1000;
      //   setCountnumber(parseInt(number));
      // }
      // else{
      //   let number = result.value;
      //   setCountnumber(number);
      // }
      setCountnumber(result);
    });
  }, []);
   console.log(countnumber);
  return (
    <>
    <Carousel1/>
          <section>
            <h1 className="text-center mt-5" style={{ fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif", fontSize: "50px", textTransform: "uppercase",fontWeight: "600", color:"#000"}}>Projects</h1>

            <div>
              <Project />
            </div>
          </section>
          <section className='total-count'>
              <div className='container'>
                  <div className="row pt-4">
                    <div className="p-2 col-sm-4 text-center">
                      <p className='text-white' style={{ fontSize:"100px", fontWeight:"600"}}><CountUp end={10} /></p>
                      <p className='text-white' style={{ fontSize:"24px", fontWeight:"600"}}>PROJECTS COMPLETED</p>
                    </div>
                    <div className="p-2 col-sm-4 text-center">
                      <p className='text-white' style={{ fontSize:"100px", fontWeight:"600"}}> <CountUp end={200} /></p>
                      <p className='text-white' style={{ fontSize:"24px", fontWeight:"600"}}>HAPPY CUSTOMERS</p>
                    </div>
                    <div className="p-2 col-sm-4 text-center">
                      
                        {(()=>{
                          if(countnumber.value >= 1000){
                            let number = countnumber.value / 1000;
                            return(<p className='text-white' style={{ fontSize:"100px", fontWeight:"600"}}> 
                              <CountUp end={parseInt(number)} />K</p>
                            )
                             
                          }
                          else{
                            return(<p className='text-white' style={{ fontSize:"100px", fontWeight:"600"}}> 
                              <CountUp end={parseInt(countnumber.value )} />  </p>
                            )
                          }
                        })()}
                      
                      <p className='text-white' style={{ fontSize:"24px", fontWeight:"600"}}>Visitor</p>
                    </div>
                  </div>
              </div>
          </section>

          <div className='container desktop-view'>
              <h2 className='pt-5 text-center' style={{ fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif", fontSize: "50px", textTransform: "uppercase",fontWeight: "600", color:"#000"}}>What We Provide</h2>
              <div className='solid-solution-box mx-auto'>
                <h6 className='text-center solid-solution-text-1'>Solid Solution</h6>
              </div>
              <div className='row pt-5 pb-5'>
                
                <div className='col-lg-4 pb-4' data-aos="fade-down-right">
                  <div className='card service-card'>
                    <div className='card-body'>
                      <div className='text-center'>
                        <i className="fad fa-lightbulb-on fa-3x service-icon"></i>
                      </div>
                    <p className='text-center service-name'>It Solution</p>
                    <p className='service-description'>It is vital to secure your business with a reputable IT solution services provider</p>
                    </div>
                  </div>
                </div>
                
                <div className='col-lg-4 pb-4' data-aos="fade-down">
                  <div className='card service-card'>
                    <div className='card-body'>
                      <div className='text-center'>
                        <i className="fad fa-code fa-3x service-icon"></i>
                      </div>
                    <p className="text-center service-name">Web Development</p>
                    <p className='service-description'>Responsive Web Design always plays an important role whenever going to promote your website.</p>
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 pb-4' data-aos="fade-down-left">
                  <div className='card service-card'>
                    <div className='card-body'>
                      <div className='text-center'>
                        <i className="fad fa-sitemap fa-3x service-icon"></i>
                      </div>
                    <p className="text-center service-name">Consultancy</p>
                    <p className='service-description'>As consultants, we need to be ruthless in discerning what is important and what is just noise.</p>
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 pb-4' data-aos="fade-right">
                  <div className='card service-card'>
                    <div className='card-body'>
                      <div className='text-center'>
                        <i className="fad fa-cogs fa-3x service-icon"></i>
                      </div>
                    <p className="text-center service-name">SEO Optimizition</p>
                    <p className='service-description'>It’s much easier to double your business by doubling your conversion rate than by doubling your traffic.</p>
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 pb-4' data-aos="zoom-in">
                  <div className='card service-card'>
                    <div className='card-body'>
                      <div className='text-center'>
                        <i className="fad fa-analytics fa-3x service-icon"></i>
                      </div>
                    <p className="text-center service-name">Online Marketing</p>
                    <p className='service-description'>Ignoring online marketing is like opening a business but not telling anyone.</p>
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 pb-4' data-aos="fade-left">
                  <div className='card service-card'>
                    <div className='card-body'>
                      <div className='text-center'>
                        <i className="fad fa-rocket fa-3x service-icon"></i>
                      </div>
                    <p className="text-center service-name">Boosting</p>
                    <p className='service-description'>Content builds relationships. Relationship are built on trust. Trust drives revenue.</p>
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 pb-4' data-aos="fade-up-right">
                  <div className='card service-card'>
                    <div className='card-body'>
                      <div className='text-center'>
                        <i className="fad fa-swatchbook fa-3x service-icon"></i>
                      </div>
                    <p className="text-center service-name">Creative Design</p>
                    <p className='service-description'>Design can be art. Design can be simple. That’s why it’s so complicated.</p>
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 pb-4' data-aos="fade-up">
                  <div className='card service-card'>
                    <div className='card-body'>
                      <div className='text-center'>
                        <i className="fad fa-shopping-basket fa-3x service-icon"></i>
                      </div>
                    <p className="text-center service-name">E-Commerce</p>
                    <p className='service-description'>Ecommerce isn’t the cherry on the cake, it’s the new cake.</p>
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 pb-4' data-aos="fade-up-left">
                  <div className='card service-card'>
                    <div className='card-body'>
                      <div className='text-center'>
                        <i className="fad fa-atom-alt fa-3x service-icon"></i>
                      </div>
                    <p className="text-center service-name">Custom Software</p>
                    <p className='service-description'>Customization Is expensive but it make your system difference.</p>
                    </div>
                  </div>
                </div>

              </div>
          </div>

          <div className='container'>
              <div className='mobile-view'>
              <h2 className='pt-5 text-center' style={{ fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif", fontSize: "50px", textTransform: "uppercase",fontWeight: "600", color:"#000"}}>What We Provide</h2>
              <div className='solid-solution-box mx-auto'>
                <h6 className='text-center solid-solution-text-1'>Solid Solution</h6>
              </div>
              <div className='row pt-5 pb-5'>
                
                <Swiper>
                      <SwiperSlide>
                        <div className='col-lg-4 pb-4'>
                          <div className='card service-card'>
                            <div className='card-body'>
                              <div className='text-center'>
                                <i className="fad fa-lightbulb-on fa-3x service-icon"></i>
                              </div>
                            <p className='text-center service-name'>It Solution</p>
                            <p className='service-description'>It is vital to secure your business with a reputable IT solution services provider</p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className='col-lg-4 pb-4'>
                          <div className='card service-card'>
                            <div className='card-body'>
                              <div className='text-center'>
                                <i className="fad fa-code fa-3x service-icon"></i>
                              </div>
                            <p className="text-center service-name">Web Development</p>
                            <p className='service-description'>Responsive Web Design always plays an important role whenever going to promote your website.</p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className='col-lg-4 pb-4'>
                          <div className='card service-card'>
                            <div className='card-body'>
                              <div className='text-center'>
                                <i className="fad fa-sitemap fa-3x service-icon"></i>
                              </div>
                            <p className="text-center service-name">Consultancy</p>
                            <p className='service-description'>As consultants, we need to be ruthless in discerning what is important and what is just noise.</p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className='col-lg-4 pb-4'>
                          <div className='card service-card'>
                            <div className='card-body'>
                              <div className='text-center'>
                                <i className="fad fa-cogs fa-3x service-icon"></i>
                              </div>
                            <p className="text-center service-name">SEO Optimizition</p>
                            <p className='service-description'>It’s much easier to double your business by doubling your conversion rate than by doubling your traffic.</p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      
                      <SwiperSlide>
                        <div className='col-lg-4 pb-4'>
                          <div className='card service-card'>
                            <div className='card-body'>
                              <div className='text-center'>
                                <i className="fad fa-analytics fa-3x service-icon"></i>
                              </div>
                            <p className="text-center service-name">Online Marketing</p>
                            <p className='service-description'>Ignoring online marketing is like opening a business but not telling anyone.</p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className='col-lg-4 pb-4'>
                          <div className='card service-card'>
                            <div className='card-body'>
                              <div className='text-center'>
                                <i className="fad fa-rocket fa-3x service-icon"></i>
                              </div>
                            <p className="text-center service-name">Boosting</p>
                            <p className='service-description'>Content builds relationships. Relationship are built on trust. Trust drives revenue.</p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className='col-lg-4 pb-4'>
                          <div className='card service-card'>
                            <div className='card-body'>
                              <div className='text-center'>
                                <i className="fad fa-swatchbook fa-3x service-icon"></i>
                              </div>
                            <p className="text-center service-name">Creative Design</p>
                            <p className='service-description'>Design can be art. Design can be simple. That’s why it’s so complicated.</p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      
                      <SwiperSlide>
                      <div className='col-lg-4 pb-4'>
                        <div className='card service-card'>
                          <div className='card-body'>
                            <div className='text-center'>
                              <i className="fad fa-shopping-basket fa-3x service-icon"></i>
                            </div>
                          <p className="text-center service-name">E-Commerce</p>
                          <p className='service-description'>Ecommerce isn’t the cherry on the cake, it’s the new cake.</p>
                          </div>
                        </div>
                      </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className='col-lg-4 pb-4'>
                          <div className='card service-card'>
                            <div className='card-body'>
                              <div className='text-center'>
                                <i className="fad fa-atom-alt fa-3x service-icon"></i>
                              </div>
                            <p className="text-center service-name">Custom Software</p>
                            <p className='service-description'>Customization Is expensive but it make your system difference.</p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                </Swiper>
              </div>
              </div>
          </div>

          <section className="container-xl-12 ">
              <div className='about-us'>
                  <div className='card-body'>
                    <h2 className='pt-5 text-center text-light' style={{ fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif", fontSize: "50px", textTransform: "uppercase",fontWeight: "600", color:"#fff"}}>About Us</h2>
                    <div className='row pt-5'>
                      <div className='col-md-6 '>
                        <div className='text-center'>
                          <img src="about/about-img.png" className='img-fluid w-50'/>
                        </div>
                      </div>
                      <div className='col-md-6 text-light'>
                        <p>Eva Technology was established in 2021 by a team of young expert software professionals. Eva Technology is the fastest growing IT company in Bangladesh. Consistently delivering mission, our team has been delivering technically challenging projects under tight timelines, while also providing exceptional customer service and support to our clientele. This in turn has led to extremely positive long-term working relationships all over. Our detailed project process was created to ensure our projects are completed on-time, in-budget, and to the client’s complete satisfaction.</p>
                        <p>Eva Technology is a customized software service firm located in Dhaka, Bangladesh. We have extensive experience in many diverse areas of software development. Our experienced staff of professionals has worked with a wide array of platforms, languages, and tools in the course of our various projects.</p>
                        
                      </div>
                    </div>
                  </div>
              </div>
          </section>

          <section className="container">
                <h2 className='pt-5 text-center why-hire-headline' style={{ fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif", fontSize: "50px", textTransform: "uppercase",fontWeight: "600", color:"#000"}}>Why You Should Hire Us?</h2>
                <div className='row pt-5'>

                  <div className='col-md-3 pb-4'>
                    <div className='card border-0 why-hire-card shadow-lg pt-2'>
                      <div className='card-body'>
                        <div className='text-center'>
                          <img src="why-hire/certificate.png" className='why-hire-image img-fluid' alt="Long Experience"/>
                        </div>
                        <br/>
                        <h4 className='text-center why-hire-text'>Long Experience</h4>
                      </div>
                    </div>
                  </div>

                  <div className='col-md-3 pb-4'>
                    <div className='card border-0  shadow-lg why-hire-card pt-2'>
                      <div className='card-body'>
                        <div className='text-center'>
                          <img src="why-hire/focus.png" className='why-hire-image img-fluid' alt="Long Experience"/>
                        </div>
                        <br/>
                        <h4 className='text-center why-hire-text'>Focus On Results</h4>
                      </div>
                    </div>
                  </div>

                  <div className='col-md-3 pb-4'>
                    <div className='card border-0 shadow-lg why-hire-card pt-2'>
                      <div className='card-body'>
                        <div className='text-center'>
                          <img src="why-hire/manager.png" className='why-hire-image img-fluid' alt="Long Experience"/>
                        </div>
                        <br/>
                        <h4 className='text-center why-hire-text'>Run Technical Audit</h4>
                      </div>
                    </div>
                  </div>

                  <div className='col-md-3 pb-4'>
                    <div className='card border-0 shadow-lg why-hire-card pt-2'>
                      <div className='card-body'>
                        <div className='text-center'>
                          <img src="why-hire/rocket.png" className='why-hire-image img-fluid' alt="Long Experience"/>
                        </div>
                        <br/>
                        <h4 className='text-center why-hire-text'>Fast Delivery</h4>
                      </div>
                    </div>
                  </div>

                  <div className='col-md-3 pb-4'>
                    <div className='card border-0 shadow-lg why-hire-card pt-2'>
                      <div className='card-body'>
                        <div className='text-center'>
                          <img src="why-hire/satisfied.png" className='why-hire-image img-fluid' alt="Long Experience"/>
                        </div>
                        <br/>
                        <h4 className='text-center why-hire-text'>Satisfied Guarantee</h4>
                      </div>
                    </div>
                  </div>

                  <div className='col-md-3 pb-4'>
                    <div className='card border-0 shadow-lg why-hire-card pt-2'>
                      <div className='card-body'>
                        <div className='text-center'>
                          <img src="why-hire/support.png" className='why-hire-image img-fluid' alt="Long Experience"/>
                        </div>
                        <br/>
                        <h4 className='text-center why-hire-text'>Quick Support</h4>
                      </div>
                    </div>
                  </div>

                  <div className='col-md-3 pb-4'>
                    <div className='card border-0 shadow-lg why-hire-card pt-2'>
                      <div className='card-body'>
                        <div className='text-center'>
                          <img src="why-hire/technical-support.png" className='why-hire-image img-fluid' alt="Long Experience"/>
                        </div>
                        <br/>
                        <h4 className='text-center why-hire-text'>Highly Professional</h4>
                      </div>
                    </div>
                  </div>

                  <div className='col-md-3 pb-4'>
                    <div className='card border-0 shadow-lg why-hire-card pt-2'>
                      <div className='card-body'>
                        <div className='text-center'>
                          <img src="why-hire/web-design.png" className='why-hire-image img-fluid' alt="Long Experience"/>
                        </div>
                        <br/>
                        <h4 className='text-center why-hire-text'>Excellent UI-UX</h4>
                      </div>
                    </div>
                  </div>

                </div>
          </section>

          <div>
            <Clients />
          </div>

          <div>
            <Testimonial/>
          </div>


          <section className='contact' style={{ "backgroundColor":"#fff" }}>
            <div className='container pt-5'>
              <div className='row'>
                <div className='col-sm-6 my-auto'>
                  <p className='contact-headline text-center'>Contact</p>
                  <p className='text-center'>How we can help you. We like to talk and on the strength of that you are invited for a coffee at our head office.</p>
                </div>

                <div className='col-sm-6'>

                  <Contact />
                </div>
              </div>
              
            </div>
          </section>

    </>
  );
}

export default Homepage;

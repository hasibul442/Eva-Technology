import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Carousel1 from '../.././components/carousel/Carousel';
// import Footer from '../.././components/footer/Footer';
// import Navbar from "../.././components/navbar/Navbar";

import  './homepage.css';

function Homepage() {
  AOS.init({
    duration: 800,
    delay: 200,
    mirror: true
  });
  return (
    <>
    <Carousel1/>
      <div className='container desktop-view'>
              <h2 className='pt-5 text-center'>What We Provide</h2>
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
              <h2 className='pt-5 text-center'>What We Provide</h2>
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
                    <h2 className='pt-5 text-center text-light'>About Us</h2>
                    <div className='row pt-5'>
                      <div className='col-md-6 '>
                        <div className='text-center'>
                          <img src="about/about-img.png" className='img-fluid w-50'/>
                        </div>
                      </div>
                      <div className='col-md-6 text-light'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <ul>
                          <li>We are proud ourselves in existing the way of the ICT & Power Distributor in the market</li>
                          <li>We are always looking out for new and exciting products to presence ourselves on the Bangladesh market.</li>
                          <li>Managed and marketed by personal experienced in the ICT field for a decade we feel we can achieve our goal of being a reliable and trustworthy partner to our clients and fellow ICT vendors.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
              </div>
          </section>

          <section className="container">
                <h2 className='pt-5 text-center why-hire-headline'>Why You Should Hire Us?</h2>
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
    </>
  );
}

export default Homepage;

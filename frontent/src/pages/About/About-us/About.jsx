import React from 'react'
import  './about.css';
// import  './about.sass';
function About() {
  return (

    <>
        <div className='about-us-qutaion'>
            <div>
                <h2 className="text-center item--title">About Us</h2>
                <h5 className='text-center item--title'>Welcome to The Digital Agency</h5>
                <p className='text-center item--title'>Make your company befitting and compatible with latest technology. We create stunning and professional business website worldwide.</p>
            </div>
        </div>

        <div className='container'>
          <div className='row mission-block'>
            <div className='col-md-4 mt-1'>
              <div className='card mission-block-card'>
                <div className='card-body shadow'>
                  <h1 className='text-center mission-text pt-4'><i className="fad fa-ball-pile text-danger"></i> Who Are We</h1><br/>
                  <p className='text-justify '>Eva Technology is a customized software service firm located in Dhaka, Bangladesh. We have extensive experience in many diverse areas of software development. Our experienced staff of professionals has worked with a wide array of platforms, languages, and tools in the course of our various projects.</p>
                </div>
              </div>
            </div>

            <div className='col-md-4 mt-1'>
              <div className='card mission-block-card'>
                <div className='card-body shadow'>
                  <h1 className='text-center mission-text pt-4'><i className="fad fa-ball-pile text-danger"></i> Our Mission</h1><br/>
                  <p className='text-justify '>Provide cost-effective high quality innovative solution & services, powered by state of the art technologies, anchored on our basic principles of:</p>
                    <ul>
                      <li>Explore</li>
                      <li>Innovate</li>
                      <li>Improve</li>
                    </ul>
                  {/* <p>The strong R&D team of Eva Technology is constantly working to upgrade existing solutions and develop new products. Eva Technology is transparent and accountable to customers, shareholders, partners, and employees and strives to deliver on commitments and results</p> */}
                </div>
              </div>
            </div>

            <div className='col-md-4 mt-1'>
              <div className='card mission-block-card'>
                <div className='card-body shadow'>
                  <h1 className='text-center mission-text pt-4'><i className="fad fa-ball-pile text-danger"></i> What We Do</h1><br/>
                  {/* <p className='text-justify '>Eva Technology is a customized software service firm located in Dhaka, Bangladesh. We have extensive experience in many diverse areas of software development. Our experienced staff of professionals has worked with a wide array of platforms, languages, and tools in the course of our various projects.</p> */}
                  <ul>
                      <li>Web Apps Development</li>
                      <li>Digital Marketing</li>
                      <li>Web Design</li>
                      <li>Ecommerce Development</li>
                      <li>SEO</li>
                      <li>Tech Support</li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='company-info'>
            <p className='h1 text-center pt-5 text-light' style={{ fontWeight:"700" }}>Company Background</p>
            <div className='container pb-5'>
              <div className='row'>
                <div className='col-sm-6'>
                    <img src='/about/info.png' className='img-fluid' alt='information' style={{ width:'100%' }}/>
                </div>
                <div className='col-sm-6 my-auto'>
                    <p style={{ color:'#fff', fontSize:'18px' }}>Eva Technology was established in 2021 by a team of young expert software professionals. Eva Technology is the fastest growing IT company in Bangladesh. Consistently delivering mission, our team has been delivering technically challenging projects under tight timelines, while also providing exceptional customer service and support to our clientele. This in turn has led to extremely positive long-term working relationships all over. Our detailed project process was created to ensure our projects are completed on-time, in-budget, and to the client’s complete satisfaction.</p>
                </div>
              </div>
            </div>
        </div>

        <div className='mt-4'>
            <p className='h1 text-center pt-5' style={{ fontWeight:"700" }}>Exprience</p>
            <div className='container pb-5'>
              <div className='row'>
                <div className='col-sm-6 my-auto'>
                    <p style={{ color:'#000', fontSize:'18px' }}>Dynamic...As a custom software development firm, Eva Technology has amassed an impressive resume of projects. It’s the custom nature of our development projects that has enabled Eva Technology to acquire vast experience in many diverse areas of software development. Our experience, in conjunction with our quality personnel, enables Eva Technology to be dynamic enough to tackle almost any software development project. Eva Technology has a proud history of utilizing experience to provide their clients with the best services possible. This difficult task is accomplished by applying experienced personnel to every project. Eva Technology was founded on the principle of gathering an elite group of software engineers and professionals, and leveraging their collective abilities. Naturally, each of these "producers" bring their own particular specialization and experience to the table. Once they join the Eva Technology team, we cross-train our consultants to diversify and increase their overall skills. The result for our clients, is a group of individuals that can genuinely contribute and have a positive impact on development projects.
                      
                      No matter what your development challenge is! Eva Technology consultants are a valuable resource to handle it.
                    </p>
                </div>
                <div className='col-sm-6 my-auto'>
                    <img src='/about/exprience.png' className='img-fluid' alt='information' style={{ width:'100%' }}/>
                </div>
              </div>
            </div>
        </div>

        {/* <div className='team-member'>
          <div className='container pt-5'>
            <p className='h1 text-center' style={{ fontWeight:"700" }}>Our Team Member</p>
            <p className='text-center'>Some of our talented, skilled and experienced it expert. They are our dedicated member of Eva Technology.</p>

            <div className="col-md-4 profile-pic text-center">
                <div className="img-box">
                    <img src="/about/info.png" className="img-fluid"/>
                      <ul>
                        <a href="#">
                          <li><i className="fab fa-facebook"></i></li>
                        </a>
                        <a href="#">
                          <li><i className="fab fa-twitter"></i></li>
                        </a>
                        <a href="#">
                          <li><i className="fab fa-linkedin"></i></li>
                        </a>
                      </ul>
                </div>
                <h2>Evana Jahan </h2>
                <h3>Founder / CEO</h3>
            </div>
            </div>
        </div> */}

        <div>
          <div className='container pt-5 mb-5'>
            <div className='row'>
              <div className='col-sm-6'>
                <img src='/about/whyus.png' className='img-fluid' alt='information'/>
              </div>
              <div className='col-sm-6 my-auto'>
                <p className='h1 text-center' style={{ color:"#f60186", fontWeight:"700" }}>Why Choose Us?</p>
                <p className='text-center'>We know when you face any problem you want to solve it as soon as possible. Therefor, will try our best to support you when you want.</p><br/>
                
                <div className='card shadow'>
                  <div className='card-body'>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Best Quality Designs
                          </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Quality is our agreement. Better quality bring big change of a company. We are always updated to latest technology.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            24x7 Live Support
                          </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Let me know what problem are you facing immediately. We will response you as soon as possible. You can contact us 7 days in a week, 24 hours in a day that means all time. Feel free and comfortable to contact us.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Result Oriented Projects
                          </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">We are promised to deliver you a outcome as your demand. You will pay us according to our result after completing the project successfully. </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFour">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            Experienced Professionals
                          </button>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">You haven’t to worry about our experience and quality. You can fully rely on our service for a better future of your company or business.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFive">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                            Support after service
                          </button>
                        </h2>
                        <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">You haven’t to worry about our experience and quality. You can fully rely on our service for a better future of your company or business.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
    </>
  )
}

export default About
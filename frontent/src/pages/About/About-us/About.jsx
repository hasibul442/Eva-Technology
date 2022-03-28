import React from 'react'
import  './about.css';
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
            <p className='h1 text-center pt-5 text-light'>Company Background</p>
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
            <p className='h1 text-center pt-5'>Exprience</p>
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

        <div className='team-member'>
          <div className='container pt-5'>
            <h2 className='text-center'>Our Team Member</h2>
            <p className='text-center'>Some of our talented, skilled and experienced it expert. They are our dedicated member of Eva Technology.</p>
          </div>
        </div>

        <div>
          <div className='container pt-5 mb-5'>
            <div className='row'>
              <div className='col-sm-6'>
                <img src='/about/whyus.png' className='img-fluid' alt='information'/>
              </div>
              <div className='col-sm-6 my-auto'>
                <div id="accordion">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Collapsible Group Item #1
                        </button>
                      </h5>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                      <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Collapsible Group Item #2
                        </button>
                      </h5>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                      <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Collapsible Group Item #3
                        </button>
                      </h5>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                      <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
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
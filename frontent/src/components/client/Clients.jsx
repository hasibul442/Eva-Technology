import React from 'react'
import OwlCarousel from 'react-owl-carousel2';

function Clients() {
  const options = {
    loop:true,
    autoplay: true,
    nav:true,
    margin:100,
    smartSpeed:2000,
    responsive: {
      0: {
        items: 1,
        
      },
      480: {
        items: 2,
      },
      990: {
        items: 3,
      },
    }
    
  };
  return (
    <>
        <section className='Our-Customer mt-5' style={{ "backgroundColor":"#fff" }}>
            <div className='container pt-5'>
              <h2 className='text-center'>Our Customers</h2>
              <p className='text-center'>Few of the companies who get our services are showing here. <br/>A lot of company have worked with us like this.</p>

              <OwlCarousel options={options}>

                  <div className=" card border-0">
                    <div className="card-body text-center">
                       <div className='p-5'>
                          <img src= "client/army.png" className=' client-img ' alt="Client" data-toggle="tooltip" data-placement="top" title="Jessore Cantonment" />
                       </div>
                    </div>
                  </div>
                  <div className="card border-0">
                    <div className="card-body text-center">
                      <div className='p-5'>
                        <img src= "client/cccc.png" className=' client-img ' alt="Client" data-toggle="tooltip" data-placement="top" title="China Communiction Construct Company" />
                      </div>
                    </div>
                  </div>
                  <div className="card border-0">
                    <div className="card-body text-center">
                      <div className='p-5'>
                        <img src= "client/OSL.png" className=' client-img ' alt="Client" data-toggle="tooltip" data-placement="top" title="OSL-KNS Group" />
                      </div>  
                    </div>
                  </div>
              

              </OwlCarousel>
            </div>
          </section>
    </>
  )
}

export default Clients
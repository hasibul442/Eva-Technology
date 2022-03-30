import React from 'react'
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.green.css';

function Testimonial() {
    const options1 = {
        loop:true,
        autoplay: true,
        smartSpeed:2000,
        responsive: {
          0: {
            items: 1, 
          },
          480: {
            items: 1,
          },
          990: {
            items: 1,
          },
        }
        
      };
  return (
    <>
        <section className='testimonial mt-5'>
            <div className='container p-5'>
              <OwlCarousel options={options1}>

                  <div>
                    <div className="text-center">
                        <h3 className='text-center'>"Amazing Designs and Quality Work!"</h3>
                        <p>Great work from Eva Technology, I am so amazed with their service.<br/> I am grateful to them. They have provided quality work for us. I will recommended to other for getting best IT service.<br/> People can choose Eva Technology doubtfully for their it solution.</p>
                        <h4 style={{ "color": "#1414ef" }}>Mohammad Mahbub Hassan</h4>
                        <h6 style={{ "color": "#f60186" }}>"Chairman of OSL-KNS Group"</h6>
                    </div>
                  </div>
              
                  <div>
                    <div className="text-center">
                        <h3 className='text-center'>"Great Service"</h3>
                        <p>Very good experience with Eva Technology. So impress by reactivity and the website result. He took time to understand my request and was really reactive.<br/> I will definitely recommend Eva Technology to my friend. Thanks a lot, you made my day.</p>
                        <h4 style={{ "color": "#1414ef" }}>17BIR (Bangladesh Infantry Regiment) </h4>
                        <h6 style={{ "color": "#f60186" }}>"Jessore Cantonment, Jessore"</h6>
                    </div>
                  </div>
              

              </OwlCarousel>
            </div>
          </section>
    </>
  )
}

export default Testimonial
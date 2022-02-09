import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel} from 'react-responsive-carousel';
import './carousel.css'


function Carousel1() {
  return (
      <>
        <Carousel 
            autoPlay = {true}
            infiniteLoop = {true}
            showStatus = {false}
            showThumbs= {false}
            stopOnHover= {false}
            interval = { 5000 }
            >
                <div>
                    <div className="effect effect-one">
                    <img src="carousel-image/1.jpg" className='carousel-image img-fluid' alt="Image One"/>
                    <div className="tab-text">
                        <h2 className='slider-1-text slider-1-text-1' >Grow You Business With </h2>
                        <h2 className='slider-1-text' style={{ color:'#f60186' }}>EVA TECHNOLOGY</h2>
                        <p>We Work With <br/> Latest Technologies To Accelerate <br/> Your Digital Transformation </p>
                    </div>
                    </div>
                </div>
                <div>
                    <div className="effect effect-two">
                    <img src="carousel-image/2.jpg" className='carousel-image img-fluid'/>
                    <div className="tab-text">
                        <h2 className="slider-2-text">We Make <br/>Secure System</h2>
                        <p >We provide reasonably secure software from unauthorized access</p> 
                    </div>
                    </div>
                </div>

              
                <div>
                    <div className="effect effect-3 effect-lexi">
                    <img src="carousel-image/3.jpg" className='carousel-image img-fluid'/>
                    <div className="tab-text">
                        <h2 className="slider-3-text">Responsive Design</h2>
                        <p >We provide reasonably secure software from unauthorized access</p> 
                    </div>
                    </div>
                </div>

                <div>
                    <div className="effect effect-4 effect-moses">
                    <img src="carousel-image/5.jpg" className='carousel-image img-fluid'/>
                    <div className="tab-text">
                        <h2 className="slider-4-text">Custom Design Application</h2>
                        <p >We provide reasonably secure software from unauthorized access</p> 
                    </div>
                    </div>
                </div>
        </Carousel>
      </>
  );
}

export default Carousel1;

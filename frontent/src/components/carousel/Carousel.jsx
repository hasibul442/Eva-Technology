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
                    <img src="carousel-image/1.jpg" className='carousel-image'/>
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="carousel-image/2.jpg" className='carousel-image'/>
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="carousel-image/3.jpg" className='carousel-image'/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
        </Carousel>
      </>
  );
}

export default Carousel1;

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
            interval = { 10000 }
            >
                <div>
                    <div className="effect grid-width8 effect-six">
                    <img src="carousel-image/1.jpg" className='carousel-image' alt="Image One"/>
                    <div className="tab-text">
                        <h2>grid column 8</h2>
                        <p>Era of modern design </p>
                        {/* <div className="icons-block"> <a href="#" className="social-icon-1"><i className="fa fa-facebook-official"></i></a> <a href="#" className="social-icon-2"><i className="fa fa-twitter-square"></i></a> <a href="#" className="social-icon-3"><i className="fa fa-youtube-square"></i></a> </div> */}
                    </div>
                    </div>
                </div>
                <div>
                    <div className="effect grid-width8 effect-six">
                    <img src="carousel-image/2.jpg" className='carousel-image'/>
                    <div className="tab-text">
                        <h2>grid column 8</h2>
                        <p>Era of modern design </p>
                        {/* <div className="icons-block"> <a href="#" className="social-icon-1"><i className="fa fa-facebook-official"></i></a> <a href="#" className="social-icon-2"><i className="fa fa-twitter-square"></i></a> <a href="#" className="social-icon-3"><i className="fa fa-youtube-square"></i></a> </div> */}
                    </div>
                    </div>
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

import React from 'react';
import { Carousel } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel} from 'react-responsive-carousel';
import './carousel.css'


function Carousel1() {
  return (
      <>
        <Carousel>
            <Carousel.Item>
                <img src="/carousel-image/1.jpg" className='d-block w-100 img-fluid' style={{ height: "500px" }} alt="Banner Image 1"/>
                <Carousel.Caption>
                    <h2 className='slider-1-text slider-1-text-1' >Grow You Business With </h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="carousel-image/2.jpg" className='d-block w-100 img-fluid' style={{ height: "500px" }} alt="Banner Image 2"/>
                <Carousel.Caption>
                    <h2 className='slider-1-text slider-1-text-1' >Grow You Business With 1</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="carousel-image/3.jpg" className='d-block w-100 img-fluid' style={{ height: "500px" }} alt="Banner Image 3"/>
                <Carousel.Caption>
                    <h2 className='slider-1-text slider-1-text-1' >Grow You Business With 2</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="carousel-image/4.jpg" className='d-block w-100 img-fluid' style={{ height: "500px" }} alt="Banner Image 4"/>
                <Carousel.Caption>
                    <h2 className='slider-1-text slider-1-text-1' >Grow You Business With 3</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="carousel-image/5.jpg" className='d-block w-100 img-fluid' style={{ height: "500px" }} alt="Banner Image 5"/>
                <Carousel.Caption>
                    <h2 className='slider-1-text slider-1-text-1' >Grow You Business With 4</h2>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      </>
  );
}

export default Carousel1;

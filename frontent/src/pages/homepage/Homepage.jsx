import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carousel1 from '../.././components/carousel/Carousel';
import Footer from '../.././components/footer/Footer';
import Navbar from "../.././components/navbar/Navbar";

function Homepage() {
  return (
    <>
      <Router>
          <Navbar />
          <Routes>
            <Route path='/' exact/>
          </Routes>
          <Carousel1 />
          <Footer/>
      </Router>
    </>
  );
}

export default Homepage;

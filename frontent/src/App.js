import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Carousel1 from './components/carousel/Carousel';
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Router>
          <Navbar />
          <Routes>
            <Route path='/' exact/>
          </Routes>
          <Carousel1 />
      </Router>
      
      
    </>
  );
}

export default App;

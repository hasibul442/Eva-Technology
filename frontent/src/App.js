import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import Footer from './components/footer/Footer';
import Navbar from "./components/navbar/Navbar";
import Project from './pages/projects/Project';
import Services from './pages/Services/Services';
import About from './pages/About/About-us/About';

function App() {
  return (
    <>
         <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
          

          
          <Footer/>
      </Router>
      
      
      
    </>
  );
}

export default App;

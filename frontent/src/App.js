import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import Footer from './components/footer/Footer';
import Navbar from "./components/navbar/Navbar";
import Project from './pages/projects/Project';
import Services from './pages/Services/Services';
import About from './pages/About/About-us/About';
import Contect from './pages/Contact/Contect';
import Document from './pages/projects/Document';
import Laboratory from './pages/projects/Laboratory';
import Hospital from './pages/projects/Hospital';
import Canteen from './pages/projects/Canteen';
import Accounts from './pages/projects/Accounts';
import WebDevelopment from './pages/projects/WebDevelopment';
import Ecommerce from './pages/projects/Ecommerce';
import Pharmacy from './pages/projects/Pharmacy';

function App() {
  return (
    <>
         <Router basename = {process.env.PUBLIC_URL}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contactus" element={<Contect />} />
            <Route path="/document" element={<Document />} />
            <Route path="/laboratory" element={<Laboratory />} />
            <Route path="/hospital" element={<Hospital />} />
            <Route path="/canteen" element={<Canteen />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/webdevelopment" element={<WebDevelopment />} />
            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route path="/pharmacy" element={<Pharmacy />} />
          </Routes>
          

          
          <Footer/>
      </Router>
      
      
      
    </>
  );
}

export default App;

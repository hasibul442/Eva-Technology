import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Router>
          <Navbar />
          <Routes>
            <Route path='/' exact/>
          </Routes>
      </Router>
      
      
    </>
  );
}

export default App;

import './App.css';
import React from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/inc/Navbar';
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';

function App() {
  return (

      <div>
        <Navbar></Navbar>
          <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          </Routes>
      </div>
  );
}

export default App;

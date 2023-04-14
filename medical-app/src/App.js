import './App.css';
import React, { useState } from "react";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/inc/Navbar';
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import { Register } from './components/pages/Register';
import { Login } from './components/pages/Login';

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    

      <div>
        <Navbar></Navbar>
          <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/register" element={<Register onFormSwitch={toggleForm}/>}/>
          <Route path="/login" element={<Login onFormSwitch={toggleForm}/>}/>
          </Routes>
      </div>
  );
}

export default App;

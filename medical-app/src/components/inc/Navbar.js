import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" class="navbar-brand">ATU Medical</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
            <Link to="/home" class="nav-link active">Home</Link>
            </li>
            <li class="nav-item">
            <Link to="/about" class="nav-link active">About</Link>
            </li>
            <li class="nav-item">
            <Link to="/contact" class="nav-link active">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
      
    );

}

export default Navbar;
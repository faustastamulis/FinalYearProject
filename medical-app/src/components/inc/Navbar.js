import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <body>
      <header>
      <a class="logo" href="/home"><img src={require('../images/logo.png') }/></a>
        <nav>
          <ul class="nav__links">
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <a class="cta" href="/login">Login</a>
      </header>
    </body>

  );

}

export default Navbar;
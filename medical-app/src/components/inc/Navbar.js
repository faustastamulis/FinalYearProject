import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <body>
      <header>
        <nav>
          <ul class="nav__links">
          <Link to="/home" class="navbar__brand">ATU Medical</Link>
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
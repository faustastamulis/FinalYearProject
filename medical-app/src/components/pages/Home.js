import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';


function Home() {
    return (
        <body className='homebody'>
            <div className="homecontainer">
                <h1 className='homeh1'>Welcome to ATU Medical</h1>
                <h3 className='homeh3'>Here we make booking appointments easy</h3>
                <br />
                <div className='started__btn'>
                <Link to="/register">
                    <button className='homebutton'>Lets get started</button>
                </Link>
                </div>
                <br />
                <div className='about__btn'>
                <Link to="/about">
                    <button className='homebutton'>More About Us</button>
                </Link>
                </div>
                <br />
            </div>
        </body>
    );
}

export default Home;
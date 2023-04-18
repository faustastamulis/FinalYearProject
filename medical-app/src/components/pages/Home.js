import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';


function Home() {
    return (
        <body className='homebody'>
            <Container className='homecontainer'>
            <h1 className='homeh1'>Welcome to ATU Medical</h1>
            <h3 className='homeh3'>Here we make booking appointments easy</h3>
            <br />
            <Link to="/register">
                <button className='homebutton'>Lets get started</button>
            </Link>
            <br />
            <Link to="/about">
                <button className='homebutton'>More About Us</button>
            </Link>
            <br />
            </Container>
        </body>
    );
}

export default Home;
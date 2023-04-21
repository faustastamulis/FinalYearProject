import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { RegisterButton } from "../Styles/RegisterStyles";
import { Container } from "react-bootstrap";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <body className="body__class">
            <Container className="container__class">
            <h2 style={{ color: "#FFFF" }}>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email" style={{color: "white"}}>Email </label>
                <br />
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <br/>
                <label htmlFor="password" style={{color: "white"}} >Password </label>
                <br />
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <br/>
                <RegisterButton type="submit">Log In</RegisterButton>     
            </form>
            <h6 style={{color: "white"}}>Don't have an account? </h6>
            <Link to="/register">
            <RegisterButton className="link-btn" onClick={() => props.onFormSwitch('register')}>Register here</RegisterButton>
            </Link>
            </Container>
        </body>

    )
}

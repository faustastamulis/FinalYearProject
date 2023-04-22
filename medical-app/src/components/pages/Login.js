import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { RegisterButton } from "../Styles/RegisterStyles";
import { Container } from "react-bootstrap";
import { message } from "antd";
import {bcrypt} from "bcryptjs";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const bcrypt = require('bcryptjs');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email);

        const response = await fetch(
            'http://localhost:5000/login', {
                method: "post",
                body: JSON.stringify({email, pass}),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            })

            const data = await response.json()

            if (data.user) {
                localStorage.setItem('token', data.user)
                message.success("Login Successfully");
                window.location.href = '/main'
            } else {
                message.error('Please check your username and password')
            }
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

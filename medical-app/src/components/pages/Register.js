import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { RegisterButton} from "../Styles/RegisterStyles";
import {body} from "../Styles/style.css"
import { Container } from "react-bootstrap";


export const Register = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        let result = await fetch(
            'http://localhost:5000/register', {
                method: "post",
                body: JSON.stringify({ name, email, pass }),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            })

            if (result.status === 200) {
                try {
                  const data = await result.json();
                  console.warn(data);
                  alert("User registered successfully");
                  setEmail("");
                  setName("");
                  setPass("");
                } catch (e) {
                  console.error(e);
                  alert("This email is already registered");
                }
              } else {
                const errorText = await result.text();
                console.error(errorText);
                alert("Something went wrong");
              }
    }

    return (
            <body>
            <Container className="container__class">
            <h2 style={{ color: "#FFFF" }}> Registeration</h2>
            <h4>Please enter your details bellow</h4>
            <form className="register-form">
            <label htmlFor="name" style={{ color: "#FFF" }}>Full name</label>
            <br />
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
            <br />
            <label htmlFor="email" style={{ color: "#FFF" }}>Email</label>
            <br />
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <br />
            <label htmlFor="password" style={{ color: "#FFF" }}>Password</label>
            <br />
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <br />
            
                <RegisterButton type="submit" onClick={handleSubmit}>Register</RegisterButton>
           
            
            </form>
            <h6>Already have an account?</h6>
                <Link to="/login">
                    <RegisterButton className="link-btn" onClick={() => props.onFormSwitch('login')}
                    >Login</RegisterButton>
                </Link>   
                </Container>
            </body> 
        
    )
}
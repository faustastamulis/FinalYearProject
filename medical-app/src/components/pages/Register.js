import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { RegisterButton} from "../Styles/RegisterStyles";
import {body} from "../Styles/style.css"


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    
    return (
            <body>
            <h2 style={{ color: "#FFFF" }}> Registeration</h2>
            <h4>Please enter your details bellow</h4><form className="register-form" onSubmit={handleSubmit}>
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
            <Link to="/login">
                <RegisterButton type="submit">Register</RegisterButton>
            </Link>
            
            </form>
            <h6>Already have an account?</h6>
                <Link to="/login">
                    <RegisterButton className="link-btn" onClick={() => props.onFormSwitch('login')}
                    >Login</RegisterButton>
                </Link>   
            </body> 
        
    )
}
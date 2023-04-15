import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
import { RegisterButton } from "../Styles/RegisterStyles";

const Result =() =>{
    return(
        <p>Your message has been successfully sent, i will contact you soon</p>
    );
};

function Contactus(){
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xwgkduk','template_2jhts3k', form.current, 'Gs61jmlte3x240L58')
        .then((response) => {
           console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
           console.log('FAILED...', err);
        });
    }
    return(
        <form ref={form} onSubmit={sendEmail}>
            <div className="formWord">
                <h2>Contact Page</h2>
                <span>Full Name</span>
                <br/>
                <input className='input100' type="text" name="fullName" required />
                <br/>
                <span>Phone Number</span>
                <br/>
                <input className='input100' type="text" name="phone" required />
                <br/>
                <span>Enter Email</span>
                <br/>
                <input className='input100' type="text" name="email" required />
                <br/>
            </div>
            <div className="formWord">
                <span>Message</span>
                <br/>
                <textarea name="message" required></textarea>
                <br />
                <button>SUBMIT</button>
            <div className="row">
                
            </div>
            </div>
        </form>
    );

}

export default Contactus;
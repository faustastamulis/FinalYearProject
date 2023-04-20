import React from 'react';

function Aboutus() {
    return (
        <body>
            <h2 className="h2__main">Welcome to ATU Medical</h2>
            <div className="about__container">
                <div className="about__text">
                    <h4>Here we make booking appointments easy for everyone,
                        Here at ATU Medical we strive for innovation by enabling our patients to log on and create their appointments all at their convenience.
                        <br />
                        <br />
                        We do this so it makes patients feel comfortable when booking appointment. Our patients will no longer have to ring up to get an appointment,
                        with a touch of a button you can register and make an account which lets you access the booking appointment section.</h4>
                </div>
                <div className="atu__image">
                    <img src={require('../images/atuimage.jpg')} />
                </div>
            </div>
            <br />
            <div className="about__container2">

                <div className="atu__image2">
                    <img src={require('../images/atuimage2.jpg')} />
                </div>
                <div className="about__text2">
                    <h4>ATU Medical is an exceptional medical facility that provides top-quality healthcare services to patients in a safe, comfortable, and welcoming environment.
                        <br />
                        <br />
                        The facility is staffed by highly skilled and compassionate healthcare professionals who are dedicated to delivering exceptional medical care and support to patients.
                        The facility boasts state-of-the-art medical equipment and technology, which allows for accurate and efficient diagnosis and treatment.
                        <br />
                        <br />
                        The facility is also designed with the patient in mind, featuring comfortable waiting areas, private treatment rooms, and amenities such as Wi-Fi, television, and refreshments.
                    </h4>
                    <br />
                </div>
            </div>
            <div className="about__container3">
                <div className="about__text3">
                    <h4>ATU Medical offers a wide range of medical services, including preventative care, general medical services, and complex procedures.
                        The facility has a team of specialists in various fields who work collaboratively to meet the diverse needs of patients.
                        <br />
                        <br />
                        ATU Medical prioritizes patient education and provides resources to help patients better understand their conditions and treatment options.
                        ATU Medical is committed to patient safety and infection control, with strict protocols in place to prevent the spread of illness or disease.
                        <br />
                        <br />
                        The facility adheres to the highest standards of hygiene, including frequent hand washing, sterilization of equipment, and proper disposal of medical waste.
                    </h4>
                </div>
                <div className="atu__image3">
                    <img src={require('../images/atuimage3.jpg')} />
                </div>
            </div>
        </body>
    );

}

export default Aboutus;
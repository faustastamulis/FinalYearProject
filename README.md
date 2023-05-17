# Final Year Project
## Introduction
In this project, I built a web application for patients to make medical appointments. I used ReactJS, NodeJS and Express with MongoDB as the main frameworks for our web application, user authentication and data storage. I used AWS and DockerHub as our cloud platforms to deploy the Web Application and Github for controlling the source code to save the work. This project is mainly written in the react framework and a few other languages such as HTML, Javascript and CSS.The motivation for me to make this web application was because I found it quite difficult to get appointments for medical circumstances. For example getting a doctors appointment would be a lot easier if you had an account with your GP and you logged on and can book an appointment with ease. I find this would be a lot easier for a lot of people because it would save the effort of having to ring up and wait on the phone to book an appointment when you could just do it on your mobile phone or website.

This project is a research project as it will allow us to get a better understanding of the work that goes into making a high-end web application. It would also allow us to get a better comprehension of the different languages and frameworks that we will be using.

## Main Features
* Created a web application using ReactJS and NodeJS.
* Web that contains the necessary components for a website such as About us, Contact Page, Footer and a Navbar.
* Users can contact me.
* Users can use the navbar and sidebar to navigate through the application.
* Users can register and create a new account.
* Users can safely log in to their account.
* Users need to verify a ReCAPTCHA in order to log in.
* Users cans successfully log out of the application.
* Logged in users can access the make appointment menu.
* Logged in users can see when their next appointment is.
* Logged in users can access a messanger app to talk to their doctor if they need to.
* The application runs successfully on AWS cloud.
* The application is mobile ready, as the web app is designed to fit any screen size.

## Video Demonstation
Click the following link for the screencast of the project.
<br/>
https://youtu.be/Y2Vj2dgufcg

## Technologies Used
* ReactJS
* EmailJS
* MongoDB
* NodeJS
* Docker
* Amazon Web Services (AWS)
* Postman
* Visual Studio Code
* IntelliJ

## How to Run
In order to run this application, you will need to have the following installed on your machine:

    https://www.docker.com/get-started

    https://docs.docker.com/docker-for-windows/install/

After downloading docker please run the following commands:
    
    git clone https://github.com/faustastamulis/FinalYearProject.git

<br />

    cd FinalYearProject

<br />

    Docker pull Mongo

<br />

    docker run -d -p 27017:27017 --name mongodb mongo

Run the following commands to download docker-compose
    sudo apt-get update

    sudo apt-get upgrade

    sudo apt-get install \
        apt-transport-https \
        ca-certificates \
        curl \
        gnupg-agent \
        software-properties-common

    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

    sudo apt-get install docker-ce docker-ce-cli containerd.io

    apt-cache madison docker-ce

    sudo apt-get install docker-ce docker-ce-cli containerd.io

    sudo apt install docker.io

    sudo apt install docker-compose

<br />

    docker-compose up






## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting
This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size
This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App
This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration
This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment
This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify
This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Authors
Faustast Tamulis

## Acknowledgments
Joseph Corr

## Resources
[https://niruhan.medium.com/creating-a-simple-mern-fullstack-application-2cbcfbdf3940]

[https://w3collective.com/react-contact-form/]

[https://github.com/soumilshah1995/Deploy-Docker-Container-on-AWS/tree/c9dc112320c4e6298d10a6f663d66ff009823040]

[https://www.mongodb.com/mern-stack#:~:text=MERN%20stands%20for%20MongoDB%2C%20Express,)%20%E2%80%94%20Node.js%20web%20framework]

[https://www.permify.co/post/jwt-authentication-in-react]

[https://stackoverflow.com/questions/39356826/how-to-check-if-it-a-text-input-has-a-valid-email-format-in-reactjs/39357015]

[https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database]




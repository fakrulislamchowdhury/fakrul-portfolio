import React from 'react';
import './About.css';
import { Container } from 'react-bootstrap';
import banner from './about.png';

const About = () => {
    return (
        <Container>
            <div className="row animate__animated animate__zoomIn">
                <div className="col-lg-6 paragraph">
                    <h4 className="fw-bolder mt-3">Md. Fakrul Islam Chowdhury</h4>
                    <h5>Front End Developer</h5>

                    <p className="pt-2">I have strong knowledge in front-end with experience in building web applications by using React.js for client-side Node.js and Express.js for server-side and MongoDB for the database.</p>

                    <p>Hello, everyone. My name is Md. Fakrul Islam Chowdhury. I'm originally from Chandpur, but I have lived in Dhaka for nine years. I have completed a B.Sc. in CSE from Bangladesh University. At the beginning of my programming career, I learned basic HTML, CSS, and JavaScript. However, I became more comfortable with coding than designing a sample website.</p>

                    <p>Because of that interest, I enrolled at Programming Hero for the Complete Web Developer course to strengthen my knowledge of HTML5, CSS3, JavaScript, React, Node, Express, etc.</p>

                    <p>By the grace of Almighty, I eventually completed my course as a front-end developer and developed more than 10 projects on React and Node. I dream of becoming a front-end developer, and I will accomplish this one day, inshallah.</p>
                </div>
                <div className="col-lg-6">
                    <img className="img-fluid my-5" style={{ height: "80%", width: "80%" }} src={banner} alt="Img" />
                </div>
            </div>
        </Container>
    );
};

export default About;
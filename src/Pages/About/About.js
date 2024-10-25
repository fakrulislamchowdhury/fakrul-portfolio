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

                    <p className="pt-2">I have Strong knowledge in Front End with experience in building Web Applications by using React.js for client side Node.js and Express.js for server side and MongoDB for database.</p>

                    <p>Hello, everyone. My name's Md. Fakrul Islam Chowdhury. I'm originally from Chandpur but have lived here in Dhaka for the last 09 years. I have a B.Sc in CSE from Bangladesh University. At the beginning of my programming carrier I learned basic HTML, CSS, JavaScript. But I found my-self more comfortable with coding rather than to do just sample design website.</p>

                    <p>From that interest, I enrolled at Programming Hero for Complete Web Developer course to make my base stronger on HTML5, CSS3, JavaScript, React, Node, Express etc.</p>

                    <p>Finally, by the grace of Almighty I have completed my course as a Front End Developer and developed more than 10 projects on React & Node. My dream is to become a Front End Developer and will accomplish one day.</p>
                </div>
                <div className="col-lg-6">
                    <img className="img-fluid my-5" style={{ height: "80%", width: "80%" }} src={banner} alt="Img" />
                </div>
            </div>
        </Container>
    );
};

export default About;
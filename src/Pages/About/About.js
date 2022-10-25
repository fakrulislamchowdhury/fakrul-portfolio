import React from 'react';
import banner from './about.jpg';
import './About.css'
import { Container } from 'react-bootstrap';

const About = (props) => {

    return (
        <Container >
            <div >
                <div>
                    <h2 className="fw-bolder">Fakrul Islam</h2>
                    <h5>Full Stack Web Developer</h5>
                    <br /><br />
                    <p className="knowledge">I have Strong knowledge in MERN stack with experience in building Web Applications by using React.js for client side, Node.js/Express.js for server side and MongoDB for database.</p>
                    <button type="button" className="btn btn-primary">Download Resume</button>
                </div>
                <div >
                    <div className="d-flex">
                        <div className="knowledge about">
                            <br /><br />
                            <p>Hello, everyone. My name's Md. Fakrul Islam Chowdhury. I'm originally from Chandpur but I've been living here in Dhaka for 8 years. I have a B.Sc in CSE from Bangladesh University. At the beginning of my programming carrier I learned basic HTML & CSS. But I found my-self more comfortable with coding rather than to do just sample design website.</p>
                            <p>From that interest, I enrolled at Programming Hero for Complete Web Developer course to make my base stronger on javascript.</p>
                            <p>Finally, by the grace of Almighty I have completed my course as MERN stack developer and developed more than 10 projects on React & Node. My dream is to become a software engineer and will accomplish one day.</p>
                        </div>
                        <div>
                            <img className="about" src={banner} alt="Img" />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default About;
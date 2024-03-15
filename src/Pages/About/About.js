import React from 'react';
import './About.css'
import banner from './about.png';
import { Container } from 'react-bootstrap';

const About = (props) => {

    return (
        <Container>
            <div>
                <h2 className="fw-bolder">Md. Fakrul Islam Chowdhury</h2>
                <h5>MERN Stack Web Developer</h5>
                <br /><br />
                <div className="paragraph">
                    <p>I have Strong knowledge in MERN Stack with experience in building Web Applications by using React.js for client side, Node.js/ Express.js for server side and MongoDB for database.</p>
                </div>
                <div className="row row-cols-1 row-cols-lg-2 pb-5">
                    <div className="col pt-3 paragraph">
                        <br /><br />
                        <p>Hello, everyone. My name's Md. Fakrul Islam Chowdhury. I'm originally from Chandpur but I've been living here in Dhaka for 8 years. I have a B.Sc in CSE from Bangladesh University. At the beginning of my programming carrier I learned basic HTML & CSS. But I found my-self more comfortable with coding rather than to do just sample design website.</p>
                        <p>From that interest, I enrolled at Programming Hero for Complete Web Developer course to make my base stronger on javascript.</p>
                        <p>Finally, by the grace of Almighty I have completed my course as MERN stack developer and developed more than 10 projects on React & Node. My dream is to become a software engineer and will accomplish one day.</p>
                    </div>
                    <div className="col">
                        <img className="img-fluid container" src={banner} alt="Img" />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default About;
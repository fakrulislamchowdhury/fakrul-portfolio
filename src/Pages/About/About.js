import React from 'react';
import banner from './about.jpg';
import './About.css'
import { Container } from 'react-bootstrap';

const About = (props) => {

    return (
        <Container>
            <div className="text-start pe-5">
                <h5>Myself</h5>
                <h2>Fakrul Islam</h2>
                <h5>Junion Web Developer</h5>
                <br /><br />
                <p>I have Strong knowledge in MERN stack with experience in building Web Applications by using React.js for client side, Node.js/Express.js for server side and MongoDB for database.</p>
                <br /><br />
                <button type="button" className="btn btn-primary">Download Resume</button>
            </div>
            <section className='about-section'>
                <div className="text-center fw-bolder">
                    <h1><u>About me</u></h1>
                </div>
                <div className="d-flex justify-content-center m-5">

                    <div className="text-start mx-3">
                        <br /><br />
                        <p>I am Md. Fakrul Islam Chowdhury, I lives in Dhaka, Bangladesh. At the beginning of my programming carrier I learned basic HTML & CSS. But I found my-self more comfortable with coding rather than to do just sample design website.</p>
                        <p>From that interest, I enrolled at Programming Hero for Complete Web Developer course to make my base stronger on javascript.</p>
                        <p>Finally, by the grace of almighty I have completed my course as MERN stack developer and developed more than 3 projects on React & Node. My dream is to become a software engineer and will accomplish one day.</p>
                    </div>
                    <div>
                        <img className=" about" src={banner} alt="Img" />
                    </div>
                </div>
            </section>
        </Container>
    );
};

export default About;
import React from 'react';
import './Home.css';
import { Container } from 'react-bootstrap';
import About from '../About/About';
import Contact from '../Contact/Contact';

const Home = () => {

    return (
        <Container>
            <div className="container mx-5">

            </div>
            <About />
            <Contact />
        </Container>
    );
};

export default Home;
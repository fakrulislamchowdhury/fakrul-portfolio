import React from 'react';
import './Footer.css';
import { Container } from 'react-bootstrap';


const Footer = () => {
    return (
        <div>
            <Container className="footer py-1">
                <p className='mt-3'>Fakrul Islam &copy; 2025. All Rights Reserved</p>
            </Container>
        </div>
    );
};

export default Footer;
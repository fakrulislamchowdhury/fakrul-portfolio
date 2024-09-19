import React from 'react';
import './Contact.css';
// import { Container } from 'react-bootstrap';

const Contact = () => {
    return (
        <>
            <div>
                <h2 className='text-center justify-content-center text-warning p-3'>Contract Me</h2>
            </div>
            <div className="d-flex justify-content-between my-5 container">
                <div className="px-5 border-bottom bg-light text-center">
                    <h3>Email</h3>
                    <p>fislamc6@gmail.com</p>
                </div>
                <div className="px-5 border-bottom bg-light text-center">
                    <h3>Phone</h3>
                    <p>+8801981731898</p>
                </div>
                <div className="px-5 border-bottom bg-light text-center">
                    <h3>LinkedIn</h3>
                    <a className='link' href="https://www.linkedin.com/in/fakrulislamchowdhury" target="_blank" rel="noopener noreferrer">fakrulislam</a>
                </div>
            </div >
        </>
    );
};

export default Contact;
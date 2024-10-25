import React from 'react';
import './Contact.css';
import { Card, Container } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container className='card-item animate__animated animate__zoomIn'>
            <Card className='card-item2' style={{ width: '18rem' }}>
                <Card.Body >
                    <Card.Title>Email</Card.Title>
                    <Card.Subtitle>fislamc6@gmail.com</Card.Subtitle>
                </Card.Body>
            </Card>
            <Card className='card-item2' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Phone/ Whatsapp</Card.Title>
                    <Card.Subtitle>+8801981731898</Card.Subtitle>
                </Card.Body>
            </Card>
            <Card className='card-item2' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>LinkedIn</Card.Title>
                    <Card.Subtitle><a href="https://www.linkedin.com/in/fakrulislamchowdhury" target="_blank" rel="noopener noreferrer">fakrulislam</a></Card.Subtitle>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Contact;
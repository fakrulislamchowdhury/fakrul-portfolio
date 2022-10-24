import React from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <Container>
            <div className="d-flex position-relative item">
                <div className="my-5">
                    <img src="https://www.pikpng.com/pngl/b/314-3142242_call-now-contact-nbp-telecom-services-icon-clipart.png" width="30px" alt="" />
                    <h3>Call</h3>
                    <p>+8801981731898</p>
                </div>
                <div id="container">
                    <img src="https://i1.wp.com/www.gauss-friends.org/wp-content/uploads/2020/04/location-pin-connectsafely-37.png?ssl=1" width="30px" alt="" />
                    <h3>Location</h3>
                    <p>House-32, Rd-5, Taltola, Dhaka-1206, Bangladesh.</p>
                </div>
                <hr />
                <div className="my-5">
                    <img src="http://www.databases.email/wp-content/uploads/2019/07/gmail-3.png" width="50px" alt="" />
                    <h3>Email</h3>
                    <p>fislamc6@gmail.com.bd</p>
                </div>
            </div >
        </Container>
    );
};

export default Contact;
import React from 'react';
import './Education.css';
import { Container } from 'react-bootstrap';

const Education = () => {
    return (
        <Container>
            <div className="education education-item2 animate__animated animate__fadeInUp">
                <h4 className="text-primary">Education Qualifications</h4>
                <p>B.Sc. in Computer Science and Engineering, Bangladesh University (January 2018 - April 2021)</p>
                <p>CGPA 3.87/4.00</p>
                <p>Diploma in Engineering, Computer Technology, Chandpur Polytechnic Institute (2011-2015)</p>
                <p>CGPA 3.19/4.00</p>
                <p>S.S.C, Business Studies, Kachua Govt. Pilot High School (2006-2011)</p>
                <p>CGPA 4.88/5.00</p>
            </div>
        </Container>
    );
};

export default Education;
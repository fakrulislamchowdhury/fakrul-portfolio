import React from 'react';
import './Certification.css';
import { Container } from 'react-bootstrap';

const Certification = () => {
    return (
        <Container>
            <div>
                <h4 className="text-center mt-2 animate__animated animate__zoomIn">I've included my certification below.</h4>
            </div>
            <div className='Certification'>

                {/* Academic Certification Section  */}

                <div className="certificate-item2 animate__animated animate__fadeInUp">
                    <h4>Academic Certification</h4>
                    <p>
                        <a href="https://drive.google.com/file/d/1ppWnG49EOZgQ0jiEjVZaeP0Y7eGL3Qmy/view" target="_blank" rel="noopener noreferrer">B.Sc. in Computer Science Engineering</a>
                    </p>
                    <p>
                        <a href="https://drive.google.com/file/d/1AWW9TQNdVudf2ZvjU5Zy0zbmOdsdPbTe/view" target="_blank" rel="noopener noreferrer">Diploma in Engineering</a>
                    </p>
                    <p>
                        <a href="https://drive.google.com/file/d/1LIXhfTdTYXWZcmQM2uegjXLAA0i2j3bI/view" target="_blank" rel="noopener noreferrer">Secondary School Certificate(S.S.C)</a>
                    </p>
                </div>

                {/* Professional Certification Section  */}

                <div className="certificate-item2 animate__animated animate__fadeInUp">
                    <h4>Professional Certification</h4>
                    <p>
                        <a href="https://drive.google.com/file/d/1XStPnTEIGWyuL4WT7VsdqBdA_IqBPE7q/view" target="_blank" rel="noopener noreferrer">MERN Stack Web Development</a>
                    </p>
                    <p>
                        <a href="https://drive.google.com/file/d/1eKkEw_0dwK0UIKRQ8A08s-gb8nCUMEED/view" target="_blank" rel="noopener noreferrer">Data Privacy</a>
                    </p>
                    <p>
                        <a href="..." target="_blank" rel="noopener noreferrer">International Sign Language</a>
                    </p>
                    <p>
                        <a href="https://drive.google.com/file/d/1F5-vhdVJW_L_d7083FeAEY0vopx6yMtO/view" target="_blank" rel="noopener noreferrer">Server Administration & Cloud Management</a>
                    </p>
                    <p>
                        <a href="..." target="_blank" rel="noopener noreferrer">Stylus Studio Enterprise v16</a>
                    </p>
                    <p>
                        <a href="..." target="_blank" rel="noopener noreferrer">Apache Tomcat 7.0.68</a>
                    </p>
                    <p>
                        <a href="..." target="_blank" rel="noopener noreferrer">Jasper Reports 5.1</a>
                    </p>
                    <p>
                        <a href="https://drive.google.com/file/d/1D2zZj1T2OYpWbZjRMq-KuHF4jsEvwo1Y/view" target="_blank" rel="noopener noreferrer">Oracle Application Express 5</a>
                    </p>
                    <p>
                        <a href="..." target="_blank" rel="noopener noreferrer">Oracle Database 10g Forms Builder</a>
                    </p>
                    <p>
                        <a href="https://drive.google.com/file/d/16OyG4HaC1_s1TK3cJ0WxOsE_RCzzpN65/view" target="_blank" rel="noopener noreferrer">Oracle Database 11g PL/SQL</a>
                    </p>
                    <p>
                        <a href="https://drive.google.com/file/d/1VFkmtFkhfCyRmH6RWVGDxHSw6xhdAeFO/view" target="_blank" rel="noopener noreferrer">Oracle Database 11g SQL</a>
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default Certification;
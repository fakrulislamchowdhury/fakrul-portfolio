import React from 'react';
import './Certification.css'

const Certification = () => {
    return (
        <div>
            <h4 className="text-center">Please here my Certification</h4>
            <div className="container d-flex flex-column">
                <h4>Academic Certification</h4>
                <p>
                    <a className='certificate' href="https://drive.google.com/file/d/1ppWnG49EOZgQ0jiEjVZaeP0Y7eGL3Qmy/view" target="_blank" rel="noopener noreferrer">B.Sc. in Computer Science Engineering</a>
                </p>
                <p>
                    <a className='certificate' href="https://drive.google.com/file/d/1AWW9TQNdVudf2ZvjU5Zy0zbmOdsdPbTe/view" target="_blank" rel="noopener noreferrer">Diploma in Engineering</a>
                </p>
                <p>
                    <a className='certificate' href="https://drive.google.com/file/d/1LIXhfTdTYXWZcmQM2uegjXLAA0i2j3bI/view" target="_blank" rel="noopener noreferrer">Secondary School Certificate(S.S.C)</a>
                </p>
            </div>
        </div>
    );
};

export default Certification;
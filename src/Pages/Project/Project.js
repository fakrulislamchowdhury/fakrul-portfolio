import React from 'react';
import "./Project.css";
import { Card, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

const Project = (props) => {
    const { title, detail, backend, frontend, liveSite } = props.project;   // destructuring in project components
    return (
        <Container>
            <div className='project px-4'>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className="fw-bolder">{title}</Card.Title>
                        <Card.Text>
                            Detail: {detail}
                        </Card.Text>
                        <div className='web-link'>
                            <Card.Text>
                                <a target="_blank" rel="noreferrer" href={backend}>Backend</a>
                            </Card.Text>
                            <Card.Text>
                                <a target="_blank" rel="noreferrer" href={frontend}>Frontend</a>
                            </Card.Text>
                            <Card.Text>
                                <a target="_blank" rel="noreferrer" href={liveSite}>LiveSite</a>
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    );
};

export default Project;
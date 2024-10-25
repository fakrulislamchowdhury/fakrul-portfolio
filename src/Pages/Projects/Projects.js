import React, { useEffect, useState } from 'react';
import './Projects.css';
import { Container } from 'react-bootstrap';
import Project from '../Project/Project';


const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);
    return (
        <>
            <div className="text-primary text-center mt-3 animate__animated animate__zoomIn">
                <p>Some of my recently worked</p>
                <h2>Projects</h2>
            </div>
            <Container>
                <div className="project-container">
                    {
                        projects.map(project => <Project key={project.id} project={project} ></Project>)
                    }
                </div>
            </Container>
        </>
    );
};

export default Projects;
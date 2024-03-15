import './Projects.css';
import React, { useEffect, useState } from 'react';
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
            <h1 className="text-primary text-center">My All Projects</h1>
            <h4 className="text-primary mt-5 text-center">MERN Stack Projects</h4>
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
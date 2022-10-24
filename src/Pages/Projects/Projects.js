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
    }, [])

    return (
        <div>
            <section>
                <h1 className='text-primary mt-2 text-center mt-0'>My all projects</h1>
            </section>
            <section className="project-container">
                {
                    projects.map(project => <Project key={project.id} project={project} ></Project>)
                }
            </section>
        </div>
    );
};

export default Projects;
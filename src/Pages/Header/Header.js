import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        color: "red"
    }
    const style = {
        textDecoration: "none",
        fontWeight: "bold",
        padding: "10px"
    }
    return (
        <div>
            <>
                <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-start">
                            <NavLink activeStyle={activeStyle} style={style} to="/home">Home</NavLink>
                            <NavLink activeStyle={activeStyle} style={style} to="/projects">Projects</NavLink>
                            <NavLink activeStyle={activeStyle} style={style} to="/education">Education</NavLink>
                            <NavLink activeStyle={activeStyle} style={style} to="/certification">Certification</NavLink>
                            <NavLink activeStyle={activeStyle} style={style} to="/skills">Skills</NavLink>
                            <NavLink activeStyle={activeStyle} style={style} to="/about">About</NavLink>
                            <NavLink activeStyle={activeStyle} style={style} to="/contact">Contact</NavLink>
                            <NavLink activeStyle={activeStyle} style={style} to="/resume"><button type="button" className="btn btn-primary"><a className="text-white" rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/18vPgK46yIxUBCD9Wy0bRTcujCIhv3bo-/view?usp=sharing" download="download" >Resume</a></button>
                            </NavLink>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div >
    );
};

export default Header;
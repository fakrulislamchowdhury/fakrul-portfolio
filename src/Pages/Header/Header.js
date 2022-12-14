import React from 'react';
import { Container } from 'react-bootstrap';
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
        <Container>
            <nav className="bg-light py-3">
                <NavLink activeStyle={activeStyle} style={style} to="/home">Home</NavLink>
                <NavLink activeStyle={activeStyle} style={style} to="/projects">Projects</NavLink>
                <NavLink activeStyle={activeStyle} style={style} to="/about">About</NavLink>
                <NavLink activeStyle={activeStyle} style={style} to="/contact">Contact</NavLink>
            </nav>
        </Container>
    );
};

export default Header;
import React from 'react';
import { Container } from 'react-bootstrap';

const NotFound = () => {
    const style = {
        color: "red"
    }
    return (
        <Container>
            <h2>Page not found!</h2>
            <p>Don't ask me about this page.</p>
            <h1><small style={style}>404</small></h1>
        </Container>
    );
};

export default NotFound;
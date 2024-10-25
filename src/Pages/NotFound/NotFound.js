import React from 'react';
import { Link } from 'react-router-dom';
import error from './404.jpg';

const NotFound = () => {
    return (
        <div className="mt-4 pt-4">
            <img style={{ width: '400px' }} src={error} alt="img" />
            <br />
            <Link to="/"><button>Go back</button></Link>
        </div>
    );
};

export default NotFound;
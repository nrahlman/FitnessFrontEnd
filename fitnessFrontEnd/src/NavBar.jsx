import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
          <Link to="/">Home page</Link>
          <Link to="/create">Create Player</Link>
        
        </div>
    );
};

export default NavBar;
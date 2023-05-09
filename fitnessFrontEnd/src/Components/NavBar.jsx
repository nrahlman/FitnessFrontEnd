import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div>
          <Link to="/">Home page</Link>
          <Link to="/routines">Routines</Link>
          <Link to="/activites">activites</Link>
          <Link to="/myRoutines">My Routines</Link>
          <Link to="/login">Login / Register</Link>
        
        </div>
    );
};

export default NavBar;
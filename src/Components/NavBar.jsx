import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  }

  return (
    <section className='Navbar'>
      <ul className='Links'>
        <Link to="/" className={activeLink === 'home' ? 'active' : ''} onClick={() => handleLinkClick('home')}>Home page</Link>
        <Link to="/routines" className={activeLink === 'routines' ? 'active' : ''} onClick={() => handleLinkClick('routines')}>Routines</Link>
        <Link to="/activities" className={activeLink === 'activities' ? 'active' : ''} onClick={() => handleLinkClick('activities')}>Activities</Link>
        <Link to="/myRoutines" className={activeLink === 'myRoutines' ? 'active' : ''} onClick={() => handleLinkClick('myRoutines')}>My Routines</Link>
        <Link to="/login" className={activeLink === 'login' ? 'active' : ''} onClick={() => handleLinkClick('login')}>Login / Register</Link>
      </ul>
    </section>
  );
};

export default NavBar;


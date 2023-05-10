import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { logout } from "../API/user";

const NavBar = ({setToken, setUser}) => {

  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const handleLogout = async (e) => {
    e.preventDefault();
    await logout(setToken, setUser);
  };

  return (
    <section className="Navbar">
      <h3 className="logo">FITMATE</h3>
      <ul className="Links">
        <Link
          to="/"
          className={activeLink === "home" ? "active" : ""}
          onClick={() => handleLinkClick("home")}
        >
          Home page
        </Link>
        <Link
          to="/routines"
          className={activeLink === "routines" ? "active" : ""}
          onClick={() => handleLinkClick("routines")}
        >
          Routines
        </Link>
        <Link
          to="/activities"
          className={activeLink === "activities" ? "active" : ""}
          onClick={() => handleLinkClick("activities")}
        >
          Activities
        </Link>
        <Link
          to="/myRoutines"
          className={activeLink === "myRoutines" ? "active" : ""}
          onClick={() => handleLinkClick("myRoutines")}
        >
          My Routines
        </Link>
        <Link
          to="/login"
          className={activeLink === "login" ? "active" : ""}
          onClick={() => handleLinkClick("login")}
        >
          Login
        </Link>
        <button onClick={handleLogout}>
          LOGOUT
        </button>
      </ul>
    </section>
  );


};

export default NavBar;

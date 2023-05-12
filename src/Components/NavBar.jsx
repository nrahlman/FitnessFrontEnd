import React, { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { logout } from "../API/user";
import Login from "./LogInRegister";

const NavBar = ({ user, setToken, setUser }) => {
  const [activeLink, setActiveLink] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    await logout(setToken, setUser);
  };

  const handleLoginModalClose = () => {
    setShowLoginModal(false);
  };

  const handleLoginModalOpen = () => {
    setShowLoginModal(true);
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
          to={{
            pathname: "/routines",
            state: {},
          }}
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
        {user.username ? (
          <p className="username">{user.username}</p>
        ) : (
          <button onClick={handleLoginModalOpen}>
            Login
          </button>
        )}
        {user.username ? <button onClick={handleLogout}>LOGOUT</button> : null}
      </ul>
      {showLoginModal && (
        <div className="modal">
          <div className="modal-content">
           
            <Login setToken={setToken} setUser={setUser} onClose={handleLoginModalClose} />
          </div>
        </div>
      )}
    </section>
  );
};

export default NavBar;

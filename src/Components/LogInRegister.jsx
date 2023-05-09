import React, { useState } from "react";
import { loginUser, registerUser } from "../API/user";
import { useNavigate } from "react-router-dom";


const Login = ({ token, setToken, user, setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await registerUser(username, password);
    localStorage.setItem("token", token);
    setToken(token);
    setUsername("");
    setPassword("");
    // navigate("/");
  };


  const handleLogin = async (e) => {
    e.preventDefault();
    const token = await loginUser(username, password);
    localStorage.setItem("token", token);
    setToken(token);
    setUsername("");
    setPassword("");
    // navigate("/");
  };


  const toggleForm = () => {
    setIsLogin(!isLogin);
  };


  return (
    <div className="loginContainer">
      <div className="loginText">{isLogin ? "Log In" : "Register"}</div>
      <div>
        {isLogin ? (
          <form className="loginForm" onSubmit={handleLogin}>
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type="text"
              placeholder="Username"
            ></input>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
            ></input>
            <button type="submit">Login</button>
          </form>
        ) : (
          <form className="loginForm" onSubmit={handleSubmit}>
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type="text"
              placeholder="Username"
            ></input>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
            ></input>
            <button type="submit">Register</button>
          </form>
        )}
      </div>
      <div className="flipButton">
        <button onClick={toggleForm}>
          {isLogin
            ? "Don't have an account? Register"
            : "Already have an account? Log in"}
        </button>
      </div>
    </div>
  );
};
export default Login;

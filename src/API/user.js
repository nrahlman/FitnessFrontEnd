const BASE_URL = `https://fitnesstrac-kr.herokuapp.com/api`;
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * Registers a new user with the API.
 * @param {string} username The desired username for the new user.
 * @param {string} password The desired password for the new user.
 * @returns {Promise<string>} The JWT token for the newly registered user.
 */
export const registerUser = async (username, password) => {
    try {
      const response = await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const result = await response.json();
      console.log(response, username, password);
      if (result.token) {
        return result.token;
      } else {
        throw new Error(result.message);
      }
    } catch (err) {
      console.error(err);
      // Display an error message to the user using toast
      toast.error(err.message || "Registration failed. Please try again.", {
        position: "bottom-center",
        autoClose: 3000,
        style: {
          fontSize: "16px",
        },
      });
    }
  };
  
  /**
   * Logs in an existing user with the API.
   * @param {string} username The username of the existing user.
   * @param {string} password The password of the existing user.
   * @returns {Promise<string>} The JWT token for the logged-in user.
   */
  export const loginUser = async (username, password) => {
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const result = await response.json();
      console.log(result);
      if (result.token) {
        return result.token;
      } else {
        throw new Error(result.message);
      }
    } catch (err) {
      console.error(err);
      // Display an error message to the user using toast
      toast.error(err.message || "Log in failed. Please try again.", {
        position: "bottom-center",
        autoClose: 3000,
        style: {
          fontSize: "16px",
        },
      });
    }
  };
  
  /**
   * Fetches the details of the currently logged-in user from the API.
   * @param {string} token The JWT token for the logged-in user.
   * @returns {Promise<Object>} The user object.
   */
  export const fetchMe = async (token) => {
    try {
      const response = await fetch(`${BASE_URL}/users/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };

/**
 * Fetches the routines created by a specific user from the API.
 * @param {string} token The user's JWT token.
 * @param {string} username The username of the user whose routines to fetch.
 * @returns {Promise<Array>} An array of the user's routines.
 */
export const fetchMyRoutines = async (token, username) => {
    try {
      const response = await fetch(`${BASE_URL}/users/${username}/routines`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };
  
  /**
   * Logs out the user by removing their JWT token from local storage and clearing their user data.
   * @param {function} setToken A state setter function to set the JWT token to null.
   * @param {function} setUser A state setter function to set the user data to an empty object.
   */
  export const logout = (setToken, setUser) => {
    localStorage.removeItem("token");
    localStorage.clear();
    setToken(null);
    setUser({});
  };
  
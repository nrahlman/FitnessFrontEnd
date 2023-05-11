const BASE_URL = `https://fitnesstrac-kr.herokuapp.com/api`;
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const registerUser = async (username, password) => {
    try {
        const response = await fetch(
            `${BASE_URL}/users/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        });
        const result = await response.json();
        console.log(response, username, password)
        if(result.token) {
            return result.token;
            } else {
                throw new Error(result.message);
            }
    } catch (err) {
        console.error(err);
        toast.error(err.message || 'Registration failed. Please try again.', {
            position: "bottom-center",
            autoClose: 3000,
            style: {
              fontSize: '16px'
            }
          });
    }
}


export const loginUser = async (username, password) => {
    try {
        const response = await fetch(`${BASE_URL}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        });
        const result = await response.json();
        console.log(result);
        if(result.token) {
        return result.token;
        } else {
            throw new Error(result.message);
        }
    } catch (err) {
        console.error(err);
        toast.error(err.message || 'Log in failed. Please try again.', {
            position: "bottom-center",
            autoClose: 3000,
            style: {
              fontSize: '16px'
            }
          });
    }
}


export const fetchMe = async (token) => {
    try {
        const response = await fetch(`${BASE_URL}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        const result = await response.json();
        console.log(result);
        return result
    } catch (err) {
        console.error(err);
    }
}


export const fetchMyRoutines = async (token, username) => {
    try {
        const response = await fetch(`${BASE_URL}/users/${username}/routines`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        const result = await response.json();
        console.log(result);
        return result
    } catch (err) {
        console.error(err);
    }
}


export const logout = (setToken, setUser) => {
    localStorage.removeItem("token");
    localStorage.clear();
    setToken(null);
    setUser({});

};

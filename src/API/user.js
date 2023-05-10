const BASE_URL = `https://fitnesstrac-kr.herokuapp.com/api`;


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
        return result.token;
    } catch (err) {
        console.error(err);
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
        return result.token;
    } catch (err) {
        console.error(err);
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


export const fetchMyRoutines = async (token) => {
    try {
        const response = await fetch(`${BASE_URL}/users/:username/routines`, {
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

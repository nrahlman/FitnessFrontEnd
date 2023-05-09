const BASE_URL = `https://fitnesstrac-kr.herokuapp.com/api`;


export const registerUser = async () => {
    try {
        const response = await fetch(
            `${BASE_URL}/users/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username,
                    password
                }
            })
        });
        const result = await response.json();
        // As written below you can log your result
        // to check what data came back from the above code.
        console.log(result)
        return result.data.token
    } catch (err) {
        console.error(err);
    }
}


export const loginUser = async () => {
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
        return result.data.token
    } catch (err) {
        console.error(err);
    }
}

export const fetchMe = async () => {
    try {
        const response = await fetch(`${BASE_URL}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN_STRING_HERE}`
            },
        });
        const result = await response.json();
        console.log(result);
        return result
    } catch (err) {
        console.error(err);
    }
}

export const fetchMeByUsername = async () => {

    try {
        const response = await fetch(`${BASE_URL}/users/:username/routines`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN_STRING_HERE}`
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

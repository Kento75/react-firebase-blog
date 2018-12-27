export const userService = {
    getAll,
    getUserDetailed
};

function getAll() {
    const requestOptions = {
        method: 'GET'
    };

    return fetch('http://localhost:7777/user/all', requestOptions).then(handleResponse);
}

function getUserDetailed(userId) {
    const requestOptions = {
        method: 'GET'
    };

    return fetch(`http://localhost:7777/user/find/${userId}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 21) {
                Location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

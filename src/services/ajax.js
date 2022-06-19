import notify from "../utils/notify"

export const fetchData = {
    get,
    post,
    put,
    delete: _delete
}

function get(url) {
    const options = {
        method: 'GET'
    };
    return fetchHandler(url, options);
}

function post(url, body) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };
    return fetchHandler(url, options);
}

function put(url, body) {
    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };
    return fetchHandler(url, options);
}

function _delete(url) {
    const options = {
        method: 'DELETE'
    };
    return fetchHandler(url, options);
}

async function fetchHandler(url, options) {
    return await fetch(url, options)
        .then(reponseHandler)
        .catch(errorHandler);
}

function reponseHandler(response) {
    let contentType = response.headers.get('Content-Type');

    if (contentType) {
        console.log(contentType);
    }
    return response.json();
}

function errorHandler(error) {
    console.log(error);
    notify("Attention", error, "danger");
}
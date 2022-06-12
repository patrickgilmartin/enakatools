import notify from "../../utils/notify";

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
    return fetchHandler(url, options).then(reponseHandler);
}

function post(url, body) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };
    return fetchHandler(url, options).then(reponseHandler);
}

function put(url, body) {
    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };
    return fetchHandler(url, options).then(reponseHandler);
}

function _delete(url) {
    const options = {
        method: 'DELETE'
    };
    return fetchHandler(url, options).then(reponseHandler);
}

function fetchHandler(url, options) {
    fetch(url, options)
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
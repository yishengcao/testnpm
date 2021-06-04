function setAccessToken(token) {
    sessionStorage.setItem('accessToken', token);
}

function getAccessToken(token) {
    return sessionStorage.getItem('accessToken');
}

module.exports = {
    setAccessToken,
    getAccessToken
}
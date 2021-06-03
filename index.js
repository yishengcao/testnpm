function setAccessToken(token) {
    sessionStorage.setItem('accessToken', token);
}

module.exports = {
    setAccessToken
}
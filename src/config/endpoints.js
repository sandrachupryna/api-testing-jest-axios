const config = require('./config');

const endpoints = {
    posts: `${config.baseURL}/posts`,
    postById: (id) => `${config.baseURL}/posts/${id}`
}

module.exports = endpoints;
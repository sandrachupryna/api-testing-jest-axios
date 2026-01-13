const axios = require('axios');
const config = require('../config/config');

// Створюємо Axios instance з базовою конфігурацією
const httpClient = axios.create({
  baseURL: config.baseURL,
  timeout: config.timeout,
  headers: config.defaultHeaders
});

module.exports = httpClient;
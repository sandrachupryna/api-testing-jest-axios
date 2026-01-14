const axios = require('axios');
const config = require('../config/config');
const chalk = require('chalk');

// Створюємо Axios instance з базовою конфігурацією
const httpClient = axios.create({
  baseURL: config.baseURL,
  timeout: config.timeout,
  headers: config.defaultHeaders
});

// Interceptor for Requests
httpClient.interceptors.request.use(
  (request) => {
    console.log(chalk.blueBright.bold(`[REQUEST] ${request.method.toUpperCase()} ${request.url}`));
    if (request.params) {
      console.log(chalk.yellowBright.bold(`[REQUEST PARAMS]`));
      console.log(chalk.yellow(JSON.stringify(request.params, null, 2)));
    }
    if (request.data) {
      console.log(chalk.cyanBright.bold(`[REQUEST DATA]`));
      console.log(chalk.cyan(JSON.stringify(request.data, null, 2)));
    } 
    return request;
  },
  (error) => {
    console.error(chalk.redBright.bold('[REQUEST ERROR]', error));
    return Promise.reject(error);
  }
)

// Interceptor for Responses
httpClient.interceptors.response.use(
  (response) => {
    console.log(chalk.greenBright.bold(`[RESPONSE] ${response.status} ${response.config.url}`));
    console.log(chalk.cyanBright.bold(`[RESPONSE DATA]`));
    console.log(chalk.cyan(JSON.stringify(response.data, null, 2)));
    return response;
  },
  (error) => {
    if (error.response) { 
      console.error(chalk.redBright.bold('[REQUEST FAILED]', error.response.status, JSON.stringify(error.response.statusText, null, 2)));
      if (error.response.data) {
        console.error(chalk.redBright('[RESPONSE DATA]', JSON.stringify(error.response.data, null, 2)));
      }
    } else if (error.request) { 
      console.error(chalk.redBright.bold('[NETWORK ERROR]', JSON.stringify(error.message, null, 2)));
    } else { 
      console.error(chalk.redBright.bold('[UNKNOWN ERROR]', JSON.stringify(error.message, null, 2)));
    }
      return Promise.reject(error);
    }
)

module.exports = httpClient;
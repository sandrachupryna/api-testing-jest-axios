const httpClient = require('./httpClient');
const endpoints = require('../config/endpoints');
const httpErrorHandler = require('../utils/httpErrorHandler');
const { he } = require('@faker-js/faker');

class ApiService {
  async #get(url, params = {}, headers = {}) {
    try {
      const response = await httpClient.get(url, { params, headers });
      return response;
    } catch (error) {
      return httpErrorHandler(error);
    }
  }
  
  async #post(url, data = {}) {
    try {
      const response = await httpClient.post(url, data);
      return response;
    } catch (error) {
      return httpErrorHandler(error);
    } 
  }

  async #put(url, data = {}) {
    try {
      const response = await httpClient.put(url, data);
      return response;
    } catch (error) {
      return httpErrorHandler(error);
    }
  }

  async #delete(url) {
    try {
      const response = await httpClient.delete(url);
      return response;
    } catch (error) {
      return httpErrorHandler(error);
    }
  }
  
  async getAllPosts(params = {}, headers = {}) {
    return this.#get(endpoints.posts, params, headers);
  }

  async getPostById(id) {
    return this.#get(endpoints.postById(id));
  }

  async createPost(postData) {
    return this.#post(endpoints.posts, postData);
  }

  async updatePost(id, postData) {
    return this.#put(endpoints.postById(id), postData);
  }

  async deletePost(id) {
    return this.#delete(endpoints.postById(id));
  }

  async getInvalidEndpoint() {
    return this.#get(`${endpoints.posts}-invalid-endpoint`);
  }

  async getFromInvalidDomain() {
    try {
      const response = await httpClient.get('https://invalid.domain/posts');
      return response;
    } catch (error) {
      return httpErrorHandler(error);
    }
  }
}


module.exports = new ApiService();
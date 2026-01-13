const httpClient = require('./httpClient');
const endpoints = require('../config/endpoints');

class ApiService {
  async #get(url, params = {}) {
    try {
      const response = await httpClient.get(url, { params });
      return response;
    } catch (error) {
      throw error;
    }
  }
  
  async #post(url, data = {}) {
    try {
      const response = await httpClient.post(url, data);
      return response;
    } catch (error) {
      throw error;
    } 
  }

  async #put(url, data = {}) {
    try {
      const response = await httpClient.put(url, data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async #delete(url) {
    try {
      const response = await httpClient.delete(url);
      return response;
    } catch (error) {
      throw error;
    }
  }
  
  async getAllPosts() {
    return this.#get(endpoints.posts);
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
}

module.exports = new ApiService();
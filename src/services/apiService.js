const httpClient = require('./httpClient');

class ApiService {
  async #get(url, params = {}) {
    return await httpClient.get(url, { params });
  }
  
  async #post(url, data = {}) {
    return await httpClient.post(url, data);
  }

  async #put(url, data = {}) {
    return await httpClient.put(url, data);
  }

  async #delete(url) {
    return await httpClient.delete(url);
  }
  
  async getAllPosts() {
    return this.#get('/posts');
  }

  async getPostById(id) {
    return this.#get(`/posts/${id}`);
  }

  async createPost(postData) {
    return this.#post('/posts', postData);
  }

  async updatePost(id, postData) {
    return this.#put(`/posts/${id}`, postData);
  }

  async deletePost(id) {
    return this.#delete(`/posts/${id}`);
  }
}

module.exports = new ApiService();
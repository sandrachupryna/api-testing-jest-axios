const axios = require('axios');
const httpClient = require('../src/services/httpClient');


describe('Example API test', () => {
  test('GET request works using URL directly', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', 1);
  });

  test('GET request works using HTTP client', async () => {
    const response = await httpClient.get('/posts/1');

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', 1);
  });
});
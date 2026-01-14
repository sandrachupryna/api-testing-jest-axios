const apiService = require('../../src/services/apiService');

describe('GET /posts/:id', () => {
  test('Should return post by ID', async () => {
    const postId = 99;
    const response = await apiService.getPostById(postId);
    
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', postId);
    expect(response.data).toHaveProperty('title');
    expect(response.data).toHaveProperty('body');
    expect(response.data).toHaveProperty('userId');
  });
});
const apiService = require('../../src/services/apiService');

describe('DELETE /posts/:id', () => {
  test('Should delete existing post', async () => {
    const postId = 75;
    const response = await apiService.deletePost(postId);

    expect(response.status).toBe(200);
    expect(response.data).toEqual({});
  });
});

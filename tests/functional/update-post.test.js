const apiService = require('../../src/services/apiService');
const testData = require('../../src/data/testData');

describe('PUT /posts/:id', () => {
  test('Should update existing post', async () => {
    const postId = 50;
    const updatedPostData = testData.updatePost;
    const response = await apiService.updatePost(postId, updatedPostData);

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', postId);
    expect(response.data.title).toBe(updatedPostData.title);
    expect(response.data.body).toBe(updatedPostData.body);
    expect(response.data.userId).toBe(updatedPostData.userId);
    expect(response.data.publishedAt).toBe(updatedPostData.publishedAt);
  });
});


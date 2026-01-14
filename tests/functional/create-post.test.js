const apiService = require('../../src/services/apiService');
const testData = require('../../src/data/testData');


describe('POST /posts', () => {
  test('Should create new post', async () => {
    const newPost = testData.validPost;
    const response = await apiService.createPost(newPost);

    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id');
    expect(response.data.title).toBe(newPost.title);
    expect(response.data.body).toBe(newPost.body);
    expect(response.data.userId).toBe(newPost.userId);
    expect(response.data.publishedAt).toBe(newPost.publishedAt);
  });
});
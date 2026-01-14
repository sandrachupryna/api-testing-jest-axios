const apiService = require('../../src/services/apiService');

describe('GET /posts', () => {

  describe('Get all posts', () => {
    test('Should return all posts', async () => {
      const response = await apiService.getAllPosts();

      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
      expect(response.data.length).toBe(100);
    });

    test('Validate posts structure', async () => {
      const response = await apiService.getAllPosts();
      const posts = response.data;

      posts.forEach(post => {
        expect(post).toHaveProperty('id');
        expect(post).toHaveProperty('title');
        expect(post).toHaveProperty('body');
        expect(post).toHaveProperty('userId');

        expect(typeof post.id).toBe('number');
        expect(typeof post.title).toBe('string');
        expect(typeof post.body).toBe('string');
        expect(typeof post.userId).toBe('number');
      }); 
    });
  });

  describe('Get posts filtered', () => {
    test('Should return posts filtered by params', async () => {
      const params = { 
        userId: 5,
        publishedAfter: 1767225600000 // will be ignored, just for demo
      };

      const headers = {
        'User-Agent': 'me',
        'Accept-Language': 'en-US,en;q=0.5'
      };

      const response = await apiService.getAllPosts({ ...params}, { ...headers });

      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
      expect(response.data).toHaveLength(10);
      response.data.forEach(post => {
        expect(post).toHaveProperty('userId', params.userId);
      });
    });
  });
});

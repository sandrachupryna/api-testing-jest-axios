const apiService = require('../../src/services/apiService');

describe('Negative Tests', () => {
  describe('GET /posts/:id negative tests', () => {
    test('Should return error for non-existent post', async () => {
      const postId = 101;
      // try {
      //   const response = await apiService.getPostById(postId);
      // } catch (error) {
      //   expect(error.response.status).toBe(404);
      //   expect(error.response.data).toEqual({});
      // } 

      const res = await apiService.getPostById(postId);
      expect(res.type).toBe('REQUEST_FAILED');
      expect(res.status).toBe(404);
      expect(res.statusText).toBe('Not Found');
      expect(res.data).toEqual({});
    });

    test('Should return error for invalid post ID', async () => {
      const postId = 'invalid-id';
      // try {
      //   const response = await apiService.getPostById(postId);
      // } catch (error) {
      //   expect(error.response.status).toBe(404);
      //   expect(error.response.data).toEqual({});
      // } 
      const res = await apiService.getPostById(postId);
      expect(res.type).toBe('REQUEST_FAILED');
      expect(res.status).toBe(404);
      expect(res.statusText).toBe('Not Found');
      expect(res.data).toEqual({});
    });
  });

  test('Should return error for invalid endpoint', async () => {
    // try {
    //   const response = await apiService.getInvalidEndpoint();
    // } catch (error) {
    //   expect(error.response.status).toBe(404); // error.response.status = 404, error.code = 'ERR_BAD_REQUEST'
    //   expect(error.response.data).toEqual({});
    // } 
    const res = await apiService.getInvalidEndpoint();
    expect(res.type).toBe('REQUEST_FAILED');
    expect(res.status).toBe(404);
    expect(res.statusText).toBe('Not Found');
    expect(res.data).toEqual({});
  });

  // to test Network error
  test('Should return error for invalid domain', async () => {
    // try {
    //   const response = await apiService.getFromInvalidDomain();
    // } catch (error) {
    //   expect(error.code).toBe('ENOTFOUND'); // error.code = "ENOTFOUND", error.response = undefined; ENOTFOUND = DNS не зміг знайти домен
    // } 
    const res = await apiService.getFromInvalidDomain();
    expect(res.type).toBe('NETWORK_ERROR');
    expect(res.message).toBe('No response received');
  });
  
});
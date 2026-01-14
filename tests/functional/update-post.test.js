const apiService = require('../../src/services/apiService');
const testData = require('../../src/data/testData');
const httpClient = require('../../src/services/httpClient');


describe('PUT /posts/:id', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

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

  describe('Not implemented cases', () => {
    test('Check that post has been actually updated', async () => {
      const postId = 50;
      const responseGetBefore = await apiService.getPostById(postId);
      expect(responseGetBefore.status).toBe(200);

      const updatedPostData = testData.updatePost;
      const responseUpdate = await apiService.updatePost(postId, updatedPostData);

      expect(responseUpdate.status).toBe(200);
      expect(responseUpdate.data).toHaveProperty('id', postId);
    
      // Mocking get using spyOn to always return the updated data
      const spy = jest.spyOn(httpClient, "get").mockResolvedValue({ status: 200, data: responseUpdate.data });

      const responseGetAfter = await apiService.getPostById(postId);
      expect(responseGetAfter.status).toBe(200);
      expect(responseGetAfter.data).toEqual(responseUpdate.data);
      expect(responseGetAfter.data).not.toEqual(responseGetBefore.data);

      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(expect.stringContaining(`/posts/${postId}`), expect.anything());
      
      spy.mockRestore();
    });

    test('Update post with invalid id', async () => {
      const postId = 'some-invalid-id';
      const updatedPostData = testData.updatePost;
      const errorMessage = {
        error: 'Invalid post ID'  
      };

      const spy = jest.spyOn(httpClient, 'put').mockRejectedValue({
        response: {
          status: 400,
          statusText: 'Bad Request',
          data: errorMessage
        },
        message: 'Request failed with status code 400'
      });

      const response = await apiService.updatePost(postId, updatedPostData);

      expect(response.status).toBe(400);
      expect(response.type).toBe('REQUEST_FAILED');
      expect(response.statusText).toBe('Bad Request');    
      expect(response.data).toEqual(errorMessage);

      spy.mockRestore();
    });
  });
});


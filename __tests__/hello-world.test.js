const helloWorld = require('../controllers/hello-world');
const httpMocks = require('node-mocks-http');

it('returns a hello world object', () => {
  const request = httpMocks.createRequest({
    method: 'GET',
    url: '/'
  });
  const response = httpMocks.createResponse();
  helloWorld(request, response);
});

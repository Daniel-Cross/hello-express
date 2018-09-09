const fs = require('fs');
const path = require('path');
const httpMocks = require('node-mocks-http');
const createShoppingList = require('../controllers/createShoppingList');

it('creates a new shopping list', done => {
  expect.assertions(1);

  const body = {
    items: ['broccoli', 'bread', 'bananas']
  };
  const request = httpMocks.createRequest({
    method: 'POST',
    url: '/shopping-lists',
    body: body
  });
  const response = httpMocks.createResponse({
    eventEmitter: require('events').EventEmitter
  });

  createShoppingList(request, response);

  response.on('end', () => {
    const fileName = response._getData().fileName;
    const filePath = path.join(
      __dirname,
      '../controllers/shoppingLists',
      fileName
    );
    fs.readFile(filePath, 'utf8', (error, data) => {
      expect(data).toBe(JSON.stringify(body));
      done();
    });
  });
});
const updateShoppingList = require('../controllers/updateShoppingList');

const fs = require('fs');
const path = require('path');
const httpMocks = require('node-mocks-http');

it('updates an existing shopping list', done => {
  expect.assertions(1);

  const filename = Date.now().toString();
  const filePath = path.join(
    __dirname,
    '../controllers/shoppingLists',
    filename
  );

  const body = {
    items: ['carrots', 'crunchies', 'cornflakes']
  };

  fs.writeFile(filePath, body, err => {
    if (err) throw err;

    const request = httpMocks.createRequest({
      method: 'PUT',
      url: '/shopping-lists/:filename',
      params: {
        filename: filename
      },
      body: body
    });

    const response = httpMocks.createResponse({
      eventEmitter: require('events').EventEmitter
    });
    updateShoppingList(request, response);
    response.on('end', () => {
      fs.readFile(filePath, 'utf8', (err, data) => {
        expect(data).toBe(JSON.stringify(body));
        done();
      });
    });
  });
});

const express = require('express');
const bodyParser = require('body-parser');
const helloWorld = require('./controllers/helloWorld');
const createShoppingList = require('./controllers/createShoppingList');
const getShoppingList = require('./controllers/getShoppingList');
const updateShoppingList = require('./controllers/updateShoppingList');

const app = express();
app.use(bodyParser.json());

app.get('/', helloWorld);
app.post('/shopping-lists', createShoppingList);
app.get('/shopping-lists/:filename', getShoppingList);
app.put('/shopping-lists/:filename', updateShoppingList);

app.listen(3000, () => console.log('App listening on port 3000'));

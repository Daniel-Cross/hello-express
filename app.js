const express = require('express');
const bodyParser = require('body-parser');
const helloWorld = require('./controllers/helloWorld');
const createShoppingList = require('./controllers/createShoppingList');
const getShoppingList = require('./controllers/getShoppingList');

const app = express();
app.use(bodyParser.json());

app.get('/', helloWorld);
app.post('/shopping-lists', createShoppingList);
app.get('/shopping-lists:filename', getShoppingList);

app.listen(3000, () => console.log('App listening on port 3000'));

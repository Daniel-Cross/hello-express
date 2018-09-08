const express = require('express');
const hellWorld = require('./controllers/helloWorld');

const app = express();

app.get('/', hellWorld);

app.listen(3000, () => console.log('App listening on port 3000'));

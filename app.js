const express = require('express');
const helloWorld = require('./controllers/hello-world');

const app = express();

app.get('/', helloWorld);

app.listen(3000, () => console.log('Example app listening on port 3000!'));

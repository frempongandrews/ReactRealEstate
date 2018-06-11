const express = require('express');
const serveStatic = require('serve-static');

const path = require('path');

const app = express();

//middlewares

app.use('/', serveStatic(path.join(__dirname, 'public')));

app.get('/', function (req, res) {

  res.sendFile(__dirname + '/public/index.html');

});

const PORT = process.env.PORT || 4000;

app.listen(PORT, function () {
  console.log('Listening at port', PORT);
});
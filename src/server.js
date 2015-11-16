'use strict';
var express = require('express');


var app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

var server = app.listen(3000, 'localhost', () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log(`Example app listening at http://${ host }: ${ port }`);
});
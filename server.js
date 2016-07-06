var connect = require('connect'),
  serveStatic = require('serve-static');
var app = connect();
app.use(serveStatic("../01"));
app.listen(5000);

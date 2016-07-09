var connect = require('connect'),
  serveStatic = require('serve-static');
var app = connect();
app.use(serveStatic("../memoApp"));
app.listen(5000);

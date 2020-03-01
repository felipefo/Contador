var http = require('http');

var porta = process.env.PORT || 8080;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(porta);


var porta = process.env.PORT || 8080;
let http = require('http');
let fs = require('fs');
 
let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
	
	console.log('hello world');
	
    fs.readFile('./index.html', null, function (error, data) {
        if (error) {		
            response.writeHead(404);
            response.write('file not found');
        } else {
	    response.setHeader('content-type', 'text/html');
            response.write(data);
        }
        response.end();
    });
};
 
http.createServer(handleRequest).listen(porta);

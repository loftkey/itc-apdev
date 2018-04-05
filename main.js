var http = require("http");
var fs = require("fs");

http.createServer(function (request, response) {

   fs.readFile("../index.html", function(err, data){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(data);
      response.end();
    });
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
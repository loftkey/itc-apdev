const http = require("http");
const fs = require("fs");
var path = require("path");
const express = require("express");
const app = express();

// The following brilliant code to load images is from this page:
// https://stackoverflow.com/questions/5823722/how-to-serve-an-image-using-nodejs
var dir = path.join(__dirname, 'public');

var mime = {
    html: 'text/html',
    txt: 'text/plain',
    css: 'text/css',
    gif: 'image/gif',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    js: 'application/javascript'
};

/*app.get('/', function (req, res) {
    let type = 'text/html';
    let stream = fs.createReadStream('home.html');
    res.send();
});*/

app.get('*', function (req, res) {
    var file = path.join(dir, req.path.replace(/\/$/, 'home.html'));
    if (file.indexOf(dir + path.sep) !== 0) {
        return res.status(403).end('Forbidden');
    }
    var type = mime[path.extname(file).slice(1)] || 'text/plain';
    var s = fs.createReadStream(file);
    s.on('open', function () {
        res.set('Content-Type', type);
        s.pipe(res);
    });
    s.on('error', function () {
        res.set('Content-Type', 'text/plain');
        res.status(404).end('Not found');
    });
});

app.listen(3000, function () {
    console.log('Listening on http://localhost:3000/');
});
// End of copied code.

/*
http.createServer(function (request, response) {

   fs.readFile("home.html", function(err, data){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(data);
      response.end();
    });
}).listen(8088);*/
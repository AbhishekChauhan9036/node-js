let http = require('http');
let fs = require('fs');
let port = 8080;

const server = http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./ink.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('Whoops! File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
});

server.listen(port, () => {
    console.log(`Server is listening on port number: http://localhost:${port}`);

});
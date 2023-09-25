const http = require('http');

var port = '8080';

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        //console.log('New connection...');
        res.write('Hello World ' + new Date().toLocaleString());
        res.end();    
    }

    if(req.url === '/api/numbers') {
        //console.log('New connection...');
        res.write(JSON.stringify([1, 2, 3]));
        res.end();    
    }    
});

server.on('connection', (socket) => {
    console.log('New connection at', new Date().toLocaleString());
});

server.listen(port);

console.log(`Rev1.0 - Listening on port ${port}...`);

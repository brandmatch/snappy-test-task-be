const http = require('http');
const fs = require('fs');
const port = 3100;

const requestHandler = (request, response) => {
  if (request.url === '/data.json') {
    fs.readFile('./data.json', 'utf8', (err, data) => {
      if (err) {
        response.end('Oh :(');

        return;
      }

      response.writeHead(200,
        { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      response.end(data);
    });
  }
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});

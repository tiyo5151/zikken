import * as http from 'http';

const server = http.createServer(
  (request: http.IncomingMessage, response: http.ServerResponse) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Hello World');
    response.end();
  }
);

server.listen(8888, () => {
  console.log('Server is listening on port 8888');
});

// console.log('Hello! Node.js × TypeScript');

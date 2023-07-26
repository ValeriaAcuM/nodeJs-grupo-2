'use strict';
const url = require('url');
const http = require('http');
const port = 3000;
const { STATUS_CODES } = http;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.end(STATUS_CODES[res.statusCode] + '\r\n');
    return;
  }

  const { pathname } = url.parse(req.url);
  if (pathname === '/') {
    res.end('¡Bienvenido al servidor HTTP!');
  }
  else if (pathname === '/about') {
    res.end('Esta es la página de acerca de nosotros.');
  }
  else if (pathname === '/contact') {
    res.end('Ponte en contacto con nosotros en contact@example.com');
  }
  else {
    res.statusCode = 404;
    res.end('Página no encontrada');
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
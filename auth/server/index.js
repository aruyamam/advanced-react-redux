const express = require('express');
const http = require('http');
const morgan = require('morgan');

const app = express();

// Server Setup
const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port);
console.log('Server listening on:', port);

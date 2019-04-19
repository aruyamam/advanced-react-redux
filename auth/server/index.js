const express = require('express');
const http = require('http');
const morgan = require('morgan');
const router = require('./router');

const app = express();

// App Setup
app.use(morgan('combined'));
app.use(express.json({ type: '*/*' }));

router(app);

// Server Setup
const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port);
console.log('Server listening on:', port);

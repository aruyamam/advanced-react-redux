const express = require('express');
const http = require('http');
const morgan = require('morgan');
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// DB Setup
mongoose
   .set('useCreateIndex', true)
   .connect('mongodb://localhost:27017/auth', { useNewUrlParser: true });

// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(express.json({ type: '*/*' }));

router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);

server.listen(port);
console.log('Server listening on:', port);

const express = require('express');

const app = express();
const { Server } = require("socket.io");

const http = require('http');
const server = http.createServer(app);

const io = new Server(server);

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('hello', (arg) => {
        console.log(arg); // 'world'
      });

      socket.on('Chat Message', (msg) => {
        console.log('message: ' + msg);
      });
  });
server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
  });

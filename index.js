const express = require('express');
require('dotenv').config();
const cors=require("cors")
const app = express();
const { Server } = require("socket.io");
corsOptions = {
  origin: "*"

}
app.use(cors(corsOptions));
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
server.listen(process.env.PORT, () => {
    console.log(`server running at http://localhost:${process.env.PORT}`);
  });

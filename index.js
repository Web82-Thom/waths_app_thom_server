const express = require("express");
var http = require("http");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
var server = http.createServer(app);
var io = require("socket.io")(server);

//middlewre
app.use(express.json());

io.on("connection", (socket) => {
  console.log("conneted");
  console.log(socket.id, "has joined");
  socket.on('/test', (msg)=>{
    console.log(msg);
  }

  );
  "signin", (id) => {
    console.log(id);
    clients[id] = socket;
    console.log(clients);
  }
  socket.on("message", (msg) => {
    console.log(msg);
    let targetId = msg.targetId;
    if (clients[targetId]) clients[targetId].emit("message", msg);
  });
});

server.listen(port, "192.168.1.14", () => {
  console.log("server started");
  console.log(port);
  console.log(server);
});
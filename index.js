const express = require("express");
var http = require("http");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 20;
var server = http.createServer(app);
var io = require("socket.io")(server);

//middlewre
app.use(express.json());

io.on("Connection", (socket) => {
  console.log("connetetd");
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

server.listen(port, "0.0.0.0", () => {
  console.log("server started");
  console.log(port);
});
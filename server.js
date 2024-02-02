const http = require("http");
const express = require("express");
const app = express();

const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: ["https://hashtag-chat-online-course.vercel.app"],
    methods: ["GET", "POST"]
  }
});

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("Um usuário conectou");

  socket.on("nova mensagem", (msg) => {
    io.emit("nova mensagem", msg);
  });

  socket.on("disconnect", () => {
    console.log("Um usuário desconectou");
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}`);
});

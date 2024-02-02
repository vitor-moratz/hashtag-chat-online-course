const http = require("http");
const express = require("express");
const configurarSocketIO = require("./public/script.js");

const app = express();
const servidorHTTP = http.createServer(app);

app.use(express.static("public"));

const io = configurarSocketIO(servidorHTTP);

servidorHTTP.listen(2000, () => {
  console.log("Servidor escutando na porta 2000");
});

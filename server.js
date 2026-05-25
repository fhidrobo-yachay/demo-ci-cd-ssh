const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hola desde CI/CD con Docker + SSH");
});

app.listen(3000, () => {
  console.log("Servidor escuchando en puerto 3000");
});

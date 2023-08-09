const express = require('express');
const app = express();
app.use(express.text());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("¡Bienvenido al servidor HTTP usando Express!");
});

app.get("/task", (req, res) => {
  res.send("Esta ruta va a devolver una lista de tareas");
});

app.post("/task", (req, res) => {
  console.log(req.body);
  res.send("Agrega una nueva tarea a la lista");
});

app.get("/image/:username", (req, res) => {
  if (req.params.username === 'ronny') {
    return res.sendFile("./camara.jpg", {
      root: __dirname,
    });
  }
  res.send("El usuario no está autorizado");
});

app.use((req, res) => {
  res.status(404).send("Página no encontrada");
});

app.listen(3000, () => {
  console.log(`listening on ${3000}`);
});

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Configura la ruta al archivo index.html en el mismo directorio
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Ahora ambos están en el mismo directorio
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

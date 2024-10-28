const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3002; // Porta da API

// Endpoint para servir os arquivos PDF armazenados na pasta 'uploads'
app.use('/files', express.static(path.join(__dirname, 'uploads')));

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});

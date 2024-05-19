// Importações necessárias
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const dbConfig = require('./config/db');

// Configurações iniciais
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conexão com o banco de dados
mongoose.connect(dbConfig.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB conectado...'))
.catch(err => console.log(err));

// Rotas
app.use('/api/users', userRoutes);

// Rota padrão
app.get('/', (req, res) => {
  res.send('Bem-vindo ao AutHelper!');
});

// Inicialização do servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

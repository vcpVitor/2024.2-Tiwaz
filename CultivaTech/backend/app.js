const express = require('express');
const app = express();
const port = 3000;

const plantacaoRoutes = require('./src/modules/plantacoes/routes/plantacaoRoutes.js');
const sequelize = require('./src/config/database.js');

// Middleware para processar JSON no corpo da requisição
app.use(express.json());

// Middleware para processar dados codificados (form-urlencoded), se necessário
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use('/api/plantacoes', plantacaoRoutes);

// Inicializar o banco de dados
sequelize.sync({ force: false }) // Use force: true apenas para recriar tabelas
  .then(() => {
    console.log('Banco de dados sincronizado!');
  })
  .catch((err) => console.error('Erro ao sincronizar banco de dados:', err));

// Subir o servidor
app.listen(port, (error) => {
    if (error) {
        console.log('Deu erro');
        return;
    }
    console.log("Subiu show");
});

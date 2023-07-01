const express = require('express');
const bodyParser = require('body-parser');
const LoginController = require('./login/LoginController');
const usuarioModel = require('./usuario/Usuario');

const app = express();

app.use(bodyParser.json());

app.post('/login', LoginController);

app.get('/usuarios', (req, res) => {
    const users = usuarioModel.listUsers();
    res.json({ users });
  });

app.listen(3000, () => {
  console.log('Servidor em execução na porta 3000');
});

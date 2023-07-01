
const Usuario = require('../usuario/Usuario');

function loginController(req, res) {
  const { username, password } = req.body;

  const foundUser = Usuario.findUser(username, password);
  if (foundUser) {
    res.json({ success: true, message: 'Login bem-sucedido' });
  } else {
    res.status(401).json({ success: false, message: 'Credenciais inválidas' });
  }
}

module.exports = loginController;

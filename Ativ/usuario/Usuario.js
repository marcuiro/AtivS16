
class Usuario {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
  
    static findUser(username, password) {
      
      const users = [
        new Usuario('user1', 'password1'),
        new Usuario('user2', 'password2'),
        new Usuario('user3', 'password3'),
      ];
  
      const foundUser = users.find(user => user.username === username && user.password === password);
      return !!foundUser;
    }

    static listUsers() {
      const users = [
        new Usuario('user1', 'password1'),
        new Usuario('user2', 'password2'),
        new Usuario('user3', 'password3'),
      ];
  
      return users;
    }
  }
  
  module.exports = Usuario;
  
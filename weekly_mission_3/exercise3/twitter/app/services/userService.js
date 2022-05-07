const User = require("./../user");

class UserService{
  static create(id, username, name){
    return new User(id, name, username, "Default");
  }
  static getInfo(user){
    const list = [user.id, user.username, user.name, user.bio]
    return list;
  }
  static updateUserUsername(user, newUsername){
    user.username = newUsername;
  }
  static getAllUsernames(users){
    // let nameArray = [];  
    // for(let i=0; i<users.length ;i++){
    //   nameArray[i] = users[i].username; 
    // }
    const nameArray = users.map( user => user.username)
    return nameArray;
  }
}

module.exports = UserService;
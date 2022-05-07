class User{
    constructor(id, name, username, bio){
      this.id = id;
      this.name = name;
      this.username = username;
      this.bio = bio;
      this.dateCreated = new Date();
      this.lastUpdated = new Date();
    }
    get getUsername(){
      return this.username;
    }
    get getBio(){
      return this.bio;
    }
    get getDateCreated(){
      return this.dateCreated;
    }
    get getLastUpdated(){
      return this.lastUpdated;
    }
    set setUsername(username){
      this.username = username;
      this.lastUpdated = new Date();
    }
    set setBio(bio){
      this.bio = bio;
      this.lastUpdated = new Date();
    }
  }
  
  module.exports = User;
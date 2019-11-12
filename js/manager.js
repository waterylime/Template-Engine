const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, github, title) {
      super( name, id, email,"Manager");
      this.github = github;
      this.title = title;

    }

    getGithub(github) {
        
        return this.github;
    }



    getRole(title){
        return "Manager";
    }
  }
  
  module.exports = Manager;
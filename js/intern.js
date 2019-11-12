const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, github, title) {
      super( name, id, email,"Intern");
      this.github = github;
      this.title = title;

    }

    getGithub(github) {
        
        return this.github;
    }



    getRole(title){
        return "Intern";
    }
  }
  
  module.exports = Intern;
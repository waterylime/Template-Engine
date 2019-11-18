
class Employee {
    constructor(name, id,email){
        this.name = name;
        this.id = id;
        this.email = email;
       
    }

    //a method that gets the employee name
    getName() {
        return this.name;
    }

    //a method that gets the employee id
    getId(){
        return this.id;
    }

    //a method that gets employy email
    getEmail(){
        return this.email;
    }

    //a method that checks and returns employee role
    getRole(){
        return "Employee";
    }
}

module.exports = Employee;

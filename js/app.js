const Employee = require('./Template-Engine/js/Employee.js');
const Engineer = require('./Template-Engine/js/Engineer.js');
const Intern = require('./Template-Engine/js/intern.js');
const Manager = require('./Template-Engine/js/Manager.js');
const util = require ('util');
const inquire = ('inquire');


const teamArr = [];

init() =>{
    inquire
    prompt([
        {
        type:'input'.
        name: 'manager',
        message: 'What is your managers name?'
    },
    {
        type:'input'.
        name: 'id',
        message: 'What is your employee ID?'
    },
    {
        type:'input'.
        name: 'email',
        message: 'What is your Office number?'
    },
    {
        type:'input'.
        name: 'title',
        message: 'What is your title?'
    }
    ]).then((data) =>{
        const teamManager = new Manager(data.managerName, data.id, data.email, data.officeNumber, 'Manager')
    
    
    team.push(teamManager);
    return consloe.log(team);
    }).then( () =>{
        consloe.log('test')
    });






};




teamMaker()
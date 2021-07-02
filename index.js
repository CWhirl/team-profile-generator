const EMPLOYEE = require('./lib/employee');
const MANAGER = require ('./lib/manager');
const ENGI = require('./lib/engi');
const INTERN = require('./lib/intern');
const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');

let lcv;
let team = [];
const namePrompt = `
{
    name:"employeeName",
    type: "input",
    message:"What is the employee's name?",
    validate: userIn => {
        if (userIn !== '') {
            return true;
        }
        return "Please enter the team employee's name";
    }
}`;
const emailPrompt = `
{
    name:"employeeEmail",
    type: "input",
    message: "What is the employee's email?",
    validate: userIn => {
        if(validateEmail(userIn)){
            return true;
        }
        return "Invalid Email";
    }
}`;
const idPrompt = `
{
    name:"employeeID",
    type: "input",
    message:"What is their ID number?",
    validate: userIn => {
        if (!isNaN(userIn)){
            return true;
        }
        return "Please enter only numeric values";
    }
}`;
const gitPrompt = `
{
    name:"employeeGit",
    type: "input",
    message:"What is their github username?",
}`;
const officePrompt = `
{
    name:"employeeOffice",
    type: "input",
    message:"What is their office number?",
    validate: userIn => {
        if (!isNaN(userIn)){
            return true;
        }
        return "please enter the employee's office number";
    }
}`;
const schoolPrompt = `
{
    name:"employeeSchool",
    type: "input",
    message:"What is their school's name?",
    validate: userIn => {
        if (!isNaN(userIn)){
            return true;
        }
        return "please enter the employee's school name";
    }
}`;
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

function buildQuestions(role) {
    switch(role) {
        case "manager":
            return `${namePrompt},${emailPrompt},${idPrompt},${officePrompt}`;
        case "engi":
            return `${namePrompt},${emailPrompt},${idPrompt},${gitPrompt}`;
        case "intern":
            return `${namePrompt},${emailPrompt},${idPrompt},${schoolPrompt}`;
    };
}

function buildEmpoyee(role) {
    inquirer.prompt(buildQuestions(role)).then(answers => {
        switch(role) {
            case engi:
                const employee = new ENGI(
                    answers.employeeName,
                    answers.employeeEmail,
                    answers.employeeID,
                    answers.employeeGit
                );
                team.push(employee);
                break;
            case intern:
                const employee = new INTERN()
                break;
            case manager:
                const employee = new MANAGER()
                break;
        }
    });
};



// do {


//   } while (lcv != "exit");

console.log(buildQuestions("engi"));
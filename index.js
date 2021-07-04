const EMPLOYEE = require('./lib/employee');
const MANAGER = require ('./lib/manager');
const ENGI = require('./lib/engi');
const INTERN = require('./lib/intern');
const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');
const genHTML = require('./src/template.js');
const output = path.resolve(__dirname, "dist");
const outputPath = path.join(output, "index.html");

let team = [];

const namePrompt = 
{
    name:"employeeName",
    type: "input",
    message:"What is the employee's name?",
    validate: userIn => {
        if (userIn !== '') {
            return true;
        }
        return "Please enter the team employee's name";
    }};
const emailPrompt = 
{
    name:"employeeEmail",
    type: "input",
    message: "What is the employee's email?",
    validate: userIn => {
        if(validateEmail(userIn)){
            return true;
        }
        return "Invalid Email";
    }};
const idPrompt = 
{
    name:"employeeID",
    type: "input",
    message:"What is their ID number?",
    validate: userIn => {
        if (!isNaN(userIn)){
            return true;
        }
        return "Please enter only numeric values";
    }};
const gitPrompt = 
{
    name:"employeeGit",
    type: "input",
    message:"What is their github username?",
};
const officePrompt = 
{
    name:"employeeOffice",
    type: "input",
    message:"What is their office number?",
    validate: userIn => {
        if (!isNaN(userIn)){
            return true;
        }
        return "please enter the employee's office number";
    }};
const schoolPrompt = 
{
    name:"employeeSchool",
    type: "input",
    message:"What is their school's name?",
};
const typePrompt =
{
    name:"type",
    type: "list",
    message: "Select what type of employee to add",
    choices: [
        "Engineer",
        "Intern",
        "I don't need to add any more employees"
    ]
};
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

function getEmployeeType(){
    inquirer.prompt(typePrompt).then(response => {
        
        if (response.type === "Engineer"){
            buildEmployee("engi");
        } else if (response.type === "Intern"){
            buildEmployee("intern");
        } else {
            outputHTML();
        }
    })
}

function buildQuestions(role) {
    let questions = [];
    switch(role) {
        case "manager":
            questions = [namePrompt,emailPrompt,idPrompt,officePrompt];
            break;
        case "engi":
            questions = [namePrompt,emailPrompt,idPrompt,gitPrompt];
            break;
        case "intern":
            questions = [namePrompt,emailPrompt,idPrompt,schoolPrompt];
            break;
    };
    return questions;
};

function buildEmployee(role) {
    inquirer.prompt(buildQuestions(role)).then(answers => {
        switch(role) {
            case "engi":
                const engi = new ENGI(
                    answers.employeeName,
                    answers.employeeID,
                    answers.employeeEmail,
                    answers.employeeGit
                );
                team.push(engi);
                break;
            case "intern":
                const intern = new INTERN(
                    answers.employeeName,
                    answers.employeeID,
                    answers.employeeEmail,
                    answers.employeeSchool
                );
                team.push(intern);
                break;
            case "manager":
                const manager = new MANAGER(
                    answers.employeeName,
                    answers.employeeID,
                    answers.employeeEmail,
                    answers.employeeOffice
                );
                team.push(manager);
                break;
        }
        getEmployeeType();
    });
};

const outputHTML = () => {
    fs.writeFileSync(outputPath, genHTML(team));
}

function init () {
    buildEmployee("manager");
}

init();
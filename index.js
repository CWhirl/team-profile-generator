const EMPLOYEE = require('./lib/employee');
const MANAGER = require ('./lib/manager');
const ENGINEER = require('./lib/engi');
const INTERN = require('./lib/intern');
const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

function inquireManager() {
    inquirer.prompt([
        {
            name:"managerName",
            type: "input",
            message:"What is the manager's name?",
            validate: userIn => {
                if (userIn !== '') {
                    return true;
                }
                return "Please enter the team manager's name";
            }
        },
        {
            name:"managerID",
            type: "input",
            message:"What is their ID number?",
            validate: userIn => {
                if (!isNaN(userIn)){
                    return true;
                }
                return "Please enter only numeric values";
            }
        },
        {
            name:"managerEmail",
            type: "input",
            message: "What is the manager's email?",
            validate: userIn => {
                if(validateEmail(userIn)){
                    return true;
                }
                return "Invalid Email";
            }
        },
        {
            name: "managerOffice",
            type: "input",
            message: "What is the manager's office number?",
            validate: userIn => {
                if(!isNaN(userIn)) {
                    return true;
                }
                return "Please enter only numeric values";
            }
        }
    ]).then(answers => {
        const manager = new MANAGER(
            answers.managerName,
            answers.managerId,
            answers.managerEmail,
            answers.managerOffice,
        )
        console.log(manager);
    });
};

inquireManager();
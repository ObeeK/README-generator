// // TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// // TODO: Create an array of questions for user input
const questions = [
    // inquirer asks for objects with type/name/message

    // title, description, installation, usage, contributing, tests, license, github username, email
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a brief description of the project?",
    },
    {
        type: "input",
        name: "installation",
        message: "Provide a step-by-step description of how to get the development environment running.",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use.",
    },
    {
        type: "input",
        name: "credits",
        message: "Please enter any names you wish to credit on this project.",
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide information for contributing to this project",
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide testing information",
    },
    {
        //license
        type: "list",
        name: "license",
        message: "message2",
        choices: ["MIT", "Mozilla", "Apache"]
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email.",
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your github profile.",
    },
];

// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(('./README.md', fileName), data)}
// // TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(response => {
         writeToFile("README.md", generateMarkdown(response))
     });
}

// // Function call to initialize app
init();


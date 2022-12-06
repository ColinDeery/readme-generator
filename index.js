// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markDown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'table of contents',
        message: 'Provide your table of contents.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide any installation instructions for your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide the usage instructions of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide any installation instructions for your project.'
    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
}

// Function call to initialize app
init();

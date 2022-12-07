// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markDown = require('./utils/generateMarkdown');
const generateMarkdown = require('./utils/generateMarkdown');
const { default: Choices } = require('inquirer/lib/objects/choices');
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
        message: 'Provide the usage instructions for your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select license for this project.',
        choices: ['MIT', 'Apache', 'Mozilla', 'None'],
        default: ['MIT']
    },
    {
        tyoe: 'input',
        name: 'test',
        message: 'Enter command used to run test.',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'List relevant contributors.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'enter your eMail address.'
    },


];

// TODO: Create a function to write README file
function writeReadMe(fileName, data) {
    const readMe = generateMarkdown(data);
    fs.writeFile(fileName, readMe, function (err) {
        console.log(err);
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (answers) {
        writeReadMe('README.md', answers);
    });
}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const axios = require("axios");
const markdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of your project'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project'
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username'
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your email address'
    }

];

inquirer
    .prompt(questions)
    .then((data) => {
        console.log(data)
    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of your project',
        validate: title => {
            if (title) {
                return true;
            } else {
                console.log('Project title required!');
                return false;
            }}
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project',
        validate: description => {
            if (description) {
                return true;
            } else {
                console.log('Project description required!');
                return false;
            }}
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Does your project have any installation requirements?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Briefly explain how to use your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a licence for your project: ',
        choices: ['MIT', 'IBM', 'Mozilla', 'WTFPL', 'Skip licensing']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can other developers contribute to this project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Explain to the user how they can test your project.',
        validate: test => {
            if (test) {
                return true;
            } else {
                console.log('Test info is required!');
                return false;
            }}
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username',
        validate: username => {
            if (username) {
                return true;
            } else {
                console.log('GitHub username required!');
                return false;
            }}
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address',
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('Email address required!');
                return false;
            }}
    },

];
  
// Writing to a file 
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
      if (err) {
        return console.log(err);
      }
      console.log ("Your README file has been successfully generated!");
    })
    
    }
    
    // initialization function
    function init() {
      inquirer.prompt(questions)
      .then(function(data) {
        writeToFile("README.md", markdown(data));
      })
    }
    
    // run the app
    init();

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const util = require("util");

const generateReadme = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the project title',
        name: 'project',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter a GitHub username.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'What is the project description',
        name: 'description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter a GitHub username.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'What are the install instructions?',
        name: 'install'
    },
    {
        type: 'input',
        message: 'What are the usage instructions?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What License can you use?',
        name: 'license'
    },
    {
        type: 'input',
        message: 'Who is Contributing?',
        name: 'contribute'
    },
    {
        type: 'input',
        message: 'What are the test instructions',
        name: 'test'
    },
    {
        type: 'input',
        message: 'What is your github username?',
        message: 'What is your link to your github?',
        name: 'questions',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter a GitHub username.");
            }
            return true;
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success! Your README.md file has been generated")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
     .prompt(questions)
     .then(answers =>{
         var title = answers.project;
         writeToFile(title, answers);
        

    });
}
// Function call to initialize app
init();

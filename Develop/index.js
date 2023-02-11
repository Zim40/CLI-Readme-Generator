// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = inquirer 
.prompt ([
    {
        type: 'input',
        message:'Title - What is name of your Project?',
        name: 'Title',
    },
    {
        type: 'input',
        message: 'Description - Please write a brief description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Licence - What kind of Licence does your project require?',
        name: 'licence',
        validate: (input) => input === "" ? "Please enter a Value" : true,
    },
    {
        type: 'input',
        message: 'Usage - What is this project used for?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Installation - How does the user install the Application?',
        name: 'install',
    },
    {
        type: 'confirm',
        message: 'Would you like to create the README file?',
        name: '(Y/N)',
    }
])
.then((answers) =>{
    console.log(answers);


    // TODO: Create a function to write README file
    function writeToFile(fileName, data) {

    }

    // TODO: Create a function to initialize app
    function init() { }

    // Function call to initialize app
    init();
})
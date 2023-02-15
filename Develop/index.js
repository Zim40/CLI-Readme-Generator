// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
        message: 'license - What kind of license does your project require?',
        name: 'license',
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
        type: 'input',
        message: 'GitHub - What is your GitHub Username?',
        name: 'Username',
    },
    {
        type: 'confirm',
        message: 'Do you want to add Email information [optional]',
        default: true,
        name: 'Email',
        
    }, 
    {
        type: 'input',
        message: 'Contact - Please enter your Email Address.',
        name: 'addEmail',
        when: (answers) => answers.Email,
        
    },
    {
        type: 'confirm',
        message: 'Would you like to create the README file?',
        default: true,
        name: 'create file',
    }
])
.then((answers) =>{
    console.log(answers);


    // TODO: Create a function to write README file
    function writeToFile() {
        fs.writeFile("README.md", generateMarkdown(answers), err => {
            if(err) {
                return console.log("Error Writing File");
            }
            console.log("File Created!");
        })

    }

    // TODO: Create a function to initialize app
    function init() { 
        writeToFile(generateMarkdown);
    }

    // Function call to initialize app
    init();
})
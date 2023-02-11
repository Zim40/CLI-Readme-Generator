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

const readme =`
# ${answers.Title}\n\n
## Description
${answers.description}\n\n
## Licence
${answers.licence}\n\n
## Usage
${answers.usage}\n\n
## Install
${answers.install}\n\n
This Project is Licenced under the ${answers.licence} licence.`;

    // TODO: Create a function to write README file
    function writeToFile(readme, questions) {
        fs.writeFile("README.md", readme, err => {
            if(err) {
                return console.log("Error Writing File");
            }
            console.log("File Created!");
        })

    }

    // TODO: Create a function to initialize app
    function init() { 
        writeToFile(readme, questions);
    }

    // Function call to initialize app
    init();
})
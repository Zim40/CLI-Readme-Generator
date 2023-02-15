// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(answers) {
  const licenseBadge = `[![License](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opensource.org/licenses/${answers.license})`;
  return licenseBadge;

}


// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const badge = renderLicenseBadge(answers);
  return  readme =
  `# ${answers.Title}\n\n

  ${renderLicenseBadge(answers)}

  ## Table of Contents:
   - [License](#license)
   - [Usage](#usage)
   - [Install](#install)
   - [Contact](#contact)

  ## Description
  ${answers.description}\n\n
  ***
  ## license 
  ${answers.license}\n\n
  ***
  ## Usage
  ${answers.usage}\n\n
  ***
  ## Install
  ${answers.install}\n\n
  ***
  ## Contact
  GitHub: ${answers.Username}\n\n
  Email: ${answers.addEmail}\n\n
  This Project is licensed under the ${answers.license} license.`;
 


}

module.exports = generateMarkdown;

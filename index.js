// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'projectTitle',
    },
    {
      type: 'input',
      message: 'Give a brief description of your project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Describe the installation process for this project.',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Describe the usage information for this program.',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'Select a license:',
      name: 'license',
      choices: ['MIT: Gives users express permissioon to reuse code for any purpose.', 
      'GNU: A series of software licenses that guarantee end users the freedom to run, study, share and modify the software.', 
      'Apache License 2.0: Allows commercial use, alterations, and distribution of updated/altered versions of the code.'],
    },
    {
      type: 'input',
      message: 'Please list all project contributors. (If none, please type "none")',
      name: 'contributors',
    },
    {
      type: 'input',
      message: 'Describe any project testing information.',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'What is your GitHub profile name?',
      name: 'questions1',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'questions2',
    },
  ])
// TODO: Create a function to write README file
  .then((response) => {
    fs.writeFile('README2.md',
      `
      # ${response.projectTitle}
      
      ## Description
      ${response.description}
      
      ## Table of Contents
      * Installation
      * Usage
      * License
      * Contributing
      * Tests
      * Questions
      
      ## Installation
      ${response.installation}
      
      ## Usage
      ${response.usage}
      
      ## License
      ${response.license}
      
      ## Contributing
      ${response.contributors}
      
      ## Tests
      ${response.tests}
      
      ## Questions
      For any questions please refer to my GitHub Account:
      https://github.com/${response.questions1}
      or email me at:
      ${response.questions2}
      ---
        `, (err) =>
        err ? console.error(err) : console.log('README file created')
      );
 });
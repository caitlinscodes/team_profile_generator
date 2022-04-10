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
// TODO: Create a function to write HTML file
  .then((response) => {
    fs.writeFile('index.html',
      `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" />
      </head>
      <body class="bg-gradient-light">
          <div class="jumbotron jumbotron-fluid bg-info text-white">
              <div class="container">
                <h1 class="display-4">
                  Hi, my name is ${response.name}!
                </h1>
                <p class="lead">I am from ${response.location}.</p>
                <h2>Bio:</h2>
                <p class="lead">${response.bio}</p>
                <p class="lead"><b>Let's Connect:</b></p>
                <ul>
                  <li class="lead"><a href="${response.linkedin}">${response.linkedin}</a><!--LinkdIn URL--></li>
                  <li class="lead"><a href="${response.github}">${response.github}</a><!--GitHub URL--></li>
                </ul>
              </div>
            </div>
      </body>
      </html>
        `, (err) =>
        err ? console.error(err) : console.log('HTML file created')
      );
 });
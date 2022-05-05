// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateSite = require('./src/generate-site.js');
const fs = require('fs');
const path = require('path');
const OUTPUT_DIR = path.resolve(_dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'index.html');
const teamMembers = [];

// TODO: Create an array of questions for user input
const promptNewEmployee = () => {
  return inquirer.prompt ([
    {
      type: 'input',
      message: 'What is the new employee name?',
      name: 'employeeName',
    },
    {
      type: 'input',
      message: 'What is the new employee Id?',
      name: 'employeeId',
    },
    {
      type: 'input',
      message: 'What is the new employee email?',
      name: 'employeeEmail',
    },
    {
      type: 'list',
      message: 'Select an employee type:',
      name: 'employeeType',
      choices: ['Manager', 'Engineer', 'Intern'],
    },
  ]).then(userChoice => {
    switch (userChoice.employeeType) {
      case 'Manager': promptManager();
      case 'Engineer': promptEngineer();
      case 'Intern': promptIntern();
    }
  })
}

const promptManager = () => {
  return inquirer.prompt ([
    {
      type: 'input',
      message: 'Please enter the new manager office number.',
      name: 'managerOffice',
    },
    {
      type: 'list',
      message: 'Would you like to add another team member?',
      name: 'addMoreEmployees',
      choices: ['yes', 'no'],
    },
  ]).then(userChoice => {
    switch (userChoice.addMoreEmployees) {
      case 'yes': promptNewEmployee();
      case 'no': generateSite;
    }
  })
}

const promptEngineer = () => {
  return inquirer.prompt ([
    {
      type: 'input',
      message: 'What is the new engineer GitHub URL?',
      name: 'engineerGitHub',
    },
    {
      type: 'list',
      message: 'Would you like to add another team member?',
      name: 'addMoreEmployees',
      choices: ['yes', 'no'],
    },
  ]).then(userChoice => {
    switch (userChoice.addMoreEmployees) {
      case 'yes': promptNewEmployee();
      case 'no': generateSite;
    }
  })
}

const promptIntern = () => {
  return inquirer.prompt ([
    {
      type: 'input',
      message: 'What is the new intern school?',
      name: 'internSchool',
    },
    {
      type: 'list',
      message: 'Would you like to add another team member?',
      name: 'addMoreEmployees',
      choices: ['yes', 'no'],
    },
  ]).then(userChoice => {
    switch (userChoice.addMoreEmployees) {
      case 'yes': promptNewEmployee();
      case 'no': generateSite;
    }
  })
}



//Start of old code
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the new employee name?',
      name: 'employeeName',
    },
    {
      type: 'input',
      message: 'What is the new employee ID?',
      name: 'employeeID',
    },
    {
      type: 'input',
      message: 'What is the new employee email?',
      name: 'employeeEmail',
    },
    {
      type: 'list',
      message: 'Select an employee type:',
      name: 'employeeType',
      choices: ['Manager', 'Engineer', 'Intern'],
    },
    //Figure out if statements for below questions.
    {
      type: 'input',
      message: 'Please enter the new manager office number.',
      name: 'managerOffice',
    },
    {
      type: 'input',
      message: 'What is the new engineer GitHub username?',
      name: 'engineerGitHub',
    },
    {
      type: 'input',
      message: 'What is the new intern school?',
      name: 'internSchool',
    },
  ])
// TODO: Create a function to write HTML and CSS files
  .then((response) => {
    fs.writeFile('index.html',
      `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Team Profile Generator</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/style.css"/>
      </head>
      <body class="bg-gradient-light">
          <div class="jumbotron jumbotron-fluid bg-info text-white">
              <div class="container">
                <h1 class="display-4">
                  Team Profile
                </h1>
              </div>
            </div>
            <div>
              <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${response.employeeName}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${response.employeeType}</h6>
                  <p class="card-text">ID: ${response.employeeID}</p>
                  <p class="card-text">Office #: ${response.managerOffice}</p>
                  <p class="card-text">School: ${response.internSchool}</p>
                  <a href="${response.employeeEmail}" class="card-link">${response.employeeEmail}</a>
                  <a href="${response.engineerGitHub}" class="card-link">${response.engineerGitHub}</a>
                </div>
              </div>
            </div>
      </body>
      </html>
        `, (err) =>
        err ? console.error(err) : console.log('HTML file created')
      );
 });
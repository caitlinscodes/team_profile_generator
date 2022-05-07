// Global Requirements
const inquirer = require('inquirer');
const jest = require('jest');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');

const managers = [];
const engineers = [];
const interns = [];

// New Team Member Prompts
const promptNewManager = () => {
  return inquirer.prompt ([
    {
      type: 'input',
      message: 'What is the new manager name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is the new manager Id?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is the new manager email?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is the new manager office number?',
      name: 'officeNumber',
    },
  ]).then(response => {
    console.log(response);
    const newManager = new Manager(response.name, response.id, response.email, response.officeNumber)
    managers.push(newManager);
    promptNewEngineer();
  })
}

const promptNewEngineer = () => {
  return inquirer.prompt ([
    {
      type: 'input',
      message: 'What is the new engineer name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is the new engineer Id?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is the new engineer email?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is the new engineer github URL?',
      name: 'github',
    },
  ]).then(response => {
    console.log(response);
    const newEngineer = new Engineer(response.name, response.id, response.email, response.github)
    engineers.push(newEngineer);
    promptNewIntern();
  })
}


const promptNewIntern = () => {
  return inquirer.prompt ([
    {
      type: 'input',
      message: 'What is the new inter name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is the new intern Id?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is the new intern email?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is the new intern school?',
      name: 'school',
    },
  ]).then(response => {
    console.log(response);
    const newIntern = new Intern(response.name, response.id, response.email, response.school)
    interns.push(newIntern);
    writeHTML();
  })
}

// Write HTML file
const writeHTML = (response) => {
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
                  <h5 class="card-title">${managers.name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                  <p class="card-text">ID: ${managers.id}</p>
                  <p class="card-text">Office #: ${manager.officeNumber}</p>
                  <a href="mailto:${managers.email}" class="card-link">${managers.email}</a>
                </div>
              </div>
              <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${engineers.name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
                  <p class="card-text">ID: ${engineers.id}</p>
                  <a href="mailto:${engineers.email}" class="card-link">${engineers.email}</a>
                  <a href="${engineers.github}" class="card-link">${engineers.github}</a>
                </div>
              </div>
              <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${interns.name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
                  <p class="card-text">ID: ${interns.id}</p>
                  <p class="card-text">School: ${interns.school}</p>
                  <a href="mailto:${interns.email}" class="card-link">${interns.email}</a>
                </div>
              </div>
            </div>
      </body>
      </html>
        `, (err) =>
        err ? console.error(err) : console.log('HTML file created')
      );
  };

  promptNewManager()
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
// TODO: Create a function to write HTML and CSS files
  .then((response) => {
    fs.writeFile('style.css',
    `
    :root {
      --hf: #68a691;
      --box: #bfd3c1;
      --bg: #ffe5d4;
      --txt: #efc7c2;
    }
    
    body {
      font-family: optima;
      font-size: 20px;
      background-color: var(--bg);
      padding: 10px;
    }
    
    h1, h2 {
      font-family: optima;
    }
    
    /* Header */
    header {
      background-color: var(--hf);
      display: flex;
      padding: 20px;
    }
    
    header img {
      border-radius: 15px;
      position: relative;
    }
    
    .header-info {
      width: 100%;
      text-align: center;
    }
    
    header h1 {
      text-align: center;
    }
    
    nav ul {
      list-style-type: none;
    }
    
    /* Pulled from pseudo classes assignment */
     div.samples ul {
      display: none;
    }
    
    div.samples:hover {
      cursor: pointer;
    }
    
    div.samples:hover ul {
      display: block;
    }
    
    /* Main Body */
    .flex-container {
      display: flex;
    }
    
    main {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 20px;
    }
    
    section {
      position: relative;
      background-color: var(--box);
      border: 3px solid var(--hf);
      margin-bottom: 10px;
      padding: 20px;
      width: 95%;
    }
    
    section.design, section.back-end {
      text-align: right;
    }
    
    section.design img, section.back-end img {
      border-radius: 15px;
      display: inline-block;
      margin: 20px;
      position: relative;
      float: left;
    }
    
    section.front-end {
      text-align: left;
    }
    
    section.front-end img {
      border-radius: 15px;
      display: inline-block;
      margin: 20px;
      position: relative;
      float: right;
    }
    
    /* Aside Body */
    aside {
      flex: 1 1 auto;
      background-color: var(--box);
      border: 3px solid var(--hf);
      text-align: center;
      padding: 20px;
      margin: 20px;
      width: 25%;
      height: 100%;
    }
    
    aside img {
      border-radius: 15px;
    }
    
    aside ul li {
      display: block;
    }
    
    /* Footer */
    footer {
      padding: 50px;
      width: 100%;
      display: block;
      background-color: var(--hf);
      text-align: center;
    }
    
    footer img {
      border-radius: 15px;
    }
    
    /* MediaQuery */
    @media screen and (max-width: 768px) {
      aside {
        display: none;
      }
    }
      `, (err) =>
      err ? console.error(err) : console.log('CSS file created')
    );
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
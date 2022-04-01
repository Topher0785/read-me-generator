// Imported required packages
const hotdog = require('fs');
const direction = require('path');
const questions = require('inquirer');
const createMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const huh = [
    {
      type: 'input',
      name: 'github',
      message: 'Whats yo GITHUB?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Whats yo EMAIL?'
    },
    {
      type: 'input',
      name: 'title',
      message: 'Do you have a project name'
    },
    {
      type: 'input',
      name: 'description',
      message: 'So what does this thing do?'
    },
    {
      type: 'list',
      name: 'license',
      message: 'What kind of license should your project have?',
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How are the dependencies installed?',
      default: 'npm i'
    },
    {
      type: 'input',
      name: 'test',
      message: 'How are we running this test?',
      default: 'npm test'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Anything extra needed to know for this REPO?'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'If you contribute to repo here are special instructions...'
    }
  ];
  
  // Function to write README file using the user input
  function writeToFile(fileName, data) {
    return hotdog.writeFileSync(direction.join(process.cwd(), fileName), data);
  }
  
  // Function to initialize app
  function init() {
    questions.prompt(huh).then(inquirerResponses => {
      console.log('Generating README...');
      writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
    });
  }
  
  init();
  
const inquirer = require('inquirer')

/* eslint-disable no-promise-executor-return */

const questions = [
  {
    type: 'list',
    name: 'first_question',
    message: 'What type of shape would you like to create?',
    choices: ['circle', 'Square', 'Triangle'],
    async validate() {
      await new Promise((r) => setTimeout(r, 3000));
      return true;
    },
    async filter(answer) {
      await new Promise((r) => setTimeout(r, 3000));
      return `filtered${answer}`;
    },
    filteringText: 'Filtering your answer...',
    validatingText: 'Validating what you wrote...',
  },
  {
    type: 'input',
    name: 'second_question',
    message: 'what color would you like your shape to be',
    async validate() {
      await new Promise((r) => setTimeout(r, 3000));
      return true;
    },
    async filter(answer) {
      await new Promise((r) => setTimeout(r, 3000));
      return `filtered${answer}`;
    },
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(JSON.stringify(answers, null, '  '));
});
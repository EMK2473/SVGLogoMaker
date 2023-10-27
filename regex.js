const inquirer = require('inquirer')

const questions = [
  {
    type: 'input',
    name: 'hexValue',
    message: 'Please enter a hexidecimal value. \r\n 0-9 and A-F accepted',
    validate(input) {
      if (/[0-9a-f]{6}$/i.test(input)) {
        return true;
      }

      throw Error('Please provide a hexidecimal key.');
    },
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(JSON.stringify(answers, null, '  '));
});
const inquirer = require('inquirer')

const questions = [
  {
    type: 'input',
    name: 'hexValue',
    message: 'Please enter a hexidecimal value. \r\n 0-9 and A-F accepted \r\n',
    validate(input) {
      if (/^[0-9a-fA-F]{6}$/.test(input)) {
        return true;
      }

      throw Error('Please provide a hexidecimal key. \r\n It can only be 6 characters \r\n May only contain (0-9, A-F, a-f)');
    },
  },
  {
    type: 'input',
    name: 'hexValue',
    message: 'Please enter a hexidecimal value. \r\n 0-9 and A-F accepted \r\n',
    validate(input) {
      if (/^[0-9a-fA-F]{6}$/.test(input)) {
        return true;
      }

      throw Error('Please provide a hexidecimal key. \r\n It can only be 6 characters \r\n May only contain (0-9, A-F, a-f)');
    },
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(JSON.stringify(answers, null, '  '));
});
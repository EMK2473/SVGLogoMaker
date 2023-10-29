const fs = require(`fs`);
const path = require(`path`);
const inquirer = require(`inquirer`);
const generateObject = require(`./lib/generateObject`);
const questions = [
  {
    type: "list",
    name: "shape",
    message: "Choose a shape",
    choices: ["circle", "square", "triangle"],
  },
  {
    type: "input",
    name: "circleR",
    message: "What is the radius of your circle?",
    when: (answers) => answers.shape === "circle",
    validate(input) {
        if (/^[0-9]{1,3}$/.test(input)) {
          return true;
        }
        throw Error('Please provide a valid radius for your circle. \r\n It can only be a maximum of 3 characters \r\n May only contain (0-9)');
      },
  },{
    type: "input",
    name: "squareW",
    message: "What is the width of your square?",
    when: (answers) => answers.shape === "square",
    validate(input) {
        if (/^[0-9]{1,3}$/.test(input)) {
          return true;
        }
        throw Error('Please provide a valid width for your square. \r\n It can only be a maximum of 3 characters \r\n May only contain (0-9)');
      },
  },{
    type: "input",
    name: "squareL",
    message: "What is the length value of your square?",
    when: (answers) => answers.shape === "square",
    validate(input) {
        if (/^[0-9]{1,3}$/.test(input)) {
          return true;
        }
        throw Error('Please provide a valid length for your square. \r\n It can only be a maximum of 3 characters \r\n May only contain (0-9)');
      },
  },{
    type: "input",
    name: "triB",
    message: "What is the base value of your triangle?",
    when: (answers) => answers.shape === "triangle",
    validate(input) {
        if (/^[0-9]{1,3}$/.test(input)) {
          return true;
        }
        throw Error('Please provide a valid base for your triangle. \r\n It can only be a maximum of 3 characters \r\n May only contain (0-9)');
      },
  },{
    type: "input",
    name: "triH",
    message: "What is the height value of your triangle?",
    when: (answers) => answers.shape === "triangle",
    validate(input) {
        if (/^[0-9]{1,3}$/.test(input)) {
          return true;
        }
  
        throw Error('Please provide a valid height for your triangle. \r\n It can only be a maximum of 3 characters \r\n May only contain (0-9)');
      },
  },
  {
    type: 'input',
    name: 'hexValue',
    message: 'Please enter a hexidecimal value to color your shape. \r\n (0-9, A-F, a-f) accepted \r\n',
    validate(input) {
      if (/^[0-9a-fA-F]{6}$/.test(input)) {
        return true;
      }

      throw Error('Please provide a hexidecimal key. \r\n It can only be 6 characters \r\n May only contain (0-9, A-F, a-f)');
    },
  },{
    type: "input",
    name: "text",
    message: "What is the text value of your shape? Please enter characters. \r\n (A-F, a-f) accepted \r\n'",
    validate(input) {
        if (/^[A-Za-z]{1,3}$/.test(input)) {
          return true;
        }
  
        throw Error('Please provide a valid text input for your shape. \r\n It can only be a maximum of 3 characters \r\n May only contain (A-Z, a-z)');
      },
  },{
    type: 'input',
    name: 'textHexValue',
    message: 'Please enter a hexidecimal value to color your text. \r\n (0-9, A-F, a-f) accepted \r\n',
    validate(input) {
      if (/^[0-9a-fA-F]{6}$/.test(input)) {
        return true;
      }

      throw Error('Please provide a hexidecimal key. \r\n It can only be 6 characters \r\n May only contain (0-9, A-F, a-f)');
    },
}
];
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log(responses);
    console.log(`It Worked!`);
    console.log(`SVG LOGO and file Generated!`);
    writeToFile("./examples/index.js", generateObject({ ...responses }));
  });
}
init();
const fs = require(`fs`);
const path = require(`path`);
const inquirer = require(`inquirer`);
// const generateObject = require(`./utils/generateObject`);
const questions = [
  {
    type: "list",
    name: "shape",
    message: "Choose a shape",
    choices: ["circle", "square", "triangle",],  
    when(answers){
        return answers
        if(circle){
            
        }
     }
},
{
    type: "input",
    name: "circleChoice",
    message: "What is the radius of your circle?",
     when(answers){
        return answers.circle
     }
},
{
    type: "input",
    name: "squareChoice",
    message: "What is the length and width of your square?",
     when(answers){
        return answers.square
     }
},
  {
    type: "input",
    name: "hexValue",
    message: "Enter a hexidecimal value for the shape's color: \r\n Only values between 0-9 and a-f are accepted \r\n",
  },
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log(`SVG LOGO and file Generated!`);
    writeToFile("./dist/README.md", generateObject({ ...responses }));
  });
}
init();
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const questions = require("./lib/Questions/question");
const generateShape = require("./lib/Questions/generateShapeModule");

// append svg to file
function writeToFile(fileName, data) {
  return fs.appendFileSync(path.join(process.cwd(), fileName), data);
};
// run the page on call
function runIt() {
  inquirer.prompt(questions).then((responses) => {
    console.log(responses);
    console.log(`It Worked!`);
    console.log(`SVG LOGO and file Generated!`);
    writeToFile("./examples/logo.svg", generateShape({ ...responses }));
  });
};
// let's go and
runIt();

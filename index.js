const fs = require(`fs`);
const path = require(`path`);
const inquirer = require(`inquirer`);
const { Circle, Square, Triangle } = require('./lib/generateShape.js');
const questions = [
    {
      type: "list",
      name: "shape",
      message: "Choose a shape",
      choices: ["circle", "square", "triangle"],
    },
    //
    //
    //
    // 'circle' prompts
    //
    //
    //
    {
      type: "input",
      name: "circleRadius",
      message: "circle radius\r\n recommended value: 80\r\n",
      when: (answers) => answers.shape === "circle",
      validate: valNumThree,
    },{
        type: "input",
        name: "cx",
        message: "circleX plot point 'cx'\r\n recommended value: 150\r\n",
        when: (answers) => answers.shape === "circle",
        validate: valNumThree,
      },
      {
        type: "input",
        name: "cy",
        message: "circleY plot point 'cy'\r\n recommended value: 100\r\n",
        when: (answers) => answers.shape === "circle",
        validate: valNumThree,
      },
    //
    //
    //
    // 'square' prompts
    //
    //
    //
    {
      type: "input",
      name: "squareW",
      message: "square width\r\n recommended value: 200\r\n",
      when: (answers) => answers.shape === "square",
      validate: valNumThree,
    },{
      type: "input",
      name: "squareL",
      message: "square length\r\n recommended value: 200\r\n",
      when: (answers) => answers.shape === "square",
      validate: valNumThree,
    },{
      type: "input",
      name: "squareXPlot",
      message: "square x plot value\r\n recommended value: 50\r\n",
      when: (answers) => answers.shape === "square",
      validate: valNumThree,
    },{
      type: "input",
      name: "squareYPlot",
      message: "square y plot value\r\n recommended value: 0\r\n",
      when: (answers) => answers.shape === "square",
      validate: valNumThree,
    },        
    //
    //
    //
    // 'triangle' prompts
    //
    //
    //
    {
      type: "input",
      name: "triPoints",
      message: "triangle points (6 required) \r\n format: `x,y x,y x,y`\r\n recommended:`150,18 244,182 56,182`\r\n",
      when: (answers) => answers.shape === "triangle",
      validate(input) {
        if (/^(\d{1,3},\d{1,3} ){2}\d{1,3},\d{1,3}$/.test(input)) {
          return true;
        }
        throw Error('Please provide points (6 required).\r\nrecommended:`150,18 244,182 56,182`\r\nformat: `x,y x,y x,y');
      },
    },
    //
    //
    //
    // 'text' and 'color' prompts
    //
    //
    //
    {
      type: 'input',
      name: 'hexValue',
      message: 'hexidecimal value for shape color. \r\nBlue: #0000FF \r\nGreen: #008000 \r\nYellow: #FFFF00 \r\nOrange: #FFA500 \r\nRed: #FF0000 \r\nPurple: #800080 \r\nPink: #FFC0CB \r\n "#" provided \r\n',
      validate: valNumHex,
    },{
      type: "input",
      name: "text",
      message: "text for logo \r\n example: SVG\r\n",
      validate(input) {
          if (/^[A-Za-z]{1,3}$/.test(input)) {
            return true;
          }
          throw Error('Please provide a valid text input for your shape. \r\n Max 3 characters \r\n May only contain (0-9)');
        },
    },{
      type: 'input',
      name: 'textHexValue',
      message: 'hexidecimal value for text color. \r\nBlue: #0000FF \r\nGreen: #008000 \r\nYellow: #FFFF00 \r\nOrange: #FFA500 \r\nRed: #FF0000 \r\nPurple: #800080 \r\nPink: #FFC0CB\r\n "#" provided \r\n',
      validate: valNumHex,
  },{
    type: 'input',
    name: 'textSize',
    message: 'text size for logo \r\n recommended value: 60\r\n',
    validate: valNumThree,
  },{
    type: 'input',
    name: 'textX',
    message: 'text x plot value \r\n recommended value: 150\r\n',
    validate: valNumThree,
  },{
    type: 'input',
    name: 'textY',
    message: 'text y plot value \r\n recommended value: 125 (circle, square)\r\nrecommended value: 160(triangle)',
    validate: valNumThree,
  },
  //
  //
  //
  // 'svg' prompts
  //
  //
  //
  {
    type: 'input',
    name: 'svgH',
    message: 'SVG logo Height value. \r\n recommended value: 200 \r\n',
    validate: valNumThree,
  },{
    type: 'input',
    name: 'svgW',
    message: 'SVG logo Width value. \r\n recommended value: 300 \r\n',
    validate: valNumThree
  }
  ];

  function valNumThree(input){
    if (/^[0-9]{1,3}$/.test(input)) {
      return true;
    }// 3 numbers max else error
    throw Error('Please provide a input. \r\n Max 3 digits \r\n (0-9) Only');
  }

  function valNumHex(input) {
    if (/^[0-9a-fA-F]{6}$/.test(input)) {
      return true;
    }// must be hex values else error
    throw Error('Please provide a hexidecimal key. \r\n Max 6 characters \r\n Only (0-9, A-F, a-f)');
  }

function generateShape(responses) {
    let shape;
    switch (responses.shape) {
        case 'circle':
          shape = new Circle(
            responses.hexValue, 
            responses.text,
            responses.textHexValue, 
            responses.textSize,
            responses.circleRadius, 
            responses.svgW,
            responses.svgH,
            responses.cx,
            responses.cy,
            responses.textX,
            responses.textY,
          );
          break;
      case 'square':
        shape = new Square(
            responses.hexValue,
            responses.text, 
            responses.textHexValue, 
            responses.textSize, 
            responses.squareW, 
            responses.squareL,
            responses.svgW,
            responses.svgH,
            responses.textX,
            responses.textY,
            responses.squareXPlot,
            responses.squareYPlot,
        );
        break;
        case 'triangle':
            shape = new Triangle(
              responses.hexValue, 
              responses.text, 
              responses.textHexValue, 
              responses.textSize, 
              responses.svgW,
              responses.svgH,
              responses.triPoints,
              responses.textX,
              responses.textY,
            );
            break;
      default:
        return null;
    }
    const svgCode = shape.generateShape();
    return svgCode;
  }
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function runIt() {
  inquirer.prompt(questions).then((responses) => {
    console.log(responses);
    console.log(`It Worked!`);
    console.log(`SVG LOGO and file Generated!`);
    writeToFile("./examples/logo.svg", generateShape({ ...responses }));
  });
}

runIt();





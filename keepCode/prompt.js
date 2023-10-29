const fs = require(`fs`);
const path = require(`path`);
const inquirer = require(`inquirer`);
const { Circle, Square, Triangle } = require('./generateShape.js');
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
      message: "circle radius\r\n recommended value: 80\r\n (0-9){1,3} accepted\r\n",
      when: (answers) => answers.shape === "circle",
      validate(input) {
          if (/^[0-9]{1,3}$/.test(input)) {
            return true;
          }
          throw Error('Please provide a valid radius for your circle. \r\n Max 3 characters \r\n May only contain (0-9)');
        },
    },{
        type: "input",
        name: "cx",
        message: "circleX plot point 'cx'\r\n recommended value: 150\r\n (0-9){1,3} accepted\r\n",
        when: (answers) => answers.shape === "circle",
        validate(input) {
            if (/^[0-9]{1,3}$/.test(input)) {
              return true;
            }
            throw Error('Please provide a valid radius for your circle. \r\n Max 3 characters \r\n May only contain (0-9)');
          },
      },
      {
        type: "input",
        name: "cy",
        message: "circleY plot point 'cy'\r\n recommended value: 100\r\n (0-9){1,3} accepted\r\n",
        when: (answers) => answers.shape === "circle",
        validate(input) {
            if (/^[0-9]{1,3}$/.test(input)) {
              return true;
            }
            throw Error('Please provide a valid radius for your circle. \r\n Max 3 characters \r\n May only contain (0-9)');
          },
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
      message: "square width\r\n recommended value: 200\r\n (0-9){1,3} accepted\r\n",
      when: (answers) => answers.shape === "square",
      validate(input) {
          if (/^[0-9]{1,3}$/.test(input)) {
            return true;
          }
          throw Error('Please provide a valid width for your square. \r\n Max 3 characters \r\n May only contain (0-9)');
        },
    },{
      type: "input",
      name: "squareL",
      message: "square length\r\n recommended value: 200\r\n (0-9){1,3} accepted\r\n",
      when: (answers) => answers.shape === "square",
      validate(input) {
          if (/^[0-9]{1,3}$/.test(input)) {
            return true;
          }
          throw Error('Please provide a valid length for your square. \r\n Max 3 characters \r\n May only contain (0-9)');
        },
    },{
      type: "input",
      name: "squareXPlot",
      message: "square x plot value\r\n recommended value: 50\r\n (0-9){1,3} accepted\r\n",
      when: (answers) => answers.shape === "square",
      validate(input) {
          if (/^[0-9]{1,3}$/.test(input)) {
            return true;
          }
          throw Error('Please provide a valid x plot for your square. \r\n Max 3 characters \r\n May only contain (0-9)');
        },
    },{
      type: "input",
      name: "squareYPlot",
      message: "square y plot value\r\n recommended value: 0\r\n (0-9){1,3} accepted\r\n",
      when: (answers) => answers.shape === "square",
      validate(input) {
          if (/^[0-9]{1,3}$/.test(input)) {
            return true;
          }
          throw Error('Please provide a valid y plot for your square. \r\n Max 3 characters \r\n May only contain (0-9)');
        },
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
      name: "triA",
      message: "triangle area \r\n (0-9){1,3} accepted \r\n",
      when: (answers) => answers.shape === "triangle",
      validate(input) {
          if (/^[0-9]{1,3}$/.test(input)) {
            return true;
          }
          throw Error('Please provide a valid base for your triangle. \r\n Max 3 characters \r\n May only contain (0-9)');
        },
    },{
      type: "input",
      name: "triSL",
      message: "triangle side length \r\n (0-9){1,3} accepted \r\n",
      when: (answers) => answers.shape === "triangle",
      validate(input) {
          if (/^[0-9]{1,3}$/.test(input)) {
            return true;
          }
          throw Error('Please provide a valid side_length for your triangle. \r\n Max 3 characters \r\n May only contain (0-9)');
        },
    },{
      type: "input",
      name: "triB",
      message: "triangle base value \r\n (0-9){1,3} accepted\r\n",
      when: (answers) => answers.shape === "triangle",
      validate(input) {
          if (/^[0-9]{1,3}$/.test(input)) {
            return true;
          }
          throw Error('Please provide a valid base for your triangle. \r\n Max 3 characters \r\n May only contain (0-9)');
        },
    },{
      type: 'input',
      name: 'hexValue',
      message: 'hexidecimal value for shape color. \r\n example: #0f1f2f \r\n "#" provided \r\n',
      validate(input) {
        if (/^[0-9a-fA-F]{6}$/.test(input)) {
          return true;
        }
        throw Error('Please provide a hexidecimal key. \r\n Max 6 characters \r\n May only contain (0-9, A-F, a-f)');
      },
    },
    //
    //
    //
    // 'text' prompts
    //
    //
    //
    {
      type: "input",
      name: "text",
      message: "text for logo \r\n example: SVG\r\n (A-F, a-f){1,3} accepted \r\n'",
      validate(input) {
          if (/^[A-Za-z]{1,3}$/.test(input)) {
            return true;
          }
          throw Error('Please provide a valid text input for your shape. \r\n Max 3 characters \r\n May only contain (0-9)');
        },
    },{
      type: 'input',
      name: 'textHexValue',
      message: 'hexidecimal value for text color. \r\n example: #0f1f2f\r\n "#" provided \r\n',
      validate(input) {
        if (/^[0-9a-fA-F]{6}$/.test(input)) {
          return true;
        }
        throw Error('Please provide a hexidecimal key. \r\n May only contain (0-9, A-F, a-f) accepted\r\n');
      },
  },{
    type: 'input',
    name: 'textSize',
    message: 'text size for logo \r\n recommended value: 60\r\n (0-9){1,3} accepted \r\n',
    validate(input) {
      if (/^[0-9]{1,3}$/.test(input)) {
        return true;
      }
      throw Error('Please provide a text size value. \r\n Max 3 characters \r\n May only contain (0-9)');
    },
  },{
    type: 'input',
    name: 'textX',
    message: 'text x plot value \r\n recommended value: 150\r\n (0-9){1,3} accepted \r\n',
    validate(input) {
      if (/^[0-9]{1,3}$/.test(input)) {
        return true;
      }
      throw Error('Please provide a text size value. \r\n Max 3 characters \r\n May only contain (0-9)');
    },
  },{
    type: 'input',
    name: 'textY',
    message: 'text y plot value \r\n recommended value: 125\r\n (0-9){1,3} accepted \r\n',
    validate(input) {
      if (/^[0-9]{1,3}$/.test(input)) {
        return true;
      }
      throw Error('Please provide a text size value. \r\n Max 3 characters \r\n May only contain (0-9)');
    },
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
    message: 'SVG logo Height value. \r\n recommended value: 200 \r\n (0-9) accepted \r\n',
    validate(input) {
      if (/^[0-9]{1,3}$/.test(input)) {
        return true;
      }
      throw Error('Please provide a text size value. \r\n Max 3 characters \r\n May only contain (0-9)');
    },
  },{
    type: 'input',
    name: 'svgW',
    message: 'SVG logo Width value. \r\n recommended value: 300 \r\n (0-9) accepted \r\n',
    validate(input) {
      if (/^[0-9]{1,3}$/.test(input)) {
        return true;
      }
      throw Error('Please provide a text size value. \r\n Max 3 characters \r\n May only contain (0-9)');
    },
  }
  ];
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
              responses.triB, 
              responses.triH,
              responses.svgW,
              responses.svgH,
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
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log(responses);
    console.log(`It Worked!`);
    console.log(`SVG LOGO and file Generated!`);
    writeToFile("./shape.SVG", generateShape({ ...responses }));
  });
}
init();
const regex = require('./validation');
const questions = [
  {
    type: "list",
    name: "shape",
    message: "Choose a shape",
    choices: ["circle", "square", "triangle"],
  },
  //
  // 'circle' prompts
  //
  {
    type: "input",
    name: "circleRadius",
    message: "circle radius\r\n recommended value: 80\r\n",
    when: (answers) => answers.shape === "circle",
    validate: regex.valInput3Nums,
  },
  {
    type: "input",
    name: "cx",
    message: "circleX plot point 'cx'\r\n recommended value: 150\r\n",
    when: (answers) => answers.shape === "circle",
    validate: regex.valInput3Nums,
  },
  {
    type: "input",
    name: "cy",
    message: "circleY plot point 'cy'\r\n recommended value: 100\r\n",
    when: (answers) => answers.shape === "circle",
    validate: regex.valInput3Nums,
  },
  //
  // 'square' prompts
  //
  {
    type: "input",
    name: "squareW",
    message: "square width\r\n recommended value: 200\r\n",
    when: (answers) => answers.shape === "square",
    validate: regex.valInput3Nums,
  },
  {
    type: "input",
    name: "squareL",
    message: "square length\r\n recommended value: 200\r\n",
    when: (answers) => answers.shape === "square",
    validate: regex.valInput3Nums,
  },
  {
    type: "input",
    name: "squareXPlot",
    message: "square x plot value\r\n recommended value: 50\r\n",
    when: (answers) => answers.shape === "square",
    validate: regex.valInput3Nums,
  },
  {
    type: "input",
    name: "squareYPlot",
    message: "square y plot value\r\n recommended value: 0\r\n",
    when: (answers) => answers.shape === "square",
    validate: regex.valInput3Nums,
  },
  //
  // 'triangle' prompts
  //
  {
    type: "input",
    name: "triPoints",
    message:
      "triangle points (6 required) \r\n format: `x,y x,y x,y`\r\n recommended:`150,18 244,182 56,182`\r\n",
    when: (answers) => answers.shape === "triangle",
    validate: regex.valPoints,
  },
  //
  // 'text' and 'color' prompts
  //
  {
    type: "input",
    name: "hexValue",
    message:
      'hexidecimal value for shape color. \r\nBlue: #0000FF \r\nGreen: #008000 \r\nYellow: #FFFF00 \r\nOrange: #FFA500 \r\nRed: #FF0000 \r\nPurple: #800080 \r\nPink: #FFC0CB \r\n "#" provided \r\n',
    validate: regex.valHexNum,
  },
  {
    type: "input",
    name: "text",
    message: "text for logo \r\n example: SVG\r\n",
    validate: regex.valLetter3,
  },
  {
    type: "input",
    name: "textHexValue",
    message:
      'hexidecimal value for text color. \r\nBlue: #0000FF \r\nGreen: #008000 \r\nYellow: #FFFF00 \r\nOrange: #FFA500 \r\nRed: #FF0000 \r\nPurple: #800080 \r\nPink: #FFC0CB\r\n "#" provided \r\n',
    validate: regex.valHexNum,
  },
  {
    type: "input",
    name: "textSize",
    message: "text size for logo \r\n recommended value: 60\r\n",
    validate: regex.valInput3Nums,
  },
  {
    type: "input",
    name: "textX",
    message: "text x plot value \r\n recommended value: 150\r\n",
    validate: regex.valInput3Nums,
  },
  {
    type: "input",
    name: "textY",
    message:
      "text y plot value \r\n recommended value: 125 (circle, square)\r\nrecommended value: 160(triangle)",
      validate: regex.valInput3Nums,
  },
  //
  // 'svg' prompts
  //
  {
    type: "input",
    name: "svgH",
    message: "SVG logo Height value. \r\n recommended value: 200 \r\n",
    validate: regex.valInput3Nums,
  },
  {
    type: "input",
    name: "svgW",
    message: "SVG logo Width value. \r\n recommended value: 300 \r\n",
    validate: regex.valInput3Nums,
  },
];
  module.exports = questions;
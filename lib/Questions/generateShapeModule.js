const { Circle, Square, Triangle } = require("../generateShape");
// object.assign research and organize switch case
function generateShape(responses) {
  let shape;
  switch (responses.shape) {
    case "circle":
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
        responses.textY
      );
      break;
    case "square":
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
        responses.squareYPlot
      );
      break;
    case "triangle":
      shape = new Triangle(
        responses.hexValue,
        responses.text,
        responses.textHexValue,
        responses.textSize,
        responses.svgW,
        responses.svgH,
        responses.triPoints,
        responses.textX,
        responses.textY
      );
      break;
    default:
      return null;
  }
  const svgCode = shape.generateShape();
  return svgCode;
}
module.exports = generateShape;

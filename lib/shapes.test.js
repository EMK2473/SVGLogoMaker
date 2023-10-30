// // Constructor Arithmetic is imported.
// const { Circle } = require('./generateShape.js');

// // A testing suite for Arithmetic is created.
// describe('generateShape', () => {
//   // A test is created to check that sum does in fact return the two numbers added together.
//   describe('circle', () => {
//     it('should dynamically create a circle, with color, text, and text color.', () => {
//       const total = `
//       <svg width="${this.svgW}" height="${this.svgH}" version="1.1" xmlns="http://www.w3.org/2000/svg">
//         <circle cx="${this.cx}" cy="${this.cy}" r="${this.circleRadius}" fill="#${this.color}"></circle>
//         <text x="${this.textX}" y="${this.textY}" font-size="${this.textSize}" text-anchor="middle" fill="#${this.textColor}">${this.text}</text>
//       </svg>
//     `;
//       const generateShape = new Circle;
//       expect(generateShape.generateShape(Circle)).toEqual(`
//       <svg width="${this.svgW}" height="${this.svgH}" version="1.1" xmlns="http://www.w3.org/2000/svg">
//         <circle cx="${this.cx}" cy="${this.cy}" r="${this.circleRadius}" fill="#${this.color}"></circle>
//         <text x="${this.textX}" y="${this.textY}" font-size="${this.textSize}" text-anchor="middle" fill="#${this.textColor}">${this.text}</text>
//       </svg>
//     `);
//     });
//   });
// });

// Constructor Circle is imported.
// const { Circle } = require('./generateShape.js');

// // A testing suite for Circle is created.
// describe('generateShape', () => {
//   // A test is created to check that generateShape does in fact return the expected SVG code.
//   describe('circle', () => {
//     it('should dynamically create a circle with color, text, and text color.', () => {
//       const svgW = 300; // Replace with your desired value
//       const svgH = 200; // Replace with your desired value
//       const cx = 150; // Replace with your desired value
//       const cy = 100; // Replace with your desired value
//       const circleRadius = 80; // Replace with your desired value
//       const color = 'FF0000'; // Replace with your desired color value
//       const textX = 150; // Replace with your desired value
//       const textY = 125; // Replace with your desired value
//       const textSize = 20; // Replace with your desired value
//       const textColor = '0000FF'; // Replace with your desired color value
//       const text = 'Sample Text'; // Replace with your desired text

//       const expectedSVG = `
//       <svg width="${svgW}" height="${svgH}" version="1.1" xmlns="http://www.w3.org/2000/svg">
//         <circle cx="${cx}" cy="${cy}" r="${circleRadius}" fill="#${color}"></circle>
//         <text x="${textX}" y="${textY}" font-size="${textSize}" text-anchor="middle" fill="#${textColor}">${text}</text>
//       </svg>
//       `;

//       const generateShape = new Circle(color, text, textColor, textSize, circleRadius, svgW, svgH, cy, cx, textX, textY,);
//       const generatedSVG = generateShape.generateShape();

//       expect(generatedSVG).toEqual(expectedSVG);
//     });
//   });
// });

// const { Circle } = require('./generateShape.js');

// // A testing suite for Circle is created.
// describe('generateShape', () => {
//   // A test is created to check that generateShape does in fact return the expected SVG code.
//   describe('circle', () => {
//     it('should dynamically create a circle with color, text, and text color.', () => {
//       const svgW = 300; // Replace with your desired value
//       const svgH = 200; // Replace with your desired value
//       const cx = 150; // Replace with your desired value
//       const cy = 100; // Replace with your desired value
//       const circleRadius = 80; // Replace with your desired value
//       const color = 'FF0000'; // Replace with your desired color value
//       const textX = 150; // Replace with your desired value
//       const textY = 125; // Replace with your desired value
//       const textSize = 20; // Replace with your desired value
//       const textColor = '0000FF'; // Replace with your desired color value
//       const text = 'Sample Text'; // Replace with your desired text

//       const expectedSVG = `
//         <svg width="${svgW}" height="${svgH}" version="1.1" xmlns="http://www.w3.org/2000/svg">
//         <circle cx="${cx}" cy="${cy}" r="${circleRadius}" fill="#${color}"></circle>
//         <text x="${textX}" y="${textY}" font-size="${textSize}" text-anchor="middle" fill="#${textColor}">${text}</text>
//         </svg>
//     `;
//       const generateShape = new Circle(color, text, textColor, textSize, circleRadius, svgW, svgH, cx, cy, textX, textY,);
//       const generatedSVG = generateShape.generateShape();

//       expect(generatedSVG).toEqual(expectedSVG);
//     });
//   });
// });

// const { Circle, Square, Triangle } = require('./generateShape');
// const generateShape = require('./main');

// describe('generateShape', () => {
//     it('should generate SVG code for a circle', () => {
//         const responses = {
//             shape: 'circle',
//             hexValue: 'FF0000',
//             text: 'Sample Text',
//             textHexValue: '0000FF',
//             textSize: '20',
//             circleRadius: '80',
//             svgW: '300',
//             svgH: '200',
//             cx: '150',
//             cy: '100',
//             textX: '150',
//             textY: '125',
//         };

//         const svgCode = generateShape(responses);
//         const expectedSVG = `
//         <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
//         <circle cx="150" cy="100" r="80" fill="#FF0000"></circle>
//         <text x="150" y="125" font-size="20" text-anchor="middle" fill="#0000FF">Sample Text</text>
//         </svg>
//         `;
//         // Assert that the generated SVG code matches the expected SVG code
//         expect(svgCode).toEqual(expectedSVG);
//     });

//     // Add more test cases for other shapes (Square, Triangle) if needed
// });
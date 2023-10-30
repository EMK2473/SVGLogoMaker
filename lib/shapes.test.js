const { Circle, Square, Triangle } = require('./generateShape');
describe('Shape Classes', () => {
  describe('Circle', () => {
    test('generateShape() should return a valid SVG code for a circle', () => {
      const circle = new Circle('FF0000', 'SVG', '0000FF', 60, 80, 300, 200, 150, 100, 150, 125);
      const svgCode = circle.generateShape();
      expect(svgCode).toContain('<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">' 
      && '<circle cx="150" cy="100" r="80" fill="#FF0000"></circle>' 
      && '<text x="150" y="125" font-size="60" text-anchor="middle" fill="#0000FF">SVG</text>');
    });
  });
});
describe('Square', () => {
    test('generateShape() should return a valid SVG code for a square', () => {
      const square = new Square('00FF00', 'Square', 'FF0000', 50, 100, 100, 200, 200, 150, 150, 0, 0);
      const svgCode = square.generateShape();
      expect(svgCode).toContain('<svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">' 
      && '<rect x="0" y="0" width="100" height="100" fill="#00FF00" stroke="#00FF00" stroke-width="5"/>' 
      && '<text x="150" y="150" font-size="50" text-anchor="middle" fill="#FF0000">Square</text>');
    });
  });
  describe('Triangle', () => {
    test('generateShape() should return a valid SVG code for a triangle', () => {
    const triangle = new Triangle('FFFF00', 'Triangle', '0000FF', 40, 250, 200, "100,100 100,200 200,200", 150, 125);
      const svgCode = triangle.generateShape();
      expect(svgCode).toContain('<svg width="250" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">' 
      && '<polygon points="100,100 100,200 200,200" fill="#FFFF00" stroke="#FFFF00" stroke-width="5"/>' 
      && '<text x="150" y="125" font-size="40" text-anchor="middle" fill="#0000FF">Triangle</text>');
    });
  });
